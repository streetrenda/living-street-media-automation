import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { XMLParser } from "fast-xml-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE = path.resolve(__dirname, "..");
const DATA_DIR = path.join(BASE, "data");
const SOURCES_FILE = path.join(DATA_DIR, "sources.json");
const QUEUE_FILE = path.join(DATA_DIR, "queue.json");
const PUBLIC_QUEUE_FILE = path.resolve(BASE, "..", "public", "review-queue.json");

const USER_AGENT = "LivingStreetMediaBot/1.0 (+review queue intake)";
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  trimValues: true,
  textNodeName: "text",
  cdataPropName: "cdata"
});

const TOPIC_KEYWORDS = {
  politics_public_life: [
    "trump", "senate", "house", "campaign", "president", "governor",
    "election", "white house", "congress", "administration", "republican", "democrat"
  ],
  law_courts: [
    "court", "supreme court", "judge", "justice", "doj", "constitutional",
    "ruling", "lawsuit", "legal", "indictment", "appeal", "attorney general"
  ],
  labor_economics: [
    "worker", "workers", "wage", "wages", "union", "labor", "economy",
    "jobs", "benefits", "corporate", "inflation", "housing"
  ],
  media_narrative: [
    "media", "narrative", "framing", "misinformation", "platform",
    "viral", "headline", "disinformation"
  ],
  religion_public_power: [
    "religion", "religious", "faith", "church", "christian",
    "moral authority", "prayer", "sectarian"
  ]
};

const statusOrder = {
  published: 0,
  drafted: 1,
  reviewing: 2,
  saved: 3,
  new: 4,
  skipped: 5
};

async function loadJson(file) {
  const raw = await fs.readFile(file, "utf8");
  return JSON.parse(raw);
}

async function saveJson(file, data) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function generateId(url) {
  return crypto.createHash("sha1").update(url).digest("hex").slice(0, 12);
}

function stripHtml(text) {
  return String(text || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchXml(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      "Accept": "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
    }
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return await res.text();
}

function ensureArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function parseRssItems(xmlText) {
  const parsed = parser.parse(xmlText);

  if (parsed?.rss?.channel) {
    const channel = parsed.rss.channel;
    return ensureArray(channel.item).map((item) => ({
      headline: String(item?.title || "").trim(),
      url: String(item?.link || "").trim(),
      published_at: String(item?.pubDate || "").trim(),
      summary: stripHtml(item?.description || item?.content || "")
    }));
  }

  if (parsed?.feed) {
    return ensureArray(parsed.feed.entry).map((entry) => {
      let link = "";
      const links = ensureArray(entry?.link);
      for (const node of links) {
        if (typeof node === "string" && node.trim()) {
          link = node.trim();
          break;
        }
        if (node?.href) {
          const rel = node.rel || "alternate";
          if (rel === "alternate" || rel === "") {
            link = String(node.href).trim();
            break;
          }
        }
      }

      return {
        headline: String(entry?.title?.text || entry?.title || "").trim(),
        url: link,
        published_at: String(entry?.updated || entry?.published || "").trim(),
        summary: stripHtml(entry?.summary?.text || entry?.summary || entry?.content?.text || entry?.content || "")
      };
    });
  }

  return [];
}

function topicAndScore(text) {
  const t = String(text || "").toLowerCase();
  const reasons = [];
  let bestTopic = "media_narrative";
  let bestHits = -1;
  let score = 0;

  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    const hits = keywords.reduce((n, kw) => n + (t.includes(kw) ? 1 : 0), 0);
    if (hits > bestHits) {
      bestHits = hits;
      bestTopic = topic;
    }
  }

  const hitCount = (topic) => TOPIC_KEYWORDS[topic].reduce((n, kw) => n + (t.includes(kw) ? 1 : 0), 0);

  const politicsHits = hitCount("politics_public_life");
  const lawHits = hitCount("law_courts");
  const laborHits = hitCount("labor_economics");
  const mediaHits = hitCount("media_narrative");
  const religionHits = hitCount("religion_public_power");

  if (politicsHits) {
    score += 20 + Math.min(politicsHits * 2, 8);
    reasons.push("politics/public life");
  }
  if (lawHits) {
    score += 18 + Math.min(lawHits * 2, 8);
    reasons.push("law/courts");
  }
  if (laborHits) {
    score += 16 + Math.min(laborHits * 2, 8);
    reasons.push("labor/economics");
  }
  if (mediaHits) {
    score += 12 + Math.min(mediaHits * 2, 6);
    reasons.push("media/narrative influence");
  }
  if (religionHits) {
    score += 14 + Math.min(religionHits * 2, 6);
    reasons.push("religion/public power");
  }

  if (["outrage", "fear", "weaponization", "alarm", "panic", "fury", "chaos"].some((term) => t.includes(term))) {
    score += 10;
    reasons.push("high narrative heat");
  }

  if (["unclear", "disputed", "concern", "questions", "controversy", "probe"].some((term) => t.includes(term))) {
    score += 8;
    reasons.push("evidence instability");
  }

  if (["workers", "families", "rights", "public", "citizens", "voters"].some((term) => t.includes(term))) {
    score += 8;
    reasons.push("human/public impact");
  }

  score = Math.min(score, 100);
  return {
    topic: bestTopic,
    score,
    whyFlagged: [...new Set(reasons)].join(", ") || "general relevance"
  };
}

async function pullCandidates() {
  const config = await loadJson(SOURCES_FILE);
  const candidates = [];
  const seen = new Set();

  for (const source of config.sources || []) {
    if (source.enabled === false || !source.feed_url) continue;

    try {
      const xml = await fetchXml(source.feed_url);
      const items = parseRssItems(xml).slice(0, 15);

      for (const item of items) {
        const url = String(item.url || "").trim();
        const headline = String(item.headline || "").trim();
        if (!url || !headline || seen.has(url)) continue;

        const combined = `${headline} ${item.summary || ""}`;
        const { topic, score, whyFlagged } = topicAndScore(combined);
        if (score < 18) continue;

        seen.add(url);
        candidates.push({
          id: generateId(url),
          headline,
          source_name: source.name,
          source_type: source.type,
          url,
          published_at: item.published_at || "",
          pulled_at: new Date().toISOString(),
          topic_group: topic,
          candidate_score: score,
          why_flagged: whyFlagged,
          primary_source_available: source.type === "official_source",
          status: "new",
          editor_notes: ""
        });
      }
    } catch (err) {
      console.error(`Skipping ${source.name}: ${err.message}`);
    }
  }

  const maxCandidates = Number((await loadJson(SOURCES_FILE)).max_candidates_per_cycle || 10);
  return candidates.sort((a, b) => b.candidate_score - a.candidate_score).slice(0, maxCandidates);
}

function mergeQueue(queue, candidates) {
  const existingIds = new Set((queue.items || []).map((item) => item.id));

  for (const item of candidates) {
    if (!existingIds.has(item.id)) {
      queue.items.push(item);
    }
  }

  queue.items.sort((a, b) => {
    const aOrder = statusOrder[a.status] ?? 99;
    const bOrder = statusOrder[b.status] ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    if ((b.candidate_score || 0) !== (a.candidate_score || 0)) {
      return (b.candidate_score || 0) - (a.candidate_score || 0);
    }
    return String(a.headline || "").localeCompare(String(b.headline || ""));
  });

  return queue;
}

async function main() {
  const queue = await loadJson(QUEUE_FILE);
  const candidates = await pullCandidates();
  const updated = mergeQueue(queue, candidates);
  updated.last_run = new Date().toISOString();
  await saveJson(QUEUE_FILE, updated);
  await saveJson(PUBLIC_QUEUE_FILE, updated);
  console.log(`Queue updated. Candidates processed: ${candidates.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

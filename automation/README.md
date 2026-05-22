# Living Street Media Automation Foundation v3

This version converts the 72-hour intake automation from Python to Node.js.

## Included
- `automation/data/sources.json`
- `automation/data/queue.json`
- `automation/scripts/fetch_stories.mjs`
- `automation/scripts/run_fetch.sh`

## What changed
- The old Python intake script was removed.
- The new intake script runs in Node.js.
- Queue updates still mirror into `public/review-queue.json` for the site UI.
- `package.json` now includes:
  - `npm run fetch-stories`
  - `npm run fetch-stories-once`

## What it does
- pulls live RSS feed items
- scores candidates by topic and relevance
- saves top candidates into the review queue
- mirrors queue output into the public queue file

## Important note
This is the correct code conversion for a Node-based environment, but it still needs to run in an environment where the source project files exist.
If Hostinger continues deploying only built front-end files into `public_html`, the script itself still needs a runnable location or separate scheduled execution path.

## Manual run
```bash
npm install
npm run fetch-stories
```

## Next step
Confirm the runtime path that can execute the Node script on Hostinger, then attach it to a 72-hour schedule.

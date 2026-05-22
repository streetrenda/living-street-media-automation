import React, { useEffect, useState } from "react";

const shell = (kicker, title, children) => (
  <main className="page-wrap">
    <section className="page-card">
      <div className="kicker">{kicker}</div>
      <h1 className="page-title">{title}</h1>
      {children}
    </section>
  </main>
);

export function StoriesPage() {
  return shell("Original Stories", "The Republic of Double Standards", <>
    <div className="story-entry article-mode">
      <div className="story-meta">Living Street Media • Report • 2026</div>
      <h2 className="story-title article-headline">The Republic of Double Standards</h2>
      <p className="story-subtitle article-deck">A report on the widening distance between public principle and organized power.</p>

      <div className="story-actions">
        <a className="story-button" href="/reports/the-republic-of-double-standards.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
      </div>

      <div className="article-contents">
        <div className="article-contents-title">Contents</div>
        <ol>
          <li>I. A Public Creed, A Private System</li>
          <li>II. Equality as Language, Inequality as Practice</li>
          <li>III. The Court, The Gift, and the Performance of Impartiality</li>
          <li>IV. Religion, Constitutional Language, and the Capture of Moral Authority</li>
          <li>V. Congress, Information, and the Marketplace of Privilege</li>
          <li>VI. Lobbyists, Donors, and the Managed Vocabulary of Influence</li>
          <li>VII. Constitutional Reverence and Selective Application</li>
          <li>VIII. The Final Reckoning</li>
          <li>IX. Coda: The Country Beneath the Language</li>
        </ol>
      </div>

      <article className="article-body">
        <section>
          <h3>I. A Public Creed, A Private System</h3>
          <p>The American republic has long described itself in universal terms. Its official language speaks of equal citizenship, moral seriousness, constitutional restraint, religious liberty, and the dignity of labor. Its ceremonies, campaign speeches, judicial opinions, and patriotic rituals all return to the same core promise: that no citizen stands above the law, that public office is a trust, and that national life is to be governed by principle rather than privilege. It is one of the central claims of the American story.</p>
          <p>Yet the modern structure of power often operates according to a different script. Public institutions speak in the grammar of fairness while functioning through unequal access. Elected officials denounce corruption while cultivating donor classes whose influence is so normalized that it is often described as participation. Judges invoke impartiality while moving within social and financial circles shaped by immense wealth. Religious movements speak of moral renewal while entering political coalitions funded, amplified, and strategically managed by those with material interests to protect. Legislators celebrate working people while living inside a governing system that allows the wealthy to position themselves into advantage simply because of access to that information.</p>
          <p>This is not merely contradiction in the casual sense. It is contradiction as method. The dissonance between word and deed is not incidental to the present order. It is one of the ways the order sustains itself. The language of equality offers legitimacy. The practice of privilege delivers reward. Each requires the other. Without the public creed, the private system would appear too nakedly self-serving. Without the private system, the public creed would demand consequences that the powerful are rarely willing to endure.</p>
          <p>That is the heart of the report: not simply that politicians and justices fail to live up to their words, but that the modern American power structure has become expert at translating inequality into respectable form. The language is democratic. The incentives are oligarchic. The symbolism is often religious. The mechanics are financial. And the citizen standing outside that arrangement is expected to keep believing that the system is neutral, even as the people inside it trade favors, trade narratives, and at times trade securities under conditions that would bring far harsher suspicion to anyone without title, robe, donor network, or committee seat.</p>
          <p>The contradiction is especially corrosive because it is not accidental. It is repeated so often that it begins to function as a governing method. Public officials speak of sacrifice while moving through systems insulated by privilege. Judges speak of constitutional humility while participating in social and financial worlds shaped by extraordinary wealth. Legislators praise labor, family, and the dignity of ordinary Americans while receiving donations, opportunities, and influence from the class most able to bend policy to private ends. The result is not simply hypocrisy as a moral failing. It is hypocrisy as infrastructure.</p>
          <p>In that structure, religion often serves as both language and shield. It provides moral seriousness to political movements that are, in practice, deeply entangled with wealth, donor strategy, media power, and legal activism. The invocation of faith can be sincere at the level of individual belief, but in the arena of institutional politics it often becomes something more functional: a source of legitimacy, a means of coalition-building, a weapon of cultural division, and a way of presenting material power as moral duty. This is how money acquires a halo. This is how influence learns to speak in the voice of righteousness.</p>
          <p>The constitutional danger is not religion itself. The danger lies in the conversion of religious force into state-aligned power while the constitutional language designed to prevent that conversion is narrowed, ignored, or selectively recited. The First Amendment was not written to create a vacuum hostile to belief, nor was it written to authorize the use of public authority as an extension of sectarian ambition. Its architecture was restraint. Its wisdom was distance. It understood that once religion and political power become too comfortably fused, both are corrupted: government becomes holier than it should be, and religion becomes hungrier than it admits.</p>
          <p>That corruption can be seen in the modern alliance between wealthy donors, political operatives, legal networks, media ecosystems, and religious movements that present themselves as defenders of virtue while exercising the oldest instincts of power. The language is one of restoration, morality, and order. The methods are strategic funding, influence campaigns, judicial grooming, electoral discipline, and cultural enforcement. What appears at the surface to be revival often operates beneath as consolidation.</p>
          <p>The same broad pattern governs financial power inside democratic institutions. In theory, lawmakers are public servants entrusted with information for the public good. In practice, they often occupy a zone of extraordinary informational privilege, where legislative timing, committee briefings, geopolitical knowledge, regulatory expectations, and market-moving developments are visible before they become public consequence. That zone may not always produce criminal conduct in the strict statutory sense, but it creates a moral imbalance so glaring that the distinction between legal and illegitimate begins to look like a technical refuge for the well-positioned.</p>
          <p>A citizen without power who traded under comparable conditions would not be discussed in the language of nuance. That person would be scrutinized, investigated, and likely made into an example. The law, when it moves downward, is often stern. When it moves upward, it becomes careful, patient, and philosophical. That difference is one of the oldest lessons in American public life: equality is affirmed at the level of principle and rationed at the level of enforcement.</p>
          <p>This is why the public’s distrust is not a side effect of polarization alone. It is an earned response to a visible order of double standards. The country is repeatedly asked to believe that institutions remain honorable while the people inside them benefit from arrangements unavailable to those they govern. It is asked to believe that gifts do not influence judgment, that donor access does not shape outcomes, that religious mobilization tied to concentrated wealth remains purely moral, that stock trades made in corridors of privileged knowledge are merely coincidences of timing and financial sophistication. At a certain point, denial becomes less plausible than design.</p>
          <p>The modern crisis, then, is not only corruption in the narrow sense. It is the normalization of a public language that says one thing while protecting another. Equality is praised, but access governs. Faith is invoked, but power accumulates. Constitutional principle is celebrated, but selectively applied. Labor is honored rhetorically, while wealth is serviced structurally. The contradiction runs so deep that it no longer appears as scandal alone. It appears as routine. And routine is what makes it dangerous. A republic can survive isolated misconduct more easily than it can survive a settled culture in which influence is expected, ethical boundaries are porous, and moral language is used to disguise material advantage. Once those habits harden, the issue is no longer whether a few officials are compromised. The issue is whether the governing class has come to inhabit a world so unlike that of ordinary citizens that it can no longer see its own behavior as exceptional at all.</p>
        </section>

        <section>
          <h3>II. Equality as Language, Inequality as Practice</h3>
          <p>American political speech is rich with praise for workers. Candidates invoke the factory floor, the kitchen table, the family budget, the small business ledger, the late shift, the union hall, the rising cost of groceries, the fading promise of retirement, and the belief that honest work should produce a stable life. The language is familiar because it is electorally useful, but also because it touches a real part of national memory. The republic has long depended on the moral prestige of labor even when it has failed to honor labor in material terms.</p>
          <p>What makes the contradiction so durable is that the rhetoric is not entirely false. Politicians often do believe, at least in fragments, what they say about work, dignity, and fairness. Yet belief alone does not determine the shape of institutions. Institutions follow incentive, and the incentives of modern governance are arranged around capital, donor networks, lobbying access, media management, and elite relationship maintenance. In such a structure, concern for working people survives most comfortably as language. Once translated into policy that would genuinely redistribute power or constraint, it collides with the interests of the very circles on which political survival depends.</p>
          <p>That is why so much official concern arrives in symbolic form. Hearings are held. Speeches are delivered. Slogans are minted. Working families are praised as the backbone of the nation. But the larger architecture remains intact. Wages stagnate under the pressure of concentrated market power. Healthcare remains financially punishing. Housing becomes more speculative than humane. Education promises mobility while generating debt. Labor protections are defended in principle and weakened in practice. Tax systems reward capital gains with a tenderness rarely extended to earned wages. The worker is celebrated culturally and discounted structurally.</p>
          <p>Meanwhile, access compounds itself at the top. Wealth purchases not only comfort but time, insulation, expertise, audience, and narrative advantage. It buys the ability to shape which problems are urgent and which are unrealistic, which reforms are responsible and which are radical, which moral claims are practical and which are dismissed as naive. Lobbyists, donors, consultants, think tanks, advocacy groups, media surrogates, and philanthropic networks do not always operate as a conspiracy in the dramatic sense. More often they function as an ecosystem, a climate of shared assumptions within which certain outcomes seem natural and others impossible.</p>
          <p>Inside that climate, inequality becomes easier to defend when it is no longer described directly. It is dressed instead in the language of growth, choice, liberty, tradition, fiscal discipline, merit, faith, or constitutional caution. Such language matters because it allows the beneficiaries of power to appear as stewards rather than claimants. It turns private advantage into public philosophy. It converts hierarchy into common sense.</p>
          <p>This is also where the symbolic role of the working citizen becomes useful. The worker is often summoned as a moral witness but rarely empowered as a governing force. The image of labor legitimizes the political class even while labor itself is kept at a distance from actual decision-making. The nation’s moral theater is crowded with praise for ordinary people. The nation’s governing rooms are crowded with those who can afford access.</p>
          <p>The result is a peculiar form of democratic estrangement. Citizens are told that the system belongs to them, but the channels through which major outcomes are shaped are increasingly professionalized, monetized, and insulated. Voters can choose among candidates, yet the range of viable choices is often narrowed in advance by money, media gatekeeping, party machinery, and donor expectations. The people retain voice, but voice does not always mean reach. Participation does not always mean leverage. Formal equality survives alongside material exclusion.</p>
          <p>This is not a failure of language alone. It is a triumph of language over accountability. The repeated invocation of fairness helps keep alive the appearance of a covenant already broken in practice. The poor and working classes are not merely neglected by this arrangement. They are used by it. Their hardship provides the political class with a stage on which compassion can be performed without requiring structural surrender from those who fund and sustain the system. That surrender is what almost never comes. The wealthy are asked for partnership, not sacrifice. Corporations are asked for cooperation, not subordination. Donors are treated as stakeholders. Lobbyists become experts. Financial insiders are reframed as sophisticated participants in a legal marketplace. The person at the edge of economic precarity, by contrast, encounters a state that is often skeptical, disciplinary, procedural, and suspicious.</p>
          <p>It is here that the republic’s double standard reveals itself most clearly: power receives deference as a condition of realism, while need receives scrutiny as a condition of aid. To praise equality while preserving such arrangements is not merely inconsistent. It produces a distinct civic injury. It teaches the public that words are ornamental, that promises are ritual, and that morality in politics is often theater performed beneath chandeliers paid for by proximity. It replaces trust with performance and then wonders why citizens begin to doubt the script.</p>
        </section>

        <section>
          <h3>III. The Court, The Gift, and the Performance of Impartiality</h3>
          <p>No institution in American life depends more heavily on the appearance of principled distance than the Supreme Court. Congress may be openly political. Presidents are expected to persuade, bargain, posture, and campaign. But the Court asks for a rarer form of public confidence. It claims legitimacy not from elections but from judgment, not from popularity but from reasoned restraint, not from power alone but from the belief that its power is exercised above the marketplace of ordinary influence.</p>
          <p>That claim becomes fragile when the justices appear less like detached arbiters and more like distinguished occupants of an elite social world shaped by wealth, hospitality, ideology, and patronage. The problem is not only the possibility of direct quid pro quo exchange, though that possibility shadows every ethics debate. The larger problem is atmospheric. A court can be altered not only by explicit purchase but by environment, by repeated intimacy with a class of benefactors whose worldview, confidence, grievances, and ambitions seep gradually into the texture of what seems reasonable.</p>
          <p>This is where gift culture matters. A luxury trip, an undisclosed favor, a benefactor’s hospitality, a private jet flight, a real estate arrangement, a circle of wealthy friends, a series of flattering invitations to spaces far removed from ordinary life, none of these needs to function as a crude transaction to damage public faith. Influence often works more elegantly than that. It works by making one world feel normal and another remote. It works by reducing ethical alarm through repetition. It works by turning privilege into background scenery.</p>
          <p>The justice who speaks loftily of constitutional principle while living within such arrangements may still believe in the purity of his own reasoning. In some cases that sincerity may be genuine. But sincerity does not dissolve the structural problem. A judge can be earnest and still compromised by environment. Indeed, earnestness can deepen the danger, because it allows one to mistake familiarity for innocence and comfort for independence.</p>
          <p>The public watches these revelations and is told, in effect, that no real harm has been shown. No specific ruling has been proven corrupt. No direct exchange has been documented in the narrowest criminal form. But this defense rests on an impoverished understanding of institutional trust. The Court is not a hedge fund. It is not a private club. It is not merely another site in which elite actors are allowed to enjoy each other’s company until a prosecutable line is crossed. Its authority rests on a more demanding standard. It is supposed to guard against influence, not merely deny its crudest versions.</p>
          <p>The contradiction is sharpened by the Court’s own rhetoric. Justices and their defenders often speak in the language of tradition, restraint, moral seriousness, and fidelity to text. They are presented as custodians of the Constitution against the turbulence of faction. Yet the social and financial patterns surrounding the institution often resemble the same elite ecosystems through which other forms of American power travel. Donor culture, ideological cultivation, institutional grooming, and patronage networks do not stop at the marble steps. They adapt to them.</p>
          <p>There is another irony here. The Court has often shown great concern for the corrupting effect of regulation on liberty, or the coercive danger of state entanglement in matters of conscience, or the constitutional necessity of protecting institutions from improper burden. Yet it has shown far less appetite, at least institutionally, for robust external scrutiny of its own ethical vulnerabilities. The pattern suggests an old instinct of rank: accountability is often treated as most urgent when applied outward and most threatening when applied inward.</p>
          <p>This matters because the Court is not merely interpreting law in a vacuum. It is deciding questions central to labor, voting rights, administrative power, religion, campaign finance, reproductive freedom, executive authority, and the social shape of citizenship itself. A justice does not need to be bribed in a cartoonish sense to shape the nation in favor of elite interests. It is enough that the Court increasingly occupies a milieu where those interests appear dignified, principled, and aligned with the language of liberty.</p>
          <p>When that happens, constitutional interpretation can become a form of class translation. Wealth’s preferences are rendered into doctrines of freedom. Deregulation becomes autonomy. Donor influence becomes speech. Religious power becomes conscience. Corporate insulation becomes limited government. Public intervention becomes overreach. The resulting opinions may be polished, historically sourced, and jurisprudentially elaborate. But beneath the finish, they can still reflect the assumptions of a narrow world.</p>
          <p>This is why the ethical question is not peripheral to constitutional life. It is constitutional life. If the nation’s highest court becomes visibly comfortable with a culture of gifts, private access, elite patronage, and ideological benefaction, then the public is being asked to believe that impartiality can survive almost any atmosphere except criticism. That is too thin a theory of republican trust to sustain a free people for long.</p>
          <p>This illusion is one of the present report’s central concerns. The crisis is not merely that American institutions are imperfect. It is that the nation’s highest languages, moral, religious, and constitutional, have become available as instruments through which visible contradiction is rendered respectable. The republic still speaks of equality, conscience, and justice. But those words increasingly move through systems that sort, protect, and elevate unequally.</p>
        </section>

        <section>
          <h3>IV. Religion, Constitutional Language, and the Capture of Moral Authority</h3>
          <p>Religion occupies a distinctive place in the American constitutional order, not because the Constitution established a sacred nation, but because it declined to do so. The founding framework does not create an officially Christian republic, nor does it assign theological authority to the state. It does something more disciplined. It forbids religious tests for office. It bars the establishment of religion in law. It protects the free exercise of belief. In structure, the constitutional settlement is neither hostile to faith nor subordinate to it. It is an architecture of distance, designed to preserve both civil government and religious conscience from mutual corruption.</p>
          <p>That distance has always been difficult for the nation to maintain. American political culture has long leaned on religious language for legitimacy, consolation, reform, and public purpose. Abolitionists drew upon it. Civil rights leaders drew upon it. Social conservatives and progressives alike have invoked it. The issue, then, is not whether religion may speak in public life. It plainly can, and often has done so with great moral force. The issue is what happens when religious language ceases to be a voice in democratic argument and becomes instead a channel through which concentrated wealth, partisan strategy, and institutional ambition acquire sanctified cover.</p>
          <p>This is the modern danger. Religion, once fused to organized political power and donor-directed influence, can become less a source of conscience than a machinery of permission. It can teach followers to interpret policy preferences as divine necessity. It can frame hierarchy as moral order. It can present economic arrangements favorable to the powerful as defenses of civilization itself. It can transform political victory into spiritual emergency, making compromise appear faithless and dissent appear corrupt. Under such conditions, religion does not disappear into politics. Politics colonizes religion and learns to speak through its most sacred tones.</p>
          <p>The constitutional danger lies precisely here. The Establishment Clause was not written merely to prevent the creation of a national church in the formal European sense. Its deeper wisdom was institutional modesty. It recognized that once public power begins to align itself too confidently with sacred authority, both become distorted. Government becomes inflated by transcendence. Religion becomes armed with force. The state begins to treat its preferences as providential, while religious institutions begin to mistake access to power for evidence of righteousness.</p>
          <p>The resulting arrangement is especially potent in a nation already disposed toward moral drama. American politics is unusually receptive to narratives of chosen purpose, national redemption, civil decline, and restored order. These themes can animate genuine reform. They can also be weaponized. In the hands of skilled political actors, religious language becomes a solvent that melts the boundary between principle and appetite. Wealth can then move through moral channels without appearing as wealth at all. Donor networks become ministries of renewal. Judicial projects become defenses of faith. Electoral campaigns become battles for the soul of the nation. Corporate interests and ideological ambitions can thus borrow the emotional authority of religion while preserving the material advantages of the secular elite.</p>
          <p>This is why the alliance between religious activism and concentrated money deserves scrutiny not as a cultural curiosity but as a constitutional problem. The issue is not the personal sincerity of believers, many of whom act from conviction, sacrifice, and inherited faith. The issue is the structure within which those convictions are organized, funded, and directed. A political movement may speak in the language of prayer while functioning through the methods of capital. It may denounce moral decay while relying on donor architecture, media discipline, litigation strategy, and institutional capture. In such a formation, religion becomes less a check on worldly power than one of its most effective delivery systems.</p>
          <p>That process also alters the meaning of constitutional interpretation. Once religious identity becomes politically fused with a project of state influence, legal disputes over conscience, school prayer, public funding, reproductive freedom, marriage, education, and administrative authority cease to be merely questions of rights. They become contests over whether a particular moral tradition may convert itself into governing power while still claiming the protected status of private conviction. The language of liberty remains on the surface. Beneath it lies the question of who gets to rule, and under what sacred justification.</p>
          <p>There is a historical irony in this development. The constitutional system was built in part by men deeply aware of sectarian conflict, ecclesiastical domination, and the dangers of civil coercion in matters of belief. However imperfectly they embodied their own ideals, they understood something enduring: religion is degraded when it becomes an ornament of rule, and government is endangered when it clothes itself in unquestionable truth. The line between them was never meant to abolish faith from public life. It was meant to prevent power from becoming untouchable by borrowing heaven’s voice.</p>
          <p>When that line weakens, the consequences are not abstract. Citizens begin to encounter political argument not as persuasion among equals but as pressure applied through moral absolutes. Policy becomes harder to contest because it is wrapped in sanctity. Opponents are no longer merely wrong; they are cast as disordered, faithless, or subversive of divine order. The democratic field narrows. Reason gives way to revelation-language deployed for temporal ends. Power becomes less accountable because it has learned to appear holy.</p>
          <p>This is one of the republic’s deepest temptations: to convert spiritual authority into civic rank while calling the result moral clarity. The temptation is especially strong in moments of social strain, when institutions are distrusted, economic anxiety deepens, and cultural conflict sharpens into identity warfare. Under such conditions, religiously coded politics offers not just policy but belonging, certainty, and permission. It tells the public that complexity is corruption, that restraint is cowardice, and that victory is virtue. Wealth and influence then enter the bloodstream of moral struggle and circulate under a higher name.</p>
          <p>The result is not simply religious participation in politics. It is the capture of moral authority by structures of material power. And once that capture succeeds, the public square changes character. Constitutional language remains in use, but its function shifts. Instead of restraining domination, it is selectively invoked to defend it. Instead of protecting pluralism, it is narrowed into a vocabulary for organized advantage. The republic still speaks of liberty of conscience. But the governing struggle becomes whether conscience will remain free, or whether it will become the ceremonial mask of power.</p>
        </section>

        <section>
          <h3>V. Congress, Information, and the Marketplace of Privilege</h3>
          <p>In theory, legislative office is a public trust. Members of Congress are elected to deliberate, to oversee, to investigate, to appropriate, to regulate, and to decide. Their access to information is justified on public grounds. Committee briefings, classified intelligence, market-sensitive hearings, closed-door negotiations, geopolitical warnings, regulatory forecasts, and legislative timing all belong, in principle, to the sphere of public duty rather than private opportunity. A republic cannot function otherwise. Its lawmakers must know things before the public knows them, if only because governing requires anticipation.</p>
          <p>Yet the very necessity of that informational privilege creates one of the most glaring ethical contradictions in modern democratic life. The same officials who possess unusual access to market-moving developments often retain the ability, directly or through household holdings, to participate in the financial markets affected by those developments. This arrangement does not require criminal conspiracy to become corrosive. It is corrosive by design. It creates a class of public servants positioned close enough to the engines of national decision-making to benefit from knowledge unavailable to ordinary citizens, while insisting that legality alone is sufficient proof of legitimacy.</p>
          <p>This is where the republic’s language of equal citizenship gives way to the lived reality of tiered advantage. An ordinary person who traded on material nonpublic information would be pursued through the stern vocabulary of fraud, enforcement, and deterrence. The state would not marvel at the sophistication of the strategy. It would investigate the conduct, trace the timing, and present the matter as a threat to market fairness. But when lawmakers participate in trading under conditions saturated with privileged awareness, the system suddenly becomes more delicate. The issue is reframed as complex, technical, or politically difficult. What would be called suspicious below is treated as debatable above.</p>
          <p>That discrepancy is not a matter of optics alone. It reflects the broader structure of deference that surrounds institutional rank. Power in the United States is often disciplined less by strict prohibition than by managed disclosure. So long as transactions are reported, delayed, fined modestly, or absorbed into the familiar fog of ethics review, the deeper moral question is pushed aside. The public is invited to believe that transparency cures what inequality makes possible. But disclosure does not restore fairness where the underlying arrangement remains intact. It merely records the advantage after the fact.</p>
          <p>The contradiction becomes sharper when lawmakers speak publicly about sacrifice, responsibility, and the struggles of ordinary working households. It is one thing for a nation to accept that wealth exists. It is another for citizens to watch public officials move between hearings on economic precarity and trades made within the atmosphere of privileged information. This is not envy. It is asymmetry. A worker trying to keep up with rent, medical costs, child care, groceries, transportation, and debt does not inhabit the same moral universe as a governing official who can translate national turbulence into personal portfolio management while still claiming the mantle of public service.</p>
          <p>This is why narrow legalism cannot settle the matter. A political system may permit conduct that a democratic society ought to reject. Legality is often the floor of public ethics, not its summit. The question is not only whether a particular transaction can be prosecuted under insider trading law. The question is whether lawmakers should be structurally separated from financial incentives that so obviously collide with the informational privileges of office. On that question, the evasions of the political class have been telling. Reform is discussed repeatedly, but genuine prohibition remains elusive. The institution can describe the problem clearly enough. It simply resists solving it completely.</p>
          <p>There is a reason for that resistance. Stock ownership is not merely an investment habit. It is a sign of membership in the governing culture of American elites, a culture that treats financial participation as normal, sophisticated, prudent, and even virtuous. To bar lawmakers from individual trading would not only prevent conflicts. It would symbolically separate officeholding from the habits of speculative class advantage. It would say, in effect, that representation is not a side door into elite financial life. Such a line is precisely what many officials seem unwilling to draw.</p>
          <p>This is part of a larger pattern in which access reproduces itself. The powerful do not always take their gains in envelopes or whispered bargains. More often they receive them through systems that diffuse responsibility and soften appearances. Information is one such system. Timing is another. Networks matter. Proximity matters. Spouses matter. Investment vehicles matter. The law looks for the dramatic handoff, the provable secret, the direct exchange. Modern privilege thrives in subtler weather. It lives in atmospheres, in strategic ambiguity, in what is available to those close enough to hear the room before the room becomes public.</p>
          <p>Thus the marketplace becomes another chamber of unequal citizenship. Americans are told that markets are arenas of open competition, governed by rules that protect fairness and punish cheating. Yet the political class operates beside those markets with tools unavailable to ordinary participants: advance knowledge, regulatory influence, legislative foresight, and access to the rhythms of state action itself. This does not merely undermine confidence in government. It undermines confidence in the idea that the rules apply evenly at all.</p>
          <p>The damage, once again, is cumulative. Each disclosure, each late filing, each suspiciously timed trade, each half-measure reform proposal, each defense mounted on technical grounds rather than democratic principle teaches the same lesson. The lesson is not simply that corruption exists. Americans have long known that. The lesson is that the line between governance and private advantage has grown so porous that the governing class increasingly treats the public’s alarm as naive. What shocks the citizen has become routine to the institution.</p>
          <p>A republic can survive ambition more easily than it can survive normalization of privileged extraction. Once office is widely understood as a place where access may legally ripen into opportunity, the moral content of representation begins to thin. Public trust is not destroyed in one scandal. It is worn down by repetition, by the steady spectacle of officials speaking in the language of duty while standing with one hand on the machinery of state and the other near the instruments of private gain.</p>
        </section>

        <section>
          <h3>VI. Lobbyists, Donors, and the Managed Vocabulary of Influence</h3>
          <p>American corruption often prefers formal clothes. It does not always arrive as bribery in the cinematic sense, nor does it need to. Modern influence is more polished, more procedural, more fluent in legality. It travels through campaign contributions, independent expenditures, issue advocacy, bundled donations, foundation networks, luxury hospitality, revolving-door employment, elite introductions, think-tank patronage, speaking invitations, and cultivated access that is never called purchase because everyone involved understands the etiquette of denial.</p>
          <p>What results is not the absence of corruption but its refinement. The vocabulary surrounding this system is itself a defensive architecture. Money is called participation. Lobbying is called advocacy. Donor leverage becomes engagement. Industry-written policy becomes expertise. Preferential access becomes relationship-building. Strategic generosity becomes support for public service. In this linguistic conversion, raw power is rendered civic. Material influence becomes almost noble by description alone.</p>
          <p>This matters because language is one of the ways a system teaches the public how little outrage it should permit itself. Citizens are told that donations do not buy votes, only access. But access is not a trivial thing in politics. Access determines who is heard first, who is heard longest, who helps shape the menu of available options before the public ever sees them. By the time a bill, ruling, or policy reaches ordinary debate, much of the real contest may already have occurred in donor meetings, private briefings, industry consultations, legal strategy sessions, and elite networks whose names seldom appear in campaign rhetoric.</p>
          <p>This is not an argument that every officeholder is insincere or every donor relationship corrupt in the crude sense. The deeper point is more structural. A system saturated with money does not need every actor to be bought individually. It needs only to create an environment in which certain interests are constantly present, constantly legible, constantly framed as serious, while other interests must struggle just to be recognized as practical. Influence becomes ambient. The wealthy do not need to dictate every outcome. They need only to make themselves unavoidable.</p>
          <p>That ambient influence is especially powerful because it often operates in advance of decision. Politicians learn, sometimes without explicit instruction, what kinds of positions attract funding, which critiques provoke retaliation, what language reassures donors, which reforms are considered unrealistic, which industries must be consulted, which legal theories are institutionally useful, which moral postures play well with religious allies, and which gestures toward labor can be made safely so long as structural questions remain untouched. Under such conditions, self-censorship becomes a form of adaptation. Obedience no longer feels like obedience. It feels like professionalism.</p>
          <p>This is one reason the public so often encounters politics as theater laid over prearranged limitation. Campaigns may feature dramatic promises, moral urgency, even anger on behalf of ordinary people. But once in office, the boundaries of action are narrowed by the very networks that helped make office possible. Donors do not always need to issue commands. Their influence has already been built into the architecture of ambition itself.</p>
          <p>The role of lobbyists is central here, not simply because they represent industries or wealthy interests, but because they translate private preference into governing language. They turn appetite into policy prose. They convert commercial desire into legislative detail. They give power the appearance of technical necessity. In doing so, they often help produce one of the signature effects of modern governance: the transformation of distributive conflict into neutral expertise. A policy that benefits concentrated wealth is rarely presented in those terms. It is offered instead as efficient, stabilizing, investment-friendly, constitutionally prudent, or necessary for innovation and growth.</p>
          <p>There is a class dimension to this translation. Ordinary citizens do not typically possess teams of lawyers, strategists, data analysts, public relations advisers, and lobbyists ready to turn their needs into acceptable governing language. Need arrives unpolished. Wealth arrives prepared. That is one reason the political system can seem responsive on the surface while remaining structurally tilted beneath. Everyone may be permitted to speak, but not everyone speaks with equal institutional force.</p>
          <p>This disparity is again often masked by patriotic ritual and moral rhetoric. Leaders continue to speak of the common good, shared sacrifice, and equal justice. Yet the pathways through which policy is actually shaped remain unevenly owned. The worker standing in line at a public hearing and the donor attending a private gathering are not participating in the same political process, no matter how often democratic language suggests otherwise. One makes an appeal. The other helps set the terms under which appeal will be judged.</p>
          <p>This, too, is part of the republic’s double standard. The poor are often told that dependency is dangerous, that public assistance should be monitored, conditioned, or reformed lest it distort responsibility. The wealthy, by contrast, build elaborate forms of dependency between the state and private power and call the result partnership. Subsidies, tax preferences, regulatory exceptions, access channels, preferred drafting influence, procurement leverage, legal insulation, and political hospitality all produce a system in which concentrated wealth depends constantly on government while still presenting itself as the defender of self-reliance.</p>
          <p>The contradiction would be merely ironic if it were not so consequential. But it shapes the actual distribution of burdens and protections across the republic. Working people encounter rules. Wealth encounters relationships. The vulnerable meet procedure. The connected meet flexibility. Citizens are told to trust the fairness of institutions whose internal grammar increasingly favors those with the means to speak in advance, to remain present, and to frame their advantage as prudence. That is the managed vocabulary of influence. It does not deny inequality. It deodorizes it. It replaces the old bluntness of patronage with a modern language of legality, seriousness, and democratic participation. But beneath the polish the old truth remains: those with money are not merely louder. They are nearer to the point where power decides what counts as reality.</p>
        </section>

        <section>
          <h3>VII. Constitutional Reverence and Selective Application</h3>
          <p>The Constitution occupies a near-sacred position in American political speech. It is cited as text, symbol, inheritance, shield, warning, and national covenant. Across ideological lines, public figures invoke it to claim legitimacy for their arguments and continuity for their ambitions. Its authority lies not only in law but in civic mythology. To speak in its name is to borrow gravity. Yet constitutional reverence has long coexisted with constitutional selectivity. The document is praised most loudly not always when its principles are most faithfully honored, but when its language can be made useful to present power.</p>
          <p>This is one of the enduring paradoxes of American public life: the Constitution is treated as the nation’s highest restraint while also serving as one of its most flexible instruments of political translation. Selective application is not always crude. It often appears through emphasis, silence, framing, and hierarchy. Some clauses are elevated into defining truths while others recede into inconvenience. Liberty may be stressed while equality is narrowed. Property may be protected while labor receives abstraction. Religious freedom may be expanded where it aligns with institutional or sectarian power, then treated more thinly where pluralism would require actual mutual restraint. Speech may be defended when it protects organized wealth, yet treated with less urgency when ordinary citizens confront structural barriers to being heard with comparable force.</p>
          <p>This selectivity is particularly visible in the modern fusion of constitutional language with elite interest. Powerful actors rarely defend themselves by saying openly that their rank should exempt them. They speak instead of rights, tradition, original meaning, limited government, conscience, restraint, federalism, separation of powers, or democratic process. These are real constitutional concepts, and many are indispensable to liberty. But in practice they can also become vehicles through which inequality is formalized rather than checked. Constitutional reasoning, like religious language, may then function not as neutral principle but as elevated vocabulary for preferred outcomes.</p>
          <p>This is one reason the Court matters so much in the present order. A judicial opinion can convert a historically contingent preference into a doctrine clothed with permanence. It can present a distribution of power as if it were simply the demand of law. Once this happens, contestable judgments acquire a dignity beyond politics. The result is not merely that one side wins. It is that victory is translated into legitimacy of a higher kind.</p>
          <p>But selective constitutionalism is not confined to courts. Legislators and executives practice it constantly. They praise constitutional limits when those limits restrain opponents and grow more elastic when the same principles burden their own ambitions. They defend institutional integrity when excluded from power and test its boundaries when controlling it. They speak of fidelity to the founders while ignoring the founders’ deepest suspicion of concentrated factional influence, sectarian entanglement, and unaccountable power. The Constitution is revered, but often as one reveres an ancestral name while managing the estate for present convenience.</p>
          <p>This has consequences for democratic understanding. Citizens are taught to view constitutional conflict as a realm of elevated seriousness, separate from ordinary contest over material interest. Yet the two are often inseparable. Behind debates over liberty, conscience, speech, federalism, and administrative authority lie questions about who will possess insulation, who will bear vulnerability, and whose moral or economic priorities will be stabilized by law. Constitutional argument becomes, in part, the refined language through which power arranges its own durability.</p>
          <p>The danger here is not that constitutional argument exists. A republic needs such argument. The danger is that reverence can become anesthetic. If every preferred outcome can be narrated as constitutional fidelity, then the public may stop asking what social and material order that fidelity is actually producing. The Constitution then becomes less a common framework for self-government than a ceremonial screen behind which unequal influence continues its work.</p>
          <p>This is especially hazardous when paired with religious authority and donor power. Constitutional language can dignify projects of hierarchy by presenting them as principled modesty. It can turn exclusion into restraint, dominance into liberty, patronage into participation, sectarian ambition into conscience, and elite interest into jurisprudence. Each move is plausible enough to survive debate. Taken together, they create a style of governance in which the most consequential distributions of power no longer appear as distributions at all. They appear as law remembering itself.</p>
        </section>

        <section>
          <h3>VIII. The Final Reckoning</h3>
          <p>What, then, is to be said of a republic that still speaks with ceremonial confidence about equality while organizing so much of its real life around access. What is to be said of a political class that praises workers while dining inside systems funded by those most insulated from the conditions of work. What is to be said of judges who speak in the tones of constitutional gravity while moving through circles of wealth so rarefied that ordinary citizens can scarcely recognize them as part of the same national life. What is to be said of lawmakers who govern markets while standing close enough to privileged knowledge to profit from turbulence that would ruin others. What is to be said of religious power enlisted into political struggle until the line between conscience and control begins to collapse.</p>
          <p>It is not enough to say that these are unfortunate contradictions. Contradiction suggests tension between ideals honestly held and realities imperfectly met. The present condition is harder than that. The contradiction has matured into arrangement. The dissonance is no longer occasional. It has become structural, repeated, normalized, and defended through the very vocabularies once meant to restrain it.</p>
          <p>The result is a republic increasingly divided between its language and its behavior. In language, it remains noble. In behavior, it too often operates as a managed hierarchy. In language, no one stands above the law. In behavior, scrutiny thickens downward and thins upward. In language, religion is protected as conscience. In behavior, it is frequently recruited as instrument. In language, public office is a trust. In behavior, it can become a corridor to influence, wealth, insulation, and class consolidation. In language, the Constitution is a restraint on domination. In behavior, it is too often used as a polished grammar through which domination justifies itself.</p>
          <p>This is why the public’s anger should not be dismissed as populist mood, partisan irritation, or civic ignorance. It is one of the more rational responses available to people repeatedly instructed to ignore what they can plainly see. Citizens are not foolish for recognizing that gifts matter, that donor networks matter, that access matters, that piety tied to money is politically useful, that privileged information confers privilege whether or not it can always be prosecuted, that institutions asking for trust should be held to standards higher than technical defensibility. The public is not confused. It is exhausted by the repeated demand that it pretend not to understand the obvious.</p>
          <p>And the obvious is this: the American system has become dangerously adept at preserving the sound of moral legitimacy while redistributing its substance upward. It can still produce eloquence on fairness while governing through asymmetry. It can still stage concern for workers while arranging its deepest loyalties around wealth. It can still invoke constitutional devotion while applying constitutional principle selectively. It can still present religious politics as moral awakening while absorbing the financial and strategic logic of organized power. It can still celebrate clean markets while tolerating a governing class uncomfortably close to the making of market-moving knowledge.</p>
          <p>This is not merely corruption in the criminal sense, though criminality may at times appear within it. It is corruption in the civic sense: the bending of public purpose toward private structure while retaining the language of common virtue. That form of corruption is especially dangerous because it does not always announce itself as vice. It often appears as professionalism, tradition, prudence, moral clarity, constitutional fidelity, or sophisticated participation in legitimate systems. It wears tailored clothes. It files paperwork. It gives speeches. It cites principle. It thanks God. It speaks softly of duty while moving decisively in the direction of advantage.</p>
          <p>A free society cannot endure indefinitely on that basis. Not because perfection is possible, but because trust has limits. The people of a republic do not need saints in office. They do need reasons to believe that office is not simply another instrument through which rank protects itself. They do not need every institution to be pure. They do need evidence that institutions recognize corruption not only when it is vulgar and explicit, but when it is refined, dispersed, and hidden beneath ceremony. They do not need religion removed from public life. They do need assurance that religious authority will not be converted into a delivery mechanism for concentrated influence. They do not need a Constitution drained of meaning. They do need that its meaning not be monopolized by those most skilled at turning principle into shelter for power.</p>
          <p>If those conditions fail, the damage runs deeper than policy. It reaches the civic imagination. A people begins to lose the habit of belief that democratic life requires. Law becomes performance. Morality becomes branding. Elections become rotation without remedy. Public speech becomes an exercise in listening for concealment rather than meaning. Patriotism itself becomes unstable, no longer a love of common principle but a dispute over whether common principle still exists in recognizable form.</p>
          <p>This is the true cost of double standards in high places. They do not merely enrich the connected or protect the influential. They teach the nation to lower its estimate of reality. They teach citizens that justice is aspirational but access is operational. They teach workers that they are essential in rhetoric and expendable in arrangement. They teach believers that faith may be honored most loudly when it serves power. They teach the law-abiding that law is strictest where power is thinnest. They teach the young that the republic’s grand vocabulary may be admirable and empty at once.</p>
          <p>No constitutional order can flourish for long on such lessons. A nation may survive conquest, depression, scandal, and war and still recover if its people believe that its words can again bind its conduct. But when the binding fails repeatedly, when the distance between principle and practice becomes a settled feature of governance, the danger is no longer episodic. It is civilizational. The republic does not collapse all at once. It hollows. Its rituals continue. Its flags still wave. Its courts still sit. Its lawmakers still speak. Its clergy still bless. Its markets still rise and fall. Yet more and more of its citizens move through this spectacle with the inward knowledge that the stated creed and the lived order are no longer speaking of the same country.</p>
          <p>That is the reckoning. The gravest threat to the American promise is not only that power corrupts. It is that power has learned to narrate its corruption as virtue, its privilege as normalcy, its appetites as principle, and its exclusions as order. Once that translation becomes routine, injustice no longer needs to silence the nation’s ideals. It simply speaks in their name.</p>
        </section>

        <section>
          <h3>IX. Coda: The Country Beneath the Language</h3>
          <p>This is why the question of enforcement cannot be separated from the question of power. A society does not reveal its values only through the rights it proclaims. It reveals them through whom it watches, whom it excuses, whom it burdens, and whom it fears. Modern America still speaks with reverence about equal justice. But too often it governs through unequal presumption. The result is a republic in which many citizens experience law less as common protection than as a reminder of where they stand.</p>
          <p>A republic cannot renew itself by pretending not to see any of this. It cannot sermonize its way out. It cannot litigate every fragment while refusing to name the whole. It cannot keep speaking of one nation under law while arranging practical life as though some citizens inhabit law and others inhabit its exceptions. The problem is no longer lack of evidence. The problem is whether the country still possesses the moral will to describe what its institutions have become without retreating into euphemism.</p>
          <p>To do so would require a harsher honesty than American public life usually permits. It would require admitting that the issue is not merely partisan misconduct, nor only the errors of particular justices, legislators, donors, pastors, or movements. It would require admitting that the nation has built durable channels through which wealth, status, piety, legal authority, and political access merge into a class system that remains rhetorically democratic while operating with increasingly aristocratic instincts.</p>
          <p>That admission would wound national vanity. But without it, the wound beneath remains untreated.</p>
          <p>The old promise of the country was not that human beings in power would be pure. It was that institutions could be arranged so that ambition checked ambition, conscience remained free, law stood above faction, and the ordinary citizen could expect something more than ornamental equality. The present crisis is that too many institutions now appear arranged less to check power than to absorb it gracefully, less to restrain influence than to refine it, less to honor equality than to recite it while privilege continues its work.</p>
          <p>The final question is not whether the republic still possesses noble words. It does. The final question is whether those words remain instruments of truth or have become ceremonial coverings laid over a harder reality. A nation can endure hypocrisy in fragments. What it cannot endure without grave consequence is a governing order in which hypocrisy becomes the operating style of power.</p>
          <p>The country now lives inside that danger. It is visible in the smiling language of equality paired with the cold mechanics of access. It is visible in the reverence paid to constitutional restraint alongside the selective expansion of influence. It is visible in the moral seriousness of religious politics fused to moneyed strategy. It is visible in the soothing vocabulary of disclosure surrounding conduct that ordinary citizens would recognize immediately as privileged advantage. It is visible wherever institutions ask to be trusted most urgently at the moment they appear least willing to submit themselves to the standards they impose on others.</p>
          <p>If the American story is to mean anything beyond pageantry, then this contradiction must be named in full. Not cautiously. Not ceremonially. Not as an unfortunate blemish on an otherwise healthy order. It must be named as a governing pattern: a republic whose highest languages have too often become the preferred instruments through which unequal power excuses itself.</p>
          <p>That is where the report ends, and where the larger national argument begins. The issue is no longer whether the contradiction exists. The issue is whether the country intends to sit living inside it, or stand up with Liberty, and Justice for All.</p>
        </section>

        <section>
          <h3>General Source Categories</h3>
          <ul className="source-list">
            <li>United States Constitution, including Article VI and the First Amendment</li>
            <li>Public reporting on Supreme Court ethics and gifts</li>
            <li>Public reporting and legal background concerning the STOCK Act and congressional trading</li>
            <li>Public reporting on donor networks, religious-political organizing, and influence in American politics</li>
          </ul>
        </section>
      </article>
    </div>
  </>);
}

export function ReviewsPage() {
  return shell("Reviewed Stories", "Follow the signal beneath the headline.", <>
    <p className="lead">Reviewed Stories is where Living Street Media examines outside stories, public claims, and narrative events through the lenses of Origin, Truth, Emotion, and Benefit.</p>
    <p>This page is not for original reporting. It is for stories that begin elsewhere and are brought into review so readers can see where they came from, what holds up, what emotional pressures are being activated, and who benefits from the framing.</p>

    <div className="reviewed-intro-grid">
      <div className="mini-box"><strong>Origin</strong><br />Where did the story begin, and how did it move?</div>
      <div className="mini-box"><strong>Truth</strong><br />What is supported, unsupported, missing, or overstated?</div>
      <div className="mini-box"><strong>Emotion</strong><br />What feelings or pressures are being activated in the audience?</div>
      <div className="mini-box"><strong>Benefit</strong><br />Who gains from the framing, spread, or reaction?</div>
    </div>

    <h2 className="section-title">Featured Reviewed Story</h2>

    <article className="review-template review-live">
      <div className="review-kicker">Reviewed Story • Politics and Public Life / Law and Courts</div>
      <h3 className="review-headline">Blanche, Senate Republicans, and the “Anti-Weaponization Fund”</h3>
      <p className="review-meta">Story under review: CNN • May 21, 2026 • Outside reporting and source tracing used for this review</p>

      <section className="review-block">
        <h4>Claim Snapshot</h4>
        <p>The story asks readers to understand the “anti-weaponization fund” not as a routine administrative matter, but as a politically explosive proposal that has made even Senate Republicans uneasy. The central claim is that the fund raises serious questions about accountability, purpose, and whether government power is being redirected to protect allies of Donald Trump under the language of anti-weaponization. Reporting used for this review indicates that Republican senators sought clarification from Todd Blanche and that GOP leaders expressed significant concerns about the fund’s intent and oversight.</p>
      </section>

      <section className="review-block">
        <h4>Origin</h4>
        <p>The story appears to begin not with the Senate meeting itself, but with the underlying Trump-IRS settlement that would create the proposed $1.8 billion Anti-Weaponization Fund. The immediate news trigger then became Acting Attorney General Todd Blanche’s meeting with Senate Republicans, who wanted clarification about the fund’s purpose, oversight, and intended beneficiaries.</p>
        <p>From there, the story spread outward through national political coverage as part of a larger controversy over Trump-linked spending requests and a broader internal Republican dispute over how the proposal should be understood and defended. So the clean origin reading is: the settlement created the underlying issue, Blanche’s Senate meeting created the immediate news event, and wider outlet framing turned it into a larger political narrative.</p>
      </section>

      <section className="review-block">
        <h4>Truth</h4>
        <p>What clearly holds up is that there is a proposed fund of roughly $1.8 billion, that it is tied to the settlement of Trump’s lawsuit against the IRS over leaked tax returns, and that Senate Republicans themselves expressed real concern about the fund’s purpose and oversight.</p>
        <p>What remains less settled is the full final scope of the fund and exactly who would qualify. Defenses of the proposal rely partly on the promise of future oversight, but the practical boundaries of eligibility were still unclear at the time of reporting.</p>
        <p>The strongest caution point is the gap between the official language and the underlying risk. “Anti-Weaponization” sounds like a neutral remedy for abuse, but the underlying reporting suggests the proposal could operate in ways that are more partisan, more selective, and less clearly bounded than the label implies.</p>
      </section>

      <section className="review-block">
        <h4>Emotion</h4>
        <p>The emotional force of this story comes from mistrust, alarm, and moral suspicion. The phrase “Anti-Weaponization Fund” already frames the proposal as a remedy for injustice before the public has sorted out who counts as a victim, what conduct is being remedied, or how the money would actually be controlled.</p>
        <p>The reporting also activates institutional distrust. Even Senate Republicans signaled discomfort with the fund’s purpose and oversight, which gives the story a feeling of instability inside the governing party itself. Once the possibility enters that politically sympathetic figures or January 6 defendants could benefit, the emotional register shifts from procedural concern to indignation.</p>
      </section>

      <section className="review-block">
        <h4>Benefit</h4>
        <p>The most immediate beneficiaries of this framing are Donald Trump and the political ecosystem around him. Calling the proposal an “Anti-Weaponization Fund” turns a controversial settlement mechanism into a moral claim before the public has resolved the details.</p>
        <p>A second possible layer of benefit would fall to politically aligned claimants if the fund were administered broadly. The framing also benefits the larger grievance narrative itself, because it helps recast scrutiny, enforcement, and legal exposure as proof of persecution rather than accountability.</p>
      </section>

      <section className="review-block">
        <h4>Final Reading</h4>
        <p>This is not merely a dispute over administrative design. It is a dispute over whether the language of anti-weaponization is being used to give a politically aligned compensation scheme the appearance of moral legitimacy.</p>
        <p>The strongest reading is that the story is important, partly supported, and politically revealing, but also framed through language that is cleaner than the underlying reality. The most important feature of the story is the gap between the official label and the likely practical effect beneath it.</p>
      </section>

      <section className="review-block">
        <h4>Source Log</h4>
        <ul className="source-list">
          <li>Original CNN article under review</li>
          <li>Reuters reporting on the Senate Republican meeting with Todd Blanche and Republican concerns about the fund’s purpose and oversight</li>
          <li>Reuters reporting on Blanche’s refusal to rule out payouts to January 6 defendants and other Trump allies</li>
          <li>Reuters reporting on the underlying Trump-IRS settlement and related provisions</li>
          <li>Additional Reuters reporting on legal and political challenges surrounding the proposed fund</li>
        </ul>
      </section>
    </article>
  </>);
}

export function ProgramsPage() {
  return shell("Programs & Initiatives", "Ideas built for public life.", <>
    <p className="lead">Public-facing ideas and structured projects designed to strengthen connection, deepen reflection, and create lasting impact.</p>
    <p>This section is where Living Street Media carries forward efforts meant not only to inform, but to help build responses to the real conditions people live through.</p>
    <p>These programs and initiatives are intended to connect reflection to action, bringing story, understanding, and public purpose into forms that can serve human life more directly.</p>
  </>);
}

export function MethodPage() {
  return shell("Our Method", "Origin. Truth. Emotion. Benefit.", <>
    <p className="lead">Living Street Media uses a public, visible framework for reading stories with clarity, feeling, and public understanding. The goal is not to posture as an all-knowing referee. The goal is to show how a story is being examined, what is known, what remains uncertain, what emotions are being activated, and who may gain from the reaction.</p>
    <h2 className="section-title">The Framework</h2>
    <div className="stack">
      <div className="mini-box"><strong>Origin</strong><br />Trace where a story began, who first published it, and how it moved across outlets or platforms.</div>
      <div className="mini-box"><strong>Truth</strong><br />Separate what is verified from what is assumed, exaggerated, missing, or still unresolved.</div>
      <div className="mini-box"><strong>Emotion</strong><br />Examine framing pressures: outrage, fear, tribal cues, urgency, scapegoating, or conflict intensification.</div>
      <div className="mini-box"><strong>Benefit</strong><br />Ask who gains from the spread, framing, reaction, or confusion surrounding the story.</div>
    </div>
    <h2 className="section-title">How we read a story</h2>
    <div className="stack">
      <div className="mini-box">Identify the core claim and isolate what the story is asking people to believe.</div>
      <div className="mini-box">Trace the earliest visible source and map how the story moved.</div>
      <div className="mini-box">Check what holds up and separate support from gaps or exaggeration.</div>
      <div className="mini-box">Assess the emotional framing and ask who benefits from the reaction.</div>
    </div>
  </>);
}

export function AboutPage() {
  return shell("About Living Street Media", "Where Life Lives.", <>
    <p>Living Street Media is designed as both an editorial home and an analytical media platform. It publishes original writing, structured public-interest ideas, cultural work, and reviewed stories examined through the lenses of Origin, Truth, Emotion, and Benefit.</p>
    <p>It exists not only to examine the world, but to respond to it, helping connect story, understanding, and public purpose in ways that can illuminate problems and point toward human solutions.</p>
    <h2 className="section-title">Mission</h2>
    <p>The mission of Living Street Media is to create a public-facing space where stories, ideas, and social questions can be examined with clarity, seriousness, and human depth, and where understanding can be carried forward into programs, initiatives, and efforts meant to strengthen human life.</p>
    <h2 className="section-title">Public Aim</h2>
    <p>Living Street Media aims to help readers understand not only what is being said, but where it began, what is supported, what emotional currents are being stirred, and who benefits from the public reaction. It also aims to carry stories, ideas, and efforts that can deepen reflection and help point toward meaningful human solutions.</p>
    <h2 className="section-title">What We Do</h2>
    <p><strong>Original Reporting</strong><br />Essays, investigations, issue analysis, and long-form public writing.</p>
    <p><strong>Reviewed Stories</strong><br />Outside stories examined through Origin, Truth, Emotion, and Benefit.</p>
    <p><strong>Programs & Initiatives</strong><br />Structured concepts and public-interest models with room to grow.</p>
    <p><strong>Arts & Culture</strong><br />Creative work, city voice, public feeling, and cultural reflection.</p>
    <h2 className="section-title">Standards</h2>
    <p>We aim to be transparent about method, to separate reporting from speculation, to respect complexity where complexity is real, and to avoid confusing emotion with proof or popularity with credibility.</p>
    <h2 className="section-title">Editorial Character</h2>
    <p>The tone of Living Street Media should be thoughtful, disciplined, and alive. It should be capable of seriousness without becoming sterile, and capable of cultural warmth without dissolving into vagueness.</p>
    <h2 className="section-title">Why It Exists</h2>
    <p>Too much public media is built for reaction before reflection. Stories arrive preheated, identities are quickly sorted, and complexity is often treated as a weakness.</p>
    <p>Living Street Media exists to offer a different posture: slower where slowness helps, sharper where clarity is needed, more transparent about the machinery that shapes public belief, and more willing to ask how story, culture, and public understanding might actually serve human life.</p>
    <h2 className="section-title">Core Sentence</h2>
    <p className="core-sentence">Living Street Media traces the story beneath the story.</p>
  </>);
}

export function ContactPage() {
  return shell("Contact", "Join the conversation.", <>
    <div className="stack">
      <div className="mini-box">Name</div>
      <div className="mini-box">Email</div>
      <div className="mini-box">Subject</div>
      <div className="mini-box">Message</div>
    </div>
  </>);
}


export function QueuePage() {
  const [queueData, setQueueData] = useState(null);
  const [queueError, setQueueError] = useState("");

  useEffect(() => {
    fetch("/review-queue.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Queue file not found.");
        }
        return res.json();
      })
      .then((data) => setQueueData(data))
      .catch((err) => setQueueError("The queue file could not be loaded yet."));
  }, []);

  const items = queueData?.items || [];
  const visibleItems = items.slice(0, 12);

  return shell("Review Queue", "72-hour Intake Queue", <>
    <p className="lead">This is the first automation layer for Reviewed Stories. It is where pulled candidate stories land after the 72-hour intake cycle. The intake script now reads live RSS feeds, scores candidate stories, and writes them into a public queue file the site can display.</p>
    <p>The queue is designed to hold headlines, source information, topic groups, candidate scores, and short notes on why a story was flagged for review.</p>

    <div className="queue-card">
      <div className="queue-header">
        <div><strong>Status</strong></div>
        <div><strong>Headline</strong></div>
        <div><strong>Topic</strong></div>
        <div><strong>Score</strong></div>
      </div>

      {visibleItems.length > 0 ? (
        visibleItems.map((item) => (
          <div className="queue-row" key={item.id}>
            <div>{item.status || "new"}</div>
            <div>
              <div className="queue-headline">{item.headline}</div>
              <div className="queue-source">{item.source_name}</div>
              {item.url && item.url !== "manual-reviewed-story" ? (
                <a className="queue-link" href={item.url} target="_blank" rel="noreferrer">Open source</a>
              ) : null}
            </div>
            <div>{(item.topic_group || "").replaceAll("_", " / ")}</div>
            <div>{item.candidate_score ?? "--"}</div>
          </div>
        ))
      ) : (
        <div className="queue-row queue-placeholder">
          <div>new</div>
          <div>{queueError || "Future pulled stories will appear here after the 72-hour intake script runs."}</div>
          <div>queued</div>
          <div>--</div>
        </div>
      )}
    </div>

    <div className="queue-run-note">
      <strong>Last queue run:</strong> {queueData?.last_run ? queueData.last_run : "Not run yet"}
    </div>

    <h2 className="section-title">What the queue stores</h2>
    <div className="stack">
      <div className="mini-box"><strong>Headline</strong><br />The title of the outside story being considered for review.</div>
      <div className="mini-box"><strong>Source</strong><br />The outlet, official release, or primary source the story came from.</div>
      <div className="mini-box"><strong>Topic Group</strong><br />Politics and public life, law and courts, labor and economics, media and narrative influence, or religion and public power.</div>
      <div className="mini-box"><strong>Candidate Score</strong><br />A ranking signal based on public significance, narrative heat, evidence instability, origin trace value, and human/public impact.</div>
    </div>
  </>);
}

export function SupportPage() {
  return shell("Support", "Support Us", <>
    <p className="lead">Support Living Street Media as it builds stories, analysis, and public-facing efforts meant to strengthen human life.</p>
    <p>This page is a placeholder for the support section and can later be connected to donations, memberships, or other forms of public support.</p>
  </>);
}

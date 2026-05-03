ImmuneBytes Website Redesign — Master Spec
Status: Ready for design handoff Last updated: May 4, 2026 Owner: Aabhas
How to use this document
This is the source-of-truth spec for the ImmuneBytes website redesign. It is intentionally self-
contained: a fresh Claude conversation should be able to read this end-to-end and produce a
faithful design without needing prior context.
Pipeline:
1. This doc → describes what the site is, what it should feel like, and what each page contains.
2. Claude Design → consumes this doc and produces a high-fidelity prototype.
3. Claude Code → consumes the prototype and builds the production site.
Because step 2 is a fresh conversation, anything important must live in this doc — not in chat
history.
Reading order for the design Claude
If you're the design Claude reading this for the first time, read in this order:
1. §§1–2 — project context and design direction (10 minutes; sets the aesthetic compass)
2. §2.5 Quality bar — what "clean and professional" actually means in concrete terms
3. §3 — sitemap, mega menu, and global navigation
4. §4 — the home page in full detail (this establishes most reusable patterns)
5. §5 — Smart Contract Audit (this establishes the service-detail template that §§6–26 follow)
6. §§27–33 — top-level pages (Audit, Clientele, About, Engagement Models, Pricing
Calculator, Blog, Contact). Each introduces new patterns; read all of them.
7. §34 — shared component inventory; treat as the system reference
8. §§5–26 — detailed service pages; skim, then return per-page when building
9. §35 — open questions; see decision-making guidance below
10. §36 — pages tracker and hero pattern map (quick reference)
What's locked vs. what's open
Locked (do not change):
Brand foundation in §2 (palette, typography, three principles)
Sitemap and mega menu structure in §3
The six hero patterns and their conventions documented in §36

-- 1 of 146 --

Page archetypes — every page in this doc fits one of the archetypes catalogued in §36
Existing copy on each page — content is canonical unless explicitly marked as a
placeholder or open question
Open (recommend a default and proceed):
Items in §35 Open Questions. Each item includes a recommended default. If a question
affects your immediate work, take the recommended default and proceed; only escalate
back to Aabhas if the recommended default is genuinely unworkable or the decision is
load-bearing for the rest of the design.
Cross-page transcription artifacts (§35 items A–C) — use the recommended fix.
Decision-making guidance
When this doc is clear, follow it. When it's ambiguous, lean on:
1. The three principles in §2 (Restraint over maximalism / Terminal aesthetic as identity /
Green as accent)
2. The quality bar in §2.5 (what "clean and professional" means)
3. The page archetype the page belongs to (§36)
4. The closest existing pattern in the doc — copy and adapt rather than invent
If two patterns plausibly apply, pick the one that's already used more places. Consistency beats
novelty.
1. Project context
About ImmuneBytes
ImmuneBytes is a cybersecurity firm specializing in Web3 and AI security auditing, with a
complementary practice in traditional Web2 application security. The company has audited
blockchain protocols, smart contracts, AI systems, and enterprise applications for global clients.
Business goal of the website
The website is the company's primary credibility surface. It needs to:
Communicate technical authority to a developer/security-savvy audience (CTOs, security
leads, founders of Web3 protocols, engineering managers at AI companies).
Drive qualified inbound leads — primary CTAs are "Talk to an Expert" and "Send Query."
Showcase proof — audit volume, client logos, case studies, video testimonials, and
technical blog content.

-- 2 of 146 --

Target audience
Primary visitors are technically literate decision-makers:
Web3 founders and core protocol engineers evaluating audit firms
AI/ML engineering leads concerned about LLM and agent security
CTOs and CISOs at enterprises commissioning pen tests
Security-curious developers who arrive via the blog and convert later
The site should never feel like generic enterprise SaaS marketing. It should feel like a serious
technical operator's home page.
Constraint: content is fixed, design is the variable
The redesign keeps the existing copy and section structure of the current site. The work is
purely a visual and structural redesign for "professional and clean." Where this doc references
content, treat it as the canonical text unless explicitly marked as a placeholder.
2. Design direction — "Terminal Noir"
This is the working aesthetic direction. It has been validated through prior iteration as the right
fit for ImmuneBytes' audience.
Aesthetic philosophy
Inspired by Stripe and Linear in their professional restraint, with a developer/security firm
identity layered on top via terminal motifs. Clean, dense, confident, technical. Not flashy.
Three principles, in priority order:
1. Restraint over maximalism. No gradient walls, no "AI generated" hero gloss, no parallax
fireworks. The page should feel like it was built by a serious team for a serious audience.
2. Terminal aesthetic as identity anchor. Monospace section labels prefixed with $ ,
occasional terminal/code mockups, a deliberate "this site was built by people who use the
command line" feel. This is the primary visual signature that makes the site distinctly
ImmuneBytes and not generic SaaS.
3. Green as accent, never dominant. Immune Green is reserved for high-priority highlights
(primary CTAs, key numbers, hover states, the $ prefix glyph, accent rules). Large green
fills are explicitly out of bounds.

-- 3 of 146 --

Color palette
Role 	Color 	Hex 	Usage
Immune Green Brand accent 	#74BF00 	Primary CTAs, key emphasis, $ glyph, hover
states, link underlines
Absolute Black Deep
background
#000000 	Hero, footer, dark sections
Dark Slate 	Mid surface 	#272526 	Cards on dark, secondary surfaces, hover
backgrounds
Pure White 	Light
background
#FFFFFF 	Light sections, cards on dark
Zinc-50 to Zinc-
900
Neutrals 	Tailwind zinc
scale
Body text, borders, dividers, secondary surfaces
Light sections use white / zinc-50 backgrounds with zinc-900 text. Dark sections use black / zinc-
900 backgrounds with zinc-100 text. Alternating these creates visual rhythm down the page.
Typography
Departing from the original Poppins/Raleway brand spec in favor of a stack better suited to the
developer aesthetic:
Outfit — display headlines, section titles. Geometric, modern, slightly more character than
Inter.
DM Sans — body copy, UI labels. Highly legible at small sizes.
Fira Code — monospace for section labels, terminal mockups, code blocks, stat labels, and
the $ prefix system.
Typographic hierarchy should lean on size and weight contrast, not color. Headlines large and
tight; body looser; mono small and uppercase for section labels.
Design tokens
Spacing: generous vertical rhythm. Sections breathe. Min 96–128px vertical padding on
desktop section breaks.
Border radius: small ( rounded-md , rounded-lg ). Pill buttons are OK for primary CTAs.
Avoid heavy rounding on cards — sharp corners read more technical.
Borders: prefer 1px zinc-800 on dark, zinc-200 on light. Used to define cards and rule
sections.

-- 4 of 146 --

Shadows: sparingly. Linear/Stripe rarely use heavy shadows; lean on borders and
background contrast instead.
Section label system
Every major section is preceded by a small monospace label in this format:
Font: Fira Code, ~12–13px
Color: zinc-500 on dark, zinc-600 on light
The $ glyph itself is rendered in Immune Green
Sits above the section heading with ~16px gap
This is the single most important visual signature of the site. It must appear consistently.
2.5 Quality bar — what "clean and professional" means
The brief says "clean and professional." Those words are easy to misread as "minimal but boring."
That's not what's meant here. This section makes the bar concrete so design Claude knows what
to optimize for.
Clean and professional means:
Generous whitespace. Sections breathe. Cards have honest internal padding. Nothing
feels crammed. If two elements look like they're competing for attention, separate them
with more space, not a divider.
Disciplined typography. Two type families maximum on any given screen (Outfit + DM
Sans, with Fira Code accents). No more than 3 weights in active use per page. Font-size
jumps are deliberate — typically scale steps of 1.25x or 1.5x, not arbitrary.
Restrained color. Zinc neutrals carry 80% of the visual weight. Immune Green is for
emphasis only — primary CTAs, key numbers, the $ glyph, accent rules, hover states.
Mission/Vision cards in §29.5 are the documented exception. Black is for hero/footer/dark
sections. White and zinc-50 alternate for content surfaces.
Hairline borders, not shadows. 1px zinc-200 on light surfaces, 1px zinc-800 on dark. Heavy
shadows read as 2010s SaaS marketing — avoid.
Calm motion. Fades and slight translates only. No bouncing, no parallax beyond what's
specifically called out in the spec, no autoplay video, no scroll-jacking. Animations are 200–
600ms ease-out. The terminal mockup typing animation, matrix rain, and binary rain
backdrops are the only continuous motion on the site.
$ section_name

-- 5 of 146 --

Sharp-ish corners. ~8–12px corners on cards. Pill buttons are fine for primary CTAs. No
24px+ rounding — too friendly for a security firm.
Numbers and code rendered in monospace. Stats labels, section labels, terminal mockups,
code snippets, prices, addresses, phone numbers — all Fira Code. Anything that's "data" or
"machine-touched" gets the mono treatment.
Things that violate the quality bar (do not do):
Gradient backgrounds across full sections (small green decorative gradients inside dark
cards are fine, e.g., the §31.7 cost range card)
Generic enterprise SaaS hero photography (smiling team in front of a wall of monitors)
Stock illustration of abstract figures pointing at charts
Emoji-as-decoration in headings or buttons
Heavy drop shadows on cards
Multiple competing accent colors (only Immune Green is an accent; the chart palette in
§27.4 is the lone exception)
Carousels for primary content
Centered body copy in long passages (centered headings are fine)
Auto-playing background video
The litmus test: if a section feels like it could appear on Stripe's or Linear's website, it's at the
quality bar. If it feels like a marketing template, it's below the bar.
3. Sitemap & global navigation
Top-level nav (always visible in header)
Label 	Type 	Notes
Solutions 	Mega menu (4 columns) 	See expansion below
Audit 	Page link 	Audit process / methodology page
Client 	Page link 	Client roster / case studies index
About 	Page link 	Company / team page
Pricing 	Page link 	Pricing page
Blog 	Page link 	Blog index
Talk to an Expert 	Primary CTA button 	Routes to contact / consultation form

-- 6 of 146 --

Solutions mega menu — four columns
When the user hovers/clicks "Solutions," a four-column mega menu drops down. Each column is
a service pillar. Column headers have an icon and title; child items are indented links; some
children have sub-children.
Column 1: Web3 Security
Smart Contract Audit
By Chain
By Project Type
Protocol & Infrastructure Audit
L1/L2 Audit
Consensus Frameworks Audit
Tokenomics Audit
Wallet Security
Dapp Integration Security
Wallet Extension Audit
Column 2: Web2 Security
Penetration Testing
Web Application Testing
Mobile Application Testing
Desktop Application Testing
Column 3: AI Security
AI Agent Audit
Chatbot Security
LLM Integration Audit
Automation & Workflow Audit
Column 4: Security Consultancy
Shift-Left Security (SSDL)
Test & Fuzz-Driven Development
Pre-Audit Dynamic Testing
Security Research & Engineering

-- 7 of 146 --

Mega menu visual treatment:
Light card overlay on the dark hero (white background, soft border, sharp 12px corners)
Each column header has a small green-filled icon tile (rounded-md) + bold title + green
underline rule
Child links: zinc-700 default, zinc-900 + green left-bar on hover
Open/close: subtle fade + 4px y-translate, no bouncy animation
On mobile: collapses to an accordion within a full-screen drawer
Mega menu must be clean — explicit requirements:
The mega menu is the highest-traffic UI element on the site. Visitors hit it before anything else. It
must feel effortless. Specifically:
Generous internal padding. ~32px vertical, ~32–40px horizontal inside the card. Columns
have ~48px horizontal gap between them.
Clear column hierarchy. Column header (icon tile + title + green underline) is visually
distinct from child links. Child links sit at one indentation level; sub-children at one further.
Never more than two indentation levels.
Restrained typography. Column header: Outfit 16px weight 600 zinc-900. Child link: DM
Sans 14px zinc-700. Sub-child: DM Sans 13px zinc-600. No more than these three
sizes/weights in the entire menu.
No decorative clutter. No background patterns, no badges on items, no "New" labels, no
gradients, no shadows beyond a single soft drop shadow on the dropdown card itself. The
icon tiles for column headers are the only visual flourish.
Hover states subtle. Child link hover: text shifts to zinc-900 + small Immune Green left bar
appears. ~150ms. No background fill on hover, no font-weight shift.
Single soft border. 1px zinc-200 around the card. No double borders, no inner rules
between columns — column separation is achieved through whitespace only.
Mobile drawer must stay clean. Same restraint applies: full-screen overlay with collapsible
accordions, generous tap targets (~44px), single hairline between accordion items, no
decorative elements.
What to avoid: packed columns of small text, background tints behind the icon tiles, multiple
accent colors, animated icon entries, "Featured" tiles inside the menu, embedded CTAs other
than the natural service links.
Footer nav (global)
Three columns + newsletter:
Services (mirror of top-level pillars): Penetration Testing, Web3 Security, AI Security,
Security Consultancy

-- 8 of 146 --

Quick Links: Case Studies, Audits, Blog, Contact Us
Newsletter: email input + subscribe button
Social icons: row, monochrome zinc-500, hover green
Bottom bar: Terms of Service | Privacy Policy | Powered by Finesse Digital | © 2026
ImmuneBytes. All Rights Reserved.
Full footer spec is in §4.10 below since it's first introduced on the landing page.
4. Landing page (Home) — section-by-section
The homepage flows top-to-bottom through ten sections. Section IDs in $ section_name
format are also the literal labels rendered in the design.
Section index
# 	Section ID 	Type 	Background
4.1 	$ header 	Global nav 	Transparent over hero / black on scroll
4.2 	$ hero 	Hero 	Black
4.3 	$ trusted_by 	Logo strip 	White
4.4 	$ impact 	Stats 	Black
4.5 	$ services 	Service grid 	Zinc-50
4.6 	$ case_studies 	Featured case study 	White
4.7 	$ testimonials 	Video + quote 	Zinc-900
4.8 	$ insights 	Blog teaser 	White
4.9 	$ cta 	Conversion banner 	Black with terminal motif
4.10 	$ footer 	Global footer 	Black
The alternating black ↔ white rhythm gives the page its pacing. Green appears as accent within
both.
4.1 Header — $ header
Purpose: persistent navigation and primary CTA.

-- 9 of 146 --

Layout:
Full-width, fixed to top, height ~72px desktop / ~64px mobile
Left: logo (the angular ImmuneBytes "B" mark + wordmark). Wordmark is "Immune" in
white + "Bytes" in green when on dark, inverted when on light scroll.
Center: nav items (Solutions, Audit, Client, About, Pricing, Blog) — Outfit, 15px, white on
dark / zinc-900 on light
Right: "Talk to an Expert" — primary CTA, green pill button with right-arrow chevron icon
Behavior:
Transparent background while pinned at top of hero. Once user scrolls past the hero,
header transitions to solid black with a 1px zinc-800 bottom border (200ms fade).
"Solutions" is a hover-and-click trigger. On hover, the mega menu drops down (see §3). On
mobile, tapping opens a full-screen drawer with the same content as an accordion.
Active page indicator: a 2px green underline beneath the current page's nav item.
Components used: Logo, NavItem, MegaMenu, ButtonPrimary
4.2 Hero — $ hero
Purpose: state what ImmuneBytes does, who it serves, and offer two paths forward (talk to us,
learn more). Establish the terminal aesthetic on first impression.
Content (verbatim):
Eyebrow label: $ hero (rendered as the section label)
Headline: "Security-First Protection for the Future of Innovation"
Subhead: "Our proactive approach ensures your digital assets and intelligent systems
remain impenetrable in an evolving threat landscape."
Primary CTA: "Send Query" → contact form
Secondary CTA: "Learn More" → scrolls to $ services
Layout — asymmetric split:
The hero is split roughly 55/45 left/right on desktop:
Left column: copy stack (eyebrow → headline → subhead → CTAs), left-aligned, with the
headline weighted to read as the dominant element on the page. Headline is Outfit, ~64–
72px desktop, tight tracking, white. Subhead is DM Sans, 18–20px, zinc-400, max-width
~520px. CTAs sit in a row, primary green pill + secondary outlined.

-- 10 of 146 --

Right column: live terminal mockup. A stylized terminal window (zinc-900 background,
zinc-800 border, three macOS-style dots in the chrome, a window title like immunebytes —
audit pipeline ). Inside, animated text simulates an audit pipeline running:
Lines type out sequentially with a 60–120ms cadence, then the cursor blinks. The animation
loops every ~12s. Findings counts and contract names should feel realistic but are illustrative, not
real data.
Background:
Pure black with a subtle vertical "matrix rain" effect — thin green-tinted vertical streaks at
low opacity (~10–15%), slowly drifting downward. This is the only place on the site where
the matrix motif appears at this scale; treat it as a hero-only flourish.
A faint radial glow behind the terminal mockup, green at ~5% opacity, to anchor the eye.
Mobile layout:
Single column. Copy stack on top, terminal mockup below. Terminal mockup scales down
and the typing animation continues. CTAs stack full-width.
Behavior:
On scroll into view, copy elements fade + 8px y-translate in, staggered by 80ms.
Terminal animation autoplays on load and loops indefinitely. Pauses when out of viewport
for performance.
Components used: SectionLabel, Headline, Subhead, ButtonPrimary, ButtonSecondary,
TerminalMockup
Open question: confirm whether "Send Query" should remain the primary label or shift to "Get
an Audit" / "Request Audit" — the latter reads more concrete for a security firm. Defaulting to
existing copy for now.
4.3 Trusted by — $ trusted_by
Purpose: instant social proof via client logo strip.
Content:
$ immunebytes scan ./contracts
→ parsing 247 functions across 12 contracts
→ running slither + custom detectors
→ 3 critical findings, 7 high, 14 medium
✓ report generated: audit-2026-05-03.pdf
$ _

-- 11 of 146 --

Eyebrow label: $ trusted_by
Heading: "Trusted by Leading Companies"
Logos: Vanar, E.Money, Dernex, cSigma, [logo TBD — appears partially obscured in
source], Plume
Layout:
White background, ~80–100px vertical padding
Heading center-aligned, small (DM Sans, 14–15px, uppercase, zinc-500, letter-spaced)
Logos in a single row on desktop, evenly distributed, vertically centered
All logos rendered in zinc-700 monochrome by default; on hover, the individual logo
regains its brand color (subtle, 200ms transition)
Logos scale to consistent height (~32px), widths vary naturally
On mobile: logos wrap to 2–3 rows
Behavior:
Optional: very slow horizontal marquee on tablets/mobile if the logo count grows beyond
what fits cleanly in a row. Desktop stays static.
Components used: SectionLabel, LogoStrip
Open question: confirm the obscured 5th logo. Confirm whether logos should link out to the
client's site or to that client's case study (recommendation: link to case study where one exists,
otherwise no link).
4.4 Impact stats — $ impact
Purpose: quantitative credibility — the numbers that prove ImmuneBytes' scale.
Content:
Eyebrow label: $ impact
Heading: "ImmuneBytes: Built on Security First" — "Built on Security First" rendered in
Immune Green, rest in white
Subhead: "Trusted by global teams for a security-first approach, ImmuneBytes has
completed [N+] years of global experience securing applications, protocols and AI systems
across Web3 and enterprise ecosystems."
Stats (three):
608+ — label TBD (likely "Audits Completed" — confirm)
192+ — label TBD (likely "Clients Secured" or "Protocols Audited" — confirm)

-- 12 of 146 --

61+ — label TBD (likely "Ecosystems" or "Chains Covered" — confirm)
Layout:
Black background, ~120px vertical padding
Heading center-aligned, Outfit ~48px desktop, tight tracking
Subhead center-aligned, DM Sans 18px, zinc-400, max-width ~720px
Stats row below subhead: three columns, evenly spaced, center-aligned within each
Number: Outfit, 72–88px, weight 600, white
Label: Fira Code, 12px uppercase, zinc-500, sits below the number
The current site shows a large angular green "B" mark dropped behind/between the stats.
Recommendation: drop this. It competes with the numbers and adds visual noise. Replace
with a thin green vertical separator rule between each stat (1px, zinc-800 with a green-
tinted top accent).
Behavior:
Numbers count up from 0 to their final value when section enters viewport (1.2s ease-out).
Stats animate in staggered (left → right, 100ms apart).
Components used: SectionLabel, Heading, Subhead, StatRow, Stat
Open question: confirm stat labels and whether the count-up animation is wanted (some brands
prefer static numbers as more "serious"). Recommend confirming.
4.5 Services — $ services
Purpose: introduce the four service pillars at a high level. Acts as the bridge from "who we are" to
"what we sell."
Content:
Eyebrow label: $ services
Heading: "Services engineered for Modern architectures" — "Modern architectures"
emphasized (green or just bold weight)
Subhead: "We are a security-first services firm, embedding cybersecurity at the core of
technology and business decisions—moving beyond reactive compliance to deliver
proactive, resilient, and trusted systems built for real-world risk."
Header CTA (top-right of section): "All Services" → routes to /solutions or equivalent index
Four service cards (numbered 01–04):

-- 13 of 146 --

# Title 	Description 	Link
01 Penetration
Testing
We simulate real adversaries: mapping entry points,
chaining weaknesses, and proving impact with
tight exploit narratives you can actually fix.
Read More →
/solutions/web2/pentest
02 Web3 Security We audit protocols, contracts, and economic
models before [...] (continuation needed — confirm
full copy)
Read More →
/solutions/web3
03 AI Security 	We test the failure modes that matter. AI security
requires understanding prompt manipulation and
integration vulnerabilities.
Read More → /solutions/ai
04 Security
Consultancy
(copy needed — confirm: this row was clipped in
source screenshot)
Read More →
/solutions/consultancy
Footer CTA (bottom of section): "Audit Reports" pill button → routes to public reports
index
Layout:
Zinc-50 background, ~128px vertical padding
Header row: section label + heading + subhead on the left (~60% width); "All Services" CTA
top-right
Four service rows below the header, each row is a horizontal band (not a 4-up grid):
Left: a large numeral 01 / 02 / etc. in Fira Code, ~64px, zinc-300 (decorative)
Center-left: a square icon tile (~64x64px), zinc-900 background, white line icon, sharp
corners
Center: title (Outfit 28px) + description (DM Sans 16px, zinc-600, max-width ~640px)
Right: "Read More →" link, zinc-600 default, green on hover
Each row separated by a 1px zinc-200 hairline rule
Hover: full row gets a subtle zinc-100 background tint + the green numeral lightens;
entire row is clickable
Footer CTA centered below the rows, ~80px gap
Behavior:
Rows stagger-fade in on scroll (60ms apart).
Hover entire row to highlight (entire row is the hit target, not just the link).

-- 14 of 146 --

Components used: SectionLabel, Heading, Subhead, ButtonGhost (top-right link), ServiceRow,
ButtonPill (footer)
Note: the horizontal-row layout is a deliberate departure from the typical 4-up card grid. It reads
more editorial and gives each service room to breathe — and it scales down to mobile cleanly
(rows just stack).
4.6 Case studies — $ case_studies
Purpose: show depth via one featured case study, with a path to the full index.
Content:
Eyebrow label: $ case_studies
Heading: "Securing High-Impact Enterprise Systems"
Header CTA (top-right): "All Case Studies" → routes to /case-studies
Featured case study: cSigma Finance Audit
Tag: "Case Study"
Title: "cSigma Finance Audit"
Description: "Background: cSigma Finance is a decentralized lending protocol,
designed to seamlessly connect global borrowers and lenders. By leveraging AI, the
protocol optimizes critical aspects of the lending process, including credit rating,
pricing, and risk management. It facilitates secure capital movements, on-chain
accounting, and settlement, while allowing third-party underwriters [...]"
CTA: "Read More →" → routes to that case study's detail page
Layout:
White background, ~128px vertical padding
Header row mirrors the services pattern (heading left, CTA top-right)
Featured case study presented as a two-column card:
Left (40%): dark visual block — black background with the green angular mark and a
subtle terminal-glyph pattern. Tag pill "Case Study" sits top-left of the visual. The case
study title overlays the visual in white, Outfit 28px.
Right (60%): white-on-zinc-50 panel with the description text (DM Sans 16px, zinc-
700, generous line-height) and the "Read More →" link at the bottom-left
Card has a 1px zinc-200 border, no shadow, sharp corners
Behavior:

-- 15 of 146 --

Hover anywhere on the card → "Read More →" arrow translates 4px right, left visual block
subtly brightens
Card fades in on scroll
Components used: SectionLabel, Heading, ButtonGhost, CaseStudyCard
Note: the source design shows just one featured case study. Recommend keeping it that way for
now — adding a 2-up or carousel here dilutes the "this is our hero case" effect and pushes too
much weight onto this section.
4.7 Testimonials — $ testimonials
Purpose: humanize the brand with founder-level praise; the video format is a proof asset, not just
a quote.
Content:
Eyebrow label: $ testimonials
Heading: "What Our Clients Trust us with"
Header CTA (top-right): "All Testimonials"
Featured testimonial:
Video thumbnail (a man, brown beard) with green circular play overlay
Quote: "Robotis can do audits, but the personal touch makes a difference. That's why
we love ImmuneBytes! Not only do they do top-class audits, but they also take the
time to understand our project and why certain things are done in specific ways. They
take the time to ensure we feel heard, which shows in their work."
Attribution: Yog Shrasti (name spelling needs verification), Co-Founder & CEO,
[Company name needs verification — appears to be "Pernoram" or similar in source]
Carousel: pagination dots indicate this section cycles through multiple testimonials
Layout:
Zinc-900 background, ~128px vertical padding (alternating dark again — second dark
moment after impact)
Header row mirrors the services/case studies pattern
Two-column layout below header:
Left (45%): video thumbnail, ~16:9, sharp corners, 1px zinc-700 border. Center play
button: green circle (Immune Green), 64px, white play triangle. Hover: button scales
to 1.05.
Right (55%): quote panel
A large green opening-quote glyph ( " ) at the top-left, ~64px Outfit, low opacity

-- 16 of 146 --

The quote text in DM Sans 20px, zinc-100, leading-relaxed, max-width ~520px
Attribution below: name (Outfit 16px white) + title/company (Fira Code 13px
zinc-500)
Pagination dots beneath: 4–5 small circles, current dot is green-filled, others
zinc-700
Behavior:
Video click opens a modal with the full video (or autoplays inline — recommend modal for
performance)
Pagination cycles testimonials manually; no autoplay (autoplay on testimonials feels
pushy)
Quote crossfades on dot click
Components used: SectionLabel, Heading, ButtonGhost, VideoThumb, Quote, PaginationDots
Open question: confirm spelling of "Yog Shrasti" and his company. The source screenshot is low-
res and the name is partially illegible.
4.8 Insights / blog teaser — $ insights
Purpose: signal technical depth via authored blog content; secondary lead magnet for security-
curious developers.
Content:
Eyebrow label: $ insights
Heading: "Your Hub for smart reads on Audit-Driven Engineering Insights"
Header CTA (top-right): "All Blog Articles" → /blog
Featured posts (two):
1. Alchemy's Modular Account: Technical Deep Dive into ERC-6900
Tag: Web3 Security (or whichever pillar fits)
Cover image: stylized circuit / abstract security graphic
2. The Signature Trap: Why Wallet UX is Failing Users in Web3
Tag: Wallet Security / UX
Cover image: stylized circuit / abstract security graphic
Layout:
White background, ~128px vertical padding
Header row mirrors prior sections

-- 17 of 146 --

Two-column blog card grid below:
Each card: cover image on top (16:9), 1px zinc-200 border, sharp corners
Below image: tag pill (small, zinc-100 bg, zinc-700 text, Fira Code uppercase 11px)
Title: Outfit 22px, zinc-900, max 2 lines (truncate with ellipsis)
Footer of card: small "Read article →" link, zinc-600 default, green on hover
Cards have generous internal padding (~24px)
Behavior:
Hover card: cover image scales 1.02 with subtle brightness lift; arrow translates 4px right
Click anywhere on card → article page
Components used: SectionLabel, Heading, ButtonGhost, BlogCard
Open question: confirm tag taxonomy. Recommend tags map to the four service pillars +
"Engineering Notes" for general-craft posts.
4.9 Bottom CTA — $ cta
Purpose: the page's terminal conversion moment. Aimed at users who scrolled all the way down
and are ready to engage.
Content:
Eyebrow label: $ cta
Heading: "Let's Evaluate Risks and Secure your Systems"
Two CTAs side-by-side: "Talk to an Expert" (primary green pill), "Send Query" (secondary
outlined)
Layout:
Black background with a subtle terminal-grid motif (1px zinc-900 grid lines, very low
opacity, 24px cells) and a faint green vertical light streak on each side — echoes the hero
without competing with it
~160px vertical padding, content center-aligned
Heading: Outfit 48px desktop, white, with "Evaluate Risks" in Immune Green
CTAs in a row beneath, ~24px gap
Behavior:
The two side green light streaks pulse slowly (2.5s cycle, opacity 5% → 15%) for ambient
motion

-- 18 of 146 --

Section enters with a fade
Components used: SectionLabel, Heading, ButtonPrimary, ButtonSecondary
4.10 Footer — $ footer
Purpose: global navigation + brand reinforcement + secondary conversion (newsletter).
Content:
Logo block (left column):
ImmuneBytes wordmark + B-mark
Tagline: "A blockchain security audit firm with the goal of making the Web3 space
more secure through innovative and effective solutions."
Phone: +91 [number] (Fira Code styling)
Email: team@immunebytes.com (Fira Code styling)
Services column: Penetration Testing, Web3 Security, AI Security, Security Consultancy
Quick Links column: Case Studies, Audits, Blog, Contact Us
Newsletter column:
Heading: "Subscribe to our Newsletter"
Description (one line): brief value prop, e.g., "Audit deep-dives and Web3 security
insights, monthly."
Email input + "Subscribe" button
Social icons row beneath: LinkedIn, X/Twitter, GitHub, YouTube (or whichever apply
— confirm)
Bottom bar (full-width strip):
Left: Terms of Service | Privacy Policy
Center: "Powered by Finesse Digital"
Right: © 2026 ImmuneBytes. All Rights Reserved.
Layout:
Black background, ~96px top padding, ~24px bottom padding
Top section: 4 columns on desktop (logo+contact 2 cols wide, then services / quick links /
newsletter each 1 col)
1px zinc-800 rule separating top section from bottom bar
Bottom bar: smaller text (DM Sans 13px, zinc-600), three-zone justify
Behavior:

-- 19 of 146 --

Newsletter submit shows inline confirmation (no toast, no modal — just "Subscribed ✓"
replacing the input)
Social icons are zinc-500 default, green on hover
Footer must be clean — explicit requirements:
The footer is the last thing users see on every page. It needs to feel deliberate and confident, not
like an afterthought of links. Specifically:
Generous spacing between columns. ~80–100px gap between the 4 columns on desktop.
Whitespace is what makes the footer feel premium — packed columns make it feel like a
directory.
Generous vertical breathing room. ~96px top padding before content begins, ~24–32px
bottom padding before the bottom bar starts. The bottom bar itself has ~24px vertical
padding.
Disciplined typography. Column heading: Outfit 14–15px weight 600 zinc-300. Link: DM
Sans 14px zinc-400 → zinc-100 on hover. Tagline body copy: DM Sans 14px zinc-400, line-
height 1.7. Bottom-bar text: DM Sans 13px zinc-600. Five sizes maximum across the entire
footer — these four plus the heading on the newsletter column.
Single hairline separator. 1px zinc-800 between the main footer content and the bottom
bar. No additional dividers between columns. Column separation is achieved through
whitespace only.
Restrained color. Black background, zinc text scale, Immune Green only for: social icon
hover state, newsletter "Subscribe" button, and any link hover where green underline
confirms interactivity. No gradient backgrounds, no background patterns, no decorative
shapes.
Newsletter form is clean, not styled. Email input: zinc-900 background, 1px zinc-700
border, white text, zinc-500 placeholder, ~12px corners. Subscribe button: green pill
(matches ButtonPrimary ). No fancy form treatment, no hover rotations on the arrow icon,
no animated input focus.
Social icons are restrained. ~20px monochrome glyph icons in zinc-500. Sit in a horizontal
row, ~24px gap between. Hover transitions to Immune Green over 150ms. No filled circles
around the icons, no background pills.
Bottom bar is one calm row. Three zones (left: legal links, center: powered-by credit, right:
copyright). All text the same DM Sans 13px zinc-600. No buttons, no language switcher, no
additional links beyond what's specified.
What to avoid: packed link lists in tight columns, large social icon buttons with backgrounds,
"Back to top" buttons floating in the footer, embedded chatbot prompts, multiple gradients,
decorative borders, tagline in a different typeface than the rest, italics, drop caps, emoji.

-- 20 of 146 --

Components used: Logo, FooterColumn, NewsletterForm, SocialIconRow
Open question: confirm exact phone number; confirm which social platforms ImmuneBytes is
active on.
5. Smart Contract Audit page
This is a service detail page under Web3 Security → Smart Contract Audit. It establishes the
template that other sub-service pages (penetration testing, AI agent audit, etc.) will likely extend
with their own copy.
Section index
# 	Section ID 	Type 	Background
5.1 	$ header 	Global nav 	(same as §4.1)
5.2 	$ smart_contract_audit 	Page hero 	Black
5.3 	$ coverage 	Coverage list 	White
5.4 	$ failure_modes 	Failure mode cards 	Black with green wash
5.5 	$ process 	Numbered process 	White
5.6 	$ tools 	Tools & standards 	Black with green accents
5.7 	$ deliverables 	Deliverables list 	Black with terminal grid
5.8 	$ case_studies 	Featured case study 	(reuses §4.6 pattern)
5.9 	$ testimonials 	Video + quote 	(reuses §4.7 pattern)
5.10 	$ faq 	FAQ accordion 	White
5.11 	$ cta 	Conversion banner 	(reuses §4.9 pattern)
5.12 	$ footer 	Global footer 	(same as §4.10)
This page introduces several new components — coverage list, failure mode cards, process steps
with binary backdrop, two-column tool list, deliverables list, and FAQ accordion. They should all
be built reusable so the next sub-service pages can compose them with their own copy.
5.1 Header
(Same as §4.1 — global nav.)

-- 21 of 146 --

5.2 Hero — $ smart_contract_audit
Purpose: identify the page, frame the threat in the audience's language, set up the technical
depth that follows.
Content:
Eyebrow label: $ smart_contract_audit
Headline: "Smart Contract Audit"
Subhead: "Smart contracts are immutable by default and exploitable by nature. Once value
is live, attackers don't 'report bugs,' they devour your TVL. We prioritize real bad paths and
economic abuses, not cosmetic linting."
Layout:
Black background, ~120px vertical padding
Centered headline, Outfit ~64px, white, tight tracking
Subhead beneath, DM Sans 18px, zinc-400, max-width ~720px, center-aligned
Same matrix-rain backdrop as the home hero, but at lower density (~50%) and lower
opacity. Keeps visual continuity without re-using the home page's signature treatment at
full strength.
No CTAs in this hero. The page itself is the pitch; conversion happens at the bottom CTA
section.
Behavior:
Subtle fade-in on load (300ms).
Components used: SectionLabel, Headline, Subhead, MatrixRainBackdrop (low-density
variant)
5.3 What we cover — $ coverage
Purpose: declare audit scope concretely. The audience scans this list to confirm the audit covers
what they need.
Content:
Eyebrow label: $ coverage
Heading: "What we cover"
Six coverage areas (single-line items, no descriptions):
1. Access control and privilege boundaries

-- 22 of 146 --

2. State transitions, invariants, and asset accounting
3. External call, reentrancy, and replay surfaces
4. Upgradeability, initialization, and governance amendments
5. Oracle/price dependencies and MEV exposure
6. Inflation/multipliers, fee logic, and economic redirects (verify last word — partially
obscured in source)
Layout:
White background, ~96px vertical padding
Asymmetric two-column on desktop:
Left (~40%): the green angular ImmuneBytes B-mark, large, with a faint matrix grid
behind it. This is the only section of the page that uses the brand mark prominently —
anchors the page's visual identity here.
Right (~60%): heading on top, six-item list below
List items: each prefixed with a small green chevron › (Fira Code, Immune Green)
followed by the item text in DM Sans 16px zinc-700; items separated by 1px zinc-100
hairlines for scanability
Behavior:
List items stagger-fade in on scroll, 50ms apart.
Components used: SectionLabel, Heading, CoverageList
Open question: the 6th item's final word(s) need verification.
5.4 Common Failure Modes — $ failure_modes
Purpose: demonstrate technical depth by naming the actual failure categories. Should read like a
senior auditor wrote it, not a marketer.
Content:
Eyebrow label: $ failure_modes
Heading: "Common Failure Modes"
Three failure mode cards:
1. Asset loss and accounting breaks — (description copy needs verification — source
legibility was poor)
2. Control-plane compromise — (description copy needs verification)

-- 23 of 146 --

3. [Title needs verification — rendered as garbled characters in source] — (description
copy needs verification)
Layout:
Black background with a green-tinted radial wash at top (~10% green over black) — gives a
"warning" tonal shift without going overboard
Heading top-center, Outfit 40px white
Three cards stacked vertically, full-width, ~24px gap between
Each card is two-column: icon tile on the left (~80x80px, dark surface, white line
icon), content stack on the right (title in Outfit 24px white + description in DM Sans
16px zinc-400)
Card background: zinc-900/70 with 1px zinc-800 border, sharp corners
Hover: border shifts to immune-green tint at ~30% opacity
Behavior:
Stagger-fade in on scroll, 80ms apart.
Components used: SectionLabel, Heading, FailureModeCard
Open question (high priority): the third card's title appears as garbled/broken text in the source
screenshot — likely a font-loading or encoding bug on the live site. Need the actual title. All three
card descriptions also need full-copy verification from a clean source.
5.5 How we work — $ process
Purpose: describe the audit methodology as a sequenced process. Communicates rigor and
answers "what happens when you hire us?"
Content:
Eyebrow label: $ process
Heading: "How we work"
Six numbered steps (copy and step count need verification — source was partially
obscured):
1. Spec first — Document invariants and trust properties.
2. Manual review — Logic, environments, and trust boundaries.
3. Adversarial testing — How could it fail? What's the worst case?
4. Property checks — Fuzzing/symbolic checks at edge points.
5. Report + extract — Each finding verified and reproducible.
6. [Step 6 needs verification — possibly cut off in source]

-- 24 of 146 --

Layout:
White background, ~120px vertical padding
Two-column:
Left (~35%): decorative visual — a green binary code rain animation. Vertical streams
of 0 s and 1 s in green at varying opacities, slowly cascading. Adds technical texture
without taking focus from the right.
Right (~65%): vertical stack of process step cards
Each step card:
Step number tab top-right ( 01 , 02 , etc., Fira Code 14px, zinc-500)
Title with small icon at top-left (Outfit 22px zinc-900)
Description (DM Sans 14px zinc-600, max ~360px wide)
White background, 1px zinc-200 border, sharp corners, generous padding
~16px gap between cards
Behavior:
Binary rain runs while section is in viewport (pauses when out of view for performance).
Cards stagger-fade in (60ms apart) on scroll-into-view.
Components used: SectionLabel, Heading, BinaryRainBackdrop, ProcessStep
Open question: confirm whether step 6 exists, and provide title/description for any steps where
copy is incomplete above.
5.6 Tools and Standards — $ tools
Purpose: signal use of industry-standard tooling and alignment with recognized security
frameworks.
Content:
Eyebrow label: $ tools
Heading: "Tools and Standards"
Two columns (lists):
Core Tooling — bulleted list of audit tools used (specific items partially obscured in
source — confirm full list)
Audit outputs — bulleted list of artifacts produced (items partially obscured —
confirm)

-- 25 of 146 --

Tool/standards logo row below the columns: PortSwigger, GitHub, MITRE, ATT&CK, [5th
logo TBD]
What we map to — short caption beneath the logos (exact copy needs verification — likely
references OWASP / SWC / custom checklists)
Layout:
Black background with a soft green wash (~8% opacity) — tonal continuity with $
failure_modes
Heading center-aligned, Outfit 40px white
Two-column list directly below heading. Each column has a subheading (Outfit 20px) +
bulleted list (DM Sans 15px zinc-300)
Tool logo row centered, monochrome zinc-400 default with hover-color reveal (same
pattern as $ trusted_by in §4.3)
"What we map to" line in Fira Code 13px zinc-500, center-aligned
Behavior:
Logos and lists fade in on scroll.
Components used: SectionLabel, Heading, TwoColumnList, ToolLogoStrip
Open question: core tooling and audit outputs lists are partially obscured in source — need both
full lists. Also confirm the 5th tool logo and the exact "What we map to" caption text.
5.7 Deliverables — $ deliverables
Purpose: make the audit's output concrete. The reader leaves knowing exactly what they get.
Content:
Eyebrow label: $ deliverables
Heading: "Deliverables"
Four deliverables (each preceded by a green checkmark ✓ ):
1. Findings prioritized by real potential and exploitability
2. Proofs/tests/transactions for critical issues
3. Clear invariants violated + conditions required
4. Retest notes confirming fixes close the path
Layout:
Black background with a faint terminal-grid motif (1px zinc-900 grid lines, 24px cells, ~5%
opacity)

-- 26 of 146 --

Heading top-left, Outfit 40px white
List below heading, single column, max-width ~640px
Each item: green ✓ glyph on the left, item text in DM Sans 18px zinc-200, ~20px vertical
gap between items
Behavior:
Checkmarks animate in on scroll (SVG path-draw, 400ms each, staggered 100ms apart).
Components used: SectionLabel, Heading, DeliverablesList
5.8 Case studies
Reuses the §4.6 case study pattern. Featured case study on this page: "Ethernity Project Audit"
— a smart-contract-specific case is more relevant here than the home page's cSigma feature.
The CaseStudyCard component should accept a featured prop so each page can specify its
own primary case study.
Open question: confirm Ethernity is the right featured case for this page; provide full case study
description copy.
5.9 Testimonials
Reuses the §4.7 testimonials pattern. The featured testimonial should be from a smart-contract-
audit client specifically — the source shows a different person from the home page's, which is
correct: testimonials should be page-relevant where possible.
Open question: name, company, and quote text for the page's featured testimonial were illegible
in source — need verification.
5.10 FAQ — $ faq
Purpose: preempt the questions buyers have before booking a call. Shortens the sales cycle.
Content:
Eyebrow label: $ faq
Heading: "What You Need to Know?"
Subhead: "Frequently Asked Questions"
FAQ items (accordion):
1. What is a smart contract audit?
2. Why audit before mainnet?

-- 27 of 146 --

3. What conditions do you fail?
4. Automation is more useful, what's the difference?
5. How long does it take?
6. How much does it cost?
7. What about the report?
8. How do I share questions / How do I reach out?
Layout:
White background, ~120px vertical padding
Heading + subhead top-left
Accordion below, single column, max-width ~880px:
Each row: question (Outfit 18px zinc-900) + + / − toggle glyph on the right edge
Default state: collapsed; first item expanded by default
When open: answer fades in below the question (DM Sans 16px zinc-600, generous
line-height)
Active row: question color shifts to Immune Green; toggle glyph rotates + → ×
1px zinc-200 hairline between rows
Behavior:
Click toggles expand/collapse with 250ms ease-in-out height + opacity transition.
Only one item open at a time (opening a second closes the first).
Components used: SectionLabel, Heading, Subhead, FAQAccordion
Open question: full answer text needed for each FAQ — only the first answer was partially
visible in source.
5.11 Bottom CTA
Reuses §4.9 pattern unchanged.
5.12 Footer
Reuses §4.10 pattern unchanged.

-- 28 of 146 --

6. By Chain page (drill-down under Smart Contract Audit)
A drill-down detail page beneath Smart Contract Audit. It exists because EVM, Solana/Sealevel,
and Move-family chains have different security models — and a generic audit misses chain-
specific footguns. The page makes the case that ImmuneBytes adjusts the audit to the chain's
runtime, account model, and tooling.
Structurally this page closely follows the §5 service-detail template. Where structure mirrors §5
exactly, this section just references back; where content differs, full detail is given.
Section index
# 	Section ID 	Type 	Background
6.1 	$ header 	Global nav 	(same as §4.1)
6.2 	$ by_chain 	Page hero 	Black
6.3 	$ coverage 	Coverage list 	White
6.4 	$ failure_modes 	Failure mode cards (by chain family) 	Black with green wash
6.5 	$ process 	Numbered process 	White
6.6 	$ tools 	Tools & supported chains 	Black with green accents
6.7 	$ deliverables 	Deliverables list 	Black with terminal grid
6.8 	$ case_studies 	Featured case study 	(reuses §4.6 pattern)
6.9 	$ testimonials 	Video + quote 	(reuses §4.7 pattern)
6.10 $ faq 	FAQ accordion 	White
6.11 	$ cta 	Conversion banner 	(reuses §4.9 pattern)
6.12 $ footer 	Global footer 	(same as §4.10)
6.1 Header
(Same as §4.1.)
6.2 Hero — $ by_chain
Content:

-- 29 of 146 --

Layout: identical to §5.2 — centered headline + subhead, low-density matrix-rain backdrop, no
CTAs.
Components used: SectionLabel, Headline, Subhead, MatrixRainBackdrop (low-density
variant)
6.3 What we cover — $ coverage
Content:
Eyebrow label: $ coverage
Heading: "What we cover"
Six coverage areas (single-line items — copy needs verification, source legibility was poor
on items 1, 2, and 5):
1. Tradeoffs and transaction model differences (verify — source rendered as "Trade-
cabox")
2. Account/storage schemes and balancing patterns (verify)
3. Program-runtime upgrade and deployment flows
4. Cross-chain messaging, bridges, and relays
5. Token standards and edge behaviors (verify)
6. Monitoring and operational security assumptions
Layout: identical to §5.3.
Components used: SectionLabel, Heading, CoverageList
Open question: items 1, 2, 5 need verification — source legibility was poor.
6.4 Common Failure Modes — $ failure_modes
Purpose: show chain-family-specific expertise. Three cards, one per major chain family — this is
the depth the chain-curious audience is looking for.
Content:
Eyebrow label: $ failure_modes

-- 30 of 146 --

Heading: "Common Failure Modes"
Three failure mode cards (by chain family):
1. EVM-family chain specifics — Upgradeability misconfigurations and initializer
issues. Delegatecall misconfigurations and storage layout traps. MEV exposure and
fee/queue assumptions. (copy needs verification — source bullets may be on separate
lines)
2. Solana/Sealevel specifics — Anchor CPI account validation gaps. PDA derivation
misuse and signer rules. CPI flow handling and program-state checks. (verify)
3. Move-family specifics — Capability and resource storage assumptions. Object
ownership semantics and authentication gaps. Module/scripts design and
string/numeric handling. (verify)
Layout: identical to §5.4 — three vertically stacked dark cards with icon tiles on the left.
Visual note: icon tiles should signal each chain family with abstract glyphs (not the chains' own
logos):
EVM: stylized geometric diamond
Solana/Sealevel: stylized parallel-rails glyph
Move: stylized layered-cube glyph
These should feel branded ImmuneBytes, not borrowed from the chains' brand kits.
Components used: SectionLabel, Heading, FailureModeCard
Open question: confirm whether each card's description is one paragraph or three bulleted
points. Confirm exact copy for all three cards.
6.5 How we work — $ process
Content:
Eyebrow label: $ process
Heading: "How we work"
Six numbered steps (copy needs verification — source partially obscured):
1. Chain model — Define what "authority" / "key" means on this chain.
2. Threat model — Chain-native abuse paths and recovery.
3. Manual review — Logic, environments, and trust boundaries (chain-aware).
4. Chain-native testing — Fork-mode testing or chain-relevant simulation.
5. Report — Findings tied to chain-specific exploitability.

-- 31 of 146 --

6. [Step 6 — appears to repeat "Report" in source; likely "Retest" or "Validation" —
verify]
Layout: identical to §5.5.
Components used: SectionLabel, Heading, BinaryRainBackdrop, ProcessStep
Open question: step 6's title is unclear — likely "Retest" or "Validation" rather than another
"Report." Verify all step titles and descriptions.
6.6 Tools and Standards — $ tools
Content:
Eyebrow label: $ tools
Heading: "Tools and Standards"
Two columns:
Core Tooling — bulleted list of audit tools (likely chain-specific entries like Foundry
for EVM, Anchor for Solana, Aptos/Sui CLI for Move) (verify)
Supported chain placement / list — bulleted list of supported chains organized by
support tier (column heading wording is unclear in source — verify)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to — short caption beneath the logos (verify)
Layout: identical to §5.6.
Components used: SectionLabel, Heading, TwoColumnList, ToolLogoStrip
Open question: column 2 heading exact wording, full bullet contents for both columns, 5th tool
logo, and "What we map to" caption text.
6.7 Deliverables — $ deliverables
Content:
Eyebrow label: $ deliverables
Heading: "Deliverables"
Four deliverables:
1. Chain-specific invariant list + violations
2. Attack scenarios that matter on this chain in reality
3. Retest focused on authority constraints (source rendered first word as "Re-detective"
— verify)

-- 32 of 146 --

4. Retest validation
Layout: identical to §5.7.
Components used: SectionLabel, Heading, DeliverablesList
Open question: verify exact copy for all four deliverables, especially item 3.
6.8 Case studies
Reuses §4.6 pattern. Featured case study: "Ethernity Project Audit" (same as §5.8). Recommend
keeping consistent across SCA → By Chain since the case is fundamentally about chain-aware
auditing.
6.9 Testimonials
Reuses §4.7 pattern. The testimonial appears to be the same person as §5.9. Confirm or swap for
a chain-specific client testimonial if available.
6.10 FAQ — $ faq
Content:
Eyebrow label: $ faq
Heading: "What You Need to Know?"
Subhead: "Frequently Asked Questions"
FAQ items (accordion): (question copy partially visible — verify)
1. How do contracts differ across EVM and custom chains?
2. How do runtime differences break security testing?
3. Which chains do you specialize in?
4. Do you do cross-chain protocol audits?
5. What kinds of tests do you do that are chain-specific?
Layout: identical to §5.10.
Components used: SectionLabel, Heading, Subhead, FAQAccordion
Open question: confirm exact question copy and provide full answer text for each.
6.11 Bottom CTA
Reuses §4.9 pattern unchanged.

-- 33 of 146 --

6.12 Footer
Reuses §4.10 pattern unchanged.
7. By Project Type page (drill-down under Smart Contract Audit)
The second drill-down page beneath Smart Contract Audit. It explains how the audit adapts
based on the kind of project being audited — DeFi protocols, RWAs, NFT projects, GameFi
economies, and wallet contracts each have distinct failure modes and require different threat
models.
Important structural decision: unlike By Chain (§6), this page deliberately uses prose-heavy
sections instead of structured lists. The argument of this page is "we adapt to context, we don't
run a checklist" — and that idea is communicated more credibly through reflective prose than
through bullets. The design must preserve the prose-forward feel; do not "improve" prose
sections by converting them into bulleted lists.
This is also the first sign that ImmuneBytes' visual language flexes between structured (SCA, By
Chain — checklists, cards, deliverables) and reflective (this page — prose, fewer dividers, room
to breathe). Expect the same range to recur on the About page later.
Section index
# 	Section ID 	Type 	Background
7.1 	$ header 	Global nav 	(same as §4.1)
7.2 	$ by_project_type 	Page hero 	Black
7.3 	$ coverage 	Coverage list (with descriptions) 	White
7.4 	$ how_we_adjust 	Prose section 	Black with green wash
7.5 	$ tools_and_approach 	Prose section 	White
7.6 	$ what_you_get 	Prose section 	Black with terminal grid
7.7 	$ case_studies 	Featured case study 	(reuses §4.6 pattern)
7.8 	$ testimonials 	Video + quote 	(reuses §4.7 pattern)
7.9 	$ faq 	FAQ accordion 	White
7.10 $ cta 	Conversion banner 	(reuses §4.9 pattern)
7.11 $ footer 	Global footer 	(same as §4.10)

-- 34 of 146 --

7.1 Header
(Same as §4.1.)
7.2 Hero — $ by_project_type
Content:
Eyebrow label: $ by_project_type
Headline: "By Project Type"
Subhead: "A DeFi lending protocol has different failure modes than an NFT marketplace. A
wallet contract can't be tested like a GameFi rewards system. We don't run the same
checklist on every contract and call it done — we shift our threat model to match what
actually breaks in your project type."
Layout: identical to §5.2.
Components used: SectionLabel, Headline, Subhead, MatrixRainBackdrop (low-density)
7.3 What we cover — $ coverage
Purpose: introduce the five project types ImmuneBytes specializes in, each with a paragraph
explaining the audit focus. Verified copy throughout.
Content:
Eyebrow label: $ coverage
Heading: "What we cover"
Five project types (each with a description):
1. DeFi protocols — "Most DeFi exploits are economic, not technical. We look for oracle
manipulation, MEV extraction paths, share math that drifts under load, and
governance attacks that make stealing profitable. Your invariants matter more than
your linter warnings."
2. RWA (Real World Assets) — "The risk lives at the seams: where on-chain state meets
off-chain custody, where compliance can be replayed, where governance can silently
rewrite backing assumptions. We audit the full trust chain — not just the contract
code."
3. NFT projects — "Minting rules, transfer restrictions, marketplace logic. The failure
modes are specific: unauthorized duplication, ownership state desyncs, allowlist

-- 35 of 146 --

bypasses, royalty enforcement gaps. Standard reentrancy checks don't catch these."
4. GameFi economies — "It's an economy with game mechanics on top. We test for
reward loops, emission exploits, anti-farming bypasses, and marketplace
manipulation. If there is a way to print infinite value through 'normal' gameplay, we
will find it."
5. Wallet contracts — "These fail catastrophically. One signature validation bug, one
replay vector, one recovery logic mistake — and user funds are gone or permanently
locked. We review authorization like an attacker: what can I sign once and replay
forever?"
Layout:
White background, ~96px vertical padding
Asymmetric two-column on desktop (same as §5.3): green B-mark on the left (~40%),
content stack on the right (~60%)
Right column: each project type rendered as a row with green chevron › prefix + bold
project type name (Outfit 18px zinc-900) + colon, followed by the description paragraph
(DM Sans 16px zinc-700, max-width ~640px)
Items separated by 1px zinc-100 hairlines, ~24px vertical padding per row
Behavior:
Items stagger-fade in on scroll, 60ms apart.
Components used: SectionLabel, Heading, CoverageListWithDescriptions (new variant of
CoverageList)
Note on the new variant: this is a richer version of the §5.3 / §6.3 CoverageList. Same visual
rhythm (green chevron, hairline separators), but each row has a bold lead-in label + descriptive
paragraph instead of a single line. Build as a variant of CoverageList (e.g., <CoverageList
variant="detailed"> ) to keep the component family coherent.
7.4 How we adjust — $ how_we_adjust
Purpose: the page's intellectual core — the reader should feel like they're reading a senior
auditor thinking out loud, not a marketing page.
Content:
Eyebrow label: $ how_we_adjust
Heading: "How we adjust"
Body (two paragraphs):

-- 36 of 146 --

Different projects need different attack scenarios. Flash loan testing makes sense for
DeFi, not for NFTs. Signature replay matters for wallets, not for lending pools. We build
our test harnesses around what actually threatens your specific project type.
The invariants change too. DeFi needs "no free money" guarantees. RWAs need "supply
always matches backing." NFTs need "no unauthorized minting." GameFi needs
"rewards stay bounded." Wallets need "only authorized signers execute." Generic audits
miss this.
Layout:
Black background with green-tinted radial wash at top (~10% green over black) — same
tonal treatment as §5.4 / §6.4
Heading top-center, Outfit 40px white
Body prose center-aligned, max-width ~720px, DM Sans 18–19px, zinc-300, line-height 1.7
Quoted phrases — "no free money" , "supply always matches backing" , etc. —
rendered in Fira Code, Immune Green to visually mark them as invariants. This small
treatment makes the page feel like working auditor's writing, not marketing copy.
Components used: SectionLabel, Heading, ProseSection (dark variant)
New component note: ProseSection is a generic reusable text-heavy section: label + heading +
body with optional inline mono-styled emphasis on quoted phrases. Used three times on this
page (§§7.4, 7.5, 7.6) and reusable on About / philosophy pages later. Light + dark background
variants.
7.5 Tools and approach — $ tools_and_approach
Content:
Eyebrow label: $ tools_and_approach
Heading: "Tools and approach"
Body (single paragraph):
We use Foundry for testing across all types, but the test scenarios change completely.
Medusa and Halmos for property checking when the invariants are clear. Certora for
formal verification on critical paths. The tooling is less important than knowing what to
test for.
Layout:
White background, ~96px vertical padding
Heading top-center, Outfit 32px zinc-900
Body prose center-aligned, max-width ~720px, DM Sans 17–18px, zinc-700, line-height 1.7

-- 37 of 146 --

Tool names ( Foundry , Medusa , Halmos , Certora ) rendered in Fira Code zinc-900 for
technical emphasis
Components used: SectionLabel, Heading, ProseSection (light variant)
7.6 What you get — $ what_you_get
Purpose: the deliverables-equivalent for this page — but rendered as prose to match the page's
voice.
Content:
Eyebrow label: $ what_you_get
Heading: "What you get"
Body (two paragraphs):
Reports that match your risk profile. DeFi clients get profit path findings with economic
impact. RWA projects get trust-chain analysis. NFT teams get concrete duplication
scenarios. GameFi gets economy collapse reproduction. Wallet projects get
authorization failure proofs. Fixes that actually work for your project type. Not copy-
paste remediation advice — specific guidance on restoring the invariants that matter for
what you're building.
We test what breaks for your type of project, not what breaks in general.
Layout:
Black background with faint terminal-grid motif (1px zinc-900 grid lines, 24px cells, ~5%
opacity) — same as §5.7
Heading top-center, Outfit 40px, rendered in Immune Green (the only section heading on
the page in green — gives the section emphatic close)
Body prose center-aligned, max-width ~720px, DM Sans 18px, zinc-200, line-height 1.7
Final sentence ("We test what breaks for your type of project, not what breaks in general.")
on its own line, slightly heavier weight, treated as a closing punch line
Behavior: fade-in on scroll. Closing line gets a 200ms delayed fade for emphasis.
Components used: SectionLabel, Heading (green variant), ProseSection (dark variant)
7.7 Case studies
Reuses §4.6 pattern. Featured case study: "cSigma Finance Audit" (same as homepage §4.6).
Justification: cSigma is a DeFi lending protocol, which fits this page's emphasis on DeFi as a
primary project category.

-- 38 of 146 --

Open question: confirm cSigma is the right featured case here, or whether to feature a different
project that better represents project-type diversity (e.g., an NFT or GameFi case).
7.8 Testimonials
Reuses §4.7 pattern. Featured testimonial (verified copy):
Quote: "We partnered with ImmuneBytes for a security audit of our products. Their
expertise and professionalism instilled confidence throughout the process. They promptly
addressed our questions, and their thorough analysis significantly enhanced our project's
security, safeguarding our users' assets. We highly recommend ImmuneBytes and look
forward to future collaborations."
Attribution: Anuje Jahan, Product Owner, Loki (verify spelling of "Anuje"; confirm "Loki" is
the company name)
7.9 FAQ — $ faq
Content:
Eyebrow label: $ faq
Heading: "What You Need to Know?"
Subhead: "Frequently Asked Questions"
FAQ items (accordion):
1. Why can't you use the same checklist for DeFi and NFTs? (verified copy) —
"Because they fail differently. DeFi breaks when economic incentives are misaligned
— oracle manipulation, MEV extraction, liquidity drains. NFTs break when ownership
rules are inconsistent — unauthorized minting, transfer bypasses, supply cap
violations. Same underlying tech, completely different attack surfaces."
2. What makes wallet audits unique?
3. How does GameFi auditing differ from DeFi?
4. What drives cost differences between project types?
5. When does complexity actually impact timeline and cost?
6. What are the most common NFT vulnerabilities you find?
7. When should we choose project-type-specific auditing?
Layout: identical to §5.10.
Components used: SectionLabel, Heading, Subhead, FAQAccordion
Open question: answer copy for FAQ items 2–7.

-- 39 of 146 --

7.10 Bottom CTA
Reuses §4.9 pattern unchanged.
7.11 Footer
Reuses §4.10 pattern unchanged.
8. Protocol & Infrastructure Audit page (sub-service under Web3 Security)
The second sub-service page under Web3 Security, sibling to Smart Contract Audit. It covers
audits of the "core that cannot fail" — L1s, L2s, bridges, core APIs — with three drill-down pages
beneath it: L1/L2 Audit (§9), Consensus Frameworks Audit (§10), and Tokenomics Audit (§11).
Compact spec format (introduced here)
From this section onward, pages that follow the §5 SCA structured template will be spec'd in
compact form — only page-specific content (hero copy, coverage items, failure modes, process
steps, tools, deliverables) and any structural deviations. Layout, visual treatment, components,
and behaviors are inherited from §5; do not re-spec them.
This change keeps the doc navigable as we add the remaining ~10 sub-service pages, most of
which will follow the same template. Pages that follow the §7 reflective/prose template (likely
About) will use the §7 template by reference in the same way.
If a future page deviates from the template — different sections, different layout — it gets the
long-form treatment again.
Section structure
This page follows §5 SCA template in full. Section identifiers and order:
$ header → $ protocol_infrastructure_audit (hero) → $ coverage → $ failure_modes →
$ process → $ tools → $ deliverables → $ case_studies → $ testimonials → $ faq →
$ cta → $ footer
Hero — $ protocol_infrastructure_audit
Headline: "Protocol & Infrastructure Audit"
Subhead: "This is the 'core that cannot fail' — L1s, L2s, bridges, core APIs. We test
consensus assumptions, cryptographic invariants, and economic alignment — because
security isn't just one well-audited contract." (verify exact copy — source had some
phrasing irregularities)

-- 40 of 146 --

What we cover — $ coverage
Six single-line items:
1. Consensus and finality consistency under operation
2. Validator incentives and slashing conditions
3. Bridge message passing integrity
4. Cryptographic primitive usage and divergence
5. Client software and upgradability
6. Monitoring and operational threat models
Common Failure Modes — $ failure_modes
Three cards:
1. Integrity and consensus breaks — (description copy needs verification — source had
legibility issues)
2. Bridge and messaging compromise — (verify)
3. Economic and incentive attacks — (verify)
Visual note: icon tiles for these should signal the protocol layer — recommend a stylized
network-graph glyph (consensus), a stylized bridge/connector glyph (messaging), and a stylized
scale/balance glyph (economic). Abstract, not borrowed from any specific protocol's brand kit.
How we work — $ process
Six steps (see cross-page note below about step 6):
1. Model the system — invariants, actors, action definitions
2. Threat model — technical + economic abuse capabilities
3. Deep review — clients, proofs, economics, upgrade paths
4. Simulation/validation — where it could fail under realistic conditions
5. Report — findings tied to systemic exploitability
6. [Step 6 — see cross-page note in §13]
Tools and Standards — $ tools
Core Tooling — testing tools for protocol-layer concerns (full list needs verification)
Outputs — deliverable types (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)

-- 41 of 146 --

Deliverables — $ deliverables
Four items (see cross-page note below about "Re-detective"):
1. Systemic risk findings with clear blast radius
2. Concrete failure scenarios and conditions
3. Retest focused on invariants and incentives (source rendered first word as "Re-detective" —
see §13 cross-page note)
4. Retest validation (where bond-level)
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default — same as homepage)
Testimonial: appears to be the same as homepage — verify or swap for protocol-specific
client
FAQ: standard pattern — questions and full answers need verification from live site
9. L1/L2 Audit page (drill-down under Protocol & Infrastructure Audit)
A drill-down detail page beneath Protocol & Infrastructure Audit. Frames the L1 vs. L2
distinction — L1 security is about consensus and economic guarantees; L2 security is about
bridges, fraud/validity assumptions, sequencing, and cross-domain messaging.
Follows §5 SCA template in full.
Hero — $ l1_l2_audit
Headline: "L1/L2 Audit"
Subhead: "L1 security is about consensus and economic guarantees. L2 security is about
bridges, fraud/validity assumptions, sequencing, and cross-domain messaging. We audit
the truth assumptions and the escape hatches."
What we cover — $ coverage
Six items (items 4 and 6 need verification — source legibility was poor):
1. L1 consensus and validator review
2. Bridge and cross-domain messaging verification
3. Sequencer and prover scheme review
4. Proof/validity assumptions, fraud-proof window layouts (verify — source rendered
"relayouts")
5. Reorg/halt assumptions and resilience

-- 42 of 146 --

6. DA (data availability) assumptions and bond-recovery (verify)
Common Failure Modes — $ failure_modes
Three cards:
1. Consensus and finality gaps — (description copy needs verification)
2. Cross-domain integrity failures — (verify)
3. Sequencing and MEV side effects — (verify)
How we work — $ process
Six steps:
1. Assumption inventory — list the trust + integrity assumptions
2. Integrity review — messages, proofs, monitoring logic
3. Control-plane review — upgrades, governance, emergency actions
4. Adversarial simulation — reorg/halts/censorship file checks (verify)
5. Report — exploitability paths under cross-domain misuse
6. [Step 6 — see cross-page note in §13]
Tools and Standards — $ tools
Core Tooling — typical entries likely include fork-mode testing tools for L2 stacks (OP
Stack, Arbitrum, etc.) (full list needs verification)
Outputs — deliverable types (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Three items (note: this page has 3 deliverables, not 4 like the others — confirm intentional):
1. High-impact assumptions that can fail in production
2. Concrete scenarios that break safety or fund integrity
3. Retest focused on bonding/proof/control plane (source first word: "Re-detective")
Case studies, testimonials, FAQ
Case study: "Vasarchain Protocol Security Ecosystem Assessment" — page-specific case
study, distinct from the homepage's cSigma feature. This is the first L1/L2-relevant case in
the spec; preserve verbatim.

-- 43 of 146 --

Testimonial: appears to be a different person from default — likely an L1/L2-specific client.
Verify and capture.
FAQ: first question visible in source: "What is the difference between L1 and L2 audit?" —
full Q&A list and answers need verification.
10. Consensus Frameworks Audit page (drill-down under Protocol &
Infrastructure Audit)
A drill-down detail page beneath Protocol & Infrastructure Audit. Focuses on consensus-layer
correctness — safety/liveness logic, incentive alignment, and implementation edge cases.
Follows §5 SCA template in full.
Hero — $ consensus_frameworks_audit
Headline: "Consensus Frameworks Audit"
Subhead: "Consensus is the security boundary. If it's wrong, everything built on top is
exploit. We audit safety/liveness logic, incentive alignment, and implementation edge cases
that become network attacks." (verify exact phrasing — "everything built on top is exploit"
reads oddly; possibly "is exploitable")
What we cover — $ coverage
Six items (items 3, 5 need verification):
1. Consensus algorithm correctness assumptions
2. Validator incentives and slashing details
3. Finality gadgets and signaling logic (verify — source rendered "seuss tooling")
4. Network and timing assumptions
5. Edge cases in equivocation and chain forks (verify — source rendered "chain alarms")
6. Upgrade and fork paths and edge effects
Common Failure Modes — $ failure_modes
Three cards:
1. Safety violations — (description copy needs verification)
2. Liveness failures — (verify)
3. Incentive misalignment — (verify)
How we work — $ process
Six steps:

-- 44 of 146 --

1. Formalize invariants — what must always / never happen
2. Attack modeling — adversarial scenarios + network conditions
3. Implementation review — where the spec meets the code
4. Scenario validation — simulate at fault/edge boundaries
5. Report — findings tied to consensus-layer impact
6. [Step 6 — see cross-page note in §13]
Tools and Standards — $ tools
Core Tooling — typical entries likely include formal verification + simulation frameworks
(full list needs verification)
Outputs — deliverable types (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:
1. Consensus-breaking bugs and incentive failures
2. Concrete scenarios and triggering conditions
3. Retest focused on invariant preservation (source first word: "Re-detective")
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default)
Testimonial: appears to use the homepage default — verify or swap for consensus-specific
client
FAQ: standard pattern — questions and full answers need verification
11. Tokenomics Audit page (drill-down under Protocol & Infrastructure Audit)
A drill-down detail page beneath Protocol & Infrastructure Audit. Focuses on token economics,
incentives, and reflexive failure dynamics rather than smart contract code per se.
Follows §5 SCA template in full.
Hero — $ tokenomics_audit
Headline: "Tokenomics Audit"

-- 45 of 146 --

Subhead: "Bad tokenomics kills projects slowly — then suddenly. We stress-test incentives,
emissions, governance capture, and reflexive 'death spiral' dynamics before they ship."
What we cover — $ coverage
Six items (items 1, 4, 5 need verification — source had legibility issues):
1. Emission schedules and inflation logic (verify — source rendered "logarit")
2. Vesting cliffs and equity share rules
3. Governance power distribution and capture paths
4. Incentive curves under bull/bear conditions (verify)
5. Match incentive lockability simulation / propagation (verify — phrasing is unclear in
source)
6. Recovery extent and state effects
Common Failure Modes — $ failure_modes
Three cards:
1. Governance capture and control drift — (description copy needs verification)
2. Unstable emissions and liquidity shocks — (verify)
3. Reflexive failure loops — (verify)
How we work — $ process
Six steps:
1. Define objectives — what the token must do
2. Model incentives — who wins, who loses, why
3. Stress-test — under bull, bear, and adversarial conditions
4. Capture analysis — governance and economic capture paths
5. Report — risk-tagged failure scenarios
6. [Step 6 — see cross-page note in §13]
Tools and Standards — $ tools
Core Tooling — likely includes agent-based simulation frameworks (full list needs
verification)
Outputs — deliverable types (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)

-- 46 of 146 --

Deliverables — $ deliverables
Four items:
1. Capture risks and failure-loop scenarios
2. Parameter "danger zones" and stability ranges
3. Retest on mitigation directions and design impact (source first word: "Re-detective")
4. Follow-up validation plan if tokenomics change
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default — confirm whether it should be a tokenomics-
specific case)
Testimonial: appears to use the homepage default
FAQ: standard pattern — questions and full answers need verification
12. Wallet Security page (sub-service under Web3 Security)
The third sub-service page under Web3 Security, sibling to Smart Contract Audit (§5) and
Protocol & Infrastructure Audit (§8). Has two drill-downs: Dapp Integration Security (§13) and
Wallet Extension Audit (§14).
Follows §5 SCA template in full.
Hero — $ wallet_security
Headline: "Wallet Security"
Subhead: "Wallets are the front door to user funds. We audit key management, signing
correctness, transaction validation, and the user interaction points where attackers actually
win."
What we cover — $ coverage
Six items (items 5 and 6 need verification):
1. Key and secret handling (storage, lifecycle, signature paths)
2. Signing flows and transaction validation
3. Network and RPC trust assumptions
4. Recovery mechanisms and account safety
5. Multi-device, multi-account scenarios (verify)
6. Monitoring and indicators of exposure conditions (verify)

-- 47 of 146 --

Common Failure Modes — $ failure_modes
Three cards:
1. Key compromise paths — (description copy needs verification)
2. Signing and validation gaps — (verify)
3. Integration and trust assumptions — (verify)
How we work — $ process
Six steps (see cross-page note about step 6 in §16):
1. Threat model — phishing, malware, hostile dapps, hostile networks
2. Flow review — sign/auth/recovery lifecycle
3. Abuse testing — (brief description needs verification)
4. Security posture review — monitoring and approval workflows
5. Report — exploitability and risks per category
6. [Step 6 — see cross-page note in §16]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Outputs (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:
1. High-risk compromise paths with clear evidence
2. Signing/validation gaps with repro steps
3. Recovery scenarios that we tested as not safe (verify phrasing)
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default)
Testimonial: appears to use the homepage default — verify or swap for a wallet-specific
client
FAQ: standard pattern — questions partially visible include:
Why do we need to design securely?

-- 48 of 146 --

Which wallet types do you audit?
What is the impact of a wallet exploit?
How long does a wallet audit take?
Verify exact wording and provide full answer text.
13. Dapp Integration Security page (drill-down under Wallet Security)
A drill-down beneath Wallet Security. Frames the boundary between dapps and wallets as where
many "smart contract hacks" actually originate.
Follows §5 SCA template in full.
Hero — $ dapp_integration_security
Headline: "Dapp Integration Security"
Subhead: "Most 'smart contract hacks' start as dapp/integration failures. Frontend
connections, backend trust, contract assumptions — we audit the whole execution chain."
(verify — source had multiple legibility issues; the spec captures the intent but exact
phrasing should be confirmed)
What we cover — $ coverage
Six items (item 6 needs verification):
1. Frontend transaction construction and validation
2. Wallet-connect / dapp interaction process flows
3. Backend RPC and source control
4. Contract interaction boundaries and assumptions
5. Cross-contract calls and integration assumptions
6. Logging, analytics, and detection surfaces (verify — source rendered "reaction")
Common Failure Modes — $ failure_modes
Three cards:
1. Frontend and UX exploitation — (description copy needs verification)
2. API and backend abuse — (verify)
3. Contract integration assumptions — (verify)
How we work — $ process
Six steps:

-- 49 of 146 --

1. Map flows — what data goes where, who gets to call what
2. Identify trust breaks — where validation is missing or weak
3. Exploit design — concrete attack paths against discovered gaps
4. Validate — confirm the exploit, isolate the root cause
5. Report — paths, repros, severity
6. [Step 6 — see cross-page note in §16]
Tools and Standards — $ tools
Core Tooling — likely includes web testing tools (Burp Suite, OWASP ZAP) for dapp UI flow
validation (full list needs verification)
Outputs (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:
1. Integration boundaries with proof and impact
2. Recommendations to add checks at the right layer (verify — source rendered "Re-
direction")
3. Regression test ideas for the future
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: "Ethernity Project Audit" — page-specific, distinct from the cSigma default.
Same featured case as §5 SCA.
Testimonial: appears to be different from the homepage default — verify
FAQ: standard pattern — questions partially visible include:
Why is a dapp audit important?
Do you audit all client types?
How do you test integration boundaries?
How long does a dapp integration audit take?
Verify exact wording and provide full answer text.

-- 50 of 146 --

The second drill-down beneath Wallet Security. Specifically focuses on browser-extension
wallets — message passing, permissions, origin validation.
Follows §5 SCA template in full.
Hero — $ wallet_extension_audit
Headline: "Wallet Extension Audit"
Subhead: "Extensions run in a hostile browser with messy messaging boundaries. If your
message-passing, permissions, or origin validation is weak, malicious sites will drain users'
funds." (verify — source rendered "lifes" which is almost certainly "funds")
What we cover — $ coverage
Six items (items 5 and 6 need verification):
1. Content-script and DOM interaction surfaces
2. Background / service-worker logic and message-passing
3. Permissions model and origin validation
4. Storage and secret handling
5. Update lifecycle / supply-chain attestation (verify — source rendered "lifestyle")
6. Browser-extension and signing UX (verify)
Common Failure Modes — $ failure_modes
Three cards:
1. Message passing and origin validation bugs — (description copy needs verification)
2. Storage and secret exposure — (verify)
3. Permission and update risks — (verify)
How we work — $ process
Six steps:
1. Boundary mapping — origins, contracts, privileges
2. Abuse testing — malicious sites + extension misuse scenarios
3. Signing safety review — sign-checks, dependencies, permissions
4. Integrity review — updates, dependencies, permissions
5. Report — user impact, exploitability proofs
6. [Step 6 — see cross-page note in §16]

-- 51 of 146 --

Tools and Standards — $ tools
Core Tooling (full list needs verification)
Outputs (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:
1. Origin / message bypasses with concrete repros (verify — source rendered "single-pulse")
2. High-risk permissions and storage findings
3. Retest focused on isolation and validation (see §16 cross-page note about "Re-detective")
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default)
Testimonial: appears to use the homepage default
FAQ: standard pattern — questions partially visible include:
What is a wallet extension audit?
How do you spot and test issues in extensions?
What's in the analysis steps?
How do you test extension attestation?
Verify exact wording and provide full answer text.
15. Penetration Testing page (sub-service under Web2 Security)
The sole sub-service page under Web2 Security. Frames pen testing as adversary simulation
rather than scan-and-deliver. Has three drill-downs: Web Application Testing (§16), Mobile
Application Testing (§17), Desktop Application Testing (§18).
Follows §5 SCA template in full.
Hero — $ penetration_testing
Headline: "Penetration Testing"
Subhead: "Penetration testing is not 'run scanners, ship PDF.' We simulate real adversaries:
mapping entry points, chaining weaknesses, and proving impact with tight exploit
narratives you can actually fix."

-- 52 of 146 --

What we cover — $ coverage
Six items (item 6 needs verification):
1. External and internal attack-surface discovery
2. Web and API exploitation (including auth and asset chains)
3. Credentials and secret exposure paths (tokens, hardcoded keys, leaked config) (verify)
4. Privilege escalation and lateral movement opportunities
5. Application-layer DOS, injection, deserialization
6. Endpoint and platform issue chains (verify — partially obscured)
Common Failure Modes — $ failure_modes
Three cards:
1. Authentication and session breaks — (description copy needs verification)
2. Authorization and business logic abuse — (verify)
3. Injection and server-side pivots — (verify)
How we work — $ process
Six steps (see cross-page note about step 6 in §20):
1. Recon — enumerate assets, sites, trust boundaries, and high-value flows
2. Attack design — pick attacks that matter (money, data, control)
3. Exploit — (brief description needs verification)
4. Triage — rank by exploitability + blast radius, not by CVSS theater
5. Report — exploit narratives with severity tied to real-world impact
6. [Step 6 — see cross-page note in §20]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Optional Tooling (full list needs verification — note: this page uses "Optional Tooling" as
the second column, distinct from the "Audit outputs" / "Outputs" used on Web3 pages)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to — references OWASP Top 10 / API Top 10 plus internal scoping rules
(verify exact caption)
Structural note: the second column on this page is labeled "Optional Tooling" rather than the
"Audit outputs" / "Outputs" used on Web3 pages. This is a meaningful distinction for the design
— pen test engagements have a base toolchain plus client-elective additions. The

-- 53 of 146 --

TwoColumnList component should support arbitrary column titles, not be hardcoded to the
Web3 pattern.
Deliverables — $ deliverables
Four items:
1. Executive summary — risk narrative per exploit chain
2. Reproducible steps with exact requests, conditions, and outcomes
3. Severity ranked by likelihood × impact × exposure
4. Fix guidance — practical, separate from blame-shifting
Case studies, testimonials, FAQ
Case study: "Vasarchain Protocol Security Ecosystem Assessment" — third appearance
of this case (also §9, §17). Pattern emerging: Vasarchain is the canonical infrastructure /
pen-test case study.
Testimonial: appears to use a different person from default — verify
FAQ: standard pattern — questions partially visible include:
What are the differences between black box, white box, and gray box testing?
What kinds of vulnerabilities do you typically find?
How long does it take?
How do you evaluate it?
How do you address production systems?
Do you do regular retests?
Verify exact wording and provide full answer text.
16. Web Application Testing page (drill-down under Penetration Testing)
A drill-down beneath Penetration Testing. Frames web apps as the broadest external attack
surface, with focus on auth/authorization/logic abuse rather than canned scanner findings.
Follows §5 SCA template in full.
Hero — $ web_application_testing
Headline: "Web Application Testing"
Subhead: "Your web app is usually the broadest path — even if 'the backend is strong.' We
focus on auth, authorization, and logic integrity, the bugs that let attackers become other
users, print money, or pivot into your core systems."

-- 54 of 146 --

Six items:
1. Auth flows (login, MFA, password reset, recovery)
2. Session management and token handling
3. Server-side validation and access controls
4. Critical workflows (checkout, withdrawal, profile changes)
5. API endpoints used by the web app
6. File, asset, and integration boundaries
Common Failure Modes — $ failure_modes
Three cards:
1. OWASP-style web weaknesses that still bite — (description copy needs verification)
2. Authorization and tenancy breaks — (verify)
3. [Title needs verification — rendered as garbled characters in source, similar to §5.4's
encoding artifact] — (description copy needs verification)
How we work — $ process
Six steps:
1. Map the app — entry points, assets, workflows, trust boundaries
2. Instrument — trap, replay, modify
3. Break logic — money trails / login flows that violate intent
4. Prove impact — minimal facts that show real, patchable issues
5. Harden — (brief description needs verification — source appeared duplicated with step 4)
6. [Step 6 — see cross-page note in §20]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Output format options (full list needs verification — note: this page uses "Output format
options" as the second column heading)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:

-- 55 of 146 --

1. Findings grouped by exploit chain (by-scenario category)
2. Affected endpoints + variables + evidence
3. Clear "how this becomes a breach" narrative
4. Recommendations aligned to standards (NIST/SANS) (verify — source rendered "Re-
detective"; see §20 cross-page note)
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default)
Testimonial: appears to use the homepage default
FAQ: standard pattern — questions partially visible include:
What kinds of apps need testing?
How are high-severity issues flagged?
How long does it take?
Should I test in production?
Verify exact wording and provide full answer text.
17. Mobile Application Testing page (drill-down under Penetration Testing)
The second drill-down beneath Penetration Testing. Frames mobile apps as far-edge clients
running on hostile devices that the attacker fully controls.
Follows §5 SCA template in full.
Hero — $ mobile_application_testing
Headline: "Mobile Application Testing"
Subhead: "Mobile is a far client running on hostile devices. We assume the attacker has
your APK/IPA, can hook runtime behavior, and can redirect network traffic. If your security
depends on 'they won't,' it's already broken." (verify exact phrasing)
What we cover — $ coverage
Six items (item 5 needs verification):
1. Binary and package analysis (secrets, encryption, feature flags)
2. Local storage and credential handling
3. Network security (TLS pinning, traffic inspection)
4. Inter-process IPC (intents, URL schemes, content providers, deep links)

-- 56 of 146 --

5. Misuse of deep links, intents, and third-party integrations (verify — source rendered "toll
integrations")
6. Backend API exposure through mobile-only pathways
Common Failure Modes — $ failure_modes
Three cards:
1. Secrets and sensitive data exposure — (description copy needs verification)
2. Transport and traffic manipulation — (verify)
3. Runtime tampering and abuse — (verify)
How we work — $ process
Six steps:
1. Static review — binary, configs, dependencies, secrets
2. Dynamic testing — runtime inspection + traffic interception
3. Abuse testing — auth, storage, and integrity assumptions
4. Backend validation — confirm server-side actually enforces what the client claims (verify
exact phrasing)
5. Reporting — map exploit chain, expose feasibility
6. [Step 6 — see cross-page note in §20]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Platform coverage (full list needs verification — note: this page uses "Platform coverage" as
the second column heading, listing iOS / Android / cross-platform support)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:
1. Confirmed issues with audited scenarios, traces, hooks, requests
2. Risk narrative tied to user impact and backend exposure
3. Recommendations that remove reliance on client-side trust (verify — source rendered "Re-
direction"; see §20 cross-page note)
4. Retest confirmation

-- 57 of 146 --

Case studies, testimonials, FAQ
Case study: "Vasarchain Protocol Security Ecosystem Assessment" — same as §15 and
§9
Testimonial: appears to use a different person from default — verify
FAQ: standard pattern — questions partially visible include:
How often should the app be tested?
How do you test mobile apps in pre-production?
Which privilege escalation vectors should we explore?
What does your testing include for instrumentation?
How long does mobile app testing take?
Verify exact wording and provide full answer text.
18. Desktop Application Testing page (drill-down under Penetration Testing)
The third drill-down beneath Penetration Testing. Frames desktop apps as higher-privilege
targets with update-path and supply-chain risks distinct from web/mobile.
Follows §5 SCA template in full.
Hero — $ desktop_application_testing
Headline: "Desktop Application Testing"
Subhead: "Desktop apps often run with more privileges, more trust in local boxes, and more
dangerous update paths. We treat them like attacker-controlled environments: bad code,
malicious files, hostile networks, and manipulated systems." (verify exact phrasing)
What we cover — $ coverage
Six items:
1. Local privilege boundaries and IPC assumptions
2. Update mechanisms and installer integrity
3. Sensitive data at rest (tokens, credentials, cached data) (verify — source rendered "on rest")
4. IPC surfaces and inter-domain trust
5. Filesystem and registry traps (admins, system paths) (verify)
6. Network APIs and integration usage paths
Common Failure Modes — $ failure_modes
Three cards:

-- 58 of 146 --

1. Update and supply-chain compromise — (description copy needs verification)
2. Local data exposure and token theft — (verify)
3. Local abuse and execution paths — (verify)
How we work — $ process
Six steps:
1. Surface mapping — updaters, IPC, storage, file handling
2. Abuse design — attacker-controlled inputs (malicious files, hostile network, malware on
machine)
3. Validation — reproduce the impact safely and precisely
4. Hardening review — reduce trust on local data and inputs
5. Reporting — repro steps, root causes, blast radius
6. [Step 6 — see cross-page note in §20]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Output options (full list needs verification — note: this page uses "Output options" as the
second column heading)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:
1. Findings grouped around component paths and root causes / CVE clustering (verify exact
phrasing)
2. Evidence and reproduction conditions
3. Recommendations emphasizing integrity and privilege boundaries (verify — source
rendered "Re-direction"; see §20 cross-page note)
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default)
Testimonial: appears to use the homepage default — verify
FAQ: standard pattern — questions partially visible include:
What is desktop app security testing?

-- 59 of 146 --

What tools are typically used in testing?
How long does it take?
Do you test remote desktop / hosted apps?
Verify exact wording and provide full answer text.
19. AI Agent Audit page (sub-service under AI Security)
The first sub-service page under AI Security.
Pillar-level structural note (important): unlike Web3 Security (3 sub-services with drill-downs)
and Web2 Security (1 sub-service with drill-downs), the AI Security pillar has 4 direct sub-
services with no further drill-downs: AI Agent Audit (§19), Chatbot Security (§20), LLM
Integration Audit (§21), and Automation & Workflow Audit (§22). The pillar overview page (still
pending) should reflect this flatter information architecture — it shouldn't try to mimic the
parent-and-children visual the other pillars use.
New structural element introduced on this page: the $ testing_focus block (see §19's
Testing focus subsection below). This element appears on all four AI Security sub-services but
doesn't appear on Web3 or Web2 pages. Treat as AI-pillar-specific.
Otherwise follows §5 SCA template in full.
Hero — $ ai_agent_audit
Headline: "AI Agent Audit"
Subhead: "AI agents are powerful because they can act. That also makes them dangerous:
prompt injection can become tool abuse, data exfiltration, or automated financial loss. We
test failure modes that scale."
What we cover — $ coverage
Six items (item 4 needs verification):
1. Tool permissions and action boundaries
2. System prompt integrity and dialogue resilience
3. Memory and state handling (poisoning, persistence, recall)
4. Tool access and permission boundaries (verify — source rendered "refraction")
5. Logging, telemetry, and detection awareness
6. Human-in-the-loop signals (gates and override mechanisms)
Common Failure Modes — $ failure_modes
Three cards:

-- 60 of 146 --

1. Prompt injection and tool abuse — (description copy needs verification)
2. Data leakage and exfiltration — (verify)
3. Excessive autonomy and unsafe actions — (verify)
How we work — $ process
Six steps:
1. Define authority — clarify what the agent can do and why
2. Red team — injection, jailbreak, and boundary attacks
3. Tool boundary testing — (brief description needs verification)
4. Data flow review — memory, logs, and output paths
5. Report — risks framed in real business outcomes
6. [Step 6 — see cross-page note in §24]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Outputs (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Testing focus — $ testing_focus (new structural element)
A compact dark pill-shaped block sitting between the Tools logo strip and the Deliverables
section. Names the AI-specific testing emphases for this audit.
For AI Agent Audit:
Prompt injection resistance
Output handling and exfiltration scenarios
Auditability and approval gating
Layout (canonical for all AI pages):
Block background: zinc-900 with 1px zinc-800 border, ~24px internal padding, sharp
corners
Title "Testing focus" centered at top, Outfit 18px white
Three bullet items beneath, DM Sans 14px zinc-300, separated by small green chevron ›
glyphs in a single row on desktop, stacked on mobile
~16px vertical gap above and below the block, sitting within the standard $ tools
section's vertical rhythm

-- 61 of 146 --

The block is reusable across all four AI Security pages (§§19–22) with different bullet content per
page.
Components used: SectionLabel, TestingFocusBlock (new component)
Deliverables — $ deliverables
Four items:
1. Exploitable behaviors with step-by-step prompts and conditions
2. Tool abuse paths with proof of capability escalation
3. Recommendations focused on boundaries / approvals (verify — source rendered "Re-
direction"; see §24 cross-page note)
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: "Vasarchain Protocol Security Ecosystem Assessment" (fourth appearance,
alongside §9, §15, §17 — Vasarchain is now firmly established as the canonical
infrastructure / agentic / pen-test case study)
Testimonial: appears different from default — verify and capture
FAQ: standard pattern — questions partially visible include:
How is AI agent audit different from regular pen testing?
How do you test prompt injection in autonomous agents?
What happens if an agent has high-cost capabilities?
How do you evaluate tool integrations?
How do you evaluate boundaries?
Verify exact wording and provide full answer text.
20. Chatbot Security page (sub-service under AI Security)
The second AI Security sub-service. Frames chatbots as both brand surface and data surface —
leak/jailbreak risks have both reputational and security consequences.
Follows §5 SCA template + AI Security's $ testing_focus block (introduced in §19).
Hero — $ chatbot_security
Headline: "Chatbot Security"
Subhead: "Chatbots are a brand surface plus a data surface. If they can be jailbroken, leak
private info, or be manipulated into unsafe actions, you get reputational damage and
security incidents."

-- 62 of 146 --

What we cover — $ coverage
Six items (item 5 needs verification):
1. Guardrails and jailbreak resistance
2. PII and sensitive data handling
3. Conversation history access and isolation
4. Persona and message-source integrity
5. Misuse of inputs and complexity (verify — source rendered "online inputs")
6. Logging, retention, and compliance assertion handling
Common Failure Modes — $ failure_modes
Three cards:
1. Jailbreak and policy bypass — (description copy needs verification)
2. Sensitive data leakage — (verify)
3. Abuse and reliability failures — (verify)
How we work — $ process
Six steps:
1. Define boundaries — what data exists and what must never leak
2. Adversarial testing — prompt and persona attacks
3. RAG testing — content retrieval and system manipulation issues
4. Abuse testing — (brief description needs verification — source rendered "interconnect cost
manipulation")
5. Report — fix plus compliance outcome
6. [Step 6 — see cross-page note in §24]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Outputs (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Testing focus — $ testing_focus
(Reuses §19's TestingFocusBlock component.)
For Chatbot Security (all three bullets need verification):

-- 63 of 146 --

Data leak and policy bypass behavior
Output handling and outflows (verify)
Abuse and reliability scenarios (verify — source rendered "rebellion" which is almost
certainly "reliability")
Deliverables — $ deliverables
Four items:
1. Jailbreak and leakage findings with reproducible prompts
2. Data flow risks with concrete evidence
3. Recommendations focused on isolation and controls (verify — source rendered "Re-
direction")
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: "Vasarchain Protocol Security Ecosystem Assessment"
Testimonial: appears different from default — verify and capture
FAQ: verify exact wording and provide full answer text.
21. LLM Integration Audit page (sub-service under AI Security)
The third AI Security sub-service. Focuses on integration-layer LLM failures (RAG, output
handling, auth) rather than the model itself.
Follows §5 SCA template + AI Security's $ testing_focus block.
Hero — $ llm_integration_audit
Headline: "LLM Integration Audit"
Subhead: "Most LLM failures happen in the integration: RAG poisoning, unsafe output
handling, leaked secrets, and 'this model has worked' assumptions. We audit architecture,
data flow, and trust boundary points." (verify — source had legibility issues, especially
around "leaked metric" / "tactical points")
What we cover — $ coverage
Six items (items 4 and 6 need verification):
1. RAG poisoning and content manipulation
2. Prompt construction and system-prompt integrity

-- 64 of 146 --

3. Output handling, validation, and downstream execution risks
4. Secrets management, contexts, data, logs, and output controls (verify)
5. Permission and key access design
6. Permission boundaries and storage between APIs (verify)
Common Failure Modes — $ failure_modes
Three cards:
1. RAG poisoning and injection — (description copy needs verification)
2. Insecure output handling — (verify)
3. Leakage and operational abuse — (verify)
How we work — $ process
Six steps:
1. Architecture review — identify primary points and trust boundaries
2. Data flow mapping — what can influence prompts and responses
3. Adversarial testing — injection, leakage, and trust abuse
4. Validation checks — output gating and execution safety
5. Report — focus on real failure modes
6. [Step 6 — see cross-page note in §24]
Tools and Standards — $ tools
Core Tooling — likely includes OWASP Top 10 LLM scenarios (verify full list)
Outputs — likely includes architecture validation review (verify full list)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Testing focus — $ testing_focus
(Reuses §19's TestingFocusBlock component.)
For LLM Integration Audit:
Prompt and data injection
Output validation behaviors
Tool permissions and auditability
Deliverables — $ deliverables
Four items:

-- 65 of 146 --

1. Integration vulnerabilities with reproducible test inputs
2. Data leakage paths with evidence
3. Recommendations focused on policy and boundaries (verify — source rendered "Re-
direction")
4. Retest confirmation
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default)
Testimonial: appears to use the homepage default — verify
FAQ: verify exact wording and provide full answer text.
22. Automation & Workflow Audit page (sub-service under AI Security)
The fourth AI Security sub-service. Focuses on AI-driven workflow automation — where small
mistakes propagate quickly and at scale.
Follows §5 SCA template + AI Security's $ testing_focus block.
Hero — $ automation_workflow_audit
Headline: "Automation & Workflow Audit"
Subhead: "Automation turns small security mistakes into large, fast incidents. We audit
triggers, permissions, and data integrity across workflows — so they can't be hijacked into
doing the attacker's job." (verify — source had legibility issues)
What we cover — $ coverage
Six items (item 6 needs verification):
1. Triggers, inputs, and event-control vulnerabilities
2. Permission boundaries and access scope
3. Data flow integrity across steps
4. Secrets handling and tool-handling
5. Logging, audit trails, and forensics readiness
6. Misuse mechanisms (review, gates, escalation) (verify — source rendered "RM, gates")
Common Failure Modes — $ failure_modes
Three cards:
1. Trigger and input abuse — (description copy needs verification)

-- 66 of 146 --

2. Permission boundary breaks — (verify)
3. Integrity and auditability gaps — (verify)
How we work — $ process
Six steps:
1. Workflow mapping — triggers, actions, and data effects
2. Boundary review — permissions, secrets, and isolation
3. Abuse testing — manipulate inputs and discover scenarios
4. Control design — gating, approval, and side-effects
5. Report
6. [Step 6 — see cross-page note in §24]
Tools and Standards — $ tools
Core Tooling (full list needs verification — "OWASP for source-engineering practices" was
visible)
Outputs (full list needs verification — "Workflow modeling toolkits" was visible)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Testing focus — $ testing_focus
(Reuses §19's TestingFocusBlock component.)
For Automation & Workflow Audit:
Trigger consistency and validation (verify — source rendered "inconsistency")
Permission flow scenarios
Full auditability for high-stakes systems
Deliverables — $ deliverables
Four items:
1. Privilege escalation paths and trigger abuse proofs
2. Data leakage and integrity findings with evidence
3. Recommendations focused on controls and isolation (verify — source rendered "Re-
direction")
4. Retest confirmation
Case studies, testimonials, FAQ

-- 67 of 146 --

Case study: "Vasarchain Protocol Security Ecosystem Assessment"
Testimonial: appears different from default — verify and capture
FAQ: verify exact wording and provide full answer text.
23. Shift-Left Security page (sub-service under Security Consultancy)
The first sub-service page under Security Consultancy.
Pillar-level structural note: like AI Security, the Security Consultancy pillar has a flat structure
— 4 direct sub-services with no further drill-downs: Shift-Left Security (§23), Test-Driven &
Fuzz-Driven Development (§24), Pre-Audit Dynamic Testing (§25), Security Research &
Engineering (§26).
Architectural rename: the TestingFocusBlock component introduced on AI pages (§19) is now
generalized to FocusBlock . Same component, but the title is a prop. AI pages use it with title
"Testing focus"; this page uses it with title "Implementation focus". Future pages can use it with
other titles as needed. The component inventory (§27) is updated accordingly.
Consultancy-specific structural notes (apply across §§23–26):
Tools section uses "Core standards" rather than "Core Tooling" as its first column
heading on §23 (and possibly other consultancy pages — verify). This reflects that
consultancy work is more standards-heavy than tooling-heavy.
Deliverables are page-specific, not template-shaped. Unlike audit pages (§§5–22),
consultancy pages don't follow the canonical "Findings / Evidence / Recommendations /
Retest" deliverables pattern. Each page has its own deliverables shape. As a side effect, the
"Re-detective" / "Re-direction" cross-page artifacts (§35 items A–B) don't apply to
consultancy pages.
Only §23 Shift-Left uses a focus block. §§24–26 appear to use the standard "What we map
to" caption pattern instead. Flag for verification — this may be intentional (Shift-Left has
more concrete implementation targets to call out, while the others are more open-ended) or
it may be inconsistent design.
Otherwise follows §5 SCA template in full.
Hero — $ shift_left_security
Headline: "Shift-Left Security"
Subhead: "Security testing at the end is expensive and usually ineffective. Shift-left means
security is part of design, build, test, and review — no issues stop shipping in the first
place."

-- 68 of 146 --

What we cover — $ coverage
Six items (items 1, 5, 6 need verification):
1. Secure development and threat modeling principles (verify — source rendered "Secure
improvement")
2. Security gates in CI/CD and release pipelines
3. Secure code review practices and standards
4. Dependency and supply-chain risk management
5. Security testing strategy (unit / integration / release) (verify)
6. Incident readiness and triage processes (verify)
Common Failure Modes — $ failure_modes
Three cards:
1. Missing security requirements — (description copy needs verification)
2. Weak testing discipline — (verify)
3. Release and supply-chain gaps — (verify)
How we work — $ process
Six steps:
1. Baseline — current SDLC, gaps, and risk hotspots
2. Define controls — what must work per stage
3. Integrate — (brief description needs verification)
4. Train — make teams capable, not dependent
5. Report — (brief description needs verification — source appeared to duplicate step 4's text)
6. [Step 6 — see cross-page note in §35]
Tools and Standards — $ tools
Core standards — likely includes NIST SSDF, OWASP SAMM/BSIMM, OWASP ASVS,
NIST/SA-FOCUS (verify full list — note column heading is "Core standards" not "Core
Tooling," reflecting consultancy emphasis)
Outputs — likely includes SDLC playbook tailored to the team (verify full list)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
Implementation focus — $ implementation_focus (FocusBlock variant)
A compact dark pill-shaped block sitting between the Tools logo strip and the Deliverables
section. Same component as AI Security's $ testing_focus block — just titled

-- 69 of 146 --

"Implementation focus" with consultancy-specific bullets.
For Shift-Left Security (all bullets need verification):
SDLC security gates that are unbreakable upstream (verify)
Code reviews and escalation gates (verify)
Regression / portability checks at first use (verify)
Important verification: does this block replace the standard "What we map to" caption that
appears on other pages, or does it sit alongside it? Source layout was ambiguous. Flag as
verification item.
Components used: SectionLabel, FocusBlock (renamed from TestingFocusBlock — see §27)
Deliverables — $ deliverables
Four items (item 3 needs verification):
1. Shift-Left roadmap with measurable milestones
2. Security gate definitions per SDLC stage
3. Checklist-friendly playbook / template (verify exact phrasing)
4. Follow-up validation checkpoints
Case studies, testimonials, FAQ
Case study: "Vasarchain Protocol Security Ecosystem Assessment" (fifth appearance —
Vasarchain solidly established as the canonical infrastructure / consultancy / agentic case)
Testimonial: appears different from default — verify and capture
FAQ: standard pattern — questions partially visible:
How will integrating security into the development lifecycle work with what we
already do?
What tools do you use to assess SDLC?
Do you implement automated training tools?
How do we measure SDLC effectiveness?
Verify exact wording and provide full answer text.
24. Test-Driven & Fuzz-Driven Development page (sub-service under Security
Consultancy)
The second Security Consultancy sub-service. Frames testing as adversarial engineering —
writing tests that think like attackers.

-- 70 of 146 --

Follows §5 SCA template in full. Does not use a focus block — uses the standard "What we map
to" caption pattern.
Hero — $ test_driven_fuzz_driven_development
Headline: "Test-Driven & Fuzz-Driven Development"
Subhead: "Write tests that think like attackers. We help teams build security properties into
tools and fuzz harnesses so dangerous edge cases get caught before production."
What we cover — $ coverage
Six items (items 4, 5, 6 need verification):
1. Security-focused unit tests and invariants
2. Property-based testing strategy
3. Fuzz harness design and coverage gates
4. Z3 / SAT-based formal testing for critical paths (verify — source rendered "Z3-Logic/SAT for
continued security testing")
5. Performance testing for the project's security profile (verify)
6. Test strategy for critical fixes and migrations (verify)
Common Failure Modes — $ failure_modes
Three cards:
1. Shallow test coverage — (description copy needs verification)
2. No security properties — (verify)
3. [Title needs verification — rendered as garbled text in source, same encoding artifact as
§5.4 / §16] — (verify — third card's title is broken in source)
How we work — $ process
Six steps:
1. Pick targets — highest-risk flows and invariants
2. Define properties — true facts that always hold
3. Implement harnesses — (brief description needs verification)
4. CI integrate — (brief description needs verification)
5. Measure — coverage and bug yield, not vanity metrics
6. [Step 6 — see cross-page note in §35]

-- 71 of 146 --

Tools and Standards — $ tools
Core Tooling — likely includes Foundry, Medusa, Halmos (verify full list)
Outputs (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items:
1. Security properties catalog + test mappings
2. Working fuzz harnesses for critical fixes
3. CI gating recommendations
4. Regression plan for confirmed issues
Case studies, testimonials, FAQ
Case study: "Ethernity Project Audit" — second consultancy page using Ethernity
(alongside §13 Dapp Integration; also §5 SCA). Pattern emerging: Ethernity = engineering /
dev-process / smart contract case.
Testimonial: appears different — verify and capture
FAQ: verify exact wording and provide full answer text.
25. Pre-Audit Dynamic Testing page (sub-service under Security Consultancy)
The third Security Consultancy sub-service. Frames the work as preparation — clean obvious
issues before formal audit so audit time goes to deep work.
Follows §5 SCA template in full. Does not use a focus block — uses the standard "What we map
to" caption pattern.
Hero — $ pre_audit_dynamic_testing
Headline: "Pre-Audit Dynamic Testing"
Subhead: "Before a formal audit, we clean the obvious things so audit time is spent on deep
logic, not low-hanging fruit. This reduces cost, reduces churn, and increases audit value."
What we cover — $ coverage
Six items (items 4, 5, 6 need verification):
1. Runtime scanning and configuration review

-- 72 of 146 --

2. API and auth flow sanity tests
3. Dependency and exposure checks
4. Basic abuse and easy-tool surveys (verify — source rendered "easy-tool effective")
5. Deployment posture review (secrets, logging, controls) (verify)
6. High-confidence checks for audit prep (verify — source rendered "High-cost/known testing
for audit packing")
Common Failure Modes — $ failure_modes
Three cards:
1. Obvious vulnerabilities that waste audit cycles — (description copy needs verification)
2. Integration failures — (verify)
3. Missing operational controls — (verify)
How we work — $ process
Six steps:
1. Scan and map — find obvious exposures and misconfigurations
2. Triage — pick what must be fixed before audit starts
3. Validate — (brief description needs verification)
4. Pre-fix guidance — reduce break-before-audit moves
5. Audit handoff — clean scope and known-issues list
6. [Step 6 — see cross-page note in §35]
Tools and Standards — $ tools
Core Tooling — likely includes Burp Suite, OWASP DAST tools (verify full list)
Outputs — likely includes pre-audit checklist matched to the audit (verify full list)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to — likely audit readiness and scope clarity (verify caption)
Deliverables — $ deliverables
Four items:
1. Must-fix list before audit begins
2. Evidence and reproduction conditions
3. Audit scope refinement inputs
4. Retest notes after fixes

-- 73 of 146 --

Case study: "Ethernity Project Audit"
Testimonial: appears different from default — verify and capture
FAQ: verify exact wording and provide full answer text.
26. Security Research & Engineering page (sub-service under Security
Consultancy)
The fourth Security Consultancy sub-service. Frames as capability-building rather than
reporting — for teams that need custom tooling, exploit research, or in-house security depth.
Follows §5 SCA template in full. Does not use a focus block — uses the standard "What we map
to" caption pattern.
Hero — $ security_research_engineering
Headline: "Security Research & Engineering"
Subhead: "Some teams don't need another checklist — they need custom testing, exploit
validation, and research that breaks real adversaries. This is for building capabilities, not
just buying opinions."
What we cover — $ coverage
Six items (items 1, 2, 4 need verification):
1. Custom toolchain and detection logic (verify — source rendered "detected logic")
2. Exploit development and validation (verify — source rendered "combination submission")
3. Security / safety infrastructure and harnesses
4. Project-specific monitoring ideas (verify — source rendered "Premium-specific")
5. Threat research and emerging attack patterns
6. Capability assessment for engineering teams
Common Failure Modes — $ failure_modes
Three cards:
1. Generic tooling blind spots — (description copy needs verification)
2. Slow response and weak validation — (verify)
3. Capability gaps — (verify)

-- 74 of 146 --

How we work — $ process
Six steps (steps 4 and 6 need verification):
1. Define outcomes — what capability you need (detect, react, cover)
2. Build prototypes — minimal tools that produce real impact
3. Validate — verify against real conditions (verify — source had unclear wording overlapping
with step 4)
4. Harden — (brief description needs verification)
5. Transfer — docs + training so it becomes your capability
6. [Step 6 — see cross-page note in §35]
Tools and Standards — $ tools
Core Tooling (full list needs verification)
Outputs (full list needs verification)
Tool/standards logo row: PortSwigger, GitHub, MITRE, ATT&CK, [5th logo TBD]
What we map to (verify caption)
Deliverables — $ deliverables
Four items (item 1 needs verification):
1. Custom tools and/or harnesses with clear usage docs
2. Validated proof-of-concept exploits (verify — source rendered "Validated prerequisite
proofs")
3. Integration plans for CI workflows
4. Knowledge-base content for long-term retention
Case studies, testimonials, FAQ
Case study: cSigma Finance Audit (default)
Testimonial: appears different from default — verify and capture
FAQ: verify exact wording and provide full answer text.
27. Audit Leaderboard page ( /audits — top-level page from primary nav)
Linked from: primary nav "Audit" menu item (§3).
This is the first dashboard-style page in the spec — structurally distinct from service detail
pages (§§5–26). It serves as public proof of work: a live leaderboard showing audit volume,

-- 75 of 146 --

vulnerability findings, platform coverage, and a searchable index of audited projects.
The page is backend-driven rather than static marketing copy, which means:
Stats and chart data come from the audit database
The project table is paginated and searchable
The page becomes more credible over time as the data grows (no copy work to ship new
audits — they appear automatically once the backend has them)
Brand framing note: the page is titled "Audit Leaderboard" rather than something like "Our
Audits" or "Audit Index." That's a deliberately competitive/proof-oriented framing — the
message is "look at the depth and quantity of work, ranked publicly." Preserve this framing in the
design; it's not just a list of past clients, it's a confidence display.
This page introduces a chunk of dashboard primitives (StatsCardRow, DonutChart,
ChartLegend, DataTable, SearchInput, PlatformBadge, TagBadge, ActionButton,
PaginationControls, Breadcrumb) that will likely be reused on the Case Studies index and the
Blog index. Build them generically.
Section structure
Section 	Type 	Background
$ header 	Global nav 	(same as §4.1)
$ breadcrumb 	Trail 	Zinc-50
$ leaderboard 	Stats hero 	Zinc-50
$ findings 	Charts row 	White
$ projects 	Searchable data table 	White
$ cta 	Conversion banner 	(reuses §4.9 pattern)
$ footer 	Global footer 	(same as §4.10)
27.1 Header
(Same as §4.1.)
27.2 Breadcrumb — $ breadcrumb
A small trail above the hero indicating page location.

-- 76 of 146 --

Content: Home › Leaderboard
Layout:
Zinc-50 background, ~24px top padding, ~16px bottom padding
Left-aligned, max-width matches the content area
Items: zinc-500 default, zinc-900 on hover. Current page item is not a link
Separator: small green chevron › glyph in Immune Green
Font: DM Sans 13px
Components used: Breadcrumb (new)
27.3 Hero — $ leaderboard
Purpose: lead with credible numbers — total audits, vulnerabilities found, lines of code
reviewed, and chains supported.
Content:
Heading: "Audit Leaderboard"
Stats row (4 cards):
1125+ — Total Number of Audits
2500+ — Total Vulnerabilities Found
100000+ — Lines of Code Audited
40+ — Chains Supported
Layout:
Zinc-50 background, ~64px vertical padding
Outer wrapper: a single rounded card with zinc-100 background, large rounded corners
(~16px), generous padding
Heading at top center (Outfit 32–36px, zinc-900)
Four stat cards in a row beneath, equal widths, ~24px gap
Each stat card: white background, 1px zinc-200 border, sharp corners, ~32px internal
padding
Number: Outfit 40–48px, weight 700, zinc-900, centered
Label: DM Sans 14px, zinc-600, centered, beneath the number with ~8px gap
Mobile: stats wrap to 2 columns, then 1
Behavior:

-- 77 of 146 --

Numbers count-up on load (reuses the §4.4 count-up animation pattern)
Stats data is fetched from backend on page load; show subtle skeleton placeholders during
fetch
Components used: DashboardHeading, StatsCardRow (new)
Treatment difference vs. home page: the home page's $ impact stats (§4.4) use inline
numbers with thin vertical rules on a black background — a decorative marketing pattern. This
page uses bordered cards on a light background — an operational dashboard pattern. Both
should exist in the design system. The choice signals whether the numbers are decorative (home
page) or operational data (here).
27.4 Charts row — $ findings
Purpose: visualize the qualitative breakdown of audits — what kinds of vulnerabilities, what
chains.
Content: two donut charts side-by-side:
Left chart — Findings by Severity:
Segment 	Count 	Percent 	Color
High Severity 	400 	37.4% 	Red
Medium Severity 	210 	19.6% 	Orange
Low Severity 	287 	26.8% 	Yellow / amber
Informational 	173 	16.2% 	Green
Right chart — Audits by Platform:
Segment 	Count 	Percent 	Color
Ethereum 	601 	42.3% 	Red
BSC 	364 	25.6% 	Orange
Polygon 	193 	13.6% 	Yellow
Others 	263 	18.5% 	Green
Chart color palette (semantic, reusable for any future chart):

-- 78 of 146 --

Role 	Hex 	Usage
Chart Red 	#E13B33 	High severity / largest slice
Chart Orange 	#F7931E 	Medium severity / second slice
Chart Yellow 	#F5C518 	Low severity / third slice
Chart Green 	#74BF00 (Immune Green) 	Informational / smallest slice
Important note on green's role here: green corresponds to informational (least urgent) on the
severity chart, which is the conventional severity coloring — not the brand-accent role green
plays elsewhere on the site. This is correct semantically; just be aware that the brand color
appears in a "low priority" position here.
Layout:
White background, ~64px vertical padding
Two chart cards side-by-side, equal widths, ~24px gap
Each card: white background, 1px zinc-200 border, ~32px padding, sharp corners
Heading at top center: Outfit 22px zinc-900 (e.g., "Findings by Severity")
Donut on the left of the card body, legend on the right
Donut: stroke 16–20px, gap-less segments, no center label
Legend: vertical stack of rows. Each row: ● Label 	Count 	Percent
Dot: 8px circle in segment color
Label: DM Sans 14px zinc-700
Count: DM Sans 14px zinc-900 weight 600
Percent: DM Sans 13px zinc-500
Mobile: cards stack vertically; donut + legend stack within each card
Behavior:
Segments draw in on scroll-into-view (0° → final value, ~600ms ease-out)
Hover on a segment slightly enlarges it and bolds the matching legend row
Legend rows are not clickable in v1; donuts are display-only (not interactive filters)
Components used: DashboardHeading, DonutChart, ChartLegend (new)
27.5 Projects table — $ projects
Purpose: the full audit history, scannable and searchable. Each row is a public audit.

-- 79 of 146 --

Content (10 rows visible per page; pagination shows 11 total pages = ~104 audits):
Logo 	Project 	Date 	Platform 	Tags 	Action
● 	EPIC 	3/28/2025 	Ethereum 	L1, +1 	→
● 	AgAu 	10/18/2025 	Ethereum 	Institutional, +1 	→
● 	Collect Foundation 	11/29/2025 	Ethereum 	L1 	→
● 	Plume Network 	2/03/2025 	Ethereum 	L1 	→
● 	Cross The Ages 	7/28/2025 	Solana 	L1 	→
● 	cSigma Finance 	5/31/2024 	Ethereum 	Institutional 	→
● 	SmartCredit 	2/17/2024 	Ethereum 	DApp 	→
● 	Vanar 	2/12/2024 	Vanarchain 	Blockchain Audit 	→
● 	Creampan 	10/28/2023 	Cronos 	DeFi 	→
● 	Uwerx 	9/11/2023 	Polygon 	Token 	→
Layout:
White background, ~64px vertical padding
Search input above the table:
~320px width on desktop, full-width on mobile, left-aligned
Magnifying-glass icon at left
Placeholder text: "Search Project..."
Style: rounded pill, 1px zinc-200 border, white background, ~12px vertical padding
Table: 1px zinc-200 border, sharp corners, white background
Header row: zinc-50 background; column labels in DM Sans 13px uppercase tracking-
wide zinc-600
Body rows: white background → zinc-50 on hover; 1px zinc-100 separator between
rows; ~16px vertical padding per row
Columns:
Project (logo + name): small circular logo (~32px) + DM Sans 15px zinc-900
weight 500
Date: DM Sans 14px zinc-600, format M/D/YYYY
Platform: badge — pill-shaped with small icon glyph; each platform has a
distinct color tint:

-- 80 of 146 --

Ethereum: blue tint
Solana: purple tint
Vanarchain: dark/teal tint
Cronos: cyan tint
Polygon: violet tint
(Add as new platforms appear; design must be flexible)
Tags: zero or more small flat badges (zinc-100 background, zinc-700 text). When
more than one exists, show the first + +N overflow indicator (e.g., "L1, +1")
Action: small dark circular button (~32px) with white right-arrow icon — opens
the audit detail
Pagination row below the table:
Left: 0 of 104 row(s) selected. Rows per page: 10 ▼
Right: Page 1 of 11 ← →
Both DM Sans 13px zinc-600
"Rows per page" is a small dropdown (10 / 25 / 50 / 100)
Behavior:
Search filters rows live as the user types. Confirm whether filtering is client-side (all 104
rows fetched on page load) or server-side (queries hit backend).
Pagination updates visible rows; URL should update with ?page=N for shareability
Action button opens the audit report — confirm whether external PDF, internal case study
page, or contextual choice
Default sort: most recent first (date column descending)
Confirm whether columns are sortable (clicking the header to sort by Date, Project,
Platform)
Components used: SearchInput, DataTable, PlatformBadge, TagBadge, ActionButton (small
icon button), PaginationControls (new)
27.6 Bottom CTA
Reuses §4.9 pattern unchanged.
27.7 Footer
Reuses §4.10 pattern unchanged.

-- 81 of 146 --

28. Clientele page ( /clients — top-level page from primary nav)
Linked from: primary nav "Client" menu item (§3).
This page serves a different purpose than the §27 Audit Leaderboard. Where Audit is data-driven
proof of work (numeric, dashboard-shaped), Clientele is social proof through human voice —
logos of who chose ImmuneBytes, plus video and text testimonials in their own words.
New hero pattern introduced: image-background-with-centered-title. We now have four
distinct hero patterns in the design system, and the choice signals what kind of page the user is
on:
Hero pattern 	First
introduced
Used for
Split + terminal
mockup
§4.2 (Home) 	Marketing — where space allows showing rather than telling
Centered title +
matrix-rain
§5.2 (SCA) 	Service detail / technical pages
Stats-card hero 	§27.3 (Audit) 	Dashboard / data-as-pitch pages
Image-background
hero
§28.2
(Clientele)
Top-level non-dashboard pages where a single thematic
image grounds the page identity
Treat the four-pattern set as a deliberate system expansion. Future top-level pages (About,
Pricing, Contact) likely use the image-background hero too.
Section structure
Section 	Type 	Background
$ header 	Global nav 	(same as §4.1)
$ clientele 	Image-background hero 	Black + photo overlay
$ breadcrumb 	Trail 	White
$ our_clients 	Client logo grid 	White
$ testimonials 	Masonry testimonial grid 	White
$ cta 	Conversion banner 	(reuses §4.9 pattern)
$ footer 	Global footer 	(same as §4.10)

-- 82 of 146 --

28.1 Header
(Same as §4.1.)
28.2 Hero — $ clientele (new pattern: image-background hero)
Purpose: establish page identity with a single confident, image-grounded title. No subhead, no
CTAs — just the page name.
Content:
Headline: "Clientele"
Layout:
Black background with a full-bleed photo: wide-angle shot of professionals in business
attire (silhouetted, partial figures), tinted Immune Green at low opacity to brand-tie the
imagery
~96px vertical padding
Headline center-aligned, Outfit 56–64px, white
Optional: a subtle matrix-rain motif layered into the photo at very low opacity, establishing
visual continuity with the home hero (§4.2) without re-using its full intensity
Soft gradient at top and bottom edges to soften the photo's transition into the page
Mobile: photo crops tighter; headline scales to ~40px
Behavior:
Photo fades in on load
Headline fades + translates up slightly
Components used: PageHeroWithBackground (new)
Open question: the source photo is a generic stock image of business professionals. For a
security firm whose writing across the site reads as a working auditor's voice, generic stock-
photo people undermines that authenticity. Recommend either commissioning a custom team
photo or swapping for a less people-focused image (server room, code on screens, abstract
security visualization) that doesn't tie identity to specific stock-photo faces. Flag as a
content/branding decision.
28.3 Breadcrumb — $ breadcrumb
Reuses the §27.2 Breadcrumb component. Trail: Home › Clientele .

-- 83 of 146 --

Note: breadcrumbs appear on top-level destination pages (Audit, Clientele, likely About / Pricing
too) but not on service detail pages (§§5–26). This is a deliberate IA distinction — service pages
are reached via the mega menu and don't need additional location signals; top-level pages
benefit from breadcrumbs because they sit at the same hierarchical level as the home page.
28.4 Our Clients — $ our_clients (client logo grid)
Purpose: show the breadth of clients audited — more credible than the home page's small trust
bar because it shows scale.
Content:
Heading: "Our Clients"
Subhead: "Trusted by global teams for a security-first approach. ImmuneBytes has
completed 1,000+ engagements securing applications, protocols and AI systems across
Web3 and enterprise ecosystems."
Logo grid: 18+ client logos visible (count grows with new audits)
Layout:
White background, ~96px vertical padding
Heading centered, Outfit 36–40px zinc-900
Subhead beneath, DM Sans 16px zinc-600, max-width ~720px, centered
Logo grid: 6 columns × 3 rows on desktop, responsive: 4 cols at tablet → 3 at mobile → 2 at
small mobile
Each logo in its own card: white background, 1px zinc-200 border, ~8px rounded
corners, ~24px padding, ~80px tall
Logo centered within the card, ~40px max height
Logos retain their original brand colors — distinct from the §4.3 LogoStrip's
monochrome treatment. Here we're showcasing diversity; on the home page we're
maintaining unified visual rhythm.
Subtle hover: border zinc-200 → Immune Green at ~30% opacity, lift y-2px, 200ms
Behavior:
Cards stagger-fade in on scroll (30ms per card)
Click: opens client case study if one exists, otherwise links to client site (confirm)
Components used: ClientLogoGrid (new — distinct from §4.3 LogoStrip )
Note — LogoStrip vs. ClientLogoGrid:

-- 84 of 146 --

§4.3 LogoStrip : small horizontal strip on home, 5–6 marquee logos, monochrome with
hover-color reveal — emphasizes unity
§28.4 ClientLogoGrid : large card grid on dedicated page, all logos, retain brand colors —
emphasizes quantity and breadth
Both should exist. They serve different rhetorical purposes.
28.5 Testimonials — $ testimonials (masonry grid, new layout)
Purpose: social proof through diverse client voice — both video (warmer, more authentic) and
text (quotable, scannable) formats.
Content (8 testimonials visible; pagination at bottom suggests more come later):
Video testimonials (4):
# Name 	Role 	Company
1 	Dr. Gabriel Allred 	Founder 	Bixxter Labs
2 	Adam Boudjemaa 	Lead Blockchain Developer 	Polytrade Finance
3 Jérémie Lepetit 	Co-Founder & CEO 	Metarwind
4 Ebrahiem Mohamed 	Founder 	Ethereum STX
All names and companies need verification — source legibility was OK but not perfect for these.
Text testimonials (4) — verified copy where legible:
5. Dheeraj Borra, Co-Founder, Stader Labs:
"ImmuneBytes demonstrated the perfect blend of expertise, commitment, and
accountability, resulting in an audit that surpassed expectations. Their thorough
approach and dedication ensured a high-quality outcome, reflecting their capability
and professionalism in delivering exceptional service."
6. Aruje Jahan, Product Owner, LoX:
"We partnered with ImmuneBytes for a security audit of our products. Their expertise
and professionalism instilled confidence throughout the process. They promptly
addressed our questions, and their thorough analysis significantly enhanced our
project's security, safeguarding our users' assets. We highly recommend ImmuneBytes
and look forward to future collaborations."
Same testimonial as §7.8 (By Project Type page). Confirm this is the canonical Aruje Jahan
testimonial — recommend storing once and referencing from page-specific lists.
7. Mac P, Chief Engineer, Ethernity:

-- 85 of 146 --

"We are thoroughly impressed by their team, who left no scope for a communication
gap and provided a quick turnaround time. They took up each requirement with utmost
detail and acted on it. It was a pleasing experience to work with you. Looking to working
with you guys again!"
8. Yog Shrusti, Co-Founder & CEO, Farmsent:
"Robots can do audits, but the personal touch makes a difference. That's why we love
Immunebytes! Not only do they do top-class audits, but they also take the time to
understand our project and why certain things are done in specific ways. They take the
time to ensure we feel heard, which shows in their work."
Same testimonial as §4.7 (home page). Same note as Aruje Jahan — confirm canonical and
reference, don't duplicate.
Layout:
White background, ~96px vertical padding
Heading: "What Our Clients Trust us with" (centered, Outfit 36px zinc-900)
Subhead: "Our clients trust us to deliver reliable solutions with measurable results."
(centered, DM Sans 16px zinc-600)
Masonry grid: 3 columns on desktop with mixed card heights:
Video testimonial card: 16:9 aspect ratio, photo/video thumbnail with green play
button overlay; name + role overlaid at bottom in white text on a slight scrim; "Video
Testimonial" badge in a corner; 1px zinc-200 border; ~12px rounded corners
Text testimonial card: alternates between zinc-900 (dark) and zinc-50 (light)
backgrounds for visual rhythm; quote glyph at top; body in DM Sans 14–15px;
attribution at bottom (small avatar circle + name + role/company); ~12px rounded
corners
Cards arranged in masonry — varying heights wrap naturally
Mobile: single column stack
Pagination: standard control beneath the grid: ‹ 1 › with caption "Showing 1–8 of 8
testimonials"
Behavior:
Cards stagger-fade in on scroll
Video card click: opens video in a modal (recommended over inline autoplay for
performance)
Pagination: loads next page of testimonials
Components used: TestimonialMasonryGrid (new), VideoTestimonialCard (new — extends
§4.7 VideoThumb with name/role overlay + badge), TextTestimonialCard (new — extends §4.7
Quote with avatar attribution), PaginationControls (reused from §27.5)

-- 86 of 146 --

Confirm names + companies for the 4 video testimonials (#1–4 above) — source legibility
was imperfect.
Confirm the cross-page testimonial reuse pattern: should testimonials be stored centrally
and pulled by ID into individual pages, or copied into each page? Recommendation: store
centrally, reference by ID — keeps copy consistent if a client updates their quote.
Confirm video testimonial behavior: modal vs. inline autoplay.
28.6 Bottom CTA
Reuses §4.9 pattern unchanged.
28.7 Footer
Reuses §4.10 pattern unchanged.
29. About page ( /about — top-level page from primary nav)
Linked from: primary nav "About" menu item (§3).
The About page introduces a company showcase structure rather than the prose template I'd
anticipated for it (§7-style). It's heavily structured: mission/vision cards, values grid, team
section with featured founder + sub-team, recruitment CTA, and a trust strip. The §7 prose
template stays reserved for service-content pages where reflective tone fits the message; About
uses a more conventional company-page architecture.
New hero variant: abstract pattern background instead of stock photo. This sidesteps the §35
#155 stock-photo concern entirely — for a security firm, an abstract green topographical pattern
reads as native to the brand in a way generic stock people don't. Recommendation: extend the
§28.2 PageHeroWithBackground component to support both photo and pattern variants, and
prefer the pattern variant on identity-sensitive pages (About, Pricing, Contact).
New components introduced: MissionVisionDuo, ValuesGrid (with center-anchored heading),
TeamMemberFeaturedCard, TeamMemberCompactCard, RecruitmentCTASection.
Section structure
Section 	Type 	Background
$ header 	Global nav 	(same as §4.1)
$ who_we_are 	Pattern-background hero 	Black + topographic pattern

-- 87 of 146 --

Section 	Type 	Background
$ breadcrumb 	Trail 	White
$ intro 	Single intro paragraph 	White
$ mission_vision 	Two large green cards 	White
$ values 	Values grid with center-anchored heading 	Black + topographic pattern
$ team 	Founder + sub-team 	Zinc-50
$ join_team 	Recruitment CTA with image background 	Black + photo
$ trusted_by 	Logo grid 	White
$ cta 	Conversion banner 	(reuses §4.9 pattern)
$ footer 	Global footer 	(same as §4.10)
29.1 Header
(Same as §4.1.)
29.2 Hero — $ who_we_are (pattern-background variant)
Purpose: establish page identity with a single confident, image-grounded title — same goal as
§28.2, different image strategy.
Content:
Headline: "Who we are?"
Layout:
Black background with a full-bleed abstract pattern (green topographical / wave contour
lines, low-saturation Immune Green, drifting horizontally)
~96px vertical padding
Headline center-aligned, Outfit 48–56px, white
Mobile: pattern compresses; headline scales to ~36px
Behavior:
Pattern lines slowly drift (very subtle parallax, 30–40s cycle) to add ambient motion
without distraction

-- 88 of 146 --

Headline fades in on load
Components used: PageHeroWithBackground (extending §28.2 with a variant prop: photo
or pattern )
Recommendation: apply the pattern variant to all identity-sensitive top-level pages (About,
Pricing, Contact). The photo variant should be reserved for pages where a specific image is the
message (e.g., Clientele, where showing real people is the point — though see §35 #155 about
stock photo concerns).
29.3 Breadcrumb — $ breadcrumb
Reuses §27.2 Breadcrumb. Trail: Home › About .
29.4 Intro — $ intro
A single paragraph that re-anchors the company's positioning before the structured content
begins.
Content:
ImmuneBytes is an experienced security-first services firm, embedding cybersecurity at the
core of technology and business decisions—moving beyond reactive compliance to deliver
proactive, resilient, and trusted systems built for real-world risk.
Layout:
White background, ~64px vertical padding
Centered, max-width ~720px
DM Sans 17–18px, zinc-700, line-height 1.7
No heading — the paragraph stands alone as a positioning statement
Components used: SectionLabel (optional — may not use the $ prefix here since it's a
transitional content block, not a marked section)
29.5 Mission & Vision — $ mission_vision
Purpose: state the two foundational commitments of the firm in equal-weight green cards. The
visual prominence (large green tiles on white) signals that these aren't decorative — they're the
page's claim about what ImmuneBytes is for.
Content:
Our Mission:

-- 89 of 146 --

To embed security at the foundation of every digital system by delivering rigorous
assessments, proactive defense strategies, and engineering-led expertise that strengthen
resilience across Web3, AI, and enterprise environments.
Our Vision:
To become a globally trusted security-first partner, enabling organizations to innovate
confidently by making protection, resilience, and trust integral to every technology decision.
Layout:
White background, ~64px vertical padding
Two large cards side-by-side, equal widths, ~24px gap
Each card:
Background: solid Immune Green ( #74BF00 ) — this is one of the few places on the
site where Immune Green is used as a dominant fill rather than an accent
Sharp-ish corners (~8px radius)
~48px internal padding
Icon at top-left: small white line icon (rocket for Mission, multi-figure for Vision)
Eyebrow label: "OUR" in white DM Sans 13px tracking-wide uppercase
Subtitle: "MISSION" / "VISION" in Outfit 28px white, weight 700, beside the eyebrow
Body: DM Sans 15px white (slight transparency for readability), line-height 1.7
Mobile: stack vertically
Behavior:
Cards fade in on scroll
No hover state — they're not interactive
Components used: MissionVisionDuo (new)
Note on green-as-dominant-fill: the brand foundation in §2 says "Green as accent, never
dominant." This section is a deliberate exception. Mission and Vision are claims about the firm's
purpose, and rendering them in full Immune Green visually communicates "this is the brand's
core commitment." Treat as the canonical exception — don't use full green fills elsewhere unless
similarly load-bearing.
29.6 Values & Culture — $ values (distinctive layout)
Purpose: name the six operating principles with the heading anchored as the visual centerpiece
of the grid.
Content:

-- 90 of 146 --

Heading: "Our Values & Culture"
Six values (each a small card with title + description):
# Title 	Description
1 Security First, Always 	Protection is not an afterthought — it guides every engagement and
decision.
2 Engineering Rigor 	We believe in methodical, evidence-based assessments over assumptions.
3 Client Partnership 	We work alongside teams, not just for them — enabling long-term
resilience.
4 Proactive Mindset 	We think like attackers to strengthen systems before risks become
incidents.
5 Continuous Learning 	Threat landscapes evolve — so do we, through constant research and
refinement.
6 Integrity &
Transparency
Clear findings, honest communication, and accountable execution.
Layout (distinctive — center-anchored heading):
The grid is 3 rows × 3 columns on desktop, with the heading occupying the center column of the
middle row:
Black background with the same green topographical/wave pattern as the hero (visual
continuity within the page)
~120px vertical padding
Heading "Our Values & Culture" rendered in Outfit 36–40px white, centered in the middle
cell
Each value card:
Background: solid Immune Green
Sharp corners (~8px)
~24–32px internal padding
Title: Outfit 16–18px white, weight 600
Description: DM Sans 13–14px white (slight transparency), line-height 1.5
[Value 1: Security First] [ 	blank 	] [Value 2: Engineering Rigor]
[Value 3: Client Partn.] [Our Values 	] [Value 4: Proactive Mindset]
[& Culture 	]
[Value 5: Cont. Learning] [ 	blank 	] [Value 6: Integrity & Transp.]

-- 91 of 146 --

Approximately equal heights
Mobile: collapses to single column with heading as a section title at top
Behavior:
Cards fade in on scroll, stagger by position (top row first, middle, bottom row)
No hover interaction
Components used: ValuesGrid (new)
Layout note: the center-anchored heading is the distinctive visual move on this page. It's similar
in spirit to the §4.4 Impact stats, where the green B-mark used to sit in the middle of the row
(which we removed). Here, the heading itself is the center anchor — a clean solution that doesn't
need a decorative element to hold the layout together.
29.7 Our Core Team — $ team
Purpose: put faces to the firm — the founder gets a featured slot with full bio, the rest of the team
gets compact cards.
Content:
Featured (founder):
Photo: black-and-white portrait of Aabhas Sood
Name: "Aabhas Sood"
Role: "Founder & CEO"
Bio: "As the Founder & CEO of Immune-Bytes, I lead one of the fastest-growing blockchain
security firms focused on smart contract audits, penetration testing, and security
consulting for DeFi, dApps, NFTs, and digital wallet ecosystems. We help projects navigate
the complex security challenges in Web3 and have audited hundreds of protocols across
more than a dozen blockchain networks."
Social: LinkedIn icon (green circular badge)
Compact (sub-team — 3 members):
Photo 	Name 	Role 	Social
B&W portrait 	M. Jariruddin 	Security Engineer 	LinkedIn
B&W portrait 	Kaif Ahmed 	Security Engineer 	LinkedIn
B&W portrait 	Sheetal Sinha 	Business Development 	LinkedIn

-- 92 of 146 --

Layout:
Zinc-50 background, ~96px vertical padding
Heading "Our Core Team" centered (Outfit 36px zinc-900)
Featured founder section:
Two-column layout below the heading
Left (~40%): black-and-white square photo with a green angular accent overlay
(echoes the Immune Bytes B-mark)
Right (~60%): name (Outfit 28px zinc-900) → role (DM Sans 16px zinc-600 weight
500) → bio (DM Sans 15px zinc-700, line-height 1.7) → LinkedIn icon (green circular
badge with white "in" glyph, ~32px)
Sub-team grid: below the founder, 3 compact cards in a row:
Each card: square B&W photo at top + name (Outfit 16px zinc-900) + role (DM Sans
14px zinc-600) + LinkedIn icon at bottom-right of the photo
Equal widths, ~24px gap
Mobile: featured collapses to single column (photo on top); sub-team stacks vertically
Behavior:
Cards fade in on scroll
LinkedIn icon click opens that person's LinkedIn in new tab
Photos can have a subtle color-shift on hover (B&W → slightly toned with green tint),
200ms
Components used: TeamMemberFeaturedCard (new), TeamMemberCompactCard (new)
Open question: confirm that all four photos remain black-and-white. This is a strong stylistic
choice — B&W team photos against an otherwise color-rich site signals "the people, not the
marketing." Recommend keeping. Confirm or override.
29.8 Join Our Team — $ join_team (recruitment CTA)
Purpose: soft hiring pitch — name the philosophy and provide a single email contact.
Content:
Heading: "Join our team"
Subhead: "Our philosophy is simple — hire a team of diverse, passionate people and foster
a culture that empowers you to do your best work."
CTA: "Write an email to hr@immunebytes.com →" (primary green pill button)

-- 93 of 146 --

Layout:
Black background with a wide-angle photo of the team (silhouettes / partial figures, similar
treatment to §28.2's hero) overlaid at low opacity
~120px vertical padding
Heading center-aligned, Outfit 40px white
Subhead beneath, DM Sans 17px zinc-300, max-width ~720px, centered
CTA button center-aligned beneath, ~24px gap
Behavior:
CTA click opens default mail client with hr@immunebytes.com pre-filled
Photo loads with subtle fade
Components used: RecruitmentCTASection (new — variant of the §4.9 conversion CTA
pattern, with a single email-style action instead of two buttons)
Open question: same stock-photo concern as §28.2's hero — the team-group photo here may also
be generic stock. Recommend either custom team photo or abstract pattern (matching §29.2's
pattern hero) for consistency. Confirm.
29.9 We are trusted by — $ trusted_by
Content:
Heading: "We are trusted by"
Logo grid: 15 logos in 5 columns × 3 rows (vs. §28.4's 6×3)
Row 1: BOSON, POLYTRADE, truefi, GoodDollar, MAHADAO
Row 2: VANAR, E.Money Network, Demex, cSigma, ethernity
Row 3: plume, BONFI, XTransfer, quidax, SmartCredit
Layout: identical to §28.4 ClientLogoGrid , just configured as 5-column instead of 6-column.
Reuses the same component with a column-count prop.
Components used: ClientLogoGrid (reused from §28.4)
Open question: confirm whether this section is needed on About at all, given that §28 Clientele
is a dedicated page with a richer client showcase. Recommendation: keep — About is a long page
and ending with a trust signal before the bottom CTA is rhetorically useful. But it may be
redundant. Confirm.

-- 94 of 146 --

29.10 Bottom CTA
Reuses §4.9 pattern unchanged.
29.11 Footer
Reuses §4.10 pattern unchanged.
30. Engagement Models page ( /engagement-models — top-level page from "Pricing"
nav)
Linked from: primary nav "Pricing" menu item (§3). Note: the menu label is "Pricing" but the
URL and page heading are "Engagement Models" — the nav label is the buyer's word ("how
much?"), the page itself is the operator's word ("what kinds of engagements do we offer?").
This page introduces the plain page header pattern — a sixth hero variant. No dark hero, no
image, no pattern. Just breadcrumb + title on light background, with content beneath. This
pattern fits utility/functional pages where content is the priority and a dramatic page identity
isn't needed. Used here and on §31 Pricing Calculator. Likely also fits Contact, Blog index search
results, and similar.
Section structure
Section 	Type 	Background
$ header 	Global nav 	(same as §4.1)
$ breadcrumb 	Trail 	Zinc-50
$ engagement_models 	Plain page header (title only) 	Zinc-50
$ models 	Three engagement model cards 	Zinc-50
$ decision_help 	"Need help deciding" card with calculator CTA 	Zinc-50
$ cta 	Conversion banner 	(reuses §4.9 pattern)
$ footer 	Global footer 	(same as §4.10)
30.1 Header
(Same as §4.1.)
30.2 Breadcrumb — $ breadcrumb

-- 95 of 146 --

Trail: Home › Engagement Models . Reuses §27.2 component.
30.3 Page header — $ engagement_models (plain page header pattern)
Content:
Heading: "Engagement Models"
Layout:
Zinc-50 background, ~32px top padding, ~48px bottom padding
Breadcrumb sits ~16px above the heading
Heading: Outfit 40–48px, zinc-900, left-aligned (not centered — utility page treatment)
No subhead, no CTAs, no decorative elements
Components used: PlainPageHeader (new — sixth hero pattern)
30.4 Engagement models — $ models
Three large card sections, stacked vertically. Each card explains one engagement model and
offers a "Send Query" CTA.
Content:
Card 1: Fixed Price Audit
Description: "Get a comprehensive security audit with predictable costs. We provide an
upfront quote based on your project scope, conduct the full audit, and deliver a detailed
final report with remediation guidance."
Best for (✓ list): One-time audits / Pre-launch Security Reviews / Compliance requirements
CTA: "Send Query →"
Card 2: Retainer
Description: "Ongoing security partnership for continuous protection. Pay a monthly fee to
have dedicated security resources on standby for regular reviews, monitoring, updates, and
immediate response to emerging threats."
Best for (✓ list): Protocols in active development / Evolving Codebases / Long-term
Security Needs
CTA: "Send Query →"
Card 3: Pay Per Vulnerability (PPV)
Description: "Low upfront cost with severity-based payouts. Start with an affordable base
audit fee, then pay only for vulnerabilities discovered based on their severity level (Critical,
High, Medium, Low)."

-- 96 of 146 --

Best for (✓ list): Budget-conscious Projects / Early-stage Startups / Experimental Protocols
CTA: "Send Query →"
Layout per card:
White background, 1px zinc-200 border, ~12px rounded corners, generous padding (~48px)
Two-column internal layout:
Left (~60%): title (Outfit 28px zinc-900 weight 700) + description (DM Sans 16px
zinc-700, line-height 1.7)
Right (~40%): "Best for" list (each item with green ✓ glyph + DM Sans 15px zinc-700)
+ green "Send Query →" pill button below the list
Cards stack vertically with ~24px gap between
Mobile: cards collapse to single column (description on top, list and CTA below)
Behavior:
Cards fade in on scroll, staggered ~80ms apart
Hover: subtle border tint shift to Immune Green at ~30% opacity, no transform
Components used: EngagementModelCard (new)
30.5 Need help deciding — $ decision_help
Same shape as the engagement model cards above, but with a different action — links to the
Pricing Calculator instead of "Send Query."
Content:
Title: "Need help deciding"
Description: "Not sure which engagement model fits your project? Our team can help you
select the right approach based on your timeline, budget, and security requirements."
Best for (✓ list): Schedule Consultation / Contact Sales
CTA: "View Pricing Calculator →" → routes to /pricing (§31)
Layout: identical to §30.4 cards. Same component, different content and CTA destination.
Components used: EngagementModelCard (reused with calculator-CTA variant)
30.6 Bottom CTA
Reuses §4.9 pattern unchanged.
30.7 Footer
Reuses §4.10 pattern unchanged.

-- 97 of 146 --

31. Pricing Calculator page ( /pricing — multi-step wizard)
Linked from: §30 Engagement Models page's "View Pricing Calculator" CTA. May also be
reachable directly via deep link.
This is the first truly application-like page in the spec. The Audit Leaderboard (§27) is data-
driven but read-only; this is a stateful, multi-step form with validation, conditional logic, and
calculated output. Treat it as a small embedded application within the marketing site.
The page has four steps, all rendered at the same URL with state held in-app (or behind a step
query param like ?step=2 for shareability).
Logic deferred: the user has confirmed that the calculation formula, validation rules, and
conditional logic between steps will be specified separately after design is locked. This spec
covers only the UI structure and component shapes, not the business rules.
Typo flag: the page title in source reads "Prcing Calculator" — almost certainly a typo for
"Pricing Calculator." Spec uses corrected spelling. Confirm.
Service coverage flag: the calculator's Step 1 offers only three services — Penetration Testing,
Web3 Security, AI Security. Security Consultancy is absent. This is likely intentional
(consultancy is bespoke and not formula-priceable), but worth confirming.
Section structure (single page, 4 wizard steps)
Section 	Type 	Background
$ header 	Global nav 	(same as §4.1)
$ breadcrumb 	Trail 	Zinc-50
$ pricing_calculator 	Plain page header + stepper 	Zinc-50
$ wizard 	Step content (one of 4) 	Zinc-50
$ wizard_nav 	Back / Continue / Get Estimate buttons 	Zinc-50
$ cta 	Conversion banner 	(reuses §4.9 pattern)
$ footer 	Global footer 	(same as §4.10)
The wizard is one logical area whose content swaps between Steps 1–4. Header / breadcrumb /
page title / stepper persist across all steps.
31.1 Header
(Same as §4.1.)

-- 98 of 146 --

31.2 Breadcrumb — $ breadcrumb
Trail: Home › Pricing . Reuses §27.2 component.
31.3 Page header — $ pricing_calculator (plain page header + stepper)
Content:
Heading: "Pricing Calculator"
Stepper: 4 steps — 1 Service / 2 Scope / 3 Details / 4 Estimate
Layout:
Zinc-50 background continues from breadcrumb
Heading at top, left-aligned, Outfit 40–48px zinc-900
Stepper directly beneath the heading:
4 step pills connected by horizontal lines
Each pill shows step number in a circle + step label
States:
Active step: circle filled black with white number, label in zinc-900 weight 600
Completed step: circle filled Immune Green with white checkmark, label in
zinc-900, line connecting to next step is Immune Green
Pending step: circle outlined zinc-300 with zinc-400 number, label zinc-400
Connector lines between steps: 1px, zinc-200 by default, Immune Green when both
surrounding steps are completed/active
~24px vertical gap between heading and stepper, ~48px below stepper
Behavior:
Stepper progress updates as user advances/retreats through wizard
On mobile: stepper compresses to "Step N of 4" with current step name only
Components used: PlainPageHeader (from §30.3), WizardStepper (new)
31.4 Wizard step 1 — $ wizard (Service selection)
Content:
Section heading: "Select Service"
Three service options (radio cards):

-- 99 of 146 --

Option 	Description 	Icon
Penetration Testing 	Web, mobile & desktop security assessments 	Globe
Web3 Security 	Smart contracts, protocols & DApp audits 	Shield
AI Security 	LLMs, agents & AI infrastructure reviews 	Robot
Layout:
Each radio card: white background, 1px zinc-200 border, ~12px corners, ~16px padding
Card content row: small icon tile (~48px, light green tint background) + title (Outfit 16px
zinc-900 weight 600) + description (DM Sans 13px zinc-600), with radio circle on the far
right
Selected state: 1px green border, light green background tint, radio filled green
Hover: border zinc-300, subtle bg shift
Cards stack vertically with ~12px gap
Behavior:
Click anywhere on the card selects it (whole card is the click target, not just the radio)
Selecting Step 1 enables the "Continue" button in $ wizard_nav
Components used: RadioCard (new — also used in steps 2, 3)
31.5 Wizard step 2 — $ wizard (Scope)
Content (heading: "Required Metrics"):
Field group 1 — Sub-Service (radio, depends on Step 1 service choice):
For Penetration Testing (shown in source): Web Application Testing / Mobile Application
Testing / Desktop Application Testing
For Web3 Security: would be Smart Contract Audit / Protocol & Infrastructure Audit /
Wallet Security (or further broken down — confirm)
For AI Security: would be AI Agent Audit / Chatbot Security / LLM Integration Audit /
Automation & Workflow Audit
Sub-service options should derive from the §3 sitemap. Presented as compact RadioCards
(smaller than Step 1's).
Field group 2 — Total Features in Scope (range slider with quick-select pills):

-- 100 of 146 --

Quick-select pills: 1-10 / 1-50 / 1-100 (clicking adjusts the slider range)
Slider: 1 to 100, granular value displayed top-right (e.g., "10")
Range badge top-right: "1-100 features"
Field group 3 — Application Complexity (segmented control):
Five tiers: Static Website / Basic CRUD App / Multi-user with auth / E-commerce / SaaS /
Enterprise System
Pills laid out horizontally in a single row; selected pill is filled black with white text, others
are zinc-100 background with zinc-700 text
Implies a difficulty gradient — leftmost is simplest, rightmost is most complex
A small green progress bar above the row indicates where the selection sits on the gradient
Field group 4 — Testing Depth (radio — 2 options):
Black-box only (Standard)
Black-box + Architecture Review
Same RadioCard pattern as sub-service field, slightly larger (these are bigger commitments).
Layout:
Each field group is wrapped in a card: white background, 1px zinc-200 border, ~12px
corners, ~24px padding
Field group label (e.g., "Sub-Service *") top-left in Outfit 16px zinc-900 weight 600 —
required asterisk in zinc-500
Cards stack vertically with ~16px gap
Validation:
Required fields: Sub-Service, Total Features, Complexity, Testing Depth (Total Features
defaults to a value, so it's always satisfied)
If user clicks Continue without selecting a required field, show error message in red
beneath the wizard nav buttons (e.g., "Please select a sub-service to continue")
Behavior:
Sub-service options update based on Step 1's service selection
Slider updates the displayed value live
Quick-select pills snap the slider to the start of the named range
Components used: RangeSlider (new), SegmentedSelect (new — for the complexity gradient),
RadioCard (reused), FormFieldGroup (new — wrapper card)

-- 101 of 146 --

31.6 Wizard step 3 — $ wizard (Details)
Content (heading: "Additional Details"):
Field group 1 — Contact Information:
Full Name * (text input)
Email Address * (text input)
*Field group 2 — Expected Delivery Date :
Date input ( dd/mm/yyyy format)
Helper text: "A delivery date is required to generate your estimate"
Field group 3 — Documentation Quality (radio with cost-impact labels):
Comprehensive documentation available — "Reduces cost by 5%"
Partial documentation available — "Standard rate" (default selection)
Limited / No documentation — "Increases cost by 10%"
Field group 4 — Previous Audit History (radio with discount labels):
First-time audit — "Standard rate" (default selection)
Previously audited (re-audit after changes) — "15% discount"
Previously audited by ImmuneBytes — "30% loyalty discount"
Field group 5 — Additional Information (Optional):
Repository Link (text input, placeholder: https://github.com/... )
Preferred Communication (dropdown: Email / Slack / Telegram / Phone — confirm options)
Additional Notes (textarea, placeholder: "Any special requirements or context...")
Layout:
Same FormFieldGroup card pattern as Step 2
Optional group 5 has "Optional" badge to the right of its title
Radio cards in groups 3 and 4 use a richer variant: title (Outfit 14px zinc-900 weight 600) +
cost-impact text below (Fira Code 12px — green for discounts, red for increases, zinc-500
for "Standard rate")
Validation:
Required: Full Name, Email Address, Delivery Date

-- 102 of 146 --

"Get Estimate" button disabled until all required fields are filled
Error messages render beneath wizard nav (e.g., "Delivery date is required to generate your
estimate")
Components used: TextInput, DateInput, Select, TextArea (basic form primitives — first time
these appear in the spec; treat as the canonical form-input components for any future form on
the site), RadioCard with cost-impact variant, FormFieldGroup
31.7 Wizard step 4 — $ wizard (Estimate)
Content:
Heading: "Your Estimate"
Subhead: "Based on your project details — final pricing will be confirmed after scoping
call"
Cost range card (the centerpiece):
Background: black with two large faint green decorative circles (one top-right, one bottom-
left)
Eyebrow label: "ESTIMATED COST RANGE" (Fira Code 11px uppercase tracking-wide,
zinc-500, centered)
Range: $2,070 — $2,530 rendered with the dollar values in large Immune Green (Outfit
56–64px weight 700) and the em-dash separator in white
Timeline pill below: "⏱ Timeline: 3–5 days" (small clock icon + DM Sans 13px white, on a
zinc-800 pill background)
~32px internal padding, ~12px corners
Estimate Summary table:
Two-column key-value pairs:

-- 103 of 146 --

Key 	Value
Service 	Penetration Testing
Name 	(user-entered)
Email 	(user-entered)
Sub-Service 	Web Application Testing
Features in Scope 	10 features
Complexity 	Basic CRUD App
Testing Depth 	Black-box only
Documentation 	Partial
Audit History 	First-time
Delivery Date 	20 May 2026
White card, 1px zinc-200 border, ~12px corners
Each row: key (DM Sans 14px zinc-600) on the left, value (DM Sans 14px zinc-900 weight
600) on the right
1px zinc-100 separator between rows
~16px vertical padding per row
"Start Over" button at the bottom: secondary outlined button with left-arrow icon. Clicking
resets state and returns to Step 1.
Layout:
Cost range card at top, full-width
Estimate Summary table beneath, full-width
Start Over button at the bottom, left-aligned, ~32px above the bottom CTA
Behavior:
"Start Over" reset confirms with user before clearing state? Recommend yes — accidental
click could lose all entered data. Show a small confirmation dialog: "Reset all entered
information?"
The estimate range and timeline are computed server-side from the entered scope. Display
loading skeleton while computing.

-- 104 of 146 --

31.8 Wizard nav — $ wizard_nav
A persistent nav row beneath the wizard step content. Buttons change per step:
Step Left button 	Right button
1 	(none) 	"Continue →"
2 	"← Back" 	"Continue →"
3 	"← Back" 	"Get Estimate →"
4 	(none — replaced by "Start Over" at bottom of summary, see §31.7) 	(none)
Layout:
Justify-between (Back left, Continue/Get Estimate right)
~32px above the bottom CTA section
Validation error messages render beneath this row, right-aligned to match the disabled
action button
Components used: ButtonPrimary, ButtonSecondary (both reused), WizardNavRow (new —
wrapper)
31.9 Bottom CTA
Reuses §4.9 pattern unchanged.
31.10 Footer
Reuses §4.10 pattern unchanged.
32. Blog index page ( /blogs — top-level page from primary nav)
Linked from: primary nav "Blog" menu item (§3).
The Blog index is a content discovery page — similar in spirit to §27 Audit Leaderboard (both
list-shaped) but content-driven (cards) rather than data-driven (table). Posts are fetched from a
WordPress backend — confirmed by Aabhas. This means:
The category list is also dynamic (categories defined in WordPress)
Posts have standard WordPress fields (title, excerpt, featured image, category, date, slug)

-- 105 of 146 --

The index is paginated server-side (10 posts per page based on source: 4 pages of ~10 posts)
Hero pattern reuse: uses the §28.2 PageHeroWithBackground photo variant — same component
as Clientele, different photo overlay. This validates the photo variant as reusable across multiple
top-level pages.
Cross-cutting note: "Case Study" appears here as a blog category. The still-to-spec list also
includes a separate Case Studies index page (§36). Confirm whether these are the same content
surfaced two ways, or distinct (e.g., short blog write-ups vs. full structured case study pages).
Flagged as an open question.
Section structure
Section 	Type 	Background
$ header 	Global nav 	(same as §4.1)
$ blogs 	Image-background hero (photo variant) 	Black + photo overlay
$ breadcrumb 	Trail 	White
$ categories 	Filter tab pills 	White
$ posts 	2-column blog card grid 	White
$ pagination 	Numeric pagination 	White
$ cta 	Conversion banner 	(reuses §4.9 pattern)
$ footer 	Global footer 	(same as §4.10)
32.1 Header
(Same as §4.1.)
32.2 Hero — $ blogs
Content:
Heading: "Blogs"
Layout: identical to §28.2 Clientele hero. Reuses PageHeroWithBackground with the photo
variant. Photo subject can be the same wide-angle business-attire shot used on Clientele (asset
reuse) or a different photo — designer's call. Either way, no subhead, no CTAs, just the title.
Components used: PageHeroWithBackground (reused from §28.2)

-- 106 of 146 --

32.3 Breadcrumb — $ breadcrumb
Trail: Home › Blogs . Reuses §27.2 component.
32.4 Category filter tabs — $ categories
Purpose: let users browse posts by topic. Categories are defined in WordPress and fetched
dynamically.
Content (categories visible in source):
All (default selected)
Blockchain
Case Study
Ecosystems
Game Theory
Protocol Face-off
Stablecoins
Wallet Security
Web3 Security
Layout:
White background, ~32px vertical padding
Horizontal row of pill tabs, left-aligned, with horizontal scroll on overflow (mobile)
Active tab: filled black background, white text — Outfit 14px weight 500
Inactive tab: zinc-50 background, zinc-700 text, 1px zinc-200 border — same typography
Hover (inactive): zinc-100 background, zinc-300 border
Pills: ~32px tall, ~16px horizontal padding, fully rounded
~8px gap between pills
Behavior:
Click a category to filter the post grid below
URL updates with ?category=blockchain for shareability
"All" resets to no filter
Categories list is fetched from WordPress on page load — if the list grows, the row scrolls
horizontally on mobile and wraps to a second row on desktop (or stays in a single row with
horizontal scroll — designer's call; recommend wrap on desktop, scroll on mobile)

-- 107 of 146 --

Components used: CategoryTabs (new — distinct from segmented controls because tabs are
filters, not exclusive selectors in a form context)
32.5 Blog card grid — $ posts
Purpose: the actual list of blog posts.
Content per card:
Banner image: the post's featured image, designed in a consistent template style (dark
background + Immune Green accents + ImmuneBytes B-mark in top-left + post title
overlaid in white) at 16:9 aspect ratio
Inline label below banner: the post's primary subject (e.g., "Web3 Wallets", "Wallet
Security") — small, used as a topical caption rather than a categorical tag
Tag pill + date row: category tag (uppercase tracking-wide, ~12px Fira Code, green
background) + posting date (DM Sans 13px zinc-500), justify-between
Title: Outfit 18–20px zinc-900 weight 600
Excerpt: DM Sans 14px zinc-600, line-height 1.6, clamped to 2 lines
CTA: "Read More" green pill button at the bottom-left of the card
Posts visible in source (10 cards across 4 pages = ~40 posts total in WordPress):

-- 108 of 146 --

Title 	Topic 	Category 	Date
Alchemy's Modular Account: Technical Deep Dive into
ERC-6900
Web3 Wallets 	Wallet Security 31 Jul
2025
The Signature Trap: Why Wallet UX Is Failing Users in
Web3
Wallet Security 	Wallet Security 31 Jul
2025
Quantum-Resistant Smart Contract Audits: Securing
Web3 Before Q-Day
Web3 Security 	Web3 Security 17 Jul
2025
Web3 Frontends: The New Playground for Hackers 	Web3 Security 	Web3 Security 14 Jul
2025
Smart Contract Audits to Next-Gen Tech: The AI ML
Systems
AI & Web3
Security
Web3 Security 16 Jul
2025
Orca Whirlpools vs Uniswap V3 	Protocol Face-
Off
Protocol Face-
off
3 Jul
2025
Stablecoins Under Stress: What Users Should Watch
For
Stablecoins 	Stablecoins 	30 Jun
2025
Analyzing Upgradability Patterns Across Blockchains Blockchain 	Blockchain 	26 Jun
2025
Solana VS Near Blockchain 	Blockchain 	Protocol Face-
off
19 Jun
2025
How to Write Comprehensive Audit Reports: Lessons
from the Trenches
Web3 Security 	Web3 Security 16 Jun
2025
Layout:
White background, ~32px top / ~64px bottom padding
2 columns on desktop, ~32px gap (horizontal and vertical)
Each card: white background, 1px zinc-200 border, ~12px corners, no internal padding
(banner is flush to card edges; content section has ~24px padding)
Banner image at top, full-width within the card, 16:9 aspect ratio with rounded top corners
matching the card
Below the banner: ~24px padding holds tag/date row → title → excerpt → CTA, with
consistent vertical gaps (~12px between)
Mobile: collapses to single column
Behavior:

-- 109 of 146 --

Card hover: subtle border tint (zinc-200 → green at ~30% opacity), ~200ms
Click anywhere on the card (banner, title, or "Read More") opens the article at
/blogs/<slug>
Cards stagger-fade in on scroll, ~30ms per card
Components used: BlogCard (new), CategoryTagPill (new — small uppercase pill used inline)
Default banner template note: the WordPress backend may not have a custom banner for every
post. Recommend the design system include a fallback banner that auto-generates from post
metadata: dark gradient background, green accent imagery, post title overlaid in white. This
matches the visual treatment of the existing banners and keeps the grid uniform even when
authors don't supply art. Confirm whether this is in scope for build.
32.6 Pagination — $ pagination
Purpose: numeric pagination for browsing through ~40 posts.
Content:
"← Prev" button on the left
Numeric page indicators: 1 (active) / 2 / 3 / 4
"Next →" button on the right
Layout:
White background, centered horizontally beneath the post grid
~48px vertical padding
Each page number: small circular pill (~32px), white background with 1px zinc-200 border
by default
Active page: filled Immune Green, white text
Hover (inactive): zinc-50 background
Prev/Next: same pill shape, with arrow glyph + label, slightly wider
Disabled state (Prev on page 1, Next on last page): zinc-100 background, zinc-400 text, no
hover
Behavior:
Clicking a page number loads that page (URL updates with ?page=N )
Clicking Prev/Next navigates by ±1
If filter is active (e.g., ?category=blockchain ), pagination preserves the filter ( ?
category=blockchain&page=2 )

-- 110 of 146 --

For very long lists (>10 pages), recommend showing condensed pagination: 1 2 3 ... 10
Next → . Not needed at current scale (4 pages) but worth designing for.
Components used: NumericPagination (new — distinct from §27.5's PaginationControls
which uses a "Page X of Y" format with row-count summary)
Note on pagination variants: we now have two distinct pagination treatments in the system:
§27.5 PaginationControls : dashboard-style, with row-count summary + "rows per page"
dropdown — appropriate for tabular data
§32.6 NumericPagination : classic blog-style with page numbers — appropriate for content
lists
Both should exist. Choice depends on whether the underlying content is rows-of-data or items-
of-content.
32.7 Bottom CTA
Reuses §4.9 pattern unchanged.
32.8 Footer
Reuses §4.10 pattern unchanged.
Cross-page note: Blog article template still pending. The Blog index links to individual articles
( /blogs/<slug> ), but the article template hasn't been spec'd yet. When that page is added,
recommended treatment:
Plain page header with article title
Featured image as a hero band beneath the header
Long-form prose content (DM Sans 17px, max-width ~720px, generous line-height)
Sidebar or trailing block with related posts (reuses BlogCard at smaller size)
Bottom CTA for newsletter signup or "Talk to an Expert"
33. Contact Us page ( /contact — central conversion destination)
Linked from: primary footer "Contact Us" link (§3) AND every "Talk to an Expert" / "Send
Query" CTA across the site. This makes Contact Us the central conversion destination — every
conversion path on the site terminates here.

-- 111 of 146 --

Because two different CTA labels lead here, the page must serve two slightly different mental
models:
"Talk to an Expert" → user expects a sales conversation → office contact info + phone is
most relevant
"Send Query" → user expects a form submission → form is most relevant
The page handles both by giving them roughly equal visual weight: contact info card up top
(with phone/email prominent), form below ("Have a Query in Mind?"). A user who came for a
conversation can take the office info; a user who came to send a message can scroll to the form.
Neither is buried.
Hero pattern: uses §28.2 PageHeroWithBackground photo variant, with an office-workspace
photo (different subject from Clientele's business-attire shot — same component, different
image asset).
Hero convention refinement (cross-cutting): Contact uses the photo variant, not the pattern
variant I'd recommended in §35 #167. This refines the convention to:
Photo variant → outward-facing pages where people/workspace imagery grounds the page
(Clientele, Blog, Contact)
Pattern variant → inward-facing identity pages where abstract brand imagery fits (About)
Plain page header → utility/functional pages (Engagement Models, Pricing Calculator)
Updated in §36's hero pattern table.
Section structure
Section 	Type 	Background
$ header 	Global nav 	(same as §4.1)
$ contact_us 	Image-background hero (photo variant) 	Black + workspace photo overlay
$ breadcrumb 	Trail 	White
$ get_in_touch 	Office info card + map embed 	White
$ have_a_query 	Contact form 	Zinc-50
$ cta 	Conversion banner 	(reuses §4.9 pattern)
$ footer 	Global footer 	(same as §4.10)
33.1 Header

-- 112 of 146 --

(Same as §4.1.)
33.2 Hero — $ contact_us
Content:
Heading: "Contact Us"
Layout: identical to §28.2 Clientele hero. Reuses PageHeroWithBackground with the photo
variant. Photo subject here is an office workspace shot (rows of monitors, partial figures of people
working). Different photo asset than Clientele/Blog. Same Immune Green tint at low opacity.
Components used: PageHeroWithBackground (reused from §28.2)
Open question: the office photo may or may not be the actual ImmuneBytes office. Recommend
confirming. If it's the real office, lean into that — adds authenticity. If it's stock, same concern as
§35 #155.
33.3 Breadcrumb — $ breadcrumb
Trail: Home › Contact Us . Reuses §27.2 component.
33.4 Get in Touch — $ get_in_touch (office info + map)
Purpose: give visitors all the channels — physical address, email, phone, and a visual map for
finding the office. Equivalent in importance to the form below.
Content:
Heading: "Get in Touch with Our Security Experts"
Subhead: "Your security is our priority. Reach out through any of the channels below to start
hardening your Web3 infrastructure."
Office info card (left):
Title: "ImmuneBytes Pvt. Ltd."
Address: "B1/622, Janakpuri, New Delhi - 110058"
Email: "Email: info@immunebytes.com"
Phone: "Phone: 917303699708"
Map (right):
Google Maps embed centered on Janakpuri, New Delhi, India
Includes a small map info card overlay showing place name + location string

-- 113 of 146 --

Layout:
White background, ~96px vertical padding
Heading + subhead block: centered, max-width ~720px
Heading: Outfit 32–36px zinc-900 weight 700
Subhead: DM Sans 16px zinc-600, line-height 1.7, ~16px below heading
Two-column row beneath, equal widths, ~24px gap, ~48px below subhead:
Left card (Office info):
Background: dark workspace photo at low opacity over a black or zinc-900 base,
with green tint to brand-match
~12px corners
~48px internal padding
Title: Outfit 28px white weight 700
Address / Email / Phone: each on its own line, DM Sans 16px white, ~16px gap
between
Email and Phone labels ( Email: , Phone: ) inline with the values, no bold
differentiation needed
Right card (Map):
Google Maps iframe embed, full card width
Sharp ~12px corners (matching left card)
Map controls (zoom, fullscreen) visible at standard Google Maps default
positions
Map info card overlay anchored at top-left of the map
Mobile: cards stack vertically, map first or info first (recommend info first — it's the primary
content; map is supporting)
Behavior:
Email click: mailto:info@immunebytes.com
Phone click: tel:+917303699708 (note: source string "917303699708" should be
normalized to international format +91 7303699708 )
Map: pan/zoom via Google's standard controls; click on info card opens Google Maps in a
new tab
Components used: OfficeInfoCard (new), MapEmbed (new)

-- 114 of 146 --

33.5 Contact form — $ have_a_query
Purpose: the actual lead-capture form. This is the central conversion mechanism of the site —
every "Send Query" CTA across the site terminates here.
Content:
Heading: "Have a Query in Mind?"
Subhead: "Write us a message, We'll contact you soon."
Form fields:
Field 	Type 	Required 	Placeholder
Full Name 	Text input 	Yes 	Enter Your Name
Email 	Text input 	Yes 	Enter Your Email
Tell us what you need 	Select (dropdown) 	Yes 	Select a category
Message 	Textarea 	No 	Enter Your Message
Submit button: "Submit" green pill button with right-arrow icon, anchored bottom-left of the
form card.
Layout:
Zinc-50 background, ~96px vertical padding
Heading + subhead centered above the form, max-width ~720px
Heading: Outfit 32–36px zinc-900
Subhead: DM Sans 16px zinc-600
Form wrapped in a white card: 1px zinc-200 border, ~12px corners, ~48px internal padding,
max-width ~720px, centered
Form layout inside the card:
Row 1 (2 columns on desktop, stack on mobile): Full Name | Email
Row 2 (full width): Tell us what you need (dropdown)
Row 3 (full width): Message (textarea, ~5–6 lines tall)
Submit button on its own row at the bottom-left of the card content
All field labels above their inputs, ~8px gap, with red asterisk on required fields
Inputs match §31.6 form primitives (TextInput, Select, TextArea) — light zinc background,
1px zinc-200 border, ~8px corners, ~12px padding
Validation:

-- 115 of 146 --

"Tell us what you need" dropdown options (need confirmation):
The source shows just the placeholder ("Select a category") — actual options aren't visible.
Recommended options based on site IA:
Web3 Security Audit
Web2 / Penetration Testing
AI Security Audit
Security Consultancy
Partnership / Other
Confirm or override.
Behavior:
Form submission: send to backend → email notification to ops team → confirmation email to
user → success state on page
Optional: pass the originating CTA context (e.g., "from Smart Contract Audit page") as a
hidden field so ops can route the lead. This requires CTAs across the site to append a ?
from=<page> param when linking here. Recommend including; cheap to add and useful for
routing.
Components used: TextInput / Select / TextArea / ButtonPrimary (all reused from §31.6),
ContactForm (new — wrapper that bundles the specific layout for this 4-field form)
33.6 Bottom CTA
Reuses §4.9 pattern unchanged.
Note on bottom CTA on the Contact page itself: the bottom CTA is "Let's Evaluate Risks and
Secure your Systems" with "Talk to an Expert" and "Send Query" buttons — but those CTAs
route to this same page, which the user is already on. That's tolerable but mildly redundant.
Consider either:
Hiding the bottom CTA on /contact specifically, or
Replacing it with something different (newsletter signup, link to Blog, link to Audit
Leaderboard) that gives the user somewhere new to go after the form

-- 116 of 146 --

Flagged as an open question — current behavior is fine for v1, refinement later.
33.7 Footer
Reuses §4.10 pattern unchanged.
34. Shared component inventory
These components recur throughout the site. Building them right once means every page
benefits.
Two components below appear on every page and have their own dedicated clean-treatment
specs — read them before building:
MegaMenu — full spec in §3, with explicit clean requirements at the bottom of that section
Footer — full spec in §4.10, with explicit clean requirements at the bottom of that section
These two carry the most surface area across the site. Keep them disciplined; they set the
standard everything else must clear.

-- 117 of 146 --

Component 	Used in 	Notes
SectionLabel 	Every section 	The $ name monospace eyebrow. Single
most important visual signature.
Heading 	Every section 	Outfit display. Variants: hero (72px),
section (48px), card (28px).
Subhead 	Most sections 	DM Sans 18–20px, zinc-400 on dark / zinc-
600 on light.
ButtonPrimary 	Hero, CTA, header Green pill, white text, right-arrow
chevron, hover darkens 10%.
ButtonSecondary 	Hero, CTA 	Outlined, zinc-700 border on dark / zinc-
300 on light, hover fills with zinc-900.
ButtonGhost 	Section header
CTAs ("All
Services", etc.)
Pill, zinc-800 bg, white text, green right-
arrow.
ButtonPill 	Footer CTAs
("Audit Reports")
Same as ButtonGhost but smaller.
MegaMenu 	Header 	Four-column dropdown — see §3.
TerminalMockup 	Hero (and
reusable later)
Stylized terminal window with typing
animation.
LogoStrip 	Trusted by 	Monochrome logos with hover-color
reveal.
Stat / StatRow 	Impact section 	Large number + small Fira Code label,
count-up animation.
ServiceRow 	Services section 	Numbered horizontal row with icon + title
+ description + link.
CaseStudyCard 	Case studies
section
Two-column card, dark-visual + light-
content.
VideoThumb 	Testimonials 	16:9 with green play overlay.
Quote 	Testimonials 	Quote glyph + body + attribution.
PaginationDots 	Testimonials (and
any future
carousels)
Small circles, green active state.

-- 118 of 146 --

Component 	Used in 	Notes
BlogCard 	Insights section 	Cover + tag + title + read link.
Footer 	Global 	Four-column layout with newsletter and
bottom bar.
MatrixRainBackdrop 	Hero (home +
service detail
pages)
Vertical green light streaks. Density
variants: full (home, §4.2) and 50%
(service detail pages, §5.2).
CoverageList 	Coverage section
(§5.3)
Hairline-separated list with green
chevron prefix; single-line scope items.
FailureModeCard 	Failure modes
section (§5.4)
Two-column dark card: icon tile + title +
description.
BinaryRainBackdrop 	Process section
(§5.5)
Animated 0/1 columns cascading
downward in green.
ProcessStep 	Process section
(§5.5)
Numbered step card: number tab + icon +
title + short description.
TwoColumnList 	Tools section
(§5.6)
Side-by-side bulleted lists with
subheadings, on dark surface.
ToolLogoStrip 	Tools section
(§5.6)
Same pattern as LogoStrip (§4.3) but
for tool/standard marks.
DeliverablesList 	Deliverables
section (§5.7)
Checkmark-prefixed list, large text, draws
in on scroll.
FAQAccordion 	FAQ section
(§5.10)
Single-open accordion with question +
toggle glyph + animated answer.
CoverageListWithDescriptions Coverage section
variant (§7.3)
Variant of CoverageList : each row has
a bold green-chevron prefix + lead-in
label + descriptive paragraph. Same
visual rhythm as base, richer per-item
content.
ProseSection 	Reflective prose
sections (§§7.4,
7.5, 7.6)
Generic text-heavy section: label +
heading + body with optional inline
mono-styled emphasis on quoted phrases.
Light + dark background variants.
Reusable on About / philosophy pages
later.

-- 119 of 146 --

Component 	Used in 	Notes
TestingFocusBlock 	(deprecated — see
FocusBlock )
Original name on AI Security pages. Now
folded into FocusBlock with a title
prop; do not implement separately.
FocusBlock 	AI Security pages
(§§19–22) and
Shift-Left
Security (§23)
Compact dark pill-shaped callout. Title is
a prop: "Testing focus" on AI pages,
"Implementation focus" on Shift-Left
Security. Lists 3 service-specific bullets.
Sits between Tools logo strip and
Deliverables. Designed to be reusable on
any future page that needs to call out
specific emphases above and beyond the
standard tools row.
Breadcrumb 	Audit
Leaderboard
(§27.2)
Trail above page hero — Home ›
Leaderboard . Zinc-500 default, zinc-
900 hover; green chevron separator.
Reusable on any sub-page that benefits
from showing location.
DashboardHeading 	Audit
Leaderboard
(§§27.3, 27.4)
Plain page heading without the $
monospace eyebrow. Used on dashboard /
data pages where the marketing-section
pattern isn't appropriate. Outfit 22–36px,
zinc-900, centered.
StatsCardRow 	Audit
Leaderboard
(§27.3)
Row of bordered white stat cards on a
zinc-100 wrapper card. Different visual
treatment from §4.4's home-page stats
(which are inline numbers with vertical
rules on dark). Both should coexist; choice
signals decorative-marketing vs.
operational-data.
DonutChart 	Audit
Leaderboard
(§27.4)
Standalone donut visualization. Stroke
16–20px, gap-less segments, no center
label. Animates draw on scroll-in. Hover
slightly enlarges segment + emphasizes
matching legend row. Uses the chart color
palette (red / orange / yellow / green) —
not the brand palette.
ChartLegend 	Audit
Leaderboard
Vertical legend rendered alongside
DonutChart . Each row: colored dot +

-- 120 of 146 --

Component 	Used in 	Notes
(§27.4) 	label + count + percent.
SearchInput 	Audit
Leaderboard
(§27.5)
Rounded-pill search input with
magnifying-glass icon at left. Placeholder
text customizable.
DataTable 	Audit
Leaderboard
(§27.5)
Bordered table with header row (zinc-50
bg) + body rows (hover zinc-50) + per-row
separator. Generic — column rendering is
composable.
PlatformBadge 	Audit
Leaderboard
(§27.5)
Pill-shaped badge with chain/platform
icon and label. Each platform has its own
tint (Ethereum=blue, Solana=purple,
Vanarchain=dark/teal, Cronos=cyan,
Polygon=violet, etc.). New platforms can
be added without changing the
component.
TagBadge 	Audit
Leaderboard
(§27.5)
Small flat badge — zinc-100 background,
zinc-700 text. Used for short categorical
labels (L1, Institutional, DApp, DeFi,
Token, etc.). When multiple tags don't fit,
last visible tag is replaced with a +N
overflow indicator.
ActionButton (icon) 	Audit
Leaderboard
(§27.5)
Small dark circular button (~32px) with
white icon glyph. Used for inline actions
in tables and cards.
PaginationControls 	Audit
Leaderboard
(§27.5), Clientele
testimonials
(§28.5)
Dual-purpose pagination row: row-count
summary + "rows per page" dropdown on
the left, page indicator + prev/next on the
right.
PageHeroWithBackground 	Clientele (§28.2) 	Image-background hero with centered
title only (no subhead, no CTAs). Black
background + photo overlay + green tint +
soft top/bottom gradients. Likely reusable
on About / Pricing / Contact.
ClientLogoGrid 	Clientele (§28.4) Multi-column card grid of client logos.
Each logo in a bordered card with brand
colors retained (vs. §4.3 LogoStrip

-- 121 of 146 --

Component 	Used in 	Notes
which uses monochrome). 6 cols desktop
→ 4 → 3 → 2 responsive.
TestimonialMasonryGrid 	Clientele (§28.5) 	Multi-column masonry layout mixing
video and text testimonial cards at
varying heights. 3 cols desktop, 1 col
mobile.
VideoTestimonialCard 	Clientele (§28.5) 	Extends §4.7 VideoThumb with
name/role overlay + "Video Testimonial"
badge. 16:9 thumbnail with green play
button.
TextTestimonialCard 	Clientele (§28.5) 	Extends §4.7 Quote with avatar
attribution layout. Alternates zinc-900
(dark) and zinc-50 (light) backgrounds for
visual rhythm in a masonry grid.
PageHeroWithBackground
(extended)
Clientele (§28.2 —
photo variant),
About (§29.2 —
pattern variant)
Now supports two variants via a
variant prop: photo (image-overlay
hero, e.g. Clientele) and pattern
(abstract topographical/wave pattern, e.g.
About). Recommend pattern for
identity-sensitive top-level pages (About,
Pricing, Contact); photo for pages
where a specific image is the message.
MissionVisionDuo 	About (§29.5) 	Two large solid-Immune-Green cards
side-by-side, white text, with eyebrow +
title + body + small white line icon.
Canonical exception to the "green as
accent" rule (§2).
ValuesGrid 	About (§29.6) 	3×3 grid with the section heading
anchored in the center cell, surrounded by
6 small green value cards (top-left, top-
right, middle-left, middle-right, bottom-
left, bottom-right). Distinctive layout —
heading itself is the visual centerpiece, no
decorative element needed.
TeamMemberFeaturedCard 	About (§29.7) 	Two-column featured profile: B&W photo
with green angular accent overlay (left) +
name + role + bio + LinkedIn icon (right).

-- 122 of 146 --

Component 	Used in 	Notes
Used for hero team members like the
founder.
TeamMemberCompactCard 	About (§29.7) 	Square B&W photo + name + role +
LinkedIn icon at bottom-right of photo.
Used in 3-up grid for sub-team members.
RecruitmentCTASection 	About (§29.8) 	Variant of the §4.9 bottom CTA: dark
image-background section with single
email-style action ("Write an email to
hr@..."). Same visual rhythm as the
conversion CTA, different action shape.
PlainPageHeader 	Engagement
Models (§30.3),
Pricing Calculator
(§31.3)
Sixth hero pattern. Light background,
breadcrumb + left-aligned title only — no
image, no pattern, no decoration. For
utility/functional pages where content is
the priority.
EngagementModelCard 	Engagement
Models (§§30.4,
30.5)
Two-column card: title + description on
left, ✓ list + CTA pill on right. White bg,
1px border. CTA destination varies (Send
Query for engagement cards, View
Pricing Calculator for the decision-help
card).
WizardStepper 	Pricing Calculator
(§31.3)
Horizontal 4-step progress indicator with
circle pills + labels + connecting lines.
States: pending (zinc), active (black
filled), completed (green filled with
checkmark). Mobile compresses to "Step
N of 4" with current label.
RadioCard 	Pricing Calculator
(§§31.4, 31.5, 31.6)
Card-style radio button: icon (optional) +
title + description + radio circle. Whole
card is the click target. Selected state:
green border + light green tint
background. Has variants: large (Step 1),
compact (Step 2 sub-service), cost-impact
(Step 3 docs/history with green discount
or red increase labels).
RangeSlider 	Pricing Calculator
(§31.5)
Slider with 1–N range, live-displayed
value, and optional quick-select pills

-- 123 of 146 --

Component 	Used in 	Notes
above the slider that snap to named
ranges.
SegmentedSelect 	Pricing Calculator
(§31.5)
Pills laid out horizontally as a single row
representing a gradient (e.g., complexity
from simple to enterprise). Selected pill is
filled black; small green progress bar
above shows where the selection sits on
the gradient.
FormFieldGroup 	Pricing Calculator
(§§31.5, 31.6)
Wrapper card: white bg, 1px zinc-200
border, ~12px corners. Group label (with
required * or Optional badge) +
grouped form fields inside. Standardizes
the visual rhythm of multi-field form
sections.
TextInput / DateInput /
Select / TextArea
Pricing Calculator
(§31.6)
Canonical form-input primitives. Treat as
the design-system form components for
any future form on the site (Contact,
Newsletter detail forms, etc.). Match the
existing button/border/radius style.
EstimateRangeCard 	Pricing Calculator
(§31.7)
Black card with green decorative circles,
eyebrow label, large green dollar range,
white em-dash separator, timeline pill.
Centerpiece of the calculator's output
step.
EstimateSummaryTable 	Pricing Calculator
(§31.7)
Two-column key-value table: keys in zinc-
600, values in zinc-900 weight 600,
hairline separators. Standard layout for
any future "summary of selected options"
view.
WizardNavRow 	Pricing Calculator
(§31.8)
Justify-between Back/Continue button
row. Validation error messages render
beneath the right button when action is
blocked.
CategoryTabs 	Blog index (§32.4) Horizontal row of pill-shaped filter tabs.
Active tab: filled black, white text.
Inactive: zinc-50 with zinc-200 border.
Categories fetched dynamically from
WordPress. Distinct from

-- 124 of 146 --

Component 	Used in 	Notes
SegmentedSelect because tabs are
URL-state filters, not exclusive form-
context selectors.
BlogCard 	Blog index (§32.5) Card with featured-image banner (16:9,
rounded top corners) + content section
beneath (tag pill + date + title + excerpt +
Read More CTA). Whole card is a click
target. Reusable in any "related posts" or
content-list context.
CategoryTagPill 	Blog index (§32.5) Small uppercase pill, Fira Code 12px, used
inline within content cards as a topical
tag. Distinct from TagBadge (§27.5)
which is a flat zinc-tinted badge for
tabular data.
NumericPagination 	Blog index (§32.6) Classic blog-style numeric pagination:
Prev / 1 / 2 / 3 / 4 / Next. Active page filled
Immune Green; inactive pages bordered.
Distinct from §27.5
PaginationControls which uses
"Page X of Y + rows-per-page" dashboard
format. Both should coexist — choice
depends on whether content is rows-of-
data or items-of-content.
OfficeInfoCard 	Contact (§33.4) 	Dark card with workspace photo at low
opacity in the background, company info
(name, address, email, phone) in white
text overlaid. ~12px corners, ~48px
padding. Specific to Contact but the dark-
card-with-photo-bg pattern could be
reused for any "physical presence"
display.
MapEmbed 	Contact (§33.4) 	Wrapper around a Google Maps iframe
embed. ~12px corners matching
surrounding cards. Centered on the office
location. Standard Google Maps controls.
ContactForm 	Contact (§33.5) 	Wraps the 4-field contact form (Name,
Email, Category, Message) in a white card
with the specific layout (2-column row 1,

-- 125 of 146 --

Component 	Used in 	Notes
full-width rows 2 and 3, Submit at bottom-
left). Uses §31.6 form primitives. The
central conversion mechanism of the site
— every "Send Query" CTA terminates
here.
35. Open questions & decisions to confirm
Listed roughly in priority order so design / Aabhas can resolve before the next handoff.
For the design Claude reading this: every item below includes a recommended default. If a
question affects your immediate work, take the recommended default and proceed — don't
pause to ask. Surface back to Aabhas only if (a) the recommended default is genuinely
unworkable, (b) the decision is load-bearing for the rest of the design system, or (c) two
recommendations conflict. The volume of questions here reflects thorough capture during
spec'ing, not a list of blockers — most have clear defaults and the design can move forward with
them.
Categories below:
Cross-page artifacts (A–C, D–E): highest priority — single fix applies to many pages
Per-page items (numbered): organized by section. Mostly content-confirmation and minor
behavior decisions.
Cross-page recurring artifacts (high priority)
These transcription artifacts appear on multiple pages — likely consistent issues with the source
rendering rather than per-page errors. Confirming once will resolve them everywhere:
A. Step 6 of "How we work" appears as a duplicated "Report" / "Reporting" on §6 By
Chain, §§8–14, §§15–18, §§19–22, and §§23–26. Almost certainly the actual title is "Retest"
or "Validation" or similar. One confirmation applies across all template-conforming pages.
B. Deliverables item 3 appears as either "Re-detective focused on..." (on §§5.7, 6.7, 8, 9, 10,
11, 14, 16) or "Re-direction that..." (on §13, §17, §18, §19, §20, §21, §22). These are two
distinct misreads:
"Re-detective" is almost certainly "Retest".
"Re-direction" is almost certainly "Recommendations" or "Remediation guidance".
Confirm both globally. Note: consultancy pages (§§23–26) have content-specific
deliverables that don't follow this pattern, so they're not affected.
C. Tools section second-column heading varies by page. Web3 pages use "Audit outputs" /
"Outputs"; pen testing uses "Optional Tooling" (§15); web app uses "Output format options"

-- 126 of 146 --

(§16); mobile uses "Platform coverage" (§17); desktop uses "Output options" (§18); AI pages
use "Outputs" (§§19–22); Shift-Left (§23) uses "Outputs" — but its first column is "Core
standards" not "Core Tooling". The TwoColumnList component must accept arbitrary
column titles for both columns.
Pillar-level structural decisions (high priority)
D. AI Security and Security Consultancy both have flat structures (4 direct sub-services
with no drill-downs), in contrast to Web3 and Web2 which have parent-and-children.
Confirm: should the AI Security and Security Consultancy pillar overview pages mirror
each other's flatter shape, while Web3 and Web2 mirror each other's tiered shape?
Recommendation: yes — let the pillar overview's information architecture reflect the
underlying service organization rather than forcing a single template.
E. The FocusBlock component appears on AI pages (titled "Testing focus") and Shift-
Left Security (titled "Implementation focus"), but not on §§24–26. Confirm whether this
is intentional (Shift-Left has more concrete implementation targets to call out) or an
inconsistency to fix. Two reasonable answers:
Keep as-is — AI pages and Shift-Left have something specific worth calling out; the
others don't.
Add focus blocks to §§24–26 too, with appropriate titles ("Engineering focus", "Audit-
prep focus", "Research focus", or similar) — for design consistency across the
consultancy pillar.
Landing page (§4)
1. Stat labels (§4.4): what do 608+ , 192+ , 61+ actually represent?
2. 4th service description (§4.5): copy was clipped in source.
3. Web3 Security service description (§4.5): source copy was truncated mid-sentence.
4. 5th client logo (§4.3): identify the obscured logo between cSigma and Plume.
5. Testimonial attribution (§4.7): verify spelling of "Yog Shrasti" and his company.
6. Stat presentation (§4.4): confirm count-up animation vs. static numbers, and B-mark
removal.
7. Hero primary CTA label (§4.2): keep "Send Query" or shift to something more concrete?
8. Social platforms (§4.10): which platforms are active?
9. Phone number (§4.10): confirm the full number for the footer.
10. Brand direction lock: confirm "Terminal Noir" is still the working direction.
Smart Contract Audit page (§5)
11. §5.3 Coverage list — final word(s) of item 6.

-- 127 of 146 --

12. §5.4 Failure modes (high priority) — third card title rendered as garbled text in source.
13. §5.5 Process — confirm step count; full titles and descriptions.
14. §5.6 Tools — full bullets, 5th tool logo, "What we map to" caption.
15. §5.8 Case study — confirm "Ethernity Project Audit"; full description copy.
16. §5.9 Testimonial — name, role/company, full quote.
17. §5.10 FAQ — full answer text for all 8 items.
By Chain page (§6)
18. §6.3 Coverage list — items 1, 2, 5.
19. §6.4 Failure modes — confirm format and exact copy for all three cards.
20. §6.6 Tools — second column heading, full bullets, caption.
21. §6.10 FAQ — exact question copy and full answers.
22. §6.9 Testimonial — confirm default or page-specific.
By Project Type page (§7)
23. §7.7 Case study — confirm cSigma or swap.
24. §7.8 Testimonial — verify "Anuje Jahan" / "Loki" spellings.
25. §7.9 FAQ — full answer text for items 2–7.
Brand voice decision
26. Structured vs. reflective tone (cross-cutting): confirm two-mode voice is intentional.
Protocol & Infrastructure Audit (§8)
27. §8 Hero subhead — verify exact phrasing.
28. §8 Failure mode card descriptions — full copy.
29. §8 Tools — full bullets and caption.
30. §8 Case study and testimonial — confirm defaults or page-specific.
31. §8 FAQ — exact questions and full answers.
L1/L2 Audit (§9)
32. §9 Coverage list — items 4 and 6.
33. §9 Failure mode card descriptions — full copy.
34. §9 Process step 4 — verify wording.
35. §9 Tools — full bullets and caption.
36. §9 Deliverables count — confirm 3 (vs. 4) is intentional.

-- 128 of 146 --

37. §9 Case study (Vasarchain) — full description copy.
38. §9 Testimonial — capture details.
39. §9 FAQ — verify and provide full Q&A list.
Consensus Frameworks Audit (§10)
40. §10 Hero subhead — verify "exploit" → likely "exploitable".
41. §10 Coverage list — items 3 and 5.
42. §10 Failure mode card descriptions — full copy.
43. §10 Tools — full bullets and caption.
44. §10 Case study, testimonial, FAQ — provide answers.
Tokenomics Audit (§11)
45. §11 Coverage list — items 1, 4, 5.
46. §11 Failure mode card descriptions — full copy.
47. §11 Tools — full bullets and caption.
48. §11 Case study — confirm cSigma or swap.
49. §11 FAQ — exact questions and full answers.
Wallet Security (§12)
50. §12 Coverage list — items 5 and 6.
51. §12 Failure mode card descriptions — full copy.
52. §12 Process step 3 — "Abuse testing" description.
53. §12 Tools — full bullets and caption.
54. §12 Deliverables item 3 — verify exact phrasing.
55. §12 Case study and testimonial — confirm defaults or wallet-specific.
56. §12 FAQ — exact questions and full answers.
Dapp Integration Security (§13)
57. §13 Hero subhead — verify exact phrasing.
58. §13 Coverage list — item 6.
59. §13 Failure mode card descriptions — full copy.
60. §13 Tools — full bullets and caption.
61. §13 Deliverables item 2 — verify ("Re-direction").
62. §13 Testimonial — capture details.
63. §13 FAQ — exact questions and full answers.

-- 129 of 146 --

Wallet Extension Audit (§14)
64. §14 Hero subhead — confirm "users' funds".
65. §14 Coverage list — items 5 and 6.
66. §14 Failure mode card descriptions — full copy.
67. §14 Tools — full bullets and caption.
68. §14 Deliverables item 1 — verify ("single-pulse" → likely "bypasses").
69. §14 FAQ — exact questions and full answers.
Penetration Testing (§15)
70. §15 Coverage list — item 6 wording.
71. §15 Failure mode card descriptions — full copy.
72. §15 Process step 3 — "Exploit" description.
73. §15 Tools — full bullets for "Core Tooling" and "Optional Tooling"; verify caption.
74. §15 Case study (Vasarchain) — full description copy.
75. §15 Testimonial — capture details.
76. §15 FAQ — exact questions and full answers.
Web Application Testing (§16)
77. §16 Failure modes (high priority) — third card title and description rendered as garbled
text in source.
78. §16 Process — verify steps 5 and 6.
79. §16 Tools — full bullets for "Core Tooling" and "Output format options".
80. §16 Testimonial and FAQ — exact questions and full answers.
Mobile Application Testing (§17)
81. §17 Hero subhead — verify exact phrasing.
82. §17 Coverage list — item 5 ("toll integrations").
83. §17 Failure mode card descriptions — full copy.
84. §17 Process step 4 — verify "Backend validation" description.
85. §17 Tools — full bullets for "Core Tooling" and "Platform coverage".
86. §17 Testimonial and FAQ — capture details.
Desktop Application Testing (§18)
87. §18 Hero subhead — verify exact phrasing.
88. §18 Coverage list — items 3 ("on rest" → "at rest") and 5.

-- 130 of 146 --

89. §18 Failure mode card descriptions — full copy.
90. §18 Tools — full bullets for "Core Tooling" and "Output options".
91. §18 Deliverables item 1 — verify exact phrasing.
92. §18 FAQ — exact questions and full answers.
AI Agent Audit (§19)
93. §19 Coverage list — item 4 wording (rendered as "refraction").
94. §19 Failure mode card descriptions — full copy.
95. §19 Process step 3 — "Tool boundary testing" description.
96. §19 Tools — full bullets for both columns.
97. §19 Testing focus block — confirm bullets.
98. §19 Testimonial — capture details.
99. §19 FAQ — exact questions and full answers.
Chatbot Security (§20)
100. §20 Coverage list — item 5 ("online inputs").
101. §20 Failure mode card descriptions — full copy.
102. §20 Process step 4 — "Abuse testing" description.
103. §20 Tools — full bullets and caption.
104. §20 Testing focus block — confirm bullets, especially "rebellion" → likely "reliability".
105. §20 Testimonial — capture details.
106. §20 FAQ — exact questions and full answers.
LLM Integration Audit (§21)
107. §21 Hero subhead — verify exact phrasing.
108. §21 Coverage list — items 4 and 6.
109. §21 Failure mode card descriptions — full copy.
110. §21 Tools — full bullets and caption (Core Tooling likely includes OWASP Top 10 LLM
scenarios).
111. §21 Testing focus block — confirm bullets.
112. §21 FAQ — exact questions and full answers.
Automation & Workflow Audit (§22)
113. §22 Hero subhead — verify exact phrasing.
114. §22 Coverage list — item 6 ("RM, gates").

-- 131 of 146 --

115. §22 Failure mode card descriptions — full copy.
116. §22 Tools — full bullets and caption.
117. §22 Testing focus block — verify "inconsistency" → likely "consistency".
118. §22 Testimonial — capture details.
119. §22 FAQ — exact questions and full answers.
Shift-Left Security (§23) — copy verification
From https://www.immunebytes.com/shift-left-security:
120. §23 Coverage list — items 1 ("Secure improvement"), 5, 6.
121. §23 Failure mode card descriptions — full copy for all three cards.
122. §23 Process step 5 — confirm whether "Report" is correct or whether it's actually a
different step (source appeared to duplicate step 4's text).
123. §23 Tools — full bullets for "Core standards" (note: not "Core Tooling") and "Outputs";
identity of 5th tool logo.
124. §23 Implementation focus block — confirm all three bullets and confirm whether it
replaces or sits alongside the standard "What we map to" caption.
125. §23 Deliverables item 3 — verify exact phrasing (rendered as "Customer-friendly
maintained / templated" in source).
126. §23 Testimonial — capture name/role/company/quote.
127. §23 FAQ — exact questions and full answers.
Test-Driven & Fuzz-Driven Development (§24) — copy verification
From https://www.immunebytes.com/test-driven-fuzz-driven-development:
128. §24 Coverage list — items 4, 5, 6 wording.
129. §24 Failure modes (high priority) — third card title rendered as garbled text in source
(same encoding artifact). Need actual title plus full descriptions for all three cards.
130. §24 Process steps 3 and 4 — descriptions need verification.
131. §24 Tools — full bullets for both columns; "What we map to" caption.
132. §24 Testimonial — capture details.
133. §24 FAQ — exact questions and full answers.
Pre-Audit Dynamic Testing (§25) — copy verification
From https://www.immunebytes.com/pre-audit-dynamic-testing:
134. §25 Coverage list — items 4, 5, 6 wording.
135. §25 Failure mode card descriptions — full copy for all three cards.
136. §25 Process step 3 — "Validate" description.

-- 132 of 146 --

137. §25 Tools — full bullets for both columns; "What we map to" caption.
138. §25 Testimonial — capture details.
139. §25 FAQ — exact questions and full answers.
Security Research & Engineering (§26) — copy verification
From https://www.immunebytes.com/security-research-engineering:
140. §26 Coverage list — items 1, 2, 4 wording.
141. §26 Failure mode card descriptions — full copy for all three cards.
142. §26 Process steps 3, 4, 6 — descriptions need verification (source had unclear wording).
143. §26 Tools — full bullets for both columns; "What we map to" caption.
144. §26 Deliverables item 2 — verify ("Validated prerequisite proofs" likely "Validated proof-
of-concept exploits").
145. §26 Testimonial — capture details.
Audit Leaderboard (§27) — backend integration & behavior
The page is data-driven, so several decisions are about how it behaves rather than how it looks:
147. §27.5 Search behavior: is search client-side (all 104+ rows fetched on page load and
filtered in-browser) or server-side (each keystroke or debounce hits the backend)?
Recommendation: client-side until the row count exceeds ~500, then switch. Confirm or
override.
148. §27.5 Action button destination: does the small dark arrow button on each row open (a) an
external PDF audit report, (b) an internal case study page on the site, or (c) a contextual
choice based on whether an internal case study exists? Recommendation: (c) — link to
internal case study where one exists, fallback to external report.
149. §27.5 Sort behavior: are columns sortable (clicking the column header re-sorts), or only
filterable by search? Recommendation: sortable by Date (default desc), Project, and
Platform; not sortable by Tags.
150. §27.5 Default sort order: confirm "most recent first" is the default landing sort.
151. §27.5 URL state: should pagination, search, and sort state be reflected in the URL (e.g., ?
page=3&q=ethereum&sort=date_desc ) for shareability? Recommendation: yes.
152. §27.4 Chart palette adoption: confirm the chart-specific 4-color palette (red / orange /
yellow / Immune Green) is acceptable as a permanent design-system addition. Note: green
being used for "informational" / smallest segment is conventional severity coloring, but it
inverts green's brand role (green is normally the high-emphasis brand accent).
153. §27.5 Platform badge color tints: the spec assumes Ethereum=blue, Solana=purple,
Vanarchain=dark/teal, Cronos=cyan, Polygon=violet. Confirm the full color map for all

-- 133 of 146 --

currently-supported platforms (the data shows ~5 platforms in 10 visible rows; with 40+
chains supported, there are many more).
Clientele (§28)
The page introduces several content/behavior decisions:
155. §28.2 Hero photo (high priority — branding): the source uses a generic stock photo of
business professionals. For a security firm whose copy reads as a working auditor's voice,
generic stock-photo people undermines authenticity. Recommend either (a)
commissioning a custom team photo, (b) swapping for a less people-focused image (server
room, code on screens, abstract security visualization), or (c) keeping current and accepting
the trade-off. Ask Aabhas to choose.
156. §28.4 Logo click behavior: does clicking a client logo open that client's case study (where
one exists), link to the client's external site, or do nothing? Recommendation: case study
where exists, fallback to nothing (don't link out — keeps users on the site).
157. §28.5 Video testimonial names: verify the four video-testimonial names and companies —
Dr. Gabriel Allred (Bixxter Labs), Adam Boudjemaa (Polytrade Finance), Jérémie Lepetit
(Metarwind), Ebrahiem Mohamed (Ethereum STX). Source legibility was OK but not
perfect.
158. §28.5 Cross-page testimonial reuse: Aruje Jahan reappears from §7.8, Yog Shrusti from
§4.7. Recommend storing testimonials centrally with stable IDs and referencing them from
individual pages — keeps copy consistent if a client revises their quote. Confirm.
159. §28.5 Video playback behavior: does clicking a video card open a modal player or autoplay
inline with controls? Recommendation: modal — better performance and gives the video a
proper viewing context.
About (§29)
161. §29.5 Mission/Vision green-as-dominant exception: confirm that using full Immune
Green fills on the Mission and Vision cards is the canonical exception to the "green as
accent" rule (§2). The recommended treatment in the spec is yes — these are load-bearing
brand commitments that justify dominant green. If you'd rather render them as bordered
cards with green accents (consistent with the rest of the site), flag now.
162. §29.6 Values grid layout: confirm the center-anchored heading (heading sits in the middle
cell of a 3×3 grid surrounded by 6 value cards) is preferred over a more conventional layout
(heading on top, 6 cards in a 3×2 or 2×3 grid below). The center-anchored version is more
distinctive but slightly harder to parse on first scan; the conventional version is easier to
read but more generic.
163. §29.7 Team photo treatment: confirm all four team photos remain black-and-white. This is
a strong stylistic choice — B&W against an otherwise color-rich site signals "the people, not

-- 134 of 146 --

the marketing." Recommend keeping. If you'd rather use color photos for a more
approachable feel, flag.
164. §29.7 Team list completeness: the source shows only 4 people total (1 founder + 3 sub-
team). For a firm that has "audited hundreds of protocols" with a "fastest-growing" framing,
a 4-person team displayed publicly may undersell scale. Confirm whether more team
members should appear here (and if yes, how many — a 6 or 9 person grid would still scan
cleanly).
165. §29.8 Recruitment photo: the "Join our team" section uses what appears to be a generic
stock team-group photo. Same concern as §35 #155 — recommend either custom team
photo, an abstract pattern (matching §29.2's hero pattern), or removing the background
image entirely.
166. §29.9 Trust strip redundancy: the About page ends with a "We are trusted by" logo grid —
but §28 Clientele is the dedicated client showcase. Confirm whether this section is needed
on About (rhetorically useful as a closer) or redundant (since /clients exists).
Recommendation: keep, but acknowledge it's a soft repeat.
167. §29.2 Hero pattern adoption (cross-cutting): the pattern-background hero variant
introduced here neatly resolves §35 #155 (the stock-photo concern on Clientele).
Recommend adopting the pattern variant on Clientele too, and using it as the default for all
top-level non-dashboard pages going forward. Confirm.
Engagement Models (§30) and Pricing Calculator (§31)
168. §30 Nav label vs. URL mismatch: the primary nav says "Pricing" but routes to
/engagement-models , and the actual /pricing URL is the calculator. Confirm intentional
— it's a reasonable IA decision (buyer-language label, operator-language URL) but worth
being deliberate. Alternative: rename the page to "Pricing" and put engagement models
inside it.
169. §31 Page title typo: source renders title as "Prcing Calculator" — almost certainly a typo for
"Pricing." Confirm fix.
170. §31.4 Service coverage gap: Step 1 offers 3 services (Penetration Testing, Web3 Security, AI
Security) — Security Consultancy is absent. Confirm intentional (consultancy is bespoke,
not formula-priceable) and whether the page should mention this explicitly somewhere
("Looking for consultancy? Talk to an expert →") or stay silent.
171. §31.5 Sub-service derivation: the Step 2 sub-service options should derive from the §3
sitemap based on Step 1 selection. Confirm the mapping: - Penetration Testing → Web App
Testing / Mobile App Testing / Desktop App Testing (matches §§16–18) ✓ confirmed in
source - Web3 Security → Smart Contract Audit / Protocol & Infrastructure Audit / Wallet
Security (matches §§5, 8, 12) — also confirm whether the deeper drill-downs (By Chain,
L1/L2, etc.) are exposed in the calculator or whether they roll up into their parent sub-

-- 135 of 146 --

service for pricing purposes - AI Security → AI Agent Audit / Chatbot Security / LLM
Integration Audit / Automation & Workflow Audit (matches §§19–22)
172. §31.6 Preferred Communication options: dropdown defaults to Email — confirm full
option list (Email / Slack / Telegram / Phone / Discord?).
173. §31.7 Start Over confirmation: recommend showing a small confirmation dialog before
resetting state ("Reset all entered information?"). Without it, accidental clicks lose user
input.
174. §31 Calculation logic — deferred: confirmed that the formula, validation rules, conditional
logic, and step transitions will be specified separately. This spec covers UI structure only.
When that logic is delivered, append it as a new sub-section to §31 or as a separate
companion doc.
175. §31 URL state for shareability: does the wizard support deep-linking to a specific step (e.g.,
?step=2&service=pentest )? Recommendation: yes for steps 1–3 (so users can
revisit/share their in-progress estimate), with state in URL params. Step 4's full estimate
could optionally produce a shareable estimate URL ( ?estimate=abc123 ) backed by a
saved record. Confirm whether this is in scope for v1.
Blog index (§32)
176. §32.4 "Case Study" category vs. Case Studies index: "Case Study" appears as a blog
category here, but the still-to-spec list also has a separate Case Studies index page. Confirm
whether these are (a) the same content surfaced two ways (filtered blog view + dedicated
index), (b) distinct content (short blog write-ups under "Case Study" tag vs. full structured
case study pages), or (c) one of them should be removed. Recommendation: keep them
distinct — case studies as a dedicated content type with richer structure, blog "Case Study"
tag for shorter retrospective posts.
177. §32.4 Search vs. categories only: the page uses categories with no search input. For a blog
with ~40 posts that's reasonable, but power users may want to search by keyword.
Recommendation: add a §27.5 SearchInput to the right of the category row, optional to
use. Confirm.
178. §32.5 Default banner template: WordPress posts may not always have a custom banner
image. Recommend the design system include a fallback banner auto-generated from post
metadata (dark gradient + green accents + ImmuneBytes B-mark + post title overlaid). This
keeps the grid uniform even when authors don't supply art. Confirm whether this is in
scope for v1 build, and if so, define what fields drive the auto-banner (title only, or title +
category color).
179. §32.2 Hero photo strategy (cross-cutting): the Blog index uses the §28.2 photo variant of
PageHeroWithBackground , possibly reusing the same image asset as Clientele. This
validates photo-variant reuse but also reopens §35 #167 — should Blog and Clientele both
adopt the §29.2 pattern variant for consistency, or is photo variant the deliberate choice for

-- 136 of 146 --

"human-facing" pages (Blog, Clientele) while pattern variant is for "identity-claim" pages
(About)? Recommend deciding the convention now: photo for content/people pages,
pattern for identity/brand pages. Confirm.
180. §32.5 Post sort order: posts appear sorted newest first. Confirm this is the only supported
sort, or whether category-filtered views might want different ordering (e.g., alphabetical for
reference-style content like "How to..." posts).
181. §32.5 Post-card click target: confirm the entire card is clickable, not just the "Read More"
button. Recommendation: yes — increases discoverability and reduces target size friction.
182. §32 Blog article template — separate spec needed: the Blog index links to individual
articles at /blogs/<slug> but the article template hasn't been spec'd. Captured initial
recommendations at the bottom of §32 but full spec pending.
Contact (§33)
183. §33.2 Hero photo authenticity: the office workspace image — is this the actual
ImmuneBytes office, or stock? Recommend confirming. If real, lean into the authenticity. If
stock, same concern as §35 #155 (recommend either pattern variant or a clearly-not-stock
alternative).
184. §33.4 Phone number formatting: source string 917303699708 should be normalized to
international format with a + and spaces: +91 7303699708 . The tel: link should use
+917303699708 (no spaces). Confirm.
185. §33.5 "Tell us what you need" dropdown options (high priority): source shows only the
placeholder "Select a category" — the actual options aren't visible. Recommended set based
on site IA: - Web3 Security Audit - Web2 / Penetration Testing - AI Security Audit - Security
Consultancy - Partnership / Other
186. §33.5 CTA-source tracking: recommend appending a ?from=<page> parameter to all
"Talk to an Expert" / "Send Query" CTAs across the site, so the form can record which page
the user came from as a hidden field. Useful for routing leads and measuring which pages
convert. Cheap to add. Confirm.
187. §33.5 Form submission destination: confirm where form submissions go (email to ops?
CRM intake? both?). Affects backend wiring during build but not design.
188. §33.5 Success state copy: when the form is submitted successfully, what should the user
see? Recommendation: replace the form with a small confirmation card — "Thanks — we'll
be in touch within 1 business day" + a "Send another query" link to reset the form. Confirm
timing claim ("within 1 business day") is accurate.
Confirm options. The choice here directly affects how leads are routed by ops.

-- 137 of 146 --

189. §33.6 Bottom CTA on Contact page (low priority): the conversion banner says "Let's
Evaluate Risks and Secure your Systems" with "Talk to an Expert" and "Send Query" CTAs
— but those route to this same page. Mildly redundant. Recommendation: replace on
Contact page only with newsletter signup or a "While you're waiting" pointer to Blog / Audit
Leaderboard. Acceptable to leave as-is for v1.
190. §33 Hero variant convention (cross-cutting confirmation): Contact uses photo variant.
Combined with Clientele (§28) and Blog (§32) also using photo, the convention is now:
photo variant for outward-facing pages (Clientele, Blog, Contact), pattern variant for
inward-facing identity pages (About). This supersedes my earlier recommendation in §35
#167 about retrofitting Clientele to pattern. Confirm convention or override.
Landing page (§4)
1. Stat labels (§4.4): what do 608+ , 192+ , 61+ actually represent? Best guesses are Audits
Completed / Clients Secured / Ecosystems Covered.
2. 4th service description (§4.5): copy was clipped in source. Need final copy for "Security
Consultancy."
3. Web3 Security service description (§4.5): source copy was truncated mid-sentence —
need the full text.
4. 5th client logo (§4.3): identify the obscured logo between cSigma and Plume.
5. Testimonial attribution (§4.7): verify spelling of "Yog Shrasti" and his company.
6. Stat presentation (§4.4): confirm preference for count-up animation vs. static numbers,
and confirm dropping the large green B-mark behind the stats.
7. Hero primary CTA label (§4.2): keep "Send Query" or shift to something more concrete
like "Request Audit"?
8. Social platforms (§4.10): which platforms are active? LinkedIn / X / GitHub / YouTube?
9. Phone number (§4.10): confirm the full number for the footer.
10. Brand direction lock: confirm "Terminal Noir" is still the working direction.
Smart Contract Audit page (§5) — copy verification
11. §5.3 Coverage list — final word(s) of item 6.
12. §5.4 Failure modes (high priority) — title of the third card was rendered as garbled/broken
text in source (font-loading bug?). Need actual title plus full descriptions for all three cards.
13. §5.5 Process — confirm step count; titles and descriptions for any incomplete steps.
14. §5.6 Tools — full bullet contents for both columns; identity of the 5th tool logo; "What we
map to" caption.
15. §5.8 Case study — confirm "Ethernity Project Audit"; provide full description copy.
16. §5.9 Testimonial — name, role/company, full quote.

-- 138 of 146 --

17. §5.10 FAQ — full answer text for all 8 FAQ items.
By Chain page (§6) — copy verification
18. §6.3 Coverage list — items 1, 2, and 5.
19. §6.4 Failure modes — confirm format and exact copy for all three cards.
20. §6.6 Tools — second column heading, full bullets, "What we map to" caption.
21. §6.10 FAQ — exact question copy and full answers.
22. §6.9 Testimonial — confirm default or page-specific.
By Project Type page (§7)
23. §7.7 Case study — confirm cSigma or swap.
24. §7.8 Testimonial — verify spelling of "Anuje Jahan" / "Loki".
25. §7.9 FAQ — full answer text for items 2–7.
Brand voice decision
26. Structured vs. reflective tone (cross-cutting): confirm the two-mode voice (structured for
service detail, reflective for philosophy/about-style content) is intentional and should
continue across the site.
Protocol & Infrastructure Audit (§8)
27. §8 Hero subhead — verify exact phrasing.
28. §8 Failure mode card descriptions — full copy for all three cards.
29. §8 Tools — full bullets and caption.
30. §8 Case study and testimonial — confirm defaults or page-specific.
31. §8 FAQ — exact questions and full answers.
L1/L2 Audit (§9)
32. §9 Coverage list — items 4 and 6.
33. §9 Failure mode card descriptions — full copy.
34. §9 Process step 4 — verify wording.
35. §9 Tools — full bullets and caption.
36. §9 Deliverables count — confirm 3 (vs. 4 elsewhere) is intentional.
37. §9 Case study (Vasarchain) — full description copy.
38. §9 Testimonial — capture details.
39. §9 FAQ — verify and provide full Q&A list.

-- 139 of 146 --

Consensus Frameworks Audit (§10)
40. §10 Hero subhead — verify "everything built on top is exploit" (likely "is exploitable").
41. §10 Coverage list — items 3 and 5.
42. §10 Failure mode card descriptions — full copy.
43. §10 Tools — full bullets and caption.
44. §10 Case study, testimonial, FAQ — defaults or page-specific; provide answers.
Tokenomics Audit (§11)
45. §11 Coverage list — items 1, 4, 5.
46. §11 Failure mode card descriptions — full copy.
47. §11 Tools — full bullets and caption.
48. §11 Case study — confirm cSigma or swap.
49. §11 FAQ — exact questions and full answers.
Wallet Security (§12)
50. §12 Coverage list — items 5 and 6.
51. §12 Failure mode card descriptions — full copy.
52. §12 Process step 3 — "Abuse testing" description.
53. §12 Tools — full bullets and caption.
54. §12 Deliverables item 3 — verify exact phrasing.
55. §12 Case study and testimonial — confirm defaults or wallet-specific.
56. §12 FAQ — exact questions and full answers.
Dapp Integration Security (§13)
57. §13 Hero subhead — exact phrasing has multiple potential rewrites.
58. §13 Coverage list — item 6.
59. §13 Failure mode card descriptions — full copy.
60. §13 Tools — full bullets and caption.
61. §13 Deliverables item 2 — verify ("Re-direction").
62. §13 Testimonial — capture details.
63. §13 FAQ — exact questions and full answers.
Wallet Extension Audit (§14)
64. §14 Hero subhead — confirm "users' funds" (source rendered "users' lifes").
65. §14 Coverage list — items 5 and 6.

-- 140 of 146 --

66. §14 Failure mode card descriptions — full copy.
67. §14 Tools — full bullets and caption.
68. §14 Deliverables item 1 — verify ("single-pulse" → likely "bypasses").
69. §14 FAQ — exact questions and full answers.
Penetration Testing (§15)
70. §15 Coverage list — item 6 wording.
71. §15 Failure mode card descriptions — full copy.
72. §15 Process step 3 — "Exploit" description.
73. §15 Tools — full bullets for "Core Tooling" and "Optional Tooling"; verify caption (likely
OWASP Top 10 / API Top 10).
74. §15 Case study (Vasarchain) — full description copy.
75. §15 Testimonial — capture details.
76. §15 FAQ — exact questions and full answers.
Web Application Testing (§16)
77. §16 Failure modes (high priority) — title and description of the third card rendered as
garbled/broken text in source (same encoding artifact as §5.4). Need actual title plus full
descriptions for all three cards.
78. §16 Process — verify steps 5 and 6.
79. §16 Tools — full bullets for "Core Tooling" and "Output format options".
80. §16 Testimonial and FAQ — exact questions and full answers.
Mobile Application Testing (§17)
81. §17 Hero subhead — verify exact phrasing.
82. §17 Coverage list — item 5 ("toll integrations").
83. §17 Failure mode card descriptions — full copy.
84. §17 Process step 4 — verify "Backend validation" description.
85. §17 Tools — full bullets for "Core Tooling" and "Platform coverage".
86. §17 Testimonial and FAQ — capture details.
Desktop Application Testing (§18)
87. §18 Hero subhead — verify exact phrasing.
88. §18 Coverage list — items 3 ("on rest" → "at rest") and 5.
89. §18 Failure mode card descriptions — full copy.
90. §18 Tools — full bullets for "Core Tooling" and "Output options".

-- 141 of 146 --

91. §18 Deliverables item 1 — verify exact phrasing.
92. §18 FAQ — exact questions and full answers.
AI Agent Audit (§19) — copy verification
From https://www.immunebytes.com/ai-agent-audit:
93. §19 Coverage list — item 4 wording (rendered as "refraction").
94. §19 Failure mode card descriptions — full copy for all three cards.
95. §19 Process step 3 — "Tool boundary testing" description.
96. §19 Tools — full bullets for "Core Tooling" and "Outputs"; verify caption.
97. §19 Testing focus block — confirm the three bullets exactly as rendered (Prompt injection
resistance / Output handling and exfiltration scenarios / Auditability and approval gating).
98. §19 Testimonial — capture details.
99. §19 FAQ — exact questions and full answers.
Chatbot Security (§20) — copy verification
From https://www.immunebytes.com/chatbot-security:
100. §20 Coverage list — item 5 ("online inputs").
101. §20 Failure mode card descriptions — full copy for all three cards.
102. §20 Process step 4 — "Abuse testing" description.
103. §20 Tools — full bullets and caption.
104. §20 Testing focus block — confirm all three bullets, especially "rebellion" (almost certainly
"reliability").
105. §20 Testimonial — capture details.
106. §20 FAQ — exact questions and full answers.
LLM Integration Audit (§21) — copy verification
From https://www.immunebytes.com/llm-integration-audit:
107. §21 Hero subhead — verify exact phrasing.
108. §21 Coverage list — items 4 and 6.
109. §21 Failure mode card descriptions — full copy for all three cards.
110. §21 Tools — full bullets and caption (Core Tooling likely includes OWASP Top 10 LLM
scenarios).
111. §21 Testing focus block — confirm the three bullets.
112. §21 FAQ — exact questions and full answers.

-- 142 of 146 --

Automation & Workflow Audit (§22) — copy verification
From https://www.immunebytes.com/automation-workflow-audit:
113. §22 Hero subhead — verify exact phrasing.
114. §22 Coverage list — item 6 ("RM, gates").
115. §22 Failure mode card descriptions — full copy for all three cards.
116. §22 Tools — full bullets and caption.
117. §22 Testing focus block — verify "inconsistency" → likely "consistency".
118. §22 Testimonial — capture details.
119. §22 FAQ — exact questions and full answers.
36. Pages
This document grows page-by-page as we work through the site.
Spec'd:
§4 — Landing page (Home)
§5 — Smart Contract Audit (sub-service; established the structured service-detail
template)
§6 — By Chain (drill-down under §5)
§7 — By Project Type (drill-down under §5; established the reflective / prose-forward
template variant)
§8 — Protocol & Infrastructure Audit (sub-service)
§9 — L1/L2 Audit (drill-down under §8)
§10 — Consensus Frameworks Audit (drill-down under §8)
§11 — Tokenomics Audit (drill-down under §8)
§12 — Wallet Security (sub-service)
§13 — Dapp Integration Security (drill-down under §12)
§14 — Wallet Extension Audit (drill-down under §12)
§15 — Penetration Testing (sub-service under Web2 Security)
§16 — Web Application Testing (drill-down under §15)
§17 — Mobile Application Testing (drill-down under §15)
§18 — Desktop Application Testing (drill-down under §15)
§19 — AI Agent Audit (sub-service under AI Security; introduced FocusBlock )
§20 — Chatbot Security (sub-service under AI Security)
§21 — LLM Integration Audit (sub-service under AI Security)

-- 143 of 146 --

§22 — Automation & Workflow Audit (sub-service under AI Security)
§23 — Shift-Left Security (sub-service under Security Consultancy; generalized
FocusBlock with title prop)
§24 — Test-Driven & Fuzz-Driven Development (sub-service under Security Consultancy)
§25 — Pre-Audit Dynamic Testing (sub-service under Security Consultancy)
§26 — Security Research & Engineering (sub-service under Security Consultancy)
§27 — Audit Leaderboard ( /audits ; first dashboard-style page; introduced dashboard
primitives reusable on Case Studies index and Blog index)
§28 — Clientele ( /clients ; introduced image-background hero pattern)
§29 — About ( /about ; introduced pattern-background hero variant + Mission/Vision
green-fill exception + Values grid layout + featured/compact team-card duo)
§30 — Engagement Models ( /engagement-models ; introduced plain page header pattern
(sixth hero variant))
§31 — Pricing Calculator ( /pricing ; first stateful application-shaped page; introduced
wizard pattern, form primitives, and estimate display)
§32 — Blog index ( /blogs ; introduced category filter tabs + classic numeric pagination;
reused §28.2 photo hero variant; WordPress-backed)
§33 — Contact Us ( /contact ; central conversion destination; reused §28.2 photo hero
with workspace photo + simple contact form using §31 primitives)
All four pillars complete at sub-service level. Seven top-level pages spec'd (Audit, Clientele,
About, Engagement Models, Pricing Calculator, Blog index, Contact).
Pillar coverage summary:
Pillar 	Shape 	Sub-services spec'd 	Pillar overview
page
Web3 Security 	Tiered (parent → drill-
downs)
§§5–14 (3 parents, 7 drill-
downs)
Pending
Web2 Security 	Tiered (parent → drill-
downs)
§§15–18 (1 parent, 3 drill-
downs)
Pending
AI Security 	Flat (4 siblings) 	§§19–22 	Pending
Security
Consultancy
Flat (4 siblings) 	§§23–26 	Pending
Hero pattern coverage summary (six patterns, with refined convention):

-- 144 of 146 --

Pattern 	Used on 	Convention
Split + terminal mockup (§4.2) Home 	Home only
Centered title + matrix-rain
(§5.2)
All service detail pages
(§§5–26)
Service detail and pillar overview pages
Stats-card hero (§27.3) 	Audit Leaderboard 	Dashboard pages
Image-background hero —
photo variant (§§28.2, 32.2, 33.2)
Clientele, Blog, Contact Outward-facing pages — where
people/workspace imagery grounds the
page
Image-background hero —
pattern variant (§29.2)
About 	Inward-facing identity pages — where
abstract brand imagery fits
Plain page header (§30.3) 	Engagement Models,
Pricing Calculator
Utility/functional pages — calculators,
settings, simple content
Page archetypes covered:
The doc now contains examples of nearly every page archetype the site needs:
Marketing / hero page (§4 Home)
Service detail with structured template (§5 SCA)
Service detail with prose template (§7 By Project Type)
Drill-down detail (§§6, 9–11, 13–14, 16–18)
Pillar-flat sub-service (§§19–22, 23–26)
Dashboard / data table (§27)
Showcase / social proof (§28)
Company-showcase structured (§29)
Utility content (§30)
Multi-step application / wizard (§31)
Content discovery / blog index (§32)
Conversion destination / contact form (§33)
The remaining still-to-spec pages should each fit one of these archetypes — they should be quick
to spec.
Still to spec — design Claude does NOT need to design these:
The following pages exist on the site but have not yet been individually spec'd in this doc. Do not
invent designs for them. They will be spec'd in a follow-up pass and handed to a separate design
conversation. For now, they exist only to round out the sitemap and the mega menu link targets.

-- 145 of 146 --

Solutions index page (when spec'd, archetype: §30 plain page header + pillar card grid)
Web3 Security pillar overview page (when spec'd, archetype: §5 service detail)
Web2 Security pillar overview page (when spec'd, archetype: §5 service detail)
AI Security pillar overview page (when spec'd, archetype: §5 service detail)
Security Consultancy pillar overview page (when spec'd, archetype: §5 service detail)
Case Studies index (when spec'd, archetype: §27/§32 hybrid)
Individual Case Study template (when spec'd, archetype: §29 company-showcase structure)
Blog article template (when spec'd, archetype: §30 plain page header + long-form prose)
The mega menu and footer should still link to all expected URLs even though those pages aren't
fully spec'd — they'll get filled in later.

-- 146 of 146 --


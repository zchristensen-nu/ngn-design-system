# Northeastern Global News — Design System

**Northeastern Global News (NGN)** is the newsroom of Northeastern University — the
university's editorial home for research, discovery, health, global, business, campus,
sports and opinion coverage. It reports "unparalleled expertise for transformational
impact" across Northeastern's global network of campuses (Boston, London, Oakland,
Toronto, Vancouver and beyond).

This design system captures NGN's identity — the northeast-arrow logo family,
Northeastern's core color and typography, and an editorial component set — so agents
can build on-brand newsroom pages, story cards, newsletters, slides and prototypes.

## Sources used
- **Uploaded logos** — the NGN logo family (badge, monogram, formal wordmark; horizontal
  & stacked; light & dark). Now in `assets/`.
- **Northeastern Brand Center** — https://brand.northeastern.edu/ (color, typography,
  voice & tone, messaging). The authoritative brand guide; explore it for the full
  governance rules, photography and logo-usage detail.
- **GitHub: `News-at-Northeastern/environment`** — *was referenced but could not be
  accessed* (returns 404 on both `main` and `master`; likely private/renamed/moved).
  Re-share it via the Import menu and this system can be enriched with the real product
  code. Accessible sibling repos in the org: `reporter`, `recipes-march`, `tik-tok`.

> **Brand governance:** Northeastern enforces a strict Brand Review policy. Real,
> published NGN/Northeastern collateral should be submitted to University Marketing.
> This system is a faithful working interpretation for design tooling.

---

## The mark
NGN's signature element is the **red northeast-pointing arrow (↗)** — a nod to
*North*eastern and to forward momentum. It replaces a letter's counter in the monogram
and trails the formal wordmark. Keep it **Northeastern Red**, keep it at **45°**.

Logo variants in `assets/` (each in `-on-light` and `-on-dark`):
- `logo-badge-*` — circular NGN badge (the app-icon mark)
- `logo-monogram-horizontal-*` / `logo-monogram-stacked-*` — "NGN ↗" monogram
- `wordmark-horizontal-*` / `wordmark-stacked-*` — "Northeastern Global News ↗"

Use the **wordmark** for mastheads/headers, the **monogram or badge** for compact spaces
and avatars. Never recolor the arrow anything but red; never rotate it.

---

## CONTENT FUNDAMENTALS
Northeastern follows the **AP Stylebook** with house exceptions. NGN copy is *journalistic*
— reported, precise, and human — not marketing-speak.

- **Voice:** Trusted (matter-of-fact, never arrogant), Empowering, Connected, and
  forward-looking. Ambitious, daring, distinctive, strategic, visionary, open.
- **Person:** Third person for reporting ("Northeastern researchers found…"); the reader
  is addressed as "you" in service copy (newsletters, CTAs). "We" for the institution's
  own voice.
- **Casing:** Sentence case for headlines and decks (not Title Case). UPPERCASE only for
  kickers/eyebrows and tags (set in Lato). The wordmark keeps its own lockup.
- **Be specific & succinct.** Prefer "Only Northeastern can say this" over generic claims.
  Back statements with proof points. Avoid clichés, jargon, business-speak and passive
  voice. Choose the simpler word ("start," not "commence").
- **Terminology:** lead with the relatable word **"experience"** over "experiential" in
  headlines/display; avoid "hands-on," "practice," "earn to learn" (vocational
  connotation). "Co-op," "global network," "use-inspired research" are core but no longer
  exclusive — provide context.
- **Emoji:** not used in editorial. The ↗ arrow glyph is the one house "emoji," used in
  links/CTAs ("Read more ↗", "northeastern.edu ↗").
- **Headline example:** *"Northeastern scientists map an uncharted stretch of the deep-sea
  floor."* **Dek example:** *"A monthslong expedition returns with troves of data that
  could reshape how we understand ocean carbon."*

---

## VISUAL FOUNDATIONS
- **Colors:** Core is **Black `#000000`**, **White `#FFFFFF`**, **Red 186U `#C8102E`**,
  **Gold 871 `#A4804A`**. Used in strict hierarchy — black/white are the base palette
  (~70% combined); **red is an accent capped at <25%** of any design; **gold is reserved
  for prestige (~5%)**. A warm-balanced neutral ramp (`--neutral-0…900`, paper `#f7f7f5`)
  carries UI. No purple/blue gradients, ever.
- **Type:** The system uses **only two typefaces**. **Kepler Std** (Adobe, Robert
  Slimbach) is the editorial **display serif** — the brand cut is *Kepler Std Light
  Subhead*, so display headlines and hero text are set **light (weight 300)**; it also
  carries **pull quotes** (`--font-serif`, same family). **Lato** is the body/UI face
  (article text, buttons, tags, kickers, nav, meta — the brand's own alternate, exact).
  Headlines: Kepler light, tight-to-normal tracking, line-height ~1.04–1.2, **sentence
  case**. Body: Lato 400/700, line-height 1.6–1.75, ~680px reading measure. Do not
  introduce any third font.
- **Backgrounds:** Predominantly white / newsprint paper `#f7f7f5`; **black** for footers,
  newsletter panels and impact moments. **No gradients, no textures.** Photography is the
  hero surface — full-bleed, edge-to-edge on features.
- **Imagery:** Documentary, warm-neutral, real people and places on campus / in the field.
  Not overly stylized; no heavy filters. (Placeholders here use Lorem Picsum — swap for
  licensed Northeastern photography.)
- **Rules & dividers:** Editorial **hairline rules are black**; section headers sit under a
  **3px solid black top rule**. Kickers use a short 3px red rule.
- **Cards:** Minimal — usually **no border and no shadow**; the image + type carry the
  card. Optional soft, *neutral* shadow (`--shadow-sm/md/lg`) when floating on paper.
  Corners are **tight** (`--radius-sm` 4px; `--radius-lg` 10px max). The only fully-round
  shape is the badge/avatars (`--radius-circle`).
- **Borders:** `--border-subtle` (neutral-200) for card/edge separators; `--border-strong`
  (black) for emphasis and inputs.
- **Hover:** links gain a red underline; card headlines gain a red underline and the image
  scales ~1.04; primary buttons darken to `--red-600`. **Press:** `--red-700`.
- **Focus:** red focus ring / halo (`--shadow-focus`, `--focus-ring`).
- **Motion:** quick and functional — fades and short slides, `--dur-fast/base/slow`
  (120/200/320ms), standard/`ease-out` easing. **No bounces**, no decorative loops.
- **Transparency/blur:** used sparingly — a sticky white header with a hairline, image
  overlay tags. Not a glassmorphism brand.
- **Layout:** `--container-max` 1240px, 24px gutters; sticky header; asymmetric editorial
  grids (lead + rail, 3-up story grids).

---

## ICONOGRAPHY
NGN is **type- and photo-led**, not icon-heavy. There is **no proprietary icon font** in
the provided sources.
- The **red northeast arrow ↗** is the one house glyph — used inline in links/CTAs and as
  the logo motif. Real arrow assets are in `assets/`: solid glyphs (`arrow-black/red/white.png`,
  transparent) and staggered **pattern tiles** (`arrow-tile-black/red/white.png`) used as a
  **faint background watermark** (see the ArrowPattern component and `guidelines/brand-pattern.html`).
  Always red at 45°; the watermark stays very faint (opacity ~0.05–0.1).
- For functional UI icons (search, menu, share, social) use a **thin, square-cut line
  style** (~2px stroke, miter joins) to echo the grotesque — see the inline SVGs in
  `ui_kits/newsroom/SiteHeader.jsx`. If a fuller set is needed, substitute
  **[Lucide](https://lucide.dev)** (2px stroke) as the closest match and note the
  substitution. **No emoji** in editorial UI; no multicolor/filled icon sets.

---

## Components
Reusable primitives (React, styled via CSS custom properties). Import from
`_ds_bundle.js` as `window.NortheasternGlobalNewsDesignSystem_712acf`.

**Core** (`components/core/`)
- **Button** — brand action; `primary` (red), `secondary`, `inverse`, `ghost`, `link`; `arrow` prop appends ↗.
- **Tag** — uppercase category/topic label; `red`/`solid`/`tint`/`outline`/`gold`.
- **Kicker** — red uppercase eyebrow (Lato) above headlines. No rule/line.

**Brand** (`components/brand/`)
- **ArrowPattern** — the faint staggered northeast-arrow watermark texture, as a background layer (`black`/`white`/`red`, adjustable opacity + tile size).
- **QuoteCard** — the NGN social pull-quote treatment: display-serif quote over the arrow watermark with a bold-name attribution and the NGN mark; `dark` story or `cream` square post.

**Editorial** (`components/editorial/`)
- **Byline** — author + date + read-time meta line.
- **ArticleCard** — workhorse story card (image, tag, headline, dek, byline); `stacked` or `horizontal`.
- **Pullquote** — large in-article quotation with red rule + attribution.
- **NewsletterForm** — subscribe panel (`dark`/`light`); composes Button + Kicker.

## UI kits
- **`ui_kits/newsroom/`** — interactive recreation of the NGN website: **HomePage**
  (hero + latest rail + top-stories grid + newsletter), **ArticlePage** (headline, byline,
  lead image, drop-cap body, pullquote, related), **SiteHeader**, **SiteFooter**. Open
  `index.html` and click through home ↔ article.
- **`ui_kits/social/`** — NGN social templates: Instagram **story** (9:16, dark & cream)
  and **carousel** (1:1 lead / quote / CTA) built from QuoteCard + the arrow watermark.

## Foundation cards (Design System tab)
`guidelines/` holds specimen cards: brand core / red ramp / neutrals / semantic colors;
display / body / kicker / type-scale; spacing / radius+elevation; logo lockups, the
northeast arrow, and stacked lockups.

---

## Index / manifest (root)
- `styles.css` — the single entry stylesheet consumers link (`@import`s only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`,
  `elevation.css`, `motion.css`.
- `assets/` — the 10 NGN logo files (badge/monogram/wordmark × light/dark × orientations).
- `components/` — `core/` and `editorial/` primitives (+ `.d.ts`, `.prompt.md`, card HTML).
- `ui_kits/newsroom/` — the newsroom recreation.
- `guidelines/` — foundation specimen cards.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills-compatible entry point.

## Caveats & substitutions
- **Font substitution:** **Kepler Std** is a licensed Adobe font, loaded here via the
  **cdnfonts** CDN (matching the supplied `kepler-std-3` font folder) — all 158 cuts are
  registered under the single family `"Kepler Std"`, so the *Light Subhead* look is achieved
  with `font-weight: 300` (there is no separate optical-size family name). **Lato** loads
  from Google Fonts. For production, self-host the licensed Kepler Std webfont files (the
  supplied fonts). *Note:* I could not read the attached `kepler-std-3` font folder directly
  through my file tools — re-attach it via the Import menu if you'd like the actual files
  self-hosted in `assets/` instead of the CDN.
- The `News-at-Northeastern/environment` repo was inaccessible (404) — the newsroom UI kit
  is modeled on the public NGN site + the brand guide, not that repo's code. Re-share it to
  align the kit with the real implementation.
- Explore the **Brand Center** (https://brand.northeastern.edu/) for authoritative logo,
  photography and governance detail beyond what's encoded here.

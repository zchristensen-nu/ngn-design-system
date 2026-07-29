# Newsroom UI kit — Northeastern Global News

An interactive recreation of the NGN newsroom website, composed entirely from the
design system's own components.

## Screens
- **HomePage** — hero lead + latest rail, a "Top stories" grid, and the newsletter unit.
- **ArticlePage** — full story view: kicker/tag, headline, dek, byline + share, lead image,
  drop-cap body, pullquote, and related coverage.
- **SiteHeader** — utility bar, wordmark masthead, search, subscribe, and category nav.
- **SiteFooter** — dark footer with the stacked wordmark and link columns.

`index.html` wires them together with a tiny in-memory router (home ↔ article). Click the
lead, any card, or a related story to open an article; click the logo or a category to return.

## Components used
ArticleCard, Byline, Tag, Kicker, Pullquote, NewsletterForm, Button — all from
`_ds_bundle.js` via `window.NortheasternGlobalNewsDesignSystem_712acf`.

## Notes
Photography uses Lorem Picsum placeholders (`picsum.photos`) purely as stand-ins — swap for
licensed Northeastern imagery in production. Body copy is representative sample text.

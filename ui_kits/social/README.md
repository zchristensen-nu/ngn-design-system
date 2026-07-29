# Social UI kit — Northeastern Global News

Ready-to-adapt social templates built from the **QuoteCard** component and the
**arrow watermark** motif, matching NGN's published Instagram story + carousel style.

## Templates
- **Instagram story (9:16)** — dark (black) and cream variants; large display-serif
  quote over the faint arrow pattern, NGN monogram, bold-name attribution.
- **Carousel (1:1)** — square lead / quote / CTA slides for feed posts.

Open `index.html` to preview. Everything composes `QuoteCard` (which composes
`ArrowPattern`) from `_ds_bundle.js`. Photography-based social posts can reuse
`ArticleCard`/imagery from the newsroom kit.

## Notes
Quote text is representative. Set `assetBase` so the component can reach `/assets`.

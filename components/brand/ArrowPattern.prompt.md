# ArrowPattern
The staggered northeast-arrow watermark. The tiles are **pre-tinted to sit tone-on-tone** — pick the tile whose color matches the surface (black on black, white on white, red on red) and it reads as a subtle watermark at full opacity. Place inside a `position:relative` parent as a background layer; put content in a sibling with a higher z-index.

```jsx
<div style={{ position:"relative", background:"#000" }}>
  <ArrowPattern tone="black" assetBase="../../assets" />
  <div style={{ position:"relative" }}>…content…</div>
</div>
```
Match `tone` to the background color. Leave `opacity` at 1 (the tile color carries the subtlety); only lower it for off-tone surfaces (e.g. black tile on cream). `assetBase` must point at /assets from your page.

import React from "react";

/**
 * ArrowPattern — the staggered northeast-arrow watermark texture. The tiles are
 * PRE-TINTED to sit tone-on-tone: use the tile whose color matches the surface
 * (black on black, white on white, red on red) and it reads as a subtle watermark
 * at full opacity. Render it as an absolutely-positioned layer behind content.
 *
 * assetBase: path to the /assets folder relative to the page (default "assets").
 */
export function ArrowPattern({
  tone = "black",
  opacity = 1,
  size = 300,
  assetBase = "assets",
  cover = true,
  style,
  ...rest
}) {
  const tile = { black: "arrow-tile-black.png", red: "arrow-tile-red.png", white: "arrow-tile-white.png" }[tone] || "arrow-tile-black.png";
  const layer = {
    position: cover ? "absolute" : "relative",
    inset: cover ? 0 : undefined,
    backgroundImage: `url(${assetBase}/${tile})`,
    backgroundRepeat: "repeat",
    backgroundSize: `${size}px auto`,
    opacity,
    pointerEvents: "none",
    ...style,
  };
  return <div aria-hidden="true" style={layer} {...rest} />;
}

export default ArrowPattern;

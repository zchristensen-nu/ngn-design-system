import React from "react";
import { ArrowPattern } from "./ArrowPattern.jsx";

/**
 * QuoteCard — the NGN social quote treatment: a large display-serif pull quote
 * over the arrow-pattern watermark, with a bold-name attribution and the NGN mark.
 * `tone="dark"` is the black Instagram-story look; `tone="cream"` is the warm
 * square-post look.
 */
export function QuoteCard({
  quote,
  name,
  role,
  tone = "dark",
  format = "story",     // "story" (9:16) | "square" (1:1)
  showMark = true,
  assetBase = "assets",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const bg = dark ? "var(--ngn-black)" : "var(--surface-cream)";
  const fg = dark ? "#ffffff" : "var(--text-primary)";
  const sub = dark ? "var(--neutral-300)" : "var(--text-secondary)";
  const mark = dark ? `${assetBase}/logo-monogram-stacked-on-dark.svg` : `${assetBase}/logo-monogram-stacked-on-light.svg`;
  const aspect = format === "square" ? "1 / 1" : "9 / 16";

  return (
    <div style={{
      position: "relative", aspectRatio: aspect, overflow: "hidden",
      background: bg, color: fg, display: "flex", flexDirection: "column",
      justifyContent: "flex-end",
      padding: format === "square" ? "clamp(20px,5%,44px)" : "clamp(24px,6%,52px)",
      boxSizing: "border-box", ...style,
    }} {...rest}>
      <ArrowPattern
        tone={dark ? "black" : "black"}
        opacity={dark ? 1 : 0.05}
        size={format === "square" ? 160 : 190}
        assetBase={assetBase}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {showMark && (
          <img src={mark} alt="NGN" style={{ height: format === "square" ? "40px" : "52px", marginBottom: "18px", display: "block" }} />
        )}
        <blockquote style={{
          margin: 0, fontFamily: "var(--font-serif)", fontWeight: 400,
          fontSize: format === "square" ? "clamp(18px,4.2%,30px)" : "clamp(24px,7%,40px)",
          lineHeight: 1.18, letterSpacing: "-0.005em", color: fg,
          textWrap: "balance",
        }}>&ldquo;{quote}&rdquo;</blockquote>
        {(name || role) && (
          <p style={{
            margin: format === "square" ? "16px 0 0" : "22px 0 0",
            fontFamily: "var(--font-body)", fontSize: format === "square" ? "13px" : "16px",
            lineHeight: 1.4, color: sub,
          }}>
            {name && <span style={{ color: fg, fontWeight: 700 }}>{name}</span>}
            {name && role && ", "}
            {role}
          </p>
        )}
      </div>
    </div>
  );
}

export default QuoteCard;

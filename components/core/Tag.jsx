import React from "react";

/**
 * Category / topic tag — the small uppercase label that classifies a story.
 */
export function Tag({ children, tone = "red", size = "md", href, style, ...rest }) {
  const sizes = {
    sm: { fontSize: "10px", padding: "3px 7px", letterSpacing: "0.1em" },
    md: { fontSize: "11px", padding: "4px 9px", letterSpacing: "0.12em" },
  };
  const tones = {
    red:    { background: "var(--ngn-red)", color: "#fff" },
    solid:  { background: "var(--ngn-black)", color: "#fff" },
    tint:   { background: "var(--accent-tint)", color: "var(--accent-press)" },
    outline:{ background: "transparent", color: "var(--ngn-black)", boxShadow: "inset 0 0 0 1.5px var(--ngn-black)" },
    gold:   { background: "var(--prestige-tint)", color: "var(--gold-600)" },
  };
  const s = {
    display: "inline-block",
    fontFamily: "var(--font-body)",
    fontWeight: 900,
    textTransform: "uppercase",
    borderRadius: "var(--radius-xs)",
    lineHeight: 1.4,
    textDecoration: "none",
    ...sizes[size],
    ...tones[tone],
    ...style,
  };
  const Comp = href ? "a" : "span";
  return <Comp href={href} style={s} {...rest}>{children}</Comp>;
}

export default Tag;

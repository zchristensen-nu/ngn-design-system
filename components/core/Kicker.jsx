import React from "react";

/**
 * Kicker / eyebrow — the small uppercase red label that sits above a headline.
 */
export function Kicker({ children, tone = "red", style, ...rest }) {
  const color = tone === "muted" ? "var(--text-muted)" : "var(--ngn-red)";
  return (
    <span style={{
      display: "inline-block",
      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "13px",
      textTransform: "uppercase", letterSpacing: "var(--tracking-kicker)",
      color, ...style,
    }} {...rest}>
      {children}
    </span>
  );
}

export default Kicker;

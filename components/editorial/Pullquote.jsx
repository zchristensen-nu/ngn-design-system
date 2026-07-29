import React from "react";

/**
 * Pullquote — a large editorial quotation with a red northeast-arrow accent
 * and an attribution line.
 */
export function Pullquote({ children, cite, role, align = "left", style, ...rest }) {
  return (
    <figure style={{
      margin: 0, padding: "4px 0 4px 24px", borderLeft: "4px solid var(--ngn-red)",
      textAlign: align, ...style,
    }} {...rest}>
      <blockquote style={{
        margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "26px", lineHeight: 1.25, letterSpacing: "-0.01em",
        color: "var(--text-primary)",
      }}>{children}</blockquote>
      {(cite || role) && (
        <figcaption style={{
          marginTop: "14px", fontFamily: "var(--font-body)", fontSize: "14px",
          color: "var(--text-muted)",
        }}>
          {cite && <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>{cite}</span>}
          {cite && role && ", "}
          {role}
        </figcaption>
      )}
    </figure>
  );
}

export default Pullquote;

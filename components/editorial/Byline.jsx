import React from "react";

/**
 * Byline — author, date and read-time meta line under a headline.
 */
export function Byline({ author, date, readTime, size = "md", style, ...rest }) {
  const fs = size === "sm" ? "12px" : "13px";
  const parts = [];
  if (date) parts.push(date);
  if (readTime) parts.push(readTime);
  return (
    <div style={{
      fontFamily: "var(--font-body)", fontSize: fs, color: "var(--text-muted)",
      display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", ...style,
    }} {...rest}>
      {author && (
        <span>By <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>{author}</span></span>
      )}
      {author && parts.length > 0 && <span aria-hidden="true">·</span>}
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          <span>{p}</span>
          {i < parts.length - 1 && <span aria-hidden="true">·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Byline;

import React from "react";
import { Tag } from "../core/Tag.jsx";
import { Byline } from "./Byline.jsx";

/**
 * ArticleCard — the workhorse story card: image, category tag, headline, dek,
 * byline. Layouts: "stacked" (image on top) or "horizontal" (image left).
 */
export function ArticleCard({
  image,
  category,
  categoryTone = "red",
  title,
  dek,
  author,
  date,
  readTime,
  href = "#",
  layout = "stacked",
  size = "md",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const horizontal = layout === "horizontal";
  const titleSize = size === "lg" ? "28px" : size === "sm" ? "18px" : "21px";

  const imgBox = {
    position: "relative",
    background: "var(--neutral-200)",
    overflow: "hidden",
    flex: "none",
    aspectRatio: horizontal ? "1 / 1" : "16 / 10",
    width: horizontal ? "40%" : "100%",
    borderRadius: "var(--radius-sm)",
  };
  const img = {
    width: "100%", height: "100%", objectFit: "cover", display: "block",
    transform: hover ? "scale(1.04)" : "scale(1)",
    transition: "transform var(--dur-slow) var(--ease-out)",
  };

  return (
    <a href={href} style={{
      display: "flex", flexDirection: horizontal ? "row" : "column", gap: "16px",
      textDecoration: "none", color: "inherit", alignItems: horizontal ? "flex-start" : "stretch",
      ...style,
    }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      <div style={imgBox}>
        {image
          ? <img src={image} alt="" style={img} />
          : <div style={{ ...img, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--neutral-400)", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "13px" }}>NGN</div>}
        {category && (
          <span style={{ position: "absolute", left: "10px", top: "10px" }}>
            <Tag tone={categoryTone} size="sm">{category}</Tag>
          </span>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{
          margin: "0 0 8px", fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: titleSize, lineHeight: 1.18, letterSpacing: "0",
          color: "var(--text-primary)",
          textDecoration: hover ? "underline" : "none", textDecorationColor: "var(--ngn-red)",
          textUnderlineOffset: "3px", textDecorationThickness: "2px",
        }}>{title}</h3>
        {dek && <p style={{ margin: "0 0 10px", fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.55, color: "var(--text-secondary)" }}>{dek}</p>}
        {(author || date || readTime) && <Byline author={author} date={date} readTime={readTime} size="sm" />}
      </div>
    </a>
  );
}

export default ArticleCard;

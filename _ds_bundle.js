/* @ds-bundle: {"format":4,"namespace":"NortheasternGlobalNewsDesignSystem_712acf","components":[{"name":"ArrowPattern","sourcePath":"components/brand/ArrowPattern.jsx"},{"name":"QuoteCard","sourcePath":"components/brand/QuoteCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ArticleCard","sourcePath":"components/editorial/ArticleCard.jsx"},{"name":"Byline","sourcePath":"components/editorial/Byline.jsx"},{"name":"NewsletterForm","sourcePath":"components/editorial/NewsletterForm.jsx"},{"name":"Pullquote","sourcePath":"components/editorial/Pullquote.jsx"}],"sourceHashes":{"components/brand/ArrowPattern.jsx":"25c2fc69b1dc","components/brand/QuoteCard.jsx":"368f9004a485","components/core/Button.jsx":"8b031194eabd","components/core/Kicker.jsx":"3b8a0f8fc009","components/core/Tag.jsx":"91d019e4ef40","components/editorial/ArticleCard.jsx":"315050df49e5","components/editorial/Byline.jsx":"05d738f71700","components/editorial/NewsletterForm.jsx":"484889151942","components/editorial/Pullquote.jsx":"3c91360ccefb","ui_kits/newsroom/App.jsx":"c4f4a6a28a62","ui_kits/newsroom/ArticlePage.jsx":"ea0340720891","ui_kits/newsroom/HomePage.jsx":"bcf67544a9b8","ui_kits/newsroom/SiteFooter.jsx":"a63901744870","ui_kits/newsroom/SiteHeader.jsx":"613295f9594d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NortheasternGlobalNewsDesignSystem_712acf = window.NortheasternGlobalNewsDesignSystem_712acf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ArrowPattern.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ArrowPattern — the staggered northeast-arrow watermark texture. The tiles are
 * PRE-TINTED to sit tone-on-tone: use the tile whose color matches the surface
 * (black on black, white on white, red on red) and it reads as a subtle watermark
 * at full opacity. Render it as an absolutely-positioned layer behind content.
 *
 * assetBase: path to the /assets folder relative to the page (default "assets").
 */
function ArrowPattern({
  tone = "black",
  opacity = 1,
  size = 300,
  assetBase = "assets",
  cover = true,
  style,
  ...rest
}) {
  const tile = {
    black: "arrow-tile-black.png",
    red: "arrow-tile-red.png",
    white: "arrow-tile-white.png"
  }[tone] || "arrow-tile-black.png";
  const layer = {
    position: cover ? "absolute" : "relative",
    inset: cover ? 0 : undefined,
    backgroundImage: `url(${assetBase}/${tile})`,
    backgroundRepeat: "repeat",
    backgroundSize: `${size}px auto`,
    opacity,
    pointerEvents: "none",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: layer
  }, rest));
}
Object.assign(__ds_scope, { ArrowPattern, __ds_default_components_brand_ArrowPattern_14wrf3t: ArrowPattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArrowPattern.jsx", error: String((e && e.message) || e) }); }

// components/brand/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * QuoteCard — the NGN social quote treatment: a large display-serif pull quote
 * over the arrow-pattern watermark, with a bold-name attribution and the NGN mark.
 * `tone="dark"` is the black Instagram-story look; `tone="cream"` is the warm
 * square-post look.
 */
function QuoteCard({
  quote,
  name,
  role,
  tone = "dark",
  format = "story",
  // "story" (9:16) | "square" (1:1)
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
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      aspectRatio: aspect,
      overflow: "hidden",
      background: bg,
      color: fg,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: format === "square" ? "clamp(20px,5%,44px)" : "clamp(24px,6%,52px)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ArrowPattern, {
    tone: dark ? "black" : "black",
    opacity: dark ? 1 : 0.05,
    size: format === "square" ? 160 : 190,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, showMark && /*#__PURE__*/React.createElement("img", {
    src: mark,
    alt: "NGN",
    style: {
      height: format === "square" ? "40px" : "52px",
      marginBottom: "18px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: format === "square" ? "clamp(18px,4.2%,30px)" : "clamp(24px,7%,40px)",
      lineHeight: 1.18,
      letterSpacing: "-0.005em",
      color: fg,
      textWrap: "balance"
    }
  }, "\u201C", quote, "\u201D"), (name || role) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: format === "square" ? "16px 0 0" : "22px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: format === "square" ? "13px" : "16px",
      lineHeight: 1.4,
      color: sub
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      color: fg,
      fontWeight: 700
    }
  }, name), name && role && ", ", role)));
}
Object.assign(__ds_scope, { QuoteCard, __ds_default_components_brand_QuoteCard_bc7mm0: QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: "13px",
    padding: "7px 14px",
    gap: "6px"
  },
  md: {
    fontSize: "15px",
    padding: "11px 20px",
    gap: "8px"
  },
  lg: {
    fontSize: "17px",
    padding: "15px 28px",
    gap: "10px"
  }
};
function ArrowNE({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 18L18 6M9 6h9v9",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "square",
    strokeLinejoin: "miter"
  }));
}

/**
 * NGN Button — the brand action. Primary is Northeastern red; the northeast
 * arrow is the house affordance for "go / read more".
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  href,
  disabled = false,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sz.gap,
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: sz.fontSize,
    lineHeight: 1,
    letterSpacing: "0.01em",
    padding: sz.padding,
    borderRadius: "var(--radius-sm)",
    border: "2px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  };
  const variants = {
    primary: {
      background: "var(--ngn-red)",
      color: "#fff",
      borderColor: "var(--ngn-red)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ngn-black)",
      borderColor: "var(--ngn-black)"
    },
    inverse: {
      background: "#fff",
      color: "var(--ngn-black)",
      borderColor: "#fff"
    },
    ghost: {
      background: "transparent",
      color: "var(--ngn-black)",
      borderColor: "transparent"
    },
    link: {
      background: "transparent",
      color: "var(--accent-text)",
      borderColor: "transparent",
      padding: 0,
      borderRadius: 0
    }
  };
  const [hover, setHover] = React.useState(false);
  const hovers = {
    primary: {
      background: "var(--red-600)",
      borderColor: "var(--red-600)"
    },
    secondary: {
      background: "var(--ngn-black)",
      color: "#fff"
    },
    inverse: {
      background: "var(--neutral-100)"
    },
    ghost: {
      background: "var(--surface-sunken)"
    },
    link: {
      color: "var(--accent-press)"
    }
  };
  const composed = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement(ArrowNE, {
    size: size === "lg" ? 17 : size === "sm" ? 13 : 15
  }));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: composed
    }, handlers, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: composed
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button, __ds_default_components_core_Button_51d4zy: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kicker / eyebrow — the small uppercase red label that sits above a headline.
 */
function Kicker({
  children,
  tone = "red",
  style,
  ...rest
}) {
  const color = tone === "muted" ? "var(--text-muted)" : "var(--ngn-red)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-kicker)",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker, __ds_default_components_core_Kicker_am82ln: Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category / topic tag — the small uppercase label that classifies a story.
 */
function Tag({
  children,
  tone = "red",
  size = "md",
  href,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "10px",
      padding: "3px 7px",
      letterSpacing: "0.1em"
    },
    md: {
      fontSize: "11px",
      padding: "4px 9px",
      letterSpacing: "0.12em"
    }
  };
  const tones = {
    red: {
      background: "var(--ngn-red)",
      color: "#fff"
    },
    solid: {
      background: "var(--ngn-black)",
      color: "#fff"
    },
    tint: {
      background: "var(--accent-tint)",
      color: "var(--accent-press)"
    },
    outline: {
      background: "transparent",
      color: "var(--ngn-black)",
      boxShadow: "inset 0 0 0 1.5px var(--ngn-black)"
    },
    gold: {
      background: "var(--prestige-tint)",
      color: "var(--gold-600)"
    }
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
    ...style
  };
  const Comp = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Tag, __ds_default_components_core_Tag_1gfzecu: Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Byline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Byline — author, date and read-time meta line under a headline.
 */
function Byline({
  author,
  date,
  readTime,
  size = "md",
  style,
  ...rest
}) {
  const fs = size === "sm" ? "12px" : "13px";
  const parts = [];
  if (date) parts.push(date);
  if (readTime) parts.push(readTime);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-body)",
      fontSize: fs,
      color: "var(--text-muted)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "6px",
      ...style
    }
  }, rest), author && /*#__PURE__*/React.createElement("span", null, "By ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 700
    }
  }, author)), author && parts.length > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), parts.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, p), i < parts.length - 1 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"))));
}
Object.assign(__ds_scope, { Byline, __ds_default_components_editorial_Byline_1arht49: Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Byline.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ArticleCard — the workhorse story card: image, category tag, headline, dek,
 * byline. Layouts: "stacked" (image on top) or "horizontal" (image left).
 */
function ArticleCard({
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
    borderRadius: "var(--radius-sm)"
  };
  const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transform: hover ? "scale(1.04)" : "scale(1)",
    transition: "transform var(--dur-slow) var(--ease-out)"
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      gap: "16px",
      textDecoration: "none",
      color: "inherit",
      alignItems: horizontal ? "flex-start" : "stretch",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: imgBox
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: img
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      ...img,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--neutral-400)",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "13px"
    }
  }, "NGN"), category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "10px",
      top: "10px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: categoryTone,
    size: "sm"
  }, category))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: titleSize,
      lineHeight: 1.18,
      letterSpacing: "0",
      color: "var(--text-primary)",
      textDecoration: hover ? "underline" : "none",
      textDecorationColor: "var(--ngn-red)",
      textUnderlineOffset: "3px",
      textDecorationThickness: "2px"
    }
  }, title), dek && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.55,
      color: "var(--text-secondary)"
    }
  }, dek), (author || date || readTime) && /*#__PURE__*/React.createElement(__ds_scope.Byline, {
    author: author,
    date: date,
    readTime: readTime,
    size: "sm"
  })));
}
Object.assign(__ds_scope, { ArticleCard, __ds_default_components_editorial_ArticleCard_122cbwk: ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/NewsletterForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NewsletterForm — the subscribe unit used across the newsroom. On a dark or
 * red panel by default; `tone="light"` for inline placement.
 */
function NewsletterForm({
  kicker = "Newsletter",
  heading = "The week in Northeastern news",
  blurb = "Top stories, research and campus voices — in your inbox every Friday.",
  tone = "dark",
  onSubmit,
  style,
  ...rest
}) {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const dark = tone === "dark";
  const submit = e => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    onSubmit && onSubmit(email);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? "var(--ngn-black)" : "var(--surface-paper)",
      color: dark ? "#fff" : "var(--text-primary)",
      padding: "32px 34px",
      borderRadius: "var(--radius-md)",
      borderTop: dark ? "4px solid var(--ngn-red)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: dark ? "red" : "red"
  }, kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "14px 0 8px",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "27px",
      lineHeight: 1.12,
      letterSpacing: "-0.01em"
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.55,
      color: dark ? "var(--neutral-300)" : "var(--text-secondary)",
      maxWidth: "440px"
    }
  }, blurb), done ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "16px",
      color: dark ? "#fff" : "var(--accent-text)"
    }
  }, "Thanks \u2014 check your inbox to confirm. \u2197") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: email,
    placeholder: "you@email.com",
    onChange: e => setEmail(e.target.value),
    style: {
      flex: "1 1 240px",
      minWidth: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      padding: "11px 14px",
      borderRadius: "var(--radius-sm)",
      border: "2px solid " + (dark ? "var(--neutral-600)" : "var(--border-default)"),
      background: dark ? "var(--neutral-900)" : "#fff",
      color: dark ? "#fff" : "var(--text-primary)",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    arrow: true
  }, "Subscribe")));
}
Object.assign(__ds_scope, { NewsletterForm, __ds_default_components_editorial_NewsletterForm_1is2bwn: NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Pullquote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pullquote — a large editorial quotation with a red northeast-arrow accent
 * and an attribution line.
 */
function Pullquote({
  children,
  cite,
  role,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      padding: "4px 0 4px 24px",
      borderLeft: "4px solid var(--ngn-red)",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "26px",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, children), (cite || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "14px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, cite && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 700
    }
  }, cite), cite && role && ", ", role));
}
Object.assign(__ds_scope, { Pullquote, __ds_default_components_editorial_Pullquote_7jymxd: Pullquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Pullquote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsroom/App.jsx
try { (() => {
function App() {
  const [view, setView] = React.useState("home");
  const [active, setActive] = React.useState("");
  const [article, setArticle] = React.useState(null);
  const open = a => {
    setArticle(a);
    setView("article");
    setActive(a.category || "");
    window.scrollTo(0, 0);
  };
  const nav = cat => {
    setActive(cat);
    setView("home");
    window.scrollTo(0, 0);
  };
  const home = () => {
    setActive("");
    setView("home");
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    active: active,
    onNav: nav,
    onHome: home
  }), view === "home" ? /*#__PURE__*/React.createElement(HomePage, {
    onOpen: open,
    onNav: nav
  }) : /*#__PURE__*/React.createElement(ArticlePage, {
    article: article,
    onOpen: open,
    onNav: nav
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsroom/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsroom/ArticlePage.jsx
try { (() => {
function ArticlePage({
  article,
  onOpen,
  onNav
}) {
  const img = (s, w, h) => `https://picsum.photos/seed/${s}/${w}/${h}`;
  const {
    Tag,
    Kicker,
    Pullquote,
    ArticleCard,
    Byline
  } = window.NortheasternGlobalNewsDesignSystem_712acf;
  const a = article || {};
  const related = [{
    seed: "rel1",
    category: "Research",
    title: "How ocean sensors are getting cheaper and smarter"
  }, {
    seed: "rel2",
    category: "Global",
    title: "The campuses turning research into policy"
  }, {
    seed: "rel3",
    category: "Health",
    title: "What deep-sea microbes teach us about immunity"
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: "760px",
      margin: "0 auto",
      padding: "40px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(a.category || "Research"),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, a.category || "Research")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: "clamp(30px,4.4vw,52px)",
      lineHeight: 1.04,
      letterSpacing: "-0.01em",
      margin: "6px 0 18px"
    }
  }, a.title || "Untitled story"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "21px",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      margin: "0 0 22px"
    }
  }, a.dek || "A leading dek summarizing the story in one or two sentences for the reader."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "14px 0",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(Byline, {
    author: a.author || "Ian Thomsen",
    date: a.date || "March 12, 2026",
    readTime: a.readTime || "7 min read"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      color: "var(--text-muted)"
    }
  }, ["Share", "X", "in"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: "32px",
      height: "32px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-circle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontFamily: "var(--font-body)",
      fontWeight: 700
    }
  }, s[0]))))), /*#__PURE__*/React.createElement("figure", {
    style: {
      maxWidth: "1100px",
      margin: "28px auto 0",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      overflow: "hidden",
      borderRadius: "var(--radius-sm)",
      background: "var(--neutral-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.image || img('hero', 1400, 800),
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "10px"
    }
  }, "Photo by Northeastern Global News. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, "Researchers deploy sensors off the Atlantic ridge."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "680px",
      margin: "36px auto 0",
      padding: "0 24px",
      fontFamily: "var(--font-body)",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "58px",
      lineHeight: 0.8,
      float: "left",
      marginRight: "12px",
      marginTop: "6px",
      color: "var(--ngn-red)"
    }
  }, "F"), "or three months, a team of Northeastern researchers charted a stretch of seafloor that no instrument had ever reached, returning with a dataset that scientists say could reshape our understanding of how the deep ocean stores carbon."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px"
    }
  }, "The expedition, led by faculty across the university's global network, combined autonomous submersibles with a new generation of low-cost sensors developed on the Boston campus. Early findings suggest the region absorbs far more carbon than existing climate models assume."), /*#__PURE__*/React.createElement(Pullquote, {
    cite: "Dr. Maya Fernandes",
    role: "Marine Sciences, Northeastern University"
  }, "We went looking for one answer and came back with a hundred new questions. That's the point of experience-driven research."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0"
    }
  }, "Students on co-op assignments played a central role, operating equipment and processing data in real time \u2014 an example, faculty say, of how experiential learning translates directly into discovery."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "29px",
      letterSpacing: "0",
      margin: "36px 0 14px"
    }
  }, "What comes next"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px"
    }
  }, "The team plans a second voyage next year, expanding the sensor network and opening the dataset to researchers worldwide. The work is part of a broader university push to turn use-inspired research into real-world policy.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "56px auto 0",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "3px solid var(--ngn-black)",
      paddingTop: "14px",
      marginBottom: "26px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "24px",
      margin: 0
    }
  }, "Related coverage")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "26px"
    }
  }, related.map((r, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: i,
    image: img(r.seed, 800, 500),
    category: r.category,
    title: r.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen({
        ...r,
        image: img(r.seed, 1200, 760),
        dek: "",
        author: "NGN Staff",
        date: "March 2026",
        readTime: "5 min read"
      });
      window.scrollTo(0, 0);
    }
  })))));
}
window.ArticlePage = ArticlePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsroom/ArticlePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsroom/HomePage.jsx
try { (() => {
function HomePage({
  onOpen,
  onNav
}) {
  const img = (s, w, h) => `https://picsum.photos/seed/${s}/${w}/${h}`;
  const {
    ArticleCard,
    Tag,
    Kicker,
    NewsletterForm
  } = window.NortheasternGlobalNewsDesignSystem_712acf;
  const lead = {
    image: "https://picsum.photos/seed/ngn-lead/1200/760",
    category: "Research",
    title: "Northeastern scientists map an uncharted stretch of the deep-sea floor",
    dek: "A monthslong expedition off the Atlantic ridge returns with troves of data that could reshape how we understand ocean carbon.",
    author: "Ian Thomsen",
    date: "March 12, 2026",
    readTime: "7 min read"
  };
  const rail = [{
    category: "Health",
    title: "A wearable that predicts migraines hours before they start",
    author: "Cynthia McCormick Hibbert",
    date: "March 11, 2026",
    readTime: "5 min"
  }, {
    category: "Global",
    title: "Inside the London campus's new climate-policy lab",
    author: "Tanner Stening",
    date: "March 11, 2026",
    readTime: "6 min"
  }, {
    category: "Business",
    title: "Why co-op students are landing roles in quantum startups",
    author: "Alena Kuzub",
    date: "March 10, 2026",
    readTime: "4 min"
  }];
  const grid = [{
    seed: "ngn1",
    category: "Campus",
    title: "A new home for experiential learning opens in Boston",
    dek: "The 12-story hub brings studios, labs and maker space under one roof.",
    author: "Cynthia McCormick Hibbert",
    date: "March 10, 2026",
    readTime: "4 min read"
  }, {
    seed: "ngn2",
    category: "Sports",
    tone: "solid",
    title: "Huskies clinch the Beanpot in overtime thriller",
    dek: "A last-minute goal seals Northeastern's return to the title.",
    author: "Staff report",
    date: "March 9, 2026",
    readTime: "3 min read"
  }, {
    seed: "ngn3",
    category: "Opinion",
    tone: "outline",
    title: "The case for teaching AI ethics from day one",
    dek: "A professor argues fluency must come with responsibility.",
    author: "Ranjit Singh",
    date: "March 9, 2026",
    readTime: "6 min read"
  }, {
    seed: "ngn4",
    category: "Research",
    title: "Engineers build a battery that heals its own cracks",
    dek: "The self-repairing design could extend EV lifespans by years.",
    author: "Ian Thomsen",
    date: "March 8, 2026",
    readTime: "5 min read"
  }, {
    seed: "ngn5",
    category: "Health",
    title: "Mapping how loneliness reshapes the aging brain",
    dek: "New imaging reveals surprising links to memory.",
    author: "Alena Kuzub",
    date: "March 8, 2026",
    readTime: "7 min read"
  }, {
    seed: "ngn6",
    category: "Global",
    tone: "gold",
    title: "Oakland graduate named a Rhodes Scholar",
    dek: "The first from the campus in its history.",
    author: "Tanner Stening",
    date: "March 7, 2026",
    readTime: "3 min read"
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "36px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.55fr 1fr",
      gap: "40px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => onOpen(lead),
    style: {
      cursor: "pointer",
      textDecoration: "none",
      color: "inherit",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16/10",
      overflow: "hidden",
      borderRadius: "var(--radius-sm)",
      background: "var(--neutral-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: lead.image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "14px",
      top: "14px"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, lead.category))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: "clamp(30px,3.6vw,50px)",
      lineHeight: 1.04,
      letterSpacing: "-0.01em",
      margin: "20px 0 12px"
    }
  }, lead.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "19px",
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      margin: "0 0 14px",
      maxWidth: "620px"
    }
  }, lead.dek), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, "By ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-primary)"
    }
  }, lead.author), " \xB7 ", lead.date, " \xB7 ", lead.readTime))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: "1px solid var(--border-subtle)",
      paddingLeft: "40px"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Latest"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px",
      display: "flex",
      flexDirection: "column"
    }
  }, rail.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    onClick: () => onOpen({
      ...r,
      image: img('rail' + i, 800, 600)
    }),
    style: {
      cursor: "pointer",
      textDecoration: "none",
      color: "inherit",
      padding: "16px 0",
      borderTop: i ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "7px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    tone: "tint"
  }, r.category)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "19px",
      lineHeight: 1.22,
      letterSpacing: "0",
      margin: "0 0 6px"
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, r.date, " \xB7 ", r.readTime))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "48px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "3px solid var(--ngn-black)",
      paddingTop: "14px",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "26px",
      letterSpacing: "0",
      margin: 0
    }
  }, "Top stories"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav("Research"),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "14px",
      color: "var(--accent-text)",
      textDecoration: "none"
    }
  }, "All stories \u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "30px 26px"
    }
  }, grid.map((g, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: i,
    image: img(g.seed, 800, 500),
    category: g.category,
    categoryTone: g.tone || "red",
    title: g.title,
    dek: g.dek,
    author: g.author,
    date: g.date,
    readTime: g.readTime,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen({
        ...g,
        image: img(g.seed, 1200, 760)
      });
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 24px 0"
    }
  }, /*#__PURE__*/React.createElement(NewsletterForm, null)));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsroom/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsroom/SiteFooter.jsx
try { (() => {
function SiteFooter() {
  const cols = [["Sections", ["Research", "Campus", "Health", "Global", "Business", "Sports", "Opinion"]], ["Newsroom", ["About NGN", "Media contacts", "For journalists", "Experts guide"]], ["University", ["northeastern.edu", "Admissions", "Colleges", "Global campuses"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ngn-black)",
      color: "#fff",
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 24px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark-stacked-on-dark.svg",
    alt: "Northeastern Global News",
    style: {
      height: "72px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      lineHeight: 1.6,
      color: "var(--neutral-400)",
      marginTop: "18px",
      maxWidth: "260px"
    }
  }, "The newsroom of Northeastern University, reporting research, discovery and campus life across the global network.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: ".1em",
      color: "var(--neutral-400)",
      marginBottom: "14px"
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: "block",
      color: "#fff",
      textDecoration: "none",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      padding: "5px 0"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--neutral-400)",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Northeastern University"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Accessibility"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsroom/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsroom/SiteHeader.jsx
try { (() => {
const NAV = ["Research", "Campus", "Health", "Global", "Business", "Sports", "Opinion"];
function IconSearch() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3.2-3.2",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function IconMenu() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function SiteHeader({
  active,
  onNav,
  onHome
}) {
  const {
    Button
  } = window.NortheasternGlobalNewsDesignSystem_712acf;
  const [q, setQ] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "#fff",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ngn-black)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "7px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      letterSpacing: ".02em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--neutral-300)"
    }
  }, "Boston \xB7 March 12, 2026"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.northeastern.edu",
    style: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 700
    }
  }, "northeastern.edu \u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark-horizontal-on-light.svg",
    alt: "Northeastern Global News",
    style: {
      height: "26px",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(v => !v),
    "aria-label": "Search",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-primary)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(IconSearch, null)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true
  }, "Subscribe"))), q && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "14px 24px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: "Search Northeastern Global News",
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "12px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      border: "2px solid var(--ngn-black)",
      borderRadius: "var(--radius-sm)",
      outline: "none"
    }
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      gap: "2px",
      overflowX: "auto"
    }
  }, NAV.map(n => {
    const on = n === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => onNav(n),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 14px",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "13px",
        textTransform: "uppercase",
        letterSpacing: ".08em",
        color: on ? "var(--ngn-red)" : "var(--text-primary)",
        borderBottom: on ? "3px solid var(--ngn-red)" : "3px solid transparent",
        whiteSpace: "nowrap"
      }
    }, n);
  }))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsroom/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowPattern = __ds_scope.ArrowPattern;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

__ds_ns.Pullquote = __ds_scope.Pullquote;

})();

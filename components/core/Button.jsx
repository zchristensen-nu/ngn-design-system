import React from "react";

const SIZES = {
  sm: { fontSize: "13px", padding: "7px 14px", gap: "6px" },
  md: { fontSize: "15px", padding: "11px 20px", gap: "8px" },
  lg: { fontSize: "17px", padding: "15px 28px", gap: "10px" },
};

function ArrowNE({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ display: "block", flex: "none" }}>
      <path d="M6 18L18 6M9 6h9v9" stroke="currentColor" strokeWidth="2.6"
        strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

/**
 * NGN Button — the brand action. Primary is Northeastern red; the northeast
 * arrow is the house affordance for "go / read more".
 */
export function Button({
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
    boxSizing: "border-box",
  };

  const variants = {
    primary:   { background: "var(--ngn-red)", color: "#fff", borderColor: "var(--ngn-red)" },
    secondary: { background: "transparent", color: "var(--ngn-black)", borderColor: "var(--ngn-black)" },
    inverse:   { background: "#fff", color: "var(--ngn-black)", borderColor: "#fff" },
    ghost:     { background: "transparent", color: "var(--ngn-black)", borderColor: "transparent" },
    link:      { background: "transparent", color: "var(--accent-text)", borderColor: "transparent", padding: 0, borderRadius: 0 },
  };

  const [hover, setHover] = React.useState(false);
  const hovers = {
    primary:   { background: "var(--red-600)", borderColor: "var(--red-600)" },
    secondary: { background: "var(--ngn-black)", color: "#fff" },
    inverse:   { background: "var(--neutral-100)" },
    ghost:     { background: "var(--surface-sunken)" },
    link:      { color: "var(--accent-press)" },
  };

  const composed = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...style,
  };

  const inner = (
    <>
      {children}
      {arrow && <ArrowNE size={size === "lg" ? 17 : size === "sm" ? 13 : 15} />}
    </>
  );

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
  };

  if (href && !disabled) {
    return <a href={href} style={composed} {...handlers} {...rest}>{inner}</a>;
  }
  return (
    <button type={type} disabled={disabled} style={composed} {...handlers} {...rest}>
      {inner}
    </button>
  );
}

export default Button;

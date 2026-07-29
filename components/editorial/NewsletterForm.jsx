import React from "react";
import { Button } from "../core/Button.jsx";
import { Kicker } from "../core/Kicker.jsx";

/**
 * NewsletterForm — the subscribe unit used across the newsroom. On a dark or
 * red panel by default; `tone="light"` for inline placement.
 */
export function NewsletterForm({
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

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    onSubmit && onSubmit(email);
  };

  return (
    <div style={{
      background: dark ? "var(--ngn-black)" : "var(--surface-paper)",
      color: dark ? "#fff" : "var(--text-primary)",
      padding: "32px 34px", borderRadius: "var(--radius-md)",
      borderTop: dark ? "4px solid var(--ngn-red)" : "none", ...style,
    }} {...rest}>
      <Kicker tone={dark ? "red" : "red"}>{kicker}</Kicker>
      <h3 style={{ margin: "14px 0 8px", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "27px", lineHeight: 1.12, letterSpacing: "-0.01em" }}>{heading}</h3>
      <p style={{ margin: "0 0 20px", fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.55, color: dark ? "var(--neutral-300)" : "var(--text-secondary)", maxWidth: "440px" }}>{blurb}</p>
      {done ? (
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "16px", color: dark ? "#fff" : "var(--accent-text)" }}>Thanks — check your inbox to confirm. ↗</p>
      ) : (
        <form onSubmit={submit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="email" required value={email} placeholder="you@email.com"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: "1 1 240px", minWidth: 0, fontFamily: "var(--font-body)", fontSize: "15px",
              padding: "11px 14px", borderRadius: "var(--radius-sm)",
              border: "2px solid " + (dark ? "var(--neutral-600)" : "var(--border-default)"),
              background: dark ? "var(--neutral-900)" : "#fff",
              color: dark ? "#fff" : "var(--text-primary)", outline: "none",
            }}
          />
          <Button type="submit" variant="primary" arrow>Subscribe</Button>
        </form>
      )}
    </div>
  );
}

export default NewsletterForm;

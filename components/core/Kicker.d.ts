import * as React from "react";

/**
 * Eyebrow label that sits above headlines and section titles. Uppercase Lato.
 */
export interface KickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "red" */
  tone?: "red" | "muted";
}

export function Kicker(props: KickerProps): JSX.Element;
export default Kicker;

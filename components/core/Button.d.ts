import * as React from "react";

/**
 * The NGN brand action button. Primary = Northeastern red; use the `arrow`
 * prop to append the signature northeast arrow for "read more / go".
 *
 * @startingPoint section="Core" subtitle="Brand action button with variants" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "inverse" | "ghost" | "link";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Append the northeast arrow glyph. @default false */
  arrow?: boolean;
  /** Render as a link when set. */
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
export default Button;

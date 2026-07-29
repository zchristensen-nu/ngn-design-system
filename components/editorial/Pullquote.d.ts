import * as React from "react";
/** Large editorial pull quote with red rule and attribution. */
export interface PullquoteProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  cite?: string;
  role?: string;
  /** @default "left" */
  align?: "left" | "center";
}
export function Pullquote(props: PullquoteProps): JSX.Element;
export default Pullquote;

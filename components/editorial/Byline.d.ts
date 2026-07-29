import * as React from "react";
/** Author + date + read-time meta line for stories. */
export interface BylineProps extends React.HTMLAttributes<HTMLDivElement> {
  author?: string;
  date?: string;
  readTime?: string;
  /** @default "md" */
  size?: "sm" | "md";
}
export function Byline(props: BylineProps): JSX.Element;
export default Byline;

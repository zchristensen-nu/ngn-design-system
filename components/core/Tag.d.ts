import * as React from "react";

/**
 * Uppercase category / topic tag used to classify a story.
 * @startingPoint section="Core" subtitle="Category & topic labels" viewport="700x120"
 */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** @default "red" */
  tone?: "red" | "solid" | "tint" | "outline" | "gold";
  /** @default "md" */
  size?: "sm" | "md";
  href?: string;
}

export function Tag(props: TagProps): JSX.Element;
export default Tag;

import * as React from "react";
/**
 * The workhorse story card: image, category, headline, dek and byline.
 * @startingPoint section="Editorial" subtitle="Story card — stacked or horizontal" viewport="700x420"
 */
export interface ArticleCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  image?: string;
  category?: string;
  categoryTone?: "red" | "solid" | "tint" | "outline" | "gold";
  title?: string;
  dek?: string;
  author?: string;
  date?: string;
  readTime?: string;
  href?: string;
  /** @default "stacked" */
  layout?: "stacked" | "horizontal";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
}
export function ArticleCard(props: ArticleCardProps): JSX.Element;
export default ArticleCard;

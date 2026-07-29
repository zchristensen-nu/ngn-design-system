import * as React from "react";
/**
 * NGN social pull-quote card: display-serif quote over the arrow watermark with
 * a bold-name attribution and the NGN mark. Dark story or cream square post.
 * @startingPoint section="Brand" subtitle="Social pull-quote card (story / square)" viewport="700x760"
 */
export interface QuoteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote?: string;
  /** Attributed speaker (rendered bold). */
  name?: string;
  /** Speaker role / title. */
  role?: string;
  /** @default "dark" */
  tone?: "dark" | "cream";
  /** Aspect + sizing. @default "story" */
  format?: "story" | "square";
  /** Show the NGN monogram. @default true */
  showMark?: boolean;
  /** Path to /assets relative to the page. @default "assets" */
  assetBase?: string;
}
export function QuoteCard(props: QuoteCardProps): JSX.Element;
export default QuoteCard;

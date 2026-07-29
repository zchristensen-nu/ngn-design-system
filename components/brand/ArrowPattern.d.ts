import * as React from "react";
/**
 * The staggered northeast-arrow watermark texture, as a background layer.
 * @startingPoint section="Brand" subtitle="Arrow watermark texture layer" viewport="700x300"
 */
export interface ArrowPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tile color — match it to the surface (black on black, etc). @default "black" */
  tone?: "black" | "red" | "white";
  /** Watermark opacity. Tiles are pre-tinted, so 1 is usually correct. @default 1 */
  opacity?: number;
  /** Tile width in px. @default 300 */
  size?: number;
  /** Path to the assets folder relative to the page. @default "assets" */
  assetBase?: string;
  /** Absolutely fill the parent. @default true */
  cover?: boolean;
}
export function ArrowPattern(props: ArrowPatternProps): JSX.Element;
export default ArrowPattern;

import * as React from "react";
/**
 * Newsletter subscribe unit for the newsroom.
 * @startingPoint section="Editorial" subtitle="Newsletter subscribe panel" viewport="700x300"
 */
export interface NewsletterFormProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  heading?: string;
  blurb?: string;
  /** @default "dark" */
  tone?: "dark" | "light";
  onSubmit?: (email: string) => void;
}
export function NewsletterForm(props: NewsletterFormProps): JSX.Element;
export default NewsletterForm;

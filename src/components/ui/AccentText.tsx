import { Fragment } from "react";

type AccentTextProps = {
  text: string;
  accent?: string;
};

/**
 * Renders text with one optional phrase wrapped in an italic brass <em>.
 * `accent` must appear verbatim in `text`; otherwise the text renders plain.
 */
export function AccentText({ text, accent }: AccentTextProps) {
  if (!accent) return <Fragment>{text}</Fragment>;

  const index = text.indexOf(accent);
  if (index === -1) return <Fragment>{text}</Fragment>;

  const before = text.slice(0, index);
  const after = text.slice(index + accent.length);

  return (
    <Fragment>
      {before}
      <em className="text-brass italic">{accent}</em>
      {after}
    </Fragment>
  );
}

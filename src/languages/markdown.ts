import tokens from "../generated/tokens.json";
import { scope } from "../utils.js";

export default [
  scope("entity.name.section.markdown", tokens.syntax.property.fg, "italic"),
  scope("punctuation.definition.heading.markdown", "", "italic"),
  scope("invalid.deprecated.entity.other.attribute-name.html", tokens.syntax.parameter.fg, "italic"),
  scope(
    [
      "punctuation.definition.quote.begin.markdown",
      "punctuation.definition.quote.end.markdown",
      "punctuation.definition.constant.markdown",
    ],
    tokens.syntax.punctuation.fg
    // "italic"
  ),
  scope("markup.quote.markdown", tokens.syntax.dimmed.fg, "italic"),
  scope(["punctuation.definition.bold.markdown", "punctuation.definition.list.begin.markdown"], "", "bold"),
  scope(
    [
      "punctuation.definition.raw.markdown",
      "punctuation.definition.bold.markdown",
      "punctuation.definition.heading.markdown",
      "punctuation.definition.markdown",
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.table.markdown",
      "punctuation.separator.table.markdown",
      "punctuation.definition.link.title.begin.markdown",
      "punctuation.definition.link.title.end.markdown",
      "punctuation.definition.metadata.markdown",
      "punctuation.definition.constant.begin.markdown",
      "punctuation.definition.constant.end.markdown",
      "markup.heading.setext.1.markdown",
      "markup.heading.setext.2.markdown",
      "punctuation.definition.italic.markdown",
    ],
    tokens.syntax.keyword.fg
  ),
  scope(["string.other.link.title.markdown"], tokens.syntax.string.fg, "underline"),
  scope("markup.underline.link.markdown", tokens.syntax.function.fg, "underline"),
  scope(["constant.other.reference.link.markdown"], tokens.syntax.variable.fg),
  scope(["fenced_code.block.language.markdown", "fenced_code.block.language"], tokens.syntax.number.fg),
  scope("markup.inline.raw.string.markdown", tokens.syntax.string.fg),
  scope("markup.bold.markdown", "", "bold"),
  scope("markup.italic.markdown", "", "italic"),
];

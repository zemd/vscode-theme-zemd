import tokens from "../generated/tokens.json";
import { scope } from "../utils.js";

export default [
  scope(
    [
      "punctuation.definition.sequence.begin.yaml",
      "punctuation.definition.sequence.end.yaml",
      "punctuation.separator.sequence.yaml",
      "punctuation.separator.key-value.mapping.yaml",
      "meta.flow-mapping.yaml",
      "string.other.begin.yaml",
      "string.other.end.yaml"
    ],
    tokens.syntax.punctuation.fg
  ),
  scope(
    ["variable.other.read.github-actions-expression", "entity.name.tag.yaml"],
    tokens.syntax.variable.fg
  ),
  scope(
    [
      "meta.embedded.block.github-actions-expression",
      "constant.language.boolean.yaml",
      "punctuation.definition.mapping.begin.yaml",
      "punctuation.definition.mapping.end.yaml",
    ],
    tokens.syntax.keyword.fg
  ),
  scope(
    [
      "string.unquoted.plain.out.yaml",
      "string.unquoted.plain.in.yaml",
      "string.quoted.single.yaml",
      "string.quoted.single.github-actions-expression",
      "string.quoted.double.yaml",
      "punctuation.definition.string.begin.yaml",
      "punctuation.definition.string.end.yaml"
    ],
    tokens.syntax.string.fg
  ),
  scope(["constant.numeric.float.yaml", "constant.numeric.integer.yaml"], tokens.syntax.number.fg, "underline"),
  scope("support.function.github-actions-expression", tokens.syntax.function.fg),
  scope("constant.other.timestamp.yaml", tokens.syntax.enum.fg),
];

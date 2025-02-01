import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => [
  scope(["meta.section.editorconfig"], tokens.syntax.string.fg),
  scope(["keyword.other.definition", "keyword.other.definition.root.editorconfig"], tokens.syntax.property.fg),
  scope(["constant.language.boolean"], tokens.syntax.keyword.fg),
  scope(["punctuation.definition.brace.bracket", "punctuation.section.brace"], tokens.syntax.punctuation.fg),
  scope(["keyword.operator.glob.wildcard.editorconfig"], tokens.syntax.parameter.fg),
  scope(["entity.name.section.group-title.editorconfig"], "", "bold"),
  scope(["constant.numeric.decimal.integer.int.editorconfig"], tokens.syntax.number.fg, "underline"),
];

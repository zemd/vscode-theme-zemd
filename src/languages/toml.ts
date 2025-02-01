import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => {
  return [
    scope("support.type.property-name.toml", tokens.syntax.property.fg),
    scope("punctuation.eq.toml", tokens.syntax.operator.fg),
    scope(
      [
        "punctuation.definition.table.toml",
        "punctuation.definition.array.table.toml",
        "constant.language.boolean.toml",
        "support.type.property-name.table.toml",
        "support.type.property-name.array.toml",
      ],
      tokens.syntax.keyword.fg,
    ),
    scope("string.quoted.single.basic.line.toml", tokens.syntax.string.fg),
    scope(
      [
        "punctuation.definition.array.toml",
        "punctuation.definition.table.inline.toml",
        "punctuation.separator.array.toml",
      ],
      tokens.syntax.punctuation.fg,
    ),
    scope("constant.numeric.integer.toml", tokens.syntax.number.fg, "underline"),
  ];
};

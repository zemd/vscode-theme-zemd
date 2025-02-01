import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => {
  return [
    scope(["support.type.property-name.json.comments", "support.type.property-name.json"], tokens.syntax.property.fg),
    scope(
      [
        "string.quoted.double.json.comments",
        "punctuation.definition.string.begin.json.comments",
        "punctuation.definition.string.end.json.comments",
        "string.quoted.double.json",
        "punctuation.definition.string.begin.json",
        "punctuation.definition.string.end.json",
      ],
      tokens.syntax.string.fg,
    ),
    scope("constant.language.json", tokens.syntax.keyword.fg),
    scope("constant.numeric.json", tokens.syntax.number.fg, "underline"),
    scope(
      [
        "punctuation.definition.array.begin.json.comments",
        "punctuation.definition.array.end.json.comments",
        "punctuation.separator.array.json",
      ],
      tokens.syntax.punctuation.fg,
    ),
    scope(
      [
        "punctuation.separator.dictionary.key-value.json.comments",
        "punctuation.separator.array.json.comments",
        "punctuation.separator.dictionary.key-value.json",
      ],
      tokens.syntax.punctuation.fg,
    ),
  ];
};

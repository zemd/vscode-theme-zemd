import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => {
  return [
    scope(["entity.name.tag.html"], tokens.syntax.function.fg),
    scope("entity.other.attribute-name.html", tokens.syntax.parameter.fg, "italic"),
    scope(
      [
        "string.quoted.double.html",
        "punctuation.definition.string.begin.html",
        "punctuation.definition.string.end.html",
      ],
      tokens.syntax.string.fg,
    ),
    scope(["constant.character.entity.numeric.decimal.html"], tokens.syntax.number.fg, "underline"),
  ];
};

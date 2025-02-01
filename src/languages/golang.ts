import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => {
  return [
    scope(["keyword.package.go"], tokens.syntax.keyword.fg, "bold"),
    scope(
      [
        "keyword.import.go",
        "keyword.function.go",
        "keyword.interface.go",
        "keyword.control.go",
        "storage.type.numeric.go",
        "keyword.type.go",
        "keyword.struct.go",
        "storage.type.string.go",
        "keyword.var.go",
        "constant.language.go",
        "keyword.const.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
      ],
      tokens.syntax.keyword.fg,
    ),
    scope(
      [
        "punctuation.definition.imports.begin.bracket.round.go",
        "punctuation.definition.imports.end.bracket.round.go",
        "punctuation.definition.begin.bracket.round.go",
        "punctuation.definition.end.bracket.round.go",
        "punctuation.definition.begin.bracket.curly.go",
        "punctuation.definition.end.bracket.curly.go",
        "punctuation.definition.begin.bracket.curly.go",
        "punctuation.definition.end.bracket.curly.go",
        "punctuation.other.comma.go",
        "punctuation.definition.bracket.square.go",
        "punctuation.terminator.go",
        "punctuation.other.colon.go",
      ],
      tokens.syntax.punctuation.fg,
    ),
    scope(
      [
        "entity.name.import.go",
        "punctuation.definition.string.begin.go",
        "punctuation.definition.string.end.go",
        "string.quoted.double.go",
        "constant.other.rune.go",
        "string.quoted.raw.go",
      ],
      tokens.syntax.string.fg,
    ),
    scope(["variable.other.assignment.go", "variable.other.declaration.go"], tokens.syntax.variable.fg),
    scope(["keyword.operator.assignment.go", "keyword.operator.address.go"], tokens.syntax.operator.fg),
    scope(["constant.numeric.decimal.go"], tokens.syntax.number.fg, "underline"),
    scope(["support.function.go", "support.function.builtin.go"], tokens.syntax.function.fg),
  ];
};

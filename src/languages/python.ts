import tokens from "../generated/tokens.json" assert { type: "json" };
import { scope } from "../utils.js";

export default [
  scope(["keyword.control.import.python", "variable.language.special.self.python"], tokens.syntax.keyword.fg, "bold"),
  scope(
    ["meta.function-call.generic.python", "support.function.builtin.python", "support.function.magic.python"],
    tokens.syntax.function.fg,
  ),
  scope(
    ["support.variable.magic.python", "constant.other.caps.python", "meta.function-call.arguments.python"],
    tokens.syntax.variable.fg,
  ),
  scope(
    [
      "punctuation.definition.arguments.begin.python",
      "punctuation.definition.arguments.end.python",
      "punctuation.definition.list.begin.python",
      "punctuation.definition.list.end.python",
      "punctuation.section.function.begin.python",
      "punctuation.section.function.end.python",
      "punctuation.separator.element.python",
      "punctuation.separator.parameters.python",
      "punctuation.separator.annotation.python",
      "punctuation.definition.dict.begin.python",
      "punctuation.definition.dict.end.python",
      "punctuation.separator.dict.python",
      "punctuation.parenthesis.begin.python",
      "punctuation.parenthesis.end.python",
      "punctuation.section.class.begin.python",
      "punctuation.separator.colon.python",
      "punctuation.separator.arguments.python",
      "punctuation.definition.inheritance.begin.python",
      "punctuation.definition.inheritance.end.python",
    ],
    tokens.syntax.punctuation.fg,
  ),
  scope(
    [
      "punctuation.definition.string.begin.python",
      "string.quoted.single.python",
      "storage.type.string.python",
      "string.quoted.docstring.multi.python",
    ],
    tokens.syntax.string.fg,
  ),
  scope("meta.attribute.python", tokens.syntax.property.fg),
  scope("support.type.exception.python", tokens.syntax.macro.fg, "bold"),
  scope(
    [
      "punctuation.separator.annotation.result.python",
      "keyword.control.flow.python",
      "storage.type.class.python",
      "constant.character.format.placeholder.other.python",
      "constant.language.python",
      "keyword.operator.logical.python",
    ],
    tokens.syntax.keyword.fg,
  ),
  scope("keyword.operator.arithmetic.python", tokens.syntax.fg),
  scope(["constant.numeric.dec.python"], tokens.syntax.number.fg, "underline"),
  scope("string.regexp.quoted.multi.python", tokens.syntax.regexp.fg),
  scope("keyword.operator.assignment.python", tokens.syntax.operator.fg),
  scope("variable.parameter.function.language.python", tokens.syntax.parameter.fg, "italic"),
];

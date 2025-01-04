import tokens from "../generated/tokens.json" assert { type: "json" };
import { scope } from "../utils.js";

export default [
  scope(
    [
      "keyword.other.rust",
      "keyword.other.fn.rust",
      "constant.language.bool.rust",
      "keyword.control.rust",
      "entity.name.namespace.rust",
      "keyword.operator.arrow.fat.rust",
      "storage.type.rust",
      "keyword.operator.arrow.skinny.rust",
      "storage.modifier.rust",
      "entity.name.type.primitive.rust",
      "variable.language.super.rust",
    ],
    tokens.syntax.keyword.fg,
  ),
  scope("variable.language.super.rust", "", "bold"),
  scope(
    [
      "punctuation.brackets.round.rust",
      "punctuation.brackets.curly.rust",
      "keyword.operator.namespace.rust",
      "punctuation.brackets.angle.rust",
      "punctuation.semi.rust",
      "punctuation.comma.rust",
      "punctuation.brackets.square.rust",
      "keyword.operator.key-value.rust",
    ],
    tokens.syntax.punctuation.fg,
  ),
  scope("meta.function.call.rust", tokens.syntax.function.fg),
  scope(["variable.other.rust", "variable.language.self.rust", "constant.other.caps.rust"], tokens.syntax.variable.fg),
  scope("string.quoted.double.rust", tokens.syntax.string.fg),
  scope("keyword.operator.assignment.equal.rust", tokens.syntax.operator.fg),
  scope(["constant.numeric.decimal.rust", "constant.numeric.hex.rust"], tokens.syntax.number.fg, "underline"),
  scope("storage.modifier.mut.rust", tokens.syntax.enum.fg),
  scope("meta.attribute.rust", tokens.syntax.property.fg),
  scope(
    [
      "punctuation.definition.attribute.rust",
      "punctuation.brackets.attribute.rust",
      "entity.name.type.result.rust",
      "entity.name.type.option.rust",
    ],
    tokens.syntax.typeParameter.fg,
  ),
  scope("entity.name.type.enum.rust", tokens.syntax.enum.fg),
  scope("keyword.operator.logical.rust", tokens.syntax.fg),
  scope("string.quoted.byte.raw.rust", tokens.syntax.regexp.fg),
];

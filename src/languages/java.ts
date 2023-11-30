import tokens from "../generated/tokens.json";
import { scope } from "../utils.js";

export default [
  scope(
    [
      "storage.modifier.java",
      "constant.language.java",
      "storage.type.primitive.java",
      "storage.type.object.array.java",
      "keyword.control.java",
      "storage.type.local.java",
      "keyword.control.try.java",
      "keyword.control.catch.java",
      "variable.language.this.java",
      "storage.type.function.arrow.java",
      "keyword.control.new.java",
      "keyword.control.throw.java",
      "storage.modifier.implements.java",
      "keyword.other.documentation.javadoc.java",
      "storage.modifier.extends.java",
      "support.constant.java-properties",
    ],
    tokens.syntax.keyword.fg
  ),
  scope(["keyword.other.import.java", "keyword.other.package.java"], tokens.syntax.keyword.fg, "bold"),
  scope(
    [
      "punctuation.section.class.begin.bracket.curly.java",
      "punctuation.section.class.end.bracket.curly.java",
      "punctuation.section.class.begin.bracket.curly.java",
      "punctuation.section.class.end.bracket.curly.java",
      "punctuation.definition.annotation-arguments.begin.bracket.round.java",
      "punctuation.definition.annotation-arguments.end.bracket.round.java",
      "punctuation.separator.delimiter.java",
      "punctuation.bracket.square.java",
      "punctuation.bracket.round.java",
      "punctuation.terminator.java",
      "punctuation.section.method.begin.bracket.curly.java",
      "punctuation.section.method.end.bracket.curly.java",
      "punctuation.section.enum.begin.bracket.curly.java",
      "punctuation.section.enum.end.bracket.curly.java",
      "punctuation.section.try.begin.bracket.curly.java",
      "punctuation.section.try.end.bracket.curly.java",
      "punctuation.section.catch.begin.bracket.curly.java",
      "punctuation.section.catch.end.bracket.curly.java",
      "punctuation.bracket.angle.java",
    ],
    tokens.syntax.punctuation.fg
  ),
  scope("variable.parameter.java", tokens.syntax.parameter.fg, "italic"),
  scope(["punctuation.definition.annotation.java", "storage.type.annotation.java"], tokens.syntax.decorator.fg),
  scope(["constant.other.key.java", "meta.record.identifier.java"], tokens.syntax.variable.fg),
  scope("keyword.operator.assignment.java", tokens.syntax.operator.fg),
  scope(
    [
      "string.quoted.double.java",
      "punctuation.definition.string.begin.java",
      "punctuation.definition.string.end.java",
      "string.unquoted.java-properties",
    ],
    tokens.syntax.string.fg
  ),
  scope("storage.modifier.import.java", tokens.syntax.dimmed.fg),
  scope("entity.name.type.class.java", tokens.syntax.class.fg),
  scope("storage.type.java", tokens.syntax.type.fg),
  scope(["variable.other.definition.java", "variable.language.java"], tokens.syntax.variable.fg),
  scope(["variable.other.object.property.java"], tokens.syntax.property.fg),
  scope("constant.numeric.decimal.java", tokens.syntax.number.fg, "underline"),
  scope("entity.name.type.enum.java", tokens.syntax.enum.fg),
  scope("constant.other.enum.java", tokens.syntax.enumMember.fg),
  scope("storage.type.generic.wildcard.java", tokens.syntax.typeParameter.fg),
];

import { scope } from "./../utils.js";
import tokens from "../generated/tokens.json";

export default [
  scope("variable.other.readwrite.terraform", tokens.syntax.variable.fg),
  scope("variable.other.member.hcl", tokens.syntax.property.fg),
  scope("keyword.operator.assignment.hcl", tokens.syntax.operator.fg),
  scope(
    ["string.quoted.double.hcl", "punctuation.definition.string.begin.hcl", "punctuation.definition.string.end.hcl"],
    tokens.syntax.string.fg
  ),
  scope([
    "punctuation.section.braces.begin.hcl",
    "punctuation.section.braces.end.hcl",
    "punctuation.section.block.begin.hcl",
    "punctuation.section.block.end.hcl",
    "punctuation.section.brackets.begin.hcl",
    "punctuation.section.brackets.end.hcl"
  ], tokens.syntax.punctuation.fg),
  scope(["keyword.other.interpolation.begin.hcl", "keyword.other.interpolation.end.hcl"], tokens.syntax.keyword.fg),
];

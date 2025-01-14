import tokens from "../generated/tokens.json" assert { type: "json" };
import { scope } from "../utils.js";

export default [
  scope("source.ini", tokens.syntax.fg),
  scope("keyword.other.definition.ini", tokens.syntax.variable.fg),
  scope("punctuation.definition.entity.ini", tokens.syntax.keyword.fg),
  scope("entity.name.section.group-title.ini", tokens.syntax.keyword.fg),
];

import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => [
  scope("source.ini", tokens.syntax.fg),
  scope("keyword.other.definition.ini", tokens.syntax.variable.fg),
  scope("punctuation.definition.entity.ini", tokens.syntax.keyword.fg),
  scope("entity.name.section.group-title.ini", tokens.syntax.keyword.fg),
];

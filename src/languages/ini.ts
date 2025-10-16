import { scope } from "../utils.ts";

export default (tokens: Record<string, any>) => {
  return [
    scope("source.ini", tokens.syntax.fg),
    scope("keyword.other.definition.ini", tokens.syntax.property.fg),
    scope(["punctuation.definition.entity.ini", "source.ini"], tokens.syntax.keyword.fg),
    scope("entity.name.section.group-title.ini", tokens.syntax.keyword.fg),
  ];
};

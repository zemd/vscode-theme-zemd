import tokens from "../generated/tokens.json";
import { scope } from "../utils.js";

export default [
  scope(["keyword.other.DML.sql", "keyword.other.data-integrity.sql"], tokens.syntax.keyword.fg),
  scope("keyword.operator.star.sql", tokens.syntax.operator.fg),
  scope(["keyword.other.sql", "keyword.other.alias.sql", "keyword.other.LUW.sql"], tokens.syntax.keyword.fg, "bold"),
  scope("constant.numeric.sql", tokens.syntax.number.fg, "underline"),
  scope("constant.other.database-name.sql", tokens.syntax.variable.fg, "bold"),
  scope("constant.other.table-name.sql", tokens.syntax.enum.fg),
  scope(
    ["support.function.security.sql", "support.function.aggregate.sql", "support.function.string.sql"],
    tokens.syntax.function.fg
  ),
  scope(
    [
      "string.quoted.single.sql",
      "punctuation.definition.string.begin.sql",
      "punctuation.definition.string.end.sql",
      "string.quoted.double.sql",
    ],
    tokens.syntax.string.fg
  ),
  scope(["keyword.operator.comparison.sql"], tokens.syntax.operator.fg),
  scope(["punctuation.section.scope.begin.sql", "punctuation.section.scope.end.sql"], tokens.syntax.punctuation.fg),
];

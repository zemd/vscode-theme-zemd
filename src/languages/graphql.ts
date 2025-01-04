import { scope } from "../utils.js";
import tokens from "../generated/tokens.json" assert { type: "json" };

export default [
  scope(
    [
      "keyword.type.graphql",
      "support.type.builtin.graphql",
      "keyword.fragment.graphql",
      "keyword.on.graphql",
      "keyword.implements.graphql",
      "keyword.input.graphql",
      "keyword.interface.graphql",
      "keyword.enum.graphql",
      "keyword.scalar.graphql"
    ],
    tokens.syntax.keyword.fg,
  ),
  scope("variable.graphql", tokens.syntax.property.fg),
  scope(["punctuation.operation.graphql", "punctuation.colon.graphql"], tokens.syntax.punctuation.fg),
  scope(["variable.parameter.graphql"], tokens.syntax.parameter.fg, "italic"),
  scope("entity.name.fragment.graphql", tokens.syntax.variable.fg),
  scope(["support.type.enum.graphql"], tokens.syntax.enum.fg),
  scope(["constant.character.enum.graphql"], tokens.syntax.enumMember.fg),
  scope(["support.type.graphql", "entity.scalar.graphql"], tokens.syntax.type.fg),
  scope(["keyword.operator.nulltype.graphql"], tokens.syntax.punctuation.fg)
];

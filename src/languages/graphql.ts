import { scope } from "../utils.js";
import tokens from "../generated/tokens.json";

export default [
  scope(["keyword.type.graphql", "support.type.builtin.graphql", "keyword.fragment.graphql", "keyword.on.graphql"], tokens.syntax.keyword.fg),
  scope("variable.graphql", tokens.syntax.property.fg),
  scope(["punctuation.operation.graphql", "punctuation.colon.graphql"], tokens.syntax.punctuation.fg),
  scope(["variable.parameter.graphql"], tokens.syntax.parameter.fg, "italic"),
  scope("entity.name.fragment.graphql", tokens.syntax.variable.fg),
];

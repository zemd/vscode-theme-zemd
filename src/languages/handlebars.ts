import tokens from "../generated/tokens.json" assert { type: "json" };
import { scope } from "../utils.js";

export default [
  scope(["variable.parameter.handlebars"], tokens.syntax.parameter.fg),
  scope(["support.constant.handlebars"], tokens.syntax.keyword.fg),
  scope(["punctuation.definition.tag.html"], tokens.syntax.punctuation.fg),
  scope(["entity.name.tag.block.any.html"], tokens.syntax.function.fg),
];

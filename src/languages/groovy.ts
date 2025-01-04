import tokens from "../generated/tokens.json" assert { type: "json" };
import { scope } from "../utils.js";

export default [
  scope(
    [
      "string.quoted.single.groovy",
      "punctuation.definition.string.begin.groovy",
      "punctuation.definition.string.end.groovy",
      "string.quoted.double.groovy",
    ],
    tokens.syntax.string.fg,
  ),
  scope(
    ["punctuation.definition.method-parameters.begin.groovy", "punctuation.definition.method-parameters.end.groovy"],
    tokens.syntax.punctuation.fg,
  ),
];

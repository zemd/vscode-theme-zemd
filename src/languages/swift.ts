import tokens from "../generated/tokens.json" assert { type: "json" };
import { scope } from "../utils.js";

export default [
  scope(
    ["punctuation.section.function.begin.swift", "punctuation.section.function.end.swift"],
    // tokens.syntax.punctuation.fg
    "#ff000000"
  ),
  scope(["support.function.any-method.swift"], tokens.syntax.function.fg),
];

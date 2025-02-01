import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => {
  return [
    scope(
      ["punctuation.section.function.begin.swift", "punctuation.section.function.end.swift"],
      // tokens.syntax.punctuation.fg
      "#ff000000",
    ),
    scope(["support.function.any-method.swift"], tokens.syntax.function.fg),
  ];
};

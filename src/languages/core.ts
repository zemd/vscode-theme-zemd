import tokens from "../generated/tokens.json" assert { type: "json" };
import punctuation from "./core/punctuation.js";
import { scope } from "../utils.js";

export default [
  scope("foreground", tokens.syntax.fg),
  scope("comment", tokens.syntax.comment.fg, "italic"),
  scope("source.ignore", tokens.syntax.dimmed.fg),
  // Functions
  scope("entity.name.function", tokens.syntax.function.fg), // literally the function name. should be defined, since Server Language can mistakenly identify some functions as `namespace` which has different color
  scope("storage.type.function", tokens.syntax["function.declaration"].fg), // the word `function` itself
  ...punctuation,
];

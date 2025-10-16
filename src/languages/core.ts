import punctuation from "./core/punctuation.ts";
import { scope } from "../utils.ts";

export default (tokens: Record<string, any>) => {
  return [
    scope("foreground", tokens.syntax.fg),
    scope("comment", tokens.syntax.comment.fg, "italic"),
    scope("source.ignore", tokens.syntax.dimmed.fg),
    // Functions
    scope("entity.name.function", tokens.syntax.function.fg), // literally the function name. should be defined, since Server Language can mistakenly identify some functions as `namespace` which has different color
    scope("storage.type.function", tokens.syntax["function-declaration"].fg), // the word `function` itself
    ...punctuation(tokens),
  ];
};

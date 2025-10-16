import { scope } from "../utils.ts";

export default (tokens: Record<string, any>) => {
  return [
    scope(
      [
        "storage.type.var.gdscript",
        "keyword.control.gdscript",
        "keyword.language.gdscript",
        "keyword.control.flow.gdscript",
      ],
      tokens.syntax.keyword.fg,
      "bold",
    ),
    scope(["variable.other.gdscript", "meta.variable.gdscript"], tokens.syntax.variable.fg),
    scope(["support.function.any-method.gdscript"], tokens.syntax.function.fg),
    scope(
      ["punctuation.definition.arguments.end.gdscript", "punctuation.definition.arguments.begin.gdscript"],
      tokens.syntax.punctuation.fg,
    ),
    scope(["entity.name.type.class.builtin.gdscript"], tokens.syntax.class.fg),
  ];
};

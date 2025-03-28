import { scope as scopeOrig, type TFontStyle } from "../utils.js";

const decorateScope = (scp: string, modifiers = ["ts", "tsx", "js", "jsx"]): string[] => {
  return modifiers.map((m) => {
    return `${scp}.${m}`;
  });
};

const scope = (initialScope: string | string[], foreground: string, style?: TFontStyle, modifiers?: string[]) => {
  const scp: string[] =
    typeof initialScope === "string"
      ? decorateScope(initialScope, modifiers)
      : initialScope
          .map((scp) => {
            return decorateScope(scp, modifiers);
          })
          .flat(3);
  return scopeOrig(scp, foreground, style);
};

export default (tokens: Record<string, any>) => {
  return [
    scope(
      [
        "keyword.control.export",
        "keyword.control.import",
        "keyword.control.from",
        "keyword.control.flow", // `return`
        "keyword.operator.expression.typeof",
        "storage.type.property", // getter, setter
        "variable.language.super",
        "keyword.operator.expression.import", // inline `import`
        "support.type.object.module", // `module.exports`
        "keyword.operator.expression.instanceof",
      ],
      tokens.syntax.keyword.fg,
      "bold",
    ),

    scope(
      [
        "keyword.operator.new",
        "keyword.control.conditional",
        "keyword.control.trycatch",
        "keyword.control.loop",
        "keyword.operator.expression.in",
        "storage.modifier.async",
        "storage.type.interface", // interface NewInterface {}, the `interface` is storage.type.interface
        "storage.type.type", // type NewType, the `type` is storage.type.type
        "keyword.operator.expression.of",
        "keyword.control.as",
        "storage.type", // const variable = 1; the `const` is storage.type
        "storage.modifier", // const enum EnumName, the `const` is storage.modifier
        "support.type.builtin",
        "support.type.primitive",
        "constant.language.null",
        "constant.language.undefined",
        "constant.language.boolean.false",
        "constant.language.boolean.true",
        "storage.type.function.arrow",
        "keyword.control.switch",
        "variable.language.this",
        "storage.type.class",
        "keyword.control.type", // import `type` SomeType
        "keyword.control.default", // export `default`
        "keyword.operator.expression.delete",
        "storage.type.namespace",
        // "variable.other.readwrite.ts" // ???
      ],
      tokens.syntax.keyword.fg,
    ),

    scope("keyword.operator.logical", tokens.syntax.fg),
    scope(
      [
        "keyword.operator.assignment",
        "keyword.operator.assignment.compound",
        "keyword.operator.relational",
        "keyword.operator.optional",
        "keyword.operator.ternary",
      ],
      tokens.syntax.operator.fg,
    ),
    scope(
      [
        // "variable.other.object",
        "variable.other.constant.property",
        "support.variable.property.importmeta",
        "entity.name.type.module",
      ],
      tokens.syntax.variable.fg,
    ),
    scope(
      [
        "variable.other.property",
        "entity.name.label",
        "variable.other.object.property",
        "support.variable.property",
        "variable.object.property",
        "meta.object-literal.key",
      ],
      tokens.syntax.property.fg,
    ),
    scope(["string.quoted.single", "string.template", "string.quoted.double"], tokens.syntax.string.fg),
    scope("variable.parameter", "", "italic"),
    scope(["constant.numeric.decimal", "constant.numeric.hex"], tokens.syntax.number.fg, "underline"),
    scope("string.regexp", tokens.syntax.regexp.fg),

    // ts, tsx specific
    scope(
      [
        "keyword.operator.expression.keyof",
        "storage.type.enum",
        "keyword.operator.expression.is",
        "keyword.control.satisfies",
      ],
      tokens.syntax.keyword.fg,
      undefined,
      ["ts", "tsx"],
    ),

    // JSX
    scope("meta.jsx.children", tokens.syntax.fg),
    scope("support.class.component", tokens.syntax.tag.fg),
    scope("entity.name.tag", tokens.syntax.function.fg),
    scope("entity.other.attribute-name", tokens.syntax.parameter.fg, "italic"),

    // Astro
    scopeOrig(["entity.name.tag.astro"], tokens.syntax.function.fg),
    scopeOrig("support.class.component.astro", tokens.syntax.tag.fg),
    scopeOrig("entity.other.attribute-name.astro", tokens.syntax.parameter.fg, "italic"),
    scopeOrig(
      ["punctuation.definition.string.begin.astro", "string.quoted.astro", "punctuation.definition.string.end.astro"],
      tokens.syntax.string.fg,
    ),

    // JSDOC
    scopeOrig(["punctuation.definition.block.tag.jsdoc", "storage.type.class.jsdoc"], tokens.syntax.keyword.fg),
    scopeOrig("entity.name.type.instance.jsdoc", tokens.syntax.dimmed.fg, "italic"),
    scopeOrig(
      [
        "punctuation.definition.bracket.curly.begin.jsdoc",
        "punctuation.definition.bracket.curly.end.jsdoc",
        "punctuation.accessor.ts",
      ],
      tokens.syntax.punctuation.fg,
    ),
    scopeOrig("variable.other.jsdoc", tokens.syntax.dimmed.fg),

    scope(["keyword.operator.type"], tokens.syntax.operator.fg),
    scope(["entity.name.type"], tokens.syntax.enum.fg),
    scope(["entity.name.type.alias"], tokens.syntax.interface.fg, "italic"),
    scope(["keyword.operator.expression.infer"], tokens.syntax.namespace.fg),
    scope(["entity.name.type.interface"], tokens.syntax.interface.fg, "italic"),
    scope(["entity.other.inherited-class"], tokens.syntax.function.fg),
    scope(["variable.other.constant", "variable.other.constant.object"], tokens.syntax.variable.fg),
    // scope(["variable.other.readwrite"], "", "italic"),
    scope(["constant.language.import-export-all"], tokens.syntax.punctuation.fg),
    scope(["keyword.operator.spread", "keyword.operator.rest"], tokens.syntax.punctuation.fg),
  ];
};

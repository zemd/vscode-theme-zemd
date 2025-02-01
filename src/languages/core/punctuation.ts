import { scope } from "../../utils.js";

export default (tokens: Record<string, any>) => [
  scope(
    [
      "punctuation.definition.block", // origin: tsx, ts, js
      "punctuation.terminator.statement",
      "punctuation.definition.typeparameters.begin", // origin: tsx, ts, js
      "punctuation.definition.typeparameters.end", // origin: tsx, ts, js
      "punctuation.definition.tag",
      "punctuation.section.embedded.begin",
      "punctuation.section.embedded.end",
      "punctuation.separator.dictionary.pair",
      "punctuation.definition.dictionary.begin",
      "punctuation.definition.dictionary.end",
      "punctuation.definition.array.begin",
      "punctuation.definition.array.end",
      "punctuation.definition.binding-pattern.object",
      "punctuation.separator.comma", // origin: tsx, ts, js
      "punctuation.definition.parameters.begin",
      "punctuation.definition.parameters.end",
      "punctuation.definition.binding-pattern.array", // origin: tsx, ts, js
      "punctuation.section.block.begin.bracket.curly",
      "punctuation.section.block.end.bracket.curly",
      "punctuation.section.parameters.begin.bracket.round",
      "punctuation.section.parameters.end.bracket.round",
      "punctuation.section.arguments.begin.bracket.round",
      "punctuation.section.arguments.end.bracket.round",
      "punctuation.section.parens.begin.bracket.round",
      "punctuation.section.parens.end.bracket.round",
      "meta.brace.round", // origin: tsx, ts, js
      "punctuation.separator.parameter", // origin: tsx, ts, js
      "keyword.operator.type.annotation", // origin: tsx, ts, js
      "meta.brace.square", // origin: tsx, ts, js
      "punctuation.definition.section.case-statement", // origin: tsx, ts, js
      "punctuation.definition.string.template.begin", // origin: tsx, ts, js
      "punctuation.definition.string.template.end", // origin: tsx, ts, js
      "punctuation.separator.key-value", // origin: tsx, ts, js
      "punctuation.destructuring", // origin: tsx, ts, js
    ],
    tokens.syntax.punctuation.fg,
  ),
  scope(
    [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    tokens.syntax.punctuation.fg,
  ),
  scope("punctuation.definition.comment", tokens.syntax.comment.fg, "italic"),
];

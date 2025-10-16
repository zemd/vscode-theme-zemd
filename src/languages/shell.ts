import { scope } from "../utils.ts";

export default (tokens: Record<string, any>) => {
  return [
    scope("punctuation.section.arithmetic.shell", tokens.syntax.punctuation.fg),
    scope(
      [
        "punctuation.definition.evaluation.parens.begin.shell",
        "punctuation.definition.evaluation.parens.end.shell",
        "punctuation.definition.logical-expression.shell",
        "punctuation.section.function.definition.shell",
        "punctuation.terminator.case-clause.shell",
        "punctuation.definition.variable.makefile",
        "punctuation.definition.subshell",
      ],
      tokens.syntax.punctuation.fg,
    ),
    scope("entity.name.command.shell", "", "bold"),
    scope(
      [
        "string.unquoted.argument.shell",
        "string.quoted.double.shell",
        "punctuation.definition.string.end.shell",
        "punctuation.definition.string.begin.shell",
        "string.quoted.single.shell",
      ],
      tokens.syntax.string.fg,
    ),
    scope(
      [
        "variable.other.assignment.shell",
        "variable.other.loop.shell",
        "variable.parameter.positional.all.shell",
        "variable.other.normal.shell",
        "variable.language.special.shell",
        "variable.parameter.positional.shell",
        "variable.other.makefile",
      ],
      tokens.syntax.variable.fg,
    ),
    scope(
      [
        "constant.other.option.dash.shell",
        "constant.other.option",
        "keyword.control.shell",
        "keyword.operator.logical.shell",
        "keyword.control.then.shell",
        "keyword.control.do.shell",
        "keyword.control.else.shell",
        "meta.scope.case-pattern.shell",
        "support.function.target.PHONY.makefile",
        "keyword.control.@.makefile",
        "keyword.control.include.makefile",
        "keyword.control.for.shell",
        "keyword.control.in.shell",
        "keyword.control.done.shell",
        "keyword.control.if.shell",
        "keyword.control.fi.shell",
      ],
      tokens.syntax.keyword.fg,
    ),
    scope(["support.function.shell.makefile"], tokens.syntax.function.fg),
    scope(["storage.modifier.export.shell"], tokens.syntax.keyword.fg, "bold"),
    scope("constant.numeric.integer.shell", tokens.syntax.number.fg, "underline"),
    scope("keyword.operator.assignment.shell", tokens.syntax.operator.fg),
  ];
};

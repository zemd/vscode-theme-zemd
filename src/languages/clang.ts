import { scope } from "../utils.js";

export default (tokens: Record<string, any>) => {
  return [
    scope(
      [
        "keyword.control.directive.include.c",
        "storage.modifier.c",
        "keyword.control.c",
        "storage.type.built-in.c",
        "storage.type.built-in.primitive.c",
        "keyword.control.directive.include.cpp",
        "storage.type.built-in.cpp",
        "storage.type.built-in.primitive.cpp",
        "storage.type.extern.cpp",
        "storage.modifier.static.cpp",
        "storage.modifier.specifier.static.cpp",
        "storage.type.enum.cpp",
        "keyword.other.typedef.cpp",
        "storage.modifier.specifier.const.cpp",
        "storage.modifier.specifier.extern.cpp",
        "keyword.control.directive.conditional.defined.cpp",
        "keyword.control.if.cpp",
        "keyword.control.return.cpp",
        "entity.name.scope-resolution.parameter.cpp",
        "keyword.control.else.cpp",
        "entity.name.scope-resolution.cpp",
        "keyword.control.throw.cpp",
        "keyword.control.switch.cpp",
        "keyword.control.case.cpp",
        "keyword.control.break.cpp",
        "storage.type.struct.cpp",
        "keyword.control.for.cpp",
        "storage.type.struct.declare.cpp",
        "storage.type.struct.c",
        "keyword.control.directive.include.objc",
        "keyword.control.directive.import.objc",
        "storage.type.built-in.primitive.objc",
        "support.class.cocoa.objc",
        "keyword.control.directive.import.c",
        "punctuation.definition.directive.objcpp",
        "keyword.control.directive.include.objcpp",
        "keyword.control.directive.import.objcpp",
        "storage.type.built-in.primitive.objcpp",
        "keyword.control.objcpp",
        "storage.type.built-in.objcpp",
        "entity.scope.name.objcpp",
        "keyword.control.switch.c",
        "keyword.control.case.c",
        "keyword.operator.cast.reinterpret_cast.cpp",
        "constant.language.nullptr.cpp",
        "keyword.operator.new.cpp",
        "support.type.posix-reserved.c",
        "support.type.built-in.posix-reserved.cpp",
        "storage.type.namespace.definition.cpp",
        "storage.modifier.specifier.functional.pre-parameters.constexpr.cpp",
        "storage.type.class.cpp",
        "storage.type.modifier.access.control.public.cpp",
        "storage.type.modifier.access.control.private.cpp",
        "storage.type.modifier.access.control.protected.cpp",
        "storage.type.template.cpp",
        "storage.modifier.specifier.functional.post-parameters.const.cpp",
        "keyword.other.operator.overload.cpp",
        "storage.type.namespace.alias.cpp",
        "entity.name.scope-resolution.namespace.alias.cpp",
        "keyword.other.using.directive.cpp",
        "entity.name.scope-resolution.template.call.cpp",
        "keyword.control.while.cpp",
        "storage.modifier.cpp",
        "storage.modifier.specifier.functional.pre-parameters.explicit.cpp",
        "keyword.control.catch.cpp",
        "keyword.control.try.cpp",
        "variable.language.this.cpp",
        "keyword.operator.cast.static_cast.cpp",
        "storage.type.modifier.access.public.cpp",
        "keyword.operator.delete.array.cpp",
        "keyword.other.using.directive.cuda-cpp",
        "keyword.control.directive.include.cuda-cpp",
        "entity.name.scope-resolution.cuda-cpp",
        "keyword.operator.cast.static_cast.cuda-cpp",
        "support.type.built-in.posix-reserved.cuda-cpp",
        "storage.type.built-in.primitive.cuda-cpp",
        "constant.language.true.cpp",
        "storage.modifier.const.cpp",
      ],
      tokens.syntax.keyword.fg,
    ),
    scope("storage.modifier.specifier.extern.cpp", "", "bold"),
    scope("keyword.operator.sizeof.c", tokens.syntax.function.fg),
    scope(
      [
        "keyword.control.directive.conditional.ifndef.cpp",
        "keyword.control.directive.define.cpp",
        "keyword.control.directive.endif.cpp",
        "keyword.control.directive.pragma.cpp",
        "keyword.control.directive.conditional.if.cpp",
        "keyword.control.directive.elif.cpp",
        "keyword.control.directive.else.cpp",
        "keyword.control.directive.conditional.ifdef.cpp",
        "keyword.control.directive.diagnostic.error.cpp",
        "variable.other.property.cpp",
        "variable.other.object.property.cpp",
        "variable.other.member.c",
        "keyword.control.directive.define.c",
        "keyword.control.directive.conditional.c",
        "support.function.any-method.name-of-parameter.objc",
        "variable.other.member.objc",
        "variable.other.member.objcpp",
        "keyword.control.directive.undef.c",
        "storage.type.template.argument.typename.cpp",
        "keyword.control.directive.undef.cpp",
        "keyword.control.directive.pragma.cuda-cpp",
      ],
      tokens.syntax.property.fg,
    ),
    scope(
      [
        "variable.parameter.preprocessor.cpp",
        "variable.parameter.cpp",
        "variable.parameter.probably.c",
        "variable.parameter.probably.objc",
        "variable.parameter.probably.objcpp",
        "storage.type.template.argument.class.cpp",
      ],
      tokens.syntax.parameter.fg,
      "italic",
    ),
    scope(
      [
        "constant.language.c",
        "entity.other.attribute-name.pragma.preprocessor.cpp",
        "meta.enum.definition.cpp",
        "variable.other.object.access.cpp",
        "constant.language.NULL.cpp",
        "variable.other.object.declare.cpp",
        "variable.other.object.access.c",
        "meta.body.struct.cpp",
        "constant.language.objc",
        "support.variable.foundation.objc",
        "variable.other.readwrite.static.mac-classic.c",
        "variable.other.object.access.objcpp",
        "meta.conditional.case.c",
        "variable.other.object",
        "storage.type.class.doxygen.cpp",
      ],
      tokens.syntax.variable.fg,
    ),
    scope(
      [
        "string.quoted.double.include.c",
        "string.quoted.double.include.cpp",
        "string.quoted.double.cpp",
        "string.quoted.single.c",
        "string.quoted.double.include.objc",
        "punctuation.definition.string.begin.objc",
        "punctuation.definition.string.end.objc",
        "string.quoted.double.include.objcpp",
        "punctuation.definition.string.begin.objcpp",
        "punctuation.definition.string.end.objcpp",
        "string.quoted.double.c",
        "punctuation.definition.string.begin.c",
        "punctuation.definition.string.end.c",
      ],
      tokens.syntax.string.fg,
    ),
    scope(
      [
        "constant.numeric.decimal.c",
        "keyword.other.unit.hexadecimal.cpp",
        "constant.numeric.hexadecimal.cpp",
        "constant.numeric.decimal.cpp",
        "constant.numeric.decimal.point.cpp",
        "keyword.other.unit.suffix.floating-point.cpp",
        "keyword.other.unit.hexadecimal.c",
        "constant.numeric.hexadecimal.c",
        "constant.numeric.decimal.point.c",
        "constant.numeric.decimal.objc",
        "constant.numeric.decimal.point.objc",
        "constant.numeric.decimal.objcpp",
        "constant.numeric.decimal.point.objcpp",
        "constant.numeric.decimal.cuda-cpp",
        "keyword.other.unit.suffix.floating-point.cuda-cpp",
        "constant.numeric.decimal.point.cuda-cpp",
        "keyword.other.unit.exponent.decimal.cpp",
        "keyword.operator.minus.exponent.decimal.cpp",
        "constant.numeric.exponent.decimal.cpp",
      ],
      tokens.syntax.number.fg,
      "underline",
    ),
    scope(
      [
        "keyword.operator.assignment.cpp",
        "keyword.operator.assignment.objcpp",
        "keyword.operator.assignment.c",
        "keyword.operator.assignment.cuda-cpp",
      ],
      tokens.syntax.operator.fg,
    ),
    scope("entity.name.type.enum.cpp", tokens.syntax.enum.fg),
    scope("variable.other.enummember.cpp", tokens.syntax.enumMember.fg),
    scope(
      [
        "punctuation.separator.delimiter.comma.cpp",
        "punctuation.separator.scope-resolution.parameter.cpp",
        "punctuation.definition.begin.bracket.square",
        "punctuation.definition.end.bracket.square",
        "punctuation.separator.scope-resolution.cpp",
        "punctuation.separator.scope-resolution.function.call.cpp",
        "punctuation.separator.pointer-access.cpp",
        "punctuation.separator.pointer-access.c",
        "punctuation.separator.delimiter.c",
        "punctuation.section.scope.begin.objc",
        "punctuation.section.scope.end.objc",
        "punctuation.separator.pointer-access.objcpp",
        "punctuation.separator.namespace.access.objcpp",
        "punctuation.section.angle-brackets.begin.template.definition.cpp",
        "punctuation.section.angle-brackets.end.template.definition.cpp",
        "punctuation.separator.scope-resolution.namespace.alias.cpp",
        "punctuation.section.angle-brackets.begin.template.call.cpp",
        "punctuation.section.angle-brackets.end.template.call.cpp",
        "keyword.operator.delete.array.bracket.cpp",
      ],
      tokens.syntax.punctuation.fg,
    ),
    scope("entity.name.other.preprocessor.macro.predefined.probably.VA_ARGS.cpp", tokens.syntax.macro.fg),
  ];
};

import type { SemanticTokenColors, Tokens } from "../schemas/index.ts";
import { semantic } from "../utils.ts";

export const buildSemanticColors = (tokens: Tokens): SemanticTokenColors => {
  return {
    // enum: semantic(tokens.syntax.enum.foreground),
    // "interface.defaultLibrary": semantic(tokens.syntax.interface.foreground),
    // struct: semantic(tokens.syntax.struct.foreground),
    // "struct.declaration": semantic(tokens.syntax.class.foreground),
    typeParameter: semantic(tokens.syntax.variable.foreground, "italic"),
    "hcl-blockType": semantic(tokens.syntax.keyword.foreground),
    parameter: semantic(tokens.syntax.parameter.foreground, "italic"),
    "hcl-blockLabel": semantic(tokens.syntax.function.foreground, "bold"),
    // property: semantic(tokens.syntax.property.foreground),
    // enumMember: semantic(tokens.syntax.enumMember.foreground),
    // decorator: semantic(tokens.syntax.decorator.foreground),
    // event: semantic(tokens.syntax.event.foreground),
    function: semantic(tokens.syntax.function.foreground),
    method: semantic(tokens.syntax.method.foreground),
    macro: semantic(tokens.syntax.macro.foreground),
    // label: semantic(tokens.syntax.label.foreground),
    comment: semantic(tokens.syntax.comment.foreground),
    string: semantic(tokens.syntax.string.foreground),
    keyword: semantic(tokens.syntax.keyword.foreground),
    number: semantic(tokens.syntax.number.foreground),
    regexp: semantic(tokens.syntax.regexp.foreground),
    // operator: semantic(tokens.syntax.operator.foreground),
  };
};

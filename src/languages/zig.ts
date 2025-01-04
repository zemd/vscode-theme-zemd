import tokens from "../generated/tokens.json" assert { type: "json" };
import { scope } from "../utils.js";

export default [
  scope("source.zig", tokens.syntax.fg),
  scope("keyword.type.zig", tokens.syntax.fg),
  scope("keyword.structure.zig", tokens.syntax.keyword.fg, "underline"),
  scope(
    [
      "keyword.storage.zig",
      "support.function.builtin.zig",
      "keyword.control.flow.zig",
      "keyword.control.trycatch.zig",
      "keyword.default.zig",
    ],
    tokens.syntax.keyword.fg,
    "bold",
  ),
  scope("string.quoted.double.zig", tokens.syntax.string.fg),
  scope(["keyword.operator.bitwise.zig"], tokens.syntax.operator.fg),
  scope("variable.zig", tokens.syntax.variable.fg),
  scope(
    ["keyword.constant.bool.zig", "keyword.control.conditional.zig", "keyword.control.repeat.zig"],
    tokens.syntax.keyword.fg,
  ),
  scope(["constant.numeric.float.zig", "constant.numeric.hexfloat.zig"], tokens.syntax.number.fg, "underline"),
];

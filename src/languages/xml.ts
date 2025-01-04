import { scope } from "./../utils.js";
import tokens from "../generated/tokens.json" assert { type: "json" };

export default [
  scope("entity.name.tag.localname.xml", tokens.syntax.function.fg),
  scope(
    ["entity.other.attribute-name.localname.xml", "entity.other.attribute-name.xml"],
    tokens.syntax.parameter.fg,
    "italic"
  ),
  scope("string.quoted.double.xml", tokens.syntax.string.fg),
  scope("entity.name.tag.xml", tokens.syntax.keyword.fg),
];

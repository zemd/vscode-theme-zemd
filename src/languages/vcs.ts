import tokens from "../generated/tokens.json";
import { scope } from "../utils.js";

export default [
  scope("meta.diff.header.git", tokens.syntax.keyword.fg),
  scope("meta.diff.index.git", tokens.syntax.variable.fg),
  // scope(["meta.diff.header.from-file", "meta.diff.header.to-file"], "#73c991"),
  // scope("markup.deleted.diff", "#BE6780"),
  // scope("markup.inserted.diff", "#70865e"),
  // scope("meta.embedded.block.diff", "#818181"),
];

import tokens from "../generated/tokens.json" assert { type: "json" };
import chroma from "chroma-js";

export default {
  "titleBar.activeBackground": tokens.panel.secondary.bg,
  "titleBar.activeForeground": tokens.panel.secondary.fg,
  "titleBar.inactiveBackground": chroma(tokens.panel.secondary.bg).brighten(0.4).hex(),
  "titleBar.inactiveForeground": chroma(tokens.panel.secondary.fg).darken(0.2).hex(),
  "titleBar.border": tokens.panel.secondary.border,
};

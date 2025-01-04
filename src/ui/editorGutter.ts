import tokens from "../generated/tokens.json" assert { type: "json" };

export default {
  "editorGutter.background": tokens.canvas.bg,
  "editorLineNumber.foreground": tokens.panel.tertiary.fg,
  "editorLineNumber.activeForeground": tokens.panel.active.fg,
};

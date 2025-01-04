import tokens from "../generated/tokens.json" assert { type: "json" };
import chroma from "chroma-js";

const editorSelectionOrHoverColors = {
  "editor.selectionBackground": chroma(tokens.canvas.selection.bg).alpha(0.8).hex(),
  "editor.selectionHighlightBackground": "#00000000",
  "editor.wordHighlightBackground": "#00000000",
  "editor.wordHighlightBorder": tokens.canvas.highlight.border,
  "editor.wordHighlightTextBackground": chroma(tokens.canvas.selection.bg).alpha(0.55).hex(),
  "editor.wordHighlightStrongBackground": chroma(tokens.canvas.selection.bg).alpha(0.55).hex(),
  "editor.hoverHighlightBackground": chroma(tokens.canvas.highlight.bg).alpha(0.7).hex(),
  "editor.lineHighlightBackground": chroma(tokens.canvas.active.bg).alpha(0.8).hex(),
  "editorLink.activeForeground": tokens.canvas.active.fg,
};

const editorErrorsAndWarningsColors = {
  "editorError.foreground": tokens.canvas.error.fg, // error squiggles
  "editorError.background": chroma(tokens.canvas.error.bg).alpha(0.25).hex(),
  "editorError.border": "#00000000",

  "editorWarning.foreground": tokens.canvas.warning.fg,
  "editorWarning.background": chroma(tokens.canvas.warning.bg).alpha(0.25).hex(),
  "editorWarning.border": "#00000000",

  "editorInfo.foreground": tokens.canvas.info.fg,
  "editorInfo.background": chroma(tokens.canvas.info.bg).alpha(0.25).hex(),
  "editorInfo.border": "#00000000",
};

export default {
  "editor.background": tokens.canvas.bg,
  "editor.foreground": tokens.canvas.fg,

  ...editorSelectionOrHoverColors,
  ...editorErrorsAndWarningsColors,
} as const;

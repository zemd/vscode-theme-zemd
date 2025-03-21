export default (tokens: Record<string, any>) => {
  return {
    "editorGutter.background": tokens.canvas.bg,
    "editorLineNumber.foreground": tokens.panel.tertiary.fg,
    "editorLineNumber.activeForeground": tokens.panel.active.fg,
  };
};

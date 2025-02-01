import chroma from "chroma-js";

export default (tokens: Record<string, any>) => ({
  "peekView.border": chroma(tokens.color.blue[500]).alpha(0.5059).hex(),
  "peekViewEditor.background": tokens.color.blue[1000],
  "peekViewEditorGutter.background": tokens.color.blue[900],
  "peekViewEditor.matchHighlightBackground": chroma(tokens.color.orange[600]).alpha(0.4941).hex(),
  "peekViewEditor.matchHighlightBorder": tokens.color.transparent,
  "peekViewResult.background": tokens.color.gray[1500],
  "peekViewResult.fileForeground": tokens.color.gray[200],
  "peekViewResult.lineForeground": tokens.color.gray[300],
  "peekViewResult.matchHighlightBackground": chroma(tokens.color.orange[500]).alpha(0.4471).hex(),
  "peekViewResult.selectionBackground": chroma(tokens.color.blue[550]).alpha(0.2588).hex(),
  "peekViewResult.selectionForeground": tokens.color.gray[250],
  "peekViewTitle.background": tokens.color.gray[1600],
  "peekViewTitleDescription.foreground": chroma(tokens.color.gray[220]).alpha(0.702).hex(),
  "peekViewTitleLabel.foreground": tokens.color.white,
});

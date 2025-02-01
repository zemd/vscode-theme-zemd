import chroma from "chroma-js";

const editorHoverWidgetColors = (tokens: Record<string, any>) => ({
  "editorHoverWidget.foreground": tokens.color.gray[220],
  "editorHoverWidget.background": tokens.color.gray[780],
  "editorHoverWidget.border": tokens.color.gray[630],
});

const editorSuggestWidgetColors = (tokens: Record<string, any>) => ({
  "editorSuggestWidget.background": tokens.color.gray[620],
  "editorSuggestWidget.border": tokens.color.gray[630],
  "editorSuggestWidget.foreground": tokens.color.gray[280],
  "editorSuggestWidget.highlightForeground": tokens.color.blue[420],
  "editorSuggestWidget.selectedBackground": chroma(tokens.color.red[800]).alpha(0.3294).hex(),
});

export default (tokens: Record<string, any>) => ({
  ...editorHoverWidgetColors(tokens),
  ...editorSuggestWidgetColors(tokens),
});

import chroma from "chroma-js";

export default (tokens: Record<string, any>) => ({
  "activityBar.foreground": "#ffffff",
  "activityBar.background": tokens.panel.secondary.bg,
  "activityBar.border": tokens.panel.secondary.border,
  "activityBar.inactiveForeground": chroma("#ffffff").alpha(0.4).hex(),
  "activityBarBadge.foreground": "#ffffff",
  "activityBarBadge.background": tokens.panel.active.bg,
});

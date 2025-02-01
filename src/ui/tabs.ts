export default (tokens: Record<string, any>) => {
  return {
    "editorGroupHeader.tabsBackground": tokens.widget.bg,

    "tab.activeForeground": tokens.widget.active.fg,
    "tab.activeBackground": tokens.widget.active.bg,
    "tab.activeBorder": tokens.widget.active.border,
    "tab.activeBorderTop": tokens.widget.active.accent,

    "tab.border": tokens.widget.border,
    "tab.inactiveBackground": tokens.widget.bg,
    "tab.inactiveForeground": tokens.widget.fg,

    "tab.hoverBackground": tokens.widget.hover.bg,

    "breadcrumb.background": tokens.panel.dimmed.bg,
    "breadcrumb.foreground": tokens.panel.dimmed.fg,
    "breadcrumb.focusForeground": tokens.panel.dimmed.activeFg,
  };
};

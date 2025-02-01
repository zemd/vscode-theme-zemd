export default (tokens: Record<string, any>) => {
  return {
    "statusBar.foreground": tokens.panel.fg,
    "statusBar.background": tokens.panel.bg,
    "statusBarItem.hoverBackground": tokens.panel.secondary.bg,
    "statusBar.debuggingBackground": tokens.panel.debug.bg,
    "statusBar.debuggingForeground": tokens.panel.debug.fg,
    "statusBar.noFolderBackground": tokens.panel.special1.bg,
    "statusBar.noFolderForeground": tokens.panel.special1.fg,
    "statusBarItem.remoteBackground": tokens.panel.special2.bg,
    "statusBarItem.remoteForeground": tokens.panel.special2.fg,
  };
};

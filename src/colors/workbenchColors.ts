import chroma from "chroma-js";
import type {
  ActivityBarColors,
  BaseColors,
  BreadcrumbsColors,
  DiffEditorColors,
  EditorColors,
  EditorGroupsAndTabsColors,
  EditorWidgetColors,
  GitColors,
  IntegratedTerminalColors,
  ListsAndTreesColors,
  MergeConflictsColors,
  NotificationColors,
  PeekViewColors,
  SideBarColors,
  StatusBarColors,
  TitleBarColors,
  Tokens,
  WorkbenchColors,
} from "../schemas/index.ts";

export const buildWorkbenchColors = (tokens: Tokens): WorkbenchColors => {
  const baseColors: BaseColors = {
    foreground: tokens.m3.onSurface, // root.foreground
  };

  const activityBar: ActivityBarColors = {
    "activityBar.foreground": "#ffffff",
    // "activityBar.background": tokens.panel.secondary.bg,
    // "activityBar.border": tokens.panel.secondary.border,
    "activityBar.inactiveForeground": chroma("#ffffff").alpha(0.4).hex(),
    "activityBarBadge.foreground": "#ffffff",
    // "activityBarBadge.background": tokens.panel.active.bg,
  };

  const notifications: NotificationColors = {
    // "notifications.foreground": tokens.color.gray[220],
    // "notifications.background": tokens.color.gray[900],
    // "notificationToast.border": tokens.color.gray[600],
    // "notificationsErrorIcon.foreground": tokens.color.orange[700],
    // "notificationsWarningIcon.foreground": tokens.color.orange[400],
    // "notificationsInfoIcon.foreground": tokens.color.blue[350],
    // "notificationCenter.border": tokens.color.gray[650],
    // "notificationCenterHeader.foreground": tokens.color.gray[500],
    // "notificationCenterHeader.background": tokens.color.gray[1200],
    // "notifications.border": tokens.color.blue[1200],
  };

  const peekView: PeekViewColors = {
    // "peekView.border": chroma(tokens.color.blue[500]).alpha(0.5059).hex(),
    // "peekViewEditor.background": tokens.color.blue[1000],
    // "peekViewEditorGutter.background": tokens.color.blue[900],
    // "peekViewEditor.matchHighlightBackground": chroma(tokens.color.orange[600]).alpha(0.4941).hex(),
    // "peekViewEditor.matchHighlightBorder": tokens.color.transparent,
    // "peekViewResult.background": tokens.color.gray[1500],
    // "peekViewResult.fileForeground": tokens.color.gray[200],
    // "peekViewResult.lineForeground": tokens.color.gray[300],
    // "peekViewResult.matchHighlightBackground": chroma(tokens.color.orange[500]).alpha(0.4471).hex(),
    // "peekViewResult.selectionBackground": chroma(tokens.color.blue[550]).alpha(0.2588).hex(),
    // "peekViewResult.selectionForeground": tokens.color.gray[250],
    // "peekViewTitle.background": tokens.color.gray[1600],
    // "peekViewTitleDescription.foreground": chroma(tokens.color.gray[220]).alpha(0.702).hex(),
    // "peekViewTitleLabel.foreground": tokens.color.white,
  };

  const sideBar: SideBarColors = {
    // "sideBar.background": tokens.panel.secondary.bg,
    // "sideBar.foreground": tokens.panel.secondary.foreground,
    // "sideBarSectionHeader.background": tokens.panel.tertiary.bg,
    // "sideBarSectionHeader.foreground": tokens.panel.tertiary.foreground,
    // "sideBarSectionHeader.border": "#00000000",
    // "sideBarTitle.foreground": tokens.panel.foreground,
  };

  const listsAndTrees: ListsAndTreesColors = {
    // "list.activeSelectionBackground": chroma(tokens.panel.active.bg).alpha(0.5).hex(),
    // "list.inactiveSelectionBackground": chroma(tokens.panel.highlight.bg).alpha(0.8).hex(),
    "list.focusOutline": "#00000000",
    // "list.focusBackground": tokens.panel.selection.bg, // color when you hover over the tree item
  };

  const statusBar: StatusBarColors = {
    // "statusBar.foreground": tokens.panel.foreground,
    // "statusBar.background": tokens.panel.bg,
    // "statusBarItem.hoverBackground": tokens.panel.secondary.bg,
    // "statusBar.debuggingBackground": tokens.panel.debug.bg,
    // "statusBar.debuggingForeground": tokens.panel.debug.foreground,
    // "statusBar.noFolderBackground": tokens.panel.special1.bg,
    // "statusBar.noFolderForeground": tokens.panel.special1.foreground,
    // "statusBarItem.remoteBackground": tokens.panel.special2.bg,
    // "statusBarItem.remoteForeground": tokens.panel.special2.foreground,
  };

  const editorGroupsAndTabs: EditorGroupsAndTabsColors = {
    // "editorGroupHeader.tabsBackground": tokens.widget.bg,
    // "tab.activeForeground": tokens.widget.active.foreground,
    // "tab.activeBackground": tokens.widget.active.bg,
    // "tab.activeBorder": tokens.widget.active.border,
    // "tab.activeBorderTop": tokens.widget.active.accent,
    // "tab.border": tokens.widget.border,
    // "tab.inactiveBackground": tokens.widget.bg,
    // "tab.inactiveForeground": tokens.widget.foreground,
    // "tab.hoverBackground": tokens.widget.hover.bg,
  };

  const breadcrumbs: BreadcrumbsColors = {
    // "breadcrumb.background": tokens.panel.dimmed.bg,
    // "breadcrumb.foreground": tokens.panel.dimmed.foreground,
    // "breadcrumb.focusForeground": tokens.panel.dimmed.activeFg,
  };

  const integratedTerminal: IntegratedTerminalColors = {
    "terminal.foreground": "#c4c8c6",
    "terminal.selectionBackground": "#6f734340",
    "terminalCursor.background": "#0087FF",
    "terminalCursor.foreground": "#e6e6e6",
    "terminal.border": "#80808059",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#4965a1",
    "terminal.ansiBrightBlack": "#4d4d4d",
    "terminal.ansiBrightBlue": "#5c86e0",
    "terminal.ansiBrightCyan": "#7fe0d3",
    "terminal.ansiBrightGreen": "#5ac220",
    "terminal.ansiBrightMagenta": "#dd8bea",
    "terminal.ansiBrightRed": "#e03c3c",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#ffdbad",
    "terminal.ansiCyan": "#70aea6",
    "terminal.ansiGreen": "#51902e",
    "terminal.ansiMagenta": "#b792bd",
    "terminal.ansiRed": "#d35656",
    "terminal.ansiWhite": "#c4c8c6",
    "terminal.ansiYellow": "#f8c465",
  };

  const titleBar: TitleBarColors = {
    // "titleBar.activeBackground": tokens.panel.secondary.bg,
    // "titleBar.activeForeground": tokens.panel.secondary.foreground,
    // "titleBar.inactiveBackground": chroma(tokens.panel.secondary.bg).brighten(0.4).hex(),
    // "titleBar.inactiveForeground": chroma(tokens.panel.secondary.foreground).darken(0.2).hex(),
    // "titleBar.border": tokens.panel.secondary.border,
  };

  const git: GitColors = {
    "gitDecoration.addedResourceForeground": "#0ec72f",
    "gitDecoration.conflictingResourceForeground": "#ff6000",
    "gitDecoration.deletedResourceForeground": "#c73939",
    "gitDecoration.ignoredResourceForeground": "#86868697",
    "gitDecoration.modifiedResourceForeground": "#b48a3a",
    "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": "#73c991",
  };

  const diffEditor: DiffEditorColors = {
    "diffEditor.insertedTextBackground": "#0a6f0b34",
    "diffEditor.removedTextBackground": "#a7020233",
    "diffEditor.border": "#444444",
  };

  const mergeConflicts: MergeConflictsColors = {
    "merge.currentHeaderBackground": "#367366",
    "merge.currentContentBackground": "#27403B",
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#28384B",
    "merge.commonHeaderBackground": "#383838",
    "merge.commonContentBackground": "#282828",
  };

  const editorWidget: EditorWidgetColors = {
    // Editor Hover Widget
    // "editorHoverWidget.foreground": tokens.color.gray[220],
    // "editorHoverWidget.background": tokens.color.gray[780],
    // "editorHoverWidget.border": tokens.color.gray[630],
    // Editor Suggest Widget
    // "editorSuggestWidget.background": tokens.color.gray[620],
    // "editorSuggestWidget.border": tokens.color.gray[630],
    // "editorSuggestWidget.foreground": tokens.color.gray[280],
    // "editorSuggestWidget.highlightForeground": tokens.color.blue[420],
    // "editorSuggestWidget.selectedBackground": chroma(tokens.color.red[800]).alpha(0.3294).hex(),
  };

  const editor: EditorColors = {
    "editor.background": tokens.m3.surface, // canvas.bg
    "editor.foreground": tokens.m3.onSurface, // canvas.foreground,

    // Selection and Hover colors
    // "editor.selectionBackground": chroma(tokens.canvas.selection.bg).alpha(0.8).hex(),
    "editor.selectionHighlightBackground": "#00000000",
    "editor.wordHighlightBackground": "#00000000",
    // "editor.wordHighlightBorder": tokens.canvas.highlight.border,
    // "editor.wordHighlightTextBackground": chroma(tokens.canvas.selection.bg).alpha(0.55).hex(),
    // "editor.wordHighlightStrongBackground": chroma(tokens.canvas.selection.bg).alpha(0.55).hex(),
    // "editor.hoverHighlightBackground": chroma(tokens.canvas.highlight.bg).alpha(0.7).hex(),
    // "editor.lineHighlightBackground": chroma(tokens.canvas.active.bg).alpha(0.8).hex(),
    // "editorLink.activeForeground": tokens.canvas.active.foreground,

    // Errors and Warnings
    // "editorError.foreground": tokens.canvas.error.foreground, // error squiggles
    // "editorError.background": chroma(tokens.canvas.error.bg).alpha(0.25).hex(),
    "editorError.border": "#00000000",

    // "editorWarning.foreground": tokens.canvas.warning.foreground,
    // "editorWarning.background": chroma(tokens.canvas.warning.bg).alpha(0.25).hex(),
    "editorWarning.border": "#00000000",

    // "editorInfo.foreground": tokens.canvas.info.foreground,
    // "editorInfo.background": chroma(tokens.canvas.info.bg).alpha(0.25).hex(),
    "editorInfo.border": "#00000000",

    // Gutter
    // "editorGutter.background": tokens.canvas.bg,
    // "editorLineNumber.foreground": tokens.panel.tertiary.foreground,
    // "editorLineNumber.activeForeground": tokens.panel.active.foreground,
  };

  return {
    ...baseColors,
    ...activityBar,
    ...notifications,
    ...peekView,
    ...sideBar,
    ...listsAndTrees,
    ...statusBar,
    ...editorGroupsAndTabs,
    ...breadcrumbs,
    ...integratedTerminal,
    ...titleBar,
    ...git,
    ...diffEditor,
    ...mergeConflicts,
    ...editorWidget,
    ...editor,
  };
};

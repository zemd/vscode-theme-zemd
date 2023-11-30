import tokens from "../generated/tokens.json";
import chroma from "chroma-js";

export default {
  "sideBar.background": tokens.panel.sidebar.bg,
  "sideBar.foreground": tokens.panel.sidebar.fg,

  "sideBarSectionHeader.background": tokens.panel.secondary.bg,
  "sideBarSectionHeader.foreground": tokens.panel.secondary.fg,
  "sideBarSectionHeader.border": "#00000000",

  "sideBarTitle.foreground": tokens.panel.fg,
  
  "list.activeSelectionBackground": chroma(tokens.panel.active.bg).alpha(0.5).hex(),
  "list.inactiveSelectionBackground": chroma(tokens.panel.highlight.bg).alpha(0.8).hex(),
  "list.focusOutline": "#00000000",
  "list.focusBackground": tokens.panel.selection.bg, // color when you hover over the tree item
};

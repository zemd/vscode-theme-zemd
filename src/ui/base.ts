import tokens from "../generated/tokens.json";

export default {
  // ↓ Overall border color for focused elements. This color is only used if not overridden by a component.
  // focusBorder: "",
  // ↓ Overall foreground color. This color is only used if not overridden by a component.
  foreground: tokens.root.fg,
  // ↓ Overall foreground for disabled elements. This color is only used if not overridden by a component.
  // disabledForeground: "",
  // ↓ Border color of widgets such as Find/Replace inside the editor.
  // "widget.border": "",
  // ↓ Shadow color of widgets such as Find/Replace inside the editor.
  // "widget.shadow": "",
  // ↓ Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
  // "selection.background": "",
  // ↓ Foreground color for description text providing additional information, for example for a label.
  // descriptionForeground: "",
  // ↓ Overall foreground color for error messages (this color is only used if not overridden by a component).
  // errorForeground: "",
  // ↓ The default color for icons in the workbench.
  // "icon.foreground": "",
  // ↓ The hover border color for draggable sashes.
  // "sash.hoverBorder": "",
} as const;
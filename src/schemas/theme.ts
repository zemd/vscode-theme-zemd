import * as z from "zod";

// ===========================
// Color Format Schema
// ===========================

/**
 * VS Code supports hexadecimal color notations: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 *
 * If no alpha is defined, defaults to 'ff' (opaque)
 * If alpha is '00', the color is fully transparent
 */
export const ColorSchema = z.custom<string>(
  (value) => {
    if (typeof value !== "string") {
      return false;
    }

    const hexColorRegex = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
    return hexColorRegex.test(value);
  },
  {
    message: "Color must be in hexadecimal format: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA",
  },
);

// ===========================
// Token Color Schemas
// ===========================

/**
 * Font style options for token colors
 */
export const FontStyleSchema = z.union([
  z.enum(["normal", "italic", "bold", "underline", "strikethrough"]),
  z.string().regex(/^(normal|italic|bold|underline|strikethrough)(\s+(normal|italic|bold|underline|strikethrough))*$/),
]);

/**
 * Individual token color settings
 */
export const TokenColorSettingsSchema = z.strictObject({
  foreground: ColorSchema,
  background: ColorSchema.optional(),
  fontStyle: FontStyleSchema.optional(),
});

/**
 * Token color rule with scope and settings
 */
export const TokenColorSchema = z.strictObject({
  name: z.string().optional(),
  scope: z.union([z.string(), z.array(z.string())]),
  settings: TokenColorSettingsSchema,
});

// ===========================
// Semantic Token Color Schemas
// ===========================

/**
 * Color and style configuration for semantic tokens in the editor.
 * Semantic tokens provide language-aware syntax highlighting based on code semantics.
 */
export const SemanticTokenColorSettingsSchema = z.strictObject({
  foreground: ColorSchema.optional(),
  background: ColorSchema.optional(),
  fontStyle: FontStyleSchema.optional(),
  bold: z.boolean().optional(),
  italic: z.boolean().optional(),
  underline: z.boolean().optional(),
  strikethrough: z.boolean().optional(),
});

/**
 * Mapping of semantic token types to their color and style settings.
 * Allows customization of how different code elements (classes, functions, variables, etc.) are styled.
 */
export const SemanticTokenColorsSchema = z.record(z.string(), z.union([SemanticTokenColorSettingsSchema, ColorSchema]));

// ===========================
// Workbench Color Schemas
// ===========================

/**
 * Contrast colors are typically only set for high contrast themes.
 * If set, they add an additional border around items across the UI to increase the contrast.
 */
export const ContrastColorsSchema = z.strictObject({
  /**
   * An extra border around active elements to separate them from others for greater contrast.
   */
  contrastActiveBorder: ColorSchema.optional(),

  /**
   * An extra border around elements to separate them from others for greater contrast.
   */
  contrastBorder: ColorSchema.optional(),
});

/**
 * Base colors that are used throughout the VS Code UI.
 * These colors are only used if not overridden by a component.
 */
export const BaseColorsSchema = z.strictObject({
  /**
   * Overall border color for focused elements. This color is only used if not overridden by a component.
   */
  focusBorder: ColorSchema.optional(),

  /**
   * Overall foreground color. This color is only used if not overridden by a component.
   */
  foreground: ColorSchema.optional(),

  /**
   * Overall foreground for disabled elements. This color is only used if not overridden by a component.
   */
  disabledForeground: ColorSchema.optional(),

  /**
   * Border color of widgets such as Find/Replace inside the editor.
   */
  "widget.border": ColorSchema.optional(),

  /**
   * Shadow color of widgets such as Find/Replace inside the editor.
   */
  "widget.shadow": ColorSchema.optional(),

  /**
   * Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
   */
  "selection.background": ColorSchema.optional(),

  /**
   * Foreground color for description text providing additional information, for example for a label.
   */
  descriptionForeground: ColorSchema.optional(),

  /**
   * Overall foreground color for error messages (this color is only used if not overridden by a component).
   */
  errorForeground: ColorSchema.optional(),

  /**
   * The default color for icons in the workbench.
   */
  "icon.foreground": ColorSchema.optional(),

  /**
   * The hover border color for draggable sashes.
   */
  "sash.hoverBorder": ColorSchema.optional(),
});

/**
 * Window border colors.
 * The window border colors are only supported on macOS and Linux (not Windows) and
 * only when the custom title bar is enabled (window.titleBarStyle: "custom").
 */
export const WindowBorderColorsSchema = z.strictObject({
  /**
   * Border color for the active (focused) window.
   */
  "window.activeBorder": ColorSchema.optional(),

  /**
   * Border color for the inactive (unfocused) windows.
   */
  "window.inactiveBorder": ColorSchema.optional(),
});

/**
 * Text colors inside a text document, such as the welcome page.
 */
export const TextColorsSchema = z.strictObject({
  /**
   * Background color for block quotes in text.
   */
  "textBlockQuote.background": ColorSchema.optional(),

  /**
   * Border color for block quotes in text.
   */
  "textBlockQuote.border": ColorSchema.optional(),

  /**
   * Background color for code blocks in text.
   */
  "textCodeBlock.background": ColorSchema.optional(),

  /**
   * Foreground color for links in text when clicked on and on mouse hover.
   */
  "textLink.activeForeground": ColorSchema.optional(),

  /**
   * Foreground color for links in text.
   */
  "textLink.foreground": ColorSchema.optional(),

  /**
   * Foreground color for preformatted text segments.
   */
  "textPreformat.foreground": ColorSchema.optional(),

  /**
   * Background color for preformatted text segments.
   */
  "textPreformat.background": ColorSchema.optional(),

  /**
   * Color for text separators.
   */
  "textSeparator.foreground": ColorSchema.optional(),
});

/**
 * Action colors control the interactions with actions across the workbench.
 */
export const ActionColorsSchema = z.strictObject({
  /**
   * Toolbar background when hovering over actions using the mouse.
   */
  "toolbar.hoverBackground": ColorSchema.optional(),

  /**
   * Toolbar outline when hovering over actions using the mouse.
   */
  "toolbar.hoverOutline": ColorSchema.optional(),

  /**
   * Toolbar background when holding the mouse over actions.
   */
  "toolbar.activeBackground": ColorSchema.optional(),

  /**
   * Action List background color.
   */
  "editorActionList.background": ColorSchema.optional(),

  /**
   * Action List foreground color.
   */
  "editorActionList.foreground": ColorSchema.optional(),

  /**
   * Action List foreground color for the focused item.
   */
  "editorActionList.focusForeground": ColorSchema.optional(),

  /**
   * Action List background color for the focused item.
   */
  "editorActionList.focusBackground": ColorSchema.optional(),
});

/**
 * Button control colors for button widgets, checkboxes, and radio buttons.
 */
export const ButtonControlColorsSchema = z.strictObject({
  /**
   * Button background color.
   */
  "button.background": ColorSchema.optional(),

  /**
   * Button foreground color.
   */
  "button.foreground": ColorSchema.optional(),

  /**
   * Button border color.
   */
  "button.border": ColorSchema.optional(),

  /**
   * Button separator color.
   */
  "button.separator": ColorSchema.optional(),

  /**
   * Button background color when hovering.
   */
  "button.hoverBackground": ColorSchema.optional(),

  /**
   * Secondary button foreground color.
   */
  "button.secondaryForeground": ColorSchema.optional(),

  /**
   * Secondary button background color.
   */
  "button.secondaryBackground": ColorSchema.optional(),

  /**
   * Secondary button background color when hovering.
   */
  "button.secondaryHoverBackground": ColorSchema.optional(),

  /**
   * Background color of checkbox widget.
   */
  "checkbox.background": ColorSchema.optional(),

  /**
   * Foreground color of checkbox widget.
   */
  "checkbox.foreground": ColorSchema.optional(),

  /**
   * Background of a disabled checkbox.
   */
  "checkbox.disabled.background": ColorSchema.optional(),

  /**
   * Foreground of a disabled checkbox.
   */
  "checkbox.disabled.foreground": ColorSchema.optional(),

  /**
   * Border color of checkbox widget.
   */
  "checkbox.border": ColorSchema.optional(),

  /**
   * Background color of checkbox widget when the element it's in is selected.
   */
  "checkbox.selectBackground": ColorSchema.optional(),

  /**
   * Border color of checkbox widget when the element it's in is selected.
   */
  "checkbox.selectBorder": ColorSchema.optional(),

  /**
   * Foreground color of active radio option.
   */
  "radio.activeForeground": ColorSchema.optional(),

  /**
   * Background color of active radio option.
   */
  "radio.activeBackground": ColorSchema.optional(),

  /**
   * Border color of the active radio option.
   */
  "radio.activeBorder": ColorSchema.optional(),

  /**
   * Foreground color of inactive radio option.
   */
  "radio.inactiveForeground": ColorSchema.optional(),

  /**
   * Background color of inactive radio option.
   */
  "radio.inactiveBackground": ColorSchema.optional(),

  /**
   * Border color of the inactive radio option.
   */
  "radio.inactiveBorder": ColorSchema.optional(),

  /**
   * Background color of inactive active radio option when hovering.
   */
  "radio.inactiveHoverBackground": ColorSchema.optional(),
});

/**
 * Dropdown control colors for all dropdown widgets.
 * Note that the Dropdown control is not used on macOS currently.
 */
export const DropdownControlColorsSchema = z.strictObject({
  /**
   * Dropdown background.
   */
  "dropdown.background": ColorSchema.optional(),

  /**
   * Dropdown list background.
   */
  "dropdown.listBackground": ColorSchema.optional(),

  /**
   * Dropdown border.
   */
  "dropdown.border": ColorSchema.optional(),

  /**
   * Dropdown foreground.
   */
  "dropdown.foreground": ColorSchema.optional(),
});

/**
 * Input control colors for input fields and text areas.
 */
export const InputControlColorsSchema = z.strictObject({
  /**
   * Input box background.
   */
  "input.background": ColorSchema.optional(),

  /**
   * Input box border.
   */
  "input.border": ColorSchema.optional(),

  /**
   * Input box foreground.
   */
  "input.foreground": ColorSchema.optional(),

  /**
   * Input box foreground color for placeholder text.
   */
  "input.placeholderForeground": ColorSchema.optional(),

  /**
   * Background color of activated options in input fields.
   */
  "inputOption.activeBackground": ColorSchema.optional(),

  /**
   * Border color of activated options in input fields.
   */
  "inputOption.activeBorder": ColorSchema.optional(),

  /**
   * Foreground color of activated options in input fields.
   */
  "inputOption.activeForeground": ColorSchema.optional(),

  /**
   * Background color of activated options in input fields when hovering.
   */
  "inputOption.hoverBackground": ColorSchema.optional(),

  /**
   * Input validation background color for error severity.
   */
  "inputValidation.errorBackground": ColorSchema.optional(),

  /**
   * Input validation foreground color for error severity.
   */
  "inputValidation.errorForeground": ColorSchema.optional(),

  /**
   * Input validation border color for error severity.
   */
  "inputValidation.errorBorder": ColorSchema.optional(),

  /**
   * Input validation background color for information severity.
   */
  "inputValidation.infoBackground": ColorSchema.optional(),

  /**
   * Input validation foreground color for information severity.
   */
  "inputValidation.infoForeground": ColorSchema.optional(),

  /**
   * Input validation border color for information severity.
   */
  "inputValidation.infoBorder": ColorSchema.optional(),

  /**
   * Input validation background color for warning severity.
   */
  "inputValidation.warningBackground": ColorSchema.optional(),

  /**
   * Input validation foreground color for warning severity.
   */
  "inputValidation.warningForeground": ColorSchema.optional(),

  /**
   * Input validation border color for warning severity.
   */
  "inputValidation.warningBorder": ColorSchema.optional(),
});

/**
 * Scrollbar control colors for scrollbars across the workbench.
 */
export const ScrollbarControlColorsSchema = z.strictObject({
  /**
   * Scrollbar slider shadow to indicate that the view is scrolled.
   */
  "scrollbar.shadow": ColorSchema.optional(),

  /**
   * Scrollbar slider background color when clicked on.
   */
  "scrollbarSlider.activeBackground": ColorSchema.optional(),

  /**
   * Scrollbar slider background color.
   */
  "scrollbarSlider.background": ColorSchema.optional(),

  /**
   * Scrollbar slider background color when hovering.
   */
  "scrollbarSlider.hoverBackground": ColorSchema.optional(),
});

/**
 * Badge colors for badges which are small information labels.
 */
export const BadgeColorsSchema = z.strictObject({
  /**
   * Badge foreground color. Badges are small information labels, e.g. for search results count.
   */
  "badge.foreground": ColorSchema.optional(),

  /**
   * Badge background color. Badges are small information labels, e.g. for search results count.
   */
  "badge.background": ColorSchema.optional(),
});

/**
 * Progress bar colors.
 */
export const ProgressBarColorsSchema = z.strictObject({
  /**
   * Background color of the progress bar shown for long running operations.
   */
  "progressBar.background": ColorSchema.optional(),
});

/**
 * Lists and trees colors for list/tree structures like the file explorer.
 */
export const ListsAndTreesColorsSchema = z.strictObject({
  /**
   * List/Tree background color for the selected item when the list/tree is active.
   */
  "list.activeSelectionBackground": ColorSchema.optional(),

  /**
   * List/Tree foreground color for the selected item when the list/tree is active.
   */
  "list.activeSelectionForeground": ColorSchema.optional(),

  /**
   * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.activeSelectionIconForeground": ColorSchema.optional(),

  /**
   * List/Tree drag and drop background when moving items over other items when using the mouse.
   */
  "list.dropBackground": ColorSchema.optional(),

  /**
   * List/Tree drag and drop border color when moving items between items when using the mouse.
   */
  "list.dropBetweenBackground": ColorSchema.optional(),

  /**
   * List/Tree background color for the focused item when the list/tree is active.
   */
  "list.focusBackground": ColorSchema.optional(),

  /**
   * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.focusForeground": ColorSchema.optional(),

  /**
   * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
   */
  "list.focusHighlightForeground": ColorSchema.optional(),

  /**
   * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.focusOutline": ColorSchema.optional(),

  /**
   * List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.focusAndSelectionOutline": ColorSchema.optional(),

  /**
   * List/Tree foreground color of the match highlights when searching inside the list/tree.
   */
  "list.highlightForeground": ColorSchema.optional(),

  /**
   * List/Tree background when hovering over items using the mouse.
   */
  "list.hoverBackground": ColorSchema.optional(),

  /**
   * List/Tree foreground when hovering over items using the mouse.
   */
  "list.hoverForeground": ColorSchema.optional(),

  /**
   * List/Tree background color for the selected item when the list/tree is inactive.
   */
  "list.inactiveSelectionBackground": ColorSchema.optional(),

  /**
   * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveSelectionForeground": ColorSchema.optional(),

  /**
   * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveSelectionIconForeground": ColorSchema.optional(),

  /**
   * List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
   */
  "list.inactiveFocusBackground": ColorSchema.optional(),

  /**
   * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveFocusOutline": ColorSchema.optional(),

  /**
   * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
   */
  "list.invalidItemForeground": ColorSchema.optional(),

  /**
   * Foreground color of list items containing errors.
   */
  "list.errorForeground": ColorSchema.optional(),

  /**
   * Foreground color of list items containing warnings.
   */
  "list.warningForeground": ColorSchema.optional(),

  /**
   * List/Tree Filter background color of typed text when searching inside the list/tree.
   */
  "listFilterWidget.background": ColorSchema.optional(),

  /**
   * List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
   */
  "listFilterWidget.outline": ColorSchema.optional(),

  /**
   * List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
   */
  "listFilterWidget.noMatchesOutline": ColorSchema.optional(),

  /**
   * Shadow color of the type filter widget in lists and trees.
   */
  "listFilterWidget.shadow": ColorSchema.optional(),

  /**
   * Background color of the filtered matches in lists and trees.
   */
  "list.filterMatchBackground": ColorSchema.optional(),

  /**
   * Border color of the filtered matches in lists and trees.
   */
  "list.filterMatchBorder": ColorSchema.optional(),

  /**
   * List/Tree foreground color for items that are deemphasized.
   */
  "list.deemphasizedForeground": ColorSchema.optional(),

  /**
   * Tree Widget's stroke color for indent guides.
   */
  "tree.indentGuidesStroke": ColorSchema.optional(),

  /**
   * Tree stroke color for the indentation guides.
   */
  "tree.inactiveIndentGuidesStroke": ColorSchema.optional(),

  /**
   * Tree stroke color for the indentation guides of the active item.
   */
  "tree.tableColumnsBorder": ColorSchema.optional(),

  /**
   * Background color for odd table rows.
   */
  "tree.tableOddRowsBackground": ColorSchema.optional(),
});

/**
 * Activity Bar colors for the Activity Bar on the far left.
 */
export const ActivityBarColorsSchema = z.strictObject({
  /**
   * Activity Bar background color.
   */
  "activityBar.background": ColorSchema.optional(),

  /**
   * Drag and drop feedback color for the Activity Bar items. The Activity Bar is showing on the far left or right and allows to switch between views of the Side Bar.
   */
  "activityBar.dropBorder": ColorSchema.optional(),

  /**
   * Activity Bar foreground color (for example used for the icons).
   */
  "activityBar.foreground": ColorSchema.optional(),

  /**
   * Activity Bar item foreground color when it is inactive.
   */
  "activityBar.inactiveForeground": ColorSchema.optional(),

  /**
   * Activity Bar border color with the Side Bar.
   */
  "activityBar.border": ColorSchema.optional(),

  /**
   * Activity Bar active indicator border color.
   */
  "activityBar.activeBorder": ColorSchema.optional(),

  /**
   * Activity Bar active indicator background color.
   */
  "activityBar.activeBackground": ColorSchema.optional(),

  /**
   * Activity Bar active indicator foreground color.
   */
  "activityBar.activeFocusBorder": ColorSchema.optional(),

  /**
   * Activity Bar badge background color. The Activity Bar is showing on the far left or right and allows to switch between views of the Side Bar.
   */
  "activityBarBadge.background": ColorSchema.optional(),

  /**
   * Activity Bar badge foreground color. The Activity Bar is showing on the far left or right and allows to switch between views of the Side Bar.
   */
  "activityBarBadge.foreground": ColorSchema.optional(),

  /**
   * Activity Bar top background color for the Active Bar top section.
   */
  "activityBarTop.foreground": ColorSchema.optional(),

  /**
   * Activity Bar top foreground color for the active item.
   */
  "activityBarTop.activeBorder": ColorSchema.optional(),

  /**
   * Activity Bar top active indicator border color.
   */
  "activityBarTop.inactiveForeground": ColorSchema.optional(),

  /**
   * Activity Bar top foreground color when inactive.
   */
  "activityBarTop.dropBorder": ColorSchema.optional(),

  /**
   * Background color of the activity bar when set to top / bottom.
   */
  "activityBarTop.background": ColorSchema.optional(),

  /**
   * Background color for the active item in the Activity bar when it is on top / bottom.
   */
  "activityBarTop.activeBackground": ColorSchema.optional(),

  /**
   * Foreground color of the warning activity badge.
   */
  "activityWarningBadge.foreground": ColorSchema.optional(),

  /**
   * Background color of the warning activity badge.
   */
  "activityWarningBadge.background": ColorSchema.optional(),

  /**
   * Foreground color of the error activity badge.
   */
  "activityErrorBadge.foreground": ColorSchema.optional(),

  /**
   * Background color of the error activity badge.
   */
  "activityErrorBadge.background": ColorSchema.optional(),
});

/**
 * Profiles colors for profile badges.
 */
export const ProfilesColorsSchema = z.strictObject({
  /**
   * Profile badge background color. The profile badge shows on top of the settings gear icon in the Activity Bar.
   */
  "profileBadge.background": ColorSchema.optional(),

  /**
   * Profile badge foreground color. The profile badge shows on top of the settings gear icon in the Activity Bar.
   */
  "profileBadge.foreground": ColorSchema.optional(),

  /**
   * The color of the Profiles editor splitview sash border.
   */
  "profiles.sashBorder": ColorSchema.optional(),
});

/**
 * Side Bar colors for the Side Bar containing views like Explorer and Search.
 */
export const SideBarColorsSchema = z.strictObject({
  /**
   * Side Bar background color.
   */
  "sideBar.background": ColorSchema.optional(),

  /**
   * Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
   */
  "sideBar.foreground": ColorSchema.optional(),

  /**
   * Side Bar border color on the side separating the editor.
   */
  "sideBar.border": ColorSchema.optional(),

  /**
   * Drag and drop feedback color for the Side Bar sections. The color should have transparency so that the Side Bar sections can still shine through.
   */
  "sideBar.dropBackground": ColorSchema.optional(),

  /**
   * Side Bar title foreground color.
   */
  "sideBarTitle.foreground": ColorSchema.optional(),

  /**
   * Side Bar title background color.
   */
  "sideBarTitle.background": ColorSchema.optional(),

  /**
   * Side bar title border color on the bottom, separating the title from the views.
   */
  "sideBarTitle.border": ColorSchema.optional(),

  /**
   * Border color between the activity bar at the top/bottom and the views.
   */
  "sideBarActivityBarTop.border": ColorSchema.optional(),

  /**
   * Side Bar section header background color.
   */
  "sideBarSectionHeader.background": ColorSchema.optional(),

  /**
   * Side Bar section header foreground color.
   */
  "sideBarSectionHeader.foreground": ColorSchema.optional(),

  /**
   * Side Bar section header border color.
   */
  "sideBarSectionHeader.border": ColorSchema.optional(),

  /**
   * Side Bar sticky scroll background color.
   */
  "sideBarStickyScroll.background": ColorSchema.optional(),

  /**
   * Side Bar sticky scroll border color.
   */
  "sideBarStickyScroll.border": ColorSchema.optional(),

  /**
   * Side Bar sticky scroll shadow color.
   */
  "sideBarStickyScroll.shadow": ColorSchema.optional(),
});

/**
 * Minimap colors for the minimap shown on the right side of the editor.
 */
export const MinimapColorsSchema = z.strictObject({
  /**
   * Highlight color for matches in the minimap.
   */
  "minimap.findMatchHighlight": ColorSchema.optional(),

  /**
   * Highlight color for the editor selection in the minimap.
   */
  "minimap.selectionHighlight": ColorSchema.optional(),

  /**
   * Highlight color for errors in the minimap.
   */
  "minimap.errorHighlight": ColorSchema.optional(),

  /**
   * Highlight color for warnings in the minimap.
   */
  "minimap.warningHighlight": ColorSchema.optional(),

  /**
   * Minimap background color.
   */
  "minimap.background": ColorSchema.optional(),

  /**
   * Minimap marker color for repeating editor selections.
   */
  "minimap.selectionOccurrenceHighlight": ColorSchema.optional(),

  /**
   * Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
   */
  "minimap.foregroundOpacity": ColorSchema.optional(),

  /**
   * Minimap background color for the active section.
   */
  "minimap.infoHighlight": ColorSchema.optional(),

  /**
   * Color of pending edit regions in the minimap.
   */
  "minimap.chatEditHighlight": ColorSchema.optional(),

  /**
   * Minimap slider background color.
   */
  "minimapSlider.background": ColorSchema.optional(),

  /**
   * Minimap slider background color when hovering.
   */
  "minimapSlider.hoverBackground": ColorSchema.optional(),

  /**
   * Minimap slider background color when clicked on.
   */
  "minimapSlider.activeBackground": ColorSchema.optional(),

  /**
   * Minimap gutter background color for added content.
   */
  "minimapGutter.addedBackground": ColorSchema.optional(),

  /**
   * Minimap gutter background color for modified content.
   */
  "minimapGutter.modifiedBackground": ColorSchema.optional(),

  /**
   * Minimap gutter background color for deleted content.
   */
  "minimapGutter.deletedBackground": ColorSchema.optional(),

  /**
   * Minimap marker color for inline chat inserted content.
   */
  "editorMinimap.inlineChatInserted": ColorSchema.optional(),
});

/**
 * Editor Groups & Tabs colors for organizing multiple editors.
 */
export const EditorGroupsAndTabsColorsSchema = z.strictObject({
  /**
   * Color to separate multiple editor groups from each other.
   */
  "editorGroup.border": ColorSchema.optional(),

  /**
   * Background color when dragging editors around.
   */
  "editorGroup.dropBackground": ColorSchema.optional(),

  /**
   * Background color of the editor group title header when Tabs are enabled.
   */
  "editorGroupHeader.tabsBackground": ColorSchema.optional(),

  /**
   * Background color of the editor group title header when tabs are disabled.
   */
  "editorGroupHeader.noTabsBackground": ColorSchema.optional(),

  /**
   * Border color of the editor group title header when tabs are enabled.
   */
  "editorGroupHeader.tabsBorder": ColorSchema.optional(),

  /**
   * Border color below the editor tabs control when tabs are enabled.
   */
  "editorGroupHeader.border": ColorSchema.optional(),

  /**
   * Background color of an empty editor group.
   */
  "editorGroup.emptyBackground": ColorSchema.optional(),

  /**
   * Border color of an empty editor group that is focused.
   */
  "editorGroup.focusedEmptyBorder": ColorSchema.optional(),

  /**
   * Border color of the drop area when dragging over an editor group.
   */
  "editorGroup.dropIntoPromptForeground": ColorSchema.optional(),

  /**
   * Foreground color of text shown over editors when dragging files.
   */
  "editorGroup.dropIntoPromptBackground": ColorSchema.optional(),

  /**
   * Background color when dragging over an editor group.
   */
  "editorGroup.dropIntoPromptBorder": ColorSchema.optional(),

  /**
   * Active Tab background color in an active group.
   */
  "tab.activeBackground": ColorSchema.optional(),

  /**
   * Active Tab background color in an unfocused group.
   */
  "tab.unfocusedActiveBackground": ColorSchema.optional(),

  /**
   * Inactive Tab background color in an active group.
   */
  "tab.inactiveBackground": ColorSchema.optional(),

  /**
   * Inactive Tab background color in an unfocused group.
   */
  "tab.unfocusedInactiveBackground": ColorSchema.optional(),

  /**
   * Active Tab foreground color in an active group.
   */
  "tab.activeForeground": ColorSchema.optional(),

  /**
   * Inactive Tab foreground color in an active group.
   */
  "tab.inactiveForeground": ColorSchema.optional(),

  /**
   * Active Tab foreground color in an unfocused group.
   */
  "tab.unfocusedActiveForeground": ColorSchema.optional(),

  /**
   * Inactive Tab foreground color in an unfocused group.
   */
  "tab.unfocusedInactiveForeground": ColorSchema.optional(),

  /**
   * Border on the top of tabs to separate them from the editor.
   */
  "tab.border": ColorSchema.optional(),

  /**
   * Border to highlight tabs when hovering.
   */
  "tab.hoverBorder": ColorSchema.optional(),

  /**
   * Border to highlight tabs in an unfocused group when hovering.
   */
  "tab.unfocusedHoverBorder": ColorSchema.optional(),

  /**
   * Border on the top of modified (dirty) active tabs in an active group.
   */
  "tab.activeBorder": ColorSchema.optional(),

  /**
   * Border on the top of modified (dirty) active tabs in an unfocused group.
   */
  "tab.unfocusedActiveBorder": ColorSchema.optional(),

  /**
   * Border to the side of modified (dirty) active tabs in an active group.
   */
  "tab.activeBorderTop": ColorSchema.optional(),

  /**
   * Border to the side of modified (dirty) active tabs in an unfocused group.
   */
  "tab.unfocusedActiveBorderTop": ColorSchema.optional(),

  /**
   * Border on the bottom of an active tab.
   */
  "tab.lastPinnedBorder": ColorSchema.optional(),

  /**
   * Border to the top of a selected tab.
   */
  "tab.selectedBorderTop": ColorSchema.optional(),

  /**
   * Background of a selected tab.
   */
  "tab.selectedBackground": ColorSchema.optional(),

  /**
   * Foreground of a selected tab.
   */
  "tab.selectedForeground": ColorSchema.optional(),

  /**
   * Border between tabs to indicate that a tab can be inserted between two tabs.
   */
  "tab.dragAndDropBorder": ColorSchema.optional(),

  /**
   * Tab background color when hovering.
   */
  "tab.hoverBackground": ColorSchema.optional(),

  /**
   * Tab background color in an unfocused group when hovering.
   */
  "tab.unfocusedHoverBackground": ColorSchema.optional(),

  /**
   * Tab foreground color when hovering.
   */
  "tab.hoverForeground": ColorSchema.optional(),

  /**
   * Tab foreground color in an unfocused group when hovering.
   */
  "tab.unfocusedHoverForeground": ColorSchema.optional(),

  /**
   * Border to highlight tabs when modified (dirty) in an active group.
   */
  "tab.activeModifiedBorder": ColorSchema.optional(),

  /**
   * Border to highlight tabs when modified (dirty) in an unfocused group.
   */
  "tab.inactiveModifiedBorder": ColorSchema.optional(),

  /**
   * Border to highlight tabs when modified (dirty) in an active group when hovering.
   */
  "tab.unfocusedActiveModifiedBorder": ColorSchema.optional(),

  /**
   * Border to highlight tabs when modified (dirty) in an unfocused group when hovering.
   */
  "tab.unfocusedInactiveModifiedBorder": ColorSchema.optional(),

  /**
   * Background color of the editor pane visible on the left and right side of the centered editor layout.
   */
  "editorPane.background": ColorSchema.optional(),

  /**
   * Color to separate pinned editor tabs from other tabs.
   */
  "sideBySideEditor.horizontalBorder": ColorSchema.optional(),

  /**
   * Color to separate pinned editor tabs from other tabs.
   */
  "sideBySideEditor.verticalBorder": ColorSchema.optional(),
});

/**
 * Editor Colors for the main editor area.
 */
export const EditorColorsSchema = z.strictObject({
  /**
   * Editor background color.
   */
  "editor.background": ColorSchema.optional(),

  /**
   * Editor default foreground color.
   */
  "editor.foreground": ColorSchema.optional(),

  /**
   * Color of editor line numbers.
   */
  "editorLineNumber.foreground": ColorSchema.optional(),

  /**
   * Color of the active editor line number.
   */
  "editorLineNumber.activeForeground": ColorSchema.optional(),

  /**
   * Color of the final editor line when editor.renderFinalNewline is set to dimmed.
   */
  "editorLineNumber.dimmedForeground": ColorSchema.optional(),

  /**
   * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  "editorCursor.background": ColorSchema.optional(),

  /**
   * Color of the editor cursor.
   */
  "editorCursor.foreground": ColorSchema.optional(),

  /**
   * Color of the primary editor cursor when multiple cursors are present.
   */
  "editorMultiCursor.primary.foreground": ColorSchema.optional(),

  /**
   * The background color of the primary editor cursor when multiple cursors are present.
   */
  "editorMultiCursor.primary.background": ColorSchema.optional(),

  /**
   * Color of secondary editor cursors when multiple cursors are present.
   */
  "editorMultiCursor.secondary.foreground": ColorSchema.optional(),

  /**
   * The background color of secondary editor cursors when multiple cursors are present.
   */
  "editorMultiCursor.secondary.background": ColorSchema.optional(),

  /**
   * Foreground color of the placeholder text in the editor.
   */
  "editor.placeholder.foreground": ColorSchema.optional(),

  /**
   * The border color for an IME composition.
   */
  "editor.compositionBorder": ColorSchema.optional(),

  /**
   * Background color of editor selections.
   */
  "editor.selectionBackground": ColorSchema.optional(),

  /**
   * Color of the selected text for high contrast.
   */
  "editor.selectionForeground": ColorSchema.optional(),

  /**
   * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.inactiveSelectionBackground": ColorSchema.optional(),

  /**
   * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.selectionHighlightBackground": ColorSchema.optional(),

  /**
   * Border color for regions with the same content as the selection.
   */
  "editor.selectionHighlightBorder": ColorSchema.optional(),

  /**
   * Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.wordHighlightBackground": ColorSchema.optional(),

  /**
   * Border color of a symbol during read-access, for example when reading a variable.
   */
  "editor.wordHighlightBorder": ColorSchema.optional(),

  /**
   * Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.wordHighlightStrongBackground": ColorSchema.optional(),

  /**
   * Border color of a symbol during write-access, for example when writing to a variable.
   */
  "editor.wordHighlightStrongBorder": ColorSchema.optional(),

  /**
   * Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.wordHighlightTextBackground": ColorSchema.optional(),

  /**
   * Border color of a textual occurrence for a symbol.
   */
  "editor.wordHighlightTextBorder": ColorSchema.optional(),

  /**
   * Background color when the editor is in find mode.
   */
  "editor.findMatchBackground": ColorSchema.optional(),

  /**
   * Text color of the current search match.
   */
  "editor.findMatchForeground": ColorSchema.optional(),

  /**
   * Background color of the current search match.
   */
  "editor.findMatchHighlightBackground": ColorSchema.optional(),

  /**
   * Foreground color of the other search matches.
   */
  "editor.findMatchHighlightForeground": ColorSchema.optional(),

  /**
   * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.findRangeHighlightBackground": ColorSchema.optional(),

  /**
   * Border color of the current search match.
   */
  "editor.findMatchBorder": ColorSchema.optional(),

  /**
   * Border color of the other search matches.
   */
  "editor.findMatchHighlightBorder": ColorSchema.optional(),

  /**
   * Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
   */
  "editor.findRangeHighlightBorder": ColorSchema.optional(),

  /**
   * Color of the text in the search viewlet's completion message.
   */
  "search.resultsInfoForeground": ColorSchema.optional(),

  /**
   * Color of the editor's results.
   */
  "searchEditor.findMatchBackground": ColorSchema.optional(),

  /**
   * Border color of the editor's results.
   */
  "searchEditor.findMatchBorder": ColorSchema.optional(),

  /**
   * Search editor text input box border.
   */
  "searchEditor.textInputBorder": ColorSchema.optional(),

  /**
   * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.hoverHighlightBackground": ColorSchema.optional(),

  /**
   * Background color of highlighted line at the cursor position.
   */
  "editor.lineHighlightBackground": ColorSchema.optional(),

  /**
   * Background color for the border around the line at the cursor position.
   */
  "editor.lineHighlightBorder": ColorSchema.optional(),

  /**
   * Color of active links.
   */
  "editorLink.activeForeground": ColorSchema.optional(),

  /**
   * Background color of highlighted ranges, like by Quick Open and Find features. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.rangeHighlightBackground": ColorSchema.optional(),

  /**
   * Background color of the border around highlighted ranges.
   */
  "editor.rangeHighlightBorder": ColorSchema.optional(),

  /**
   * Foreground color for the labels in the editor watermark.
   */
  "editorWatermark.foreground": ColorSchema.optional(),

  /**
   * Border color used to highlight unicode characters.
   */
  "editorUnicodeHighlight.border": ColorSchema.optional(),

  /**
   * Background color used to highlight unicode characters.
   */
  "editorUnicodeHighlight.background": ColorSchema.optional(),

  /**
   * Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.symbolHighlightBackground": ColorSchema.optional(),

  /**
   * Background color of the border around highlighted symbols.
   */
  "editor.symbolHighlightBorder": ColorSchema.optional(),

  /**
   * Color of whitespace characters in the editor.
   */
  "editorWhitespace.foreground": ColorSchema.optional(),

  /**
   * Color of the editor indentation guides.
   */
  "editorIndentGuide.background": ColorSchema.optional(),

  /**
   * Color of the editor indentation guides (1).
   */
  "editorIndentGuide.background1": ColorSchema.optional(),

  /**
   * Color of the editor indentation guides (2).
   */
  "editorIndentGuide.background2": ColorSchema.optional(),

  /**
   * Color of the editor indentation guides (3).
   */
  "editorIndentGuide.background3": ColorSchema.optional(),

  /**
   * Color of the editor indentation guides (4).
   */
  "editorIndentGuide.background4": ColorSchema.optional(),

  /**
   * Color of the editor indentation guides (5).
   */
  "editorIndentGuide.background5": ColorSchema.optional(),

  /**
   * Color of the editor indentation guides (6).
   */
  "editorIndentGuide.background6": ColorSchema.optional(),

  /**
   * Color of the active editor indentation guide.
   */
  "editorIndentGuide.activeBackground": ColorSchema.optional(),

  /**
   * Color of the active editor indentation guides (1).
   */
  "editorIndentGuide.activeBackground1": ColorSchema.optional(),

  /**
   * Color of the active editor indentation guides (2).
   */
  "editorIndentGuide.activeBackground2": ColorSchema.optional(),

  /**
   * Color of the active editor indentation guides (3).
   */
  "editorIndentGuide.activeBackground3": ColorSchema.optional(),

  /**
   * Color of the active editor indentation guides (4).
   */
  "editorIndentGuide.activeBackground4": ColorSchema.optional(),

  /**
   * Color of the active editor indentation guides (5).
   */
  "editorIndentGuide.activeBackground5": ColorSchema.optional(),

  /**
   * Color of the active editor indentation guides (6).
   */
  "editorIndentGuide.activeBackground6": ColorSchema.optional(),

  /**
   * Color of the editor rulers.
   */
  "editorRuler.foreground": ColorSchema.optional(),

  /**
   * Background color when the editor is in linked editing mode.
   */
  "editor.linkedEditingBackground": ColorSchema.optional(),

  /**
   * Foreground color of an editor inlay hint.
   */
  "editorInlayHint.foreground": ColorSchema.optional(),

  /**
   * Background color of an editor inlay hint.
   */
  "editorInlayHint.background": ColorSchema.optional(),

  /**
   * Foreground color of an editor inlay hint for types.
   */
  "editorInlayHint.typeForeground": ColorSchema.optional(),

  /**
   * Background color of an editor inlay hint for types.
   */
  "editorInlayHint.typeBackground": ColorSchema.optional(),

  /**
   * Foreground color of an editor inlay hint for parameters.
   */
  "editorInlayHint.parameterForeground": ColorSchema.optional(),

  /**
   * Background color of an editor inlay hint for parameters.
   */
  "editorInlayHint.parameterBackground": ColorSchema.optional(),

  /**
   * Foreground color of editor CodeLens.
   */
  "editorCodeLens.foreground": ColorSchema.optional(),

  /**
   * The color used for the lightbulb actions icon.
   */
  "editorLightBulb.foreground": ColorSchema.optional(),

  /**
   * The color used for the lightbulb auto fix actions icon.
   */
  "editorLightBulbAutoFix.foreground": ColorSchema.optional(),

  /**
   * The color used for the lightbulb AI icon.
   */
  "editorLightBulbAi.foreground": ColorSchema.optional(),

  /**
   * Background color behind matching brackets.
   */
  "editorBracketMatch.background": ColorSchema.optional(),

  /**
   * Color for matching brackets boxes.
   */
  "editorBracketMatch.border": ColorSchema.optional(),

  /**
   * Foreground color of brackets (1).
   */
  "editorBracketHighlight.foreground1": ColorSchema.optional(),

  /**
   * Foreground color of brackets (2).
   */
  "editorBracketHighlight.foreground2": ColorSchema.optional(),

  /**
   * Foreground color of brackets (3).
   */
  "editorBracketHighlight.foreground3": ColorSchema.optional(),

  /**
   * Foreground color of brackets (4).
   */
  "editorBracketHighlight.foreground4": ColorSchema.optional(),

  /**
   * Foreground color of brackets (5).
   */
  "editorBracketHighlight.foreground5": ColorSchema.optional(),

  /**
   * Foreground color of brackets (6).
   */
  "editorBracketHighlight.foreground6": ColorSchema.optional(),

  /**
   * Foreground color of unexpected brackets.
   */
  "editorBracketHighlight.unexpectedBracket.foreground": ColorSchema.optional(),

  /**
   * Background color of bracket pair guides (1).
   */
  "editorBracketPairGuide.background1": ColorSchema.optional(),

  /**
   * Background color of bracket pair guides (2).
   */
  "editorBracketPairGuide.background2": ColorSchema.optional(),

  /**
   * Background color of bracket pair guides (3).
   */
  "editorBracketPairGuide.background3": ColorSchema.optional(),

  /**
   * Background color of bracket pair guides (4).
   */
  "editorBracketPairGuide.background4": ColorSchema.optional(),

  /**
   * Background color of bracket pair guides (5).
   */
  "editorBracketPairGuide.background5": ColorSchema.optional(),

  /**
   * Background color of bracket pair guides (6).
   */
  "editorBracketPairGuide.background6": ColorSchema.optional(),

  /**
   * Background color of active bracket pair guides (1).
   */
  "editorBracketPairGuide.activeBackground1": ColorSchema.optional(),

  /**
   * Background color of active bracket pair guides (2).
   */
  "editorBracketPairGuide.activeBackground2": ColorSchema.optional(),

  /**
   * Background color of active bracket pair guides (3).
   */
  "editorBracketPairGuide.activeBackground3": ColorSchema.optional(),

  /**
   * Background color of active bracket pair guides (4).
   */
  "editorBracketPairGuide.activeBackground4": ColorSchema.optional(),

  /**
   * Background color of active bracket pair guides (5).
   */
  "editorBracketPairGuide.activeBackground5": ColorSchema.optional(),

  /**
   * Background color of active bracket pair guides (6).
   */
  "editorBracketPairGuide.activeBackground6": ColorSchema.optional(),

  /**
   * Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.foldBackground": ColorSchema.optional(),

  /**
   * Color of the collapsed text after the first line of a folded range.
   */
  "editor.foldPlaceholderForeground": ColorSchema.optional(),

  /**
   * Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
   */
  "editorOverviewRuler.background": ColorSchema.optional(),

  /**
   * Color of the overview ruler border.
   */
  "editorOverviewRuler.border": ColorSchema.optional(),

  /**
   * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.findMatchForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for highlighted ranges, like by Quick Open and Find features. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.rangeHighlightForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.selectionHighlightForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for word highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.wordHighlightForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.wordHighlightStrongForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for textual occurrences of symbols. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.wordHighlightTextForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for modified content.
   */
  "editorOverviewRuler.modifiedForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for added content.
   */
  "editorOverviewRuler.addedForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for deleted content.
   */
  "editorOverviewRuler.deletedForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for errors.
   */
  "editorOverviewRuler.errorForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for warnings.
   */
  "editorOverviewRuler.warningForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for infos.
   */
  "editorOverviewRuler.infoForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for matching brackets.
   */
  "editorOverviewRuler.bracketMatchForeground": ColorSchema.optional(),

  /**
   * Overview ruler marker color for inline chat inserted content.
   */
  "editorOverviewRuler.inlineChatInserted": ColorSchema.optional(),

  /**
   * Overview ruler marker color for inline chat removed content.
   */
  "editorOverviewRuler.inlineChatRemoved": ColorSchema.optional(),

  /**
   * Foreground color of error squigglies in the editor.
   */
  "editorError.foreground": ColorSchema.optional(),

  /**
   * Border color of error boxes in the editor.
   */
  "editorError.border": ColorSchema.optional(),

  /**
   * Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorError.background": ColorSchema.optional(),

  /**
   * Foreground color of warning squigglies in the editor.
   */
  "editorWarning.foreground": ColorSchema.optional(),

  /**
   * Border color of warning boxes in the editor.
   */
  "editorWarning.border": ColorSchema.optional(),

  /**
   * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorWarning.background": ColorSchema.optional(),

  /**
   * Foreground color of info squigglies in the editor.
   */
  "editorInfo.foreground": ColorSchema.optional(),

  /**
   * Border color of info boxes in the editor.
   */
  "editorInfo.border": ColorSchema.optional(),

  /**
   * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorInfo.background": ColorSchema.optional(),

  /**
   * Foreground color of hints in the editor.
   */
  "editorHint.foreground": ColorSchema.optional(),

  /**
   * Border color of hint boxes in the editor.
   */
  "editorHint.border": ColorSchema.optional(),

  /**
   * The color used for the problems error icon.
   */
  "problemsErrorIcon.foreground": ColorSchema.optional(),

  /**
   * The color used for the problems warning icon.
   */
  "problemsWarningIcon.foreground": ColorSchema.optional(),

  /**
   * The color used for the problems info icon.
   */
  "problemsInfoIcon.foreground": ColorSchema.optional(),

  /**
   * Border color of unnecessary (unused) source code in the editor.
   */
  "editorUnnecessaryCode.border": ColorSchema.optional(),

  /**
   * Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity.
   */
  "editorUnnecessaryCode.opacity": ColorSchema.optional(),

  /**
   * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
   */
  "editorGutter.background": ColorSchema.optional(),

  /**
   * Editor gutter background color for lines that are modified.
   */
  "editorGutter.modifiedBackground": ColorSchema.optional(),

  /**
   * Editor gutter secondary background color for lines that are modified.
   */
  "editorGutter.modifiedSecondaryBackground": ColorSchema.optional(),

  /**
   * Editor gutter background color for lines that are added.
   */
  "editorGutter.addedBackground": ColorSchema.optional(),

  /**
   * Editor gutter secondary background color for lines that are added.
   */
  "editorGutter.addedSecondaryBackground": ColorSchema.optional(),

  /**
   * Editor gutter background color for lines that are deleted.
   */
  "editorGutter.deletedBackground": ColorSchema.optional(),

  /**
   * Editor gutter secondary background color for lines that are deleted.
   */
  "editorGutter.deletedSecondaryBackground": ColorSchema.optional(),

  /**
   * Color of the gutter comment decorations in the editor.
   */
  "editorGutter.commentRangeForeground": ColorSchema.optional(),

  /**
   * Color of the fold icon in the editor gutter.
   */
  "editorGutter.foldingControlForeground": ColorSchema.optional(),

  /**
   * Border color of the gutter comment decorations in the editor.
   */
  "editorGutter.commentGlyphForeground": ColorSchema.optional(),

  /**
   * Color of the decoration when a line is uncommented.
   */
  "editorGutter.commentUnresolvedGlyphForeground": ColorSchema.optional(),

  /**
   * Editor gutter decoration color for gutter item glyphs.
   */
  "editorGutter.itemGlyphForeground": ColorSchema.optional(),

  /**
   * Editor gutter decoration color for gutter item background. This color should be opaque.
   */
  "editorGutter.itemBackground": ColorSchema.optional(),

  /**
   * Background color of the editor sticky scroll.
   */
  "editorStickyScroll.background": ColorSchema.optional(),

  /**
   * Border color of sticky scroll in the editor.
   */
  "editorStickyScroll.border": ColorSchema.optional(),

  /**
   * Shadow color of sticky scroll in the editor.
   */
  "editorStickyScroll.shadow": ColorSchema.optional(),

  /**
   * Background color of sticky scroll when hovering.
   */
  "editorStickyScrollHover.background": ColorSchema.optional(),

  /**
   * Background color of the gutter part of sticky scroll in the editor.
   */
  "editorStickyScrollGutter.background": ColorSchema.optional(),
});

/**
 * Editor Comments Widget colors for reviewing pull requests.
 */
export const EditorCommentsWidgetColorsSchema = z.strictObject({
  /**
   * Color of borders and arrow for resolved comments.
   */
  "editorCommentsWidget.resolvedBorder": ColorSchema.optional(),

  /**
   * Color of borders and arrow for unresolved comments.
   */
  "editorCommentsWidget.unresolvedBorder": ColorSchema.optional(),

  /**
   * Color of background for comment ranges.
   */
  "editorCommentsWidget.rangeBackground": ColorSchema.optional(),

  /**
   * Color of background for currently selected or hovered comment range.
   */
  "editorCommentsWidget.rangeActiveBackground": ColorSchema.optional(),

  /**
   * Background color for comment reply input box.
   */
  "editorCommentsWidget.replyInputBackground": ColorSchema.optional(),
});

/**
 * Diff Editor Colors for side-by-side diff views.
 */
export const DiffEditorColorsSchema = z.strictObject({
  /**
   * Background color for inserted text. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.insertedTextBackground": ColorSchema.optional(),

  /**
   * Outline color for inserted text.
   */
  "diffEditor.insertedTextBorder": ColorSchema.optional(),

  /**
   * Background color for removed text. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.removedTextBackground": ColorSchema.optional(),

  /**
   * Outline color for removed text.
   */
  "diffEditor.removedTextBorder": ColorSchema.optional(),

  /**
   * Border color between the two text editors.
   */
  "diffEditor.border": ColorSchema.optional(),

  /**
   * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
   */
  "diffEditor.diagonalFill": ColorSchema.optional(),

  /**
   * Background color for lines that were inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.insertedLineBackground": ColorSchema.optional(),

  /**
   * Background color for lines that were removed. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.removedLineBackground": ColorSchema.optional(),

  /**
   * Background color for the margin where lines were inserted.
   */
  "diffEditorGutter.insertedLineBackground": ColorSchema.optional(),

  /**
   * Background color for the margin where lines were removed.
   */
  "diffEditorGutter.removedLineBackground": ColorSchema.optional(),

  /**
   * Diff overview ruler foreground for inserted content.
   */
  "diffEditorOverview.insertedForeground": ColorSchema.optional(),

  /**
   * Diff overview ruler foreground for removed content.
   */
  "diffEditorOverview.removedForeground": ColorSchema.optional(),

  /**
   * The color of unchanged blocks in the diff editor.
   */
  "diffEditor.unchangedRegionBackground": ColorSchema.optional(),

  /**
   * The foreground color of unchanged blocks in the diff editor.
   */
  "diffEditor.unchangedRegionForeground": ColorSchema.optional(),

  /**
   * The color of the shadow around unchanged region widgets.
   */
  "diffEditor.unchangedRegionShadow": ColorSchema.optional(),

  /**
   * The color of unchanged code in the diff editor.
   */
  "diffEditor.unchangedCodeBackground": ColorSchema.optional(),

  /**
   * The background color for text that got moved in the diff editor.
   */
  "diffEditor.move.border": ColorSchema.optional(),

  /**
   * The border color for text that got moved in the diff editor.
   */
  "diffEditor.moveActive.border": ColorSchema.optional(),
});

/**
 * Multi Diff Editor Colors for multi file diff editor.
 */
export const MultiDiffEditorColorsSchema = z.strictObject({
  /**
   * The background color of the diff editor's header.
   */
  "multiDiffEditor.headerBackground": ColorSchema.optional(),

  /**
   * The background color of the multi file diff editor.
   */
  "multiDiffEditor.background": ColorSchema.optional(),

  /**
   * The border color of the multi file diff editor.
   */
  "multiDiffEditor.border": ColorSchema.optional(),
});

/**
 * Merge Editor Colors for 3-way merge conflicts.
 */
export const MergeEditorColorsSchema = z.strictObject({
  /**
   * The background color for changes.
   */
  "mergeEditor.change.background": ColorSchema.optional(),

  /**
   * The background color for word changes.
   */
  "mergeEditor.change.word.background": ColorSchema.optional(),

  /**
   * The border color of unhandled unfocused conflicts.
   */
  "mergeEditor.conflict.unhandledUnfocused.border": ColorSchema.optional(),

  /**
   * The border color of unhandled focused conflicts.
   */
  "mergeEditor.conflict.unhandledFocused.border": ColorSchema.optional(),

  /**
   * The border color of handled unfocused conflicts.
   */
  "mergeEditor.conflict.handledUnfocused.border": ColorSchema.optional(),

  /**
   * The border color of handled focused conflicts.
   */
  "mergeEditor.conflict.handledFocused.border": ColorSchema.optional(),

  /**
   * The foreground color for changes in input 1.
   */
  "mergeEditor.conflict.handled.minimapOverViewRuler": ColorSchema.optional(),

  /**
   * The foreground color for changes in input 1.
   */
  "mergeEditor.conflict.unhandled.minimapOverViewRuler": ColorSchema.optional(),

  /**
   * The background of the "Conflicting Lines" text.
   */
  "mergeEditor.conflictingLines.background": ColorSchema.optional(),

  /**
   * The background color for changes in base.
   */
  "mergeEditor.changeBase.background": ColorSchema.optional(),

  /**
   * The background color for word changes in base.
   */
  "mergeEditor.changeBase.word.background": ColorSchema.optional(),

  /**
   * The background color of decorations in input 1.
   */
  "mergeEditor.conflict.input1.background": ColorSchema.optional(),

  /**
   * The background color of decorations in input 2.
   */
  "mergeEditor.conflict.input2.background": ColorSchema.optional(),
});

/**
 * Chat Colors for AI chat interfaces.
 */
export const ChatColorsSchema = z.strictObject({
  /**
   * Background color for chat request messages.
   */
  "chat.requestBackground": ColorSchema.optional(),

  /**
   * Border color for chat request messages.
   */
  "chat.requestBorder": ColorSchema.optional(),

  /**
   * Slash command background color in chat.
   */
  "chat.slashCommandBackground": ColorSchema.optional(),

  /**
   * Slash command foreground color in chat.
   */
  "chat.slashCommandForeground": ColorSchema.optional(),

  /**
   * Avatar background color in chat.
   */
  "chat.avatarBackground": ColorSchema.optional(),

  /**
   * Avatar foreground color in chat.
   */
  "chat.avatarForeground": ColorSchema.optional(),

  /**
   * The foreground color of a chat edited file in the edited file list.
   */
  "chat.editedFileForeground": ColorSchema.optional(),

  /**
   * Foreground color of lines added in chat code block pill.
   */
  "chat.linesAddedForeground": ColorSchema.optional(),

  /**
   * Foreground color of lines removed in chat code block pill.
   */
  "chat.linesRemovedForeground": ColorSchema.optional(),

  /**
   * Border color of code blocks within the chat request bubble.
   */
  "chat.requestCodeBorder": ColorSchema.optional(),

  /**
   * Background color of the chat request bubble.
   */
  "chat.requestBubbleBackground": ColorSchema.optional(),

  /**
   * Background color of the chat request bubble on hover.
   */
  "chat.requestBubbleHoverBackground": ColorSchema.optional(),

  /**
   * Chat checkpoint separator color.
   */
  "chat.checkpointSeparator": ColorSchema.optional(),
});

/**
 * Inline Chat Colors for inline AI chat interfaces.
 */
export const InlineChatColorsSchema = z.strictObject({
  /**
   * Background color for inline chat.
   */
  "inlineChat.background": ColorSchema.optional(),

  /**
   * Border color for inline chat.
   */
  "inlineChat.border": ColorSchema.optional(),

  /**
   * Shadow color for inline chat.
   */
  "inlineChat.shadow": ColorSchema.optional(),

  /**
   * Background color for inline chat region highlights.
   */
  "inlineChat.regionHighlight": ColorSchema.optional(),

  /**
   * Background color for inline chat input.
   */
  "inlineChatInput.background": ColorSchema.optional(),

  /**
   * Border color for inline chat input.
   */
  "inlineChatInput.border": ColorSchema.optional(),

  /**
   * Background color for inline chat input when focused.
   */
  "inlineChatInput.focusBorder": ColorSchema.optional(),

  /**
   * Foreground color for inline chat input placeholder.
   */
  "inlineChatInput.placeholderForeground": ColorSchema.optional(),

  /**
   * Background color for inline chat diff inserted text.
   */
  "inlineChatDiff.inserted": ColorSchema.optional(),

  /**
   * Background color for inline chat diff removed text.
   */
  "inlineChatDiff.removed": ColorSchema.optional(),
});

/**
 * Inline Edit Colors for inline editing suggestions.
 */
export const InlineEditColorsSchema = z.strictObject({
  /**
   * Border color for the primary inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.primaryBorder": ColorSchema.optional(),

  /**
   * Foreground color for the primary inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.primaryForeground": ColorSchema.optional(),

  /**
   * Background color for the primary inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.primaryBackground": ColorSchema.optional(),

  /**
   * Border color for the secondary inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.secondaryBorder": ColorSchema.optional(),

  /**
   * Foreground color for the secondary inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.secondaryForeground": ColorSchema.optional(),

  /**
   * Background color for the secondary inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.secondaryBackground": ColorSchema.optional(),

  /**
   * Border color for the successful inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.successfulBorder": ColorSchema.optional(),

  /**
   * Foreground color for the successful inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.successfulForeground": ColorSchema.optional(),

  /**
   * Background color for the successful inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.successfulBackground": ColorSchema.optional(),

  /**
   * Background color for the inline edit gutter indicator.
   */
  "inlineEdit.gutterIndicator.background": ColorSchema.optional(),

  /**
   * Gutter indicator foreground color for inline edit.
   */
  "inlineEdit.gutterIndicator.foreground": ColorSchema.optional(),

  /**
   * Background color for the original region in inline edit.
   */
  "inlineEdit.originalBackground": ColorSchema.optional(),

  /**
   * Background color for the modified region in inline edit.
   */
  "inlineEdit.modifiedBackground": ColorSchema.optional(),

  /**
   * Background color for unchanged lines in inline edit.
   */
  "inlineEdit.unchangedLineBackground": ColorSchema.optional(),

  /**
   * Background color for unchanged text in inline edit.
   */
  "inlineEdit.unchangedTextBackground": ColorSchema.optional(),

  /**
   * Background color for inserted lines in inline edit.
   */
  "inlineEdit.insertedLineBackground": ColorSchema.optional(),

  /**
   * Background color for inserted text in inline edit.
   */
  "inlineEdit.insertedTextBackground": ColorSchema.optional(),

  /**
   * Background color for removed lines in inline edit.
   */
  "inlineEdit.removedLineBackground": ColorSchema.optional(),

  /**
   * Background color for removed text in inline edit.
   */
  "inlineEdit.removedTextBackground": ColorSchema.optional(),

  /**
   * Background color for modified changed lines in inline edit.
   */
  "inlineEdit.modifiedChangedLineBackground": ColorSchema.optional(),

  /**
   * Background color for modified changed text in inline edit.
   */
  "inlineEdit.modifiedChangedTextBackground": ColorSchema.optional(),

  /**
   * Background color for original changed lines in inline edit.
   */
  "inlineEdit.originalChangedLineBackground": ColorSchema.optional(),

  /**
   * Background color for original changed text in inline edit.
   */
  "inlineEdit.originalChangedTextBackground": ColorSchema.optional(),

  /**
   * Border color for the original text in inline edits.
   */
  "inlineEdit.originalBorder": ColorSchema.optional(),

  /**
   * Border color for the modified text in inline edits.
   */
  "inlineEdit.modifiedBorder": ColorSchema.optional(),

  /**
   * Border color for inline edit.
   */
  "inlineEdit.border": ColorSchema.optional(),

  /**
   * Unchanged region border color for inline edit.
   */
  "inlineEdit.unchangedRegionBorder": ColorSchema.optional(),

  /**
   * Unchanged region foreground color for inline edit.
   */
  "inlineEdit.unchangedRegionForeground": ColorSchema.optional(),

  /**
   * Unchanged region background color for inline edit.
   */
  "inlineEdit.unchangedRegionBackground": ColorSchema.optional(),

  /**
   * Background color for tab that will be accepted in inline edit.
   */
  "inlineEdit.tabWillAcceptBackground": ColorSchema.optional(),

  /**
   * Foreground color for tab that will be accepted in inline edit.
   */
  "inlineEdit.tabWillAcceptForeground": ColorSchema.optional(),

  /**
   * Modified border color for the inline edits widget when tab will accept it.
   */
  "inlineEdit.tabWillAcceptModifiedBorder": ColorSchema.optional(),

  /**
   * Original border color for the inline edits widget over the original text when tab will accept it.
   */
  "inlineEdit.tabWillAcceptOriginalBorder": ColorSchema.optional(),
});

/**
 * Panel Chat Colors for chat in the panel area.
 */
export const PanelChatColorsSchema = z.strictObject({
  /**
   * Border color for the panel chat.
   */
  "panelChat.border": ColorSchema.optional(),

  /**
   * Background color for the panel chat.
   */
  "panelChat.background": ColorSchema.optional(),

  /**
   * The border color for the current interactive code cell when the editor has focus.
   */
  "interactive.activeCodeBorder": ColorSchema.optional(),

  /**
   * The border color for the current interactive code cell when the editor does not have focus.
   */
  "interactive.inactiveCodeBorder": ColorSchema.optional(),
});

/**
 * Editor Widget Colors for widgets like find, replace, and suggest.
 */
export const EditorWidgetColorsSchema = z.strictObject({
  /**
   * Background color of editor widgets, such as Find/Replace.
   */
  "editorWidget.background": ColorSchema.optional(),

  /**
   * Foreground color of editor widgets, such as Find/Replace.
   */
  "editorWidget.foreground": ColorSchema.optional(),

  /**
   * Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
   */
  "editorWidget.border": ColorSchema.optional(),

  /**
   * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
   */
  "editorWidget.resizeBorder": ColorSchema.optional(),

  /**
   * Background color of the suggestion widget.
   */
  "editorSuggestWidget.background": ColorSchema.optional(),

  /**
   * Border color of the suggestion widget.
   */
  "editorSuggestWidget.border": ColorSchema.optional(),

  /**
   * Foreground color of the suggestion widget.
   */
  "editorSuggestWidget.foreground": ColorSchema.optional(),

  /**
   * Color of the match highlights in the suggestion widget.
   */
  "editorSuggestWidget.highlightForeground": ColorSchema.optional(),

  /**
   * Background color of the selected entry in the suggestion widget.
   */
  "editorSuggestWidget.selectedBackground": ColorSchema.optional(),

  /**
   * Foreground color of the selected entry in the suggestion widget.
   */
  "editorSuggestWidget.selectedForeground": ColorSchema.optional(),

  /**
   * Icon foreground color of the selected entry in the suggestion widget.
   */
  "editorSuggestWidget.selectedIconForeground": ColorSchema.optional(),

  /**
   * Background color of the focused entry in the suggestion widget.
   */
  "editorSuggestWidget.focusHighlightForeground": ColorSchema.optional(),

  /**
   * Foreground color of the suggest widget status.
   */
  "editorSuggestWidgetStatus.foreground": ColorSchema.optional(),

  /**
   * Background color of the editor hover.
   */
  "editorHoverWidget.background": ColorSchema.optional(),

  /**
   * Foreground color of the editor hover.
   */
  "editorHoverWidget.foreground": ColorSchema.optional(),

  /**
   * Border color of the editor hover.
   */
  "editorHoverWidget.border": ColorSchema.optional(),

  /**
   * Background color of the editor hover status bar.
   */
  "editorHoverWidget.statusBarBackground": ColorSchema.optional(),

  /**
   * Foreground color of the editor hover highlighted text.
   */
  "editorHoverWidget.highlightForeground": ColorSchema.optional(),

  /**
   * Border color of the ghost text shown by inline completion providers and the suggest preview.
   */
  "editorGhostText.border": ColorSchema.optional(),

  /**
   * Background color of the ghost text in the editor.
   */
  "editorGhostText.background": ColorSchema.optional(),

  /**
   * Foreground color of the ghost text shown by inline completion providers and the suggest preview.
   */
  "editorGhostText.foreground": ColorSchema.optional(),

  /**
   * Exception widget background color.
   */
  "debugExceptionWidget.background": ColorSchema.optional(),

  /**
   * Exception widget border color.
   */
  "debugExceptionWidget.border": ColorSchema.optional(),

  /**
   * Editor marker navigation widget background.
   */
  "editorMarkerNavigation.background": ColorSchema.optional(),

  /**
   * Editor marker navigation widget error color.
   */
  "editorMarkerNavigationError.background": ColorSchema.optional(),

  /**
   * Editor marker navigation widget warning color.
   */
  "editorMarkerNavigationWarning.background": ColorSchema.optional(),

  /**
   * Editor marker navigation widget info color.
   */
  "editorMarkerNavigationInfo.background": ColorSchema.optional(),

  /**
   * Editor marker navigation widget error header background.
   */
  "editorMarkerNavigationError.headerBackground": ColorSchema.optional(),

  /**
   * Editor marker navigation widget warning header background.
   */
  "editorMarkerNavigationWarning.headerBackground": ColorSchema.optional(),

  /**
   * Editor marker navigation widget info header background.
   */
  "editorMarkerNavigationInfo.headerBackground": ColorSchema.optional(),
});

/**
 * Peek View Colors for peek view containers that show references and declarations.
 */
export const PeekViewColorsSchema = z.strictObject({
  /**
   * Background color of the peek view title area.
   */
  "peekViewTitle.background": ColorSchema.optional(),

  /**
   * Color of the peek view title.
   */
  "peekViewTitleLabel.foreground": ColorSchema.optional(),

  /**
   * Color of the peek view title info.
   */
  "peekViewTitleDescription.foreground": ColorSchema.optional(),

  /**
   * Background color of the peek view editor.
   */
  "peekViewEditor.background": ColorSchema.optional(),

  /**
   * Background color of the gutter in the peek view editor.
   */
  "peekViewEditorGutter.background": ColorSchema.optional(),

  /**
   * Background color of the peek view result list.
   */
  "peekViewResult.background": ColorSchema.optional(),

  /**
   * Foreground color for file nodes in the peek view result list.
   */
  "peekViewResult.fileForeground": ColorSchema.optional(),

  /**
   * Foreground color for line nodes in the peek view result list.
   */
  "peekViewResult.lineForeground": ColorSchema.optional(),

  /**
   * Match highlight color in the peek view result list.
   */
  "peekViewResult.matchHighlightBackground": ColorSchema.optional(),

  /**
   * Background color of the selected entry in the peek view result list.
   */
  "peekViewResult.selectionBackground": ColorSchema.optional(),

  /**
   * Foreground color of the selected entry in the peek view result list.
   */
  "peekViewResult.selectionForeground": ColorSchema.optional(),

  /**
   * Match highlights in the peek view editor.
   */
  "peekViewEditor.matchHighlightBackground": ColorSchema.optional(),

  /**
   * Border color of the peek view editor match highlights.
   */
  "peekViewEditor.matchHighlightBorder": ColorSchema.optional(),

  /**
   * Border color of the peek view borders and arrow.
   */
  "peekView.border": ColorSchema.optional(),

  /**
   * Background color of sticky scroll in the peek view editor.
   */
  "peekViewEditorStickyScroll.background": ColorSchema.optional(),

  /**
   * Background color of the gutter part of sticky scroll in the peek view editor.
   */
  "peekViewEditorStickyScrollGutter.background": ColorSchema.optional(),
});

/**
 * Merge Conflicts Colors for highlighting merge conflicts in the editor.
 */
export const MergeConflictsColorsSchema = z.strictObject({
  /**
   * Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.currentHeaderBackground": ColorSchema.optional(),

  /**
   * Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.currentContentBackground": ColorSchema.optional(),

  /**
   * Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.incomingHeaderBackground": ColorSchema.optional(),

  /**
   * Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.incomingContentBackground": ColorSchema.optional(),

  /**
   * Border color on headers and the splitter in inline merge conflicts.
   */
  "merge.border": ColorSchema.optional(),

  /**
   * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.commonContentBackground": ColorSchema.optional(),

  /**
   * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.commonHeaderBackground": ColorSchema.optional(),

  /**
   * Current overview ruler foreground for inline merge conflicts.
   */
  "editorOverviewRuler.currentContentForeground": ColorSchema.optional(),

  /**
   * Incoming overview ruler foreground for inline merge conflicts.
   */
  "editorOverviewRuler.incomingContentForeground": ColorSchema.optional(),

  /**
   * Common ancestor overview ruler foreground for inline merge conflicts.
   */
  "editorOverviewRuler.commonContentForeground": ColorSchema.optional(),

  /**
   * Find match overview ruler foreground for inline merge conflicts.
   */
  "editorOverviewRuler.findMatchForeground": ColorSchema.optional(),

  /**
   * The foreground color for changes in the editor overview ruler.
   */
  "editorOverviewRuler.commentForeground": ColorSchema.optional(),

  /**
   * The foreground color for unresolved comments in the editor overview ruler.
   */
  "editorOverviewRuler.commentUnresolvedForeground": ColorSchema.optional(),
});

/**
 * Panel Colors for the panel at the bottom containing output, terminal, problems, etc.
 */
export const PanelColorsSchema = z.strictObject({
  /**
   * Panel background color.
   */
  "panel.background": ColorSchema.optional(),

  /**
   * Panel border color to separate the panel from the editor.
   */
  "panel.border": ColorSchema.optional(),

  /**
   * Border color for the active panel title.
   */
  "panelTitle.activeBorder": ColorSchema.optional(),

  /**
   * Title color for the active panel.
   */
  "panelTitle.activeForeground": ColorSchema.optional(),

  /**
   * Title color for the inactive panel.
   */
  "panelTitle.inactiveForeground": ColorSchema.optional(),

  /**
   * Panel title border color on the bottom, separating the title from the views.
   */
  "panelTitle.border": ColorSchema.optional(),

  /**
   * Panel title badge background color.
   */
  "panelTitleBadge.background": ColorSchema.optional(),

  /**
   * Panel title badge foreground color.
   */
  "panelTitleBadge.foreground": ColorSchema.optional(),

  /**
   * Input box border for inputs in the panel.
   */
  "panelInput.border": ColorSchema.optional(),

  /**
   * Panel section border color used when multiple views are displayed in the panel at the same time.
   */
  "panelSection.border": ColorSchema.optional(),

  /**
   * Panel section header background color.
   */
  "panelSection.dropBackground": ColorSchema.optional(),

  /**
   * Drag and drop feedback color for the panel sections. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  "panel.dropBorder": ColorSchema.optional(),

  /**
   * Panel section header background color.
   */
  "panelSectionHeader.background": ColorSchema.optional(),

  /**
   * Panel section header foreground color.
   */
  "panelSectionHeader.foreground": ColorSchema.optional(),

  /**
   * Panel section header border color.
   */
  "panelSectionHeader.border": ColorSchema.optional(),

  /**
   * Panel sticky scroll background color.
   */
  "panelStickyScroll.background": ColorSchema.optional(),

  /**
   * Panel sticky scroll border color.
   */
  "panelStickyScroll.border": ColorSchema.optional(),

  /**
   * Panel sticky scroll shadow color.
   */
  "panelStickyScroll.shadow": ColorSchema.optional(),

  /**
   * Output view background color.
   */
  "outputView.background": ColorSchema.optional(),

  /**
   * Output view sticky scroll background color.
   */
  "outputViewStickyScroll.background": ColorSchema.optional(),
});

/**
 * Status Bar Colors for the status bar at the bottom of the workbench.
 */
export const StatusBarColorsSchema = z.strictObject({
  /**
   * Status Bar background color.
   */
  "statusBar.background": ColorSchema.optional(),

  /**
   * Status Bar foreground color.
   */
  "statusBar.foreground": ColorSchema.optional(),

  /**
   * Status Bar border color separating the Status Bar and editor.
   */
  "statusBar.border": ColorSchema.optional(),

  /**
   * Status Bar background color when a program is being debugged.
   */
  "statusBar.debuggingBackground": ColorSchema.optional(),

  /**
   * Status Bar foreground color when a program is being debugged.
   */
  "statusBar.debuggingForeground": ColorSchema.optional(),

  /**
   * Status Bar border color separating the Status Bar and editor when a program is being debugged.
   */
  "statusBar.debuggingBorder": ColorSchema.optional(),

  /**
   * Status Bar background color when no folder is opened.
   */
  "statusBar.noFolderBackground": ColorSchema.optional(),

  /**
   * Status Bar foreground color when no folder is opened.
   */
  "statusBar.noFolderForeground": ColorSchema.optional(),

  /**
   * Status Bar border color separating the Status Bar and editor when no folder is opened.
   */
  "statusBar.noFolderBorder": ColorSchema.optional(),

  /**
   * Status Bar item background color when clicking.
   */
  "statusBarItem.activeBackground": ColorSchema.optional(),

  /**
   * Status Bar item background color when hovering.
   */
  "statusBarItem.hoverBackground": ColorSchema.optional(),

  /**
   * Status Bar item foreground color when hovering.
   */
  "statusBarItem.hoverForeground": ColorSchema.optional(),

  /**
   * Status Bar prominent items foreground color.
   */
  "statusBarItem.prominentForeground": ColorSchema.optional(),

  /**
   * Status Bar prominent items background color.
   */
  "statusBarItem.prominentBackground": ColorSchema.optional(),

  /**
   * Status Bar prominent items background color when hovering.
   */
  "statusBarItem.prominentHoverBackground": ColorSchema.optional(),

  /**
   * Status Bar prominent items foreground color when hovering.
   */
  "statusBarItem.prominentHoverForeground": ColorSchema.optional(),

  /**
   * Background color for the remote indicator on the status bar.
   */
  "statusBarItem.remoteBackground": ColorSchema.optional(),

  /**
   * Foreground color for the remote indicator on the status bar.
   */
  "statusBarItem.remoteForeground": ColorSchema.optional(),

  /**
   * Foreground color for the remote indicator on the status bar when hovering.
   */
  "statusBarItem.remoteHoverForeground": ColorSchema.optional(),

  /**
   * Background color for the remote indicator on the status bar when hovering.
   */
  "statusBarItem.remoteHoverBackground": ColorSchema.optional(),

  /**
   * Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
   */
  "statusBarItem.errorBackground": ColorSchema.optional(),

  /**
   * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
   */
  "statusBarItem.errorForeground": ColorSchema.optional(),

  /**
   * Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions.
   */
  "statusBarItem.errorHoverBackground": ColorSchema.optional(),

  /**
   * Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions.
   */
  "statusBarItem.errorHoverForeground": ColorSchema.optional(),

  /**
   * Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions.
   */
  "statusBarItem.warningBackground": ColorSchema.optional(),

  /**
   * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions.
   */
  "statusBarItem.warningForeground": ColorSchema.optional(),

  /**
   * Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions.
   */
  "statusBarItem.warningHoverBackground": ColorSchema.optional(),

  /**
   * Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions.
   */
  "statusBarItem.warningHoverForeground": ColorSchema.optional(),

  /**
   * Status bar item background color when hovering an item that contains two hovers.
   */
  "statusBarItem.compactHoverBackground": ColorSchema.optional(),

  /**
   * Status bar item border color when focused.
   */
  "statusBarItem.focusBorder": ColorSchema.optional(),

  /**
   * Status bar item foreground color when offline.
   */
  "statusBarItem.offlineBackground": ColorSchema.optional(),

  /**
   * Status bar item background color when offline.
   */
  "statusBarItem.offlineForeground": ColorSchema.optional(),

  /**
   * Status bar item background color when hovering and offline.
   */
  "statusBarItem.offlineHoverBackground": ColorSchema.optional(),

  /**
   * Status bar item foreground color when hovering and offline.
   */
  "statusBarItem.offlineHoverForeground": ColorSchema.optional(),

  /**
   * Status bar focus border color when focused on keyboard navigation.
   */
  "statusBar.focusBorder": ColorSchema.optional(),
});

/**
 * Title Bar Colors for the title bar at the top of the workbench (when using custom title bar).
 */
export const TitleBarColorsSchema = z.strictObject({
  /**
   * Title Bar background when the window is active.
   */
  "titleBar.activeBackground": ColorSchema.optional(),

  /**
   * Title Bar foreground when the window is active.
   */
  "titleBar.activeForeground": ColorSchema.optional(),

  /**
   * Title Bar background when the window is inactive.
   */
  "titleBar.inactiveBackground": ColorSchema.optional(),

  /**
   * Title Bar foreground when the window is inactive.
   */
  "titleBar.inactiveForeground": ColorSchema.optional(),

  /**
   * Title Bar border color.
   */
  "titleBar.border": ColorSchema.optional(),
});

/**
 * Menu Bar Colors for the menu bar at the top of the workbench.
 */
export const MenuBarColorsSchema = z.strictObject({
  /**
   * Foreground color of menu items.
   */
  "menubar.selectionForeground": ColorSchema.optional(),

  /**
   * Background color of menu items.
   */
  "menubar.selectionBackground": ColorSchema.optional(),

  /**
   * Border color of menu items.
   */
  "menubar.selectionBorder": ColorSchema.optional(),

  /**
   * Foreground color of the selected menu item in menus.
   */
  "menu.foreground": ColorSchema.optional(),

  /**
   * Background color of the selected menu item in menus.
   */
  "menu.background": ColorSchema.optional(),

  /**
   * Foreground color of the selected menu item in menus.
   */
  "menu.selectionForeground": ColorSchema.optional(),

  /**
   * Background color of the selected menu item in menus.
   */
  "menu.selectionBackground": ColorSchema.optional(),

  /**
   * Border color of the selected menu item in menus.
   */
  "menu.selectionBorder": ColorSchema.optional(),

  /**
   * Color of a separator menu item in menus.
   */
  "menu.separatorBackground": ColorSchema.optional(),

  /**
   * Border color of menus.
   */
  "menu.border": ColorSchema.optional(),
});

/**
 * Command Center Colors for the command center in the title bar.
 */
export const CommandCenterColorsSchema = z.strictObject({
  /**
   * Command Center foreground color.
   */
  "commandCenter.foreground": ColorSchema.optional(),

  /**
   * Command Center background color when the window is active.
   */
  "commandCenter.activeBackground": ColorSchema.optional(),

  /**
   * Command Center background color.
   */
  "commandCenter.background": ColorSchema.optional(),

  /**
   * Command Center border color.
   */
  "commandCenter.border": ColorSchema.optional(),

  /**
   * Command Center foreground color when the window is inactive.
   */
  "commandCenter.inactiveForeground": ColorSchema.optional(),

  /**
   * Command Center background color when the window is inactive.
   */
  "commandCenter.inactiveBorder": ColorSchema.optional(),

  /**
   * Command Center foreground color when hovering over the active Command Center.
   */
  "commandCenter.activeForeground": ColorSchema.optional(),

  /**
   * Command Center border color when debugging.
   */
  "commandCenter.debuggingBackground": ColorSchema.optional(),
});

/**
 * Notification Colors for notification toasts.
 */
export const NotificationColorsSchema = z.strictObject({
  /**
   * Notification Center background color.
   */
  "notificationCenter.border": ColorSchema.optional(),

  /**
   * Notification Center header foreground color.
   */
  "notificationCenterHeader.foreground": ColorSchema.optional(),

  /**
   * Notification Center header background color.
   */
  "notificationCenterHeader.background": ColorSchema.optional(),

  /**
   * Notification toast background color.
   */
  "notificationToast.border": ColorSchema.optional(),

  /**
   * Notification background color.
   */
  "notifications.foreground": ColorSchema.optional(),

  /**
   * Notification foreground color.
   */
  "notifications.background": ColorSchema.optional(),

  /**
   * Notification border color separating from other notifications in the Notification Center.
   */
  "notifications.border": ColorSchema.optional(),

  /**
   * Notification links foreground color.
   */
  "notificationLink.foreground": ColorSchema.optional(),

  /**
   * Notification error icon foreground color.
   */
  "notificationsErrorIcon.foreground": ColorSchema.optional(),

  /**
   * Notification warning icon foreground color.
   */
  "notificationsWarningIcon.foreground": ColorSchema.optional(),

  /**
   * Notification info icon foreground color.
   */
  "notificationsInfoIcon.foreground": ColorSchema.optional(),
});

/**
 * Banner Colors for the banner at the top of the workbench.
 */
export const BannerColorsSchema = z.strictObject({
  /**
   * Banner background color.
   */
  "banner.background": ColorSchema.optional(),

  /**
   * Banner foreground color.
   */
  "banner.foreground": ColorSchema.optional(),

  /**
   * Color for the icon in front of the banner text.
   */
  "banner.iconForeground": ColorSchema.optional(),
});

/**
 * Extensions Colors for the extensions view.
 */
export const ExtensionsColorsSchema = z.strictObject({
  /**
   * Extension button prominent background color.
   */
  "extensionButton.prominentBackground": ColorSchema.optional(),

  /**
   * Extension button prominent foreground color.
   */
  "extensionButton.prominentForeground": ColorSchema.optional(),

  /**
   * Extension button prominent background hover color.
   */
  "extensionButton.prominentHoverBackground": ColorSchema.optional(),

  /**
   * Extension button background color.
   */
  "extensionButton.background": ColorSchema.optional(),

  /**
   * Extension button foreground color.
   */
  "extensionButton.foreground": ColorSchema.optional(),

  /**
   * Extension button background hover color.
   */
  "extensionButton.hoverBackground": ColorSchema.optional(),

  /**
   * Extension button separator color.
   */
  "extensionButton.separator": ColorSchema.optional(),

  /**
   * Background color for the remote badge in the extensions view.
   */
  "extensionBadge.remoteBackground": ColorSchema.optional(),

  /**
   * Foreground color for the remote badge in the extensions view.
   */
  "extensionBadge.remoteForeground": ColorSchema.optional(),

  /**
   * The icon color for extension ratings.
   */
  "extensionIcon.starForeground": ColorSchema.optional(),

  /**
   * The icon color for extension verified publisher.
   */
  "extensionIcon.verifiedForeground": ColorSchema.optional(),

  /**
   * The icon color for pre-release extension.
   */
  "extensionIcon.preReleaseForeground": ColorSchema.optional(),

  /**
   * The icon color for extension sponsor.
   */
  "extensionIcon.sponsorForeground": ColorSchema.optional(),

  /**
   * The icon color for private extensions.
   */
  "extensionIcon.privateForeground": ColorSchema.optional(),

  /**
   * The icon color for MCP star.
   */
  "mcpIcon.starForeground": ColorSchema.optional(),
});

/**
 * Quick Picker Colors for the quick picker widget.
 */
export const QuickPickerColorsSchema = z.strictObject({
  /**
   * Quick picker (Quick Open) color for grouping borders.
   */
  "pickerGroup.border": ColorSchema.optional(),

  /**
   * Quick picker (Quick Open) color for grouping labels.
   */
  "pickerGroup.foreground": ColorSchema.optional(),

  /**
   * Quick input background color. The quick input widget is the container for views like the color theme picker.
   */
  "quickInput.background": ColorSchema.optional(),

  /**
   * Quick input foreground color. The quick input widget is the container for views like the color theme picker.
   */
  "quickInput.foreground": ColorSchema.optional(),

  /**
   * Quick picker background color for the focused item.
   */
  "quickInputList.focusBackground": ColorSchema.optional(),

  /**
   * Quick picker foreground color for the focused item.
   */
  "quickInputList.focusForeground": ColorSchema.optional(),

  /**
   * Quick picker icon foreground color for the focused item.
   */
  "quickInputList.focusIconForeground": ColorSchema.optional(),

  /**
   * Quick picker title background color.
   */
  "quickInputTitle.background": ColorSchema.optional(),
});

/**
 * Keybinding Label Colors for keybinding labels.
 */
export const KeybindingLabelColorsSchema = z.strictObject({
  /**
   * Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.background": ColorSchema.optional(),

  /**
   * Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.foreground": ColorSchema.optional(),

  /**
   * Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.border": ColorSchema.optional(),

  /**
   * Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.bottomBorder": ColorSchema.optional(),
});

/**
 * Integrated Terminal Colors for the integrated terminal.
 */
export const IntegratedTerminalColorsSchema = z.strictObject({
  /**
   * The background of the terminal.
   */
  "terminal.background": ColorSchema.optional(),

  /**
   * The foreground color of the terminal.
   */
  "terminal.foreground": ColorSchema.optional(),

  /**
   * The default terminal border color.
   */
  "terminal.border": ColorSchema.optional(),

  /**
   * The selection background color of the terminal.
   */
  "terminal.selectionBackground": ColorSchema.optional(),

  /**
   * The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
   */
  "terminal.selectionForeground": ColorSchema.optional(),

  /**
   * The selection background color of the terminal when it does not have focus.
   */
  "terminal.inactiveSelectionBackground": ColorSchema.optional(),

  /**
   * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  "terminal.findMatchBackground": ColorSchema.optional(),

  /**
   * Border color of the current search match in the terminal.
   */
  "terminal.findMatchBorder": ColorSchema.optional(),

  /**
   * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  "terminal.findMatchHighlightBackground": ColorSchema.optional(),

  /**
   * Border color of the other search matches in the terminal.
   */
  "terminal.findMatchHighlightBorder": ColorSchema.optional(),

  /**
   * Color of the highlight when hovering a link in the terminal.
   */
  "terminal.hoverHighlightBackground": ColorSchema.optional(),

  /**
   * The foreground color of the terminal cursor.
   */
  "terminalCursor.foreground": ColorSchema.optional(),

  /**
   * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  "terminalCursor.background": ColorSchema.optional(),

  /**
   * The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
   */
  "terminal.dropBackground": ColorSchema.optional(),

  /**
   * Border on the side of the terminal tab in the panel.
   */
  "terminal.tab.activeBorder": ColorSchema.optional(),

  /**
   * The default terminal command decoration background color.
   */
  "terminalCommandDecoration.defaultBackground": ColorSchema.optional(),

  /**
   * The terminal command decoration background color for successful commands.
   */
  "terminalCommandDecoration.successBackground": ColorSchema.optional(),

  /**
   * The terminal command decoration background color for error commands.
   */
  "terminalCommandDecoration.errorBackground": ColorSchema.optional(),

  /**
   * Overview ruler cursor color.
   */
  "terminalOverviewRuler.cursorForeground": ColorSchema.optional(),

  /**
   * Overview ruler color for find matches.
   */
  "terminalOverviewRuler.findMatchForeground": ColorSchema.optional(),

  /**
   * The overview ruler left-side border color.
   */
  "terminalOverviewRuler.border": ColorSchema.optional(),

  /**
   * The background color of the sticky scroll overlay in the terminal.
   */
  "terminalStickyScroll.background": ColorSchema.optional(),

  /**
   * The border of the sticky scroll overlay in the terminal.
   */
  "terminalStickyScroll.border": ColorSchema.optional(),

  /**
   * The background color of the sticky scroll overlay in the terminal when hovered.
   */
  "terminalStickyScrollHover.background": ColorSchema.optional(),

  /**
   * Foreground color of the terminal initial hint.
   */
  "terminal.initialHintForeground": ColorSchema.optional(),

  /**
   * The foreground color of the terminal command guide that appears to the left of a command and its output on hover.
   */
  "terminalCommandGuide.foreground": ColorSchema.optional(),

  /**
   * ANSI black color in the terminal.
   */
  "terminal.ansiBlack": ColorSchema.optional(),

  /**
   * ANSI red color in the terminal.
   */
  "terminal.ansiRed": ColorSchema.optional(),

  /**
   * ANSI green color in the terminal.
   */
  "terminal.ansiGreen": ColorSchema.optional(),

  /**
   * ANSI yellow color in the terminal.
   */
  "terminal.ansiYellow": ColorSchema.optional(),

  /**
   * ANSI blue color in the terminal.
   */
  "terminal.ansiBlue": ColorSchema.optional(),

  /**
   * ANSI magenta color in the terminal.
   */
  "terminal.ansiMagenta": ColorSchema.optional(),

  /**
   * ANSI cyan color in the terminal.
   */
  "terminal.ansiCyan": ColorSchema.optional(),

  /**
   * ANSI white color in the terminal.
   */
  "terminal.ansiWhite": ColorSchema.optional(),

  /**
   * ANSI bright black color in the terminal.
   */
  "terminal.ansiBrightBlack": ColorSchema.optional(),

  /**
   * ANSI bright red color in the terminal.
   */
  "terminal.ansiBrightRed": ColorSchema.optional(),

  /**
   * ANSI bright green color in the terminal.
   */
  "terminal.ansiBrightGreen": ColorSchema.optional(),

  /**
   * ANSI bright yellow color in the terminal.
   */
  "terminal.ansiBrightYellow": ColorSchema.optional(),

  /**
   * ANSI bright blue color in the terminal.
   */
  "terminal.ansiBrightBlue": ColorSchema.optional(),

  /**
   * ANSI bright magenta color in the terminal.
   */
  "terminal.ansiBrightMagenta": ColorSchema.optional(),

  /**
   * ANSI bright cyan color in the terminal.
   */
  "terminal.ansiBrightCyan": ColorSchema.optional(),

  /**
   * ANSI bright white color in the terminal.
   */
  "terminal.ansiBrightWhite": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for array variables.
   */
  "terminalSymbolIcon.arrayForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for boolean variables.
   */
  "terminalSymbolIcon.booleanForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for class variables.
   */
  "terminalSymbolIcon.classForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for color variables.
   */
  "terminalSymbolIcon.colorForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for constant variables.
   */
  "terminalSymbolIcon.constantForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for constructor variables.
   */
  "terminalSymbolIcon.constructorForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for enumerator variables.
   */
  "terminalSymbolIcon.enumeratorForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for enumerator member variables.
   */
  "terminalSymbolIcon.enumeratorMemberForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for event variables.
   */
  "terminalSymbolIcon.eventForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for field variables.
   */
  "terminalSymbolIcon.fieldForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for file variables.
   */
  "terminalSymbolIcon.fileForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for folder variables.
   */
  "terminalSymbolIcon.folderForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for function variables.
   */
  "terminalSymbolIcon.functionForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for interface variables.
   */
  "terminalSymbolIcon.interfaceForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for key variables.
   */
  "terminalSymbolIcon.keyForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for keyword variables.
   */
  "terminalSymbolIcon.keywordForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for method variables.
   */
  "terminalSymbolIcon.methodForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for module variables.
   */
  "terminalSymbolIcon.moduleForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for namespace variables.
   */
  "terminalSymbolIcon.namespaceForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for null variables.
   */
  "terminalSymbolIcon.nullForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for number variables.
   */
  "terminalSymbolIcon.numberForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for object variables.
   */
  "terminalSymbolIcon.objectForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for operator variables.
   */
  "terminalSymbolIcon.operatorForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for package variables.
   */
  "terminalSymbolIcon.packageForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for property variables.
   */
  "terminalSymbolIcon.propertyForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for reference variables.
   */
  "terminalSymbolIcon.referenceForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for snippet variables.
   */
  "terminalSymbolIcon.snippetForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for string variables.
   */
  "terminalSymbolIcon.stringForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for struct variables.
   */
  "terminalSymbolIcon.structForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for text variables.
   */
  "terminalSymbolIcon.textForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for type parameter variables.
   */
  "terminalSymbolIcon.typeParameterForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for unit variables.
   */
  "terminalSymbolIcon.unitForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for variable variables.
   */
  "terminalSymbolIcon.variableForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for aliases.
   */
  "terminalSymbolIcon.aliasForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for branches.
   */
  "terminalSymbolIcon.branchForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for commits.
   */
  "terminalSymbolIcon.commitForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for flags.
   */
  "terminalSymbolIcon.flagForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for options.
   */
  "terminalSymbolIcon.optionForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for option values.
   */
  "terminalSymbolIcon.optionValueForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for arguments.
   */
  "terminalSymbolIcon.argumentForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for inline suggestions.
   */
  "terminalSymbolIcon.inlineSuggestionForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for pull requests that are done.
   */
  "terminalSymbolIcon.pullRequestDoneForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for pull requests.
   */
  "terminalSymbolIcon.pullRequestForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for remotes.
   */
  "terminalSymbolIcon.remoteForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for stashes.
   */
  "terminalSymbolIcon.stashForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for symbolic link files.
   */
  "terminalSymbolIcon.symbolicLinkFileForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for symbolic link folders.
   */
  "terminalSymbolIcon.symbolicLinkFolderForeground": ColorSchema.optional(),

  /**
   * Terminal symbol icon foreground color for tags.
   */
  "terminalSymbolIcon.tagForeground": ColorSchema.optional(),
});

/**
 * Debug Colors for the debug interface.
 */
export const DebugColorsSchema = z.strictObject({
  /**
   * Background color of the top stack frame highlight in the editor.
   */
  "editor.stackFrameHighlightBackground": ColorSchema.optional(),

  /**
   * Background color of the focused stack frame highlight in the editor.
   */
  "editor.focusedStackFrameHighlightBackground": ColorSchema.optional(),

  /**
   * Color for the debug inline value text.
   */
  "editor.inlineValuesForeground": ColorSchema.optional(),

  /**
   * Color for the debug inline value background.
   */
  "editor.inlineValuesBackground": ColorSchema.optional(),

  /**
   * Debug view exception label foreground color.
   */
  "debugView.exceptionLabelForeground": ColorSchema.optional(),

  /**
   * Debug view exception label background color.
   */
  "debugView.exceptionLabelBackground": ColorSchema.optional(),

  /**
   * Debug view state label foreground color.
   */
  "debugView.stateLabelForeground": ColorSchema.optional(),

  /**
   * Debug view state label background color.
   */
  "debugView.stateLabelBackground": ColorSchema.optional(),

  /**
   * Debug view value changed highlight color.
   */
  "debugView.valueChangedHighlight": ColorSchema.optional(),

  /**
   * Debug token expression type foreground color.
   */
  "debugTokenExpression.type": ColorSchema.optional(),
});

/**
 * Debug Toolbar Colors for the debug toolbar.
 */
export const DebugToolbarColorsSchema = z.strictObject({
  /**
   * Debug toolbar background color.
   */
  "debugToolBar.background": ColorSchema.optional(),

  /**
   * Debug toolbar border color.
   */
  "debugToolBar.border": ColorSchema.optional(),
});

/**
 * Debug Icon Colors for debug icons.
 */
export const DebugIconColorsSchema = z.strictObject({
  /**
   * Icon color for breakpoints.
   */
  "debugIcon.breakpointForeground": ColorSchema.optional(),

  /**
   * Icon color for disabled breakpoints.
   */
  "debugIcon.breakpointDisabledForeground": ColorSchema.optional(),

  /**
   * Icon color for unverified breakpoints.
   */
  "debugIcon.breakpointUnverifiedForeground": ColorSchema.optional(),

  /**
   * Icon color for the current breakpoint stack frame.
   */
  "debugIcon.breakpointCurrentStackframeForeground": ColorSchema.optional(),

  /**
   * Icon color for all breakpoint stack frames.
   */
  "debugIcon.breakpointStackframeForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for start debugging.
   */
  "debugIcon.startForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for pause.
   */
  "debugIcon.pauseForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for stop.
   */
  "debugIcon.stopForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for disconnect.
   */
  "debugIcon.disconnectForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for restart.
   */
  "debugIcon.restartForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for step over.
   */
  "debugIcon.stepOverForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for step into.
   */
  "debugIcon.stepIntoForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for step out.
   */
  "debugIcon.stepOutForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for continue.
   */
  "debugIcon.continueForeground": ColorSchema.optional(),

  /**
   * Debug toolbar icon for step back.
   */
  "debugIcon.stepBackForeground": ColorSchema.optional(),

  /**
   * Foreground color for the token names shown in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.name": ColorSchema.optional(),

  /**
   * Foreground color for the token values shown in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.value": ColorSchema.optional(),

  /**
   * Foreground color for strings in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.string": ColorSchema.optional(),

  /**
   * Foreground color for booleans in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.boolean": ColorSchema.optional(),

  /**
   * Foreground color for numbers in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.number": ColorSchema.optional(),

  /**
   * Foreground color for errors in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.error": ColorSchema.optional(),

  /**
   * Foreground color for the debug console info messages.
   */
  "debugConsole.infoForeground": ColorSchema.optional(),

  /**
   * Foreground color for the debug console warning messages.
   */
  "debugConsole.warningForeground": ColorSchema.optional(),

  /**
   * Foreground color for the debug console error messages.
   */
  "debugConsole.errorForeground": ColorSchema.optional(),

  /**
   * Foreground color for the debug console source text.
   */
  "debugConsole.sourceForeground": ColorSchema.optional(),

  /**
   * Foreground color for input in the debug console.
   */
  "debugConsoleInputIcon.foreground": ColorSchema.optional(),
});

/**
 * Testing Colors for the testing view.
 */
export const TestingColorsSchema = z.strictObject({
  /**
   * Color for the 'failed' icon in the test explorer.
   */
  "testing.iconFailed": ColorSchema.optional(),

  /**
   * Color for the 'Errored' icon in the test explorer.
   */
  "testing.iconErrored": ColorSchema.optional(),

  /**
   * Color for the 'passed' icon in the test explorer.
   */
  "testing.iconPassed": ColorSchema.optional(),

  /**
   * Color for 'run' icons in the editor.
   */
  "testing.runAction": ColorSchema.optional(),

  /**
   * Color for the 'Queued' icon in the test explorer.
   */
  "testing.iconQueued": ColorSchema.optional(),

  /**
   * Color for the 'Unset' icon in the test explorer.
   */
  "testing.iconUnset": ColorSchema.optional(),

  /**
   * Color for the 'Skipped' icon in the test explorer.
   */
  "testing.iconSkipped": ColorSchema.optional(),

  /**
   * Color of the peek view borders and arrow when peeking a logged message.
   */
  "testing.peekBorder": ColorSchema.optional(),

  /**
   * Color of the peek view borders and arrow when peeking a failed test.
   */
  "testing.peekHeaderBackground": ColorSchema.optional(),

  /**
   * Text color of test error messages shown inline in the editor.
   */
  "testing.message.error.decorationForeground": ColorSchema.optional(),

  /**
   * Margin color beside error messages shown inline in the editor.
   */
  "testing.message.error.lineBackground": ColorSchema.optional(),

  /**
   * Text color of test info messages shown inline in the editor.
   */
  "testing.message.info.decorationForeground": ColorSchema.optional(),

  /**
   * Margin color beside info messages shown inline in the editor.
   */
  "testing.message.info.lineBackground": ColorSchema.optional(),

  /**
   * Color for the test coverage bar in the gutter.
   */
  "testing.coveredBackground": ColorSchema.optional(),

  /**
   * Color for the test coverage bar in the gutter for uncovered code.
   */
  "testing.uncoveredBackground": ColorSchema.optional(),

  /**
   * Border color for the test coverage bar in the gutter.
   */
  "testing.coveredBorder": ColorSchema.optional(),

  /**
   * Border color for the test coverage bar in the gutter for covered code.
   */
  "testing.uncoveredBorder": ColorSchema.optional(),

  /**
   * Gutter color for regions where code is covered by tests.
   */
  "testing.coveredGutterBackground": ColorSchema.optional(),

  /**
   * Gutter color for regions where code is not covered by tests.
   */
  "testing.uncoveredGutterBackground": ColorSchema.optional(),

  /**
   * Color for retired 'Errored' test icon in the test explorer.
   */
  "testing.iconErrored.retired": ColorSchema.optional(),

  /**
   * Color for retired 'Failed' test icon in the test explorer.
   */
  "testing.iconFailed.retired": ColorSchema.optional(),

  /**
   * Color for retired 'Passed' test icon in the test explorer.
   */
  "testing.iconPassed.retired": ColorSchema.optional(),

  /**
   * Color for retired 'Queued' test icon in the test explorer.
   */
  "testing.iconQueued.retired": ColorSchema.optional(),

  /**
   * Color for retired 'Unset' test icon in the test explorer.
   */
  "testing.iconUnset.retired": ColorSchema.optional(),

  /**
   * Color for retired 'Skipped' test icon in the test explorer.
   */
  "testing.iconSkipped.retired": ColorSchema.optional(),

  /**
   * Border color for the message peek view.
   */
  "testing.messagePeekBorder": ColorSchema.optional(),

  /**
   * Header background color for the message peek view.
   */
  "testing.messagePeekHeaderBackground": ColorSchema.optional(),

  /**
   * Background color for the coverage count badge.
   */
  "testing.coverCountBadgeBackground": ColorSchema.optional(),

  /**
   * Foreground color for the coverage count badge.
   */
  "testing.coverCountBadgeForeground": ColorSchema.optional(),

  /**
   * Badge background color for error test messages shown inline in the editor.
   */
  "testing.message.error.badgeBackground": ColorSchema.optional(),

  /**
   * Badge foreground color for error test messages shown inline in the editor.
   */
  "testing.message.error.badgeForeground": ColorSchema.optional(),
});

/**
 * Welcome Page Colors for the welcome page.
 */
export const WelcomePageColorsSchema = z.strictObject({
  /**
   * Background color for the Welcome page.
   */
  "welcomePage.background": ColorSchema.optional(),

  /**
   * Background color for the welcome page progress bars.
   */
  "welcomePage.progress.background": ColorSchema.optional(),

  /**
   * Foreground color for the welcome page progress bars.
   */
  "welcomePage.progress.foreground": ColorSchema.optional(),

  /**
   * Background color for the tiles on the welcome page.
   */
  "welcomePage.tileBackground": ColorSchema.optional(),

  /**
   * Hover background color for the tiles on the welcome page.
   */
  "welcomePage.tileHoverBackground": ColorSchema.optional(),

  /**
   * Border color for the tiles on the welcome page.
   */
  "welcomePage.tileBorder": ColorSchema.optional(),

  /**
   * Foreground color for the embedded editors on the Welcome page.
   */
  "walkthrough.embeddedEditorBackground": ColorSchema.optional(),

  /**
   * Background color for the embedded editors on the Welcome page.
   */
  "walkThrough.embeddedEditorBackground": ColorSchema.optional(),

  /**
   * Foreground color for walkthrough step titles.
   */
  "walkthrough.stepTitle.foreground": ColorSchema.optional(),
});

/**
 * Git Colors for git decorations.
 */
export const GitColorsSchema = z.strictObject({
  /**
   * Color for modified git resources. Used file labels and the SCM viewlet.
   */
  "gitDecoration.modifiedResourceForeground": ColorSchema.optional(),

  /**
   * Color for deleted git resources. Used file labels and the SCM viewlet.
   */
  "gitDecoration.deletedResourceForeground": ColorSchema.optional(),

  /**
   * Color for untracked git resources. Used file labels and the SCM viewlet.
   */
  "gitDecoration.untrackedResourceForeground": ColorSchema.optional(),

  /**
   * Color for ignored git resources. Used file labels and the SCM viewlet.
   */
  "gitDecoration.ignoredResourceForeground": ColorSchema.optional(),

  /**
   * Color for conflicting git resources. Used file labels and the SCM viewlet.
   */
  "gitDecoration.conflictingResourceForeground": ColorSchema.optional(),

  /**
   * Color for submodule git resources.
   */
  "gitDecoration.submoduleResourceForeground": ColorSchema.optional(),

  /**
   * Color for staged modifications git decorations.
   */
  "gitDecoration.stageModifiedResourceForeground": ColorSchema.optional(),

  /**
   * Color for staged deletions git decorations.
   */
  "gitDecoration.stageDeletedResourceForeground": ColorSchema.optional(),

  /**
   * Color for renamed or copied git resources. Used file labels and the SCM viewlet.
   */
  "gitDecoration.renamedResourceForeground": ColorSchema.optional(),

  /**
   * Color for added git resources. Used file labels and the SCM viewlet.
   */
  "gitDecoration.addedResourceForeground": ColorSchema.optional(),

  /**
   * Foreground color for git blame annotations in the editor.
   */
  "git.blame.editorDecorationForeground": ColorSchema.optional(),
});

/**
 * Source Control Colors for source control.
 */
export const SourceControlColorsSchema = z.strictObject({
  /**
   * SCM Provider separator border.
   */
  "scm.providerBorder": ColorSchema.optional(),

  /**
   * SCM history item additions foreground color.
   */
  "scm.historyItemAdditionsForeground": ColorSchema.optional(),

  /**
   * SCM history item deletions foreground color.
   */
  "scm.historyItemDeletionsForeground": ColorSchema.optional(),

  /**
   * SCM history item statistics border color.
   */
  "scm.historyItemStatisticsBorder": ColorSchema.optional(),

  /**
   * SCM history item selected statistics border color.
   */
  "scm.historyItemSelectedStatisticsBorder": ColorSchema.optional(),
});

/**
 * Source Control Graph Colors for the source control graph.
 */
export const SourceControlGraphColorsSchema = z.strictObject({
  /**
   * Foreground color for the current SCM history item.
   */
  "scmGraph.historyItemHoverForeground": ColorSchema.optional(),

  /**
   * Background color for the current SCM history item when hovering.
   */
  "scmGraph.historyItemHoverDefaultLabelForeground": ColorSchema.optional(),

  /**
   * Foreground color for the default label of the current SCM history item when hovering.
   */
  "scmGraph.historyItemHoverDefaultLabelBackground": ColorSchema.optional(),

  /**
   * Background color for the default label of the current SCM history item when hovering.
   */
  "scmGraph.historyItemHoverLabelForeground": ColorSchema.optional(),

  /**
   * Foreground color for labels of the current SCM history item when hovering.
   */
  "scmGraph.historyItemHoverAdditionsForeground": ColorSchema.optional(),

  /**
   * Foreground color for additions in the current SCM history item when hovering.
   */
  "scmGraph.historyItemHoverDeletionsForeground": ColorSchema.optional(),

  /**
   * Foreground color for deletions in the current SCM history item when hovering.
   */
  "scmGraph.historyItemRemovalsForeground": ColorSchema.optional(),

  /**
   * Foreground color 1 for the SCM graph.
   */
  "scmGraph.foreground1": ColorSchema.optional(),

  /**
   * Foreground color 2 for the SCM graph.
   */
  "scmGraph.foreground2": ColorSchema.optional(),

  /**
   * Foreground color 3 for the SCM graph.
   */
  "scmGraph.foreground3": ColorSchema.optional(),

  /**
   * Foreground color 4 for the SCM graph.
   */
  "scmGraph.foreground4": ColorSchema.optional(),

  /**
   * Foreground color 5 for the SCM graph.
   */
  "scmGraph.foreground5": ColorSchema.optional(),

  /**
   * Foreground color for history item ref decorations.
   */
  "scmGraph.historyItemRefColor": ColorSchema.optional(),

  /**
   * Foreground color for history item remote ref decorations.
   */
  "scmGraph.historyItemRemoteRefColor": ColorSchema.optional(),

  /**
   * Foreground color for history item base ref decorations.
   */
  "scmGraph.historyItemBaseRefColor": ColorSchema.optional(),
});

/**
 * Settings Editor Colors for the settings editor.
 */
export const SettingsEditorColorsSchema = z.strictObject({
  /**
   * The foreground color for a section header or active title.
   */
  "settings.headerForeground": ColorSchema.optional(),

  /**
   * The line that indicates a modified setting.
   */
  "settings.modifiedItemIndicator": ColorSchema.optional(),

  /**
   * Dropdown background.
   */
  "settings.dropdownBackground": ColorSchema.optional(),

  /**
   * Dropdown foreground.
   */
  "settings.dropdownForeground": ColorSchema.optional(),

  /**
   * Dropdown border.
   */
  "settings.dropdownBorder": ColorSchema.optional(),

  /**
   * Dropdown list border.
   */
  "settings.dropdownListBorder": ColorSchema.optional(),

  /**
   * Checkbox background.
   */
  "settings.checkboxBackground": ColorSchema.optional(),

  /**
   * Checkbox foreground.
   */
  "settings.checkboxForeground": ColorSchema.optional(),

  /**
   * Checkbox border.
   */
  "settings.checkboxBorder": ColorSchema.optional(),

  /**
   * The background color of a settings row when it is hovered.
   */
  "settings.rowHoverBackground": ColorSchema.optional(),

  /**
   * Text input box background.
   */
  "settings.textInputBackground": ColorSchema.optional(),

  /**
   * Text input box foreground.
   */
  "settings.textInputForeground": ColorSchema.optional(),

  /**
   * Text input box border.
   */
  "settings.textInputBorder": ColorSchema.optional(),

  /**
   * Number input box background.
   */
  "settings.numberInputBackground": ColorSchema.optional(),

  /**
   * Number input box foreground.
   */
  "settings.numberInputForeground": ColorSchema.optional(),

  /**
   * Number input box border.
   */
  "settings.numberInputBorder": ColorSchema.optional(),

  /**
   * Background color of a focused setting row.
   */
  "settings.focusedRowBackground": ColorSchema.optional(),

  /**
   * The color of the row's top and bottom border when the row is focused.
   */
  "settings.focusedRowBorder": ColorSchema.optional(),

  /**
   * The color of the header container border.
   */
  "settings.headerBorder": ColorSchema.optional(),

  /**
   * The color of the Settings editor split view sash border.
   */
  "settings.sashBorder": ColorSchema.optional(),

  /**
   * Settings editor table header background.
   */
  "settings.settingsHeaderHoverForeground": ColorSchema.optional(),
});

/**
 * Breadcrumbs Colors for breadcrumb navigation.
 */
export const BreadcrumbsColorsSchema = z.strictObject({
  /**
   * Color of breadcrumb items.
   */
  "breadcrumb.foreground": ColorSchema.optional(),

  /**
   * Background color of breadcrumb items.
   */
  "breadcrumb.background": ColorSchema.optional(),

  /**
   * Color of focused breadcrumb items.
   */
  "breadcrumb.focusForeground": ColorSchema.optional(),

  /**
   * Color of selected breadcrumb items.
   */
  "breadcrumb.activeSelectionForeground": ColorSchema.optional(),

  /**
   * Background color of breadcrumb item picker.
   */
  "breadcrumbPicker.background": ColorSchema.optional(),
});

/**
 * Snippets Colors for snippet placeholders.
 */
export const SnippetsColorsSchema = z.strictObject({
  /**
   * Highlight background color of a snippet tabstop.
   */
  "editor.snippetTabstopHighlightBackground": ColorSchema.optional(),

  /**
   * Highlight border color of a snippet tabstop.
   */
  "editor.snippetTabstopHighlightBorder": ColorSchema.optional(),

  /**
   * Highlight background color of the final tabstop of a snippet.
   */
  "editor.snippetFinalTabstopHighlightBackground": ColorSchema.optional(),

  /**
   * Highlight border color of the final tabstop of a snippet.
   */
  "editor.snippetFinalTabstopHighlightBorder": ColorSchema.optional(),
});

/**
 * Symbol Icons Colors for symbol icons in outline and breadcrumb.
 */
export const SymbolIconsColorsSchema = z.strictObject({
  /**
   * The foreground color for array symbols.
   */
  "symbolIcon.arrayForeground": ColorSchema.optional(),

  /**
   * The foreground color for boolean symbols.
   */
  "symbolIcon.booleanForeground": ColorSchema.optional(),

  /**
   * The foreground color for class symbols.
   */
  "symbolIcon.classForeground": ColorSchema.optional(),

  /**
   * The foreground color for color symbols.
   */
  "symbolIcon.colorForeground": ColorSchema.optional(),

  /**
   * The foreground color for constant symbols.
   */
  "symbolIcon.constantForeground": ColorSchema.optional(),

  /**
   * The foreground color for constructor symbols.
   */
  "symbolIcon.constructorForeground": ColorSchema.optional(),

  /**
   * The foreground color for enumerator symbols.
   */
  "symbolIcon.enumeratorForeground": ColorSchema.optional(),

  /**
   * The foreground color for enumerator member symbols.
   */
  "symbolIcon.enumeratorMemberForeground": ColorSchema.optional(),

  /**
   * The foreground color for event symbols.
   */
  "symbolIcon.eventForeground": ColorSchema.optional(),

  /**
   * The foreground color for field symbols.
   */
  "symbolIcon.fieldForeground": ColorSchema.optional(),

  /**
   * The foreground color for file symbols.
   */
  "symbolIcon.fileForeground": ColorSchema.optional(),

  /**
   * The foreground color for folder symbols.
   */
  "symbolIcon.folderForeground": ColorSchema.optional(),

  /**
   * The foreground color for function symbols.
   */
  "symbolIcon.functionForeground": ColorSchema.optional(),

  /**
   * The foreground color for interface symbols.
   */
  "symbolIcon.interfaceForeground": ColorSchema.optional(),

  /**
   * The foreground color for key symbols.
   */
  "symbolIcon.keyForeground": ColorSchema.optional(),

  /**
   * The foreground color for keyword symbols.
   */
  "symbolIcon.keywordForeground": ColorSchema.optional(),

  /**
   * The foreground color for method symbols.
   */
  "symbolIcon.methodForeground": ColorSchema.optional(),

  /**
   * The foreground color for module symbols.
   */
  "symbolIcon.moduleForeground": ColorSchema.optional(),

  /**
   * The foreground color for namespace symbols.
   */
  "symbolIcon.namespaceForeground": ColorSchema.optional(),

  /**
   * The foreground color for null symbols.
   */
  "symbolIcon.nullForeground": ColorSchema.optional(),

  /**
   * The foreground color for number symbols.
   */
  "symbolIcon.numberForeground": ColorSchema.optional(),

  /**
   * The foreground color for object symbols.
   */
  "symbolIcon.objectForeground": ColorSchema.optional(),

  /**
   * The foreground color for operator symbols.
   */
  "symbolIcon.operatorForeground": ColorSchema.optional(),

  /**
   * The foreground color for package symbols.
   */
  "symbolIcon.packageForeground": ColorSchema.optional(),

  /**
   * The foreground color for property symbols.
   */
  "symbolIcon.propertyForeground": ColorSchema.optional(),

  /**
   * The foreground color for reference symbols.
   */
  "symbolIcon.referenceForeground": ColorSchema.optional(),

  /**
   * The foreground color for snippet symbols.
   */
  "symbolIcon.snippetForeground": ColorSchema.optional(),

  /**
   * The foreground color for string symbols.
   */
  "symbolIcon.stringForeground": ColorSchema.optional(),

  /**
   * The foreground color for struct symbols.
   */
  "symbolIcon.structForeground": ColorSchema.optional(),

  /**
   * The foreground color for text symbols.
   */
  "symbolIcon.textForeground": ColorSchema.optional(),

  /**
   * The foreground color for type parameter symbols.
   */
  "symbolIcon.typeParameterForeground": ColorSchema.optional(),

  /**
   * The foreground color for unit symbols.
   */
  "symbolIcon.unitForeground": ColorSchema.optional(),

  /**
   * The foreground color for variable symbols.
   */
  "symbolIcon.variableForeground": ColorSchema.optional(),
});

/**
 * Notebook Colors for notebook cells.
 */
export const NotebookColorsSchema = z.strictObject({
  /**
   * Background color of notebook cell status bar items.
   */
  "notebook.cellBorderColor": ColorSchema.optional(),

  /**
   * The border color for notebook cells.
   */
  "notebook.focusedEditorBorder": ColorSchema.optional(),

  /**
   * The color of the notebook cell editor border.
   */
  "notebook.cellToolbarSeparator": ColorSchema.optional(),

  /**
   * Notebook background color.
   */
  "notebook.editorBackground": ColorSchema.optional(),

  /**
   * The background color of a cell when the cell is focused.
   */
  "notebook.focusedCellBackground": ColorSchema.optional(),

  /**
   * The color of the cell's top and bottom border when the cell is focused.
   */
  "notebook.focusedCellBorder": ColorSchema.optional(),

  /**
   * The background color of a cell when the cell is hovered.
   */
  "notebook.cellHoverBackground": ColorSchema.optional(),

  /**
   * The background color of a cell when the cell is focused while the primary selection is outside of the editor.
   */
  "notebook.inactiveFocusedCellBorder": ColorSchema.optional(),

  /**
   * The color of the cell's borders when multiple cells are selected.
   */
  "notebook.selectedCellBorder": ColorSchema.optional(),

  /**
   * The Color of the notebook cell editor background.
   */
  "notebook.cellEditorBackground": ColorSchema.optional(),

  /**
   * Notebook cell insertion indicator background color.
   */
  "notebook.cellInsertionIndicator": ColorSchema.optional(),

  /**
   * Background color for notebook cell status bar items.
   */
  "notebook.cellStatusBarItemHoverBackground": ColorSchema.optional(),

  /**
   * Notebook cell bottom toolbar separator color.
   */
  "notebook.symbolHighlightBackground": ColorSchema.optional(),

  /**
   * Background color of highlighted cell.
   */
  "notebook.inactiveSelectedCellBorder": ColorSchema.optional(),

  /**
   * Background color for the active notebook cell in the editor.
   */
  "notebook.selectedCellBackground": ColorSchema.optional(),

  /**
   * Notebook output container background color.
   */
  "notebookScrollbarSlider.background": ColorSchema.optional(),

  /**
   * Notebook scrollbar slider background color.
   */
  "notebookScrollbarSlider.hoverBackground": ColorSchema.optional(),

  /**
   * Notebook scrollbar slider background color when hovering.
   */
  "notebookScrollbarSlider.activeBackground": ColorSchema.optional(),

  /**
   * Background color of notebook cell status bar items.
   */
  "notebookStatusSuccessIcon.foreground": ColorSchema.optional(),

  /**
   * Notebook cell status bar error icon foreground color.
   */
  "notebookStatusErrorIcon.foreground": ColorSchema.optional(),

  /**
   * Notebook cell status bar running icon foreground color.
   */
  "notebookStatusRunningIcon.foreground": ColorSchema.optional(),

  /**
   * Background color of notebook editor overview ruler.
   */
  "notebookEditorOverviewRuler.runningCellForeground": ColorSchema.optional(),
});

/**
 * Chart Colors for charts in the workbench.
 */
export const ChartColorsSchema = z.strictObject({
  /**
   * The chart line color.
   */
  "charts.foreground": ColorSchema.optional(),

  /**
   * The chart line color used when hovering over a line.
   */
  "charts.lines": ColorSchema.optional(),

  /**
   * The red color used in chart visualizations.
   */
  "charts.red": ColorSchema.optional(),

  /**
   * The blue color used in chart visualizations.
   */
  "charts.blue": ColorSchema.optional(),

  /**
   * The yellow color used in chart visualizations.
   */
  "charts.yellow": ColorSchema.optional(),

  /**
   * The orange color used in chart visualizations.
   */
  "charts.orange": ColorSchema.optional(),

  /**
   * The green color used in chart visualizations.
   */
  "charts.green": ColorSchema.optional(),

  /**
   * The purple color used in chart visualizations.
   */
  "charts.purple": ColorSchema.optional(),

  /**
   * The color used for lines in the minimap chart.
   */
  "chart.line": ColorSchema.optional(),

  /**
   * The color used for the axis in charts.
   */
  "chart.axis": ColorSchema.optional(),

  /**
   * The color used for guide lines in charts.
   */
  "chart.guide": ColorSchema.optional(),
});

/**
 * Ports Colors for port forwarding.
 */
export const PortsColorsSchema = z.strictObject({
  /**
   * The color of the icon for a port that has an associated running process.
   */
  "ports.iconRunningProcessForeground": ColorSchema.optional(),
});

/**
 * Comments View Colors for the comments view.
 */
export const CommentsViewColorsSchema = z.strictObject({
  /**
   * Icon color for resolved comments.
   */
  "commentsView.resolvedIcon": ColorSchema.optional(),

  /**
   * Icon color for unresolved comments.
   */
  "commentsView.unresolvedIcon": ColorSchema.optional(),
});

/**
 * Action Bar Colors for the action bar.
 */
export const ActionBarColorsSchema = z.strictObject({
  /**
   * Action bar toggle background color.
   */
  "actionBar.toggledBackground": ColorSchema.optional(),
});

/**
 * Simple Find Widget Colors for simple find widget.
 */
export const SimpleFindWidgetColorsSchema = z.strictObject({
  /**
   * Border color of the simple find widget sash.
   */
  "simpleFindWidget.sashBorder": ColorSchema.optional(),
});

/**
 * Gauge Colors for gauge visualizations.
 */
export const GaugeColorsSchema = z.strictObject({
  /**
   * Foreground color for the gauge.
   */
  "gauge.foreground": ColorSchema.optional(),

  /**
   * Background color for the gauge.
   */
  "gauge.background": ColorSchema.optional(),

  /**
   * Border color for the gauge.
   */
  "gauge.border": ColorSchema.optional(),

  /**
   * Warning background color for the gauge.
   */
  "gauge.warningBackground": ColorSchema.optional(),

  /**
   * Warning foreground color for the gauge.
   */
  "gauge.warningForeground": ColorSchema.optional(),

  /**
   * Error background color for the gauge.
   */
  "gauge.errorBackground": ColorSchema.optional(),

  /**
   * Error foreground color for the gauge.
   */
  "gauge.errorForeground": ColorSchema.optional(),
});

/**
 * Keyboard Shortcut Table Colors for keyboard shortcut table.
 */
export const KeyboardShortcutTableColorsSchema = z.strictObject({
  /**
   * Background color for the keyboard shortcuts table header.
   */
  "keybindingTable.headerBackground": ColorSchema.optional(),

  /**
   * Background color for the keyboard shortcuts table alternating rows.
   */
  "keybindingTable.rowsBackground": ColorSchema.optional(),
});

// ===========================
// Core Theme Structure
// ===========================

/**
 * Defines the visual mode of the theme to support appropriate contrast and color schemes.
 */
export const ThemeTypeSchema = z.enum(["light", "dark", "hc-black", "hc-light"]);

/**
 * Complete VS Code workbench color customization schema.
 * Provides comprehensive theming control for all UI elements in the editor.
 */
export const WorkbenchColorsSchema = z
  .strictObject({
    ...ContrastColorsSchema.shape,
    ...BaseColorsSchema.shape,
    ...WindowBorderColorsSchema.shape,
    ...TextColorsSchema.shape,
    ...ActionColorsSchema.shape,
    ...ButtonControlColorsSchema.shape,
    ...DropdownControlColorsSchema.shape,
    ...InputControlColorsSchema.shape,
    ...ScrollbarControlColorsSchema.shape,
    ...BadgeColorsSchema.shape,
    ...ProgressBarColorsSchema.shape,
    ...ListsAndTreesColorsSchema.shape,
    ...ActivityBarColorsSchema.shape,
    ...ProfilesColorsSchema.shape,
    ...SideBarColorsSchema.shape,
    ...MinimapColorsSchema.shape,
    ...EditorGroupsAndTabsColorsSchema.shape,
    ...EditorColorsSchema.shape,
    ...EditorCommentsWidgetColorsSchema.shape,
    ...DiffEditorColorsSchema.shape,
    ...MultiDiffEditorColorsSchema.shape,
    ...MergeEditorColorsSchema.shape,
    ...ChatColorsSchema.shape,
    ...InlineChatColorsSchema.shape,
    ...InlineEditColorsSchema.shape,
    ...PanelChatColorsSchema.shape,
    ...EditorWidgetColorsSchema.shape,
    ...PeekViewColorsSchema.shape,
    ...MergeConflictsColorsSchema.shape,
    ...PanelColorsSchema.shape,
    ...StatusBarColorsSchema.shape,
    ...TitleBarColorsSchema.shape,
    ...MenuBarColorsSchema.shape,
    ...CommandCenterColorsSchema.shape,
    ...NotificationColorsSchema.shape,
    ...BannerColorsSchema.shape,
    ...ExtensionsColorsSchema.shape,
    ...QuickPickerColorsSchema.shape,
    ...KeybindingLabelColorsSchema.shape,
    ...IntegratedTerminalColorsSchema.shape,
    ...DebugColorsSchema.shape,
    ...DebugToolbarColorsSchema.shape,
    ...DebugIconColorsSchema.shape,
    ...TestingColorsSchema.shape,
    ...WelcomePageColorsSchema.shape,
    ...GitColorsSchema.shape,
    ...SourceControlColorsSchema.shape,
    ...SourceControlGraphColorsSchema.shape,
    ...SettingsEditorColorsSchema.shape,
    ...BreadcrumbsColorsSchema.shape,
    ...SnippetsColorsSchema.shape,
    ...SymbolIconsColorsSchema.shape,
    ...NotebookColorsSchema.shape,
    ...ChartColorsSchema.shape,
    ...PortsColorsSchema.shape,
    ...CommentsViewColorsSchema.shape,
    ...ActionBarColorsSchema.shape,
    ...SimpleFindWidgetColorsSchema.shape,
    ...GaugeColorsSchema.shape,
    ...KeyboardShortcutTableColorsSchema.shape,
  })
  .partial()
  .catchall(ColorSchema.optional());

/**
 * Complete VS Code theme definition for comprehensive editor and UI customization.
 */
export const VSCodeThemeSchema = z.strictObject({
  // Basic theme metadata
  name: z.string(),
  type: ThemeTypeSchema,

  // Semantic highlighting support
  semanticHighlighting: z.boolean().optional(),

  // Token-based syntax highlighting
  tokenColors: z.array(TokenColorSchema).optional(),

  // Semantic token colors for language-aware highlighting
  semanticTokenColors: SemanticTokenColorsSchema.optional(),

  // UI Colors - typed workbench colors combined with generic color support
  colors: WorkbenchColorsSchema.optional(),
});

// ===========================
// Type Exports
// ===========================

export type Color = z.infer<typeof ColorSchema>;
export type FontStyle = z.infer<typeof FontStyleSchema>;
export type TokenColorSettings = z.infer<typeof TokenColorSettingsSchema>;
export type TokenColor = z.infer<typeof TokenColorSchema>;
export type SemanticTokenColorSettings = z.infer<typeof SemanticTokenColorSettingsSchema>;
export type SemanticTokenColors = z.infer<typeof SemanticTokenColorsSchema>;
export type ContrastColors = z.infer<typeof ContrastColorsSchema>;
export type BaseColors = z.infer<typeof BaseColorsSchema>;
export type WindowBorderColors = z.infer<typeof WindowBorderColorsSchema>;
export type TextColors = z.infer<typeof TextColorsSchema>;
export type ActionColors = z.infer<typeof ActionColorsSchema>;
export type ButtonControlColors = z.infer<typeof ButtonControlColorsSchema>;
export type DropdownControlColors = z.infer<typeof DropdownControlColorsSchema>;
export type InputControlColors = z.infer<typeof InputControlColorsSchema>;
export type ScrollbarControlColors = z.infer<typeof ScrollbarControlColorsSchema>;
export type BadgeColors = z.infer<typeof BadgeColorsSchema>;
export type ProgressBarColors = z.infer<typeof ProgressBarColorsSchema>;
export type ListsAndTreesColors = z.infer<typeof ListsAndTreesColorsSchema>;
export type ActivityBarColors = z.infer<typeof ActivityBarColorsSchema>;
export type ProfilesColors = z.infer<typeof ProfilesColorsSchema>;
export type SideBarColors = z.infer<typeof SideBarColorsSchema>;
export type MinimapColors = z.infer<typeof MinimapColorsSchema>;
export type EditorGroupsAndTabsColors = z.infer<typeof EditorGroupsAndTabsColorsSchema>;
export type EditorColors = z.infer<typeof EditorColorsSchema>;
export type EditorCommentsWidgetColors = z.infer<typeof EditorCommentsWidgetColorsSchema>;
export type DiffEditorColors = z.infer<typeof DiffEditorColorsSchema>;
export type MultiDiffEditorColors = z.infer<typeof MultiDiffEditorColorsSchema>;
export type MergeEditorColors = z.infer<typeof MergeEditorColorsSchema>;
export type ChatColors = z.infer<typeof ChatColorsSchema>;
export type InlineChatColors = z.infer<typeof InlineChatColorsSchema>;
export type InlineEditColors = z.infer<typeof InlineEditColorsSchema>;
export type PanelChatColors = z.infer<typeof PanelChatColorsSchema>;
export type EditorWidgetColors = z.infer<typeof EditorWidgetColorsSchema>;
export type PeekViewColors = z.infer<typeof PeekViewColorsSchema>;
export type MergeConflictsColors = z.infer<typeof MergeConflictsColorsSchema>;
export type PanelColors = z.infer<typeof PanelColorsSchema>;
export type StatusBarColors = z.infer<typeof StatusBarColorsSchema>;
export type TitleBarColors = z.infer<typeof TitleBarColorsSchema>;
export type MenuBarColors = z.infer<typeof MenuBarColorsSchema>;
export type CommandCenterColors = z.infer<typeof CommandCenterColorsSchema>;
export type NotificationColors = z.infer<typeof NotificationColorsSchema>;
export type BannerColors = z.infer<typeof BannerColorsSchema>;
export type ExtensionsColors = z.infer<typeof ExtensionsColorsSchema>;
export type QuickPickerColors = z.infer<typeof QuickPickerColorsSchema>;
export type KeybindingLabelColors = z.infer<typeof KeybindingLabelColorsSchema>;
export type IntegratedTerminalColors = z.infer<typeof IntegratedTerminalColorsSchema>;
export type DebugColors = z.infer<typeof DebugColorsSchema>;
export type DebugToolbarColors = z.infer<typeof DebugToolbarColorsSchema>;
export type DebugIconColors = z.infer<typeof DebugIconColorsSchema>;
export type TestingColors = z.infer<typeof TestingColorsSchema>;
export type WelcomePageColors = z.infer<typeof WelcomePageColorsSchema>;
export type GitColors = z.infer<typeof GitColorsSchema>;
export type SourceControlColors = z.infer<typeof SourceControlColorsSchema>;
export type SourceControlGraphColors = z.infer<typeof SourceControlGraphColorsSchema>;
export type SettingsEditorColors = z.infer<typeof SettingsEditorColorsSchema>;
export type BreadcrumbsColors = z.infer<typeof BreadcrumbsColorsSchema>;
export type SnippetsColors = z.infer<typeof SnippetsColorsSchema>;
export type SymbolIconsColors = z.infer<typeof SymbolIconsColorsSchema>;
export type NotebookColors = z.infer<typeof NotebookColorsSchema>;
export type ChartColors = z.infer<typeof ChartColorsSchema>;
export type PortsColors = z.infer<typeof PortsColorsSchema>;
export type CommentsViewColors = z.infer<typeof CommentsViewColorsSchema>;
export type ActionBarColors = z.infer<typeof ActionBarColorsSchema>;
export type SimpleFindWidgetColors = z.infer<typeof SimpleFindWidgetColorsSchema>;
export type GaugeColors = z.infer<typeof GaugeColorsSchema>;
export type KeyboardShortcutTableColors = z.infer<typeof KeyboardShortcutTableColorsSchema>;
export type WorkbenchColors = z.infer<typeof WorkbenchColorsSchema>;
export type ThemeType = z.infer<typeof ThemeTypeSchema>;
export type VSCodeTheme = z.infer<typeof VSCodeThemeSchema>;

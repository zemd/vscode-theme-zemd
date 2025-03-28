import { semantic } from "./utils.js";
// ui
import uiBaseColors from "./ui/base.js";
import uiEditorColors from "./ui/editor.js";
import uiVcsColors from "./ui/vcs.js";
import uiTerminalColors from "./ui/terminal.js";
import uiSideBarColors from "./ui/sidebar.js";
import uiTitleBarColors from "./ui/titlebar.js";
import uiTabsColors from "./ui/tabs.js";
import uiStatusBarColors from "./ui/statusbar.js";
import uiNotificationsColors from "./ui/notifications.js";
import uiActivityBarColors from "./ui/activitybar.js";
import uiEditorGutterWithLineNumbersColors from "./ui/editorGutter.js";
import uiPeekViewColors from "./ui/peekView.js";
import uiWidgetsColors from "./ui/widgets.js";
// syntax
import clangSyntax from "./languages/clang.js";
import coreSyntax from "./languages/core.js";
import jsSyntax from "./languages/javascript.js";
import cssSyntax from "./languages/css.js";
import goSyntax from "./languages/golang.js";
import godotSyntax from "./languages/godot.js";
import graphqlSyntax from "./languages/graphql.js";
import groovySyntax from "./languages/groovy.js";
import handlebarsSyntax from "./languages/handlebars.js";
import htmlSyntax from "./languages/html.js";
import iniSyntax from "./languages/ini.js";
import javaSyntax from "./languages/java.js";
import jsonSyntax from "./languages/json.js";
import markdownSyntax from "./languages/markdown.js";
import phpSyntax from "./languages/php.js";
import pythonSyntax from "./languages/python.js";
import rustSyntax from "./languages/rust.js";
import shellSyntax from "./languages/shell.js";
import sqlSyntax from "./languages/sql.js";
import swiftSyntax from "./languages/swift.js";
import tfSyntax from "./languages/terraform.js";
import tomlSyntax from "./languages/toml.js";
import vcsSyntax from "./languages/vcs.js";
import xmlSyntax from "./languages/xml.js";
import yamlSyntax from "./languages/yaml.js";
import zigSyntax from "./languages/zig.js";
import editorconfigSyntax from "./languages/editorconfig.js";

type MakeThemeOptions = {
  name: string;
  tokens: Record<string, any>;
};

export const makeTheme = ({ name, tokens }: MakeThemeOptions) => {
  return {
    name,
    type: "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      // namespace: semantic(tokens.syntax.namespace.fg),
      // class: semantic(tokens.syntax.class.fg),
      // "class.defaultLibrary": semantic(tokens.syntax.variable.fg),
      enum: semantic(tokens.syntax.enum.fg),
      // interface: semantic(tokens.syntax.interface.fg),
      "interface.defaultLibrary": semantic(tokens.syntax.interface.fg),
      struct: semantic(tokens.syntax.struct.fg),
      "struct.declaration": semantic(tokens.syntax.class.fg),
      typeParameter: semantic(tokens.syntax.variable.fg, "italic"),
      // "typeParameter.declaration": semantic(tokens.syntax.typeParameter.fg),
      // type: semantic(tokens.syntax.type.fg),
      "hcl-blockType": semantic(tokens.syntax.keyword.fg),
      parameter: semantic(tokens.syntax.parameter.fg, "italic"),
      // variable: semantic(tokens.syntax.variable.fg),
      "hcl-blockLabel": semantic(tokens.syntax.function.fg, "bold"),
      property: semantic(tokens.syntax.property.fg),
      enumMember: semantic(tokens.syntax.enumMember.fg),
      decorator: semantic(tokens.syntax.decorator.fg),
      event: semantic(tokens.syntax.event.fg),
      function: semantic(tokens.syntax.function.fg),
      method: semantic(tokens.syntax.method.fg),
      macro: semantic(tokens.syntax.macro.fg),
      label: semantic(tokens.syntax.label.fg),
      comment: semantic(tokens.syntax.comment.fg),
      string: semantic(tokens.syntax.string.fg),
      keyword: semantic(tokens.syntax.keyword.fg),
      number: semantic(tokens.syntax.number.fg),
      regexp: semantic(tokens.syntax.regexp.fg),
      operator: semantic(tokens.syntax.operator.fg),
    },
    tokenColors: [
      ...coreSyntax(tokens),
      ...clangSyntax(tokens),
      ...jsSyntax(tokens),
      ...cssSyntax(tokens),
      ...goSyntax(tokens),
      ...godotSyntax(tokens),
      ...graphqlSyntax(tokens),
      ...groovySyntax(tokens),
      ...handlebarsSyntax(tokens),
      ...htmlSyntax(tokens),
      ...iniSyntax(tokens),
      ...javaSyntax(tokens),
      ...jsonSyntax(tokens),
      ...markdownSyntax(tokens),
      ...phpSyntax(tokens),
      ...pythonSyntax(tokens),
      ...rustSyntax(tokens),
      ...shellSyntax(tokens),
      ...sqlSyntax(tokens),
      ...swiftSyntax(tokens),
      ...tfSyntax(tokens),
      ...tomlSyntax(tokens),
      ...vcsSyntax(tokens),
      ...xmlSyntax(tokens),
      ...yamlSyntax(tokens),
      ...zigSyntax(tokens),
      ...editorconfigSyntax(tokens),
    ],
    colors: {
      ...uiBaseColors(tokens),
      ...uiEditorColors(tokens),
      ...uiPeekViewColors(tokens),
      ...uiEditorGutterWithLineNumbersColors(tokens),
      ...uiTabsColors(tokens),
      ...uiSideBarColors(tokens),
      ...uiActivityBarColors(tokens),
      ...uiTitleBarColors(tokens),
      ...uiStatusBarColors(tokens),
      ...uiTerminalColors(tokens),
      ...uiVcsColors(tokens),
      ...uiNotificationsColors(tokens),
      ...uiWidgetsColors(tokens),
    },
  };
};

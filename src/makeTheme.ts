import { semantic } from './utils.js';
import tokens from "./generated/tokens.json";
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
import graphqlSyntax from "./languages/graphql.js";
import groovySyntax from "./languages/groovy.js";
import htmlSyntax from "./languages/html.js";
import iniSyntax from "./languages/ini.js";
import javaSyntax from "./languages/java.js";
import jsonSyntax from "./languages/json.js";
import markdownSyntax from "./languages/markdown.js";
import pythonSyntax from "./languages/python.js";
import rustSyntax from "./languages/rust.js";
import shellSyntax from "./languages/shell.js";
import sqlSyntax from "./languages/sql.js";
import tfSyntax from "./languages/terraform.js";
import tomlSyntax from "./languages/toml.js";
import vcsSyntax from "./languages/vcs.js";
import xmlSyntax from "./languages/xml.js";
import yamlSyntax from "./languages/yaml.js";
import zigSyntax from "./languages/zig.js";

export const makeTheme = () => {
  return {
    name: "zemd Dark",
    type: "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      // namespace: semantic(tokens.syntax.namespace.fg),
      class: semantic(tokens.syntax.class.fg),
      "class.defaultLibrary": semantic(tokens.syntax.variable.fg),
      enum: semantic(tokens.syntax.enum.fg),
      interface: semantic(tokens.syntax.interface.fg),
      "interface.defaultLibrary": semantic(tokens.syntax.variable.fg),
      struct: semantic(tokens.syntax.struct.fg),
      "struct.declaration": semantic(tokens.syntax.class.fg),
      typeParameter: semantic(tokens.syntax.typeParameter.fg),
      // "typeParameter.declaration": semantic(tokens.syntax.typeParameter.fg), // TODO:
      type: semantic(tokens.syntax.type.fg),
      "hcl-blockType": semantic(tokens.syntax.keyword.fg),
      parameter: semantic(tokens.syntax.parameter.fg, "italic"),
      variable: semantic(tokens.syntax.variable.fg),
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
      operator: semantic(tokens.syntax.operator.fg)
    },
    tokenColors: [
      ...coreSyntax,
      ...clangSyntax,
      ...jsSyntax,
      ...cssSyntax,
      ...goSyntax,
      ...graphqlSyntax,
      ...groovySyntax,
      ...htmlSyntax,
      ...iniSyntax,
      ...javaSyntax,
      ...jsonSyntax,
      ...markdownSyntax,
      ...pythonSyntax,
      ...rustSyntax,
      ...shellSyntax,
      ...sqlSyntax,
      ...tfSyntax,
      ...tomlSyntax,
      ...vcsSyntax,
      ...xmlSyntax,
      ...yamlSyntax,
      ...zigSyntax,
    ],
    colors: {
      ...uiBaseColors,
      ...uiEditorColors,
      ...uiPeekViewColors,
      ...uiEditorGutterWithLineNumbersColors,
      ...uiTabsColors,
      ...uiSideBarColors,
      ...uiActivityBarColors,
      ...uiTitleBarColors,
      ...uiStatusBarColors,
      ...uiTerminalColors,
      ...uiVcsColors,
      ...uiNotificationsColors,
      ...uiWidgetsColors,
    },
  };
};

import { semantic } from "./utils.ts";
// ui
import uiBaseColors from "./ui/base.ts";
import uiEditorColors from "./ui/editor.ts";
import uiVcsColors from "./ui/vcs.ts";
import uiTerminalColors from "./ui/terminal.ts";
import uiSideBarColors from "./ui/sidebar.ts";
import uiTitleBarColors from "./ui/titlebar.ts";
import uiTabsColors from "./ui/tabs.ts";
import uiStatusBarColors from "./ui/statusbar.ts";
import uiNotificationsColors from "./ui/notifications.ts";
import uiActivityBarColors from "./ui/activitybar.ts";
import uiEditorGutterWithLineNumbersColors from "./ui/editorGutter.ts";
import uiPeekViewColors from "./ui/peekView.ts";
import uiWidgetsColors from "./ui/widgets.ts";
// syntax
import clangSyntax from "./languages/clang.ts";
import coreSyntax from "./languages/core.ts";
import jsSyntax from "./languages/javascript.ts";
import cssSyntax from "./languages/css.ts";
import goSyntax from "./languages/golang.ts";
import godotSyntax from "./languages/godot.ts";
import graphqlSyntax from "./languages/graphql.ts";
import groovySyntax from "./languages/groovy.ts";
import handlebarsSyntax from "./languages/handlebars.ts";
import htmlSyntax from "./languages/html.ts";
import iniSyntax from "./languages/ini.ts";
import javaSyntax from "./languages/java.ts";
import jsonSyntax from "./languages/json.ts";
import markdownSyntax from "./languages/markdown.ts";
import phpSyntax from "./languages/php.ts";
import pythonSyntax from "./languages/python.ts";
import rustSyntax from "./languages/rust.ts";
import shellSyntax from "./languages/shell.ts";
import sqlSyntax from "./languages/sql.ts";
import swiftSyntax from "./languages/swift.ts";
import tfSyntax from "./languages/terraform.ts";
import tomlSyntax from "./languages/toml.ts";
import vcsSyntax from "./languages/vcs.ts";
import xmlSyntax from "./languages/xml.ts";
import yamlSyntax from "./languages/yaml.ts";
import zigSyntax from "./languages/zig.ts";
import editorconfigSyntax from "./languages/editorconfig.ts";

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

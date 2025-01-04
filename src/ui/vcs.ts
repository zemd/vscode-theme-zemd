import tokens from "../generated/tokens.json" assert { type: "json" };
import chroma from "chroma-js";

const gitDecorationColors = {
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

const diffEditorColors = {
  "diffEditor.insertedTextBackground": "#0a6f0b34",
  "diffEditor.removedTextBackground": "#a7020233",
  "diffEditor.border": "#444444",
};

const mergeColors = {
  "merge.currentHeaderBackground": "#367366",
  "merge.currentContentBackground": "#27403B",
  "merge.incomingHeaderBackground": "#395F8F",
  "merge.incomingContentBackground": "#28384B",
  "merge.commonHeaderBackground": "#383838",
  "merge.commonContentBackground": "#282828",
};

export default {
  ...gitDecorationColors,
  ...diffEditorColors,
  ...mergeColors,
};

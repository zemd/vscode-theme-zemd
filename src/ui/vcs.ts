const gitDecorationColors = (_tokens: Record<string, any>) => {
  return {
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
};

const diffEditorColors = (_tokens: Record<string, any>) => {
  return {
    "diffEditor.insertedTextBackground": "#0a6f0b34",
    "diffEditor.removedTextBackground": "#a7020233",
    "diffEditor.border": "#444444",
  };
};

const mergeColors = (_tokens: Record<string, any>) => {
  return {
    "merge.currentHeaderBackground": "#367366",
    "merge.currentContentBackground": "#27403B",
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#28384B",
    "merge.commonHeaderBackground": "#383838",
    "merge.commonContentBackground": "#282828",
  };
};

export default (tokens: Record<string, any>) => {
  return {
    ...gitDecorationColors(tokens),
    ...diffEditorColors(tokens),
    ...mergeColors(tokens),
  };
};

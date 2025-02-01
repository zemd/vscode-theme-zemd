import typescript from "@zemd/eslint-ts";

export default [
  ...typescript(),
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": ["off"],
      "sonarjs/todo-tag": ["off"],
    },
  },
];

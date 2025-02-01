import fs from "node:fs/promises";
import StyleDictionary from "style-dictionary";

const configs = [
  {
    source: ["./src/tokens/**/*.{json,js}", "./src/palettes/onyx-core/**/*.{json,js}"],
    platforms: {
      json: {
        transforms: ["color/hex8"],
        buildPath: "./src/generated/",
        files: [
          {
            destination: "onyx-core-tokens.json",
            format: "json/nested",
          },
        ],
      },
    },
  },
  {
    source: ["./src/tokens/**/*.{json,js}", "./src/palettes/onyx-ghost/**/*.{json,js}"],
    platforms: {
      json: {
        transforms: ["color/hex8"],
        buildPath: "./src/generated/",
        files: [
          {
            destination: "onyx-ghost-tokens.json",
            format: "json/nested",
          },
        ],
      },
    },
  },
];

async function buildDesignTokens() {
  for await (const config of configs) {
    const styleDictionary = new StyleDictionary(config);
    await styleDictionary.buildAllPlatforms();
  }
}

async function main() {
  await fs.mkdir("./themes", { recursive: true });
  await buildDesignTokens();
  const { makeTheme } = await import("./makeTheme.js");
  const onyxCoreTokens = await fs.readFile("./src/generated/onyx-core-tokens.json", "utf-8");
  const onyxGhostTokens = await fs.readFile("./src/generated/onyx-ghost-tokens.json", "utf-8");

  await fs.writeFile(
    "./themes/onyx-core.json",
    JSON.stringify(
      makeTheme({
        name: "Onyx Core",
        tokens: JSON.parse(onyxCoreTokens),
      }),
      null,
      2,
    ),
  );

  await fs.writeFile(
    "./themes/onyx-ghost.json",
    JSON.stringify(
      makeTheme({
        name: "Onyx Ghost",
        tokens: JSON.parse(onyxGhostTokens),
      }),
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

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
  await Promise.all(
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    configs.map((config) => {
      const styleDictionary = new StyleDictionary(config);
      return styleDictionary.buildAllPlatforms();
    }),
  );
}

async function main() {
  try {
    await fs.mkdir("./themes", { recursive: true });
  } catch {
    // ignore
  }

  await buildDesignTokens();
  const { makeTheme } = await import("./makeTheme.ts");
  const onyxCoreTokens = await fs.readFile("./src/generated/onyx-core-tokens.json", "utf8");
  const onyxGhostTokens = await fs.readFile("./src/generated/onyx-ghost-tokens.json", "utf8");

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

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});

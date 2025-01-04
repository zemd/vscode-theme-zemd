import fs from "node:fs/promises";
import StyleDictionary from "style-dictionary";

async function buildDesignTokens() {
  const styleDictionary = new StyleDictionary({
    source: ["./src/tokens/**/*.{json,js}"],
    platforms: {
      json: {
        transforms: ["color/hex8"],
        buildPath: "./src/generated/",
        files: [
          {
            destination: "tokens.json",
            format: "json/nested",
          },
        ],
      },
    },
  });

  styleDictionary.buildAllPlatforms();
}

async function main() {
  await fs.mkdir("./themes", { recursive: true });
  await buildDesignTokens();
  const { makeTheme } = await import("./makeTheme.js");
  await fs.writeFile("./themes/dark.json", JSON.stringify(makeTheme(), null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

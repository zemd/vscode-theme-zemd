import fs from "node:fs/promises";
import path from "node:path";
import StyleDictionary from "style-dictionary";
import type { Config } from "style-dictionary/types";
import { TokensSchema, type Tokens, type VSCodeTheme } from "./schemas/index.ts";
import { buildSemanticColors } from "./colors/semanticColors.ts";
import { buildTokenColors } from "./colors/tokenColors.ts";
import { buildWorkbenchColors } from "./colors/workbenchColors.ts";

type ThemeConfig = {
  name: string;
  source: string[];
  tokensFile: string;
  outputFile: string;
};

const THEMES: ThemeConfig[] = [
  // {
  //   name: "Onyx Core",
  //   source: ["./src/palettes/onyx-core/**/*.tokens.{json,js}"],
  //   tokensFile: "./src/generated/onyx-core-tokens.json",
  //   outputFile: "./themes/onyx-core.json",
  // },
  {
    name: "Onyx Ghost",
    source: ["./src/palettes/onyx-ghost/**/*.tokens.{json,js}"],
    tokensFile: "./src/generated/onyx-ghost-tokens.json",
    outputFile: "./themes/onyx-ghost.json",
  },
];

const buildDesignTokens = async (): Promise<void> => {
  console.log("📦 Building design tokens...");

  for (const { name, source, tokensFile } of THEMES) {
    console.log(`  ➤ Processing ${name}...`);

    const buildPath = `${path.dirname(tokensFile)}/`; // Base path to build the files, must end with a trailing slash.
    const destination = path.basename(tokensFile);

    const config: Config = {
      source,
      platforms: {
        json: {
          transforms: ["color/hex8", "name/camel"],
          buildPath,
          files: [
            {
              destination,
              format: "json/nested",
            },
          ],
        },
      },
      log: {
        verbosity: "verbose",
      },
    };
    const styleDictionary = new StyleDictionary(config);
    await styleDictionary.buildAllPlatforms();
    console.log(`  ✓ Generated tokens: ${tokensFile}`);
  }

  console.log("✓ Design tokens built successfully\n");
};

const buildTheme = (name: string, tokens: Tokens): VSCodeTheme => {
  return {
    name,
    type: "dark",
    semanticHighlighting: true,
    semanticTokenColors: buildSemanticColors(tokens),
    tokenColors: buildTokenColors(tokens),
    colors: buildWorkbenchColors(tokens),
  };
};

const generateThemeFiles = async (): Promise<void> => {
  console.log("🎨 Generating theme files...");

  for (const { name, tokensFile, outputFile } of THEMES) {
    console.log(`  ➤ Building ${name} theme...`);

    const tokensContent = await fs.readFile(tokensFile, "utf8");
    const tokens: Tokens = TokensSchema.parse(JSON.parse(tokensContent));
    await fs.writeFile(outputFile, JSON.stringify(buildTheme(name, tokens), null, 2));

    console.log(`  ✓ Theme saved: ${outputFile}`);
  }

  console.log("✓ All themes generated successfully\n");
};

const ensureDirectories = async (): Promise<void> => {
  console.log("📁 Ensuring output directories exist...");
  await fs.mkdir("./themes", { recursive: true });
  await fs.mkdir("./src/generated", { recursive: true });
  console.log("✓ Directories ready\n");
};

const main = async (): Promise<void> => {
  console.log("🚀 Starting theme build process...\n");
  const startTime = Date.now();

  await ensureDirectories();
  await buildDesignTokens();
  await generateThemeFiles();

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`🎉 Build completed successfully in ${duration}s`);
};

main().catch((error: unknown) => {
  console.error("\n❌ Build failed:", error);
  process.exit(1);
});

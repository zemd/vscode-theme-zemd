import * as z from "zod";
import { TokenColorSettingsSchema } from "./theme.ts";

const PaletteColorSchema = z.object({
  50: z.string(),
  100: z.string(),
  200: z.string(),
  300: z.string(),
  400: z.string(),
  500: z.string(),
  600: z.string(),
  700: z.string(),
  800: z.string(),
  900: z.string(),
  950: z.string(),
});

export const PaletteSchema = z
  .object({
    red: PaletteColorSchema,
    orange: PaletteColorSchema,
    amber: PaletteColorSchema,
    yellow: PaletteColorSchema,
    lime: PaletteColorSchema,
    green: PaletteColorSchema,
    emerald: PaletteColorSchema,
    teal: PaletteColorSchema,
    cyan: PaletteColorSchema,
    sky: PaletteColorSchema,
    blue: PaletteColorSchema,
    indigo: PaletteColorSchema,
    violet: PaletteColorSchema,
    purple: PaletteColorSchema,
    fuchsia: PaletteColorSchema,
    pink: PaletteColorSchema,
    rose: PaletteColorSchema,
    slate: PaletteColorSchema,
    gray: PaletteColorSchema,
    zinc: PaletteColorSchema,
    neutral: PaletteColorSchema,
    stone: PaletteColorSchema,
  })
  .catchall(z.record(z.number().min(0).max(1000), z.string()));

export type Palette = z.infer<typeof PaletteSchema>;

export const M3ColorsSchema = z.object({
  primary: z.string(),
  onPrimary: z.string(),
  primaryContainer: z.string(),
  onPrimaryContainer: z.string(),
  secondary: z.string(),
  onSecondary: z.string(),
  secondaryContainer: z.string(),
  onSecondaryContainer: z.string(),
  tertiary: z.string(),
  onTertiary: z.string(),
  tertiaryContainer: z.string(),
  onTertiaryContainer: z.string(),
  error: z.string(),
  onError: z.string(),
  errorContainer: z.string(),
  onErrorContainer: z.string(),
  surface: z.string(),
  onSurface: z.string(),
  surfaceVariant: z.string(),
  onSurfaceVariant: z.string(),
  surfaceDimmed: z.string(),
  surfaceBright: z.string(),
  surfaceContainerLowest: z.string(),
  surfaceContainerLow: z.string(),
  surfaceContainer: z.string(),
  surfaceContainerHigh: z.string(),
  surfaceContainerHighest: z.string(),
  outline: z.string(),
  outlineVariant: z.string(),
});

export type M3Colors = z.infer<typeof M3ColorsSchema>;

export const SyntaxColorsSchema = z
  .object({
    variable: TokenColorSettingsSchema,
    parameter: TokenColorSettingsSchema,
    comment: TokenColorSettingsSchema,
    function: TokenColorSettingsSchema,
    keyword: TokenColorSettingsSchema,
    macro: TokenColorSettingsSchema,
    method: TokenColorSettingsSchema,
    number: TokenColorSettingsSchema,
    regexp: TokenColorSettingsSchema,
    string: TokenColorSettingsSchema,
    punctuation: TokenColorSettingsSchema,
  })
  .catchall(z.record(z.string(), TokenColorSettingsSchema));

export type Syntax = z.infer<typeof SyntaxColorsSchema>;

export const TokensSchema = z.object({
  palette: PaletteSchema,
  m3: M3ColorsSchema,
  syntax: SyntaxColorsSchema,
});

export type Tokens = z.infer<typeof TokensSchema>;

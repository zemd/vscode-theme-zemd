export const FONT_STYLES = ["bold", "italic", "underline", "normal"] as const;
export type TFontStyle = (typeof FONT_STYLES)[number];

type TScopeResult = {
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: TFontStyle;
  };
};

export const scope = (scp: string | string[], foreground: string, fontStyle?: TFontStyle): TScopeResult => {
  return {
    scope: scp,
    settings: {
      ...(foreground ? { foreground } : {}),
      ...(fontStyle ? { fontStyle } : {}),
    },
  };
};

export const semantic = (
  foreground: string,
  fontStyle?: TFontStyle,
): { foreground: string; fontStyle?: TFontStyle } => {
  return {
    foreground,
    ...(fontStyle ? { fontStyle } : {}),
  };
};

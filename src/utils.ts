// type TForeground = `#${string}`; // TODO: align colors with this type

const FONT_STYLES = ["bold", "italic", "underline", "normal"] as const;
export type TFontStyle = (typeof FONT_STYLES)[number];

export const scope = (scp: string | string[], foreground: string, fontStyle?: TFontStyle) => {
  return {
    scope: scp,
    settings: {
      ...(foreground ? { foreground } : {}),
      ...(fontStyle ? { fontStyle } : {}),
    },
  };
};

export const semantic = (foreground: string, fontStyle?: TFontStyle) => {
  return {
    foreground,
    ...(fontStyle ? { fontStyle } : {}),
  };
};

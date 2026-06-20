import { CSSProperties, ReactNode } from "react";
import {
  buildThemeStyle,
  CardStyle,
  DEFAULT_CARD_STYLE,
  DEFAULT_THEME,
  ThemeName,
} from "@/data/portfolio";

interface ThemeRootProps {
  theme?: ThemeName;
  cardStyle?: CardStyle;
  children: ReactNode;
}

/**
 * Applies the theme CSS custom properties to a wrapping element so every
 * descendant can read `var(--accent)`, `var(--surface)`, etc.
 */
export function ThemeRoot({
  theme = DEFAULT_THEME,
  cardStyle = DEFAULT_CARD_STYLE,
  children,
}: ThemeRootProps) {
  return (
    <div
      style={{
        ...themeVars(theme, cardStyle),
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}

/**
 * React's inline `style` can't take a raw cssText string, so expand the
 * theme variables into an object of `--key: value` entries.
 */
function themeVars(theme: ThemeName, cardStyle: CardStyle): CSSProperties {
  return Object.fromEntries(
    buildThemeStyle(theme, cardStyle)
      .split(";")
      .map((decl) => decl.trim())
      .filter(Boolean)
      .map((decl) => {
        const [key, ...rest] = decl.split(":");
        return [key.trim(), rest.join(":").trim()];
      }),
  ) as CSSProperties;
}

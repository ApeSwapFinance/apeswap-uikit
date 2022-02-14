import { ToggleTheme } from "../components/Toggle/types";
import { NavTheme } from "../widgets/Menu/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices, FontFamily } from "./types";

export interface ApeSwapTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  fontFamily: FontFamily;
  nav: NavTheme;
  toggle: ToggleTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";

export { default as Apeswap } from "./Apeswap";

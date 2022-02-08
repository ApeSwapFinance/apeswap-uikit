import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.card,
  hover: lightColors.background,
};

export const dark: NavTheme = {
  background: darkColors.card,
  hover: darkColors.background,
};

import { ButtonSquareTheme, variants } from "./types";
import { lightColors } from "../../theme/colors";

const { PRIMARY } = variants;

export const light: ButtonSquareTheme = {
  [PRIMARY]: {
    background: "#FFB300",
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primaryBright,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: "#FFFFFF",
  },
};

export const dark: ButtonSquareTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
};

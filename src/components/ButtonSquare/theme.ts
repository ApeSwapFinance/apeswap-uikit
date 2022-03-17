import { ButtonSquareTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, DANGER, SUCCESS, TERTIARY } = variants;

export const light: ButtonSquareTheme = {
  [PRIMARY]: {
    background: lightColors.yellow,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.yellowHover,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  [SECONDARY]: {
    background: lightColors.white2,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.white2,
    border: `2px solid ${lightColors.text}`,
    borderColorHover: lightColors.yellow,
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.text,
  },
  [DANGER]: {
    background: lightColors.error,
    backgroundActive: lightColors.error,
    backgroundHover: lightColors.error,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  [TERTIARY]: {
    background: lightColors.white4,
    backgroundActive: lightColors.white4,
    backgroundHover: lightColors.white4,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.text,
  },
};

export const dark: ButtonSquareTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
    background: darkColors.white2,
    backgroundHover: darkColors.white2,
    border: `2px solid ${darkColors.yellow}`,
    color: darkColors.yellow,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.white4,
    backgroundActive: darkColors.white4,
    backgroundHover: darkColors.white4,
    color: darkColors.text,
  },
};

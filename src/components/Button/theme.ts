import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TEXT, DANGER, SUCCESS, YELLOW, SUBTLE, TERTIARY } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.yellow,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.yellow,
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
    border: `2px solid ${lightColors.yellow}`,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.yellow,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: 0,
    borderColorHover: "currentColor",
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
  [YELLOW]: {
    background: lightColors.yellow,
    backgroundActive: lightColors.yellow,
    backgroundHover: lightColors.yellow,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  [TERTIARY]: {
    background: lightColors.gray,
    backgroundActive: lightColors.gray,
    backgroundHover: lightColors.background,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [SUBTLE]: {
    background: lightColors.gray,
    backgroundActive: lightColors.gray,
    backgroundHover: lightColors.gray,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
    background: darkColors.white2,
    backgroundHover: darkColors.white2,
  },
  [TEXT]: {
    ...light.text,
    color: darkColors.text,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [YELLOW]: {
    ...light.yellow,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.gray,
    backgroundActive: darkColors.gray,
    backgroundHover: darkColors.gray,
    color: darkColors.primary,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
};

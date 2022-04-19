import { ButtonProps as ThemeUIButtonProps, ThemeUICSSObject } from "theme-ui";
import { iconTypes } from "../Svg/types";
import { colorProps } from "../../theme/Apeswap/types";

export enum sizes {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export const buttonFontSizes = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 3,
  [sizes.LARGE]: 6,
};

export const buttonPadding = {
  [sizes.SMALL]: { x: 7, y: 1 },
  [sizes.MEDIUM]: { x: 15, y: 4 },
  [sizes.LARGE]: { x: 16, y: 6 },
};

export enum variants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT = "text",
  DANGER = "danger",
  TERTIARY = "tertiary",
  SUCCESS = "success",
}

export enum iconButtonVariants {
  PRIMARY = "primary",
  TRANSPARENT = "transparent",
  CIRCULAR = "circular",
}

export type sizeProps = `${sizes}`;
export type variantProps = `${variants}`;
export type iconButtonVariantsProps = `${iconButtonVariants}`;

export interface ButtonProps extends ThemeUIButtonProps {
  variant?: variantProps;
  size?: sizeProps;
  csx?: ThemeUICSSObject;
  load?: boolean;
  [key: string]: any;
}

export interface IconButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: iconButtonVariantsProps;
  color?: colorProps;
  background?: colorProps;
  icon?: iconTypes;
}

export type ButtonThemeVariant = {
  background: string;
  backgroundActive: string;
  backgroundHover: string;
  border: string | number;
  borderColorHover: string;
  boxShadow: string;
  boxShadowActive: string;
  color: string;
};

export type ButtonTheme = {
  [key in variants]: ButtonThemeVariant;
};

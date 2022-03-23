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
  [sizes.SMALL]: { x: 5, y: 2 },
  [sizes.MEDIUM]: { x: 7, y: 4 },
  [sizes.LARGE]: { x: 10, y: 6 },
};

export enum variants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
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
  [key: string]: any;
}

export interface IconButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: iconButtonVariantsProps;
  color?: colorProps;
  background?: colorProps;
  icon?: iconTypes;
}

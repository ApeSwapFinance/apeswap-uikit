import { ButtonProps as ThemeUIButtonProps } from "theme-ui";
import { IconSVGProps } from "../IconSVG";
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
}

export enum iconButtonVariants {
  PRIMARY = "primary",
  TRANSPARENT = "transparent",
}

export type sizeProps = `${sizes}`;
export type variantProps = `${variants}`;
export type iconButtonVariantsProps = `${iconButtonVariants}`;

export interface ButtonProps extends ThemeUIButtonProps {
  variant?: variantProps;
  size?: sizeProps;
  [key: string]: any;
}

export interface IconButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: iconButtonVariantsProps;
  color?: colorProps;
  icon?: IconSVGProps["icon"];
}

import { TextProps as ThemeUITextProps } from "theme-ui";
import { colorProps } from "../../theme/Apeswap/types";

export enum variants {
  SMALL = "sm",
  NORMAL = "md",
  LARGE = "lg",
}

export enum weights {
  LIGHT = "light",
  NORMAL = "normal",
  BOLD = "bold",
}

type variantProps = `${variants}`;
type weightProps = `${weights}` | number;
type sizeProps = string;

export interface TextProps extends Omit<ThemeUITextProps, "sx"> {
  variant?: variantProps;
  weight?: weightProps;
  color?: colorProps;
  size?: sizeProps;
  [key: string]: any;
}

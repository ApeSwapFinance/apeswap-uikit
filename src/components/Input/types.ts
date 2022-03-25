import { InputProps as Props } from "theme-ui";
import { iconTypes } from "../Svg/types";

export enum sizes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export const iconSizes = {
  [sizes.SM]: 12,
  [sizes.MD]: 14,
  [sizes.LG]: 20,
};

export type sizeProps = `${sizes}`;

export interface InputProps extends Omit<Props, "size"> {
  size?: sizeProps;
  icon?: iconTypes;
  width?: number | string;
  isWarning?: boolean;
}

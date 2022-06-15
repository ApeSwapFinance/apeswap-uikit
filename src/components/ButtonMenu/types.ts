import { ButtonProps, sizeProps as Sizes, variantProps } from "../Button/types";

export type ButtonMenuItemProps = {
  isActive?: boolean;
  size?: Sizes;
  fontFamily?: string;
  fontSize?: string;
  isMobile?: boolean;
  sx?: any;
} & ButtonProps;

export interface ButtonMenuProps {
  variant?: variantProps | string;
  activeIndex?: number;
  onClick?: (index: number) => void;
  size?: Sizes;
  children: React.ReactElement[];
  sx?: any;
}

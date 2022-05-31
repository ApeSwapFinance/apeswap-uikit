import { BoxProps } from "theme-ui";

export enum sizes {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export const tabPadding = {
  [sizes.SMALL]: { x: 9, y: 2 },
  [sizes.MEDIUM]: { x: 15, y: 3 },
  [sizes.LARGE]: { x: 16, y: 6 },
};

export const fontSizes = {
  [sizes.SMALL]: 0,
  [sizes.MEDIUM]: 1,
  [sizes.LARGE]: 2,
};

export enum variants {
  CENTERED = "centered",
  FULLWIDTH = "fullWidth",
}

export type variantProps = `${variants}`;
export type sizeProps = `${sizes}`;

export interface TabProps extends Omit<BoxProps, "onClick"> {
  index: number;
  activeTab?: number;
  label: string;
  onClick: (activeTab: number) => void;
  size: sizeProps;
  variant: variantProps;
  disabled?: boolean;
}

export interface TabsProps {
  activeTab: number;
  variant?: variantProps;
  size?: sizeProps;
  sx?: any;
}

export interface TabPanelProps {
  index: number;
  activeTab: number;
  sx?: any;
}

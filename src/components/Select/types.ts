import React, { InputHTMLAttributes } from "react";

export enum positions {
  TOP = "top",
  BOTTOM = "bottom",
}

export enum sizes {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export const fontSizes = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 3,
  [sizes.LARGE]: 6,
};

export const selectPadding = {
  [sizes.SMALL]: 4,
  [sizes.MEDIUM]: 6,
  [sizes.LARGE]: 8,
};

export const selectItemPadding = {
  [sizes.SMALL]: 4,
  [sizes.MEDIUM]: 6,
  [sizes.LARGE]: 8,
};

type sizeProps = `${sizes}`;
type positionProps = `${positions}`;

export interface SelectProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  active?: number | string;
  size?: sizeProps;
  width?: string | number;
  position?: positionProps;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface SelectItemProps {
  onClick?: (value: number | string) => void;
  url?: string;
  active?: boolean;
  size?: sizeProps;
  value: number | string;
}

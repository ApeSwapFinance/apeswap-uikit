import { InputHTMLAttributes } from "react";

export enum sizes {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export const togglePadding = {
  [sizes.SMALL]: { x: 4, y: 2 },
  [sizes.MEDIUM]: { x: 6, y: 3 },
  [sizes.LARGE]: { x: 8, y: 4 },
};

export const fontSizes = {
  [sizes.SMALL]: 0,
  [sizes.MEDIUM]: 1,
  [sizes.LARGE]: 2,
};

export type sizeProps = `${sizes}`;

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  checked?: boolean;
  labels: [string, string];
  size?: sizeProps;
}

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { SpaceProps } from "styled-system";

export const sizes = {
  SM: "sm",
  MD: "md",
} as const;

export const variants = {
  PRIMARY: "primary",
} as const;

export type Sizes = typeof sizes[keyof typeof sizes];
export type Variants = typeof variants[keyof typeof variants];

type ButtonSquareTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps;

export type ButtonSquareProps = {
  variant?: Variants;
  size?: Sizes;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  as?: "a" | "button" | typeof Link;
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
} & ButtonSquareTypes &
  SpaceProps;

export type ButtonSquareThemeVariant = {
  background: string;
  backgroundActive: string;
  backgroundHover: string;
  border: string | number;
  borderColorHover: string;
  boxShadow: string;
  boxShadowActive: string;
  color: string;
};

export type ButtonSquareTheme = {
  [key in Variants]: ButtonSquareThemeVariant;
};

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { SpaceProps } from "styled-system";

export const sizes = {
  XS: "xs",
  SM: "sm",
  MDS: "mds",
  MD: "md",
} as const;

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
  DANGER: "danger",
  TERTIARY: "tertiary",
  SUBTLE: "subtle",
  SUCCESS: "success",
  YELLOW: "yellow",
} as const;

export type Sizes = typeof sizes[keyof typeof sizes];
export type Variants = typeof variants[keyof typeof variants];

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps;

export type ButtonProps = {
  variant?: Variants;
  size?: Sizes;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  isMobile?: boolean;
  as?: "a" | "button" | typeof Link;
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
} & ButtonTypes &
  SpaceProps;

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
  [key in Variants]: ButtonThemeVariant;
};

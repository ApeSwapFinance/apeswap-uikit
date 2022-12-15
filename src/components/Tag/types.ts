import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export const variants = {
  PRIMARY: "primary",
  SUCCESS: "success",
  BINANCE: "binance",
  ERROR: "error",
  SECONDARY: "secondary",
  TEXTDISABLED: "textDisabled",
  TEXTSUBTLE: "textSubtle",
} as const;

export type Variants = typeof variants[keyof typeof variants];

export interface TagProps extends SpaceProps {
  variant?: Variants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  outline?: boolean;
}

export const lpTagVariants = {
  APE: "ape",
  UNI: "uni",
  ARK: "ark",
} as const;

export type LpTagVariants = typeof lpTagVariants[keyof typeof lpTagVariants];

export interface LpTagProps extends SpaceProps {
  variant: LpTagVariants;
}

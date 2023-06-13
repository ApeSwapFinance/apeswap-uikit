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

export const listTagVariants = {
  APE: "ape",
  UNI: "uni",
  ARK: "ark",
  LIQUIDITY: "liquidity",
  RESERVE: "reserve",
  LAUNCH: "launch",
  NEW: "new",
  HOT: "hot",
  AUTO: "auto",
  MAX: "max",
  REAL_YIELD: "real_yield",
} as const;

export type ListTagVariants = typeof listTagVariants[keyof typeof listTagVariants];

export interface ListTagProps extends SpaceProps {
  variant: ListTagVariants;
}

export const lpTags = ["ape", "uni", "ark"];

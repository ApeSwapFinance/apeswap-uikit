import { AnchorHTMLAttributes } from "react";
import { TextProps } from "../Text";

export interface LinkProps extends Omit<TextProps, "onAbort">, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

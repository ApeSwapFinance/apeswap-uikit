import { AnchorHTMLAttributes } from "react";
import { LinkProps as Props, ThemeUICSSObject } from "theme-ui";
import { TextProps } from "../Text";

export interface LinkProps extends Omit<TextProps, "onAbort">, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export interface LinkExternalProps extends Props {
  display?: ThemeUICSSObject["display"];
  textAlign?: ThemeUICSSObject["textAlign"];
}

import { InputHTMLAttributes } from "react";
import { ThemeUICSSObject } from "theme-ui";

export enum scales {
  SM = "sm",
  MD = "md",
}

export type scaleProps = `${scales}`;

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: scaleProps;
  display?: ThemeUICSSObject["display"];
}

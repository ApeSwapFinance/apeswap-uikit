import { InputHTMLAttributes } from "react";
import { ThemeUICSSObject } from "theme-ui";

export enum scales {
  SM = "sm",
  MD = "md",
}

export type scaleProps = `${scales}`;

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  scale?: scaleProps;
  onChange?: (checked: boolean) => void;
  display?: ThemeUICSSObject["display"];
}

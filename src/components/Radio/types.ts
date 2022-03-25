import { ThemeUICSSObject } from "theme-ui";
import { InputHTMLAttributes } from "react";

export enum scales {
  SM = "sm",
  MD = "md",
}

export type scaleProps = typeof scales[keyof typeof scales];

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: scaleProps;
  display?: ThemeUICSSObject["display"];
}

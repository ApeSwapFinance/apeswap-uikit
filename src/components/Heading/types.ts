import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { HeadingProps as Props } from "theme-ui";

export interface HeadingProps extends Props, SpaceProps, HTMLAttributes<HTMLDivElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  banner?: boolean;
}

import { SpaceProps } from "styled-system";
import { ThemeUIStyleObject } from "theme-ui";
import { SvgProps as Props, directions } from "../types";

export interface SvgProps extends Props {
  getStyles: (props: any) => ThemeUIStyleObject;
}

export interface rotation {
  [directions.LEFT]: number;
  [directions.RIGHT]: number;
  [directions.UP]: number;
  [directions.DOWN]: number;
}

export interface IconStyles extends SpaceProps {
  color?: string;
  degree?: number;
}

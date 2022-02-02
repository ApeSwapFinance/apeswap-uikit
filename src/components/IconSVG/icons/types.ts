import { ThemeUIStyleObject } from "theme-ui";
import { IconSVGProps, directions } from "../types";

export interface IconProps extends IconSVGProps {
  getStyles: (props: any) => ThemeUIStyleObject;
}

export interface rotation {
  [directions.LEFT]: number;
  [directions.RIGHT]: number;
  [directions.UP]: number;
  [directions.DOWN]: number;
}

export interface IconStyles {
  color?: string;
  degree?: number;
}

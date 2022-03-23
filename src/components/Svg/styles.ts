import { ThemeUIStyleObject } from "theme-ui";
import { IconStyles } from "./Icons/types";

const styles: Record<string, ThemeUIStyleObject> = {};

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  generic: ({ degree = 0, color }: IconStyles) => ({
    transform: `rotate(${degree}deg)`,
    color,
    fill: "currentcolor",
    path: {
      fill: "currentcolor",
    },
    transition: "transform .3s linear",
  }),
};

export default styles;

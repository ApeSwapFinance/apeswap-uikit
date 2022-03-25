import { ThemeUIStyleObject } from "theme-ui";
import { fontSizes } from "./types";

const styles: Record<string, ThemeUIStyleObject> = {};

interface Props {
  active: boolean;
  size: keyof typeof fontSizes;
}

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  dropdownItem: ({ active, size }: Props) => ({
    display: "inline-block",
    marginLeft: active ? "-10px" : undefined,
    fontSize: fontSizes[size],
    "*": {
      fontSize: fontSizes[size],
    },
  }),
};

export default styles;

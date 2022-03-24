import { ThemeUIStyleObject } from "theme-ui";
import { fontSizes } from "./types";

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    background: "lvl1",
    borderRadius: "10px",
    cursor: "pointer",
    width: "fit-content",
    position: "relative",
    zIndex: 100,
  },
  ul: {
    position: "absolute",
    background: "white2",
    borderRadius: "10px",
    cursor: "pointer",
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    zIndex: 100,
  },
  input: {
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    overflow: "hidden",
    width: "100%",
  },
};

interface Props {
  active: boolean;
  size: keyof typeof fontSizes;
}

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  dropdownItem: ({ size }: Props) => ({
    display: "inline-block",
    fontSize: fontSizes[size],
    zIndex: 100,
    "*": {
      fontSize: fontSizes[size],
      zIndex: 100,
    },
  }),
};

export default styles;

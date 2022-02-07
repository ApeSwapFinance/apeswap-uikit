import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  default: {
    padding: "10px",
    border: "none",
  },
  transparent: {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    padding: "0px",
    border: "none",
    cursor: "pointer",
    svg: {
      background: "transparent",
    },
  },
};

export default styles;

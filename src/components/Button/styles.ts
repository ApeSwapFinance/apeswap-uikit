import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle = {
  cursor: "pointer",
  color: "primaryBright",
  fontWeight: 600,
  fontSize: "16px",
  padding: "10px",
  border: "none",
  transition: "all .3s linear",
  "&:hover": {
    filter: "brightness(115%)",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
};

const styles: Record<string, ThemeUIStyleObject> = {
  primary: {
    ...defaultStyle,
  },
  transparent: {
    ...defaultStyle,
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

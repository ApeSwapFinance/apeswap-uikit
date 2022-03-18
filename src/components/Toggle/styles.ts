import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    display: "flex",
    borderRadius: "10px",
    background: "white3",
    width: "fit-content",
    position: "relative",
    justifyItems: "center",
  },
  switch: {
    borderRadius: "10px",
    px: "14px",
    py: "9px",
    cursor: "pointer",
    "&:hover": {
      filter: "20%",
    },
  },
  button: {
    px: "14px",
    py: "9px",
    position: "absolute",
    border: 0,
    top: 0,
    height: "100%",
    fontSize: "14px",
    transition: "left 0.2s linear",
    "&:hover": {
      filter: "none",
    },
  },
  input: {
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
  },
};

export default styles;

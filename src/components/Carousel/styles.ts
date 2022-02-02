import { ThemeUIStyleObject } from "theme-ui";
import { keyframes } from "@emotion/react";

export const slideIn = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(0%)" },
});

export const slideOut = keyframes({
  "0%": { transform: "translateX(0%)" },
  "100%": { transform: "translateX(200%)" },
});

const styles: Record<string, ThemeUIStyleObject> = {
  carousel: {
    width: "100%",
    height: "100vh",
    background: "#fff",
    margin: "auto",
    position: "relative",
    overflow: "hidden",
    display: "block",
  },
  chevronContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
  },
  chevronWrapper: {
    padding: "3px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    zIndex: "dropdown",
    "&:hover": {
      cursor: "pointer",
      svg: {
        fill: "grey",
      },
    },
    svg: {
      width: "40px",
    },
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  slider: {
    height: "100%",
    width: "100%",
    position: "absolute",
    animation: `${slideOut} 1.2s forwards`,
  },
  activeSlider: {
    height: "100%",
    width: "100%",
    position: "absolute",
    animation: `${slideIn} 1s forwards`,
  },
  indicatorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  indicatorOff: {
    display: "none",
  },
  indicatorItem: {
    padding: "5px",
    backgroundColor: "black",
    margin: "0 5px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  indicatorItemActive: {
    margin: "0 5px",
    borderRadius: "50%",
    padding: "5px",
    backgroundColor: "grey",
  },
};

export default styles;

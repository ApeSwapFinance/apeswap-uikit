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
    height: "100%",
    background: "gradient",
    margin: "auto",
    position: "relative",
    borderRadius: "normal",
    overflow: "hidden",
    display: "block",
  },
  chevronContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
  },
  chevronWrapper: {
    padding: "3px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    zIndex: "dropdown",
    "&:hover": {
      cursor: "pointer",
      svg: {
        fill: "text",
      },
    },
    svg: {
      width: "40px",
      fill: "primaryBright",
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
    opacity: 0,
    position: "absolute",
    animation: `${slideOut} 1.8s forwards`,
    transition: "all 2s ease-in-out",
    objectFit: "cover",
  },
  activeSlider: {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "block",
    animation: `${slideIn} .5s forwards`,
    opacity: 1,
    zIndex: 2,
    objectFit: "cover",
  },
  indicatorMainWrapper: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
  },
  indicatorContainer: {
    display: "inline-flex",
    flexWrap: "wrap",
    flexBasis: "auto",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.2)",
    whiteSpace: "nowrap",
    gap: 4,
    padding: "4px 5px",
    borderRadius: "11px",
  },
  indicatorOff: {
    display: "none",
  },
  indicatorItem: {
    padding: "7px",
    backgroundColor: "rgba(255, 255, 255, 0.38)",
    borderRadius: "50%",
    cursor: "pointer",
  },
  indicatorItemActive: {
    borderRadius: "50%",
    padding: "7px",
    backgroundColor: "primaryBright",
  },
};

export default styles;

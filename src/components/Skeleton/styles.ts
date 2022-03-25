import { ThemeUIStyleObject } from "theme-ui";
import { keyframes } from "@emotion/react";

export const waves = keyframes({
  from: { left: "-150px" },
  to: { left: "100%" },
});

export const pulse = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0.4 },
  "100%": { opacity: 1 },
});

const styles: Record<string, ThemeUIStyleObject> = {
  waves: {
    position: "relative",
    overflow: "hidden",
    transform: "translate3d(0, 0, 0)",
    borderRadius: "",
    minHeight: "20px",
    display: "block",
    backgroundColor: "backgroundDisabled",
    "&:before": {
      content: `""`,
      position: "absolute",
      backgroundImage: "linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent)",
      top: 0,
      left: "-150px",
      height: "100%",
      width: "150px",
      animation: `${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
    },
  },
  pulse: {
    animation: `${pulse} 2s infinite ease-out`,
    transform: "translate3d(0, 0, 0)",
    borderRadius: "2px",
    minHeight: "20px",
    display: "block",
    backgroundColor: "backgroundDisabled",
  },
};

export default styles;

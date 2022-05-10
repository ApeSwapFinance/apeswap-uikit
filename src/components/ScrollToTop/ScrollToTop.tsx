import React from "react";
import { lightColors } from "../../theme";
import { ChevronUpIcon } from "../Svg";
import { Props } from "./types";

export const ScrollToTop: React.FC<Props> = ({ style, ...props }) => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ChevronUpIcon
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        width: "40px",
        height: "40px",
        backgroundColor: "rgb(255, 179, 0, 0.7)",
        border: `1px solid ${lightColors.yellow}`,
        borderRadius: "50%",
        zIndex: 10,
        cursor: "pointer",
        ...style,
      }}
      onClick={scrollToTop}
      {...props}
    />
  );
};

export default ScrollToTop;

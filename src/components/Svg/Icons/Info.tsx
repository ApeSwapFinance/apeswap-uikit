/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Info: React.FC<SvgProps> = ({ direction = "right", color = "text", width, getStyles }) => {
  const deg: rotation = {
    left: 180,
    up: 270,
    right: 0,
    down: 90,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "24"} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15ZM6.99162 4.62598C7.13162 4.76598 7.30495 4.83598 7.51162 4.83598C7.71162 4.83598 7.88162 4.76598 8.02162 4.62598C8.16162 4.48598 8.23162 4.31264 8.23162 4.10598C8.23162 3.89931 8.16162 3.72598 8.02162 3.58598C7.88162 3.44598 7.71162 3.37598 7.51162 3.37598C7.30495 3.37598 7.13162 3.44598 6.99162 3.58598C6.85162 3.72598 6.78162 3.89931 6.78162 4.10598C6.78162 4.31264 6.85162 4.48598 6.99162 4.62598ZM8.07162 6.13598C8.07162 5.82117 7.81642 5.56598 7.50162 5.56598C7.18681 5.56598 6.93162 5.82118 6.93162 6.13598V10.506C6.93162 10.8208 7.18681 11.076 7.50162 11.076C7.81642 11.076 8.07162 10.8208 8.07162 10.506V6.13598Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Info;

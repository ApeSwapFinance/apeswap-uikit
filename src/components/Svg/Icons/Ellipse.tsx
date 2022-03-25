/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Ellipse: React.FC<SvgProps> = ({ direction = "right", color = "text", width, getStyles }) => {
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
    <svg width={width || "24"} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <circle cx="11.5" cy="11.5" r="11.5" fill="url(#paint0_linear_3820_7927)" />
      <defs>
        <linearGradient
          id="paint0_linear_3820_7927"
          x1="3.1625"
          y1="18.6875"
          x2="23"
          y2="4.025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A16552" />
          <stop offset="1" stopColor="#E1B242" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse;

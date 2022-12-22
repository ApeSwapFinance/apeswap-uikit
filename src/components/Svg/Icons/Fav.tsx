/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Fav: React.FC<SvgProps> = ({ direction = "down", color = "text", width, getStyles }) => {
  const deg: rotation = {
    left: 90,
    up: 180,
    right: 270,
    down: 0,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M3.06 15.7142L4.36 10.0097L0 6.17286L5.76 5.66535L8 0.285645L10.24 5.66535L16 6.17286L11.64 10.0097L12.94 15.7142L8 12.6894L3.06 15.7142Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Fav;

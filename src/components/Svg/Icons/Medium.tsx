/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Medium: React.FC<SvgProps> = ({ direction = "right", color = "white", width, getStyles }) => {
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
    <svg width={width || "26"} viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M14.6656 8.00021C14.6656 12.0852 11.3825 15.3966 7.33292 15.3966C3.2833 15.3966 0 12.0844 0 8.00021C0 3.916 3.28305 0.603516 7.33292 0.603516C11.3828 0.603516 14.6656 3.91525 14.6656 8.00021Z"
        fill="#4D4040"
      />
      <path
        d="M22.7094 8.00003C22.7094 11.8451 21.0679 14.9634 19.0429 14.9634C17.018 14.9634 15.3765 11.8451 15.3765 8.00003C15.3765 4.15493 17.0177 1.03662 19.0427 1.03662C21.0676 1.03662 22.7091 4.15393 22.7091 8.00003"
        fill="#4D4040"
      />
      <path
        d="M26.0001 8.00033C26.0001 11.4446 25.4229 14.2384 24.7106 14.2384C23.9984 14.2384 23.4214 11.4453 23.4214 8.00033C23.4214 4.55531 23.9986 1.76221 24.7106 1.76221C25.4227 1.76221 26.0001 4.55506 26.0001 8.00033Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Medium;

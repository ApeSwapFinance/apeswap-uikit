/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Arrow: React.FC<SvgProps> = ({ direction = "down", color = "text", width, getStyles }) => {
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
    <svg width={width || "12"} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.59339 3.70078C5.70539 3.81278 5.84406 3.86878 6.00939 3.86878C6.16939 3.86878 6.30539 3.81278 6.41739 3.70078C6.52939 3.58878 6.58539 3.45011 6.58539 3.28478C6.58539 3.11945 6.52939 2.98078 6.41739 2.86878C6.30539 2.75678 6.16939 2.70078 6.00939 2.70078C5.84406 2.70078 5.70539 2.75678 5.59339 2.86878C5.48139 2.98078 5.42539 3.11945 5.42539 3.28478C5.42539 3.45011 5.48139 3.58878 5.59339 3.70078ZM6.45739 4.90878C6.45739 4.65694 6.25323 4.45278 6.00139 4.45278C5.74955 4.45278 5.54539 4.65694 5.54539 4.90878V8.40478C5.54539 8.65662 5.74955 8.86078 6.00139 8.86078C6.25323 8.86078 6.45739 8.65662 6.45739 8.40478V4.90878Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};

export default Arrow;

import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <circle cx="32" cy="32" r="32" fill="white" />
      <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M140 440 l0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -60z" />
      </g>
    </svg>
  );
};

export default Icon;

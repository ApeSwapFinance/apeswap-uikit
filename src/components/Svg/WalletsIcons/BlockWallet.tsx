import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="white" />
      <g transform="translate(11,11) scale(1.4, 1.4)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM23.125 6.875H6.875V23.125H23.125V6.875Z"
          fill="#08090A"
        />
      </g>
    </svg>
  );
};

export default Icon;

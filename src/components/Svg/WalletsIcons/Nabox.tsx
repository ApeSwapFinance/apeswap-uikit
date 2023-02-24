import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 50 53"
      xmlSpace="preserve"
      fill="#2AC98B"
      {...props}
    >
      <circle cx="25" cy="28" r="25" fill="#FFFFFF" />
      <g id="prefix_x5F__x5F__x5C_u56FE_x5C_u5C42_x5F_2">
        <g id="prefix_x5F__x5F__x5C_u56FE_x5C_u5C42_x5F_1-2">
          <path className="st1" d="M6.3,18.7v19.8l5.7,3.3V27.6l5.7,3.3v14.2l5.7,3.3V28.6L6.3,18.7z" />
          <path
            fill="#2AC98B"
            d="M19.4,16.8l5.8-3.4l7.2,4.2L26.5,21L19.4,16.8z M25.1,6.7L7.8,16.8l18.7,11v21.5l5.7-3.3V24.3l5.7-3.4v21.7    l5.8-3.4V17.5L25.1,6.7z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Icon;

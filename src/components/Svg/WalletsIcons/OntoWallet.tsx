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
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#FFFFFF" />
      <g id="ONTO-Landing-Page" transform="translate(-48.000000, -53.000000)">
        <g id="_x5C_u7F16_x5C_u7EC4" transform="translate(50.000000, 57.000000)">
          <g id="Fill-11_x5C_u5907_x5C_u4EFD">
            <path d="M23.1,36c-3.8,0-7.6-1.4-10.5-4.3c-2.8-2.8-4.3-6.5-4.3-10.5V3.9l26.5,26.5l-1.3,1.3C30.7,34.6,26.9,36,23.1,36z      M12,12.7v8.6c0,3,1.2,5.8,3.3,7.9c3.9,3.9,10,4.3,14.4,1.2L12,12.7z" />
          </g>
          <g id="Fill-12_x5C_u5907_x5C_u4EFD">
            <path d="M37.7,38.1L11.1,11.6l1.3-1.3c5.8-5.8,15.2-5.8,20.9,0c2.8,2.8,4.3,6.5,4.3,10.5V38.1z M16.4,11.7L34,29.3v-8.6     c0-3-1.2-5.8-3.3-7.9C26.9,8.9,20.7,8.5,16.4,11.7z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Icon;

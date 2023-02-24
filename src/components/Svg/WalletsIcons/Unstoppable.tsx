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
      <path d="M41.4,9.9v11.8l-34.8,14L41.4,9.9z" fill="#00C9FF" />
      <path
        fill="#0D67FE"
        d="M34.9,9.4v20.4c0,2.9-1.1,5.6-3.2,7.6c-2,2-4.8,3.2-7.7,3.2s-5.6-1.1-7.7-3.2c-2-2-3.2-4.8-3.2-7.6v-8.6  l6.5-3.6v12.2c-0.1,0.5,0,1.1,0.2,1.6c0.2,0.5,0.4,1,0.8,1.4c0.4,0.4,0.8,0.7,1.3,0.9c0.5,0.2,1,0.3,1.6,0.3c0.5,0,1.1-0.1,1.6-0.3  c0.5-0.2,0.9-0.5,1.3-0.9c0.4-0.4,0.6-0.9,0.8-1.4c0.2-0.5,0.2-1,0.2-1.6V13.5L34.9,9.4z"
      />
    </svg>
  );
};

export default Icon;

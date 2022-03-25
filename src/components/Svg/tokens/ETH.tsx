import React from "react";
import { SvgProps } from "../types";

const ETH: React.FC<SvgProps> = ({ width }) => {
  return (
    <svg width={width || "25"} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
        fill="#627EEA"
      />
      <path d="M18.5603 4.5V14.4787L26.9944 18.2475L18.5603 4.5Z" fill="white" fillOpacity="0.602" />
      <path d="M18.5603 4.5L10.125 18.2475L18.5603 14.4787V4.5Z" fill="white" />
      <path d="M18.5603 24.7141V31.4945L27 19.8181L18.5603 24.7141Z" fill="white" fillOpacity="0.602" />
      <path d="M18.5603 31.4945V24.713L10.125 19.8181L18.5603 31.4945Z" fill="white" />
      <path d="M18.5603 23.1446L26.9944 18.2475L18.5603 14.481V23.1446Z" fill="white" fillOpacity="0.2" />
      <path d="M10.125 18.2475L18.5603 23.1446V14.481L10.125 18.2475Z" fill="white" fillOpacity="0.602" />
      <rect x="1" y="1" width="34" height="34" rx="17" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default ETH;

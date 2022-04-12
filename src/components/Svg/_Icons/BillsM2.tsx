import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const BillsM2: React.FC<LegacySvgProps> = ({ color, bgColor, ...props }) => {
  return (
    <LegacySvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 53" {...props}>
      <rect width="45.294" height="45.294" x="1" y="6" fill={bgColor} stroke={color} strokeWidth="2" rx="22.647"></rect>
      <path fill={color} d="M13 23a5 5 0 015-5h11a5 5 0 015 5v11a5 5 0 01-5 5H18a5 5 0 01-5-5V23z"></path>
      <g clipPath="url(#clip0_12627_87143)">
        <path
          fill={bgColor}
          d="M29.813 23.171a.779.779 0 00-1.01.047l-6.544 6.547-3.083-2.301a.751.751 0 00-.857-.031.61.61 0 00-.171.902l3.203 4.152c.086.109.206.218.326.295.6.374 1.421.234 1.832-.31l.052-.063 6.355-8.398c.206-.264.154-.622-.103-.84z"
        ></path>
      </g>
      <rect width="17.765" height="17.765" x="30" y="1" fill={bgColor} stroke={color} strokeWidth="2" rx="8.882"></rect>
      <path
        fill={color}
        d="M36.029 12.63a48.186 48.186 0 002.405-2.054c.494-.45.91-.922 1.248-1.416.338-.494.507-.975.507-1.443 0-.356-.083-.633-.247-.832-.165-.2-.412-.3-.741-.3-.33 0-.59.126-.78.378-.182.242-.273.589-.273 1.04h-2.145c.017-.737.173-1.352.468-1.846a2.805 2.805 0 011.183-1.092 3.778 3.778 0 011.638-.351c1.031 0 1.807.264 2.327.793.529.528.793 1.217.793 2.067 0 .927-.316 1.79-.95 2.587-.632.788-1.438 1.56-2.417 2.314h3.51v1.807h-6.526V12.63z"
      ></path>
      <defs>
        <clipPath id="clip0_12627_87143">
          <path fill="#fff" d="M0 0H12.025V10H0z" transform="translate(18.01 23)"></path>
        </clipPath>
      </defs>
    </LegacySvg>
  );
};

export default BillsM2;

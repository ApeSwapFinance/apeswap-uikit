/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Positions: React.FC<SvgProps> = ({ direction = "right", color = "text", width, getStyles }) => {
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
    <svg width={width || "20"} height="21" viewBox="0 0 20 21" sx={style} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_10_1736)">
        <path
          d="M18.3046 6.23311C19.2706 7.19557 19.8268 8.49441 19.8568 9.8577C19.8868 11.221 19.3882 12.543 18.4655 13.547C17.5427 14.551 16.2674 15.1591 14.9064 15.244C13.5454 15.3289 12.2044 14.884 11.164 14.0025C12.0156 12.8294 12.4742 11.417 12.4744 9.96747C12.4745 8.51789 12.0161 7.10541 11.1648 5.93217C12.1761 5.07846 13.4711 4.63563 14.7933 4.69137C16.1156 4.7471 17.3688 5.29734 18.3046 6.23311Z"
          fill="#4D4040"
        />
        <path
          d="M9.34152 13.7016C10.3318 12.7113 10.8881 11.3682 10.8881 9.96771C10.8881 8.56724 10.3318 7.22414 9.34152 6.23386C8.35124 5.24358 7.00813 4.68724 5.60767 4.68724C4.2072 4.68724 2.86409 5.24358 1.87381 6.23386C0.88353 7.22414 0.327197 8.56724 0.327197 9.96771C0.327197 11.3682 0.883531 12.7113 1.87381 13.7016C2.86409 14.6918 4.2072 15.2482 5.60767 15.2482C7.00813 15.2482 8.35124 14.6918 9.34152 13.7016Z"
          fill="#4D4040"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_1736">
          <rect width="20" height="20" fill="white" transform="translate(0.000244141 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Positions;

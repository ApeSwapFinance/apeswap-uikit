/** @jsxImportSource theme-ui */
import React from "react";
import { rotation, SvgProps } from "./types";

const Bubble: React.FC<SvgProps> = ({ direction = "down", color = "text", width, getStyles }) => {
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
    <svg width={width || "13"} height="19" viewBox="0 0 19 13" sx={style}>
      <g clipPath="url(#clip0_241_4869)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.223615 11.8591C0.223615 11.8591 -0.502465 9.34304 0.649961 8.18498C1.54141 7.28917 2.98866 7.28943 3.87985 8.18498C4.77105 9.08053 4.7713 10.5349 3.87985 11.4307C2.72743 12.5887 0.223615 11.8591 0.223615 11.8591Z"
          fill="#4D4040"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.79913 4.50158C2.98474 3.08414 4.33367 0.842317 4.33367 0.842317C4.33367 0.842317 6.94048 0.7891 7.75487 2.20653L11.4688 8.67068C12.0995 9.76837 11.7245 11.1726 10.6328 11.806C9.54116 12.4394 8.14378 12.0634 7.51311 10.9657L3.79913 4.50158Z"
          fill="#4D4040"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0234 4.50158C10.209 3.08414 11.558 0.842317 11.558 0.842317C11.558 0.842317 14.1648 0.7891 14.9792 2.20653L18.6931 8.67068C19.3238 9.76837 18.9488 11.1726 17.8572 11.806C16.7655 12.4394 15.3681 12.0634 14.7374 10.9657L11.0234 4.50158Z"
          fill="#4D4040"
        />
      </g>
      <defs>
        <clipPath id="clip0_241_4869">
          <rect width="19" height="11.3095" fill="white" transform="translate(0 0.845215)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bubble;

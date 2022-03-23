/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Chart: React.FC<SvgProps> = ({ direction = "down", color = "text", width, getStyles }) => {
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
    <svg width={width || "10"} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M3.10416 1.5204C3.10416 0.680715 2.40926 0 1.55208 0C0.694896 0 0 0.680715 0 1.5204V18.2448C0 19.9243 1.38978 21.2856 3.10416 21.2856H26.3853C27.2425 21.2856 27.9374 20.605 27.9374 19.7652C27.9374 18.9255 27.2425 18.2448 26.3853 18.2448H3.10416V1.5204Z"
        fill="#4D4040"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.0868 17.2946H6.84194C6.00225 17.2946 5.32153 16.5907 5.32153 15.7224V9.43341C5.32153 8.56506 6.00225 7.86118 6.84194 7.86118H11.4031V6.28894C11.4031 5.42063 12.0838 4.7167 12.9235 4.7167H17.4848V1.57223C17.4848 0.703921 18.1654 0 19.0052 0H25.0868C25.9265 0 26.6072 0.703921 26.6072 1.57223V15.7224C26.6072 16.5907 25.9265 17.2946 25.0868 17.2946ZM20.5256 3.14447H23.5664V14.1501H20.5256V3.14447ZM14.444 14.1501H17.4848V7.86118H14.444V14.1501ZM11.4031 11.0056H8.36234V14.1501H11.4031V11.0056Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Chart;

/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Home: React.FC<SvgProps> = ({ direction = "right", color = "text", width, getStyles }) => {
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
    <svg width={width || "24"} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M23.46 8.48168L18 4.25209L12.87 0.292472C12.36 -0.0974906 11.64 -0.0974906 11.13 0.292472L6 4.25209L0.54 8.48168C0.21 8.75166 0 9.17162 0 9.59158V24.5601C0 25.3701 0.63 26 1.44 26H7.29C7.74 26 8.1 25.64 8.1 25.1901V15.411C8.1 14.9611 8.46 14.6011 8.91 14.6011H15.09C15.54 14.6011 15.9 14.9611 15.9 15.411V25.1901C15.9 25.64 16.26 26 16.71 26H22.56C23.34 26 24 25.3701 24 24.5601V9.59158C24 9.17162 23.79 8.75166 23.46 8.48168Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Home;

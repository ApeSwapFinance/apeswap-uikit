/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps } from "./types";

const Message: React.FC<SvgProps> = ({ width, height, color = "text", getStyles }) => {
  const style = getStyles({
    color,
  });

  return (
    <svg
      width={width || "25"}
      height={height || "20"}
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={style}
    >
      <path
        d="M2.76146 20C1.99765 20 1.34646 19.7347 0.807873 19.2041C0.269291 18.6734 0 18.0318 0 17.2793V2.74964C0 1.99711 0.269291 1.3507 0.807873 0.81042C1.34646 0.27014 1.99765 0 2.76146 0H22.2092C22.973 0 23.6291 0.27014 24.1774 0.81042C24.7258 1.3507 25 1.99711 25 2.74964V17.2793C25 18.0318 24.7258 18.6734 24.1774 19.2041C23.6291 19.7347 22.973 20 22.2092 20H2.76146ZM12.4853 11.879L2.76146 5.5794V17.2793H22.2092V5.5794L12.4853 11.879ZM12.4853 9.05934L22.0917 2.74964H2.90834L12.4853 9.05934ZM2.76146 5.5794V2.74964V17.2793V5.5794Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Message;

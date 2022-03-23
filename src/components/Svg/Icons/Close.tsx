/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps } from "./types";

const Close: React.FC<SvgProps> = ({ width, color = "text", getStyles }) => {
  const style = getStyles({
    color,
  });

  return (
    <svg width={width || "12"} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9497 10.9497C11.3403 10.5592 11.3403 9.92602 10.9497 9.5355L7.41424 5.99999L10.9497 2.46451C11.3402 2.07399 11.3402 1.44082 10.9497 1.0503C10.5592 0.659775 9.92602 0.659775 9.5355 1.0503L6.00002 4.58578L2.46446 1.05022C2.07394 0.659693 1.44077 0.659693 1.05025 1.05022C0.659726 1.44074 0.659726 2.07391 1.05025 2.46443L4.58581 5.99999L1.05022 9.53558C0.659693 9.9261 0.659693 10.5593 1.05022 10.9498C1.44074 11.3403 2.07391 11.3403 2.46443 10.9498L6.00002 7.4142L9.53553 10.9497C9.92605 11.3402 10.5592 11.3402 10.9497 10.9497Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};

export default Close;

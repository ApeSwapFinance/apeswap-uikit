/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Send: React.FC<SvgProps> = ({ direction = "right", color = "white", width, getStyles }) => {
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
    <svg width={width || "28"} viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M25.2683 0.165595L1.55204 9.18306C-0.0664959 9.82406 -0.0571322 10.7143 1.25509 11.1113L7.344 12.9842L21.432 4.21996C22.0981 3.82033 22.7067 4.03531 22.2064 4.47319L10.7924 14.6302H10.7897L10.7924 14.6315L10.3724 20.8199C10.9877 20.8199 11.2593 20.5416 11.6044 20.2132L14.5619 17.3775L20.7136 21.8579C21.848 22.4738 22.6626 22.1573 22.9448 20.8225L26.9831 2.05693C27.3965 0.422785 26.3504 -0.31713 25.2683 0.165595Z"
        fill="white"
      />
    </svg>
  );
};

export default Send;

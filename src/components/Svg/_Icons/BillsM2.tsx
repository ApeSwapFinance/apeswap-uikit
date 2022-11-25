import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const BillsM2: React.FC<LegacySvgProps> = ({ color, bgColor, ...props }) => {
  return (
    <LegacySvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <rect
        x="1"
        y="1.48901"
        width="45.2941"
        height="45.2941"
        rx="22.6471"
        fill={bgColor}
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M22.1671 35.489C21.6643 35.489 21.281 35.0386 21.3615 34.5423L22.605 26.8723H17.6304C17.3805 26.8723 17.1988 26.7705 17.0852 26.5668C16.9716 26.3631 16.9716 26.1696 17.0852 25.9862L25.1906 13.8521C25.3421 13.6252 25.5969 13.489 25.8697 13.489C26.3732 13.489 26.7567 13.94 26.6759 14.4369L25.4331 22.0751H30.3396C30.5895 22.0751 30.7769 22.177 30.9018 22.3807C31.0268 22.5844 31.0325 22.7779 30.9189 22.9612L22.8472 35.1242C22.6959 35.352 22.4406 35.489 22.1671 35.489Z"
        fill={color}
      />
    </LegacySvg>
  );
};

export default BillsM2;

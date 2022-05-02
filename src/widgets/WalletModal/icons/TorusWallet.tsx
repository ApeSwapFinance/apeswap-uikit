import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg viewBox="0 0 60 60" {...props}>
      <circle cx={30} cy={30} r={30} fill="#D9E8FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 24.4V16h16.421v28h-8.21V24.4H17Zm21.895 0c2.267 0 4.105-1.88 4.105-4.2 0-2.32-1.838-4.2-4.105-4.2-2.267 0-4.105 1.88-4.105 4.2 0 2.32 1.838 4.2 4.105 4.2Z"
      fill="#438BF3"
    />
    </LegacySvg>
  );
};

export default Icon;

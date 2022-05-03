import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  const { theme } = props;
  return (
    <LegacySvg xmlns="http://www.w3.org/2000/svg" width="22" height="19" fill="none" viewBox="0 0 22 19" {...props}>
      <path
        stroke={theme?.isDark ? "#FAFAFA" : "#4D4040"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.2"
        d="M2 6.503h18M5.6 13.707h1.8M10.65 13.707h3.6"
      />
      <path
        stroke={theme?.isDark ? "#FAFAFA" : "#4D4040"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M5.996 2h9.999C19.199 2 20 2.792 20 5.953v7.394c0 3.16-.801 3.953-3.996 3.953H5.996C2.801 17.309 2 16.516 2 13.356V5.953C2 2.793 2.801 2 5.996 2z"
      />
    </LegacySvg>
  );
}

export default Icon;

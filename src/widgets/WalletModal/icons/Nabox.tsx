import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg viewBox="0 0 200.17 228.32" {...props}>
      <defs>
        <style>{".prefix__cls-1{fill:#2ac98b;fill-rule:evenodd}"}</style>
      </defs>
      <title>Nabox</title>
      <g id="prefix__\u56FE\u5C42_2" data-name="\u56FE\u5C42 2">
        <g id="prefix__\u56FE\u5C42_1-2" data-name="\u56FE\u5C42 1">
          <path
            className="prefix__cls-1"
            d="M0 64.12v106.34l30.79 17.75v-76.07l30.68 17.72v76.02l30.8 17.75V117.28L0 64.12z"
          />
          <path
            className="prefix__cls-1"
            d="M69.94 54.39l30.85-18.08 38.33 22.43-30.83 18zM100.83 0l-93 54.41 100.29 58.8v115.11l30.42-17.72V94.15l30.74-18V192.5l30.87-18.17V58.11z"
          />
        </g>
      </g>
    </LegacySvg>
  );
};

export default Icon;

import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <title>{"\u7F16\u7EC4"}</title>
      <g id="\u9875\u9762-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="ONTO-Landing-Page" transform="translate(-48.000000, -53.000000)" stroke="#000000" strokeWidth={3}>
          <g id="\u7F16\u7EC4" transform="translate(50.000000, 57.000000)">
            <path
              d="M3.14572653,3.565339 L3.14572653,3.565339 L0,0.420257608 L0,11.1571295 C0,13.9054947 1.04857551,16.6532371 3.14572653,18.7495428 C7.3406516,22.9427771 14.141751,22.9427771 18.336676,18.7495428 L3.14572653,3.565339 Z"
              id="Fill-11\u5907\u4EFD"
            />
            <path
              d="M18.1336247,18.3291295 L18.1336247,18.3291295 L21.2793512,21.4735881 L21.2793512,10.7367162 C21.2793512,7.98897381 20.2307757,5.24123142 18.1336247,3.14492569 C13.9386996,-1.04830856 7.13760023,-1.04830856 2.94267516,3.14492569 L18.1336247,18.3291295 Z"
              id="Fill-12\u5907\u4EFD"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;

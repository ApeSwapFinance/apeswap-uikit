import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" width="96" height="96" {...props}>
      <path
        d="M 48 96 C 74.507812 96 96 74.507812 96 48 C 96 21.492188 74.507812 0 48 0 C 21.492188 0 0 21.492188 0 48 C 0 74.507812 21.492188 96 48 96 Z M 74 22 L 22 22 L 22 74 L 74 74 Z M 74 22 "
        fill="black"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default Icon;

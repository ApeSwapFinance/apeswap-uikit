import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 16" {...props}>
      <rect width="8.70536" height="6.85714" />
      <rect y="9.14285" width="8.70536" height="6.85714" />
      <rect x="10.7144" width="8.03571" height="6.85714" />
      <rect x="20.7588" width="8.70536" height="6.85714" />
      <rect x="10.7144" y="9.14285" width="8.03571" height="6.85714" />
      <rect x="20.7588" y="9.14285" width="8.70536" height="6.85714" />
    </Svg>
  );
};

export default Icon;

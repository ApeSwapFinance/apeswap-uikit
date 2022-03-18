import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M88.16,34.57,70,20.5,52.92,7.26a4.77,4.77,0,0,0-5.84,0L30,20.5,11.84,34.57A4.76,4.76,0,0,0,10,38.33V88.24A4.76,4.76,0,0,0,14.76,93H34.28A2.72,2.72,0,0,0,37,90.28V57.72A2.72,2.72,0,0,1,39.72,55H60.28A2.72,2.72,0,0,1,63,57.72V90.28A2.72,2.72,0,0,0,65.72,93H85.24A4.76,4.76,0,0,0,90,88.24V38.33A4.76,4.76,0,0,0,88.16,34.57Z" />
    </Svg>
  );
};

export default Icon;

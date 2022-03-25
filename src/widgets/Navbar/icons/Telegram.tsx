import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  const { fill } = props;
  return (
    <LegacySvg width="40" height="40" viewBox="0 0 40 40" {...props}>
      <rect width="40" height="40" rx="10" />
      <path
        d="M30.38 11.1315L9.12065 19.2774C7.66979 19.8564 7.67818 20.6606 8.85446 21.0192L14.3126 22.7111L26.9411 14.794C27.5383 14.433 28.0838 14.6272 27.6354 15.0227L17.4038 24.198H17.4014L17.4038 24.1992L17.0273 29.7894C17.5788 29.7894 17.8223 29.538 18.1316 29.2414L20.7827 26.6798L26.2972 30.7271C27.314 31.2835 28.0443 30.9975 28.2973 29.7918L31.9172 12.84C32.2877 11.3638 31.3501 10.6954 30.38 11.1315Z"
        fill={fill}
      />
    </LegacySvg>
  );
};

export default Icon;

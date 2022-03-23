import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg viewBox="0 0 24 24" {...props}>
      <path d="M1.38889 22H23.6111C24.375 22 25 21.175 25 20.1667C25 19.1583 24.375 18.3333 23.6111 18.3333H1.38889C0.625 18.3333 0 19.1583 0 20.1667C0 21.175 0.625 22 1.38889 22ZM1.38889 12.8333H23.6111C24.375 12.8333 25 12.0083 25 11C25 9.99167 24.375 9.16667 23.6111 9.16667H1.38889C0.625 9.16667 0 9.99167 0 11C0 12.0083 0.625 12.8333 1.38889 12.8333ZM0 1.83333C0 2.84167 0.625 3.66667 1.38889 3.66667H23.6111C24.375 3.66667 25 2.84167 25 1.83333C25 0.825 24.375 0 23.6111 0H1.38889C0.625 0 0 0.825 0 1.83333Z" />
    </LegacySvg>
  );
};

export default Icon;

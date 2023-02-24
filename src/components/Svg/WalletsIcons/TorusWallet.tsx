import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z" fill="#0364FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.718 9.494c-.764 0-1.384.62-1.384 1.385v1.613c0 .764.62 1.384 1.384 1.384h2.45V22.9c0 .765.62 1.385 1.385 1.385h1.613c.764 0 1.384-.62 1.384-1.385V10.88c0-.765-.62-1.385-1.384-1.385h-5.448Z"
        fill="#fff"
      />
      <path d="M20.838 13.876a2.191 2.191 0 1 0 0-4.382 2.191 2.191 0 0 0 0 4.382Z" fill="#fff" />
    </svg>
  );
};

export default Icon;

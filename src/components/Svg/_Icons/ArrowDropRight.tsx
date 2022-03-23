import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 12 14">
      <path d="M11.557 5.68c-.068-.067-.324-.356-.562-.595C9.596 3.59 5.949 1.14 4.04.391 3.75.27 3.017.016 2.626 0 2.25 0 1.893.084 1.55.254A2.207 2.207 0 00.597 1.31C.477 1.616.29 2.534.29 2.55.103 3.555 0 5.187 0 6.99c0 1.72.103 3.285.256 4.304.018.017.205 1.158.41 1.549A2.148 2.148 0 002.557 14h.068c.51-.018 1.585-.46 1.585-.477 1.806-.75 5.37-3.079 6.801-4.627 0 0 .403-.398.579-.647.273-.357.409-.799.409-1.24 0-.494-.153-.954-.443-1.329z" />
    </LegacySvg>
  );
};

export default Icon;

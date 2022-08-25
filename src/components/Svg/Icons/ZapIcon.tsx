import React from "react";
import { LegacySvgProps } from "../types";
import { LegacySvg } from "../index";

const ZapIcon: React.FC<LegacySvgProps> = (props) => {
  const { fill } = props;
  return (
    <LegacySvg width="11" height="18" viewBox="0 0 11 18" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4.05315 18C3.66071 18 3.36083 17.6498 3.4212 17.2621L4.40395 10.95H0.495277C0.298951 10.95 0.156169 10.8667 0.0669294 10.7C-0.0223098 10.5333 -0.0223098 10.375 0.0669294 10.225L6.43712 0.294459C6.55483 0.110964 6.75784 0 6.97584 0C7.36872 0 7.66886 0.350677 7.60821 0.738842L6.62601 7.025H10.4811C10.6775 7.025 10.8247 7.10833 10.9229 7.275C11.021 7.44167 11.0255 7.6 10.9363 7.75L4.59249 17.7042C4.47505 17.8884 4.27166 18 4.05315 18Z"
        fill={fill}
      />
    </LegacySvg>
  );
};

export default ZapIcon;

import React from "react";
import { StyledLpTag, StyledLPText } from "./styles";
import { LpTagProps } from "./types";

const LpTag: React.FC<LpTagProps> = ({ variant, ...props }) => {
  return (
    <StyledLpTag variant={variant} {...props}>
      <StyledLPText>{variant} LP</StyledLPText>
    </StyledLpTag>
  );
};

export default LpTag;

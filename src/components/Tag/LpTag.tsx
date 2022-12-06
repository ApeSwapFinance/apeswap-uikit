import React from "react";
import { useTheme } from "styled-components";
import { StyledLpTag, LightText, DarkText } from "./styles";
import { LpTypeVariants } from "./types";

export interface LpTagProps {
  variant: LpTypeVariants;
}

const LpTag: React.FC<LpTagProps> = ({ variant, ...props }) => {
  const { isDark } = useTheme();

  return (
    <StyledLpTag variant={variant} {...props}>
      {isDark ? (
        <DarkText variant={variant}>{variant} LP</DarkText>
      ) : (
        <LightText variant={variant}>{variant} LP</LightText>
      )}
    </StyledLpTag>
  );
};

export default LpTag;

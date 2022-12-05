import React from "react";
import { StyledLpTag, StyledLpText } from "./styles";
import { LpTypeVariants } from "./types";

export interface LpTagProps {
  variant: LpTypeVariants;
}

const LpTag: React.FC<LpTagProps> = ({ variant, ...props }) => {
  const bgColor = {
    ape: "linear-gradient(53.53deg, rgba(161, 101, 82, 0.2) 15.88%, rgba(225, 178, 66, 0.2) 92.56%)",
    uni: "rgba(213, 49, 113, 0.15)",
  };
  const textColor = {
    ape: "linear-gradient(53.53deg, #A16552 15.88%, #E1B242 92.56%)",
    uni: "#D53171",
  };

  return (
    <StyledLpTag background={bgColor[variant]} {...props}>
      <StyledLpText background={textColor[variant]}>{variant} LP</StyledLpText>
    </StyledLpTag>
  );
};

export default LpTag;

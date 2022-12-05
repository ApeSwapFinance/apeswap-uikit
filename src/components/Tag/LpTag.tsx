import React from "react";
import { useTheme } from "styled-components";
import { StyledLpTag, LightText, DarkText } from "./styles";
import { LpTypeVariants } from "./types";

export interface LpTagProps {
  variant: LpTypeVariants;
}

const LpTag: React.FC<LpTagProps> = ({ variant, ...props }) => {
  const { isDark } = useTheme();
  const bgColor = {
    ape: {
      light: "linear-gradient(53.53deg, rgba(161, 101, 82, 0.2) 15.88%, rgba(225, 178, 66, 0.2) 92.56%)",
      dark: "linear-gradient(53.53deg, rgba(161, 101, 82, 0.5) 15.88%, rgba(225, 178, 66, 0.5) 92.56%)",
    },
    uni: { light: "rgba(213, 49, 113, 0.15)", dark: "rgba(213, 49, 113, 0.15)" },
  };
  const textColor = {
    ape: { light: "linear-gradient(53.53deg, #A16552 15.88%, #E1B242 92.56%)", dark: "rgba(255, 255, 255, 0.5)" },
    uni: { light: "#D53171", dark: "#D53171" },
  };

  return (
    <StyledLpTag background={bgColor[variant]} {...props}>
      {isDark ? (
        <DarkText background={textColor[variant]}>{variant} LP</DarkText>
      ) : (
        <LightText background={textColor[variant]}>{variant} LP</LightText>
      )}
    </StyledLpTag>
  );
};

export default LpTag;

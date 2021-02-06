import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}
const StyledLogo = styled.h1`
  font-family: 'Titan One', cursive;
  color: #AF6E5A;
  font-weight: 400;
`;

const Logo: React.FC<LogoProps> = () => {
  return (
    <StyledLogo>ApeSwap</StyledLogo>
  );
};

export default Logo;

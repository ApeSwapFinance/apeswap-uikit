import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}
const StyledLogo = styled.h1`
  font-family: "Titan One", cursive;
  color: #af6e5a;
  font-weight: 400;
  font-size: 20px;
  margin-left: 8px;
`;

const Logo: React.FC<LogoProps> = () => {
  return <StyledLogo>ApeSwap</StyledLogo>;
};

export default Logo;

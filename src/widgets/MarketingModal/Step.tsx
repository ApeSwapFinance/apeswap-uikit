import React from "react";
import styled from "styled-components";

import { StepProps } from "./types";

const StepCon = styled.div`
  width: 100%;
  margin-top: 30px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 48%;
  }
`;

const Number = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffb300;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 12px;
  }
`;

const HeadText = styled.div`
  font-family: Poppins;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 22px;
    margin-top: 5px;
  }
`;

const Step: React.FC<StepProps> = ({ stepNumber, headerText, thirdText }) => (
  <StepCon id={stepNumber.slice(-1)}>
    <Number>{stepNumber}</Number>
    <HeadText>{headerText}</HeadText>
    {thirdText}
  </StepCon>
);

export default Step;

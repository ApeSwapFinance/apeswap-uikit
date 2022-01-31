import React from "react";
import styled from "styled-components";
import ApeswapIcon from "./ApeswapIcon";
import { SpinnerProps } from "./types";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 300 }) => {
  return (
    <Container>
      <ApeswapIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;

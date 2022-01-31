import React from "react";
import styled from "styled-components";
import ApeSpinner from "./ApeSpinner";
import { SpinnerProps } from "./types";

const Container = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 300 }) => {
  return (
    <Container size={size}>
      <ApeSpinner />
    </Container>
  );
};

export default Spinner;

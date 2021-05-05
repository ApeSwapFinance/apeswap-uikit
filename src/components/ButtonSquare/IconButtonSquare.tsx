import styled from "styled-components";
import ButtonSquare from "./ButtonSquare";
import { ButtonSquareProps } from "./types";

const IconButtonSquare = styled(ButtonSquare)<ButtonSquareProps>`
  padding: 0;
  width: ${({ size }) => (size === "sm" ? "32px" : "48px")};
`;

export default IconButtonSquare;

import styled from "styled-components";
import ButtonSquare from "./ButtonSquare";
import { ButtonProps } from "./types";

const IconButton = styled(ButtonSquare)<ButtonProps>`
  padding: 0;
  width: ${({ size }) => (size === "sm" ? "32px" : "48px")};
`;

export default IconButton;

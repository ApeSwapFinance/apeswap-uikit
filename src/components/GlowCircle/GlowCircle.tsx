import styled from "styled-components";
import { GlowCircleProps } from "./types";

const GlowCircle = styled.span<GlowCircleProps>`
  margin-left: 5px;
  display: block;
  width: ${({ width }) => width || "8px"};
  height: ${({ height }) => height || "8px"};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  cursor: pointer;
  box-shadow: 0 0 0 rgba(56, 166, 17, 0.4);
  animation: pulse 2s infinite;
  :hover {
    animation: none;
  }
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(56, 166, 17, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(56, 166, 17, 0.4);
      box-shadow: 0 0 0 0 rgba(56, 166, 17, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
`;

export default GlowCircle;

import React from "react";
import styled from "styled-components";
import { ModalContentProps } from "./types";

const ModalBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    height: 100%;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledImage = styled.img`
  width: 240px;
  height: 120px;
`;

const ModalContent: React.FC<ModalContentProps> = ({ Icon, children }) => {
  return (
    <ModalBody>
      {Icon}
      {children}
    </ModalBody>
  );
};

export default ModalContent;

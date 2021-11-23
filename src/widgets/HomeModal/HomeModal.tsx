import React from "react";
import styled from "styled-components";

import { HomeModalProps } from "./types";

const ModalBackground = styled.div`
  background: ${({ theme }) => theme.modal.background};
  width: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  /* display: flex;
  flex: 1; */
`;

const StyledModal = styled.div``;

const ModalHeader = styled.div``;
const LeftHeader = styled.div``;
const Title = styled.h1``;
const Description = styled.span``;
const ModalBody = styled.div``;
const CloseButton = styled.button``;
const HeaderImage = styled.img``;

const HomeModal: React.FC<HomeModalProps> = ({
  visible,
  title,
  description,
  closeHandler,
  ImageUrl,
  ImageDesc,
  children,
}) => (
  <ModalBackground
    style={{
      display: visible ? "unset" : "none",
    }}
  >
    <StyledModal>
      <ModalHeader>
        <LeftHeader>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </LeftHeader>

        <HeaderImage className="farm-monkey" src={ImageUrl} alt={ImageDesc} />

        <CloseButton onClick={closeHandler}>X</CloseButton>
      </ModalHeader>

      <ModalBody>{children}</ModalBody>
    </StyledModal>
  </ModalBackground>
);

export default HomeModal;

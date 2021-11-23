import React from "react";
import styled from "styled-components";

import { HomeModalProps } from "./types";
import { CloseIcon } from "../../components/Svg";

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledModal = styled.div`
  width: 80%;
  max-width: 900px;
  background: #ffffff;
  border-radius: 20px;
  margin: 4rem auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .left-header-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
    position: relative;
    font-family: Poppins;
  }
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
`;

const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
`;
const Description = styled.p`
  font-family: Poppins;
  margin-top: 0.5em;
  font-weight: 500;
`;
const ModalBody = styled.div``;

const CloseButton = styled.button`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
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
        <div className="left-header-con">
          <LeftHeader>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </LeftHeader>

          {/* <HeaderImage className="farm-monkey" src={ImageUrl} alt={ImageDesc} /> */}
        </div>

        <CloseButton onClick={closeHandler}>
          <CloseIcon color="primary" />
        </CloseButton>
      </ModalHeader>

      <ModalBody>{children}</ModalBody>
    </StyledModal>
  </ModalBackground>
);

export default HomeModal;

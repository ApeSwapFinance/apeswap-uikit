import React from "react";
import styled, { useTheme } from "styled-components";

import { HomeModalProps } from "./types";
import { CloseIcon } from "../../components/Svg";
import { Button, FarmApe } from "../..";

import Step from "./Step";

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  background: ${({ theme }) => (theme.isDark ? "#212121" : "#FFF")};
  color: ${({ theme }) => (theme.isDark ? "#FFFFFF" : theme.colors.primary)};

  /* ${({ theme }) => theme.mediaQueries.lg} {
    width: 80%;
    max-width: 900px;
    height: 500px;
    max-height: 500px;
    border-radius: 20px;
    margin: 4rem auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndices.modal};
  } */
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;

  /* ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .left-header-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-family: Poppins;
  }
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 1.5em; */
`;

const Title = styled.h5`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-family: Poppins;
  margin-top: 1em;
  font-weight: 500;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
`;

const CloseButton = styled.button`
  width: 70px;
  height: 70px;
  align-self: flex-end;
  border: none;
  background: transparent;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 60%;
  overflow-y: scroll;
  padding-bottom: 20px;
  padding-top: 100px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Action = styled.p`
  font-family: Poppins;
  /* margin-top: 0.5em; */
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;

  button {
    &.action-link {
      font-family: Poppins;
      color: #ffb300;
      text-decoration: underline;
      font-size: 14px;
      border: none;
      background: transparent;
      padding: 0;
      font-weight: 500;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Upstep = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`;

const FarmApeWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 100px;
    height: 150px;
    margin-top: -30px;
    margin-left: 15px;
    display: unset;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  a {
    font-family: Poppins;
    color: #ffb300;
    text-decoration: underline;
    font-size: 14px;
    border: none;
    background: transparent;
    padding: 0;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    text-transform: uppercase;
    margin-top: 10px;
  }
`;

const Transparent = styled.div`
  background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  width: 100%;
  height: 30px;
`;

const HomeModal: React.FC<HomeModalProps> = ({
  visible,
  title,
  description,
  closeHandler,
  goToFarms,
  connectWallet,
  goToLiquidity,
  startEarning,
}) => {
  const theme = useTheme();

  return (
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

            <FarmApeWrapper>
              <FarmApe />
            </FarmApeWrapper>
          </div>

          <CloseButton onClick={closeHandler}>
            <CloseIcon color={theme.isDark ? "#FFF" : "primary"} width="30px" fontWeight="bold" />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <Upstep>
            <Step
              stepNumber="Step 1"
              headerText="Connect Your Wallet"
              thirdText={
                <Action>
                  <button type="button" onClick={connectWallet} className="action-link">
                    Click here
                  </button>{" "}
                  to connect your wallet to ApeSwap.
                </Action>
              }
            />
            <Step
              stepNumber="Step 2"
              headerText="Add Liquidity"
              thirdText={
                <Action>
                  Go to Trade &gt;{" "}
                  <button type="button" onClick={goToLiquidity} className="action-link">
                    Liquidity
                  </button>{" "}
                  and obtain the LP(s) you want to Stake.
                </Action>
              }
            />
          </Upstep>

          <Upstep>
            <Step
              stepNumber="Step 3"
              headerText="Stake"
              thirdText={
                <Action>
                  Head over to{" "}
                  <button type="button" onClick={goToFarms} className="action-link">
                    Farms
                  </button>
                  , Enable your favorites and start Staking.
                </Action>
              }
            />
            <Step
              stepNumber="Step 4"
              headerText="Collect"
              thirdText={
                <Action>
                  Don’t forget to Harvest your earnings periodically. You can reinvest them or cash out at any time!
                </Action>
              }
            />
          </Upstep>
          <Transparent />
        </ModalBody>

        <ModalFooter>
          <a href="#4">Continue reading</a>
          <Button variant="yellow" onClick={startEarning}>
            Start Earning
          </Button>
        </ModalFooter>
      </StyledModal>
    </ModalBackground>
  );
};

export default HomeModal;

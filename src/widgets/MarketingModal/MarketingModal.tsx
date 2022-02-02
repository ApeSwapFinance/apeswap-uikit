import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { CloseIcon } from "../../components/Svg";
import { Button } from "../../components/Button";
import { FarmApe } from "../../components/Image";
import { MktModalProps } from "./types";

import Step from "./Step";

export interface ReadProps {
  readMore: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndices.modal - 5};
`;

const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  background: ${({ theme }) => (theme.isDark ? "#212121" : "#FFF")};
  color: ${({ theme }) => (theme.isDark ? "#FFFFFF" : theme.colors.primary)};
  z-index: ${({ theme }) => theme.zIndices.modal};
  ${({ theme }) => theme.mediaQueries.md} {
    width: 80%;
    max-width: 900px;
    height: 500px;
    max-height: 500px;
    border-radius: 20px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  .left-header-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-family: Poppins;
    align-self: center;
  }
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 1.5em;
  }
`;

const Title = styled.h5`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 22px;
    line-height: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 30px;
    line-height: 30px;
  }
`;

const Description = styled.p`
  font-family: Poppins;
  margin-top: 1em;
  font-weight: 500;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    line-height: 24px;
  }
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
  ${({ theme }) => theme.mediaQueries.md} {
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
  padding-top: 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 100%;
    overflow-y: unset;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Action = styled.p`
  font-family: Poppins;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    margin-top: 0.5em;
  }
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

      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 16px;
      }

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
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const FarmApeWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
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

const Read = styled.a<ReadProps>`
  display: ${(props) => (props.readMore ? "none" : "unset")};

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const Transparent = styled.div`
  background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  width: 100%;
  height: 30px;
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const MarketingModal: React.FC<MktModalProps> = ({
  onDismiss,
  title,
  description,
  goToFarms,
  connectWallet,
  goToLiquidity,
  startEarning,
}) => {
  const theme = useTheme();
  const [readMore, setReadMore] = useState(false);

  const changeReadMore = () => setReadMore(!readMore);

  return (
    <Container>
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

          <CloseButton onClick={onDismiss}>
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
          <Read href="#4" onClick={changeReadMore} readMore={readMore}>
            Continue reading
          </Read>
          <Button variant="primary" onClick={startEarning}>
            Start Earning
          </Button>
        </ModalFooter>
      </StyledModal>
    </Container>
  );
};

MarketingModal.defaultProps = {
  onDismiss: () => null,
  goToFarms: () => null,
  connectWallet: () => null,
  goToLiquidity: () => null,
  startEarning: () => null,
};

export default MarketingModal;

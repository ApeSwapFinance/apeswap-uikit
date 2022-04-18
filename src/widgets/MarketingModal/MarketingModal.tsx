import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon, ArrowDropLeftIcon, ArrowDropRightIcon } from "../../components/Svg";
import { ButtonSquare } from "../../components/ButtonSquare";
import { MarketingModalProps, IconProps } from "./types";

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
  height: 100%;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white2};
  color: ${({ theme }) => theme.colors.text};
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.md} {
    width: 80%;
    height: 500px;
    max-width: 900px;
    min-height: 60%;
    max-height: 75%;
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
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
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
  margin-top: 1em;
  font-weight: 500;
  text-align: center;
  font-size: 16px;
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
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 0px 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px 284px;
  }
  a {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
    font-size: 14px;
    border: none;
    background: transparent;
    padding: 0;
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
const SliderBtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  &:last-child {
    justify-content: flex-end;
  }
`;
const CircleDiv = styled.div`
  display: flex;
  padding: 10px;
`;
const CircleButton = styled.div`
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.colors.white4};
  border-radius: 50%;
  margin-right: 10px;
  &.isActive {
    background: linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%);
  }
  &:last-child {
    margin-right: 0;
  }
`;
const StyledLeftArrow = styled(ArrowDropLeftIcon)<IconProps>`
  display: ${({ step }) => (step === 0 ? "none" : "unset")};
  &:hover {
    cursor: pointer;
  }
`;
const StyledRightArrow = styled(ArrowDropRightIcon)<IconProps>`
  display: ${({ step, childrensLength }) => (step === childrensLength - 1 ? "none" : "unset")};
  &:hover {
    cursor: pointer;
  }
`;
const StyledButton = styled(ButtonSquare)`
  height: 44px;
  font-size: 16px;
  padding: 10px 20px;
  font-weight: 700;
`;

const MarketingModal: React.FC<MarketingModalProps> = ({
  title,
  description,
  onDismiss,
  startEarning,
  startEarningText,
  children,
}) => {
  const childrens = children as React.ReactNode[];
  const childrensLength = childrens.length;

  const [step, setStep] = useState(0);

  const goNext = () => {
    if (step + 1 !== childrensLength) {
      setStep(step + 1);
    }
  };

  const goPrev = () => {
    return step === 0 ? () => null : setStep(step - 1);
  };

  const renderChildren = () => {
    return children && childrens.map((element, index) => <>{step === index && element}</>);
  };

  const renderDots = () => {
    return (
      children &&
      childrens.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CircleButton key={`circle-${index}`} className={step === index ? "isActive" : ""} />
      ))
    );
  };

  return (
    <Container>
      <StyledModal>
        <ModalHeader>
          <div className="left-header-con">
            <LeftHeader>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </LeftHeader>
          </div>

          <CloseButton onClick={onDismiss}>
            <CloseIcon color="text" width="30px" fontWeight="bold" />
          </CloseButton>
        </ModalHeader>

        {renderChildren()}

        <ModalFooter>
          <SliderBtnSection>
            <IconContainer>
              <StyledLeftArrow
                color="text"
                width="12px"
                height="14px"
                onClick={goPrev}
                step={step}
                childrensLength={childrensLength}
              />
            </IconContainer>

            {childrensLength > 1 && <CircleDiv>{renderDots()}</CircleDiv>}

            <IconContainer>
              <StyledRightArrow
                color="text"
                width="12px"
                height="14px"
                onClick={goNext}
                step={step}
                childrensLength={childrensLength}
              />
            </IconContainer>
          </SliderBtnSection>

          {startEarning && (
            <StyledButton fullWidth onClick={startEarning}>
              {startEarningText}
            </StyledButton>
          )}
        </ModalFooter>
      </StyledModal>
    </Container>
  );
};

MarketingModal.defaultProps = {
  onDismiss: () => null,
  startEarning: undefined,
};

export default MarketingModal;

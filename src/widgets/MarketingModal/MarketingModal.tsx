import React, { useState } from "react";
import { CloseIcon } from "../../components/Svg";
import { Button } from "../../components/Button";
import { MarketingModalProps } from "./types";
import {
  styles,
  Container,
  StyledModal,
  ModalHeader,
  LeftHeader,
  Title,
  Description,
  CloseButton,
  ModalFooter,
  SliderBtnSection,
  IconContainer,
  CircleDiv,
  CircleButton,
  StyledLeftArrow,
  StyledRightArrow,
} from "./styles";

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
            <Button fullWidth onClick={startEarning} sx={styles.startEarningBtn}>
              {startEarningText}
            </Button>
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

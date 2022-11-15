/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Box } from "theme-ui";

import { CloseIcon } from "../../components/Svg";
import { Flex } from "../../components/Flex";
import { Modal } from "../Modal";
import { CountProps, TModalProps } from "./types";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { styles, modalProps, dynamicStyles } from "./styles";

const Circle: React.FC<CountProps> = ({ index, goToStep, isActive }) => {
  return (
    <Flex
      sx={dynamicStyles.allCircle({ isActive })}
      // eslint-disable-next-line react/no-array-index-key
      key={`circle-${index}`}
      onClick={goToStep}
    />
  );
};
const TutorialModal: React.FC<TModalProps> = ({
  type,
  title,
  description,
  children,
  onDismiss,
  readyText,
  onReady,
  t,
}) => {
  const childrens = children as React.ReactNode[];
  const childrensLength = childrens.length;

  const [step, setStep] = useState(0);

  // const goNext = () => {
  //   if (step + 1 !== childrensLength) setStep(step + 1);
  // };

  // eslint-disable-next-line consistent-return
  const handleNext = () => {
    if (childrensLength <= step + 1) {
      onDismiss();
    } else {
      return setStep(step + 1);
    }
  };

  const renderChildren = () => {
    return children && childrens.map((element, index) => <>{step === index && element}</>);
  };

  const renderDots = () => {
    return [...Array(childrensLength)].map((_, index) => (
      <Circle index={index} goToStep={() => setStep(index)} isActive={index === step} />
    ));
  };

  return (
    <Modal zIndex={10} onDismiss={onDismiss} {...modalProps}>
      <Flex className="tutorial-modal" sx={styles.modalCon}>
        <CloseIcon width={22} onClick={onDismiss} sx={{ cursor: "pointer", position: "absolute", right: "20px" }} />
        <Flex sx={styles.contentBody}>
          <Box sx={dynamicStyles.showApe({ step, type })} />
          <Flex sx={styles.rightCon}>
            <Flex sx={styles.right}>
              <Flex sx={styles.modalHeader}>
                <Text sx={styles.title}>{t(`${title}`)}</Text>
                <Text sx={styles.description}>{t(`${description}`)}</Text>
              </Flex>
              {/* If mobile wrap the children in a higher order component */}
              {/* {renderChildren()} */}
              {/* step, setStep, goNext */}
              {renderChildren()}
            </Flex>
            <Flex sx={styles.modalFooter}>
              <Flex sx={styles.circles}>{renderDots()}</Flex>
              <Button onClick={step === childrensLength - 1 ? onReady : handleNext} sx={styles.readyBtn}>
                {step === childrensLength - 1 ? t(`${readyText}`) : t("Next")}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TutorialModal;

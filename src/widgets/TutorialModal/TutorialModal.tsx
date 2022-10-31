/** @jsxImportSource theme-ui */
import React, { useState } from "react";

import { Box } from "theme-ui";
import { CloseIcon } from "../../components/Svg";
import { Flex } from "../../components/Flex";
import { Modal } from "../Modal";
import { styles, modalProps } from "./styles";
import { CountProps, TModalProps } from "./types";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const Circle: React.FC<CountProps> = ({ index, step }) => {
  return (
    <Flex
      sx={styles.allCircle}
      // eslint-disable-next-line react/no-array-index-key
      key={`circle-${index}`}
      className={step === index ? "isActive" : ""}
    />
  );
};
const TutorialModal: React.FC<TModalProps> = ({
  icon,
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

  const goNext = () => {
    if (step + 1 !== childrensLength) setStep(step + 1);
  };

  const goPrev = () => {
    return step === 0 ? () => null : setStep(step - 1);
  };

  const renderChildren = () => {
    return children && childrens.map((element, index) => <>{step === index && element}</>);
  };

  const renderDots = () => {
    return children && childrens.map((_, index) => <Circle step={step} index={index} />);
  };

  return (
    <Modal zIndex={10} onDismiss={onDismiss} {...modalProps}>
      <Flex className="tutorial-modal" sx={styles.modalCon}>
        <CloseIcon width={22} onClick={onDismiss} sx={{ cursor: "pointer", position: "absolute", right: "20px" }} />
        <Flex
          sx={{
            flexDirection: ["column", "column", "row"],
            width: "100%",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ ...styles.showApe, background: "brown" }} />
          <Flex sx={{ width: "100%", flexDirection: "column", flex: 1 }}>
            <Flex sx={styles.right}>
              <Flex sx={styles.modalHeader}>
                <Text sx={styles.title}>{title}</Text>
                <Text sx={styles.description}>{description}</Text>
              </Flex>
              {renderChildren()}
            </Flex>

            <Flex sx={styles.modalFooter}>
              <Flex sx={styles.circles}>
                {childrensLength > 1 && <Flex sx={styles.circleCon}>{renderDots()}</Flex>}
              </Flex>
              <Button fullWidth onClick={step === childrensLength - 1 ? onReady : goNext} sx={styles.readyBtn}>
                {step === childrensLength - 1 ? readyText : "Next"}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TutorialModal;

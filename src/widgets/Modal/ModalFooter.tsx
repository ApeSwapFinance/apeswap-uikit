import React from "react";
import { Flex } from "theme-ui";
import { InternalProps } from "./types";
import styles from "./styles";
import { Text } from "../../components/Text";

const ModalFooter: React.FC<InternalProps> = ({ children, onDismiss, t }) => {
  return (
    <Flex sx={styles.modalFooter}>
      {children}
      <Text
        onClick={onDismiss}
        style={{
          textDecoration: "underline",
          color: "text",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        {t ? t("Cancel") : "Cancel"}
      </Text>
    </Flex>
  );
};

export default ModalFooter;

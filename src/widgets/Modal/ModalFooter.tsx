/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import { Flex } from "theme-ui";
import { InternalProps } from "./types";
import styles from "./styles";
import { Text } from "../../components/Text";
import { Context as ModalContext } from "./ModalContext";

const ModalFooter: React.FC<InternalProps> = ({ children, onDismiss, t }) => {
  const { handleClose } = useContext(ModalContext);
  const onClose = () => {
    onDismiss?.();
    handleClose();
  };
  return (
    <Flex sx={styles.modalFooter}>
      {children}
      <Text
        onClick={onClose}
        sx={{
          textDecoration: "underline",
          color: "text",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {t ? t("Cancel") : "Cancel"}
      </Text>
    </Flex>
  );
};

export default ModalFooter;

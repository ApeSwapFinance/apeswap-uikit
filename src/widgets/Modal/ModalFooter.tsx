import React from "react";
import { Flex, Button } from "theme-ui";
import { InternalProps } from "./types";
import styles from "./styles";

const ModalFooter: React.FC<InternalProps> = ({ children, handleClose }) => {
  return (
    <Flex sx={styles.modalFooter}>
      {children}
      <Button onClick={handleClose} sx={styles.cancelButton}>
        Cancel
      </Button>
    </Flex>
  );
};

export default ModalFooter;

import React, { useContext } from "react";
import { Flex } from "theme-ui";
import style from "./styles";
import { IconButton } from "../../components/Button";
import { InternalProps } from "./types";
import { Divider } from "../../components/Divider";
import { Context as ModalContext } from "./ModalContext";

const ModalHeader: React.FC<InternalProps> = ({ children, onDismiss, ...props }) => {
  const { handleClose } = useContext(ModalContext);
  const onClose = () => {
    onDismiss?.();
    handleClose();
  }
  return (
    <>
      <Flex {...props} sx={style.modalHead}>
        {children}
        <IconButton icon="close" color="text" variant="transparent" onClick={onClose} />
      </Flex>
      <Divider />
    </>
  );
};

export default ModalHeader;

import React from "react";
import { Flex } from "theme-ui";
import style from "./styles";
import { IconButton } from "../../components/Button";
import { InternalProps } from "./types";
import { Divider } from "../../components/Divider";

const ModalHeader: React.FC<InternalProps> = ({ children, handleClose, ...props }) => {
  return (
    <>
      <Flex {...props} sx={style.modalHead}>
        {children}
        <IconButton icon="close" color="brown" variant="transparent" onClick={handleClose} />
      </Flex>
      <Divider />
    </>
  );
};

export default ModalHeader;

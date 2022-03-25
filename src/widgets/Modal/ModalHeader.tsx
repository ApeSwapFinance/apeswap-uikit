import React from "react";
import { Flex } from "theme-ui";
import style from "./styles";
import { IconButton } from "../../components/ButtonNew";
import { InternalProps } from "./types";
import { Divider } from "../../components/Divider";

const ModalHeader: React.FC<InternalProps> = ({ children, onDismiss, ...props }) => {
  return (
    <>
      <Flex {...props} sx={style.modalHead}>
        {children}
        <IconButton icon="close" color="text" variant="transparent" onClick={onDismiss} />
      </Flex>
      <Divider />
    </>
  );
};

export default ModalHeader;

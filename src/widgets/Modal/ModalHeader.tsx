import React, { useContext } from "react";
import { Flex } from "theme-ui";
import style from "./styles";
import { IconButton } from "../../components/Button";
import { InternalProps } from "./types";
import { Divider } from "../../components/Divider";

const ModalHeader: React.FC<InternalProps> = ({ children, onDismiss, ...props }) => {
  return (
    <>
      {children && (
        <>
          <Flex {...props} sx={style.modalHead}>
            {children}
          </Flex>
          <Divider />
        </>
      )}
      <IconButton
        icon="close"
        color="text"
        variant="transparent"
        onClick={onDismiss}
        sx={{ position: "absolute", right: "20px", top: "25px" }}
      />
    </>
  );
};

export default ModalHeader;

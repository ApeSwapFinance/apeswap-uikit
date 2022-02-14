import React from "react";
import { Box } from "theme-ui";
import { ModalProps } from "./types";
import style from "./styles";

const Modal: React.FC<ModalProps> = ({
  children,
  handleClose,
  open = false,
  minWidth = "50%",
  maxWidth = "80%",
  ...props
}) => {
  return (
    <Box>
      <Box {...props} sx={open ? { minWidth, maxWidth, ...style.container } : { display: "none" }}>
        {children}
      </Box>
      <Box sx={open ? style.backdrop : { display: "none" }} onClick={handleClose} />
    </Box>
  );
};

export default Modal;

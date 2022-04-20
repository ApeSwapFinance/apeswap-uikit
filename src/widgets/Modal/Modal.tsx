/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "./types";
import style from "./styles";

const Modal: React.FC<ModalProps> = ({
  children,
  handleClose,
  open = false,
  zIndex = "modal",
  minWidth = "50%",
  maxWidth = "80%",
  ...props
}) => {
  return (
    <Box>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, transform: "translate(-50%, -50%) scale(0.1)" }}
            animate={{ opacity: 1, transform: "translate(-50%, -50%) scale(1.0)" }}
            transition={{ opacity: { duration: 0.2 }, transform: { duration: 0.2 } }}
            exit={{ opacity: 0, transform: "translate(-50%, -50%) scale(0)" }}
            {...props}
            sx={{ minWidth, maxWidth, zIndex, ...style.container }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {open && <Box sx={style.backdrop} onClick={handleClose} />}
    </Box>
  );
};

export default Modal;

/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "./types";
import style from "./styles";
import ModalHeader from "./ModalHeader";
import { Heading } from "../../components/Heading";

const Modal: React.FC<ModalProps> = ({
  children,
  onDismiss,
  open = true,
  title,
  minWidth = "350px",
  maxWidth = "80%",
  ...props
}) => {
  return (
    <Box id={title}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, transform: "translate(-50%, -50%) scale(0.1)" }}
            animate={{ opacity: 1, transform: "translate(-50%, -50%) scale(1.0)" }}
            transition={{ opacity: { duration: 0.2 }, transform: { duration: 0.2 } }}
            exit={{ opacity: 0, transform: "translate(-50%, -50%) scale(0)" }}
            {...props}
            sx={{ minWidth, maxWidth, ...style.container }}
          >
            {title && (
              <ModalHeader onDismiss={onDismiss}>
                <Heading>{title}</Heading>
              </ModalHeader>
            )}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {open && <Box sx={style.backdrop} onClick={onDismiss} />}
    </Box>
  );
};

export default Modal;

/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import { Box } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "./types";
import style from "./styles";
import ModalHeader from "./ModalHeader";
import { Heading } from "../../components/Heading";
import { Context as ModalContext } from "./ModalContext";

const Modal: React.FC<ModalProps> = ({
  children,
  onDismiss,
  open = true,
  title,
  zIndex = "modal",
  minWidth = "50%",
  maxWidth = "80%",
  onAnimationComplete,
  ...props
}) => {
  const { handleClose } = useContext(ModalContext);
  const onClose = onDismiss || handleClose;

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
            sx={{ minWidth, maxWidth, zIndex, ...style.container }}
            onAnimationComplete={onAnimationComplete}
          >
            {title && (
              <ModalHeader onDismiss={onClose}>
                <Heading>{title}</Heading>
              </ModalHeader>
            )}
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child as any, {
                  ...(child as any)?.props,
                  onDismiss: () => {
                    (child as any)?.props?.onDismiss?.();
                    onClose();
                  },
                });
              }
              return child;
            })}
          </motion.div>
        )}
      </AnimatePresence>
      {open && <Box sx={style.backdrop} onClick={onClose} />}
    </Box>
  );
};

export default Modal;

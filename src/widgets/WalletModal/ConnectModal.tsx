/** @jsxImportSource theme-ui */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Modal, ModalHeader } from "../Modal";
import { Login } from "./types";
import { Flex } from "../../components/Flex";
import { Text } from "../../components/Text";
import { Svg } from "../../components/Svg";
import PrioritizedWallets from "./components/PrioritizedWallets";
import AllWallets from "./components/AllWallets";
import styles from "./components/styles";

interface Props {
  login: Login;
  t: (key: string) => string;
}

const modalProps = {
  sx: {
    zIndex: 11,
    maxHeight: "calc(100% - 30px)",
    height: ["395px", "395px", "470px"],
    width: ["280px", "280px", "620px"],
    maxWidth: ["280px", "280px", "620px"],
    minWidth: ["unset", "unset", "620px"],
    overflow: "hidden",
    padding: ["20px", "20px", "30px"],
    "& hr": { display: "none" },
  },
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const ConnectModal: React.FC<Props> = ({ login, t }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal {...modalProps}>
      <ModalHeader {...{ sx: { height: "24px" } }}>
        {open && (
          <Flex sx={{ width: "100%" }}>
            <Flex onClick={() => setOpen(false)} sx={{ "&:hover": { cursor: "pointer" } }}>
              <Svg icon="caret" direction="left" />
              <Text sx={{ fontWeight: 700, ml: "5px", fontSize: "14px" }}>{t("Back")}</Text>
            </Flex>
            <Text sx={styles.smallTitle}>{t("Connect Wallet")}</Text>
          </Flex>
        )}
      </ModalHeader>
      <AnimatePresence initial={false}>
        <motion.div
          key={open ? "wallets" : "connect"}
          custom={open ? 1 : -1}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          sx={{ width: "100%" }}
        >
          {!open ? <PrioritizedWallets t={t} login={login} setOpen={setOpen} /> : <AllWallets t={t} login={login} />}
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default ConnectModal;

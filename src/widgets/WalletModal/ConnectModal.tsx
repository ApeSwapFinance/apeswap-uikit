/** @jsxImportSource theme-ui */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "../../components/Link";
import { Modal, ModalHeader } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { Flex } from "../../components/Flex";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Svg } from "../../components/Svg";
import WalletImage from "./icons/walletImage";

interface Props {
  login: Login;
  t: (key: string) => string;
  connectError: boolean;
}

const modalProps = {
  sx: {
    zIndex: 11,
    maxHeight: "calc(100% - 30px)",
    height: ["395px", "395px", "455px"],
    width: ["280px", "280px", "620px"],
    maxWidth: ["280px", "280px", "620px"],
    minWidth: ["unset", "unset", "620px"],
    overflow: "hidden",
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

const ConnectModal: React.FC<Props> = ({ login, t, connectError }) => {
  const [open, setOpen] = React.useState(false);
  const showWallets = config.slice(0, 3);

  return (
    <Modal {...modalProps}>
      <ModalHeader {...{ sx: { height: "24px" } }}>
        {open && (
          <Flex onClick={() => setOpen(false)}>
            <Svg icon="caret" direction="left" />
            <Text sx={{ fontWeight: 700, ml: "5px", fontSize: "14px" }}>{t("Back")}</Text>
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
          {!open ? (
            <Flex sx={{ flexWrap: "wrap", position: "absolute", width: "100%", maxWidth: ["240px", "240px", "580px"] }}>
              <Flex sx={{ flexWrap: "wrap", width: "100%" }}>
                <Flex sx={{ display: ["none", "none", "flex"] }}>
                  <WalletImage />
                </Flex>
                <Flex
                  sx={{
                    flexWrap: "wrap",
                    width: ["100%", "100%", "50%"],
                    flexDirection: "column",
                    height: ["132px", "132px", "unset"],
                  }}
                >
                  <Flex sx={{ width: "100%" }}>
                    <Text
                      sx={{
                        fontSize: ["16px", "16px", "25px"],
                        fontWeight: 700,
                        lineHeight: ["24px", "24px", "37.5px"],
                      }}
                    >
                      {t("Connect Wallet")}
                    </Text>
                  </Flex>
                  <Text
                    sx={{ fontSize: ["12px", "12px", "16px"], fontWeight: 500, lineHeight: ["14px", "14px", "24px"] }}
                  >
                    {t(
                      "Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone."
                    )}
                  </Text>
                  <Text sx={{ fontSize: "12px", fontWeight: 300 }}>
                    <Link
                      href="https://apeswap.gitbook.io/apeswap-finance/product-and-features/wallets/how-to-connect-your-wallet"
                      external
                      color="text"
                      sx={{
                        display: "flex",
                        "&:hover": { textDecoration: "underline" },
                        "& svg": { width: "9px" },
                      }}
                    >
                      {t("Learn how to connect")}
                    </Link>
                  </Text>
                  {connectError && (
                    <Text
                      sx={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "error",
                        fontStyle: "italic",
                        lineHeight: "14px",
                      }}
                    >
                      {t("Error: Wallet incompatible with selected chain.")}
                    </Text>
                  )}
                </Flex>
              </Flex>
              <Flex
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: ["240px", "240px", "580px"],
                  mt: ["15px", "15px", "30px"],
                }}
              >
                {showWallets.map((entry) => (
                  <WalletCard key={entry.title} login={login} walletConfig={entry} t={t} />
                ))}
                <Button
                  variant="tertiary"
                  sx={{
                    width: ["112px", "112px", "128px"],
                    flexDirection: "column",
                    minHeight: ["84px", "84px", "114px"],
                    justifyContent: "center",
                    mb: "15px",
                    background: "white4",
                    fontSize: ["12px", "12px", "16px"],
                    padding: "0px 24px",
                  }}
                  onClick={() => setOpen(true)}
                >
                  <Svg icon="more" />
                  {t("MORE")}
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Flex
              sx={{
                flexWrap: "wrap",
                position: "absolute",
                width: "100%",
                maxWidth: ["240px", "240px", "580px"],
                flexDirection: "column",
                justifyContent: "space-between",
                height: ["325px", "325px", "390px"],
                overflow: "hidden",
              }}
            >
              <Flex sx={{ width: "100%", flexWrap: "wrap", justifyContent: ["flex-start", "flex-start", "center"] }}>
                <Flex sx={{ width: "100%", justifyContent: ["flex-start", "flex-start", "center"] }}>
                  <Text
                    sx={{
                      fontSize: ["16px", "16px", "25px"],
                      fontWeight: 700,
                      lineHeight: ["24px", "24px", "37.5px"],
                    }}
                  >
                    {t("Connect Wallet")}
                  </Text>
                </Flex>
                {connectError && (
                  <Text
                    sx={{ fontSize: "12px", fontWeight: 500, color: "error", fontStyle: "italic", lineHeight: "14px" }}
                  >
                    {t("Error: Wallet incompatible with selected chain.")}
                  </Text>
                )}
              </Flex>
              <Flex
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: ["space-between", "space-between", "flex-start"],
                  mt: "15px",
                  mb: "-15px",
                  maxHeight: ["273px", "273px", "335px"],
                  overflowY: "auto",
                  width: ["240px", "240px", "580px"],
                }}
              >
                {config.map((entry) => (
                  <WalletCard key={entry.title} login={login} walletConfig={entry} t={t} />
                ))}
              </Flex>
            </Flex>
          )}
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default ConnectModal;

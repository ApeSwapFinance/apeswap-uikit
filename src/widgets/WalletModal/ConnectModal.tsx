/** @jsxImportSource theme-ui */
import React from "react";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { Flex } from "../../components/Flex";

interface Props {
  login: Login;
  t: (key: string) => string;
}

const ConnectModal: React.FC<Props> = ({ login, t }) => (
  <Modal title={t("Connect to a wallet")} maxWidth="400px" minWidth="350px">
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        mb={index < config.length - 1 ? "8px" : "0"}
        t={t}
      />
    ))}
    <Flex sx={{ alignItems: "center", justifyContent: "center" }} mt="10px">
      <Link
        href="https://apeswap.gitbook.io/apeswap-finance/product-and-features/wallets/how-to-connect-your-wallet"
        external
        color="text"
        sx={{
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          marginTop: "24px",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <HelpIcon mr="6px" />
        {t("Learn how to connect")}
      </Link>
    </Flex>
  </Modal>
);

export default ConnectModal;

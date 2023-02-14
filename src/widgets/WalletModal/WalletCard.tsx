/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";
import { Context as ModalContext } from "../Modal/ModalContext";

interface Props {
  walletConfig: Config;
  login: Login;
  t: (key: string) => string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, t }) => {
  const { handleClose } = useContext(ModalContext);
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, walletConfig.connectorId);
        handleClose();
      }}
      sx={{
        width: ["112px", "112px", "128px"],
        flexDirection: "column",
        minHeight: ["84px", "84px", "114px"],
        justifyContent: "center",
        mb: "15px",
        mr: ["0px", "0px", "15px"],
        background: "white4",
        fontSize: "16px",
        padding: "0px 12px",
      }}
      id={`wallet-connect-${t(title)?.toLocaleLowerCase()}`}
    >
      <Icon width="32px" />
      <Text sx={{ lineHeight: 1.5, mt: "5px" }} size="12px" weight={600} color="text">
        {t(title)}
      </Text>
    </Button>
  );
};

export default WalletCard;

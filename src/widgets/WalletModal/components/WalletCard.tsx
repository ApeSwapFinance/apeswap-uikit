/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import { localStorageKey } from "../config";
import { Login, Config } from "../types";
import { Context as ModalContext } from "../../Modal/ModalContext";
import { Flex } from "../../../components/Flex";
import styles from "./styles";

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
      sx={styles.button}
      id={`wallet-connect-${t(title)?.toLocaleLowerCase()}`}
    >
      <Flex sx={styles.iconContainer}>
        <Icon width="100%" />
      </Flex>
      <Flex sx={{ height: ["39px", "39px", "49px"], alignItems: "center" }}>
        <Text sx={styles.walletName}>{t(title)}</Text>
      </Flex>
    </Button>
  );
};

export default WalletCard;

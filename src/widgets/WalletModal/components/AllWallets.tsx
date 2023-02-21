/** @jsxImportSource theme-ui */
import React from "react";
import { Flex } from "../../../components/Flex";
import { Text } from "../../../components/Text";
import config from "../config";
import WalletCard from "./WalletCard";
import { Login } from "../types";
import styles from "./styles";

interface Props {
  login: Login;
  t: (key: string) => string;
}

const AllWallets = ({ login, t }: Props) => {
  return (
    <Flex sx={styles.allWalletsContainer}>
      <Flex sx={styles.textContainer}>
        <Flex sx={styles.connectWalletTitle}>
          <Text sx={styles.title}>{t("Connect Wallet")}</Text>
        </Flex>
      </Flex>
      <Flex sx={styles.cardsContainer}>
        {config.map((entry) => (
          <WalletCard key={entry.title} login={login} walletConfig={entry} t={t} />
        ))}
      </Flex>
    </Flex>
  );
};

export default AllWallets;

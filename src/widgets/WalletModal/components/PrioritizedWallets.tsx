/** @jsxImportSource theme-ui */
import React from "react";
import { Flex } from "../../../components/Flex";
import WalletImage from "../../../components/Svg/WalletsIcons/walletImage";
import { Text } from "../../../components/Text";
import { Link } from "../../../components/Link";
import WalletCard from "./WalletCard";
import { Button } from "../../../components/Button";
import config from "../config";
import { Login } from "../types";
import styles from "./styles";

interface Props {
  login: Login;
  t: (key: string) => string;
  setOpen: (open: boolean) => void;
}

const PrioritizedWallets = ({ login, t, setOpen }: Props) => {
  const showWallets = config.slice(0, 3);

  return (
    <Flex sx={styles.prioritizedContainer}>
      <Flex sx={{ flexWrap: "wrap", width: "100%" }}>
        <Flex sx={{ display: ["none", "none", "flex"] }}>
          <WalletImage />
        </Flex>
        <Flex sx={styles.infoContainer}>
          <Flex sx={{ width: "100%" }}>
            <Text sx={styles.title}>{t("Connect Wallet")}</Text>
          </Flex>
          <Text sx={styles.firstStep}>
            {t(
              "Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone."
            )}
          </Text>
          <Text sx={{ fontSize: "12px", fontWeight: 300 }}>
            <Link
              href="https://apeswap.gitbook.io/apeswap-finance/product-and-features/wallets/how-to-connect-your-wallet"
              external
              color="text"
              sx={styles.learnHow}
            >
              {t("Learn how to connect")}
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Flex sx={styles.buttonsContainer}>
        {showWallets.map((entry) => (
          <WalletCard key={entry.title} login={login} walletConfig={entry} t={t} />
        ))}
        <Button
          sx={{
            ...styles.button,
            background: "white4",
            "&:hover": { background: "white3" },
            border: "none",
            "&:hover:not([disabled])": { background: "white3" },
          }}
          onClick={() => setOpen(true)}
        >
          <Flex sx={{ height: ["45px", "45px", "65px"], alignItems: "flex-end" }}>
            <Flex sx={styles.moreWallets}>
              <Flex sx={{ lineHeight: ["24px", "24px", "40px"], fontWeight: [700, 700, 900] }}>. . .</Flex>
            </Flex>
          </Flex>
          <Flex sx={{ height: ["39px", "39px", "49px"], alignItems: "center" }}>
            <Text sx={styles.walletName}>{t("MORE")}</Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};

export default PrioritizedWallets;

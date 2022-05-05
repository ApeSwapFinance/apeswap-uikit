import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";

interface Props {
  account?: string;
  logout: () => void;
  onDismiss?: () => void;
  t: (key: string) => string;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null, t }) => (
  <Modal title={t("Your wallet")} onDismiss={onDismiss} minWidth="350px">
    <Text
      fontSize="20px"
      fontWeight={600}
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      <LinkExternal href={`https://bscscan.com/address/${account}`} mr="16px">
        {t("View on BscScan")}
      </LinkExternal>
      <CopyToClipboard toCopy={account}>{t("Copy Address")}</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        size="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(localStorageKey);
          onDismiss();
          window.location.reload();
        }}
      >
        {t("Logout")}
      </Button>
    </Flex>
  </Modal>
);

AccountModal.defaultProps = {
  account: undefined,
  onDismiss: () => null,
};

export default AccountModal;

/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { Link } from "../../components/Link";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";
import { Context as ModalContext } from "../Modal/ModalContext";
import { useMatchBreakpoints } from "../../hooks";

interface Props {
  account?: string;
  logout: () => void;
  t: (key: string) => string;
  uDName?: string;
  sidName?: string;
}

const AccountModal: React.FC<Props> = ({ sidName, uDName = undefined, account, logout, t }) => {
  const { handleClose } = useContext(ModalContext);
  const { isXs, isSm, isMd } = useMatchBreakpoints();
  const reducedAddress = account ? `${account.substring(0, 15)}...${account.substring(account.length - 4)}` : null;

  return (
    <Modal title={t("Your wallet")} minWidth="350px">
      <Text
        size="20px"
        weight={600}
        sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
        mb="8px"
      >
        {isXs || isSm || isMd ? uDName || sidName || reducedAddress : uDName || sidName || account}
      </Text>
      <Flex sx={{ alignItems: "center" }} mt="8px" mb="32px">
        <Link
          external
          sx={{ "&:hover": { textDecoration: "underline" } }}
          href={`https://bscscan.com/address/${account}`}
          mr="16px"
        >
          {t("View on BscScan")}
        </Link>
        <CopyToClipboard toCopy={account}>{t("Copy Address")}</CopyToClipboard>
      </Flex>
      <Flex sx={{ justifyContent: "center" }}>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            logout();
            window.localStorage.removeItem(localStorageKey);
            handleClose();
            window.location.reload();
          }}
        >
          {t("Logout")}
        </Button>
      </Flex>
    </Modal>
  );
};

AccountModal.defaultProps = {
  account: undefined,
  uDName: undefined,
  sidName: undefined,
};

export default AccountModal;

import React from "react";
import { useMatchBreakpoints } from "../../hooks";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import { Profile } from "./types";
import styles from "./styles";

interface Props {
  account?: string | undefined;
  profile?: Profile;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, profile }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const { isXs } = useMatchBreakpoints();

  const loadButton = () => {
    if (account) {
      if (isXs) {
        return (
          <Button
            size="sm"
            fontSize="14px"
            variant="tertiary"
            sx={styles.userBlockBtn}
            onClick={() => {
              onPresentAccountModal();
            }}
            account={account}
          >
            {accountEllipsis}
          </Button>
        );
      }
      return (
        <Button
          size="sm"
          variant="tertiary"
          fontSize="14px"
          sx={styles.userBlockBtn}
          onClick={() => {
            onPresentAccountModal();
          }}
          account={account}
        >
          {accountEllipsis}
        </Button>
      );
    }
    return (
      <Button
        size="sm"
        variant="primary"
        fontSize="16px"
        onClick={() => {
          onPresentConnectModal();
        }}
        account={account}
      >
        Connect
      </Button>
    );
  };

  return <div>{loadButton()}</div>;
};

UserBlock.defaultProps = {
  account: "",
  profile: undefined,
};

export default UserBlock;

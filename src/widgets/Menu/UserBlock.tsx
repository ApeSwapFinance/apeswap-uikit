import React from "react";
import { useMatchBreakpoints } from "../../hooks";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
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
            color="text"
            fontFamily="poppins"
            variant="secondary"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </Button>
        );
      }
      return (
        <Button
          size="sm"
          variant="secondary"
          color="text"
          fontFamily="poppins"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      );
    }
    return (
      <Button
        size="sm"
        fontFamily="poppins"
        onClick={() => {
          onPresentConnectModal();
        }}
      >
        Connect
      </Button>
    );
  };

  return <div>{loadButton()}</div>;
};

UserBlock.defaultProps = {
  account: "",
};

export default UserBlock;

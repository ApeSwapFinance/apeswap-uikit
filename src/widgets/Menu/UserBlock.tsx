import React from "react";
import { useMatchBreakpoints } from "../../hooks";
import ButtonSquare from "../../components/ButtonSquare/ButtonSquare";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  t: (key: string) => string;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, t }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, t, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const { isXs, isMd, isXl } = useMatchBreakpoints();

  const loadButton = () => {
    if (account) {
      if (isXs) {
        return (
          <ButtonSquare
            size="sm"
            fontSize="14px"
            variant="tertiary"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </ButtonSquare>
        );
      }
      return (
        <ButtonSquare
          size="sm"
          fontSize="16px"
          onClick={() => {
            onPresentAccountModal();
          }}
          variant="tertiary"
        >
          {accountEllipsis}
        </ButtonSquare>
      );
    }
    return (
      <ButtonSquare
        size="sm"
        fontSize={isMd || isXl ? "16px" : "14px"}
        onClick={() => {
          onPresentConnectModal();
        }}
      >
        Connect
      </ButtonSquare>
    );
  };

  return <div>{loadButton()}</div>;
};

UserBlock.defaultProps = {
  account: "",
};

export default UserBlock;

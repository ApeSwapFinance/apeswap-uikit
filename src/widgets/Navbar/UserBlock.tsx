/** @jsxImportSource theme-ui */
import React from "react";
import { useMatchBreakpoints } from "../../hooks";
import Button from "../../components/Button/Button";
import { useWalletModal, Login } from "../WalletModal";
import { dynamicStyles } from "./styles";
import { Text } from "../../components/Text";

interface Props {
  account?: string | undefined;
  login: Login;
  logout: () => void;
  t: (key: string) => string;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, t }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, t, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const { isXs } = useMatchBreakpoints();

  const buttonStyle = dynamicStyles.userBlockBtn({ account });

  const loadButton = () => {
    if (account) {
      if (isXs) {
        return (
          <Button
            size="sm"
            fontSize="14px"
            variant="tertiary"
            sx={buttonStyle}
            onClick={() => {
              onPresentAccountModal();
            }}
            account={account}
          >
            <Text weight="normal">{accountEllipsis}</Text>
          </Button>
        );
      }
      return (
        <Button
          size="sm"
          variant="tertiary"
          fontSize="14px"
          sx={buttonStyle}
          onClick={() => {
            onPresentAccountModal();
          }}
          account={account}
        >
          <Text weight="normal">{accountEllipsis}</Text>
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
        {t("Connect")}
      </Button>
    );
  };

  return <div>{loadButton()}</div>;
};

UserBlock.defaultProps = {
  account: "",
};

export default UserBlock;

import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  t: (key: string) => string;
}

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.white3};
  border-radius: 10px;
  line-height: 10px;
  padding: 0px 45px 0px 15px;
  :focus {
    box-shadow: none !important;
  }
`;

const UserBlock: React.FC<Props> = ({ account, login, logout, t }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, t, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const { isXs } = useMatchBreakpoints();

  const loadButton = () => {
    if (account) {
      if (isXs) {
        return (
          <StyledButton
            size="sm"
            fontSize="14px"
            color="text"
            fontFamily="poppins"
            variant="tertiary"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </StyledButton>
        );
      }
      return (
        <StyledButton
          size="sm"
          variant="tertiary"
          fontSize="14px"
          color="text"
          fontFamily="poppins"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledButton>
      );
    }
    return (
      <StyledButton
        size="md"
        fontFamily="poppins"
        variant="tertiary"
        color="text"
        fontSize="16px"
        onClick={() => {
          onPresentConnectModal();
        }}
      >
        {t("Connect")}
      </StyledButton>
    );
  };

  return <div>{loadButton()}</div>;
};

UserBlock.defaultProps = {
  account: "",
};

export default UserBlock;

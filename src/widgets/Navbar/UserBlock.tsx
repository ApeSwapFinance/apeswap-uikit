import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import { Profile } from "./types";
import styles from "./styles";

interface Props {
  account?: string;
  profile?: Profile;
  login: Login;
  logout: () => void;
}

const StyledButton = styled(Button)<{ account?: string }>`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 35px; */
  /* margin-left: 10px; */
  /* background-color: ${({ account, theme }) => (account ? theme.colors.white3 : theme.colors.yellow)}; */
  /* color: ${({ account, theme }) => (account ? theme.colors.text : theme.colors.primaryBright)}; */
  /* border-radius: 10px; */
  /* line-height: 10px; */
  /* padding: ${({ account }) => `0px ${account ? "45px" : "15px"} 0px 15px`}; */
  :focus {
    box-shadow: none !important;
  }
`;

// const userBlockButton = {
//   height: "35px",
//   marginLeft: "10px",
//   backgroundColor: (account: string | undefined) => (account ? "white3" : "yellow"),
//   color: (account: string | undefined) => (account ? "text" : "primaryBright"),
//   lineHeight: "10px",
//   padding: (account: string | undefined) => `0px ${account ? "45px" : "15px"} 0px 15px`,
//   border: "none",
// }


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
            color="text"
            sx={{
              height: "35px",
              marginLeft: "10px",
              backgroundColor: account ? "white3" : "yellow",
              color: account ? "text" : "primaryBright",
              lineHeight: "10px",
              padding: `0px ${account ? "45px" : "15px"} 0px 15px`,
              border: "none",
              background: "white4",
              "&:hover": {
                background: "white4",
              },
            }}
            variant="tertiary"
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
          color="text"
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
        color="text"
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

import React from "react";
// import styled from "styled-components";
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

// const StyledButton = styled(Button)<{ account?: string }>`
//   /* display: flex; */
//   /* justify-content: center; */
//   /* align-items: center; */
//   height: 35px;
//   margin-left: 10px;
//   color: ${({ account }) => (account ? "text" : "primaryBright")};
//   border-radius: 10px;
//   line-height: 10px;
//   background-color: ${({ account }) => (account ? "white3" : "yellow")};
//   padding: ${({ account }) => `0px ${account ? "45px" : "15px"} 0px 15px`};
//   :focus {
//     box-shadow: none !important;
//   }
// `;


// const userBlockButton = {
//   height: "35px",
//   marginLeft: "10px",
//   background: account ? "white3" : "yellow",
//   color: account ? "text" : "primaryBright",
//   lineHeight: "10px",
//   padding: `0px ${account ? "45px" : "15px"} 0px 15px`,
//   border: "none",
//   "&:hover": {
//     background: "white3",
//   },
// };

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

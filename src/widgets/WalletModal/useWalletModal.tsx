import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  t: (key: string) => string,
  account?: string,
  uDName?: string,
  sidName?: string
): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} t={t} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal sidName={sidName} uDName={uDName} account={account} logout={logout} t={t} />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;

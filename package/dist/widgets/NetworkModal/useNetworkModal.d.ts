import { SwitchNetwork } from "./types";
interface ReturnType {
    onPresentNetworkModal: () => void;
}
declare const useNetworkModal: (switchNetwork: SwitchNetwork, chainId: number) => ReturnType;
export default useNetworkModal;

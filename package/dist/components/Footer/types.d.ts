export interface FooterProps {
    chainId: number;
    toggleTheme: (isDark: boolean) => void;
    switchNetwork: (chainId: number) => void;
    isDark: boolean;
    bananaPriceUsd: number | undefined;
}

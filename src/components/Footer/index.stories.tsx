import React from "react";
import { noop } from "lodash";
import Footer from "./Footer";
import { LangType } from "../../widgets/Navbar";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

const translate: (key: string) => string = (key) => key;
const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

export const Default: React.FC = () => {
  return (
    <div>
      <Footer
        chainId={56}
        toggleTheme={null}
        isDark
        bananaPriceUsd={0.48}
        switchNetwork={null}
        t={translate}
        currentLang="English1"
        langs={langs}
        setLang={noop}
        runFiat={noop}
      />
    </div>
  );
};

import React from "react";
import { noop } from "lodash";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

const translate: (key: string) => string = (key) => key;

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
        currentLang={null}
        langs={null}
        setLang={noop}
      />
    </div>
  );
};

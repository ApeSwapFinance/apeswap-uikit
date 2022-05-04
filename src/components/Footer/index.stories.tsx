import { noop } from "lodash";
import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <Footer
        chainId={56}
        toggleTheme={null}
        isDark
        bananaPriceUsd={0.48}
        switchNetwork={null}
        t={noop}
        currentLang={null}
        langs={null}
        setLang={noop}
      />
    </div>
  );
};

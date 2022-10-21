import React, { useState } from "react";
import { noop } from "lodash";
import Footer from "./Footer";
import { Language } from "../LangSelector/types";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

const translate: (key: string) => string = (key) => key;
const langs: Language[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}`, locale: `e${i}` }));

export const Default: React.FC = () => {
  const [currentLang, setCurrentLang] = useState("English1");

  return (
    <div>
      <Footer
        chainId={56}
        toggleTheme={noop}
        isDark
        bananaPriceUsd={0.48}
        switchNetwork={noop}
        t={translate}
        currentLang={currentLang}
        langs={langs}
        setLang={(lang) => setCurrentLang(lang.language)}
        runFiat={noop}
      />
    </div>
  );
};

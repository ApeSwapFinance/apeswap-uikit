/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import { Modal, ModalContext } from "../Modal";
import { Flex } from "../../components/Flex";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Language } from "../../components/LangSelector/types";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const langButton = {
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  height: "48px",
  letterSpacing: "0.03em",
  padding: "0px 10px",
  marginBottom: "10px",
  opacity: 1,
};

const SelectLanguageModal: React.FC<Props> = ({ currentLang, langs, setLang, t }) => {
  const { handleClose } = useContext(ModalContext);
  return (
    <Modal maxWidth="350px" minWidth="350px" title={t("Language")}>
      <Flex sx={{ height: "auto", flexDirection: "column" }}>
        {langs.map((lang) => (
          <Button
            sx={langButton}
            fullWidth
            variant={currentLang === lang.language ? "tertiary" : "secondary"}
            onClick={() => {
              setLang(lang);
              handleClose();
            }}
          >
            <Text weight="normal" color="text" mr="16px" textAlign="start">
              {lang.language}
            </Text>
          </Button>
        ))}
      </Flex>
    </Modal>
  );
};

export default SelectLanguageModal;

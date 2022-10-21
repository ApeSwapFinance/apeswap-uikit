/** @jsxImportSource theme-ui */
import React from "react";

import { Box } from "theme-ui";
import { CloseIcon } from "../../components/Svg";
import { Flex } from "../../components/Flex";
import Newsletter from "./Newsletter";
import { Modal } from "../Modal";
import { styles, modalProps } from "./styles";
import { NewsModalProps } from "./types";

const NewsModal: React.FC<NewsModalProps> = ({ onDismiss, mailChimpUrl, isNewsModal, t }) => {
  return (
    <Modal zIndex={10} onDismiss={onDismiss} {...modalProps}>
      <Flex className="newsletter-modal-con">
        <CloseIcon width={22} onClick={onDismiss} sx={{ cursor: "pointer", position: "absolute", right: "20px" }} />
        <Flex sx={styles.modalBody}>
          <Box sx={styles.showApe} />
          <Newsletter mailChimpUrl={mailChimpUrl} t={t} isNewsModal={isNewsModal} />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default NewsModal;

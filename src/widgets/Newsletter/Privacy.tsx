/** @jsxImportSource theme-ui */
import React from "react";
import { Flex } from "../../components/Flex";
import { Text } from "../../components/Text";
import { TooltipBubble } from "../../components/TooltipBubble";
import { HelpIcon } from "../../components/Svg";
import { useMatchBreakpoints } from "../../hooks";

import { PrivacyProps } from "./types";
import styles, { dynamicStyles } from "./styles";

const Privacy: React.FC<PrivacyProps> = ({ isModal, t }) => {
  const { isMd, isLg, isXl, isXxl } = useMatchBreakpoints();
  const isMobile = !isLg && !isXl && !isXxl;

  return (
    <Flex sx={dynamicStyles.privacy({ isModal })}>
      <a href="https://apeswap.finance/privacy" target="_blank" rel="noopener noreferrer">
        <Text sx={styles.privacyLink}>{t("We respect your privacy")}</Text>
      </a>
      <TooltipBubble
        placement={(isMobile && !isMd && "topRight") || "topLeft"}
        body={
          <Text>
            ApeSwap will only use your email address for the sole purpose of marketing newsletters. Your personal
            information will not be shared with any third party.
          </Text>
        }
        transformTip={(isMobile && !isMd && "translate(12%, 0)") || "translate(-6%, 0%)"}
        width={(isMobile && !isMd && "200px") || "260px"}
      >
        <HelpIcon width={isMobile ? "12px" : "14px"} />
      </TooltipBubble>
    </Flex>
  );
};

export default Privacy;

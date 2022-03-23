/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex } from "theme-ui";
import { motion } from "framer-motion";
import styles from "./styles";
import { IconButton } from "../ButtonNew";
import { Text } from "../Text";
import { AlertProps, variants } from "./types";
import { LinkExternal } from "../Link";
import { Svg } from "../Svg";

const Alert: React.FC<AlertProps> = ({ variant = variants.ERROR, text, linkText, url, size, onClose }) => {
  return (
    <motion.div
      initial={{ right: "-250px" }}
      animate={{ right: "10px" }}
      transition={{ duration: 0.5 }}
      exit={{ right: "-250px" }}
      sx={styles.alert}
    >
      <Flex>
        <Svg
          icon={variant === "danger" ? "close" : variant}
          color={variant === "error" || variant === "danger" ? "error" : `${variant}`}
          width="30px"
        />
      </Flex>

      <Flex sx={{ ...styles.content }}>
        <Text as="p" variant={size || "sm"} sx={{ fontSize: size ? undefined : 0 }}>
          {text}
        </Text>

        {linkText && url && (
          <LinkExternal href={url} sx={{ ...styles.link }} color="text">
            {linkText}
          </LinkExternal>
        )}
      </Flex>

      <Box>
        <IconButton icon="close" variant="transparent" color="text" onClick={onClose} />
      </Box>
    </motion.div>
  );
};

export default Alert;

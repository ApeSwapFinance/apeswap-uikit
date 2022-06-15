/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Flex } from "../Flex";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../Svg";
import { Text } from "../Text";
import styles, { Dropdown } from "./styles";

const MobileLinkMenu: React.FC<{ title: string; items: { label: string; href: string }[]; border?: boolean }> = ({
  title,
  border,
  items,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dropdown border={border} onClick={() => setOpen((prev) => !prev)}>
        <Text sx={styles.linkText} size="16px" weight={400} color="yellow">
          {title}
        </Text>
        {open ? <ArrowDropUpIcon width="8px" color="white" /> : <ArrowDropDownIcon width="8px" color="white" />}
      </Dropdown>
      {open && (
        <Flex sx={{ flexDirection: "column", padding: "0px 10px", marginBottom: "10px" }}>
          {items.map((link) => {
            return (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                <Text sx={styles.linkText} size="16px" weight={400} color="primaryBright">
                  {link.label}
                </Text>
              </a>
            );
          })}
        </Flex>
      )}
    </>
  );
};

MobileLinkMenu.defaultProps = {
  border: false,
};

export default MobileLinkMenu;

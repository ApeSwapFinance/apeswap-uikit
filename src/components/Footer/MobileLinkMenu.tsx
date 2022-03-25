import React, { useState } from "react";
import { Flex } from "../Flex";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../Svg";
import { Text } from "../Text";
import { Dropdown, LinkText } from "./styles";

const MobileLinkMenu: React.FC<{ title: string; items: { label: string; href: string }[]; border?: boolean }> = ({
  title,
  border,
  items,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dropdown border={border} onClick={() => setOpen((prev) => !prev)}>
        <Text style={{ color: "rgba(255, 179, 0, 1)" }}>{title}</Text>
        {open ? <ArrowDropUpIcon width="8px" color="white" /> : <ArrowDropDownIcon width="8px" color="white" />}
      </Dropdown>
      {open && (
        <Flex flexDirection="column" padding="0px 10px" mb="10px">
          {items.map((link) => {
            return (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <LinkText>{link.label}</LinkText>
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

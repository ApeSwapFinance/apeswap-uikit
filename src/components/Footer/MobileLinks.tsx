/** @jsxImportSource theme-ui */
import React from "react";
import { Flex } from "../Flex";
import { engageLinks, learnLinks, supportLinks } from "./config";
import MobileLinkMenu from "./MobileLinkMenu";

const MobileLinks: React.FC = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        margin: "20px 0px",
        width: "100%",
      }}
      mb="100px"
    >
      <MobileLinkMenu title="Support" items={supportLinks} border />
      <MobileLinkMenu title="Engage" items={engageLinks} border />
      <MobileLinkMenu title="Learn" items={learnLinks} />
    </Flex>
  );
};

export default MobileLinks;

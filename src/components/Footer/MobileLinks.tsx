import React from "react";
import { Flex } from "../Flex";
import { engageLinks, learnLinks, supportLinks } from "./config";
import MobileLinkMenu from "./MobileLinkMenu";

const MobileLinks: React.FC = () => {
  return (
    <Flex flexDirection="column" margin="20px 0px" mb="100px" style={{ width: "100%" }}>
      <MobileLinkMenu title="Support" items={supportLinks} border />
      <MobileLinkMenu title="Engage" items={engageLinks} border />
      <MobileLinkMenu title="Learn" items={learnLinks} />
    </Flex>
  );
};

export default MobileLinks;

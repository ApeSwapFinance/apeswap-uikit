import React from "react";
import Flex from "./Flex";
import Text from "../Text/Text";
import { Link } from "../Link";

export default {
  title: "Components/Flex",
  component: Flex,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <Text>You can apply any flexbox properties on the Flex component.</Text>
      <Link href="https://styled-system.com/api#flexbox" target="_blank">
        List of applicable props
      </Link>
      <Flex sx={{ justifyContent: "space-between", backgroundColor: "green", marginTop: "40px" }}>
        <span>Left</span>
        <span>right</span>
      </Flex>
      <Flex sx={{ justifyContent: "center", backgroundColor: "red", marginTop: "8px" }}>
        <span>center</span>
      </Flex>
      <Flex sx={{ justifyContent: "space-between", backgroundColor: "yellow", marginTop: "40px" }}>
        <span>Left</span>
        <span>center</span>
        <span>right</span>
      </Flex>
    </div>
  );
};

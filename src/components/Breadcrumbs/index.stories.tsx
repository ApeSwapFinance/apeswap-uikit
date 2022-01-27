import React from "react";
import Text from "../Text/Text";
import Link from "../Link/Link";
import LogoIcon from "../Svg/Icons/Logo";
import WonIcon from "../Svg/Icons/Won";
import BreadCrumbs from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: BreadCrumbs,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <Text p="32px">
      <BreadCrumbs mb="32px">
        <Link href="/" color="secondary" bold>
          Link
        </Link>
        <Text color="textDisabled" bold>
          Crumb 1
        </Text>
        <Text color="textDisabled" bold>
          Crumb 2
        </Text>
      </BreadCrumbs>
      <BreadCrumbs>
        <Text bold>ApeSwap</Text>
        <Text bold>The #1 AMM and yield farm on Binance Smart Chain.</Text>
      </BreadCrumbs>
    </Text>
  );
};

export const CustomSeparator: React.FC = () => {
  return (
    <Text p="32px">
      <Text mb="16px">
        <BreadCrumbs separator={<LogoIcon width="24px" />}>
          <Link href="/" color="secondary" bold>
            Link
          </Link>
          <Text color="textDisabled" bold>
            Crumb 1
          </Text>
          <Text color="textDisabled" bold>
            Crumb 2
          </Text>
        </BreadCrumbs>
      </Text>
      <Text mb="16px">
        <BreadCrumbs separator={<WonIcon width="48px" />}>
          <Link href="/" color="failure" bold>
            Link
          </Link>
          <Link href="/" color="primary" bold>
            Link 2
          </Link>
          <Text color="textDisabled" bold>
            Crumb 2
          </Text>
        </BreadCrumbs>
      </Text>
    </Text>
  );
};

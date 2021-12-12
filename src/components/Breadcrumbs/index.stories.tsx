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
        <Link href="/" color="secondary" style={{ fontWeight: 400 }} fontFamily="Titan One">
          Link
        </Link>
        <Text color="textDisabled" fontFamily="Titan One">
          Crumb 1
        </Text>
        <Text color="textDisabled" fontFamily="Titan One">
          Crumb 2
        </Text>
      </BreadCrumbs>
      <BreadCrumbs>
        <Text fontFamily="Titan One">ApeSwap</Text>
        <Text fontFamily="Titan One">The #1 AMM and yield farm on Binance Smart Chain.</Text>
      </BreadCrumbs>
    </Text>
  );
};

export const CustomSeparator: React.FC = () => {
  return (
    <Text p="32px">
      <Text mb="16px">
        <BreadCrumbs separator={<LogoIcon width="24px" />}>
          <Link href="/" color="secondary" style={{ fontWeight: 400 }} fontFamily="Titan One">
            Link
          </Link>
          <Text color="textDisabled" fontFamily="Titan One">
            Crumb 1
          </Text>
          <Text color="textDisabled" fontFamily="Titan One">
            Crumb 2
          </Text>
        </BreadCrumbs>
      </Text>
      <Text mb="16px">
        <BreadCrumbs separator={<WonIcon width="48px" />}>
          <Link href="/" color="failure" style={{ fontWeight: 400 }} fontFamily="Titan One">
            Link
          </Link>
          <Link href="/" color="primary" style={{ fontWeight: 400 }} fontFamily="Titan One">
            Link 2
          </Link>
          <Text color="textDisabled" fontFamily="Titan One">
            Crumb 2
          </Text>
        </BreadCrumbs>
      </Text>
    </Text>
  );
};

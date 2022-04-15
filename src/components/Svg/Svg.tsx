/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, icons } from "./types";
import { dynamicStyles } from "./styles";
import {
  Caret,
  External,
  Home,
  Calculator,
  Farm,
  Frame,
  Gnana,
  Info,
  More,
  NFA,
  Pool,
  Rocket,
  Trade,
  Vault,
  Ellipse,
  Twitter,
  Send,
  Error,
  Close,
  Collapse,
  TextLogo,
  ProfileLight,
  ProfileDark,
  ProfileIcon,
  Logo,
  Hamburger,
  Search,
  Question,
  Success,
  Settings,
  Chart,
  Discord,
  Reddit,
  Medium,
  Instagram,
  Website,
} from "./Icons";
import { BSC, BANANA, BNB, ETH, GNANA, POLYGON } from "./tokens";
import { IconStyles } from "./Icons/types";

const Svg: React.FC<SvgProps> = ({ icon, ...props }: any) => {
  const getStyles = ({ degree, color, margin }: IconStyles) =>
    dynamicStyles.generic({
      degree,
      color,
      margin,
    });

  if (icon === icons.CARET) {
    return <Caret {...props} getStyles={getStyles} />;
  }
  if (icon === icons.WEBSITE) {
    return <Website {...props} getStyles={getStyles} />;
  }
  if (icon === icons.EXTERNAL) {
    return <External {...props} getStyles={getStyles} />;
  }
  if (icon === icons.HOME) {
    return <Home {...props} getStyles={getStyles} />;
  }
  if (icon === icons.CALCULATOR) {
    return <Calculator {...props} getStyles={getStyles} />;
  }
  if (icon === icons.FARM) {
    return <Farm {...props} getStyles={getStyles} />;
  }
  if (icon === icons.FRAME) {
    return <Frame {...props} getStyles={getStyles} />;
  }
  if (icon === icons.GNANA) {
    return <Gnana {...props} getStyles={getStyles} />;
  }
  if (icon === icons.INFO) {
    return <Info {...props} getStyles={getStyles} />;
  }
  if (icon === icons.MORE) {
    return <More {...props} getStyles={getStyles} />;
  }
  if (icon === icons.NFA) {
    return <NFA {...props} getStyles={getStyles} />;
  }
  if (icon === icons.POOL) {
    return <Pool {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ROCKET) {
    return <Rocket {...props} getStyles={getStyles} />;
  }
  if (icon === icons.TRADE) {
    return <Trade {...props} getStyles={getStyles} />;
  }
  if (icon === icons.VAULT) {
    return <Vault {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ELLIPSE) {
    return <Ellipse {...props} getStyles={getStyles} />;
  }
  if (icon === icons.COLLAPSE) {
    return <Collapse {...props} getStyles={getStyles} />;
  }
  if (icon === icons.TEXTLOGO) {
    return <TextLogo {...props} getStyles={getStyles} />;
  }
  if (icon === icons.PROFILELIGHT) {
    return <ProfileLight {...props} getStyles={getStyles} />;
  }
  if (icon === icons.PROFILEDARK) {
    return <ProfileDark {...props} getStyles={getStyles} />;
  }
  if (icon === icons.PROFILEICON) {
    return <ProfileIcon {...props} getStyles={getStyles} />;
  }
  if (icon === icons.LOGO) {
    return <Logo {...props} getStyles={getStyles} />;
  }
  if (icon === icons.HAMBURGER) {
    return <Hamburger {...props} getStyles={getStyles} />;
  }
  if (icon === icons.TWITTER) {
    return <Twitter {...props} getStyles={getStyles} />;
  }
  if (icon === icons.SEND) {
    return <Send {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ERROR) {
    return <Error {...props} getStyles={getStyles} />;
  }
  if (icon === icons.CLOSE) {
    return <Close {...props} getStyles={getStyles} />;
  }
  if (icon === icons.SEARCH) {
    return <Search {...props} getStyles={getStyles} />;
  }
  if (icon === icons.SUCCESS) {
    return <Success {...props} getStyles={getStyles} />;
  }
  if (icon === icons.QUESTION) {
    return <Question {...props} getStyles={getStyles} />;
  }
  if (icon === icons.SETTINGS) {
    return <Settings {...props} getStyles={getStyles} />;
  }
  if (icon === icons.CHART) {
    return <Chart {...props} getStyles={getStyles} />;
  }
  if (icon === icons.BNB_TOKEN) {
    return <BNB {...props} getStyles={getStyles} />;
  }
  if (icon === icons.BANANA_TOKEN) {
    return <BANANA {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ETH_TOKEN) {
    return <ETH {...props} getStyles={getStyles} />;
  }
  if (icon === icons.GNANA_TOKEN) {
    return <GNANA {...props} getStyles={getStyles} />;
  }
  if (icon === icons.POLYGON_TOKEN) {
    return <POLYGON {...props} getStyles={getStyles} />;
  }
  if (icon === icons.BSC_TOKEN) {
    return <BSC {...props} getStyles={getStyles} />;
  }
  if (icon === icons.DISCORD) {
    return <Discord {...props} getStyles={getStyles} />;
  }
  if (icon === icons.REDDIT) {
    return <Reddit {...props} getStyles={getStyles} />;
  }
  if (icon === icons.MEDIUM) {
    return <Medium {...props} getStyles={getStyles} />;
  }
  if (icon === icons.INSTAGRAM) {
    return <Instagram {...props} getStyles={getStyles} />;
  }
  return null;
};

export default Svg;

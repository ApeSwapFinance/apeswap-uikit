/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps } from "./types";
import ProfileLight from "./ProfileLight";
import ProfileDark from "./ProfileDark";

interface Props extends SvgProps {
  colorMode?: string;
}

const ProfileIcon: React.FC<Props> = ({ colorMode, getStyles }) => {
  switch (colorMode) {
    case "dark":
      return <ProfileDark getStyles={getStyles} />;
    default:
      return <ProfileLight getStyles={getStyles} />;
  }
};

ProfileIcon.defaultProps = {
  colorMode: "light",
};

export default ProfileIcon;

import React from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "./types";
import MonkeyLight from "./icons/MonkeyLight";
import MonkeyDark from "./icons/MonkeyDark";

interface AvatarProps {
  profile: Profile;
}

const StyledAvatar = styled.div`
  margin-left: -30px;
  height: 25px;
  img {
    border-radius: 50px;
  }
`;

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`;

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { name = "Ape", image, profileLink, noProfileLink, showPip = false } = profile;
  const { isDark } = useTheme();
  const link = profile.name ? profileLink : noProfileLink;
  const isExternal = link.startsWith("http");
  const ariaLabel = "Link to profile";
  const icon = image ? (
    <img src={image} alt="profile avatar" height="40px" width="40px" />
  ) : !isDark ? (
    <MonkeyLight width="40px" height="40px" />
  ) : (
    <MonkeyDark width="40px" height="40px" />
  );

  if (isExternal) {
    return (
      <StyledAvatar title={name}>
        <a href={link} aria-label={ariaLabel}>
          {icon}
        </a>
        {showPip && <Pip />}
      </StyledAvatar>
    );
  }

  return (
    <StyledAvatar title={name}>
      <Link to={link} aria-label={ariaLabel}>
        {icon}
      </Link>
      {showPip && <Pip />}
    </StyledAvatar>
  );
};

export default Avatar;

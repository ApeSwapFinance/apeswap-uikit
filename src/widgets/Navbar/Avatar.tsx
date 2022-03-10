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
  transform: translate(-35px, 4px);
  width: 0;
  img {
    border-radius: 50px;
  }
`;

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`;

const AvatarImage = styled.div<{ image: string }>`
  height: 45px;
  width: 45px;
  transform: translate(0, -4px);
  background-image: ${({ image }) => `url(${image})`};
  background-size: 100% 100%;
  border-radius: 25px;
`;

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { name = "Ape", image, profileLink, noProfileLink, showPip = false } = profile;
  const { isDark } = useTheme();
  const link = profile.name ? profileLink : noProfileLink;
  const isExternal = link.startsWith("http");
  const ariaLabel = "Link to profile";
  const icon = image ? (
    <AvatarImage image={image} />
  ) : !isDark ? (
    <MonkeyLight width="50px" height="50px" />
  ) : (
    <MonkeyDark width="50px" height="50px" />
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

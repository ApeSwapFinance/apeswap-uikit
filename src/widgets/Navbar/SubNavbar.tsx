import React from "react";
import styled from "styled-components";
import { Text } from "../..";
import { MoreDarkImage } from "./images";
import { MenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { MenuSubEntry } from "./types";
interface SubNavbarProps {
  items: MenuSubEntry[];
}

const StyledCard = styled.div`
  position: absolute;
  width: 429px;
  min-height: 316px;
  background-color: ${({ theme }) => theme.nav.background};
  border-radius: 0px 0px 30px 30px;
  padding: 15px 0px 20px 0px;
  margin-left: 22.5px;
  cursor: default;
`;

const NavHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 200px;
  margin: 0px 0px 0px 30px;
`;

const NavImage = styled.div`
  position: absolute;
  overflow: hidden;
  display: block;
  top: 0px;
  right: 0px;
  width: 188px;
  height: 253px;
  background: rgba(196, 196, 196, 1);
  border-radius: 0px 0px 0px 30px;
`;

const StyledText = styled(Text)`
  margin-top: 6px;
  margin-bottom: 6px;
  font-weight: 700;
  :hover {
    box-shadow: ${({ theme }) => `0px 2px 0px ${theme.colors.text}`};
  }
`;

const SubNavbar: React.FC<SubNavbarProps> = ({ items }) => {
  return (
    <StyledCard key={1}>
      <NavHolder>
        {items.map((item) => {
          return (
            <MenuLink href={item.href}>
              <StyledText>{item.label}</StyledText>
            </MenuLink>
          );
        })}
      </NavHolder>
      <NavImage>
        <MoreDarkImage />
      </NavImage>
    </StyledCard>
  );
};

export default SubNavbar;

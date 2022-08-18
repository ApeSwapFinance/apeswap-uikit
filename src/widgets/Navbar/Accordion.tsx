import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps, LiveResultProps } from "./types";
import { ArrowDropUpSmallIcon, ArrowDropDownSmallIcon } from "../../components/Svg";
import { GlowCircle } from "../../components/GlowCircle";

interface Props extends PushedProps {
  label: string;
  icon?: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  found?: LiveResultProps["apiResult"][0];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px;
`;

const LabelSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  found,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className}>
        {icon}
        <LabelSection>
          <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
          {(label === "Raise" || label === "Explore") &&
            found?.label === label &&
            found?.settings[0]?.tag === "LIVE" && <GlowCircle />}
        </LabelSection>

        {isOpen ? <ArrowDropUpSmallIcon /> : <ArrowDropDownSmallIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

Accordion.defaultProps = {
  initialOpenState: false,
  className: "",
  icon: <></>,
  found: undefined,
};

export default Accordion;

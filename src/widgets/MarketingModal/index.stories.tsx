import React, { useState } from "react";
import styled from "styled-components";
import { MarketingModalProps, MarketingModal } from ".";
import { Connected } from "../Navbar/index.stories";
import { Text } from "../../components/Text";
import ModalContent from "./ModalContent";
import { LendingM1Icon, LendingM2Icon } from "../../components/Svg/index";

export default {
  title: "Widgets/MarketingModal",
  component: MarketingModal,
  argTypes: {
    onDismiss: { action: "onDismiss" },
    startEarning: { action: "startEarning" },
  },
};

const RightContent = styled.div`
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
  }
`;
const StyledText = styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    text-align: left;
  }
`;

const LendingBody1: React.FC = () => {
  return (
    <ModalContent Icon={<LendingM1Icon width={240} height={120} />}>
      <RightContent>
        <StyledText>
          Our network uses an &quot;overcollateral&quot; model. <br />
          Users can borrow any type of asset listed, as long as they supply some of their own assets as collateral
          first.
        </StyledText>
      </RightContent>
    </ModalContent>
  );
};

const LendingBody2: React.FC = () => {
  return (
    <ModalContent Icon={<LendingM2Icon width={240} height={120} />}>
      <RightContent>
        <StyledText>
          Suppliers earn interest paid by borrowers. <br />
          When a supplied asset is enabled as collateral, suppliers can borrow from any of the available markets. <br />
          The borrow amount is limited to 70% of the value of supplied assets.
        </StyledText>
      </RightContent>
    </ModalContent>
  );
};

export const ModalWithBackgroundMenu: React.FC<MarketingModalProps> = ({
  title = "Welcome to ApeSwap's Lending Network",
  description = "How does it work?",
  startEarning,
  startEarningText = "Buy Bills",
}) => {
  const [visible, setVisible] = useState(true);
  const family = [<LendingBody1 />, <LendingBody2 />];

  return (
    <>
      {visible && (
        <MarketingModal
          title={title}
          description={description}
          startEarning={startEarning}
          startEarningText={startEarningText}
          onDismiss={() => setVisible(false)}
        >
          {family}
        </MarketingModal>
      )}
      <Connected />
    </>
  );
};

import React, { useState } from "react";
import { MarketModalProps, MarketModal } from ".";
import { Connected } from "../Menu/index.stories";
import { Text } from "../../components/Text";
import ModalContent from "./ModalContent";
import { LendingM1Icon, LendingM2Icon } from "../../components/Svg/index";

export default {
  title: "Widgets/MarketModal",
  component: MarketModal,
  argTypes: {
    onDismiss: { action: "onDismiss" },
    startEarning: { action: "startEarning" },
  },
};

const LendingBody1: React.FC = () => {
  return (
    <ModalContent Icon={<LendingM1Icon width={240} height={120} />}>
      <div>
        <Text
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Our network uses an &quot;overcollateral&quot; model. <br />
          Users can borrow any type of asset listed, as long as they supply some of their own assets as collateral
          first.
        </Text>
      </div>
    </ModalContent>
  );
};

const LendingBody2: React.FC = () => {
  return (
    <ModalContent Icon={<LendingM2Icon width={240} height={120} />}>
      <div>
        <Text
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Suppliers earn interest paid by borrowers. <br />
          When a supplied asset is enabled as collateral, suppliers can borrow from any of the available markets. <br />
          The borrow amount is limited to 70% of the value of supplied assets.
        </Text>
      </div>
    </ModalContent>
  );
};

export const ModalWithBackgroundMenu: React.FC<MarketModalProps> = ({
  title = "Welcome to ApeSwap's Lending Network",
  description = "How does it work?",
  startEarning,
}) => {
  const [visible, setVisible] = useState(true);
  const family = [<LendingBody1 />, <LendingBody2 />];

  return (
    <>
      {visible && (
        <MarketModal
          title={title}
          description={description}
          startEarning={startEarning}
          onDismiss={() => setVisible(false)}
        >
          {family}
        </MarketModal>
      )}
      <Connected />
    </>
  );
};

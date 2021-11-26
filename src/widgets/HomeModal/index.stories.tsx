import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Flex/Flex";
import { HomeModalProps } from "./types";
import useHomeModal from "./useHomeModal";

export default {
  title: "Widgets/HomeModal",
  argTypes: {},
};

export const Default: React.FC<HomeModalProps> = () => {
  const { onPresentHomeModal } = useHomeModal(
    "Welcome to ApeSwap's Farms",
    "Start earning passive income with your cryptocurrency!",
    () => null,
    () => null,
    () => null,
    () => null
  );
  return (
    <Flex>
      <Button onClick={onPresentHomeModal}>Open Home Modal</Button>
    </Flex>
  );
};

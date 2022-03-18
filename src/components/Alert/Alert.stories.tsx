import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Alert from "./Alert";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => {
  const [open, setOpen] = useState(true);

  return (
    <StorybookLayout {...args}>
      <AnimatePresence>{open && <Alert {...args} onClose={() => setOpen(false)} />}</AnimatePresence>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  variant: "error",
  text: "Swap 0.0001 BNB for 0.0501 BANANA",
  linkText: "View on Explorer",
  url: "https://apeswap.finance",
};

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Text, ThemeUIStyleObject } from "theme-ui";
import Modal from "./Modal";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import ModalHeader from "./ModalHeader";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import ModalFooter from "./ModalFooter";

const styles: Record<string, ThemeUIStyleObject> = {
  base: {
    display: "flex",
    my: 9,
    flexDirection: "column",
  },
  default: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 4,
    span: {
      fontSize: 2,
      fontWeight: "normal",
    },
  },
  styled: {
    display: "flex",
    borderRadius: "normal",
    padding: 9,
    mb: 9,
    justifyContent: "space-between",
    alignItems: "center",
    button: {
      fontWeight: "normal",
    },
    span: { fontSize: 0 },
    background: "lvl1",
  },
};

export default {
  title: "Widgets/Modal",
  component: Modal,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    open: {
      control: false,
    },
  },
};

export const Default = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <StorybookLayout {...args}>
      <Button variant="secondary" onClick={() => setOpen(!open)}>
        Show Modal
      </Button>
      <Modal {...args} open={open} handleClose={() => setOpen(!open)}>
        <ModalHeader onDismiss={() => setOpen(!open)}>
          <Heading as="h3">Stake BANANA</Heading>
        </ModalHeader>
        <div sx={styles.base}>
          <div sx={styles.styled}>
            <Button>MAX</Button>
            <div sx={{ textAlign: "right" }}>
              <Heading as="h3">100.33</Heading>
              <Text>~$607.34455</Text>
            </div>
          </div>
          <div sx={styles.default}>
            <Heading as="h5">BANANA</Heading>
            <Text>Balance: 100.33</Text>
          </div>
        </div>
        <ModalFooter onDismiss={() => setOpen(!open)}>
          <Button>DEPOSIT</Button>
        </ModalFooter>
      </Modal>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
};

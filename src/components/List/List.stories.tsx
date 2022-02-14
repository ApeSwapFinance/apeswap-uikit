/* eslint-disable react/no-array-index-key */
/** @jsxImportSource theme-ui */
import React from "react";
import { Text } from "../Text";
import { List, ListItem } from ".";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/List",
  component: List,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const items = [
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
];

export const Default: React.FC = (args: any) => (
  <StorybookLayout {...args}>
    <List>
      {items.map((item, index) => (
        <ListItem key={`li${index}`}>
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text variant="sm" weight="bold">
              {item.a}
            </Text>
            <Text variant="sm" weight="bold">
              {item.b}
            </Text>
            <Text variant="sm" weight="bold">
              {item.c}
            </Text>
            <Text variant="sm" weight="bold">
              {item.d}
            </Text>
          </div>
        </ListItem>
      ))}
    </List>
  </StorybookLayout>
);

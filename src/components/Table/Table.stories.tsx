/* eslint-disable react/no-array-index-key */
import React from "react";
import { Text } from "../Text";
import { Table, TableHead, TableBody, TableRow, TableCell } from ".";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const heading = ["TEXT", "TEXT", "TEXT", "TEXT"];

const body = [
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
  { a: "TEXT", b: "TEXT", c: "TEXT", d: "TEXT" },
];

export const Default: React.FC = (args: any) => (
  <StorybookLayout {...args}>
    <Table>
      <TableRow textAlign="left">
        {heading.map((h, index) => (
          <TableHead key={`th${index}`} width={index === 0 ? "30%" : undefined}>
            <Text variant="sm" weight="bold">
              {h}
            </Text>
          </TableHead>
        ))}
      </TableRow>
      <TableBody borderRadius={10}>
        {body.map((b, index) => (
          <TableRow key={`th${index}`} textAlign="left">
            <TableCell>
              <Text variant="sm" weight="bold">
                {b.a}
              </Text>
            </TableCell>
            <TableCell>
              <Text variant="sm" weight="bold">
                {b.b}
              </Text>
            </TableCell>
            <TableCell>
              <Text variant="sm" weight="bold">
                {b.c}
              </Text>
            </TableCell>
            <TableCell>
              <Text variant="sm" weight="bold">
                {b.d}
              </Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </StorybookLayout>
);

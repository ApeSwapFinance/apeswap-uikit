/** @jsxImportSource theme-ui */
import React from "react";
import Svg from "./Svg";
import { icons } from "./types";
import { Text } from "../Text";
import { TableBody, TableRow, TableCell } from "../Table";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/SvgIcon",
  component: Svg,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    icon: {
      control: { type: "select" },
    },
    direction: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Svg {...args} />
  </StorybookLayout>
);

Default.args = {
  icon: "eth_token",
  color: "text",
  width: 40,
};

export const AllIcons: React.FC = ({ ...args }: any) => {
  return (
    <StorybookLayout {...args}>
      <TableBody borderRadius={10}>
        {Object.values(icons)
          .sort()
          .map((icon) => {
            return (
              <TableRow key={icon} textAlign="left">
                <TableCell>
                  <Svg color="text" width={icon === "textLogo" ? undefined : "25px"} icon={icon} />
                </TableCell>
                <TableCell>
                  <Text>{icon}</Text>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </StorybookLayout>
  );
};

const context = require.context("./_Icons", true, /.tsx$/);
const components = context.keys().reduce((accum, path) => {
  const file = path.substring(2).replace(".tsx", "");
  return {
    ...accum,
    [file]: context(path),
  };
}, {});

export const LegacyIcons: React.FC = ({ ...args }: any) => {
  return (
    <StorybookLayout {...args}>
      <TableBody borderRadius={10}>
        {Object.keys(components)
          .sort()
          .map((file) => {
            const Icon = components[file].default;
            console.log("=========", Icon);
            return (
              <TableRow key={file} textAlign="left">
                <TableCell>
                  <Icon size="32px" />
                </TableCell>
                <TableCell>
                  <Text>{file}</Text>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </StorybookLayout>
  );
};

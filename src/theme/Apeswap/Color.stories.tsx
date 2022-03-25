/** @jsxImportSource theme-ui */
import React from "react";
import { Text } from "theme-ui";
import colors from "./types";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";

export default {
  title: "Components/Colors",
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default: React.FC = ({ ...args }: any) => {
  return (
    <StorybookLayout {...args}>
      {Object.values(colors).map((color) => {
        return (
          <div sx={{ my: "20px", display: "flex", columnGap: "10px" }}>
            <div sx={{ background: color, width: "100px" }} />
            <Text sx={{ color: colors.brown }}>{color}</Text>
          </div>
        );
      })}
    </StorybookLayout>
  );
};

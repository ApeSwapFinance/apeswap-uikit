import React from "react";
import { ApeSwapIcon } from "../Svg";
import { Link, LinkExternal } from "./index";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = () => {
  return (
    <div>
      <div>
        <Link href="/">Default</Link>
      </div>
      <div>
        <Link href="/" fontFamily="Titan One">
          Titan One
        </Link>
      </div>
      <div>
        <Link href="/" color="text">
          Custom color
        </Link>
      </div>
      <div>
        <Link external href="/">
          External
        </Link>
      </div>
      <div>
        <Link href="/">
          With icon
          <ApeSwapIcon />
        </Link>
      </div>
    </div>
  );
};

export const External = (args) => (
  <StorybookLayout {...args}>
    <Link external href="/">
      Link External
    </Link>
  </StorybookLayout>
);

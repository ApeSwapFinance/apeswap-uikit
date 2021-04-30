import React from "react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    bold: {
      name: "bold",
      table: {
        type: { summary: "bool", detail: "Bold the text" },
        defaultValue: { summary: false },
      },
      control: {
        type: null,
      },
    },
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
    color: {
      name: "color",
      table: {
        type: { summary: "string", detail: "Color from the theme, or CSS color" },
        defaultValue: { summary: "theme.colors.text" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC = () => {
  return (
    <div>
      <Text>Default</Text>
      <Text fontFamily="poppins">fontFamily poppins</Text>
      <Text textAlign="center">textAlign Center</Text>
      <Text fontWeight={700}>fontWeight 700</Text>
      <Text mb="1" mt="1" ml="1" mr="1">
        Margins- mb, mt, ml, mr 1
      </Text>
      <Text bold>Bold text</Text>
      <Text small>Small text</Text>
      <Text fontSize="24px">Custom fontsize</Text>
      <Text color="red">Custom color</Text>
      <Text color="primary">Custom color from theme</Text>
      <Text color="secondary" textTransform="uppercase">
        with text transform
      </Text>
    </div>
  );
};

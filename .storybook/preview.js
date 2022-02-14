import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import ResetCSS from "../src/ResetCSS";
import ModalProvider from "../src/widgets/NetworkModal/ModalContext";
import { addParameters, addDecorator } from '@storybook/react';
import { withThemeProvider } from 'storybook-addon-theme-ui';
import Apeswap from '../src/theme/Apeswap';

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <ResetCSS />
    <StoryFn />
  </ModalProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
];

addParameters({
  themeUi: {
    themes:
    [
      { theme: Apeswap, name: 'Apeswap' },
    ]
  },
})

addDecorator(withThemeProvider)
export const decorators = [globalDecorator, withThemesProvider(themes)];

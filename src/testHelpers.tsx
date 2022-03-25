import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeUIProvider } from "theme-ui";
import { light, Apeswap } from "./theme";

/* eslint-disable import/prefer-default-export */
export const renderWithTheme = (component: ReactNode, theme = light): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <ThemeUIProvider theme={Apeswap}>{component}</ThemeUIProvider>
    </ThemeProvider>
  );
};

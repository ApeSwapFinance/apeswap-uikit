import React, { useEffect } from "react";
import { useColorMode } from "theme-ui";

interface IStorybookLayout {
  colorMode: "light" | "dark";
}

const StorybookLayout: React.FC<IStorybookLayout> = ({ children, colorMode }) => {
  const [_, setColorMode] = useColorMode();

  useEffect(() => setColorMode(colorMode), [colorMode, setColorMode]);

  return <>{children}</>;
};

export default StorybookLayout;

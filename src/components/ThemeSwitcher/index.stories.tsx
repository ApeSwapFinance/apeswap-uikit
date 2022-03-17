import React from "react";
import toggleTheme from "styled-components";

import ThemeSwitcher from "./ThemeSwitcher";

export default {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  argTypes: {},
};

export const Default: React.FC = () => {
  // toggleTheme => comes from parent comp, modifies theme state in frontend
  // setNewDark => internal, modifies button theme state in UIKit

  return (
    <div>
      <ThemeSwitcher isDark={false} toggleTheme={toggleTheme} />
    </div>
  );
};

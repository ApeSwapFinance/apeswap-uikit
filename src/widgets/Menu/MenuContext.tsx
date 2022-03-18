/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react";
import { MenuContextProps } from "./types";

const MenuContext = createContext<MenuContextProps>({
  collapse: true,
  active: "/",
  setCollapse: () => {},
  setActive: () => {},
});

interface MenuContextProviderProps {
  active?: string;
  collapse?: boolean;
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  active = "/",
  collapse = false,
  children,
}) => {
  const [isCollapsed, setCollapse] = useState(collapse);
  const [activeLink, setActive] = useState(active);

  return (
    <MenuContext.Provider
      value={{
        collapse: isCollapsed,
        active: activeLink,
        setCollapse,
        setActive,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

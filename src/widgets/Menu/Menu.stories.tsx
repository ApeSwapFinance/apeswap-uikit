/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource theme-ui */
import React, { useContext, useState } from "react";
import { NavLink, Flex, Box } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import { Text } from "../../components/Text";
import { Menu, MenuBody, MenuItem, MenuFooter } from ".";
import MenuContext from "./MenuContext";
import { icons } from "../../components/Svg/types";
import { Svg } from "../../components/Svg";

export default {
  title: "Widgets/Menu",
  component: Menu,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const sideMenu = [
  {
    label: "Home",
    icon: icons.HOME,
    path: "/",
  },
  {
    label: "Ape Stats",
    icon: icons.CALCULATOR,
    path: "#",
  },
  {
    label: "Trade",
    icon: icons.TRADE,
    subMenu: [
      {
        label: "Buy",
        path: "/",
      },
      {
        label: "Sell",
        path: "#",
      },
    ],
  },
  {
    label: "Vaults",
    icon: icons.VAULT,
    path: "#",
  },
  {
    label: "Farms",
    icon: icons.FARM,
    path: "#",
  },
  {
    label: "Pools",
    icon: icons.POOL,
    path: "#",
  },
  {
    label: "IAO",
    icon: icons.ROCKET,
    path: "#",
  },
  {
    label: "NFA",
    icon: icons.NFA,
    subMenu: [
      {
        label: "More",
        path: "#",
      },
    ],
  },
  {
    label: "GNANA",
    icon: icons.GNANA,
    path: "#",
  },
  {
    label: "Info",
    icon: icons.INFO,
    path: "#",
  },
  {
    label: "More",
    icon: <Svg width={24} icon="more" />,
    subMenu: [
      {
        label: "More",
        path: "#",
      },
    ],
  },
];

const menuItemContainer = {
  alignItems: "center",
  height: "48px",
  pl: "17px",
  pr: "20px",
  flexShrink: 0,
  boxShadow: "none",
  fontSize: "16px",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "white4",
  },
} as any;

const linkStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
};

const MenuComponent = ({ icon, label, path }) => {
  const { active } = useContext(MenuContext);

  return (
    <Flex
      sx={{
        ...menuItemContainer,
        boxShadow: path === active ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
      }}
    >
      <Flex sx={linkStyle}>
        <Flex sx={{ alignItems: "center" }}>
          <Flex sx={{ flexShrink: 0 }}>{typeof icon === "string" ? <Svg width={24} icon={icon as any} /> : icon}</Flex>
          <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
            <NavLink href={path}>
              <Text
                sx={{
                  color: "text",
                  paddingLeft: "10px",
                  fontWeight: "400",
                }}
              >
                {label}
              </Text>
            </NavLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Submenu = ({ icon, label, items }) => {
  const [open, setOpen] = useState(false);
  const { active, collapse } = useContext(MenuContext);

  return (
    <>
      <Flex
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          ...menuItemContainer,
        }}
      >
        <Flex sx={linkStyle}>
          <Flex sx={{ alignItems: "center" }}>
            <Flex sx={{ flexShrink: 0 }}>
              {typeof icon === "string" ? <Svg width={24} icon={icon as any} /> : icon}
            </Flex>
            <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
              <Text
                sx={{
                  color: "text",
                  paddingLeft: "10px",
                  fontWeight: "400",
                }}
              >
                {label}
              </Text>
            </Flex>
          </Flex>
          <Box sx={{ display: collapse ? "none" : null }}>
            <Svg icon="caret" direction={open ? "up" : "down"} />
          </Box>
        </Flex>
      </Flex>
      <AnimatePresence>
        {!collapse && open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "fit-content" }}
            transition={{ height: { duration: 0.3 } }}
            exit={{ height: 0 }}
            sx={{ overflow: "hidden" }}
          >
            {items?.map((link, index) => (
              <Flex
                sx={{
                  ...menuItemContainer,
                  position: "relative",
                  boxShadow: link.path === active ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
                }}
              >
                <Flex key={`${link.label}-${index + 1}`} sx={linkStyle}>
                  <Flex sx={{ alignItems: "center" }}>
                    <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
                      <NavLink href={link.path}>
                        <Text
                          sx={{
                            color: "text",
                            paddingLeft: "10px",
                            fontWeight: "400",
                          }}
                        >
                          {link.label}
                        </Text>
                      </NavLink>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Default = (args: any) => {
  return (
    <StorybookLayout {...args}>
      <MenuContext.Provider
        value={{
          ...args,
          active: "/",
          setCollapse: () => {},
        }}
      >
        <Menu {...args}>
          <MenuBody>
            {sideMenu.map(({ subMenu, ...item }, index) => (
              <MenuItem key={`${item}-${index + 1}`}>
                {!subMenu ? (
                  <MenuComponent label={item.label} icon={item.icon} path={item.path} />
                ) : (
                  <Submenu items={subMenu} label={item.label} icon={item.icon} />
                )}
              </MenuItem>
            ))}
          </MenuBody>

          <MenuFooter>
            <div sx={{ display: "flex", justifyContent: "space-between", ml: "19px", mr: "26px", mb: "70px" }}>
              <div sx={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
                <Svg icon="ellipse" />
                <Text sx={{ color: "text", fontSize: "14px" }} weight="bold">
                  $3.747
                </Text>
              </div>
              <Svg icon="ellipse" />
              <Svg icon="ellipse" />
            </div>
          </MenuFooter>
        </Menu>
      </MenuContext.Provider>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  collapse: true,
};

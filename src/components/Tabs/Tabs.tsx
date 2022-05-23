/** @jsxImportSource theme-ui */
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box } from "theme-ui";
import { Button } from "../Button";
import { TabsProps, variants, tabPadding, sizes, fontSizes } from "./types";
import styles from "./styles";

const isBrowser = typeof window === "object";

const Tabs: React.FC<TabsProps> = ({
  activeTab = 0,
  children,
  variant = variants.CENTERED,
  size = sizes.MEDIUM,
  ...props
}) => {
  const [label, setLabel] = useState<string>();
  const activeRef = useRef<any>(null);
  const [activeStyle, setActiveStyle] = useState({});

  const getActiveStyles = useCallback(() => {
    return {
      width: activeRef?.current?.getBoundingClientRect?.()?.width || "fit-content",
      left: activeRef?.current
        ? activeRef?.current?.getBoundingClientRect?.()?.x - activeRef?.current?.parentNode.getBoundingClientRect?.()?.x
        : 0,
    };
  }, [activeRef]);

  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if ((child as any)?.props?.index === activeTab) {
        setLabel((child as any)?.props?.label);
      }
    });
    if (size) {
      setActiveStyle(getActiveStyles());
    }
  }, [activeTab, children, getActiveStyles, size]);

  return (
    <Box
      {...props}
      sx={{
        ...styles.tabs,
        justifyContent: variant === variants.CENTERED ? "center" : null,
      }}
    >
      <Box
        sx={{
          ...styles.tabUnderlay,
          width: variant === variants.FULLWIDTH ? "100%" : undefined,
          justifyContent: variant === variants.FULLWIDTH ? "space-between" : "center",
        }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as any, {
            ...(child as any)?.props,
            sx:
              !isBrowser && (child as any)?.props?.index === activeTab
                ? {
                    background: "yellow",
                    color: "primaryBright",
                  }
                : undefined,
            ref: (child as any)?.props?.index === activeTab ? activeRef : undefined,
          });
        })}
        {activeTab >= 0 && (
          <Button
            sx={{
              px: tabPadding[size].x,
              py: tabPadding[size].y,
              fontSize: fontSizes[size],
              ...styles.tabButton,
              ...activeStyle,
              display: isBrowser ? undefined : "none",
            }}
          >
            {label}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Tabs;

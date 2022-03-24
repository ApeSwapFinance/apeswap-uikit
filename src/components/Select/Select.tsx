/** @jsxImportSource theme-ui */
import React, { useRef, useState } from "react";
import { Box, Flex } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import { SelectProps, selectPadding, sizes, positions } from "./types";
import { Svg } from "../Svg";
import styles from "./styles";

const Select: React.FC<SelectProps> = ({
  children,
  active,
  width = "fit-content",
  size = sizes.MEDIUM,
  position = positions.BOTTOM,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  const setNativeInput = (val: string) => {
    const input = inputRef?.current;

    if (input) {
      Object?.getOwnPropertyDescriptor?.(window.HTMLInputElement.prototype, "value")?.set?.call(input, val);
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <>
      <Box sx={{ ...styles.container, width }} onClick={handleClick}>
        <Flex
          sx={{
            pr: selectPadding[size],
            columnGap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {React.Children.map(children, (child) => {
            if ((child as any)?.props?.value !== active) {
              return null;
            }
            return React.cloneElement(child as any, {
              ...(child as any)?.props,
              active: true,
            });
          })}
          <Svg icon="caret" direction={open ? "up" : "down"} />
        </Flex>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "fit-content" }}
              transition={{ opacity: { duration: 0.2 } }}
              exit={{ opacity: 0, height: 0 }}
              sx={{
                ...styles.ul,
                width,
                zIndex: 100,
                top: position === positions.BOTTOM ? "calc(100% + 5px)" : undefined,
                bottom: position === positions.TOP ? "calc(100% + 5px)" : undefined,
              }}
            >
              {React.Children.map(children, (child) => {
                return React.cloneElement(child as any, {
                  ...(child as any)?.props,
                  active: false,
                  onClick: () => setNativeInput((child as any)?.props?.value),
                });
              })}
            </motion.ul>
          )}
        </AnimatePresence>
        <input ref={inputRef} value={active || ""} aria-hidden="true" tabIndex={-1} {...props} sx={styles.input} />
      </Box>
      {open && <div aria-hidden="true" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Select;

/** @jsxImportSource theme-ui */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "theme-ui";
import Button from "../ButtonNew/Button";
import { Text } from "../Text";
import { ToggleProps, sizes, togglePadding, fontSizes } from "./types";
import styles from "./styles";

const Toggle: React.FC<ToggleProps> = ({ checked, labels, size = sizes.MEDIUM, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const leftRef = useRef<any>(null);
  const rightRef = useRef<any>(null);
  const [isChecked, setIsChecked] = useState(checked);
  const [activeStyle, setActiveStyle] = useState({});

  const getActiveStyles = useCallback(() => {
    return {
      width: (isChecked && size ? rightRef : leftRef)?.current?.getBoundingClientRect?.()?.width || "fit-content",
      left:
        isChecked && rightRef?.current
          ? rightRef?.current?.getBoundingClientRect?.()?.x - rightRef?.current?.parentNode.getBoundingClientRect?.()?.x
          : 0,
    };
  }, [isChecked, size]);

  useEffect(() => {
    setActiveStyle(() => getActiveStyles());
  }, [getActiveStyles]);

  const handleClick = () => {
    setIsChecked(!isChecked);
    inputRef?.current?.click();
  };

  return (
    <Box sx={styles.container}>
      <Box
        ref={leftRef}
        sx={{
          ...styles.switch,
          background: "white3",
          color: "primaryButtonDisable",
          px: togglePadding[size].x,
          py: togglePadding[size].y,
          fontSize: fontSizes[size],
        }}
        onClick={handleClick}
      >
        <Text variant="sm" sx={{ fontSize: fontSizes[size] }} weight="bold">
          {labels[0]}
        </Text>
      </Box>

      <Box
        ref={rightRef}
        sx={{
          ...styles.switch,
          background: "white3",
          color: "primaryButtonDisable",
          px: togglePadding[size].x,
          py: togglePadding[size].y,
          fontSize: fontSizes[size],
        }}
        onClick={handleClick}
      >
        <Text variant="sm" sx={{ fontSize: fontSizes[size] }} weight="bold">
          {labels[1]}
        </Text>
      </Box>
      <Button
        csx={{
          ...styles.button,
          ...activeStyle,
          fontSize: fontSizes[size],
          px: togglePadding[size].x,
          py: togglePadding[size].y,
        }}
      >
        {isChecked ? labels[1] : labels[0]}
      </Button>
      <input
        type="checkbox"
        ref={inputRef}
        checked={isChecked}
        aria-hidden="true"
        tabIndex={-1}
        {...props}
        sx={styles.input}
      />
    </Box>
  );
};

export default Toggle;

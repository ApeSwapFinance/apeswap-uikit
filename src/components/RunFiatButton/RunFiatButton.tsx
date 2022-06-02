/** @jsxImportSource theme-ui */
import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../Button";
import { Text } from "../Text";
import { CardIcon } from "../Svg";
import { RFBProps } from "./types";

const RunFiatButton: React.FC<RFBProps> = ({ runFiat, mini, t, ...props }) => {
  const theme = useTheme();
  return (
    <Button
      {...props}
      sx={{
        width: (mini && "32px") || "max-content",
        height: (mini && "32px") || "40px",
        marginRight: "15px",
        background: (mini && "white3") || "yellow",
        border: "none",
        fontSize: "16px",
        "&&": {
          borderRadius: (mini && "50%") || "10px",

          "&:hover": {
            background: mini && "white4",
            filter: (!mini && "brightness(115%)") || "unset",
          },
        },
      }}
      onClick={runFiat}
    >
      {!mini && (
        <>
          <Text color="primaryBright" bold>
            {t?.("ADD FUNDS")}
          </Text>
          <CardIcon fill="#FAFAFA" marginLeft="5px" />
        </>
      )}
      {mini && <CardIcon fill={theme.isDark ? "#FAFAFA" : "#4D4040"} />}
    </Button>
  );
};

export default RunFiatButton;

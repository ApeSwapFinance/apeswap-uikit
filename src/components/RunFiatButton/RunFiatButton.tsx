/** @jsxImportSource theme-ui */
import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../Button";
import { Text } from "../Text";
import { CardIcon } from "../Svg";
import { RFBProps } from "./types";
import trackClick from "../../util/trackClick";

const RunFiatButton: React.FC<RFBProps> = ({ track, position, chainId, runFiat, mini, t, ...props }) => {
  const theme = useTheme();
  const event = "moonpayClick";

  const handleClick = () => {
    runFiat();
    trackClick(track, event, position, chainId);
  };
  return (
    <Button
      {...props}
      sx={{
        width: (mini && "32px") || "max-content",
        height: (mini && "32px") || "40px",
        marginRight: "20px",
        background: (mini && "none") || "yellow",
        border: "none",
        fontSize: "16px",
        fontWeight: 600,
        "&&": {
          borderRadius: (mini && "50%") || "10px",

          "&:hover": {
            background: mini && "none",
            filter: (!mini && "brightness(115%)") || "unset",
          },
        },
      }}
      onClick={handleClick}
    >
      {!mini && (
        <>
          <Text color="primaryBright" bold>
            {t?.("ADD FUNDS")}
          </Text>
          <CardIcon fill="#FAFAFA" marginLeft="5px" width="24px" />
        </>
      )}
      {mini && <CardIcon fill={theme.isDark ? "#FAFAFA" : "#4D4040"} {...props} />}
    </Button>
  );
};

export default RunFiatButton;

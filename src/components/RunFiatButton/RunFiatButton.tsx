import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../ButtonNew";
import { Text } from "../Text";
import { CardIcon } from "../Svg";
import { RFBProps } from "./types";

const RunFiatButton: React.FC<RFBProps> = ({ runFiat, mini, ...props }) => {
  const theme = useTheme();
  return (
    <Button
      {...props}
      sx={{
        width: (mini && "32px") || "max-content",
        height: (mini && "32px") || "44px",
        marginRight: "15px",
        background: (mini && "white3") || "yellow",
        border: "none",
        borderRadius: (mini && "50%") || "10px",
        fontSize: "16px",
        "&:hover": {
          background: mini && "white4",
          filter: (!mini && "brightness(115%)") || "unset",
        },
      }}
      onClick={runFiat}
    >
      {!mini && (
        <>
          <Text color="primaryBright" bold>
            ADD FUNDS
          </Text>
          <CardIcon fill="#FAFAFA" marginLeft="5px" />
        </>
      )}
      {mini && <CardIcon fill={(theme.isDark && "#FAFAFA") || "#4D4040"} />}
    </Button>
  );
};

export default RunFiatButton;

import React from "react";
import { Button } from "../ButtonNew";
import { Text } from "../Text";
import { ArrowDropLeftIcon, ArrowDropRightIcon } from "../Svg";
import { RunFiatButtonProps } from "./types";

const RunFiatButton: React.FC<RunFiatButtonProps> = ({ runFiat, mini, ...props }) => {
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
          <ArrowDropLeftIcon width="14px" color="primaryBright" marginLeft="5px" />
        </>
      )}
      {mini && <ArrowDropRightIcon width="14px" color="text" />}
    </Button>
  );
};

export default RunFiatButton;

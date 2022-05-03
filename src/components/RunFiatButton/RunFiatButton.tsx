import React from "react";
import darkTheme from "../../theme/dark";
import { Button } from "../ButtonNew";
import { Text } from "../Text";
import { ArrowDropLeftIcon, ArrowDropRightIcon } from "../Svg";
import { RunFiatButtonProps } from "./types";

const RunFiatButton: React.FC<RunFiatButtonProps> = ({ runFiat, mini, isDark, ...props }) => {
  return (
    <Button
      {...props}
      csx={{
        width: (mini && "32px") || "max-content",
        height: (mini && "32px") || "44px",
        marginRight: "15px",
        background: mini && isDark ? darkTheme.colors.white3 : (mini && "white3") || darkTheme.colors.yellow,
        border: "none",
        borderRadius: (mini && "50%") || "10px",
        "&:hover": {
          background: mini && "white4",
          filter: !mini && "brightness(115%)",
        },
      }}
      onClick={runFiat}
    >
      {!mini && (
        <>
          <Text color={darkTheme.colors.primaryBright} bold>
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

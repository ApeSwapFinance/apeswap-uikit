import { ReactNode, useCallback, useContext } from "react";
import { Context } from "./TooltipContext";

const useTooltip = (content: ReactNode) => {
  const { show, setShow, setTooltip, tooltip } = useContext(Context);

  const showTooltip = useCallback(() => {
    setTooltip(content);
    setShow(true);
  }, [setShow, setTooltip]);

  const hideTooltip = () => {
    setShow(false);
  };

  showTooltip();

  return { showTooltip, hideTooltip, tooltip, show };
};

export default useTooltip;

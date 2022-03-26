import React, { createContext, ReactNode, useState } from "react";

interface TooltipContext {
  show: boolean;
  tooltip: ReactNode;
  setShow: (value: boolean) => void;
  setTooltip: (value: ReactNode) => void;
  handleShow: (value: ReactNode) => void;
  handleHide: (value: ReactNode) => void;
}

export const Context = createContext<TooltipContext>({
  show: false,
  tooltip: null,
  setShow: () => null,
  setTooltip: () => null,
  handleShow: () => null,
  handleHide: () => null,
} as TooltipContext);

const TooltipProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState<React.ReactNode>();

  const handleShow = (node: ReactNode) => {
    setTooltip(node);
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  return (
    <Context.Provider
      value={{
        show,
        setShow,
        tooltip,
        setTooltip,
        handleShow,
        handleHide,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TooltipProvider;

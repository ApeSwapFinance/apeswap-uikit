import React, { useCallback, useContext, useEffect } from "react";
import get from "lodash/get";
import { Context } from "./ModalContext";
import { Handler } from "./types";

const useModal = (
  modal: React.ReactNode,
  closeOnOverlayClick = true,
  updateOnPropsChange = false,
  modalId = "defaultNodeId"
): [Handler, Handler] => {
  const { isOpen, nodeId, modalNode, setModalNode, onPresent, handleClose, setCloseOnOverlayClick } =
    useContext(Context);
  const onPresentCallback = useCallback(() => {
    onPresent(modal, modalId);
  }, [modal, modalId, onPresent]);
  useEffect(() => {
    // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
    if (updateOnPropsChange && isOpen && nodeId === modalId) {
      const modalProps = get(modal, "props");
      const oldModalProps = get(modalNode, "props");
      if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
        setModalNode(modal);
      }
    }
  }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, handleClose];
};

export default useModal;

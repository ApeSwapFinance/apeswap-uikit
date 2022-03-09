import React from "react";
import { Link } from "react-router-dom";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { ButtonSquare } from "../../components/ButtonSquare";
import { ToastAction as Action } from "./types";

interface ToastActionProps {
  action: Action;
}

const ToastAction: React.FC<ToastActionProps> = ({ action }) => {
  if (action.url.startsWith("http")) {
    return (
      <ButtonSquare as="a" size="sm" href={action.url} {...getExternalLinkProps()}>
        {action.text}
      </ButtonSquare>
    );
  }

  return (
    <ButtonSquare as={Link} size="sm" to={action.url}>
      {action.text}
    </ButtonSquare>
  );
};

export default ToastAction;

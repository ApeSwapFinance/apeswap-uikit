/** @jsxImportSource theme-ui */
import React from "react";
import { RadioProps, scales } from "./types";

const getScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "21px";
    case scales.MD:
    default:
      return "32px";
  }
};

const getCheckedScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "9px";
    case scales.MD:
    default:
      return "18px";
  }
};

const Radio: React.FC<RadioProps> = ({ scale = scales.SM, display = "inline-block", ...props }) => {
  const scaleSize = getScale({ scale });
  const checkedScale = getCheckedScale({ scale });

  return (
    <span sx={{ display, width: scaleSize, height: scaleSize, position: "relative" }}>
      <input type="radio" sx={{ variant: "forms.radio" }} {...props} />
      <span sx={{ width: checkedScale, height: checkedScale }} />
    </span>
  );
};

export default Radio;

import React from "react";
import { StyledListTag, StyledTagText } from "./styles";
import { ListTagProps } from "./types";

const ListTag: React.FC<ListTagProps> = ({ variant, ...props }) => {
  const asd = "dummy string"
  return (
    <StyledListTag variant={variant} {...props}>
      <StyledTagText>
        {variant} {variant === "new" || variant === "hot" ? null : "LP"}
      </StyledTagText>
    </StyledListTag>
  );
};

export default ListTag;

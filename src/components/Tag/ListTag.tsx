/** @jsxImportSource theme-ui */
import React from "react";
import { styles } from "./styles";
import { ListTagProps, lpTags } from "./types";
import { Flex } from "../Flex";

const ListTag: React.FC<ListTagProps> = ({ variant }) => {
  return (
    <Flex variant={variant} sx={styles.listTagCont({ variant })}>
      <Flex sx={styles.tagText}>
        {variant} {lpTags.includes(variant) && "LP"}
      </Flex>
    </Flex>
  );
};

export default ListTag;

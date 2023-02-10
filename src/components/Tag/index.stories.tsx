import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import { CommunityIcon, RemoveIcon } from "../Svg";
import Tag from "./Tag";
import { ListTagVariants, listTagVariants, variants } from "./types";
import ListTag from "./ListTag";

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > div {
    margin-right: 16px;
  }
`;

export default {
  title: "Components/Tag",
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <>
      <Row>
        {Object.keys(variants).map((variant) => (
          <Tag key={variant} variant={variants[variant]}>
            {variant}
          </Tag>
        ))}
      </Row>
      <Row>
        {Object.keys(variants).map((variant) => (
          <Tag key={variant} variant={variants[variant]} outline>
            {variant}
          </Tag>
        ))}
      </Row>
      <Row>
        {Object.values(listTagVariants).map((variant: ListTagVariants) => {
          return <ListTag variant={variant} />;
        })}
      </Row>
    </>
  );
};

export const WithIcon: React.FC = () => {
  return (
    <>
      <Row>
        {Object.keys(variants).map((variant) => (
          <Tag key={variant} variant={variants[variant]} startIcon={<CommunityIcon />}>
            Start Icon
          </Tag>
        ))}
      </Row>
      <Row>
        {Object.keys(variants).map((variant) => (
          <Tag key={variant} variant={variants[variant]} endIcon={<RemoveIcon width="14px" />}>
            End Icon
          </Tag>
        ))}
      </Row>
      <Row>
        {Object.keys(variants).map((variant) => (
          <Tag
            key={variant}
            variant={variants[variant]}
            startIcon={<CommunityIcon />}
            endIcon={<RemoveIcon width="14px" />}
          >
            Start & End Icon
          </Tag>
        ))}
      </Row>
    </>
  );
};

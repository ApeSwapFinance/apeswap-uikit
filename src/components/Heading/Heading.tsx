import styled from "styled-components";
import Text from "../Text/Text";
import getFontFamily from "../../util/getFontFamily";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
  },
  [sizes.LG]: {
    fontSize: "24px",
  },
  [sizes.XL]: {
    fontSize: "40px",
  },
  [sizes.XXL]: {
    fontSize: "64px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-family: ${({ fontFamily, theme }) => getFontFamily(fontFamily, theme)};
  font-weight: 400;
  line-height: 1.1;
  text-align: ${({ textAlign }) => textAlign};
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;

import styled, { DefaultTheme } from "styled-components";
import Text from "../Text/Text";
import getThemeValue from "../../util/getThemeValue";
import { tags, sizes, HeadingProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

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

const getFontFamily = ({ fontFamily, theme }: ThemedProps) => {
  return fontFamily ? getThemeValue(`fontFamily.${fontFamily}`, fontFamily)(theme): 'Titan One';
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-family: ${getFontFamily};
  font-weight:400;
  line-height: 1.1;
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;

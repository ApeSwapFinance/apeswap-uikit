import styled from "styled-components";
import Button from "../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 40px;
  padding: 0px;
  width: 0px;
  border-radius: 8px;
  :focus {
    box-shadow: none !important;
  }
  :hover {
    background: none !important;
  }
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;

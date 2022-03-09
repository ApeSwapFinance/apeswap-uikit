import styled from "styled-components";
import Button from "../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0px;
  width: 0px;
  margin-left: 40px;
  border-radius: 8px;
  margin-top: 3.5px;
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

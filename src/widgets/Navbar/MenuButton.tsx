import React from "react";
import Button from "../../components/Button/Button";

interface MenuButtonProps {
  handleClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ handleClick, ...props }) => {
  return (
    <Button
      color="text"
      sx={{
        padding: "0px",
        marginLeft: "20px",
        borderRadius: "8px",
        marginTop: "3.5px",
        border: "none",
        paddingLeft: "0px",
        paddingRight: "0px",
        "&&": {
          background: "none",
        },
        "&:focus": {
          boxShadow: "none",
        },
        "&:hover": {
          "&&": {
            background: "none",
          },
        },
      }}
      onClick={handleClick}
      {...props}
    />
  );
};

export default MenuButton;

// const MenuButton = styled(Button)`
//   color: ${({ theme }) => theme.colors.text};
//   padding: 0px;
//   width: 0px;
//   margin-left: 40px;
//   border-radius: 8px;
//   margin-top: 3.5px;
//   :focus {
//     box-shadow: none !important;
//   }
//   :hover {
//     background: none !important;
//   }
// `;
// MenuButton.defaultProps = {
//   variant: "text",
//   size: "sm",
// };

// export default MenuButton;

import { ThemeUIStyleObject } from "theme-ui";

//     align-items: center;
//     background-color: #FFB300;
//     border: 0;
//     color: #FAFAFA;
//     border-radius: 10px;
//     font-weight: 600;
//     box-shadow: none;
//     cursor: pointer;
//     display: inline-flex;
//     font-size: 16px;
//     width: max-content;
//     height: 44px;
//     line-height: 1;
//     letter-spacing: 0.03em;
//     justify-content: center;
//     outline: 0;
//     padding: 0 24px;
//     transition: background-color 0.2s;
//     opacity: 1;
//     text-transform: uppercase;

const defaultStyle = {
  cursor: "pointer",
  color: "primaryBright",
  fontWeight: 600,
  fontSize: "16px",
  padding: "10px",
  border: "none",
  transition: "all .3s linear",
  "&:hover": {
    filter: "brightness(115%)",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
};

const styles: Record<string, ThemeUIStyleObject> = {
  primary: {
    ...defaultStyle,
  },
  transparent: {
    ...defaultStyle,
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    padding: "0px",
    border: "none",
    cursor: "pointer",
    svg: {
      background: "transparent",
    },
  },
};

export default styles;

import { ThemeUIStyleObject } from "theme-ui";

const baseStyle = {
  p: 9,
  borderRadius: "normal",
  background: "navbar",
  width: "max-content",
  zIndex: "modal",
  boxShadow: `0px 0px 30px rgb(200,200,200, .4)`,
};

const baseDirectionArrow = {
  content: '""',
  display: "block",
  width: 0,
  border: "12px solid transparent",
};

const topArrow = {
  bottom: 0,
  ...baseDirectionArrow,
  borderBottom: 0,
  borderTopWidth: "15px",
  borderTopStyle: "solid",
  transform: "translate(-50%, calc(100%))",
};

const bottomArrow = {
  top: 0,
  ...baseDirectionArrow,
  borderTop: 0,
  borderBottomWidth: "15px",
  borderBottomStyle: "solid",
  transform: "translate(-50%, calc(-100%))",
};

export const container = (hide?: boolean): ThemeUIStyleObject => ({
  position: "relative",
  display: "inline-block",
  "& > div:first-of-type": {
    display: "none",
  },
  "&:hover > div:first-of-type": {
    display: hide ? "none" : "block",
  },
});

const styles: Record<string, ThemeUIStyleObject> = {
  default: {
    color: "text",
    fontSize: 0,
    lineHeight: "18px",
    fontWeight: "normal",
    ...baseStyle,
  },
  bottomRight: {
    "&::before": {
      position: "absolute",
      ...bottomArrow,
      right: "3%",
      borderBottomColor: "navbar",
    },
  },
  bottomLeft: {
    "&::before": {
      position: "absolute",
      ...bottomArrow,
      left: "calc(3% + 15px)",
      borderBottomColor: "navbar",
    },
  },
  topRight: {
    "&::before": {
      position: "absolute",
      ...topArrow,
      right: "3%",
      borderTopColor: "navbar",
    },
  },
  topLeft: {
    "&::before": {
      position: "absolute",
      ...topArrow,
      left: "calc(3% + 15px)",
      borderTopColor: "navbar",
    },
  },
};

export default styles;

import { ThemeUIStyleObject } from "theme-ui";

const baseStyle = {
  p: 9,
  borderRadius: "normal",
  background: "navbar",
  width: "100%",
  zIndex: "modal",
};

const baseDirectionArrow = {
  content: '""',
  display: "block",
  width: 0,
  border: "12px solid transparent",
};

const topRight = {
  bottom: 2,
  ...baseDirectionArrow,
  borderBottom: 0,
  borderTopWidth: "15px",
  borderTopStyle: "solid",
  borderTopColor: "navbar",
  right: "3%",
  transform: "translate(-50%, calc(100% + 5px))",
};

const topLeft = {
  bottom: 2,
  ...baseDirectionArrow,
  borderBottom: 0,
  borderTopWidth: "15px",
  borderTopStyle: "solid",
  borderTopColor: "navbar",
  left: "12%",
  transform: "translate(-50%, calc(100% + 5px))",
};

const bottomRight = {
  top: 2,
  ...baseDirectionArrow,
  borderTop: 0,
  borderBottomWidth: "15px",
  borderBottomStyle: "solid",
  borderBottomColor: "navbar",
  right: "3%",
  transform: "translate(-50%, calc(-100% - 5px))",
};

const bottomLeft = {
  top: 2,
  ...baseDirectionArrow,
  borderTop: 0,
  borderBottomWidth: "15px",
  borderBottomStyle: "solid",
  borderBottomColor: "navbar",
  left: "12%",
  transform: "translate(-50%, calc(-100% - 5px))",
};

const after = {
  content: '""',
  width: "100%",
  display: "block",
  border: "15px solid transparent",
  left: 0,
};

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    width: "232px",
    "& > div:first-of-type": {
      display: "none",
    },
    "&:hover > div:first-of-type": {
      display: "block",
    },
  },
  default: {
    color: "brown",
    fontSize: 0,
    lineHeight: "18px",
    fontWeight: "normal",
    ...baseStyle,
  },
  bottomRight: {
    "&::before": {
      position: "absolute",
      ...bottomRight,
    },
    "&::after": {
      ...after,
      position: "absolute",
      top: 0,
      transform: "translateY(-20px)",
    },
  },
  bottomLeft: {
    "&::before": {
      position: "absolute",
      ...bottomLeft,
    },
    "&::after": {
      ...after,
      position: "absolute",
      top: 0,
      transform: "translateY(-20px)",
    },
  },
  topRight: {
    "&::before": {
      position: "absolute",
      ...topRight,
    },
    "&::after": {
      ...after,
      position: "absolute",
      bottom: 0,
      transform: "translateY(20px)",
    },
  },
  topLeft: {
    "&::before": {
      position: "absolute",
      ...topLeft,
    },
    "&::after": {
      ...after,
      position: "absolute",
      bottom: 0,
      transform: "translateY(20px)",
    },
  },
  linkWrapper: {
    justifyContent: "center",
    gap: 3,
    alignItems: "center",
    fontWeight: "bold",
    textDecoration: "underline",
    svg: {
      fill: "brown",
      path: "brown",
    },
  },
  flex: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 0,
    lineHeight: "18px",
    color: "brown",
    "span:nth-of-type(2)": {
      fontWeight: "bold",
    },
  },
};

export default styles;

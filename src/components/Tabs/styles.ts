import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  tabs: {
    overflow: "hidden",
    display: "flex",
    borderRadius: "10px",
    background: "transparent",
  },
  tabUnderlay: {
    position: "relative",
    display: "flex",
    background: "lvl1",
    borderRadius: "10px",
    padding: 0,
    margin: 0,
  },
  tabButton: {
    px: "36px",
    py: "9px",
    position: "absolute",
    border: 0,
    top: 0,
    height: "100%",
    fontSize: "14px",
    transition: "left 0.2s linear",
    "&:hover": {
      filter: "none",
    },
  },
  tab: {
    borderRadius: "10px",
    px: "36px",
    py: "9px",
    cursor: "pointer",
    background: "white3",
    color: "primaryButtonDisable",
    textAlign: "center",
    "&:hover": {
      filter: "20%",
    },
  },
};

export default styles;

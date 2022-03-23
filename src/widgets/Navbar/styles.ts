import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  menu: {
    background: "white3",
    overflow: "hidden",
    left: 0,
    height: "100vh",
    position: "fixed",
    paddingTop: "80px",
    top: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "width .2s linear",
    zIndex: 100,
    boxShadow: "rgb(0 0 0 / 16%) 0px 1px 10px",
  },
  menuBody: {
    flexDirection: "column",
    overflowX: "hidden",
    height: "100%",
    width: "100%",
    marginBottom: "20px",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  footer: {
    paddingTop: 5,
    height: "auto",
    width: "100%",
    boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
  },
};

export default styles;

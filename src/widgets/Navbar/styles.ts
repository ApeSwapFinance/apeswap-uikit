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
  rightMenu: {
    marginLeft: "15px",
    justifyContent: "space-between",
    height: "100%",
  },
  networkBtn: {
    alignItems: "center",
    fontSize: "14px",
    lineHeight: "10px",
    height: "35px",
  },
  cardContainer: {
    position: "absolute",
    width: "429px",
    minHeight: "316px",
    backgroundColor: "navbar",
    borderRadius: "0px 0px 30px 30px",
    padding: "15px 0px 20px 0px",
    marginLeft: "22.5px",
    cursor: "default",
  },
  navHolder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "200px",
    margin: "0px 0px 0px 30px",
  },
  navImage: {
    position: "absolute",
    display: "block",
    top: "0px",
    right: "0px",
    borderRadius: "0px 0px 0px 30px",
  },
  dropDownMenuText: {
    marginTop: "6px",
    marginBottom: "6px",
    marginRight: "6px",
  },
};

interface Props {
  account?: string;
  uDName?: string;
  sidName?: string;
}

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  userBlockBtn: ({ account, uDName, sidName }: Props) => ({
    height: "35px",
    marginLeft: "10px",
    lineHeight: "10px",
    background: uDName || sidName || account ? "white3" : "yellow",
    color: uDName || sidName || account ? "text" : "primaryBright",
    "&&": {
      padding: `0px ${uDName || sidName || account ? "45px" : "15px"} 0px 15px`,
    },
  }),
};

export default styles;

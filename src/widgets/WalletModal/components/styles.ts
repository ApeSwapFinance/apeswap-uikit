import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<
  | "allWalletsContainer"
  | "title"
  | "smallTitle"
  | "cardsContainer"
  | "prioritizedContainer"
  | "infoContainer"
  | "firstStep"
  | "learnHow"
  | "buttonsContainer"
  | "button"
  | "moreWallets"
  | "walletName"
  | "iconContainer",
  ThemeUIStyleObject
> = {
  allWalletsContainer: {
    flexWrap: "wrap",
    position: "absolute",
    width: "100%",
    maxWidth: ["240px", "240px", "580px"],
    flexDirection: "column",
    justifyContent: "space-between",
    height: ["325px", "325px", "390px"],
    overflow: "hidden",
  },
  title: {
    fontSize: ["16px", "16px", "25px"],
    fontWeight: 700,
    lineHeight: ["24px", "24px", "37.5px"],
    mt: ["", "", "10px"],
  },
  smallTitle: {
    fontSize: ["12px", "12px", "16px"],
    fontWeight: 700,
    lineHeight: ["24px"],
    position: "absolute",
    right: "240px",
    display: ["none", "none", "block"],
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: ["space-between", "space-between", "flex-start"],
    mt: "15px",
    mb: "-15px",
    maxHeight: ["300px", "300px", "372px"],
    overflowY: "auto",
    width: ["240px", "240px", "563px"],
    "&::-webkit-scrollbar, -ms-overflow-style": { width: "3px" },
    "&::-webkit-scrollbar-track": { boxShadow: "inset 0 0 2px #4d4040" },
  },
  prioritizedContainer: {
    flexWrap: "wrap",
    position: "absolute",
    width: "100%",
    maxWidth: ["240px", "240px", "563px"],
  },
  infoContainer: {
    flexWrap: "wrap",
    width: ["100%", "100%", "50%"],
    flexDirection: "column",
    height: ["132px", "132px", "unset"],
  },
  firstStep: {
    fontSize: ["12px", "12px", "16px"],
    fontWeight: 500,
    lineHeight: ["14px", "14px", "24px"],
    mt: ["5px", "5px", "10px"],
  },
  learnHow: {
    display: "flex",
    mt: ["5px", "5px", "5px"],
    textDecoration: "underline",
    "& svg": { width: "9px" },
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minWidth: ["240px", "240px", "560px"],
    mt: ["15px", "15px", "30px"],
  },
  button: {
    width: ["108px", "108px", "128px"],
    flexDirection: "column",
    minHeight: ["84px", "84px", "114px"],
    justifyContent: "flex-start",
    mb: "15px",
    mr: ["5px", "5px", "15px"],
    padding: "0 9px",
    background: "white3",
    fontSize: ["12px", "12px", "16px"],
    ":nth-of-type(4n)": { mr: ["", "", "0px"] },
  },
  moreWallets: {
    background: "textareaColor",
    borderRadius: "25px",
    opacity: 0.9,
    width: ["30px", "30px", "50px"],
    height: ["30px", "30px", "50px"],
    alignItems: "flex-start",
    color: "white1",
    justifyContent: "center",
  },
  walletName: {
    lineHeight: ["14px", "14px", "16px"],
    fontSize: ["12px", "12px", "14px"],
    fontWeight: 700,
    color: "text",
  },
  iconContainer: {
    height: ["45px", "45px", "65px"],
    alignItems: "flex-end",
    width: ["32px", "32px", "50px"],
  },
};

export default styles;

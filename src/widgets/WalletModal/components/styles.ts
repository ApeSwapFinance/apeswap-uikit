import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<
  | "allWalletsContainer"
  | "textContainer"
  | "connectWalletTitle"
  | "title"
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
  textContainer: {
    width: "100%",
    flexWrap: "wrap",
    justifyContent: ["flex-start", "flex-start", "center"],
  },
  connectWalletTitle: { width: "100%", justifyContent: ["flex-start", "flex-start", "center"] },
  title: {
    fontSize: ["16px", "16px", "25px"],
    fontWeight: 700,
    lineHeight: ["24px", "24px", "37.5px"],
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: ["space-between", "space-between", "flex-start"],
    mt: "15px",
    mb: "-15px",
    maxHeight: ["300px", "300px", "348px"],
    overflowY: "auto",
    width: ["240px", "240px", "580px"],
  },
  prioritizedContainer: {
    flexWrap: "wrap",
    position: "absolute",
    width: "100%",
    maxWidth: ["240px", "240px", "580px"],
  },
  infoContainer: {
    flexWrap: "wrap",
    width: ["100%", "100%", "50%"],
    flexDirection: "column",
    height: ["132px", "132px", "unset"],
    justifyContent: ["space-between", "space-between", "flex-start"],
  },
  firstStep: {
    fontSize: ["12px", "12px", "16px"],
    fontWeight: 500,
    lineHeight: ["14px", "14px", "24px"],
  },
  learnHow: {
    display: "flex",
    "&:hover": { textDecoration: "underline" },
    "& svg": { width: "9px" },
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minWidth: ["240px", "240px", "580px"],
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
  },
  iconContainer: {
    height: ["45px", "45px", "65px"],
    alignItems: "flex-end",
    width: ["32px", "32px", "50px"],
  },
};

export default styles;

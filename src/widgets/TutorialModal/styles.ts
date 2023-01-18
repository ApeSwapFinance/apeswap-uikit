import { ThemeUIStyleObject } from "theme-ui";
import { ShowApeType } from "./types";

export const modalProps = {
  sx: {
    width: ["200px"],
    height: ["", "", "500px"],
  },
};

export const dynamicStyles: Record<
  "showApe" | "allCircle",
  (props: { slideNumber?: number; type?: string; isActive?: boolean }) => ThemeUIStyleObject
> = {
  showApe: ({ slideNumber, type }: ShowApeType) => ({
    alignSelf: ["center", "center", ""],
    width: ["200px", "200px", "340px"],
    height: ["200px", "200px", "340px"],
    background: `url(images/tutorial-modals/${type}-${slideNumber}.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }),
  allCircle: ({ isActive }) => ({
    width: "8px",
    height: "8px",
    background: isActive ? "linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%)" : "white4",
    borderRadius: "50%",
    mr: "10px",
    cursor: "pointer",
    "&.last-child": {
      mr: 0,
    },
  }),
};

export const styles: Record<
  | "modalCon"
  | "contentBody"
  | "rightCon"
  | "right"
  | "modalHeader"
  | "title"
  | "description"
  | "circles"
  | "readyBtn"
  | "modalFooter",
  ThemeUIStyleObject
> = {
  modalCon: {
    height: "100%",
  },
  contentBody: {
    flexDirection: ["column", "column", "row"],
    width: "100%",
    alignItems: "center",
    height: "100%",
    justifyContent: ["", "", "space-between"],
  },
  rightCon: {
    width: "100%",
    flexDirection: "column",
    flex: 1,
    mr: ["", "", "10px"],
    maxWidth: ["", "", "55%"],
  },
  right: {
    flexDirection: "column",
    height: "100%",
    minHeight: "270px",
  },
  modalHeader: {
    flexDirection: ["column"],
  },
  title: {
    fontWeight: 700,
    fontSize: ["18px", "18px", "24px"],
    lineHeight: ["22px", "22px", "36px"],
    textTransform: ["capitalize", "capitalize", "uppercase"],
    mt: ["10px"],
  },
  description: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    textTransform: "none",
    opacity: 0.5,
    mt: ["7px", "7px", 0],
  },
  circles: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: ["8px", "8px", "8px 8px 8px 0px"],
  },
  readyBtn: {
    mt: "10px",
    textTransform: "uppercase",
    height: "40px",
    width: ["100%", "100%", "240px"],
  },
  modalFooter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: ["center", "center", "flex-start"],
  },
};

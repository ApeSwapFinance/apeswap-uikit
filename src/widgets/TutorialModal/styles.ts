import { ThemeUIStyleObject } from "theme-ui";
import { ShowApeType } from "./types";

export const modalProps = {
  sx: {
    minWidth: ["280px", "280px", "800px"],
    width: ["200px"],
    maxWidth: ["280px", "280px", "800px"],
    // height: ["500px"],
  },
};

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  showApe: ({ step, type, isDark }: ShowApeType) => ({
    alignSelf: ["center", "center", ""],
    width: ["200px", "200px", "46%"],
    height: ["200px", "200px", "400px"],
    marginTop: "20px",
    background: `url(images/tutorial-modals/${type}-${isDark ? "dark" : "light"}-${step}.svg)`,
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
    "&.last-child": {
      mr: 0,
    },
  }),
};

export const styles: Record<string, ThemeUIStyleObject> = {
  modalCon: {
    height: "100%",
  },
  right: {
    flexDirection: "column",
    height: "100%", // -> removed to test absolute position

    // test absolute position
    // height: "73%",
    // overflowY: "auto",
  },
  modalHeader: {
    flexDirection: ["column"],
  },
  title: {
    fontWeight: 700,
    fontSize: ["18px"],
    lineHeight: ["22px"],
    textTransform: ["capitalize", "capitalize", "uppercase"],
    mt: ["10px"],
  },
  description: {
    fontWeight: [400],
    fontSize: ["12px"],
    lineHeight: ["18px"],
    textTransform: "none",
    opacity: 0.5,
    mt: ["7px"],
  },
  circles: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  circleCon: {
    padding: "8px",
  },
  modalFooter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // test absolute position
    // position: "absolute",
    // padding: "20px",
    // pt: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // background: "navbar",
    // borderRadius: "10px",
  },
  readyBtn: {
    mt: "10px", // -> removed to test absolute position
    textTransform: "uppercase",
    height: "40px",
  },
};

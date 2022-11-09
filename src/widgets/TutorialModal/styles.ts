import { ThemeUIStyleObject } from "theme-ui";
import { ShowApeType } from "./types";

export const modalProps = {
  sx: {
    minWidth: ["280px", "280px", "873px"],
    width: ["200px"],
    maxWidth: ["280px", "280px", "873px"],
    height: ["", "", "500px"],
  },
};

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  showApe: ({ step, type, isDark }: ShowApeType) => ({
    alignSelf: ["center", "center", ""],
    width: ["200px", "200px", "340px"],
    height: ["200px", "200px", "340px"],
    marginTop: "20px",
    // background: 'brown',
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
    mt: "10px", // -> removed to test absolute position
    textTransform: "uppercase",
    height: "40px",
    width: ['100%', '100%', '240px']
  },
  modalFooter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: ["center", "center", "flex-start"],

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

  // To test frontend modal content
  container: {
    flexDirection: "column",
    mt: ["15px", "15px", "30px"],
    gap: "5px",
    height: ["142px", "142px", "200px"],
  },
  step: {
    fontSize: "10px",
    lineHeight: "14px",
    fontWeight: 700,
    color: "yellow",
    textTransform: "uppercase",
  },
  head: {
    fontSize: ["12px", "12px", "22px"],
    lineHeight: "14px",
    fontWeight: 700,
    textTransform: ["uppercase", "uppercase", "capitalize"],
    mb: [0, 0, "10px"],
  },
  yellow: {
    color: "yellow",
    lineHeight: "18px",
    textDecoration: "underline",
  },
  content: {
    fontSize: ["12px", "12px", "14px"],
    fontWeight: [400, 400, 500],
    lineHeight: ["18px", "18px", "21px"],
  },
  tipTitle: {
    fontWeight: 700,
  },
  tipBody: {
    fontWeight: 500,
    fontStyle: "normal",
  },
};

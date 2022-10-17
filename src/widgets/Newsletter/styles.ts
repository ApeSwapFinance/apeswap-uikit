import { ThemeUIStyleObject } from "theme-ui";

export const modalProps = {
  sx: {
    minWidth: ["90%", "50%", "800px"],
    width: ["200px"],
    maxWidth: "800px",
    height: ["500px", "500px", "auto"],
  },
};

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  newsletterCon: ({ isModal, isMobile, status }) => ({
    marginTop: isModal && isMobile && "25px",
    height: isModal && !isMobile && "350px",
    width: ["100%", "100%", (isModal && "60%") || "100%"],
    margin: 0,
    paddingBottom: 0,
    padding: ["", "", "", isModal && "20px"],
    alignItems: [isModal && "center", isModal && "center", isModal && "center", "center"],
    justifyContent: [(!isModal && "flex-start") || "", "", "center"],
    background: !isModal && "white2",
    flexDirection: status === "error" && "column",
  }),
  bodyCon: ({ isModal, isMobile, isMd }) => ({
    width: "100%",
    borderTop: !isModal && "5px solid",
    borderTopColor: "white3",
    py: !isModal && "15px",
    px: !isModal && (isMobile || isMd) && "20px",
    justifyContent: !isModal && !isModal && "center",
  }),
  content: ({ isModal }) => ({
    width: ["100%", !isModal && "90%"],
    justifyContent: ["space-between", "", "", !isModal && "center"],
    gap: !isModal && ["10px", "20px", "50px"],
    alignItems: [(!isModal && "flex-start") || "", "", ""],
    flexDirection: ["column", (isModal && "column") || "row"],
    maxWidth: !isModal && "1200px",
  }),
  left: ({ isModal }) => ({
    flexDirection: "column",
    mr: [0, 0, 0, 0, "82px"],
    width: ["100%", "", "", !isModal && "45%"],
    marginTop: [isModal && "10px", isModal && "10px", 0],
  }),
  latestText: ({ isModal }) => ({
    fontWeight: 700,
    fontSize: [(isModal && "18px") || "16px", (isModal && "20px") || "16px", isModal && "25px"],
    lineHeight: ["24px", "24px", isModal && "28px"],
  }),
  privacy: ({ isModal }) => ({
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: (isModal && "10px") || "5px",
    ":hover": {
      cursor: "pointer",
    },
  }),
  formCon: ({ isModal }) => ({
    flexDirection: "column",
    width: ["100%", "", "", !isModal && "40%"],
    "@media screen and (min-width: 1300px)": {
      width: !isModal && "35%",
    },
  }),
  form: ({ isModal }) => ({
    background: "white3",
    height: "42px",
    borderRadius: "10px",
    paddingLeft: ["8px", "10px", "24px"],
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: [isModal && "20px", "", isModal && "20px"],
  }),
  input: ({ isModal, isLg, isXl, isMd, status }) => ({
    border: "none",
    paddingRight: "5px",
    width: [
      (isModal && "190px") || "230px",
      (isModal && "230px") || "280px",
      (isModal && "270px") || (isLg && "224px") || (isXl && "245px"),
    ],
    paddingLeft: "10px",
    "@media screen and (min-width: 425px) and (max-width: 768px)": {
      width:
        (isModal && "230px") || (!isModal && ((isMd && "212px") || (isLg && "224px") || (isXl && "245px"))) || "280px",
    },
    "@media screen and (max-width: 320px)": {
      paddingLeft: "5px",
      width: (isModal && "140px") || "173px",
    },
    "::placeholder": {
      opacity: (status === "success" && 0.8) || 0.5,
      fontStyle: "italic",
      fontSize: ["12px", "14px"],
      lineHeight: "14px",
      fontWeight: status === "success" && 500,
      color: (status === "success" && "success") || "text",
    },
  }),
};

export const styles: Record<string, ThemeUIStyleObject> = {
  privacyLink: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    fontStyle: "italic",
    textDecoration: "underline",
    mr: "5px",
  },
  submit: {
    border: "none",
    background: "white4",
    width: "75px",
    height: "42px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    mt: "5px",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    width: "100%",
  },

  modalBody: {
    marginTop: "30px",
    flexDirection: ["column", "column", "row"],
    width: "100%",
    justifyContent: ["flex-start", "flex-start", "space-between"],
  },
  showApe: {
    alignSelf: ["center", "center", ""],
    width: ["230px", "230px", "46%"],
    height: ["230px", "230px", "400px"],
    marginTop: "-20px",
    background: `url(images/marketing-modals/emailApe.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};

export default styles;

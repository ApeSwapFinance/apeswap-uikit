import { ThemeUIStyleObject } from "theme-ui";

export const modalProps = {
  sx: {
    minWidth: ["90%", "50%", "800px"],
    width: ["200px"],
    maxWidth: "800px",
    height: ["calc(100vh - 15%)", "auto"],
  },
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
  form: {
    background: "white3",
    height: "42px",
    borderRadius: "10px",
    paddingLeft: ["8px", "10px", "24px"],
    alignItems: "center",
    justifyContent: "space-between",
  },
  submit: {
    border: "none",
    background: "white4",
    width: "75px",
    height: "42px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  status: {
    mt: "10px",
    fontWeight: "normal",
    fontSize: "12px",
  },

  modalBody: {
    marginTop: "30px",
    flexDirection: ["column", "column", "row"],
    width: "100%",
    justifyContent: ["flex-start", "flex-start", "space-between"],
  },
  showApe: {
    alignSelf: ["center", "center", ""],
    width: ["280px", "280px", "46%"],
    height: ["280px", "280px", "400px"],
    "@media screen and (max-width: 320px)": {
      width: "240px",
      height: "240px",
    },
    background: `url(images/marketing-modals/emailApe.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};

export default styles;

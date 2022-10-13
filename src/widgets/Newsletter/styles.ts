import { ThemeUIStyleObject } from "theme-ui";

export const modalProps = {
  sx: {
    minWidth: ["90%", "50%", "800px"],
    width: ["200px"],
    maxWidth: "800px",
    height: ["500px", "500px", "auto"],
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
    mt: "5px",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
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

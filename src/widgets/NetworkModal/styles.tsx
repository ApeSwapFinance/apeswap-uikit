import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  bridge: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    marginTop: "15px",
    ":hover": {
      textDecoration: "underline",
    },
  },
};
export default styles;

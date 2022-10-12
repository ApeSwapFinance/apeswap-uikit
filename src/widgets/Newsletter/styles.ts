import { ThemeUIStyleObject } from "theme-ui";

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
  input: {},
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
    fontWeight: 700,
    fontSize: "14px",
  },
};

interface Props {
  account: string;
  uDName: string;
}

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  userBlockBtn: ({ account, uDName }: Props) => ({
    height: "35px",
    marginLeft: "10px",
    lineHeight: "10px",
    background: uDName || account ? "white3" : "yellow",
    color: uDName || account ? "text" : "primaryBright",
    "&&": {
      padding: `0px ${uDName || account ? "45px" : "15px"} 0px 15px`,
    },
  }),
};

export default styles

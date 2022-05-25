import React from "react";
import { Divider as ThemeUIDivider } from "theme-ui";

const Divider: React.FC = ({ ...props }) => {
  return <ThemeUIDivider {...props} sx={{ variant: "styles.hr" }} />;
};

export default Divider;

import React from "react";
import { Textarea as ThemeUITextarea, TextareaProps } from "theme-ui";

const Textarea: React.FC<TextareaProps> = ({ children, ...props }) => {
  return (
    <ThemeUITextarea {...props} sx={{ variant: "forms.textarea" }}>
      {children}
    </ThemeUITextarea>
  );
};

export default Textarea;

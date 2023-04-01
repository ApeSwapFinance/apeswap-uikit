import React from "react";
import mailjet from "node-mailjet";
import NewsletterForm from "./NewsletterForm";
import { NewsletterProps } from "./types";

const Newsletter: React.FC<NewsletterProps> = ({ isNewsModal, t }) => {
  const [status, setStatus] = React.useState("");
  const [message, setMessage] = React.useState("");

  // TODO: Move to env variables
  const [mailjetApiKey, mailjetSecretKey] = ["bc02fa7032916da1142a484e6d92f4c5", "7ea011bcb5783bb4ec94822eda5cf341"];

  const subscribe = async (formData: { [x: string]: any }) => {
    const client = mailjet.apiConnect(mailjetApiKey, mailjetSecretKey);

    console.log(formData.EMAIL);

    try {
      const contact = await client.post("contact", { version: "v3" }).request({
        Email: formData.EMAIL,
      });

      console.log(contact);

      setStatus("success");
      setMessage("Thank you for subscribing!");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message);
    }
  };

  return (
    <NewsletterForm
      status={status}
      message={message}
      onValidated={(formData) => subscribe(formData)}
      isModal={isNewsModal}
      t={t}
    />
  );
};

export default Newsletter;

import React from "react";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";
import { NewsletterProps } from "./types";

const Newsletter: React.FC<NewsletterProps> = ({ isNewsModal, mailChimpUrl, t }) => {
  return (
    <MailChimpSubscribe
      url={mailChimpUrl}
      render={({ subscribe, status, message }: any) => (
        <NewsletterForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
          isModal={isNewsModal}
          t={t}
        />
      )}
    />
  );
};

export default Newsletter;

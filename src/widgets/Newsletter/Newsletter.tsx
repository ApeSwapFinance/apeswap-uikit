import React from "react";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";
import { NewsletterProps, MCSubscribeProps } from "./types";

// mailChimpUrl format -> `https://finance.us10.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}`;

const Newsletter: React.FC<NewsletterProps> = ({ isModal, mailChimpUrl, t }) => {
  return (
    <MailChimpSubscribe
      url={mailChimpUrl}
      render={({ subscribe, status, message }: MCSubscribeProps) => (
        <NewsletterForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
          isModal={isModal}
          t={t}
        />
      )}
    />
  );
};

export default Newsletter;

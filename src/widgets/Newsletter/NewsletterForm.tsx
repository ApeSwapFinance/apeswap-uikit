/** @jsxImportSource theme-ui */
import React, { useState, ChangeEvent } from "react";
import { Text } from "../../components/Text";
import { Flex } from "../../components/Flex";
import { Svg, ChevronRightIcon } from "../../components/Svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useMatchBreakpoints } from "../../hooks";
import { FormType } from "./types";
import styles, { dynamicStyles } from "./styles";
import Privacy from "./Privacy";

const NewsletterForm: React.FC<FormType> = ({ status, message, onValidated, isModal, t }) => {
  const { isMd, isLg, isXl, isXxl } = useMatchBreakpoints();
  const isMobile = !isLg && !isXl && !isXxl;
  const [subscriber, setSubscriber] = useState("");

  const onHandleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setSubscriber(value);
  };

  const handleSubmit = (evt: MouseEvent) => {
    evt.preventDefault();
    if (!(subscriber.indexOf("@") > -1)) return;
    if (subscriber.indexOf("@") > -1) {
      onValidated({
        EMAIL: subscriber,
      });
      setSubscriber("");
    }
  };

  // On route change, reset input, status and message to ""

  return (
    <Flex sx={dynamicStyles.newsletterCon({ isModal, isMobile, status })}>
      <Flex sx={dynamicStyles.bodyCon({ isModal, isMobile, isMd })}>
        <Flex sx={dynamicStyles.content({ isModal })}>
          <Flex sx={dynamicStyles.left({ isModal })}>
            <Text sx={dynamicStyles.latestText({ isModal })}>
              Get the latest news from ApeSwap directly to your{isModal && isMd && <br />} inbox.
            </Text>
            {!isModal && <Privacy t={t} />}
          </Flex>

          <Flex sx={dynamicStyles.formCon({ isModal })}>
            <Flex
              className="input-form-container"
              as="form"
              onSubmit={(e: MouseEvent) => handleSubmit(e)}
              sx={dynamicStyles.form({ isModal })}
            >
              <Flex sx={{ alignItems: "center" }}>
                <Svg icon="message" />
                <Input
                  className="input"
                  name="EMAIL"
                  onChange={onHandleChange}
                  value={subscriber}
                  placeholder={(status === "success" && message) || "example@domain.com"}
                  sx={dynamicStyles.input({ isModal, isLg, isXl, isMd, status })}
                />
              </Flex>
              <Button
                variant="text"
                className="input-btn"
                type="submit"
                formValues={[subscriber]}
                disabled={status === "sending"}
                sx={styles.submit}
              >
                {status === "sending" ? "..." : <ChevronRightIcon sx={{ width: "40px" }} />}
              </Button>
            </Flex>
            {status === "error" && (
              <Text color="error" sx={styles.status}>
                {t("Invalid email address. Make sure the format is 'email@domain.com'")}
              </Text>
            )}
          </Flex>
          {isModal && <Privacy isModal={isModal} t={t} />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewsletterForm;

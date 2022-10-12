/** @jsxImportSource theme-ui */
import React, { useState, ChangeEvent } from "react";
import { Text } from "../../components/Text";
import { Flex } from "../../components/Flex";
import { Svg, ChevronRightIcon } from "../../components/Svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TooltipBubble } from "../../components/TooltipBubble";
import { useMatchBreakpoints } from "../../hooks";
import { FormType } from "./types";
import { styles, dynamicStyles } from "./styles";

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
    if (subscriber.indexOf("@") > -1) {
      onValidated({
        EMAIL: subscriber,
      });
      setSubscriber("");
    }
  };

  return (
    <Flex
      sx={{
        marginTop: isModal && isMobile && "25px",
        height: isModal && !isMobile && "350px",
        width: ["100%", "100%", (isModal && "60%") || "100%"],
        padding: [(!isModal && "15px") || "", "", "20px"],
        alignItems: [isModal && "center", isModal && "center", isModal && "center", "center"],
        justifyContent: [(!isModal && "flex-start") || "", "", "center"],
        background: !isModal && "white2",
        flexDirection: status === "error" && "column",
      }}
    >
      <Flex
        sx={{
          width: "100%",
          alignItems: [(!isModal && "flex-start") || "", "", ""],
          justifyContent: ["", !isModal && "flex-start", !isModal && ""],
          flexDirection: ["column", (isModal && "column") || "row"],
          maxWidth: !isModal && "1200px",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            mr: [0, 0, 0, 0, "82px"],
            width: ["100%", !isModal && "40%", !isModal && "50%", !isModal && "45%"],
          }}
        >
          <Text
            sx={{
              fontWeight: 700,
              fontSize: ["16px", "16px", isModal && "25px"],
              lineHeight: ["24px", "24px", isModal && "28px"],
            }}
          >
            Get the latest news from {isModal && <br />} ApeSwap {!isModal && (isMobile || isMd) && <br />} directly to
            your {isModal && <br />} inbox.
          </Text>
          {!isModal && (
            <Flex
              sx={{
                alignSelf: "flex-start",
                marginTop: (isModal && "10px") || "5px",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <a href="https://apeswap.finance/privacy" target="_blank" rel="noopener noreferrer">
                <Text sx={styles.privacyLink}>{t("We respect your privacy")}</Text>
              </a>
              <TooltipBubble
                placement="topLeft"
                body={
                  <Text>
                    ApeSwap will only use your email address for the sole purpose of marketing newsletters. Your
                    personal information will not be shared with any third party.
                  </Text>
                }
                transformTip="translate(-8%, 0%)"
                width="200px"
              >
                <Svg icon="question" width="10px" />
              </TooltipBubble>
            </Flex>
          )}
        </Flex>

        <Flex
          className="input-form-container"
          as="form"
          onSubmit={(e: MouseEvent) => handleSubmit(e)}
          sx={{
            ...styles.form,
            width: [
              "100%",
              (!isModal && "45%") || "100%",
              (!isModal && "60%") || "100%",
              (!isModal && ((isLg && "42%") || (isXl && "42%") || (isXxl && "35%"))) || "",
            ],
            marginTop: ["10px", "", isModal && "20px"],
          }}
        >
          <Flex sx={{ alignItems: "center" }}>
            <Svg icon="message" />
            <Input
              className="input"
              name="EMAIL"
              onChange={onHandleChange}
              value={subscriber}
              placeholder={(status === "success" && message) || "example@domain.com"}
              sx={{
                border: "none",
                paddingRight: "5px",
                width: [(isModal && "190px") || "240px", (isModal && "230px") || "290px", (isModal && "270px") || ""],
                paddingLeft: "10px",
                "@media screen and (min-width: 425px) and (max-width: 768px)": {
                  width: (isModal && "230px") || (!isModal && ((isMd && "225px") || (isXl && "310px"))) || "290px",
                },
                "@media screen and (max-width: 320px)": {
                  paddingLeft: "5px",
                  width: (isModal && "140px") || "185px",
                },
                "::placeholder": {
                  opacity: (status === "success" && 0.8) || 0.5,
                  fontStyle: "italic",
                  fontSize: ["12px", "14px"],
                  lineHeight: "14px",
                  fontWeight: status === "success" && 500,
                  color: (status === "success" && "success") || "text",
                },
              }}
            />
          </Flex>
          <Button
            variant="text"
            className="input-btn"
            sx={styles.submit}
            type="submit"
            formValues={[subscriber]}
            disabled={status === "sending"}
          >
            {status === "sending" ? "..." : <ChevronRightIcon sx={{ width: "40px" }} />}
          </Button>
        </Flex>
        {isModal && (
          <Flex
            sx={{
              alignSelf: "flex-start",
              marginTop: "10px",
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            <a href="https://apeswap.finance/privacy" target="_blank" rel="noopener noreferrer">
              <Text sx={styles.privacyLink}>{t("We respect your privacy")}</Text>
            </a>
            <TooltipBubble
              placement="topLeft"
              body={
                <Text>
                  ApeSwap will only use your email address for the sole purpose of marketing newsletters. Your personal
                  information will not be shared with any third party.
                </Text>
              }
              transformTip="translate(-8%, 0%)"
              width="200px"
            >
              <Svg icon="question" width="10px" />
            </TooltipBubble>
          </Flex>
        )}
        {isModal && status === "error" && (
          <Text color="error" sx={styles.status}>
            {t(
              `${
                message.includes("email address is invalid")
                  ? "Invalid email address. Make sure the format is 'email@domain.com'"
                  : message
              }`
            )}
          </Text>
        )}
      </Flex>
      {!isModal && status === "error" && (
        <Text color="error" sx={{ ...styles.status, alignSelf: ["flex-start", "", "center"] }}>
          {t(
            `${
              message.includes("email address is invalid")
                ? "Invalid email address. Make sure the format is 'email@domain.com'"
                : message
            }`
          )}
        </Text>
      )}
    </Flex>
  );
};

export default NewsletterForm;

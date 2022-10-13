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
import { styles } from "./styles";

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

  return (
    <Flex
      sx={{
        marginTop: isModal && isMobile && "25px",
        height: isModal && !isMobile && "350px",
        width: ["100%", "100%", (isModal && "60%") || "100%"],
        // padding: [(!isModal && "15px") || "", "", "20px"],
        margin: 0,
        paddingBottom: 0,
        alignItems: [isModal && "center", isModal && "center", isModal && "center", "center"],
        justifyContent: [(!isModal && "flex-start") || "", "", "center"],
        background: !isModal && "white2",
        flexDirection: status === "error" && "column",
      }}
    >
      {/* display border -> !isModal, borderWidth -> !isModal && !isMobile && "80%" => else "100%" */}
      {/*
        320 -> 150px,
        375 -> 210px,
        425 -> 260px,
        768 -> 203px,
        1024 -> 195px,
        1440 -> 260px 
      */}
      <Flex
        sx={{
          width: (!isModal && !isMobile && "80%") || "100%",
          borderTop: !isModal && "5px solid",
          borderTopColor: "white3",
          py: !isModal && "15px",
          px: !isModal && (isMobile || isMd) && "20px",
        }}
      >
        <Flex
          sx={{
            width: ["100%", !isModal && "90%"],
            justifyContent: "space-between",
            gap: !isModal && ["10px", "20px", "50px"],
            alignItems: [(!isModal && "flex-start") || "", "", ""],
            flexDirection: ["column", (isModal && "column") || "row"],
            maxWidth: !isModal && "1200px",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              mr: [0, 0, 0, 0, "82px"],
              width: ["100%"],
            }}
          >
            <Text
              sx={{
                fontWeight: 700,
                fontSize: ["16px", "16px", isModal && "25px"],
                lineHeight: ["24px", "24px", isModal && "28px"],
              }}
            >
              Get the latest news from {isModal && (!isMobile || !isMd) && <br />} ApeSwap directly to your inbox.
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
                  width="260px"
                >
                  <Svg icon="question" width="10px" />
                </TooltipBubble>
              </Flex>
            )}
          </Flex>

          <Flex
            sx={{
              flexDirection: "column",
              width: ["100%"],
            }}
          >
            <Flex
              className="input-form-container"
              as="form"
              onSubmit={(e: MouseEvent) => handleSubmit(e)}
              sx={{
                ...styles.form,
                width: "100%",
                marginTop: [isModal && "10px", "", isModal && "20px"],
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
                    width: [
                      (isModal && "190px") || "240px",
                      (isModal && "230px") || "290px",
                      (isModal && "270px") || "",
                    ],
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
            {/* {status === "error" && ( */}
              <Text color="error" sx={{ ...styles.status, width: "100%" }}>
                {t("Invalid email address. Make sure the format is 'email@domain.com'")}
              </Text>
            {/* )} */}
          </Flex>
          {isModal && (
            <Flex
              sx={{
                alignSelf: "flex-start",
                marginTop: status === "error" && "10px",
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
                width="260px"
              >
                <Svg icon="question" width="10px" />
              </TooltipBubble>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewsletterForm;

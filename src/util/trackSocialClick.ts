import { TrackHandler } from "../widgets/Navbar";

export interface SocialClickProps {
  tracker: TrackHandler | undefined;
  socialName: string;
  position: string;
  clickUrl: string;
  chainId: number | string;
}

const trackSocialClick = (
  tracker: SocialClickProps["tracker"],
  socialName: SocialClickProps["socialName"],
  position: SocialClickProps["position"],
  clickUrl: SocialClickProps["clickUrl"],
  chainId: SocialClickProps["chainId"]
): void => {
  if (tracker !== undefined) {
    tracker({
      event: "socialClick",
      chainId,
      data: {
        position,
        clickUrl,
        socialName,
      },
    });
  } else {
    // eslint-disable-next-line no-console
    console.error("tracker not found");
  }
};

export default trackSocialClick;

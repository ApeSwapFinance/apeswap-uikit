export interface TrackProps {
  event: string;
  chain: number | undefined | string;
  data: any;
  value?: number | string;
}

export type TrackHandler = ({ ...arg }: TrackProps) => void;

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
  if (tracker) {
    tracker({
      event: "socialClick",
      chain: chainId,
      data: {
        position,
        clickUrl,
        socialName,
      },
    });
  } else {
    // eslint-disable-next-line no-console
    console.info("tracker not found");
  }
};

export default trackSocialClick;

export interface TrackProps {
  event: string;
  chain: number | string;
  data: any;
  value?: number | string;
}

export type TrackHandler = ({ event, chain, data, value }: TrackProps) => void;

export interface clickProps {
  chainId: TrackProps["chain"];
  position: string;
  tracker?: TrackHandler;
  socialName?: string;
  clickUrl?: string;
}

const trackClick = (
  tracker: clickProps["tracker"],
  event: TrackProps["event"],
  position: clickProps["position"],
  chainId: clickProps["chainId"],
  socialName?: clickProps["socialName"],
  clickUrl?: clickProps["clickUrl"]
): void => {
  if (tracker) {
    tracker({
      event,
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

export default trackClick;

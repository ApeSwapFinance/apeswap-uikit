import { TrackHandler, TrackProps } from "../../util/trackClick";

export interface RFBProps {
  mini?: boolean;
  runFiat: () => void;
  t: (text: string) => string;
  sx?: any;
  track?: TrackHandler;
  position: string;
  chainId: TrackProps["chain"];
}

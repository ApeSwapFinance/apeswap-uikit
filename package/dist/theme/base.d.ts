import { MediaQueries, Breakpoints, Spacing, FontFamily } from "./types";
export declare const breakpointMap: {
    [key: string]: number;
};
export declare const shadows: {
    level1: string;
    active: string;
    success: string;
    warning: string;
    focus: string;
    yellow: string;
    inset: string;
};
declare const _default: {
    siteWidth: number;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    fontFamily: FontFamily;
    shadows: {
        level1: string;
        active: string;
        success: string;
        warning: string;
        focus: string;
        yellow: string;
        inset: string;
    };
    radii: {
        small: string;
        default: string;
        card: string;
        circle: string;
    };
    zIndices: {
        dropdown: number;
        modal: number;
    };
};
export default _default;

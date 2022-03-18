'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var Lottie = require('lottie-react');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var Lottie__default = /*#__PURE__*/_interopDefaultLegacy(Lottie);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get__default["default"](theme, path, fallback);
    };
};

var rotate = styled.keyframes(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default["default"].svg(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors.".concat(color), color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$R, templateObject_2$h, templateObject_3$a;

var Icon$1C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getFontFamily = function (fontFamily, theme) {
    return getThemeValue("fontFamily.".concat(fontFamily), "Poppins")(theme);
};

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors.".concat(color), color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default["default"].div(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  text-align: ", ";\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  text-align: ", ";\n  ", "\n"])), getColor$1, getFontSize, function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var bold = _a.bold, _b = _a.fontWeight, fontWeight = _b === void 0 ? 400 : _b;
    return (bold ? 700 : fontWeight);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign;
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$Q;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var getColor = function (color, theme) {
    return getThemeValue("colors.".concat(color), color)(theme);
};

var sizes$2 = {
    XS: "xs",
    SM: "sm",
    MDS: "mds",
    MD: "md",
};
var variants$2 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    YELLOW: "yellow",
};

var getDisabledStyles$1 = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: ".concat(theme.colors.backgroundDisabled, ";\n      border-color: ").concat(theme.colors.backgroundDisabled, ";\n      box-shadow: none;\n      color: ").concat(theme.colors.textDisabled, ";\n      cursor: not-allowed;\n    }\n  ");
};
var removePointerEvents$1 = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp$1 = function (prop) {
    return function (_a) {
        var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.PRIMARY : _b;
        return theme.button[variant][prop];
    };
};
var getButtonHeight = function (size) {
    if (size === "sm") {
        return "28px";
    }
    if (size === "mds") {
        return "36px";
    }
    if (size === "md") {
        return "48px";
    }
    return "30px";
};
var StyledButton$3 = styled__default["default"].button(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  font-weight: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: ", ";\n  font-size: ", ";\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  font-weight: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: ", ";\n  font-size: ", ";\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp$1("background"), getButtonVariantProp$1("border"), function (_a) {
    var _b = _a.fontWeight, fontWeight = _b === void 0 ? 600 : _b;
    return fontWeight;
}, getButtonVariantProp$1("boxShadow"), function (_a) {
    var color = _a.color, theme = _a.theme;
    return (color ? getColor(color, theme) : getButtonVariantProp$1("color"));
}, function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "16px";
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return getButtonHeight(size);
}, function (_a) {
    var isMobile = _a.isMobile;
    return (isMobile ? "0 10px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp$1("backgroundHover"), getButtonVariantProp$1("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getButtonVariantProp$1("backgroundActive"), getButtonVariantProp$1("boxShadowActive"), getDisabledStyles$1, removePointerEvents$1, styledSystem.space);
StyledButton$3.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$P;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, fontFamily = _a.fontFamily, color = _a.color, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled", "fontFamily", "color"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default["default"].createElement(StyledButton$3, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled, fontFamily: fontFamily, color: color }),
        React__default["default"].isValidElement(startIcon) &&
            React__default["default"].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default["default"].isValidElement(endIcon) &&
            React__default["default"].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants$2.PRIMARY,
    size: sizes$2.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default["default"](Button)(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$O;

var Icon$1y = function (_a) {
    var color = _a.color, bgColor = _a.bgColor, props = __rest(_a, ["color", "bgColor"]);
    return (React__default["default"].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 95 95" }, props),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M13.909 13.906c18.545-18.541 48.637-18.541 67.182 0s18.545 48.578 0 67.17c-18.545 18.59-48.637 18.54-67.182 0-18.545-18.542-18.545-48.628 0-67.17z" }),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M80.141 80.126c-18.045 18.041-47.287 18.041-65.333 0-18.045-18.042-18.045-47.279 0-65.32 18.046-18.042 47.288-18.042 65.333 0 18.045 18.041 18.045 47.278 0 65.32z" }),
        React__default["default"].createElement("path", { fill: "url(#paint0_radial_3838_9907)", d: "M47.5 91.07c24.073 0 43.588-19.51 43.588-43.58 0-24.068-19.515-43.58-43.589-43.58-24.073 0-43.588 19.512-43.588 43.58 0 24.07 19.515 43.58 43.588 43.58z" }),
        React__default["default"].createElement("path", { fill: "url(#paint1_radial_3838_9907)", d: "M47.5 89.071c22.969 0 41.589-18.616 41.589-41.58 0-22.965-18.62-41.581-41.59-41.581-22.968 0-41.588 18.616-41.588 41.58 0 22.965 18.62 41.581 41.589 41.581z" }),
        React__default["default"].createElement("path", { fill: "url(#paint2_radial_3838_9907)", d: "M47.5 87.422c22.058 0 39.94-17.878 39.94-39.931 0-22.054-17.882-39.932-39.94-39.932-22.058 0-39.94 17.878-39.94 39.932 0 22.053 17.882 39.931 39.94 39.931z" }),
        React__default["default"].createElement("path", { fill: bgColor !== undefined ? bgColor : "#212121", d: "M47.5 89.071c22.969 0 41.589-18.616 41.589-41.58 0-22.965-18.62-41.581-41.59-41.581-22.968 0-41.588 18.616-41.588 41.58 0 22.965 18.62 41.581 41.589 41.581z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M49.4 47.79c-.35.25-.75.5-1.15.65-.15.05-.4-.1-.6-.15 0-.1 0-.2-.05-.3.45-.2.9-.45 1.4-.65.1 0 .3.3.4.45zM51.699 41.693c.8 0 1.399.65 1.399 1.55 0 1.1-.45 1.649-1.4 1.649-.849 0-1.349-.55-1.349-1.5-.05-.999.5-1.649 1.35-1.699zM46.75 47.84c.1.05.2.25.15.35-.05.15-.2.25-.3.4-.4-.2-.8-.35-1.15-.6-.1-.1-.15-.3-.25-.45.2-.05.4-.249.55-.199.35.15.7.35 1 .5zM30.254 64.233c1.85-1.7 4.049-2.3 6.548-2.15.45 0 .55.25.55.6v4.149c0 .55-.2.65-.7.65-1.15-.05-2.25 0-3.399 0h-3.499c-.9 0-1.35-.75-.9-1.5.35-.65.85-1.25 1.4-1.75zM60.297 62.234c2.35.4 4.199 1.6 5.448 3.648.5.8.1 1.6-.8 1.6-2.399.05-4.798 0-7.148 0-.15 0-.45-.2-.45-.3-.05-1.65 0-3.349 0-5.148 1.05.05 2 .05 2.95.2zM42.951 41.693c.75 0 1.5.8 1.5 1.6 0 .9-.7 1.599-1.6 1.599-.75 0-1.35-.7-1.35-1.55 0-.899.65-1.599 1.45-1.649z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M26.056 55.287c0 .15.05.35.15.45.15.15.4.2.6.25 1.05.25 2.149.5 3.199.8.2.05.45.15.65.2v.15c-.95.349-1.9.649-2.8.999-.4.15-1.05.25-.9.75.2.55.75.15 1.1 0 1.5-.5 2.95-1.1 4.449-1.6.2-.05.4-.15.55-.1 2 .3 3.949-.05 5.898-.5.25-.05.55 0 .8.15.9.4 1.75.85 2.6 1.3.2.1.35.4.35.6.05.899 0 1.849 0 2.748 0 .5-.2.65-.65.65-1.15.05-1.15.05-1.15 1.25v3.598c0 .45.1.6.6.6 3.799 0 7.648-.05 11.447 0 .6 0 .8-.2.8-.8-.05-1.3-.05-2.6 0-3.898 0-.6-.2-.8-.75-.7-.3.05-.55 0-.95 0 0-1.2 0-2.449.05-3.648 0-.15.35-.35.55-.45 1.85-.75 3.399-1.85 4.748-3.349 1.3-1.449 2.1-3.098 2.2-5.097.05-.7.1-1.4-.05-2.05-.15-.7.15-.999.65-1.299 1.6-1.1 2.4-3.148 1.9-5.047-.1-.45-.35-.9-.6-1.5h1.199c1.55-.05 3.1-1.45 3.3-2.998.1-1.1-.35-1.6-1.5-1.6h-6.199v-2.399c-.05-1.299 0-2.548-.15-3.848-.3-2.199-2.4-4.148-4.648-4.198-1.45-.05-2.9.25-4.3.25-1.699 0-3.398-.05-5.098-.2-1.8-.2-3.55-.35-5.149.7-1.7 1.1-2.549 2.698-2.549 4.698 0 1.499.05 3.048.1 4.547 0 .5-.3.45-.6.45h-5.548c-.3 0-.6.05-.9.15-.5.2-.75.55-.75 1.1-.05 1.749 1.5 3.348 3.3 3.398h1.199c-.05.25-.05.4-.1.55-1.25 2.599 0 5.148 1.85 6.247.2.1.35.55.3.8-.3 1.649-.1 3.198.5 4.698.449 1.199 1.099 2.299 2.049 3.198.2.2.35.4.65.75-.55.15-1 .3-1.5.4-2.45.4-4.849 0-7.248-.4-.2-.05-.4-.3-.45-.55-.2-.7-.3-1.4-.5-2.1-.05-.249-.3-.599-.45-.549-.45.05-.4.45-.3.75.15.65.3 1.35.5 2.099-.55-.15-.95-.25-1.4-.35-.2-.05-.4-.1-.65-.1-.2-.1-.4 0-.4.05zm12.646-10.495c-.8-1.5-.75-3.099.05-4.598.2-.35.45-.5.85-.5h15.346c.45 0 .7.15.9.55.8 1.5.85 3.049.05 4.548-.6 1.15-.7 2.199-.4 3.448.25 1 .35 2.1.1 3.099-.55 2.249-2.05 3.798-4.099 4.848-1.3.65-2.7.95-4.149.95-1.9.05-3.649-.45-5.248-1.5-.05-.05-.1-.15-.15-.2l.15.15c.65-.65 1.3-1.35 2.049-2.1 0 0 .1.05.25.15 2.4 1.45 5.348.85 7.148-1.249.2-.25.45-.55.1-.8-.1-.1-.45.15-.65.25-.1.05-.15.2-.25.3-1.5 1.7-4.149 2-5.998.7-.45-.3-.8-.75-1.25-1.15-.15-.1-.35-.1-.55-.15 0 .2-.1.4-.05.65 0 .15.2.25.2.4.05.15.05.4 0 .5-.5.55-1.05 1.05-1.55 1.55-.2.2-.4.2-.65-.05-1.799-1.7-2.499-3.799-1.849-6.198.3-1.35.25-2.449-.35-3.598z" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("radialGradient", { id: "paint0_radial_3838_9907", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(94.6687 0 0 94.6596 9.478 76.404)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint1_radial_3838_9907", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(80.5645 0 0 80.5486 14.853 74.615)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint2_radial_3838_9907", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(103.98 0 0 103.96 15.627 10.663)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })))));
};

var Icon$1x = function (_a) {
    var color = _a.color, bgColor = _a.bgColor, props = __rest(_a, ["color", "bgColor"]);
    return (React__default["default"].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 95 95" }, props),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M13.909 13.906c18.545-18.541 48.637-18.541 67.182 0s18.545 48.578 0 67.17c-18.545 18.59-48.637 18.54-67.182 0-18.545-18.542-18.545-48.628 0-67.17z" }),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M80.141 80.126c-18.045 18.041-47.287 18.041-65.333 0-18.045-18.042-18.045-47.279 0-65.32 18.046-18.042 47.288-18.042 65.333 0 18.045 18.041 18.045 47.278 0 65.32z" }),
        React__default["default"].createElement("path", { fill: "url(#paint0_radial_3838_9929)", d: "M47.5 91.07c24.073 0 43.588-19.51 43.588-43.58 0-24.068-19.515-43.58-43.589-43.58-24.073 0-43.588 19.512-43.588 43.58 0 24.07 19.515 43.58 43.588 43.58z" }),
        React__default["default"].createElement("path", { fill: "url(#paint1_radial_3838_9929)", d: "M47.5 89.071c22.969 0 41.589-18.616 41.589-41.58 0-22.965-18.62-41.581-41.59-41.581-22.968 0-41.588 18.616-41.588 41.58 0 22.965 18.62 41.581 41.589 41.581z" }),
        React__default["default"].createElement("path", { fill: "url(#paint2_radial_3838_9929)", d: "M47.5 87.422c22.058 0 39.94-17.878 39.94-39.931 0-22.054-17.882-39.932-39.94-39.932-22.058 0-39.94 17.878-39.94 39.932 0 22.053 17.882 39.931 39.94 39.931z" }),
        React__default["default"].createElement("path", { fill: bgColor !== undefined ? bgColor : "#212121", d: "M47.5 89.071c22.969 0 41.589-18.616 41.589-41.58 0-22.965-18.62-41.581-41.59-41.581-22.968 0-41.588 18.616-41.588 41.58 0 22.965 18.62 41.581 41.589 41.581z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M49.599 62.984H45.4V44.742c0-.8.65-1.4 1.399-1.4h1.35c.799 0 1.399.65 1.399 1.4v18.242h.05z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M49.6 56.836h-4.2l-9.647 10.346c-.25.25-.05.7.3.7h22.894c.35 0 .55-.4.3-.7l-9.648-10.346zM29.605 53.738c-1.3 5.297-.8 7.546-6.399 7.546-5.598 0-5.098-2.249-6.398-7.546-.05 0 6.398 2.849 12.797 0zM23.205 36.846c-.15 0-.3-.05-.4-.2-.3-.35-2.099-3.049-1.25-4.098.35-.45 1-.45 1.9.05.25.15.35.45.2.75-.15.25-.45.35-.75.2-.25-.15-.45-.2-.55-.25 0 .55.7 1.998 1.25 2.648.2.25.15.55-.05.75-.1.1-.2.15-.35.15z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M23.206 38.895c-.25 0-.45-.15-.5-.4-.1-.3.1-.6.35-.7.1-.05.25-.1.25-.15.05-.15-.05-.5-.5-1-.2-.2-.2-.549.05-.749.2-.2.55-.2.75.05.35.4.95 1.25.75 2.05-.1.3-.35.699-1 .899h-.15zM71.793 42.493c-.05 0-.15 0-.2-.05-.65-.25-1.099-.75-1.299-1.4-.35-1.099.05-2.548 1.05-4.097.15-.25.5-.3.75-.15s.3.5.15.75c-.8 1.199-1.15 2.398-.9 3.148.1.35.3.55.65.7.3.1.4.45.3.7-.1.25-.3.4-.5.4z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M71.794 37.845c-.1 0-.2 0-.25-.05-.25-.15-.35-.5-.2-.75.5-.9.9-1.999.9-2.398-.05 0-.15.05-.25.05-.3.1-.6-.05-.7-.3-.1-.3.05-.6.3-.7.85-.3 1.25-.1 1.45.15.649.8-.2 2.649-.8 3.698-.05.2-.25.3-.45.3zM69.844 34.647l-2.2-1.45 2.95-4.298c.3-.45.9-.55 1.35-.25l.55.4c.45.3.55.9.25 1.35l-2.9 4.248z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M69.844 34.647l-1.1-.75 3.499-5.098.3.2c.45.3.55.9.25 1.35l-2.95 4.298z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M70.494 37.795c-1.3 2.15-2.9 4.098-4.799 5.898-10.797 9.945-27.642 9.245-37.59-1.55-1.8-1.899-3.199-4.048-4.299-6.247-.1-.15-.7-1.749-.65-3.348.05-.8.2-1.6.7-2.2.05-.1.15-.15.2-.2.05-.05.15-.1.2-.15.6-.299 1.5-.1 2.5.3 2.149.95 4.748 3.05 5.898 3.849.3.2.55.4.85.55l.05.05c.3.2.65.4.95.6l.3.15c.1.05.15.1.25.15.1.05.15.1.25.15.15.05.2.15.35.2.25.1.45.249.65.349.149.05.249.15.399.2.35.2.75.35 1.1.5.1.05.2.1.35.15.1.05.25.1.35.15.35.15.7.25 1.05.35h.05l.1.05c.499.15 1.049.35 1.549.45.5.149 1 .249 1.5.349.05 0 .1.05.2.05h.05c.35.05.65.1.999.15h.25c.95.15 1.9.25 2.9.25H48.65c.3 0 .6 0 .9-.05H50c.2 0 .45-.05.7-.05.1 0 .2 0 .25-.05.3-.05.6-.05.949-.15 1.35-.2 2.75-.5 4.099-.95.05 0 .05 0 .1-.05.5-.15 1-.3 1.5-.55.25-.1.45-.15.7-.25.15-.1.4-.15.55-.25.05 0 .1-.05.1-.05.399-.2.799-.349 1.199-.599a25.012 25.012 0 005.948-4.148c.2-.2.4-.35.55-.55 0 0 .05-.05.15-.1.05 0 .05-.05.1-.05 0 0 .05 0 .05-.05 0 0 .05 0 .05-.05.45-.25 1.15-.45 1.95-.35.6.1 1.25.4 1.899 1.05.6.6.8 1.45.75 2.299.1 1.5-.6 2.899-1.1 3.748z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M71.044 31.898c-1.2 2.099-2.65 4.048-4.449 5.797-.25.25-.5.45-.7.7-10.797 9.945-27.642 9.246-37.59-1.55-1.5-1.599-2.7-3.348-3.749-5.147-.15-.3-.3-.55-.45-.8-.1-.15-.15-.35-.25-.5.05-.1.15-.15.2-.2.05-.05.15-.1.2-.15.6-.3 1.5-.1 2.5.3 2.149.95 4.748 3.05 5.898 3.849.3.2.55.4.85.55l.05.05c.3.2.65.4.95.6 0 0 .05.05.1.05.05.05.15.1.2.1.1.05.15.1.25.15.1.049.15.099.25.149.15.05.2.15.35.2.25.1.449.25.649.35.15.05.25.15.4.2.25.1.45.2.7.3.15.05.25.1.4.2.1.05.25.1.35.15.1.05.25.1.35.15.35.15.7.25 1.05.35h.05l.1.05c.099.05.199.05.299.099.4.15.85.25 1.3.35.45.1.85.2 1.3.3.05 0 .1.05.2.05.05 0 .1.05.2.05h.05c.2.05.4.05.599.1.15 0 .25.05.4.1h.25c.2 0 .35.05.55.05.15 0 .25.05.4.05h.2c.2 0 .4 0 .55.05.2 0 .35.05.55 0 .2 0 .4 0 .65.05H48.7c.3 0 .6 0 .9-.05h.45c.2 0 .45-.05.7-.05.1 0 .2 0 .25-.05.1 0 .199 0 .249-.05.25-.05.45-.05.65-.1s.35-.05.55-.1c.25-.05.4-.05.65-.1.1 0 .2-.05.35-.05.1-.05.2-.05.25-.05.2-.05.4-.1.6-.1l.6-.15c.149-.05.299-.1.449-.1.2-.05.45-.15.65-.2.05 0 .05 0 .1-.05.2-.05.4-.15.6-.2.15-.05.25-.1.4-.15.15-.05.35-.15.5-.2l.45-.15c.1-.05.15-.1.25-.1.15-.1.4-.15.549-.25.05 0 .1-.05.1-.05.15-.05.3-.15.45-.2.15-.05.25-.1.35-.15.15-.05.25-.1.35-.2.15-.1.35-.2.5-.299l.3-.15c.25-.1.45-.25.65-.4.15-.1.3-.15.45-.25.2-.15.45-.25.65-.4.149-.1.299-.2.399-.3.2-.15.4-.3.65-.45.15-.1.25-.2.4-.299.25-.15.45-.35.65-.5.1-.1.15-.15.25-.2l.1-.1c.3-.25.65-.55.95-.8.2-.2.399-.35.549-.549 0 0 .05-.05.15-.1.05 0 .05-.05.1-.05 0 0 .05 0 .05-.05 0 0 .05 0 .05-.05.45-.25 1.15-.45 1.95-.35.85.05 1.499.35 2.149 1z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M26.855 30.299c-1.6.15-2.849.8-3.649 2.199.05-.8.2-1.6.7-2.2.05-.099.15-.149.2-.199.05-.05.15-.1.2-.15.7-.25 1.6-.05 2.549.35zM47.5 46.342a.95.95 0 100-1.9.95.95 0 000 1.9z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M23.206 48.29c-.3 0-.55-.25-.55-.55V33.098c0-.3.2-.5.5-.55 2.75-.2 3.65-2.098 3.7-2.148.1-.25.45-.4.7-.25.25.1.4.45.25.7-.05.1-1.05 2.298-4.1 2.748v14.194c.05.25-.2.5-.5.5zM71.794 48.29c-.3 0-.55-.25-.55-.55V34.648c-4-1-4.899-2.8-4.949-2.899-.15-.25 0-.6.25-.75.25-.15.6 0 .7.25 0 .05.9 1.6 4.649 2.4.25.049.45.299.45.549V47.74c0 .3-.25.55-.55.55z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M69.344 35.246c-2.849 0-4.548-1.949-4.598-1.949-.2-.25-.15-.55.05-.75.25-.2.55-.15.75.05.1.1 2.299 2.6 5.998 1.15.3-.1.6.05.7.3.1.3-.05.6-.3.7-.9.35-1.8.5-2.6.5zM48.85 61.384a.35.35 0 100-.7.35.35 0 000 .7zM48.85 60.085a.35.35 0 100-.7.35.35 0 000 .7zM48.85 58.835a.35.35 0 100-.7.35.35 0 000 .7zM46.15 61.384a.35.35 0 100-.7.35.35 0 000 .7zM46.15 60.085a.35.35 0 100-.7.35.35 0 000 .7zM46.15 58.835a.35.35 0 100-.7.35.35 0 000 .7zM25.856 34.247c-.95 0-1.95-.2-2.9-.7-.25-.15-.35-.45-.25-.75.15-.25.45-.35.75-.25 2.2 1.15 4.85.45 5.899-.85.2-.249.55-.249.75-.1.2.15.25.55.1.75-.9 1.15-2.55 1.9-4.35 1.9z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M71.794 34.797s.55-.25.55.05.6-.45.6-.45l-.85-.4M72.243 42.593h-.15c-.05 0-.25-.1-.8-.3-.4-.2-1.149-.7-1.149-2.099 0-.3.25-.55.55-.55.3 0 .55.25.55.55 0 .4.1.95.45 1.1.5.2.7.25.7.25.299.1.449.4.349.7-.05.2-.25.35-.5.35zM23.206 55.637c-.3 0-.55-.25-.55-.55 0-.3.25-.55.55-.55 2.5 0 4.3-.6 5.2-.95l-5.55-5.447c-.2-.2-.2-.55 0-.75.2-.2.55-.2.75 0l6.099 5.998c.1.1.2.3.15.45 0 .15-.1.3-.25.4-.1 0-2.4 1.399-6.399 1.399z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M23.206 55.637c-3.999 0-6.298-1.4-6.398-1.45-.15-.1-.25-.25-.25-.4 0-.149.05-.349.15-.449l6.099-5.997c.2-.2.55-.2.75 0 .2.2.2.55 0 .75l-5.55 5.497c.9.4 2.7.95 5.2.95.3 0 .55.25.55.55-.05.3-.25.549-.55.549zM65.395 53.738c1.3 5.297.8 7.546 6.399 7.546 5.598 0 5.098-2.249 6.398-7.546 0 0-6.398 2.849-12.797 0z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M71.794 55.637c-4 0-6.299-1.4-6.398-1.45-.15-.1-.25-.25-.25-.4 0-.149.05-.349.15-.449l6.098-5.997c.2-.2.55-.2.75 0 .2.2.2.55 0 .75l-5.549 5.497c.9.4 2.7.95 5.199.95.3 0 .55.25.55.55 0 .3-.25.549-.55.549z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M71.794 55.637c-.3 0-.55-.25-.55-.55 0-.3.25-.55.55-.55 2.5 0 4.299-.6 5.198-.95l-5.548-5.447c-.2-.2-.2-.55 0-.75.2-.2.55-.2.75 0l6.098 5.998c.1.1.2.3.15.45 0 .15-.1.3-.25.4-.1 0-2.4 1.399-6.398 1.399zM22.557 33.397l.5.25.4-1-.4-.2c-.15-.1-.55.55-.5.95z" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("radialGradient", { id: "paint0_radial_3838_9929", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(94.6687 0 0 94.6596 9.47 76.404)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint1_radial_3838_9929", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(80.5645 0 0 80.5486 14.843 74.615)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint2_radial_3838_9929", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(103.98 0 0 103.96 15.617 10.663)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })))));
};

var Icon$1w = function (_a) {
    var color = _a.color, bgColor = _a.bgColor, props = __rest(_a, ["color", "bgColor"]);
    return (React__default["default"].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 95 95" }, props),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M13.909 13.906c18.545-18.541 48.637-18.541 67.182 0s18.545 48.578 0 67.17c-18.545 18.59-48.637 18.54-67.182 0-18.545-18.542-18.545-48.628 0-67.17z" }),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M80.141 80.126c-18.045 18.041-47.287 18.041-65.333 0-18.045-18.042-18.045-47.279 0-65.32 18.046-18.042 47.288-18.042 65.333 0 18.045 18.041 18.045 47.278 0 65.32z" }),
        React__default["default"].createElement("path", { fill: "url(#paint0_radial_3838_9983)", d: "M47.45 91.07c24.072 0 43.588-19.51 43.588-43.58 0-24.068-19.516-43.58-43.589-43.58S3.861 23.423 3.861 47.49c0 24.07 19.515 43.58 43.588 43.58z" }),
        React__default["default"].createElement("path", { fill: "url(#paint1_radial_3838_9983)", d: "M47.45 89.071c22.969 0 41.589-18.616 41.589-41.58 0-22.965-18.62-41.581-41.59-41.581-22.968 0-41.588 18.616-41.588 41.58 0 22.965 18.62 41.581 41.589 41.581z" }),
        React__default["default"].createElement("path", { fill: "url(#paint2_radial_3838_9983)", d: "M47.45 87.422c22.058 0 39.94-17.878 39.94-39.931 0-22.054-17.882-39.932-39.94-39.932-22.058 0-39.94 17.878-39.94 39.932 0 22.053 17.882 39.931 39.94 39.931z" }),
        React__default["default"].createElement("path", { fill: bgColor !== undefined ? bgColor : "#212121", d: "M47.45 89.071c22.969 0 41.589-18.616 41.589-41.58 0-22.965-18.62-41.581-41.59-41.581-22.968 0-41.588 18.616-41.588 41.58 0 22.965 18.62 41.581 41.589 41.581z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M45.05 44.592c.75.3 1.55.55 2.4.8.85-.3 1.7-.55 2.55-.85.15-.05.2-.35.3-.55-.2 0-.45-.15-.6-.05-1.45.75-2.85.8-4.3 0-.15-.1-.45.05-.7.05.1.25.2.5.35.6zM27.855 35.246c1.45-.3 2.9-.65 4.3-.95.199-.05.499-.2.599-.4.35-.749.65-1.549 1-2.448-2.25.5-4.45.95-6.649 1.5-.7.149-1 .849-.8 1.498.25.65.8 1 1.55.8zM49.3 38.895c-.5.2-.85.4-1.2.6-.05 0 .05.4.1.45.3.099.95-.45 1.1-1.05zM67.595 35.346c.75-.2 1.2-.85 1-1.5-.2-.699-.8-1.049-1.65-.899-1.45.3-2.9.6-4.299.9-.2.05-.45.25-.45.4-.05.7 0 1.45 0 2.299 1.85-.45 3.65-.8 5.399-1.2zM46.95 39.794c.05-.05.1-.25.05-.3-.35-.25-.75-.6-1.25-.35-.05.1-.05.15-.1.25.35.2.65.35 1 .55.05 0 .2-.05.3-.15zM38.852 62.284c.2-.2.55-.35.7-.55.2-.2.4-.5.4-.8.05-.85-.05-1.749 0-2.599 0-.55-.2-.95-.5-1.399-.75-1.05-1.45-2.149-1.95-3.298-.3-.75-.65-1.35-1.249-1.85-1.45-1.15-1.75-2.848-.95-4.547.2-.45.45-.85.6-1.35.1-.3.1-.7-.05-.95-.75-1.449-1.1-2.998-.95-4.597.05-.65-.15-1.1-.5-1.25-.85.2-1.55.35-2.199.5-1.65.35-3.3.7-4.899 1.1-.8.2-1.15.9-.95 1.549.25.75.75 1 1.6.8.9-.2 1.8-.45 2.7-.7.35-.1.75-.1 1.25-.2-.1.35-.2.55-.25.75-.4 1.399-.9 2.748-1.25 4.148-.15.6-.4.8-.95.95-.8.199-1.65.399-2.45.649-.7.25-.95.85-.7 1.5.25.699.75.949 1.5.799.5-.1.95-.25 1.4-.4.75-.2.8-.15.9.65.2 1.2.4 2.399.65 3.598.05.25.05.5.1.7-1.25.35-2.45.6-3.65.95-.8.25-1.15.849-.95 1.549.2.75.8 1.05 1.65.8 1.1-.25 2.25-.5 3.35-.8.6-.2.75.05 1.049.45.75 1.099 1.6 2.198 2.4 3.298.25.3.5.6.8.95-.2.1-.25.15-.3.15-.25.05-.45.05-.7.05-2.45.15-4.85.649-7.199 1.349-.85.25-1.2.9-.95 1.599.25.75.75.95 1.7.8 2.25-.45 4.499-.85 6.748-1.25.45-.05.7-.15.85-.65.15-.65.65-1.249 1.3-1.349.85-.05 1.35-.5 1.9-1.1z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M36.053 38.594c.2.15.45.55.4.75-.5 3.399.7 6.047 3.4 8.096 2.548 1.95 5.498 2.65 8.697 2.4 2.45-.2 4.649-.95 6.598-2.45 2.5-1.949 3.8-4.498 3.3-7.696-.05-.5 0-.75.4-1.05 1.649-1.199 2.248-2.798 1.749-4.797-.3-1.3-1.3-2.1-2.65-2.05-.6.05-.85-.15-1.1-.7-1.199-2.598-2.949-4.647-5.598-5.846-.8-.4-1.45-.75-1.3-1.75 0-.05-.05-.05-.1-.1-.45.25-.9.55-1.4.8-.449.25-.799.2-.899-.45-.05-.3-.15-.6-.25-.95-1 .2-1.8.65-2.35 1.45-.2.3-.5.55-.849.7-3 1.25-4.999 3.448-6.298 6.347-.2.45-.45.55-.9.5-1.35-.1-2.3.65-2.65 1.899-.5 1.849.15 3.748 1.8 4.897zm3.2-5.947c.55-.1.949-.3 1.399-.7 1.4-1.199 3.1-1.599 4.799-.85 1.4.6 2.649.65 4.099 0 2.049-.899 4.448-.05 5.598 1.8.15.2.2.45.35.8h-1.6c-1.25 0-2.549 0-3.799.05-1.05 0-1.55.55-1.65 1.599 0 .3-.05.55-.1.95-.499 0-.999.05-1.449-.05-.15-.05-.4-.35-.4-.6-.15-1.5-.55-1.9-2.049-1.9h-4.549c-1.1 0-1.6.55-1.65 1.65-.05 2.499 1.2 4.048 3.6 4.548 1.45.3 3.149-.45 4.049-1.85.3-.5.65-.699 1.2-.599h.4c.849-.1 1.449.1 1.949.9.8 1.299 2.149 1.699 3.599 1.549 1.6-.15 2.849-1 3.399-2.549.25-.7.65-.75 1.35-.55-.2 1.5-1 2.55-2.15 3.349-.4.25-.5.55-.45 1 .25 2.548-1 4.297-2.95 5.647-3.148 2.199-8.197 1.849-10.996-1.35-1.1-1.25-1.65-2.699-1.4-4.398.05-.4-.05-.65-.4-.85-1.75-1.149-2.5-2.798-2.45-4.897.05-1.4.95-2.499 2.25-2.699zM64.645 52.238c.05-.25.4-.5.65-.6.7-.2 1.45-.35 2.15-.55.95-.249 1.35-.799 1.15-1.498-.2-.8-.8-1.1-1.75-.9-.5.1-1 .2-1.5.35-.5.15-.6 0-.7-.45-.25-1.3-.5-2.599-.8-3.898-.15-.55 0-.7.5-.8 1.05-.2 2.1-.45 3.15-.75.35-.1.8-.4.95-.7.15-.349.05-.849-.1-1.248-.25-.55-.8-.6-1.35-.45-1.25.25-2.5.55-3.749.85-.45.1-.7-.05-.9-.45l-1.5-2.25c-.65.35-.9.8-.85 1.5.1 1.25.05 2.549-.6 3.698-.549 1-.349 1.85.15 2.749 1.2 2.199.7 3.948-1.299 5.447-.3.2-.55.55-.7.9-.5 1.4-1.15 2.699-2.199 3.798-.2.2-.3.55-.35.8-.05 1.15-.05 2.299 0 3.448 0 .15.1.4.25.5.5.45 1 .85 1.5 1.25s1.45.55 1.8.2c.649-.65 1.399-1.25 1.899-1.95.65-.9 1.45-1.25 2.499-1.4 1.55-.199 3.05-.599 4.599-.949.75-.2 1.1-.85.95-1.499-.2-.7-.8-1.05-1.6-.85-.55.15-1.15.3-1.7.4-.65.15-1.35.25-2.099.4.35-.95.65-1.75.9-2.599.35-.8.45-1.699.65-2.499zM66.995 64.383c-1.4.3-2.8.6-4.199.85-.85.15-1.75.2-2.65.3-.2.05-.5.249-.55.399-.299 1-.999 1.6-1.799 2.249.6-.05 1.15-.1 1.75-.15 2.75-.1 5.448-.55 8.098-1.3.35-.1.8-.4.9-.7.1-.399.05-.899-.15-1.299-.3-.5-.9-.45-1.4-.35z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M57.947 65.032c-.15-.2-.65-.15-1-.15-.1 0-.25.1-.45.25-.6-1.349-1.649-2.099-2.949-2.648-.1-.05-.15-.4-.15-.6.05-.5.2-.95.2-1.45 0-1.898.05-3.748 0-5.647 0-.75.25-1.15.85-1.55 1.1-.749 2.15-1.498 3.2-2.298.55-.4.95-.9 1.1-1.65.149-.999-.4-1.748-.8-2.598-.3.3-.5.6-.8.85-.35.3-.45.5-.15.95.15.199.1.749-.1.849-.95.75-1.95 1.449-2.95 2.149-.05.05-.15 0-.35 0v-1.5c-4.048 1.85-8.097 1.7-12.146.15-.05.55-.1.95-.15 1.55-1.15-.85-2.15-1.55-3.15-2.35-.15-.1-.2-.5-.1-.649.3-.5.15-.8-.25-1.15-.25-.2-.4-.45-.65-.75-1.349 2.05-1.149 3.15.7 4.449 1 .7 1.95 1.45 3 2.099.45.3.6.65.6 1.2 0 1.799-.05 3.548 0 5.347 0 .6.05 1.2.2 1.799.15.5.05.7-.4.85-1.05.35-1.85 1-2.25 2.049-.05.2-.2.35-.35.55-.2-.1-.35-.25-.5-.3-.25-.05-.6-.1-.75 0-.2.2-.5.7-.4.75.45.499.9 1.049 1.45 1.399.45.3.9-.05 1.2-.45.35-.5.65-1 .95-1.55.6-1.049 1.95-1.349 2.999-.8.6.3 1.3.55 2 .6 1.15.1 2.349 0 3.499.05 1 0 1.9-.25 2.699-.8.2-.149.5-.199.7-.149 1.1.4 2.1.85 2.549 2.05.25.599.65 1.248 1.35 1.099.6-.1 1.15-.6 1.6-1 .15-.15.1-.8-.05-1zM52 57.337v3.099c0 1.599-1.25 2.898-2.85 2.948-1 .05-1.999 0-2.999 0-1.7 0-2.999-1.2-3.049-2.899-.05-2.099-.05-4.198 0-6.297 0-1 .7-1.499 1.7-1.249 1.85.5 3.699.55 5.548.05 1.05-.3 1.8.4 1.7 1.4-.1.899-.05 1.898-.05 2.948z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M51.699 65.732c-.45.2-.9.4-1.4.4-1.55.1-3.149.2-4.698.1-.85-.05-1.7-.35-2.45-.7-.85-.35-1.2-.25-1.45.75 3.95 1.299 7.849 1.349 11.847-.1-.75-.8-1-.85-1.849-.45z" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("radialGradient", { id: "paint0_radial_3838_9983", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(94.6687 0 0 94.6596 9.443 76.404)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint1_radial_3838_9983", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(80.5645 0 0 80.5486 14.812 74.615)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint2_radial_3838_9983", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(103.98 0 0 103.96 15.586 10.663)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })))));
};

var Icon$1v = function (_a) {
    var color = _a.color, bgColor = _a.bgColor, props = __rest(_a, ["color", "bgColor"]);
    return (React__default["default"].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 95 95" }, props),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M13.909 13.909c18.545-18.545 48.637-18.545 67.182 0s18.545 48.587 0 67.182c-18.545 18.545-48.637 18.545-67.182 0s-18.545-48.637 0-67.182z" }),
        React__default["default"].createElement("path", { fill: "#A16552", d: "M80.141 80.142c-18.045 18.045-47.287 18.045-65.332 0-18.046-18.046-18.046-47.288 0-65.333 18.045-18.045 47.287-18.045 65.332 0 18.046 18.045 18.046 47.287 0 65.333z" }),
        React__default["default"].createElement("path", { fill: "url(#paint0_radial_3838_10015)", d: "M47.5 91.089c24.073 0 43.588-19.516 43.588-43.589S71.573 3.912 47.5 3.912 3.91 23.427 3.91 47.5 23.427 91.09 47.5 91.09z" }),
        React__default["default"].createElement("path", { fill: "url(#paint1_radial_3838_10015)", d: "M47.5 89.09c22.969 0 41.589-18.62 41.589-41.59 0-22.969-18.62-41.589-41.589-41.589-22.969 0-41.589 18.62-41.589 41.59 0 22.968 18.62 41.588 41.589 41.588z" }),
        React__default["default"].createElement("path", { fill: "url(#paint2_radial_3838_10015)", d: "M47.5 87.44c22.058 0 39.94-17.882 39.94-39.94 0-22.058-17.882-39.94-39.94-39.94-22.058 0-39.94 17.882-39.94 39.94 0 22.058 17.882 39.94 39.94 39.94z" }),
        React__default["default"].createElement("path", { fill: bgColor !== undefined ? bgColor : "#212121", d: "M47.5 89.09c22.969 0 41.589-18.62 41.589-41.59 0-22.969-18.62-41.589-41.589-41.589-22.969 0-41.589 18.62-41.589 41.59 0 22.968 18.62 41.588 41.589 41.588z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M36.703 58.097c-1.65-1.6-3.25-2.15-4.7-1.65-3.898 1.35-5.098 9.848-5.198 10.848-.05.25.1.5.3.65.15.2.45.3.7.3.95-.1 9.498-1.3 10.847-5.2.5-1.499-.05-3.148-1.75-4.848-.1 0-.15-.05-.2-.1z" }),
        React__default["default"].createElement("path", { fill: color !== undefined ? color : "#FFF", d: "M67.395 26.755c-10.198 0-19.695 8.348-25.893 15.446-13.397.1-14.397 12.697-14.397 12.797 0 .3.1.55.35.75.15.1.35.15.5.15.1 0 .2 0 .3-.05l4.749-1.8c.95-.35 2.05-.15 2.749.6l4.549 4.549c.7.7.95 1.8.6 2.75l-1.8 4.748a.9.9 0 00.1.8c.15.2.4.35.7.35h.05c.15 0 12.697-1 12.797-14.397 7.098-6.198 15.445-15.696 15.445-25.893.05-.4-.3-.8-.8-.8zM54.548 44.101c-2 0-3.599-1.6-3.599-3.6 0-1.999 1.6-3.598 3.6-3.598 1.998 0 3.598 1.6 3.598 3.599 0 2-1.6 3.599-3.599 3.599z" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("radialGradient", { id: "paint0_radial_3838_10015", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(94.6686 0 0 94.6783 9.458 76.42)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint1_radial_3838_10015", cx: "0", cy: "0", r: "1", gradientTransform: "translate(14.824 74.63) scale(80.5644)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })),
            React__default["default"].createElement("radialGradient", { id: "paint2_radial_3838_10015", cx: "0", cy: "0", r: "1", gradientTransform: "translate(15.597 10.665) scale(103.98)", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FFE988" }),
                React__default["default"].createElement("stop", { offset: "0.25", stopColor: "#BA801E" }),
                React__default["default"].createElement("stop", { offset: "0.5", stopColor: "#FBEC83" }),
                React__default["default"].createElement("stop", { offset: "0.75", stopColor: "#BA801F" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFE97F" })))));
};

var Icon$1u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 372 342" }, props),
        React__default["default"].createElement("path", { d: "M333.199 220.98c-.578-4.059-1.735-7.538-2.892-11.597-6.941-24.933-1.735-51.026-9.254-75.96v-.58c-13.303-48.127-52.055-91.035-98.326-106.691l-.578-18.555-23.136 13.916c-2.892-.58-5.205-.58-8.097-.58-.579-3.479-3.471-16.235-4.049-19.135-20.822-1.16-36.438 20.875-37.017 24.934-46.849 15.656-85.6 58.564-98.904 106.691-6.94 24.934-1.735 51.027-8.676 75.96-2.892 11.017-5.205 21.454-5.205 33.051-1.157 70.741 76.925 123.507 147.489 121.767 90.806 1.16 164.84-64.362 148.645-143.221z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default["default"].createElement("path", { d: "M39.379 219.82c-8.676-2.899-17.352-8.698-25.45-19.135-20.821-26.093-13.88-67.842 11.568-77.699 11.568-4.639 20.822-2.319 27.184 1.16.579 0 .579.58 1.157.58M318.161 124.726c6.94-4.059 16.194-6.379 28.341-1.74 25.449 9.857 32.389 51.606 11.567 77.699-8.097 10.437-17.351 16.236-25.449 19.135M290.398 191.408c3.471-6.958 5.206-15.076 5.206-23.194 0-31.892-27.184-57.985-60.731-57.985-11.567 0-21.978 2.9-31.233 8.118-10.989 6.379-24.87 6.379-35.86 0-9.254-5.218-19.665-8.118-31.233-8.118-33.546 0-60.73 26.093-60.73 57.985 0 8.118 1.735 16.236 5.205 23.194 1.157 2.319 2.314 4.638 4.05 6.958 5.783 9.277 7.518 20.874 4.048 31.311-2.892 8.118-5.206 16.816-5.206 23.194 0 48.127 45.693 87.557 101.796 87.557 56.104 0 101.796-38.85 101.796-87.557 0-6.378-2.313-15.656-5.205-23.194-3.47-10.437-1.735-22.034 4.049-31.311 1.735-2.32 3.47-4.639 4.048-6.958z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default["default"].createElement("path", { d: "M134.234 263.308c-3.47 0-6.362 2.9-5.783 6.379 3.47 26.093 28.34 45.807 57.838 45.807s54.369-19.714 57.839-45.807c.578-3.479-2.314-6.379-5.784-6.379h-104.11z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default["default"].createElement("path", { d: "M152.743 306.217c9.254 5.798 20.822 9.857 33.547 9.857 12.724 0 24.292-3.479 33.546-9.857-4.049-14.496-17.93-11.017-33.546-11.017-16.195 0-29.498-3.479-33.547 11.017z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default["default"].createElement("path", { d: "M181.083 229.098c-1.157 2.319-4.049 3.479-6.362 2.319l-11.568-5.219c-2.313-1.159-3.47-4.059-2.313-6.378 1.156-2.319 4.048-3.479 6.362-2.319l11.568 5.218c2.313 1.16 3.47 4.059 2.313 6.379zM191.493 229.098c1.157 2.319 4.049 3.479 6.363 2.319l11.567-5.219c2.314-1.159 3.471-4.059 2.314-6.378s-4.049-3.479-6.362-2.319l-11.568 5.218c-2.314 1.16-3.47 4.059-2.314 6.379z", fill: "#fff" }),
        React__default["default"].createElement("path", { d: "M133.655 191.408c-9.832 0-17.351-7.538-17.351-16.816v-5.798c0-9.278 8.097-16.816 17.351-16.816 9.833 0 17.352 7.538 17.352 16.816v5.798c0 9.278-7.519 16.816-17.352 16.816zM238.343 191.408c-9.832 0-17.351-7.538-17.351-16.816v-5.798c0-9.278 8.097-16.816 17.351-16.816 9.833 0 17.352 7.538 17.352 16.816v5.798c0 9.278-7.519 16.816-17.352 16.816z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icon$1s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 14 12" }, props),
        React__default["default"].createElement("path", { d: "M5.6805 11.5692C5.61283 11.5033 5.3235 11.2544 5.0855 11.0225C3.58867 9.66324 1.13867 6.11721 0.390834 4.26122C0.270667 3.97936 0.0163335 3.26674 -1.11582e-07 2.886C-9.56342e-08 2.52117 0.0840005 2.17338 0.254334 1.84151C0.492334 1.42781 0.866834 1.09594 1.309 0.914089C1.61583 0.797024 2.534 0.615176 2.55033 0.615176C3.55483 0.433329 5.187 0.333313 6.99067 0.333313C8.70917 0.333313 10.2748 0.433329 11.2945 0.582217C11.3108 0.599265 12.4518 0.781113 12.8427 0.980009C13.5567 1.34484 14 2.05746 14 2.82008L14 2.886C13.9825 3.38267 13.5392 4.42716 13.5228 4.42716C12.7738 6.18313 10.444 9.64733 8.89583 11.0396C8.89583 11.0396 8.498 11.4317 8.2495 11.6022C7.8925 11.8681 7.45033 12 7.00817 12C6.51467 12 6.055 11.8511 5.6805 11.5692Z" })));
};

var Icon$1p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 14 12" }, props),
        React__default["default"].createElement("path", { d: "M8.3195 0.764085C8.38717 0.830005 8.6765 1.07891 8.9145 1.31076C10.4113 2.67008 12.8613 6.21611 13.6092 8.07209C13.7293 8.35395 13.9837 9.06657 14 9.44731C14 9.81214 13.916 10.1599 13.7457 10.4918C13.5077 10.9055 13.1332 11.2374 12.691 11.4192C12.3842 11.5363 11.466 11.7181 11.4497 11.7181C10.4452 11.9 8.813 12 7.00933 12C5.29083 12 3.72517 11.9 2.7055 11.7511C2.68917 11.734 1.54817 11.5522 1.15733 11.3533C0.443333 10.9885 2.05602e-08 10.2759 2.96544e-08 9.51323L3.04405e-08 9.44731C0.0175 8.95064 0.460833 7.90615 0.477167 7.90615C1.22617 6.15019 3.556 2.68599 5.10417 1.29372C5.10417 1.29372 5.502 0.901607 5.7505 0.731124C6.1075 0.465172 6.54967 0.333332 6.99183 0.333332C7.48533 0.333332 7.945 0.482221 8.3195 0.764085Z" })));
};

var Icon$1n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$1l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 94 100" }, props),
        React__default["default"].createElement("path", { d: "M82.142 70.874l-2.063-4.259 8.415-4.068c.865-.42 1.915-.04 2.335.823l.527 1.118c.419.864.036 1.914-.83 2.335l-8.384 4.05z", fill: "#AC752C" }),
        React__default["default"].createElement("path", { d: "M82.142 70.874l-1.031-2.13 10.026-4.84.278.55c.42.863.036 1.914-.829 2.334l-8.444 4.086z", fill: "#7D551F" }),
        React__default["default"].createElement("path", { d: "M80.394 76.345a47.516 47.516 0 01-12.74 4.868C41.847 87.03 16.277 70.91 10.517 45.17c-1.023-4.582-1.371-9.16-1.081-13.592.041-.34.476-3.356 2.006-5.779.756-1.226 1.784-2.254 3.121-2.75l.03-.017c.165-.056.301-.095.454-.104.153-.01.306-.019.476.002 1.232.078 2.447 1.154 3.583 2.71 2.501 3.373 4.599 8.994 5.745 11.254l.018.03c.248.567.526 1.118.804 1.668l.052.089c.312.61.607 1.19.95 1.781l.307.534.274.473a1753.829 1753.829 0 01.615 1.067c.223.385.491.782.744 1.15.136.237.286.427.452.647a40.07 40.07 0 001.268 1.717c.15.19.282.35.414.51a40.458 40.458 0 001.732 2.04c.017.031.052.09.098.103l.116.13a68.804 68.804 0 002.012 2.117c.653.65 1.335 1.283 2.03 1.869.08.072.178.173.26.245l.098.1c.468.402.92.773 1.418 1.156.064.042.081.072.145.114l.192.126a49.915 49.915 0 004.306 3.004c.273.198.558.349.86.53.285.151.54.32.826.47a.26.26 0 01.128.085c.157.067.302.18.46.248.46.248.919.496 1.408.727.239.138.49.23.728.37.379.175.758.352 1.136.528.158.067.298.105.426.189.49.23 1.038.427 1.557.64a48.4 48.4 0 007.175 2.216l.14.038c.949.203 1.88.376 2.84.532.434.066.868.131 1.33.18.34.04.728.093 1.068.134.076-.005.123.008.2.003.786.06 1.542.136 2.358.179 4.25.232 8.633-.127 13.01-1.114.453-.104.937-.225 1.391-.33l.383-.023.23-.014c.046.013.076-.005.122.008.047.013.077-.005.124.008.862.055 2.21.264 3.386 1.204.852.653 1.62 1.71 2.068 3.308.413 1.538-.07 2.963-.962 4.228-1.31 1.98-3.688 3.55-5.155 4.437z", fill: "#FFB300" }),
        React__default["default"].createElement("path", { d: "M86.57 67.646l-.06.034a48.224 48.224 0 01-12.026 5.008c-.573.173-1.133.3-1.723.443-25.776 5.799-51.346-10.32-57.136-36.043a47.1 47.1 0 01-1.15-11.381c-.001-.552.027-1.12.071-1.66-.005-.352.036-.692.06-1.062.166-.055.302-.095.454-.104.153-.01.306-.018.476.002 1.233.078 2.447 1.154 3.583 2.71 2.502 3.373 4.6 8.994 5.746 11.254l.017.03c.249.568.527 1.118.805 1.668l.051.089c.312.61.608 1.19.95 1.782l.085.148.205.355a10623.502 10623.502 0 00.89 1.54c.269.398.49.783.743 1.15.137.238.286.428.453.648.252.368.503.736.785 1.086.167.22.316.41.482.63.15.19.282.35.415.511.149.19.281.351.413.512.414.511.875 1.035 1.319 1.53.017.029.051.088.098.1l.115.132.345.392a45.982 45.982 0 001.668 1.723 44.68 44.68 0 001.74 1.642c.08.072.178.173.26.245.08.071.178.173.26.244l.097.102c.29.227.597.485.886.712.162.144.371.3.533.443.064.042.081.072.145.114l.192.126c.272.198.515.413.788.611.209.156.4.283.609.438.08.072.192.127.273.199.272.198.574.378.864.606.256.169.528.367.813.518.32.21.64.42.988.614.303.181.558.35.86.53.285.152.541.32.826.471a.26.26 0 01.128.084c.157.068.302.181.46.248.46.248.92.496 1.409.727.238.139.489.231.727.37l1.137.529c.157.067.297.104.425.188.158.067.298.105.426.189.361.147.74.323 1.102.47.315.134.612.238.957.355.362.147.723.293 1.097.393.188.05.392.13.579.18.14.037.298.104.438.142.345.117.672.204 1.017.321.344.117.701.187 1.046.304l.842.225c.404.083.795.212 1.199.295l.14.037c.375.1.761.153 1.165.236.264.045.498.108.744.123.31.058.62.116.96.157.294.028.558.073.821.118l.51.061c.34.04.727.094 1.067.135.077-.005.123.007.2.003l.88.084.739.047.74.047c.37.024.692.035 1.045.029.2.003.37.023.552-.003.446.019.922.02 1.38-.008.306-.018.63-.007.906-.009.458-.028.887-.038 1.346-.066l.918-.056c.458-.028.9-.085 1.388-.13.306-.02.595-.067.884-.116.518-.062 1.019-.154 1.537-.216.182-.026.395-.07.577-.096a.495.495 0 00.242-.06c.713-.136 1.456-.289 2.2-.441.454-.105.938-.226 1.392-.33l.382-.023.23-.014c.046.012.076-.005.123.007.046.013.076-.004.123.008.862.055 2.21.264 3.386 1.205.95.754 1.719 1.811 2.166 3.409z", fill: "#FFD54F" }),
        React__default["default"].createElement("path", { d: "M19.119 25.593c-2.604-1.221-5.188-1.31-7.693.177.756-1.227 1.784-2.255 3.12-2.75l.03-.017c.166-.056.302-.095.455-.105a2.56 2.56 0 01.476.002c1.262.061 2.476 1.137 3.612 2.693z", fill: "#7D551F" }),
        React__default["default"].createElement("path", { d: "M19.119 25.593c-1.562-.718-3.1-1.053-4.626-.884-.013-.229.02-.445.053-.662-.005-.352.036-.692.077-1.032.166-.056.302-.095.484-.121.153-.01.306-.019.476.001 1.186.066 2.4 1.142 3.536 2.698z", fill: "#AC752C" })));
};

var Icon$1j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 371.8 348.1" }, props),
        React__default["default"].createElement("linearGradient", { id: "prefix__a", gradientUnits: "userSpaceOnUse", x1: 289.538, y1: 24.484, x2: 337.538, y2: 90.867 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M331.7 92.5l-19.3-1.4 2.8-38c.3-3.9 3.7-6.9 7.6-6.6l5 .4c3.9.3 6.9 3.7 6.6 7.7l-2.7 37.9z", fill: "url(#prefix__a)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__b", gradientUnits: "userSpaceOnUse", x1: -8.675, y1: 371.913, x2: 441.197, y2: 9.871 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M347.4 109.8c-.3 18.6-3.3 37.1-8.8 54.9-32 102.8-141.2 160.1-243.9 128.1-17.8-5.5-34.7-13.6-50.2-23.9-1.1-.8-10.9-8.6-16.4-18.9-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.2.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.6c.7 0 1.4 0 2.2-.1 1 0 1.9 0 2.9-.1 1.9-.1 3.7-.2 5.6-.3 1.1-.1 2.1-.1 3.2-.3 2.9-.2 5.8-.5 8.7-.9.9-.1 1.8-.2 2.7-.4s1.8-.3 2.7-.4c2.7-.4 5.4-.9 8.1-1.5.2 0 .4-.1.6-.1l.7-.1c3.9-.8 7.8-1.8 11.6-2.8 3.6-1 7.2-2.1 10.8-3.3.4-.1.9-.3 1.4-.5l.5-.2c2.3-.8 4.7-1.7 7-2.6.2-.1.5-.2.7-.3l.9-.4c6.6-2.7 13.1-5.7 19.4-9.1 1.2-.6 2.4-1.3 3.6-2s2.3-1.3 3.4-2l.6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-1 2.8-1.9 4.1-2.9.5-.4 1.1-.8 1.6-1.2 1.9-1.3 3.7-2.7 5.5-4.2 8-6.3 15.5-13.3 22.5-20.9l.4-.4c2.7-2.9 5.2-5.9 7.7-8.9 1.1-1.4 2.3-2.9 3.4-4.3.9-1.2 1.8-2.4 2.6-3.6l.5-.7c1.9-2.6 3.7-5.2 5.4-7.9 9.7-14.9 17.3-31.1 22.5-48.1.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8l.3-.4c.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.1-1.6 9.3-2.2 15.9-.5 6.2 1.6 10.3 6.3 13 12 4.2 9.2 5 20.8 5 27.8z", fill: "url(#prefix__b)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__c", gradientUnits: "userSpaceOnUse", x1: 13.25, y1: 297.552, x2: 480.485, y2: 42.233 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M329.3 70.3v.3c.1 17.7-2.1 35.4-6.8 52.6-.6 2.3-1.3 4.6-2 7-32 102.8-141.2 160.1-244 128.2-14.9-4.6-29.2-11.1-42.5-19.1-1.9-1.2-3.9-2.4-5.7-3.6l-3.6-2.4c.1-.6.3-1.3.5-1.9.2-.6.6-1.2.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.7l2.2-.1c1 0 1.9 0 2.9-.1l5.6-.3c1.1-.1 2.2-.1 3.2-.3 1.8-.2 3.7-.3 5.5-.6 1.1-.1 2.1-.2 3.2-.4l2.7-.4c.9-.1 1.8-.3 2.7-.4 2.7-.4 5.4-.9 8.1-1.5.2 0 .4-.1.6-.1l.7-.1c.7-.1 1.4-.3 2.1-.5 3.2-.7 6.4-1.5 9.5-2.4s6.3-1.8 9.4-2.9l1.4-.4c.4-.1.9-.3 1.4-.5l.5-.2c1.5-.5 2.9-1.1 4.3-1.6l2.7-1c.2-.1.5-.2.7-.3l.9-.4c1.3-.5 2.5-1 3.8-1.6l2.7-1.2 1.2-.6 3.9-1.8c1.3-.6 2.4-1.2 3.6-1.8 1.4-.7 2.8-1.4 4.2-2.2l3.6-2 3.4-2 .6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-1 2.8-1.9 4.1-2.9.5-.4 1.1-.8 1.6-1.2l1.6-1.2c1.3-1 2.6-1.9 3.9-3 1-.8 2.1-1.7 3.1-2.6 1.2-1 2.4-2 3.6-3.1l1.8-1.6c.5-.4 1-.9 1.4-1.3 1.1-1 2.1-2 3.2-3s2.2-2.1 3.2-3.1c.8-.8 1.7-1.7 2.5-2.6 1.2-1.2 2.4-2.4 3.5-3.7l.4-.4c1.1-1.2 2.1-2.4 3.2-3.6.7-.8 1.4-1.5 2-2.3.8-1 1.7-2 2.5-3s1.4-1.8 2.1-2.7c.4-.5.9-1.1 1.3-1.6.9-1.2 1.8-2.4 2.6-3.6l.5-.7 2.1-3c.6-.8 1.1-1.6 1.6-2.5l1.7-2.5c.8-1.2 1.5-2.4 2.3-3.6l1.2-2c1-1.6 1.9-3.2 2.8-4.8l1.8-3.3c.9-1.6 1.7-3.3 2.5-4.9.5-1.1 1.1-2.2 1.6-3.4.8-1.7 1.6-3.4 2.4-5.2.5-1.1 1-2.2 1.4-3.3.8-1.9 1.6-3.9 2.3-5.8.3-.8.6-1.5.9-2.3l.3-.9c1-2.8 2-5.7 2.9-8.7.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8l.3-.4c.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.3-.7 9.5-1.3 16 .4z", fill: "url(#prefix__c)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__d", gradientUnits: "userSpaceOnUse", x1: 5.457, y1: 210.117, x2: 44.266, y2: 243.819 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M43.1 222.5c-9.6 6.7-15.2 15.6-15 27.5-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.2.9-1.7 2.9-4.2 9.2-6.3 17-7.2z", fill: "url(#prefix__d)" })));
};

var Icon$1i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 85.46 85.46" }, props),
        React__default["default"].createElement("path", { fill: "#e8e3e2", d: "M85.46 42.73A42.73 42.73 0 1142.73 0a42.68 42.68 0 0142.73 42.73z" }),
        React__default["default"].createElement("path", { fill: "#bec8be", d: "M65.39 79a42.75 42.75 0 01-45.32 0 42.75 42.75 0 0145.32 0zM49.11 11.68a27.13 27.13 0 0114.71 12.73c.31.57.6 1.14.87 1.73a25.7 25.7 0 011 2.46c.16.48.31.95.44 1.43v.08a21.8 21.8 0 01.79 5.76v.4a29.74 29.74 0 00.78 7c.1.41.2.82.31 1.22 0 .19.09.37.13.55l.06.24a17.38 17.38 0 01.39 3.69c0 11.6-11.55 21-25.8 21h-.27a31.23 31.23 0 01-3.52-.25 30.48 30.48 0 01-6.59-1.55C23.33 64.92 17 57.53 17 48.94a17.38 17.38 0 01.4-3.69l.06-.24c0-.18.08-.36.13-.55.11-.4.21-.81.3-1.22a29.23 29.23 0 00.79-7v-.4a22.05 22.05 0 01.78-5.74c.13-.51.29-1 .46-1.51a25.7 25.7 0 011-2.46c.27-.59.56-1.16.87-1.73a27.14 27.14 0 0114.7-12.73 20.44 20.44 0 0112.62.01z" }),
        React__default["default"].createElement("path", { fill: "#e8e3e2", d: "M60.87 40.12a9.61 9.61 0 00.87-4 10.26 10.26 0 00-10.51-10 10.82 10.82 0 00-5.35 1.39 6.25 6.25 0 01-6.18 0 10.76 10.76 0 00-5.35-1.39 10.26 10.26 0 00-10.5 10 9.61 9.61 0 00.87 4 10.53 10.53 0 00.65 1.19 6.26 6.26 0 01.68 5.36 14.3 14.3 0 00-.87 4c0 8.32 7.89 15.07 17.61 15.07S60.4 59 60.4 50.68a14 14 0 00-.87-4 6.23 6.23 0 01.69-5.36 10.53 10.53 0 00.65-1.2z" }),
        React__default["default"].createElement("path", { fill: "#bec8be", d: "M18.21 45a9.12 9.12 0 01-4.44-3.28c-3.55-4.5-2.37-11.71 2-13.41a5.45 5.45 0 014.75.2l.15.08M64.78 28.61a5.45 5.45 0 014.9-.29c4.38 1.7 5.56 8.91 2 13.41A9.16 9.16 0 0167.25 45M42.79 60.49a11.34 11.34 0 01-9.49-4.92 1 1 0 111.7-1.09 9.64 9.64 0 0015.65 0 1 1 0 111.67 1.09 11.34 11.34 0 01-9.53 4.92z" }),
        React__default["default"].createElement("rect", { fill: "#bec8be", x: 39.05, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-65.45 39.954 46.838)" }),
        React__default["default"].createElement("rect", { fill: "#bec8be", x: 44.72, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-114.55 45.635 46.84)" }),
        React__default["default"].createElement("path", { fill: "#bec8be", d: "M33.75 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86zM51.84 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86z" })));
};

var Icon$1h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 135 129" }, props),
        React__default["default"].createElement("path", { d: "M118.375 17.524l-12.942-.941 1.052-14.229C106.59.89 108.8-.156 111.483.052l3.367.262c2.631.21 4.682 1.57 4.577 3.034l-1.052 14.176z", fill: "#AC752C" }),
        React__default["default"].createElement("path", { d: "M118.375 17.525l-6.471-.471L113.166.105l1.684.105c2.631.209 4.682 1.569 4.577 3.034l-1.052 14.28z", fill: "#7D551F" }),
        React__default["default"].createElement("path", { d: "M121.795 24.482a72.046 72.046 0 01-3.315 20.558c-12.1 38.502-53.242 60.002-91.964 48.022-6.892-2.145-13.258-5.179-18.94-8.945-.42-.314-4.104-3.191-6.156-7.062C.368 75.119-.21 72.975.158 70.83v-.052c.052-.262.105-.471.21-.68.105-.21.21-.419.369-.628 1.052-1.57 3.42-2.354 6.365-2.668 6.419-.733 15.52.784 19.414.994h.053c.947.104 1.894.157 2.84.209h.158c1.053.052 2.052.105 3.104.105h3.683c.684 0 1.42-.053 2.105-.105.42 0 .789-.052 1.21-.105 1.105-.104 2.21-.209 3.262-.366.368-.052.684-.104 1-.157a41.18 41.18 0 00.999-.157c1-.157 2.052-.366 3.051-.575.053 0 .158 0 .21-.052l.211-.157c1.473-.314 2.946-.68 4.367-1.047a51.896 51.896 0 004.05-1.255c.159-.052.37-.105.527-.157l.21-.052a53.78 53.78 0 002.631-.994c.105-.052.158-.052.263-.105l.316-.157a77.076 77.076 0 007.313-3.4c.473-.21.894-.47 1.368-.732.42-.262.841-.471 1.262-.733a.4.4 0 01.21-.104c.211-.157.474-.262.685-.419a44.753 44.753 0 002.052-1.308c.368-.209.683-.47 1.052-.68l1.578-1.098c.21-.157.368-.314.579-.419.684-.47 1.368-1.046 2.052-1.569a74.246 74.246 0 008.47-7.794l.158-.157c1-1.099 1.946-2.197 2.893-3.348.421-.523.842-1.047 1.263-1.622.316-.419.684-.89 1-1.308.052-.104.105-.157.158-.261.683-.994 1.367-1.936 2.051-2.982 3.578-5.44 6.472-11.509 8.523-18.047.211-.68.421-1.413.632-2.093l.263-.523.158-.314c.052-.052.052-.105.105-.157.052-.052.052-.105.105-.157.737-1.098 2.052-2.72 4.209-3.557 1.526-.628 3.525-.837 5.998-.21 2.367.629 3.893 2.355 4.892 4.5 1.684 3.295 1.947 7.637 2 10.305z", fill: "#FFB300" }),
        React__default["default"].createElement("path", { d: "M114.955 9.625v.105c.053 6.486-.789 13.13-2.578 19.721-.21.89-.474 1.727-.737 2.616-12.1 38.501-53.242 60.001-91.964 48.022-5.734-1.779-11.1-4.185-16.046-7.167a29.993 29.993 0 01-2.157-1.36c-.474-.261-.895-.575-1.368-.89.053-.26.105-.47.21-.68.106-.209.21-.418.369-.627 1.052-1.57 3.42-2.354 6.366-2.668 6.418-.732 15.52.785 19.413.994h.053a51.87 51.87 0 002.84.21h.159c1.052.052 2.051.104 3.104.104h3.63c.736-.052 1.42-.052 2.104-.105.421 0 .79-.052 1.21-.104.684-.053 1.368-.105 2.052-.21.421-.052.79-.104 1.21-.157.368-.052.684-.104 1-.157a62.547 62.547 0 004.051-.732c.052 0 .158 0 .21-.052l.316-.052.79-.157a71.41 71.41 0 003.577-.89c1.21-.314 2.367-.68 3.525-1.046.157-.052.368-.105.526-.157.157-.052.368-.105.526-.157l.21-.052c.526-.21 1.105-.419 1.631-.628.316-.104.684-.261 1-.366.105-.052.158-.052.263-.105l.316-.157c.473-.209.947-.366 1.42-.575.368-.157.684-.314 1.052-.47.158-.053.316-.158.474-.21.473-.21.947-.47 1.473-.68.42-.21.894-.419 1.315-.68a23.008 23.008 0 001.579-.837c.473-.262.894-.47 1.367-.733.421-.261.842-.47 1.263-.732a.4.4 0 01.21-.105c.21-.156.474-.261.684-.418a44.753 44.753 0 002.052-1.308c.368-.209.684-.47 1.052-.68l1.579-1.098c.21-.157.368-.314.579-.419.21-.157.368-.314.578-.418.474-.366 1-.733 1.473-1.099.421-.314.79-.628 1.21-.994.474-.366.947-.732 1.368-1.15.21-.21.474-.42.684-.628.158-.157.368-.314.526-.471.421-.366.79-.733 1.21-1.099.421-.366.79-.784 1.21-1.15l.948-.942c.42-.471.894-.89 1.315-1.36l.158-.157c.42-.419.789-.89 1.21-1.36.263-.314.526-.576.736-.89.316-.366.632-.732.947-1.15.263-.367.526-.68.79-.994l.473-.628c.316-.419.684-.89 1-1.308.052-.105.105-.157.157-.261l.79-1.099.63-.942.632-.941c.316-.471.579-.89.842-1.36.158-.262.316-.471.42-.733a20.74 20.74 0 001.053-1.83c.21-.42.474-.838.684-1.204.316-.628.631-1.203.947-1.83l.631-1.256c.316-.628.579-1.256.895-1.936.21-.418.368-.837.526-1.255.315-.732.579-1.465.894-2.197.105-.262.211-.576.316-.837.052-.105.105-.21.105-.366.368-1.047.737-2.145 1.105-3.244.21-.68.421-1.412.631-2.092l.263-.523.158-.314c.053-.052.053-.105.105-.157.053-.052.053-.105.106-.157.736-1.099 2.051-2.72 4.208-3.557 1.684-.68 3.683-.89 6.156-.262z", fill: "#FFD54F" }),
        React__default["default"].createElement("path", { d: "M7.05 66.697c-3.63 2.511-5.735 5.859-5.682 10.305-1.052-1.935-1.631-4.08-1.263-6.225v-.052c.053-.261.106-.47.21-.68.106-.21.211-.419.369-.628 1.052-1.621 3.42-2.406 6.366-2.72z", fill: "#7D551F" }),
        React__default["default"].createElement("path", { d: "M124.688 18.623a70.234 70.234 0 017.997 19.25c10.049 39.077-13.626 78.834-52.926 88.878-6.998 1.778-13.995 2.511-20.834 2.249-.526-.052-5.156-.575-8.997-2.825-1.894-1.098-3.525-2.615-4.367-4.656v-.052c-.105-.209-.157-.471-.21-.68-.053-.261-.053-.471-.053-.732.053-1.883 1.684-3.819 3.999-5.598 5.103-3.975 13.626-7.428 17.046-9.311.841-.419 1.683-.837 2.525-1.308.053 0 .105-.052.158-.052.894-.471 1.789-.994 2.683-1.517l.79-.471a4.74 4.74 0 01.683-.418c.21-.157.474-.262.684-.419.316-.209.632-.366.894-.575a35.104 35.104 0 001.737-1.203c.315-.21.684-.471 1-.733a49.358 49.358 0 002.63-1.988l.789-.627c.263-.21.526-.471.79-.68.788-.68 1.525-1.36 2.314-2.04l.158-.158.21-.209a60.211 60.211 0 003.157-3.19c.947-1.047 1.894-2.093 2.788-3.192.106-.157.21-.261.369-.418l.157-.157 1.737-2.197c.052-.053.105-.157.157-.21.053-.104.158-.209.21-.261a81.905 81.905 0 004.42-6.696c.263-.419.526-.89.737-1.36.263-.419.473-.837.684-1.308.052-.052.052-.157.105-.21.105-.26.263-.47.368-.732l1.105-2.197c.158-.366.368-.732.526-1.098.263-.576.526-1.151.737-1.726.105-.21.158-.471.263-.68.315-.785.631-1.57.947-2.407a70.605 70.605 0 003.104-11.09c0-.052.052-.157.052-.209.264-1.412.527-2.877.684-4.342.106-.68.158-1.36.263-2.04.053-.523.106-1.099.158-1.674v-.314c.106-1.203.158-2.406.158-3.61a72.76 72.76 0 00-2.262-19.773 30.767 30.767 0 00-.579-2.093s-.052-.209-.052-.575v-.366-.21-.209c0-1.307.315-3.4 1.736-5.23.999-1.309 2.578-2.564 4.998-3.296 2.315-.68 4.577-.053 6.524 1.255 3.104 1.883 5.629 5.44 7.049 7.69z", fill: "#FFB300" }),
        React__default["default"].createElement("path", { d: "M111.062 9.573c0 .052.053.052.053.105a72.592 72.592 0 018.207 18.1c.263.836.526 1.726.737 2.615 10.048 39.077-13.627 78.833-52.927 88.877a77.31 77.31 0 01-17.414 2.302h-2.526c-.526 0-1.105-.053-1.63-.053-.106-.209-.158-.47-.211-.68-.053-.261-.053-.47-.053-.732.053-1.883 1.684-3.819 3.999-5.597 5.103-3.976 13.626-7.429 17.046-9.312a57.349 57.349 0 002.525-1.308c.053 0 .105-.052.158-.052.894-.471 1.789-.994 2.683-1.517.105-.052.158-.104.263-.157.158-.104.368-.209.526-.314a4.74 4.74 0 01.684-.418c.21-.105.474-.314.684-.419.316-.209.632-.366.894-.575.58-.419 1.158-.785 1.737-1.203.315-.21.684-.471 1-.733.578-.418 1.104-.837 1.63-1.255l.947-.785.79-.627c.262-.21.525-.471.789-.68.789-.68 1.525-1.36 2.314-2.04l.158-.158.21-.209.58-.575c.894-.837 1.736-1.727 2.577-2.616.842-.89 1.631-1.83 2.42-2.772.106-.157.264-.262.369-.419.105-.157.21-.261.368-.418l.158-.157c.368-.471.736-.89 1.052-1.36.21-.262.421-.576.684-.837.053-.053.105-.157.158-.21.053-.104.158-.209.21-.261.316-.419.58-.837.895-1.256l.631-.941c.105-.157.21-.262.263-.419.316-.47.579-.889.894-1.36l.79-1.255c.315-.523.631-.994.947-1.517.263-.419.526-.89.736-1.36.21-.419.474-.837.684-1.308.053-.052.053-.157.105-.21.106-.261.264-.47.369-.732l1.105-2.197c.157-.366.368-.732.526-1.098.263-.576.526-1.151.736-1.727.105-.209.158-.47.263-.68.105-.209.158-.47.263-.68.211-.575.474-1.15.684-1.726.158-.47.316-.942.474-1.465.21-.575.368-1.098.578-1.674.106-.314.158-.575.264-.89.052-.208.157-.47.21-.68.158-.522.316-1.045.421-1.568.158-.524.263-1.099.421-1.622.105-.419.21-.89.315-1.308.158-.628.263-1.255.421-1.883 0-.052.053-.157.053-.21.105-.575.21-1.203.316-1.778.052-.366.105-.732.157-1.15.053-.472.158-.942.211-1.465.052-.419.105-.837.158-1.308.052-.262.052-.523.105-.785.053-.523.105-1.099.158-1.674v-.314c.052-.47.052-.89.052-1.36.053-.366.053-.732.053-1.098 0-.367.053-.733.053-1.151v-1.622-.837c0-.68 0-1.412-.053-2.092 0-.471-.053-.942-.053-1.413-.052-.68-.105-1.36-.157-2.092l-.158-1.413c-.106-.68-.158-1.412-.263-2.092-.053-.47-.106-.89-.211-1.36a29.66 29.66 0 00-.421-2.302c-.052-.314-.105-.575-.158-.89 0-.104-.052-.26-.052-.365a38.976 38.976 0 00-.789-3.348 31.36 31.36 0 00-.579-2.093s-.053-.209-.053-.575v-.366-.21-.209c0-1.308.316-3.4 1.737-5.231 1.052-1.255 2.577-2.459 5.05-3.191z", fill: "#FFD54F" }),
        React__default["default"].createElement("path", { d: "M49.297 114.405c-1.789 4.028-1.789 7.951.631 11.718-1.894-1.099-3.577-2.616-4.367-4.656v-.052c-.105-.209-.157-.471-.21-.68-.053-.262-.053-.471-.053-.733.053-1.883 1.684-3.766 3.999-5.597z", fill: "#7D551F" })));
};

var Icon$1g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 412.5 418.3" }, props),
        React__default["default"].createElement("linearGradient", { id: "prefix__a", gradientUnits: "userSpaceOnUse", x1: 273.043, y1: 9.999, x2: 358.065, y2: 95.021 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M341.3 83.9L307 81.4l2.8-38c.3-3.9 6.2-6.7 13.2-6.2l8.9.7c7 .5 12.4 4.1 12.2 8.1l-2.8 37.9z", fill: "url(#prefix__a)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__b", gradientUnits: "userSpaceOnUse", x1: -66.112, y1: 178.809, x2: 509.889, y2: 177.277 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M350.2 102.3c-.3 18.6-3.3 37.1-8.8 54.9-32 102.8-141.2 160.1-244 128.1-17.8-5.5-34.7-13.6-50.2-23.9-1.1-.8-10.9-8.6-16.4-18.9-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.1.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.7c.7 0 1.4 0 2.2-.1 1 0 1.9 0 2.9-.1 1.9-.1 3.7-.2 5.6-.3 1.1-.1 2.1-.1 3.2-.3 2.9-.2 5.8-.5 8.7-.9.9-.1 1.8-.2 2.7-.4s1.8-.3 2.7-.4c2.7-.4 5.4-.9 8-1.5.2 0 .4 0 .6-.1l.7-.2c3.9-.8 7.8-1.8 11.6-2.8 3.6-1 7.2-2.1 10.8-3.3l1.4-.5.5-.2c2.4-.8 4.7-1.7 7-2.6.2-.1.5-.2.7-.3l.9-.4c6.6-2.7 13.1-5.7 19.4-9.1 1.2-.6 2.4-1.3 3.6-2s2.3-1.3 3.4-2l.6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-.9 2.8-1.9 4.1-2.9.5-.4 1-.8 1.6-1.2 1.9-1.3 3.7-2.7 5.5-4.2 8-6.3 15.6-13.3 22.5-20.9l.4-.4c2.7-2.9 5.2-5.8 7.7-8.9 1.1-1.4 2.3-2.8 3.4-4.3.9-1.2 1.8-2.4 2.6-3.6l.5-.7c1.9-2.6 3.7-5.2 5.4-7.9 9.7-14.9 17.3-31.1 22.5-48.1.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8.1-.1.2-.3.3-.4.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.1-1.6 9.3-2.2 15.9-.5 6.2 1.6 10.3 6.2 13 11.9 4.3 9.4 5.1 21 5.1 28z", fill: "url(#prefix__b)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__c", gradientUnits: "userSpaceOnUse", x1: -30.33, y1: 202.465, x2: 770.861, y2: 77.614 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M332.1 62.8v.3c.1 17.7-2.1 35.4-6.8 52.6-.6 2.3-1.3 4.6-2 7-32 102.8-141.2 160.1-244 128.1-14.9-4.6-29.2-11-42.5-19l-5.7-3.6-3.6-2.4c.1-.6.3-1.3.5-1.9.2-.6.6-1.1.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.7l2.2-.1c1 0 1.9 0 2.9-.1 1.9-.1 3.8-.2 5.6-.3 1.1-.1 2.1-.1 3.2-.3 1.8-.1 3.7-.3 5.5-.6 1.1-.1 2.1-.2 3.2-.4l2.7-.4c.9-.1 1.8-.3 2.7-.4 2.7-.4 5.4-.9 8-1.5.2 0 .4 0 .6-.1l.7-.2c.7-.1 1.4-.3 2.1-.5 3.2-.7 6.4-1.5 9.5-2.4s6.3-1.8 9.4-2.8l1.4-.4 1.4-.5.5-.2c1.5-.5 2.9-1.1 4.3-1.6l2.7-1c.2-.1.5-.2.7-.3l.9-.4c1.3-.5 2.5-1 3.8-1.6l2.7-1.2 1.2-.6 3.9-1.8c1.3-.6 2.4-1.2 3.6-1.8 1.4-.7 2.8-1.4 4.2-2.2 1.2-.6 2.4-1.3 3.6-2l3.4-2 .6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-.9 2.8-1.9 4.1-2.9.5-.4 1-.8 1.6-1.2s1-.8 1.6-1.2c1.3-1 2.6-1.9 3.9-3 1.1-.8 2.1-1.7 3.1-2.6 1.2-1 2.4-2 3.6-3.1.6-.5 1.2-1.1 1.8-1.6l1.4-1.3c1.1-1 2.1-2 3.2-3s2.2-2.1 3.2-3.1c.8-.9 1.7-1.7 2.5-2.6 1.2-1.2 2.4-2.4 3.5-3.7l.4-.4c1.1-1.2 2.1-2.4 3.2-3.6.7-.8 1.4-1.5 2-2.3.8-1 1.7-2 2.5-3l2.1-2.7c.4-.5.9-1.1 1.3-1.6.9-1.2 1.8-2.4 2.6-3.6l.5-.7 2.1-3c.6-.8 1.1-1.6 1.6-2.5l1.7-2.5c.8-1.2 1.5-2.4 2.3-3.7.4-.7.8-1.3 1.2-2 1-1.6 1.9-3.2 2.8-4.8l1.8-3.3c.9-1.6 1.7-3.3 2.5-4.9l1.6-3.4c.8-1.7 1.6-3.4 2.3-5.2l1.5-3.3c.8-1.9 1.6-3.9 2.3-5.8.3-.8.6-1.5.9-2.3l.3-.9c1-2.8 2-5.7 2.9-8.7.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8.1-.1.2-.3.3-.4.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.3-.6 9.6-1.2 16.1.5z", fill: "url(#prefix__c)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__d", gradientUnits: "userSpaceOnUse", x1: -10.037, y1: 167.019, x2: 53.963, y2: 248.721 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M45.9 215.1c-9.6 6.7-15.2 15.6-15 27.5-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.1.9-1.7 2.9-4.3 9.2-6.4 17-7.2z", fill: "url(#prefix__d)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__e", gradientUnits: "userSpaceOnUse", x1: 227.406, y1: 395.563, x2: 411.236, y2: -145.203 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M356.2 85.4c9.5 16 16.7 33.3 21.3 51.3 26.7 104.3-36.2 210.4-140.4 237.1-18.1 4.6-36.7 6.7-55.3 6-1.4-.1-13.7-1.6-23.8-7.5-5-2.9-9.4-6.9-11.6-12.4v-.1c-.2-.6-.4-1.2-.6-1.9-.1-.6-.1-1.3-.1-1.9.2-5 4.5-10.1 10.7-15 13.5-10.6 36.1-19.9 45.2-24.8l.1-.1c2.2-1.1 4.5-2.3 6.7-3.5l.4-.2c2.4-1.3 4.8-2.7 7.1-4.1.7-.4 1.4-.8 2.1-1.3l1.8-1.2 1.8-1.2c.8-.5 1.6-1 2.4-1.6 1.6-1 3.1-2.1 4.6-3.2.9-.6 1.8-1.3 2.6-1.9 2.4-1.7 4.7-3.5 6.9-5.4.7-.6 1.4-1.1 2.1-1.7l2.1-1.8c2.1-1.8 4.1-3.6 6.1-5.5.2-.1.3-.2.4-.4l.5-.5c2.9-2.8 5.7-5.6 8.4-8.5 2.6-2.7 5-5.5 7.5-8.5l.9-1.1.4-.5c1.6-1.9 3.1-3.9 4.6-5.9.1-.2.3-.4.5-.6s.4-.5.5-.8c4.2-5.7 8.1-11.7 11.7-17.9.7-1.2 1.4-2.4 2-3.6s1.3-2.3 1.9-3.4l.3-.6c.3-.6.7-1.3 1-2 1-1.9 1.9-3.9 2.9-5.8l1.4-3c.7-1.6 1.4-3.1 2-4.6.2-.6.5-1.2.7-1.8.9-2.1 1.7-4.2 2.5-6.4 3.5-9.6 6.3-19.5 8.2-29.6 0-.2.1-.4.1-.5.8-3.8 1.4-7.7 1.9-11.6.2-1.8.5-3.6.6-5.5.1-1.4.3-2.9.4-4.4 0-.3 0-.6.1-.8.2-3.2.4-6.4.4-9.6.4-17.8-1.6-35.6-6.1-52.8-.5-1.9-1-3.7-1.5-5.6 0 0-.1-.6-.1-1.5v-.9-.5-.6c0-5 1.6-9.9 4.6-14 2.6-3.5 6.8-6.8 13.2-8.8 6.1-1.9 12.1-.1 17.4 3.3 8.1 5.7 14.8 15.3 18.5 21.2z", fill: "url(#prefix__e)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__f", gradientUnits: "userSpaceOnUse", x1: 424.914, y1: -7.554, x2: 78.701, y2: 542.403 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M320 61.2c.1.1.1.2.2.3 9.4 15 16.8 31.3 21.8 48.3.7 2.3 1.3 4.6 1.9 7 26.7 104.3-36.2 210.4-140.5 237.1-15.1 3.9-30.6 5.9-46.2 6.1h-6.8c-1.4 0-2.9-.1-4.3-.1-.2-.6-.4-1.2-.6-1.9-.1-.6-.1-1.3-.1-1.9.2-5 4.5-10.1 10.7-15 13.5-10.6 36.1-19.9 45.2-24.8l.1-.1c2.2-1.1 4.5-2.3 6.7-3.5l.4-.2c2.4-1.3 4.8-2.7 7.1-4.1.2-.1.5-.2.7-.4l1.4-.9 1.8-1.2 1.8-1.2c.8-.5 1.6-1 2.4-1.6l4.6-3.2c.9-.6 1.8-1.3 2.6-1.9 1.5-1.1 3-2.2 4.4-3.3.9-.7 1.7-1.3 2.6-2l2.1-1.7 2.1-1.8c2.1-1.8 4.1-3.6 6.1-5.5.2-.1.3-.2.4-.4l.5-.5 1.5-1.5c2.4-2.3 4.6-4.6 6.9-7 2.2-2.4 4.4-4.9 6.5-7.3l1-1.1.9-1.1.4-.5c1-1.2 1.9-2.4 2.8-3.6l1.8-2.2c.1-.2.3-.4.5-.6s.4-.5.5-.8l2.4-3.3 1.7-2.5c.3-.4.5-.7.8-1.1.8-1.2 1.6-2.4 2.3-3.6s1.4-2.2 2.1-3.4c.8-1.3 1.6-2.7 2.5-4.1.7-1.2 1.3-2.4 2-3.6s1.2-2.3 1.9-3.4l.3-.6c.3-.6.7-1.3 1-2 1-1.9 1.9-3.9 2.9-5.8l1.4-3c.7-1.6 1.4-3.1 2-4.6.2-.6.5-1.2.7-1.8s.5-1.2.7-1.8c.6-1.5 1.2-3 1.8-4.6.5-1.3.9-2.6 1.3-3.9l1.5-4.5c.2-.8.5-1.5.7-2.3.2-.6.4-1.2.5-1.8l1.2-4.2c.4-1.4.8-2.9 1.1-4.3.3-1.2.5-2.3.8-3.5.4-1.7.7-3.3 1.1-5 0-.2.1-.4.1-.5.3-1.6.5-3.2.8-4.7.2-1 .3-2 .5-3 .2-1.3.4-2.6.5-3.9s.3-2.3.4-3.4c.1-.7.2-1.4.2-2 .1-1.4.3-2.9.4-4.4 0-.3 0-.6.1-.8.1-1.2.1-2.4.2-3.6.1-1 .1-2 .1-3s.1-2 .1-3v-4.3-2.3c0-1.9 0-3.7-.1-5.6-.1-1.3-.1-2.5-.2-3.7-.1-1.8-.3-3.7-.4-5.5-.1-1.2-.2-2.5-.4-3.7-.2-1.9-.4-3.7-.7-5.6-.2-1.2-.3-2.4-.5-3.6-.3-2.1-.7-4.1-1.1-6.2-.2-.8-.3-1.6-.5-2.4-.1-.3-.1-.6-.2-1-.6-3-1.3-5.9-2-8.9-.5-1.9-1-3.7-1.5-5.6 0 0-.1-.6-.1-1.5v-.9-.5-.6c0-5 1.6-9.9 4.6-14 2.6-3.7 6.7-7 13.1-9z", fill: "url(#prefix__f)" }),
        React__default["default"].createElement("linearGradient", { id: "prefix__g", gradientUnits: "userSpaceOnUse", x1: 104.654, y1: 305.027, x2: 168.994, y2: 369.367 },
            React__default["default"].createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React__default["default"].createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React__default["default"].createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React__default["default"].createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React__default["default"].createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React__default["default"].createElement("path", { d: "M156.3 341c-4.7 10.8-4.8 21.2 1.6 31.3-5-2.9-9.4-6.9-11.6-12.4v-.1c-.2-.6-.4-1.2-.6-1.9-.1-.6-.1-1.3-.1-1.9.2-5.1 4.5-10.1 10.7-15z", fill: "url(#prefix__g)" })));
};

var Icon$1f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1e = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default["default"].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default["default"].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default["default"].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default["default"].createElement("g", { mask: "url(#mask0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default["default"].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 30 16" }, props),
        React__default["default"].createElement("rect", { width: "8.70536", height: "6.85714" }),
        React__default["default"].createElement("rect", { y: "9.14285", width: "8.70536", height: "6.85714" }),
        React__default["default"].createElement("rect", { x: "10.7144", width: "8.03571", height: "6.85714" }),
        React__default["default"].createElement("rect", { x: "20.7588", width: "8.70536", height: "6.85714" }),
        React__default["default"].createElement("rect", { x: "10.7144", y: "9.14285", width: "8.03571", height: "6.85714" }),
        React__default["default"].createElement("rect", { x: "20.7588", y: "9.14285", width: "8.70536", height: "6.85714" })));
};

var Icon$1c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default["default"].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z" }),
        React__default["default"].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z" }),
        React__default["default"].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z" }),
        React__default["default"].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z" }),
        React__default["default"].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z" }),
        React__default["default"].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z" })));
};

var Icon$1b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default["default"].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$1a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 14 12" }, props),
        React__default["default"].createElement("path", { d: "M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z", fill: "white" })));
};

var Icon$19 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$18 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$17 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$16 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$15 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$14 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$13 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$12 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$11 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default["default"].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$10 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 30 16" }, props),
        React__default["default"].createElement("rect", { width: "8.03571", height: "6.85714" }),
        React__default["default"].createElement("rect", { x: "10.0444", width: "19.4196", height: "6.85714" }),
        React__default["default"].createElement("rect", { y: "9.14285", width: "8.03571", height: "6.85714" }),
        React__default["default"].createElement("rect", { x: "10.0449", y: "9.14285", width: "19.4196", height: "6.85714" })));
};

var Icon$$ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: "m421.081 377.275c-.338-.167-35.23-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.116-50.547-48.996-50.977-26.488-1.153-52.688 22.143-58.244 69.774-23.266 199.426 64.548 322.759 190.747 390.738 24.913 12.664 57.707 2.559 70.468-23.797 12.887-26.035 2.235-57.59-23.794-70.481z", fill: "#ffecb3" }),
            React__default["default"].createElement("path", { d: "m421.081 377.275c-.338-.167-35.231-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.115-50.547-48.996-50.977-6.106-.266-12.194.785-18.02 3.116 12.66 5.163 29.234 18.034 36.111 47.861 9.076 39.365-1.677 111.116 13.584 160.865 10.833 34.196 26.916 65.245 47.802 92.284 33.566 43.456 68.458 61.941 68.796 62.108 26.029 12.891 36.682 44.446 23.793 70.48-6.581 13.593-18.494 22.848-31.903 26.902 23.594 7.373 51.32-3.173 62.808-26.902 12.887-26.034 2.235-57.589-23.794-70.48z", fill: "#ffe082" }),
            React__default["default"].createElement("path", { d: "m267.264 276.479s-59.132-76.346-138.999-79.618-77.615 121.081-103.878 134.697c-26.263 13.616-24.356 26.827-24.356 26.827s1.315 12.049 22.764 4.259 25.249-13.644 33.453-23.77 26.28-114.537 71.564-111.638 55.952 99.175 106.725 156.511 108.464 101.771 170.019 97.615c54.899-3.707 74.453 12.369 87.262 19.088 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.273-2.474.181-5.508-2.383-6.588-10.879-4.583-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465c44.03.928 51.81 76.228 74.32 101.177 19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-60.865 1.512-113.721 50.365-110.947 143.555z", fill: "#ffd54f" }),
            React__default["default"].createElement("path", { d: "m509.085 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465 51.811 76.228 74.321 101.177c19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-51.029 1.269-96.42 35.82-108.127 101.87-1.755 25.035-2.821 41.687-2.821 41.687s12.196 94.781 94.903 133.029c82.707 38.247 56.038 50.917 99.727 76.828.007.004.013.007.019.011 14.584 4.469 23.179 10.574 29.905 14.102 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.475.181-5.509-2.383-6.589z", fill: "#ffca28" }),
            React__default["default"].createElement("g", null,
                React__default["default"].createElement("path", { d: "m509.084 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.386-125.632c1.064-19.898-1.885-60.816 23.857-72.373-30.683 10.32-54.762 33.302-54.762 72.373 0 38.171 24.858 84.967 73.386 125.632 48.527 40.665 33.024 34.392 50.057 62.876 22.101 36.959 57.612 34.967 60.443 73.433.948.537 1.857 1.042 2.733 1.501 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.474.181-5.508-2.384-6.588z", fill: "#ffb300" })))));
};

var Icon$_ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { x: "87", y: "109", width: "100%", height: "100%" })),
            React__default["default"].createElement("clipPath", { id: "clip1" },
                React__default["default"].createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React__default["default"].createElement("clipPath", { id: "clip2" },
                React__default["default"].createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React__default["default"].createElement("clipPath", { id: "clip3" },
                React__default["default"].createElement("rect", { x: "154", y: "180", width: "331", height: "331" }))),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)", transform: "translate(-87 -109)" },
            React__default["default"].createElement("path", { d: "M88 359.5C88 221.153 200.153 109 338.5 109 476.847 109 589 221.153 589 359.5 589 497.847 476.847 610 338.5 610 200.153 610 88 497.847 88 359.5Z", fill: "#FAF4E6", fillRule: "evenodd" }),
            React__default["default"].createElement("g", { clipPath: "url(#clip1)" },
                React__default["default"].createElement("g", { clipPath: "url(#clip2)" },
                    React__default["default"].createElement("g", { clipPath: "url(#clip3)" },
                        React__default["default"].createElement("path", { d: "M426.222 423.902C426.004 423.794 403.447 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.774 187.416 310.387 187.138 293.263 186.392 276.325 201.453 272.733 232.246 257.692 361.171 314.463 440.904 396.048 484.852 412.154 493.039 433.355 486.506 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFECB3" }),
                        React__default["default"].createElement("path", { d: "M426.222 423.902C426.004 423.794 403.446 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.775 187.416 310.387 187.138 306.44 186.966 302.504 187.645 298.737 189.152 306.922 192.49 317.637 200.811 322.083 220.094 327.95 245.543 320.999 291.928 330.865 324.09 337.868 346.198 348.265 366.27 361.768 383.751 383.468 411.844 406.025 423.794 406.243 423.902 423.071 432.236 429.958 452.636 421.625 469.467 417.371 478.254 409.669 484.237 401 486.858 416.254 491.625 434.178 484.807 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFE082" }),
                        React__default["default"].createElement("path", { d: "M326.782 358.739C326.782 358.739 288.554 309.383 236.921 307.268 185.289 305.152 186.744 385.545 169.766 394.347 152.787 403.15 154.02 411.69 154.02 411.69 154.02 411.69 154.87 419.48 168.737 414.444 182.603 409.408 185.06 405.623 190.363 399.077 195.667 392.53 207.353 325.03 236.628 326.905 265.904 328.779 272.801 391.02 305.625 428.086 338.448 465.153 375.745 493.88 415.539 491.193 451.03 488.796 463.672 499.189 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.479 484.06 484.773 482.099 483.115 481.401 476.082 478.438 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.441 387.357 388.152 370.474 348.425 371.287 333.222 372.101 318.019 369.286 283.835 397.75 284.435 426.215 285.035 431.245 333.715 445.797 349.844 458.7 364.145 466.392 351.281 466.392 351.281 466.392 351.281 469.006 342.609 456.169 332.832 447.197 325.999 437.856 264.955 398.508 265.933 359.159 266.911 324.989 298.493 326.782 358.739Z", fill: "#FFD54F" }),
                        React__default["default"].createElement("path", { d: "M483.115 481.4C476.082 478.437 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.44 387.357 388.151 370.474 348.424 371.287 333.221 372.101 318.019 369.286 283.834 397.75 284.434 426.215 285.034 431.245 333.715 445.798 349.844 458.7 364.144 466.393 351.281 466.393 351.281 466.393 351.281 469.007 342.608 456.169 332.831 447.197 325.998 437.856 264.955 398.508 265.933 365.519 266.753 336.174 289.09 328.606 331.79 327.471 347.975 326.782 358.74 326.782 358.74 326.782 358.74 334.667 420.014 388.135 444.741 441.604 469.467 424.363 477.658 452.607 494.409 452.612 494.412 452.616 494.414 452.62 494.416 462.048 497.306 467.604 501.252 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFCA28" }),
                        React__default["default"].createElement("path", { d: "M483.115 481.4C476.082 478.437 458.942 469.968 451.09 455.089 441.076 436.115 450.101 440.73 418.729 414.44 387.356 388.151 370.473 348.424 371.286 333.221 371.974 320.358 370.067 293.905 386.709 286.433 366.873 293.105 351.306 307.963 351.306 333.221 351.306 357.898 367.377 388.151 398.749 414.44 430.121 440.73 420.099 436.674 431.11 455.089 445.398 478.982 468.356 477.694 470.186 502.562 470.799 502.909 471.386 503.236 471.953 503.532 473.476 504.332 475.356 503.741 476.143 502.21L484.656 485.659C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFB300" })))))));
};

var Icon$Z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default["default"].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default["default"].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default["default"].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default["default"].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default["default"].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default["default"].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default["default"].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default["default"].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default["default"].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default["default"].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default["default"].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default["default"].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default["default"].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default["default"].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default["default"].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default["default"].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default["default"].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default["default"].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$Y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default["default"].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$X = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$W = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: "m421.081 377.275c-.338-.167-35.23-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.116-50.547-48.996-50.977-26.488-1.153-52.688 22.143-58.244 69.774-23.266 199.426 64.548 322.759 190.747 390.738 24.913 12.664 57.707 2.559 70.468-23.797 12.887-26.035 2.235-57.59-23.794-70.481z", fill: "#ffecb3" }),
            React__default["default"].createElement("path", { d: "m421.081 377.275c-.338-.167-35.231-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.115-50.547-48.996-50.977-6.106-.266-12.194.785-18.02 3.116 12.66 5.163 29.234 18.034 36.111 47.861 9.076 39.365-1.677 111.116 13.584 160.865 10.833 34.196 26.916 65.245 47.802 92.284 33.566 43.456 68.458 61.941 68.796 62.108 26.029 12.891 36.682 44.446 23.793 70.48-6.581 13.593-18.494 22.848-31.903 26.902 23.594 7.373 51.32-3.173 62.808-26.902 12.887-26.034 2.235-57.589-23.794-70.48z", fill: "#ffe082" }),
            React__default["default"].createElement("path", { d: "m267.264 276.479s-59.132-76.346-138.999-79.618-77.615 121.081-103.878 134.697c-26.263 13.616-24.356 26.827-24.356 26.827s1.315 12.049 22.764 4.259 25.249-13.644 33.453-23.77 26.28-114.537 71.564-111.638 55.952 99.175 106.725 156.511 108.464 101.771 170.019 97.615c54.899-3.707 74.453 12.369 87.262 19.088 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.273-2.474.181-5.508-2.383-6.588-10.879-4.583-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465c44.03.928 51.81 76.228 74.32 101.177 19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-60.865 1.512-113.721 50.365-110.947 143.555z", fill: "#ffd54f" }),
            React__default["default"].createElement("path", { d: "m509.085 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465 51.811 76.228 74.321 101.177c19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-51.029 1.269-96.42 35.82-108.127 101.87-1.755 25.035-2.821 41.687-2.821 41.687s12.196 94.781 94.903 133.029c82.707 38.247 56.038 50.917 99.727 76.828.007.004.013.007.019.011 14.584 4.469 23.179 10.574 29.905 14.102 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.475.181-5.509-2.383-6.589z", fill: "#ffca28" }),
            React__default["default"].createElement("g", null,
                React__default["default"].createElement("path", { d: "m509.084 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.386-125.632c1.064-19.898-1.885-60.816 23.857-72.373-30.683 10.32-54.762 33.302-54.762 72.373 0 38.171 24.858 84.967 73.386 125.632 48.527 40.665 33.024 34.392 50.057 62.876 22.101 36.959 57.612 34.967 60.443 73.433.948.537 1.857 1.042 2.733 1.501 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.474.181-5.508-2.384-6.588z", fill: "#ffb300" })))));
};

var Icon$V = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { x: "87", y: "109", width: "502", height: "502" })),
            React__default["default"].createElement("clipPath", { id: "clip1" },
                React__default["default"].createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React__default["default"].createElement("clipPath", { id: "clip2" },
                React__default["default"].createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React__default["default"].createElement("clipPath", { id: "clip3" },
                React__default["default"].createElement("rect", { x: "154", y: "180", width: "331", height: "331" }))),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)", transform: "translate(-87 -109)" },
            React__default["default"].createElement("path", { d: "M88 359.5C88 221.153 200.153 109 338.5 109 476.847 109 589 221.153 589 359.5 589 497.847 476.847 610 338.5 610 200.153 610 88 497.847 88 359.5Z", fill: "#FAF4E6", fillRule: "evenodd" }),
            React__default["default"].createElement("g", { clipPath: "url(#clip1)" },
                React__default["default"].createElement("g", { clipPath: "url(#clip2)" },
                    React__default["default"].createElement("g", { clipPath: "url(#clip3)" },
                        React__default["default"].createElement("path", { d: "M426.222 423.902C426.004 423.794 403.447 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.774 187.416 310.387 187.138 293.263 186.392 276.325 201.453 272.733 232.246 257.692 361.171 314.463 440.904 396.048 484.852 412.154 493.039 433.355 486.506 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFECB3" }),
                        React__default["default"].createElement("path", { d: "M426.222 423.902C426.004 423.794 403.446 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.775 187.416 310.387 187.138 306.44 186.966 302.504 187.645 298.737 189.152 306.922 192.49 317.637 200.811 322.083 220.094 327.95 245.543 320.999 291.928 330.865 324.09 337.868 346.198 348.265 366.27 361.768 383.751 383.468 411.844 406.025 423.794 406.243 423.902 423.071 432.236 429.958 452.636 421.625 469.467 417.371 478.254 409.669 484.237 401 486.858 416.254 491.625 434.178 484.807 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFE082" }),
                        React__default["default"].createElement("path", { d: "M326.782 358.739C326.782 358.739 288.554 309.383 236.921 307.268 185.289 305.152 186.744 385.545 169.766 394.347 152.787 403.15 154.02 411.69 154.02 411.69 154.02 411.69 154.87 419.48 168.737 414.444 182.603 409.408 185.06 405.623 190.363 399.077 195.667 392.53 207.353 325.03 236.628 326.905 265.904 328.779 272.801 391.02 305.625 428.086 338.448 465.153 375.745 493.88 415.539 491.193 451.03 488.796 463.672 499.189 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.479 484.06 484.773 482.099 483.115 481.401 476.082 478.438 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.441 387.357 388.152 370.474 348.425 371.287 333.222 372.101 318.019 369.286 283.835 397.75 284.435 426.215 285.035 431.245 333.715 445.797 349.844 458.7 364.145 466.392 351.281 466.392 351.281 466.392 351.281 469.006 342.609 456.169 332.832 447.197 325.999 437.856 264.955 398.508 265.933 359.159 266.911 324.989 298.493 326.782 358.739Z", fill: "#FFD54F" }),
                        React__default["default"].createElement("path", { d: "M483.115 481.4C476.082 478.437 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.44 387.357 388.151 370.474 348.424 371.287 333.221 372.101 318.019 369.286 283.834 397.75 284.434 426.215 285.034 431.245 333.715 445.798 349.844 458.7 364.144 466.393 351.281 466.393 351.281 466.393 351.281 469.007 342.608 456.169 332.831 447.197 325.998 437.856 264.955 398.508 265.933 365.519 266.753 336.174 289.09 328.606 331.79 327.471 347.975 326.782 358.74 326.782 358.74 326.782 358.74 334.667 420.014 388.135 444.741 441.604 469.467 424.363 477.658 452.607 494.409 452.612 494.412 452.616 494.414 452.62 494.416 462.048 497.306 467.604 501.252 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFCA28" }),
                        React__default["default"].createElement("path", { d: "M483.115 481.4C476.082 478.437 458.942 469.968 451.09 455.089 441.076 436.115 450.101 440.73 418.729 414.44 387.356 388.151 370.473 348.424 371.286 333.221 371.974 320.358 370.067 293.905 386.709 286.433 366.873 293.105 351.306 307.963 351.306 333.221 351.306 357.898 367.377 388.151 398.749 414.44 430.121 440.73 420.099 436.674 431.11 455.089 445.398 478.982 468.356 477.694 470.186 502.562 470.799 502.909 471.386 503.236 471.953 503.532 473.476 504.332 475.356 503.741 476.143 502.21L484.656 485.659C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFB300" })))))));
};

var Icon$U = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default["default"].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$T = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default["default"].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$S = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$R = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default["default"].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default["default"].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default["default"].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default["default"].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default["default"].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$Q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default["default"].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default["default"].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default["default"].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default["default"].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default["default"].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#53DEE9" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#53DEE9" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$P = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 245.6 247.7" }, props),
        React__default["default"].createElement("style", { type: "text/css" }, "\r\n\t.st0{fill:#FFAD23;}\r\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#633001;}\r\n\t.st2{fill:#FCDC49;}\r\n\t.st3{fill:#633001;}\r\n"),
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { className: "st0", d: "M233.4,95.2c0,0.3,0,0.7-0.1,1.1c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8 c-1.9,1.4-4.3,1.7-6.4,1.1c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0 c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7c-0.1,0-0.2,0-0.2-0.1c-9.7-3.4-20.8-1.2-28.7,6.3h0L17.1,161l-2.9-2.9 c-0.3-0.3-0.7-0.7-0.9-1.1c-1.3-1.9-1.5-4.3-0.8-6.4c0.1-0.3,0.2-0.5,0.3-0.8c0.3-0.6,0.7-1.2,1.2-1.8c0.3-0.3,0.6-0.6,1-0.9l4-2.8 c49.4-35.2,92.3-78.6,127.1-128.2c2-2.9,5.8-3.7,8.8-2.1c0.6,0.3,1.1,0.7,1.6,1.2L173.5,32c-1.5,1.5-2.7,3.2-3.8,4.9c0,0,0,0,0,0.1 c-7,10.9-5.8,25.5,3.8,35.1c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2l0.2-0.2l8.3,8.3l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2 c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2c0,0.2,0.1,0.4,0.1,0.7C233.4,94.6,233.5,94.9,233.4,95.2z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M176.4,106.1c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C178.1,101.5,178.1,104.4,176.4,106.1z" }),
            React__default["default"].createElement("path", { className: "st2", d: "M233.3,96.3c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-1.9,1.4-4.3,1.7-6.4,1.1 c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7 c-0.1,0-0.2,0-0.2-0.1c-9.5-2.8-20.3-0.5-27.8,7c0,0,0,0,0,0l0,0l-0.8-0.8h0L17.1,161h0l21.4-3.2c66.7-9.9,129.7-36.7,183.1-77.6 c0,0,0,0,0,0l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2C233.5,94.5,233.5,95.4,233.3,96.3z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M237.7,83.6l-18.1-18.1c-1.7-1.7-4-2.6-6.3-2.6c-2.4,0-4.6,1-6.3,2.7c0,0-0.1,0.1-0.1,0.1 c-7.5,7.5-19.6,7.5-27.1,0c-7.5-7.5-7.5-19.6,0-27.1c0,0,0.1-0.1,0.1-0.1c1.7-1.7,2.7-3.9,2.7-6.3c0-2.4-0.9-4.7-2.6-6.3l-17-17 C156.1,2,144.6,3,139,11c-34.2,48.8-76.4,91.5-125,126.1l-4,2.9c-8.1,5.8-9.1,17.4-2,24.5l17.3,17.3c1.7,1.7,3.9,2.6,6.3,2.6 c2.4,0,4.6-0.9,6.3-2.6l0,0c7.5-7.5,19.6-7.5,27.1,0c7.5,7.5,7.5,19.6,0,27.1l0,0c-1.7,1.7-2.6,3.9-2.6,6.3c0,2.4,0.9,4.6,2.6,6.3 l17.2,17.2c5.6,5.6,14.5,6.4,20.9,1.7l4-2.8c51.4-36.7,96.2-81.8,132.4-133.5C243.9,97.7,243.2,89.1,237.7,83.6z M232.2,98.9 c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-2.9,2.1-6.9,1.8-9.5-0.8l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7 c-11-11-28.7-11-39.7,0c0,0,0,0,0,0l0,0l-17.3-17.3c-3.1-3.1-2.7-8.4,0.9-10.9l4-2.8c49.3-35.2,92.3-78.6,127.1-128.2 c2.4-3.5,7.4-3.9,10.4-0.9l17,17c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-10.8,11-10.7,28.6,0.2,39.5 c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2l18.1,18.1C233.8,92.3,234.1,96.1,232.2,98.9z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M139.4,62.8l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C134.8,61.1,137.6,61.1,139.4,62.8z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M124,47.5l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C119.5,45.7,122.3,45.7,124,47.5z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M159.8,89.6c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C161.6,85,161.6,87.8,159.8,89.6z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M188.2,111.6l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C183.6,109.9,186.4,109.9,188.2,111.6z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M204.7,128.1l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C200.1,126.4,202.9,126.4,204.7,128.1z" }),
            React__default["default"].createElement("path", { className: "st3", d: "M86.3,159.6c1.8,1.9,4.4,2.9,4.7,3c5.6,1.8,11.6,2.4,18,1.7c19.3-2.1,35.1-17.4,38.1-36.5 c1-6.3,0.5-12.5-1-18.2c-0.4-1.5-1.3-3.9-2.8-5.6c-0.7-0.8-1.6-1.4-2.6-1.7l-0.8-3.8c-0.2-0.9-1-1.4-1.9-1.2l-0.5,0.1l0,0l-0.5,0.1 c-0.9,0.2-1.4,1-1.2,1.9l0.8,3.8c0,0-0.1,0-0.1,0.1c-1.1,0.8-1.6,2-1.8,2.7c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2 c0,0.2-0.1,0.3-0.1,0.3l0,0c0,0.4,0,0.9,0,1.3c0,0.4,0,0.8,0,1.2c0,0.3,0,0.6,0,0.9c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0,0.5 c0,0.5-0.1,0.9-0.1,1.4c0,0.3-0.1,0.5-0.1,0.8c-0.1,0.4-0.1,0.8-0.2,1.3c0,0.3-0.1,0.6-0.1,0.8c-0.1,0.4-0.2,0.8-0.2,1.2 c-0.1,0.3-0.1,0.5-0.2,0.8c-0.1,0.4-0.2,0.8-0.3,1.2c0,0.2-0.1,0.3-0.1,0.5c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.2-0.1,0.4-0.2,0.6 s-0.1,0.4-0.2,0.6c-0.1,0.3-0.2,0.5-0.3,0.8c0,0.1,0,0.1-0.1,0.2c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.1-0.1,0.3-0.2,0.4 c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.3-0.2,0.5-0.3,0.8c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.3-0.3,0.6-0.5,1c0,0,0,0.1-0.1,0.1 c-0.2,0.3-0.3,0.7-0.5,1c-0.1,0.2-0.2,0.5-0.4,0.7c-0.2,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.3,0.6-0.5,0.8c0,0,0,0,0,0 c-0.1,0.1-0.2,0.2-0.2,0.4c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2,0.3-0.3,0.5-0.5,0.8c-0.2,0.3-0.4,0.6-0.7,0.9 c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.3-0.5,0.6-0.7,0.9c-0.2,0.2-0.3,0.4-0.5,0.6c-0.3,0.4-0.6,0.7-1,1.1 c-0.1,0.1-0.2,0.2-0.3,0.4c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.2-0.5,0.5-0.8,0.7 c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0c-0.2,0.1-0.3,0.3-0.5,0.4 c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.4c-0.3,0.2-0.5,0.4-0.8,0.6 l-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.1-0.3,0.2c-0.6,0.4-1.2,0.8-1.8,1.2c-0.6,0.4-1.2,0.7-1.9,1.1 c-0.1,0.1-0.3,0.2-0.4,0.2l-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.5,0.3-1.1,0.6-1.6,0.8c-0.2,0.1-0.4,0.2-0.6,0.3 c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.2-0.8,0.3-1.1,0.5c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.1-0.8,0.3-1.2,0.4 c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0.1-0.4,0.1-0.5,0.1c-0.6,0.2-1.2,0.3-1.8,0.5 c0,0-0.1,0-0.1,0c-0.5,0.1-1.1,0.2-1.6,0.3l0,0c-2.2,0.5-7.7,1.2-11.2,2.7c-0.6,0.3-1.2,0.5-1.6,0.8c-0.5,0.3-0.9,0.6-1.1,1 c-0.2,0.2-0.3,0.5-0.4,0.8c0,0.1-0.1,0.3-0.1,0.4c0,0,0,0,0,0c0,0.1,0,0.3,0,0.4l0,0c0,0,0,0,0,0C84.7,157.6,85.4,158.7,86.3,159.6 z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M14.3,158.1c-0.4-0.3-0.7-0.7-0.9-1.1C13.6,157.4,13.9,157.8,14.3,158.1l2.8,2.9L14.3,158.1z M17.1,161 L17.1,161l13.7,13.7L17.1,161z M90.3,233.6c0.4,0.2,0.9,0.4,1.3,0.5C91.1,234,90.7,233.8,90.3,233.6z" }))));
};

var Icon$O = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 250 250" }, props),
        React__default["default"].createElement("circle", { cx: "125", cy: "125", r: "125", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("style", { type: "text/css" }, "\r\n\t.st0{fill:#FFAD23;}\r\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#633001;}\r\n\t.st2{fill:#FCDC49;}\r\n\t.st3{fill:#633001;}\r\n"),
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { className: "st0", d: "M233.4,95.2c0,0.3,0,0.7-0.1,1.1c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8 c-1.9,1.4-4.3,1.7-6.4,1.1c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0 c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7c-0.1,0-0.2,0-0.2-0.1c-9.7-3.4-20.8-1.2-28.7,6.3h0L17.1,161l-2.9-2.9 c-0.3-0.3-0.7-0.7-0.9-1.1c-1.3-1.9-1.5-4.3-0.8-6.4c0.1-0.3,0.2-0.5,0.3-0.8c0.3-0.6,0.7-1.2,1.2-1.8c0.3-0.3,0.6-0.6,1-0.9l4-2.8 c49.4-35.2,92.3-78.6,127.1-128.2c2-2.9,5.8-3.7,8.8-2.1c0.6,0.3,1.1,0.7,1.6,1.2L173.5,32c-1.5,1.5-2.7,3.2-3.8,4.9c0,0,0,0,0,0.1 c-7,10.9-5.8,25.5,3.8,35.1c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2l0.2-0.2l8.3,8.3l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2 c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2c0,0.2,0.1,0.4,0.1,0.7C233.4,94.6,233.5,94.9,233.4,95.2z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M176.4,106.1c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C178.1,101.5,178.1,104.4,176.4,106.1z" }),
            React__default["default"].createElement("path", { className: "st2", d: "M233.3,96.3c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-1.9,1.4-4.3,1.7-6.4,1.1 c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7 c-0.1,0-0.2,0-0.2-0.1c-9.5-2.8-20.3-0.5-27.8,7c0,0,0,0,0,0l0,0l-0.8-0.8h0L17.1,161h0l21.4-3.2c66.7-9.9,129.7-36.7,183.1-77.6 c0,0,0,0,0,0l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2C233.5,94.5,233.5,95.4,233.3,96.3z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M237.7,83.6l-18.1-18.1c-1.7-1.7-4-2.6-6.3-2.6c-2.4,0-4.6,1-6.3,2.7c0,0-0.1,0.1-0.1,0.1 c-7.5,7.5-19.6,7.5-27.1,0c-7.5-7.5-7.5-19.6,0-27.1c0,0,0.1-0.1,0.1-0.1c1.7-1.7,2.7-3.9,2.7-6.3c0-2.4-0.9-4.7-2.6-6.3l-17-17 C156.1,2,144.6,3,139,11c-34.2,48.8-76.4,91.5-125,126.1l-4,2.9c-8.1,5.8-9.1,17.4-2,24.5l17.3,17.3c1.7,1.7,3.9,2.6,6.3,2.6 c2.4,0,4.6-0.9,6.3-2.6l0,0c7.5-7.5,19.6-7.5,27.1,0c7.5,7.5,7.5,19.6,0,27.1l0,0c-1.7,1.7-2.6,3.9-2.6,6.3c0,2.4,0.9,4.6,2.6,6.3 l17.2,17.2c5.6,5.6,14.5,6.4,20.9,1.7l4-2.8c51.4-36.7,96.2-81.8,132.4-133.5C243.9,97.7,243.2,89.1,237.7,83.6z M232.2,98.9 c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-2.9,2.1-6.9,1.8-9.5-0.8l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7 c-11-11-28.7-11-39.7,0c0,0,0,0,0,0l0,0l-17.3-17.3c-3.1-3.1-2.7-8.4,0.9-10.9l4-2.8c49.3-35.2,92.3-78.6,127.1-128.2 c2.4-3.5,7.4-3.9,10.4-0.9l17,17c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-10.8,11-10.7,28.6,0.2,39.5 c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2l18.1,18.1C233.8,92.3,234.1,96.1,232.2,98.9z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M139.4,62.8l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C134.8,61.1,137.6,61.1,139.4,62.8z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M124,47.5l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C119.5,45.7,122.3,45.7,124,47.5z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M159.8,89.6c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C161.6,85,161.6,87.8,159.8,89.6z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M188.2,111.6l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C183.6,109.9,186.4,109.9,188.2,111.6z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M204.7,128.1l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C200.1,126.4,202.9,126.4,204.7,128.1z" }),
            React__default["default"].createElement("path", { className: "st3", d: "M86.3,159.6c1.8,1.9,4.4,2.9,4.7,3c5.6,1.8,11.6,2.4,18,1.7c19.3-2.1,35.1-17.4,38.1-36.5 c1-6.3,0.5-12.5-1-18.2c-0.4-1.5-1.3-3.9-2.8-5.6c-0.7-0.8-1.6-1.4-2.6-1.7l-0.8-3.8c-0.2-0.9-1-1.4-1.9-1.2l-0.5,0.1l0,0l-0.5,0.1 c-0.9,0.2-1.4,1-1.2,1.9l0.8,3.8c0,0-0.1,0-0.1,0.1c-1.1,0.8-1.6,2-1.8,2.7c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2 c0,0.2-0.1,0.3-0.1,0.3l0,0c0,0.4,0,0.9,0,1.3c0,0.4,0,0.8,0,1.2c0,0.3,0,0.6,0,0.9c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0,0.5 c0,0.5-0.1,0.9-0.1,1.4c0,0.3-0.1,0.5-0.1,0.8c-0.1,0.4-0.1,0.8-0.2,1.3c0,0.3-0.1,0.6-0.1,0.8c-0.1,0.4-0.2,0.8-0.2,1.2 c-0.1,0.3-0.1,0.5-0.2,0.8c-0.1,0.4-0.2,0.8-0.3,1.2c0,0.2-0.1,0.3-0.1,0.5c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.2-0.1,0.4-0.2,0.6 s-0.1,0.4-0.2,0.6c-0.1,0.3-0.2,0.5-0.3,0.8c0,0.1,0,0.1-0.1,0.2c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.1-0.1,0.3-0.2,0.4 c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.3-0.2,0.5-0.3,0.8c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.3-0.3,0.6-0.5,1c0,0,0,0.1-0.1,0.1 c-0.2,0.3-0.3,0.7-0.5,1c-0.1,0.2-0.2,0.5-0.4,0.7c-0.2,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.3,0.6-0.5,0.8c0,0,0,0,0,0 c-0.1,0.1-0.2,0.2-0.2,0.4c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2,0.3-0.3,0.5-0.5,0.8c-0.2,0.3-0.4,0.6-0.7,0.9 c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.3-0.5,0.6-0.7,0.9c-0.2,0.2-0.3,0.4-0.5,0.6c-0.3,0.4-0.6,0.7-1,1.1 c-0.1,0.1-0.2,0.2-0.3,0.4c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.2-0.5,0.5-0.8,0.7 c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0c-0.2,0.1-0.3,0.3-0.5,0.4 c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.4c-0.3,0.2-0.5,0.4-0.8,0.6 l-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.1-0.3,0.2c-0.6,0.4-1.2,0.8-1.8,1.2c-0.6,0.4-1.2,0.7-1.9,1.1 c-0.1,0.1-0.3,0.2-0.4,0.2l-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.5,0.3-1.1,0.6-1.6,0.8c-0.2,0.1-0.4,0.2-0.6,0.3 c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.2-0.8,0.3-1.1,0.5c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.1-0.8,0.3-1.2,0.4 c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0.1-0.4,0.1-0.5,0.1c-0.6,0.2-1.2,0.3-1.8,0.5 c0,0-0.1,0-0.1,0c-0.5,0.1-1.1,0.2-1.6,0.3l0,0c-2.2,0.5-7.7,1.2-11.2,2.7c-0.6,0.3-1.2,0.5-1.6,0.8c-0.5,0.3-0.9,0.6-1.1,1 c-0.2,0.2-0.3,0.5-0.4,0.8c0,0.1-0.1,0.3-0.1,0.4c0,0,0,0,0,0c0,0.1,0,0.3,0,0.4l0,0c0,0,0,0,0,0C84.7,157.6,85.4,158.7,86.3,159.6 z" }),
            React__default["default"].createElement("path", { className: "st1", d: "M14.3,158.1c-0.4-0.3-0.7-0.7-0.9-1.1C13.6,157.4,13.9,157.8,14.3,158.1l2.8,2.9L14.3,158.1z M17.1,161 L17.1,161l13.7,13.7L17.1,161z M90.3,233.6c0.4,0.2,0.9,0.4,1.3,0.5C91.1,234,90.7,233.8,90.3,233.6z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "125", y1: "0", x2: "125", y2: "250", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#AF6E5A" }),
                React__default["default"].createElement("stop", { offset: "0.762157", stopColor: "#AF6E5A" })))));
};

var Icon$N = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$M = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React__default["default"].createElement("path", { d: "M10.9345 10.958C11.2051 10.6893 11.6388 10.6893 11.9093 10.958L13.6976 12.4015H13.7287C14.0904 12.7672 14.0904 13.3601 13.7287 13.7257C13.3669 14.0914 12.7803 14.0914 12.4185 13.7257L10.9345 12.0249L10.8782 11.9614C10.7733 11.8286 10.7153 11.6631 10.7153 11.4915C10.7153 11.2913 10.7942 11.0993 10.9345 10.958ZM6.00435 0C7.5968 0 9.12403 0.639405 10.2501 1.77755C11.3761 2.9157 12.0087 4.45936 12.0087 6.06895C12.0087 9.42074 9.32046 12.1379 6.00435 12.1379C2.68824 12.1379 0 9.42074 0 6.06895C0 2.71716 2.68824 0 6.00435 0Z" })));
};

var Icon$L = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$K = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$J = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$I = function (props) {
    var fill = props.fill;
    return (React__default["default"].createElement(Svg, __assign({ width: "40", height: "40", viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "10" }),
        React__default["default"].createElement("path", { d: "M32 12.3724C31.1174 12.7733 30.1693 13.0441 29.1726 13.1666C30.201 12.5358 30.9704 11.5429 31.3373 10.3733C30.371 10.9616 29.3135 11.3757 28.2107 11.5977C27.4691 10.786 26.4868 10.248 25.4164 10.0672C24.3459 9.88638 23.2472 10.0729 22.2907 10.5978C21.3343 11.1228 20.5737 11.9567 20.127 12.9701C19.6803 13.9836 19.5725 15.1199 19.8203 16.2026C17.8624 16.1018 15.9471 15.5802 14.1986 14.6715C12.4502 13.7628 10.9076 12.4874 9.6711 10.928C9.2483 11.6757 9.0052 12.5425 9.0052 13.4656C9.00473 14.2967 9.20437 15.115 9.58641 15.848C9.96846 16.581 10.5211 17.2059 11.1953 17.6675C10.4134 17.642 9.64877 17.4254 8.96503 17.0358V17.1008C8.96495 18.2664 9.35827 19.3961 10.0782 20.2982C10.7982 21.2004 11.8005 21.8194 12.915 22.0503C12.1897 22.2515 11.4292 22.2811 10.6911 22.137C11.0055 23.1399 11.6181 24.0169 12.4429 24.6452C13.2678 25.2735 14.2636 25.6217 15.2911 25.641C13.5469 27.0446 11.3928 27.806 9.17537 27.8026C8.78257 27.8027 8.39011 27.7792 8 27.7322C10.2508 29.2157 12.871 30.003 15.5469 30C24.6053 30 29.5573 22.3092 29.5573 15.6391C29.5573 15.4224 29.552 15.2036 29.5425 14.9869C30.5057 14.2728 31.3372 13.3886 31.9979 12.3756L32 12.3724Z", fill: fill })));
};

var Icon$H = function (props) {
    var fill = props.fill;
    return (React__default["default"].createElement(Svg, __assign({ width: "40", height: "40", viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "10" }),
        React__default["default"].createElement("path", { d: "M30.38 11.1315L9.12065 19.2774C7.66979 19.8564 7.67818 20.6606 8.85446 21.0192L14.3126 22.7111L26.9411 14.794C27.5383 14.433 28.0838 14.6272 27.6354 15.0227L17.4038 24.198H17.4014L17.4038 24.1992L17.0273 29.7894C17.5788 29.7894 17.8223 29.538 18.1316 29.2414L20.7827 26.6798L26.2972 30.7271C27.314 31.2835 28.0443 30.9975 28.2973 29.7918L31.9172 12.84C32.2877 11.3638 31.3501 10.6954 30.38 11.1315Z", fill: fill })));
};

var Icon$G = function (props) {
    var fill = props.fill;
    return (React__default["default"].createElement(Svg, __assign({ width: "40", height: "40", viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "10" }),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_8685_37440)" },
            React__default["default"].createElement("path", { d: "M29.0101 11.8664C27.3526 11.1189 25.576 10.5664 23.718 10.2522C23.7015 10.249 23.6844 10.2511 23.669 10.2581C23.6537 10.2651 23.6409 10.2766 23.6325 10.2912C23.405 10.691 23.1515 11.2121 22.9738 11.6237C21.0033 11.3293 19 11.3293 17.0295 11.6237C16.8316 11.1675 16.6085 10.7226 16.3611 10.2912C16.3527 10.2765 16.34 10.2646 16.3248 10.2573C16.3095 10.2499 16.2923 10.2474 16.2755 10.2501C14.4187 10.5642 12.642 11.1167 10.9834 11.8653C10.9692 11.8713 10.9571 11.8815 10.9488 11.8946C7.57745 16.8508 6.65337 21.6846 7.10728 26.4578C7.10855 26.4695 7.11217 26.4808 7.11795 26.4911C7.12372 26.5013 7.13152 26.5103 7.14087 26.5174C9.10862 27.95 11.3034 29.0414 13.6333 29.7457C13.6495 29.7507 13.6669 29.7507 13.6831 29.7457C13.6994 29.7407 13.7137 29.7309 13.7243 29.7176C14.2248 29.0459 14.6711 28.3363 15.0525 27.591C15.0752 27.5476 15.0535 27.4956 15.008 27.4783C14.3082 27.2148 13.6301 26.8967 12.98 26.5271C12.9684 26.5205 12.9585 26.511 12.9514 26.4996C12.9443 26.4882 12.9401 26.4752 12.9392 26.4618C12.9384 26.4483 12.9409 26.4349 12.9465 26.4227C12.9521 26.4105 12.9606 26.3998 12.9714 26.3917C13.1079 26.291 13.2444 26.1859 13.3744 26.0808C13.3861 26.0714 13.4002 26.0653 13.4151 26.0634C13.43 26.0615 13.4452 26.0638 13.4589 26.07C17.7131 27.981 22.3205 27.981 26.525 26.07C26.5387 26.0634 26.554 26.0609 26.5691 26.0626C26.5843 26.0643 26.5986 26.0702 26.6105 26.0797C26.7405 26.1859 26.876 26.291 27.0135 26.3917C27.0244 26.3997 27.0331 26.4102 27.0389 26.4223C27.0447 26.4344 27.0473 26.4478 27.0467 26.4612C27.0461 26.4746 27.0421 26.4876 27.0352 26.4992C27.0283 26.5107 27.0186 26.5203 27.007 26.5271C26.3592 26.8998 25.6854 27.2151 24.978 27.4772C24.9671 27.4812 24.9572 27.4874 24.9489 27.4955C24.9406 27.5035 24.9342 27.5133 24.93 27.524C24.9258 27.5348 24.9239 27.5463 24.9245 27.5579C24.9252 27.5694 24.9282 27.5807 24.9335 27.591C25.3235 28.3352 25.7699 29.0437 26.2606 29.7165C26.2708 29.7303 26.285 29.7406 26.3013 29.746C26.3176 29.7515 26.3352 29.7517 26.3516 29.7468C28.6855 29.0444 30.8839 27.9526 32.8538 26.5174C32.8634 26.5107 32.8715 26.502 32.8774 26.4919C32.8834 26.4818 32.8872 26.4705 32.8885 26.4589C33.4301 20.9404 31.9806 16.1456 29.0437 11.8967C29.0365 11.8829 29.0246 11.8721 29.0101 11.8664ZM15.6884 23.5512C14.4079 23.5512 13.3516 22.3931 13.3516 20.9729C13.3516 19.5516 14.3873 18.3946 15.6884 18.3946C16.9992 18.3946 18.0457 19.5613 18.0251 20.9729C18.0251 22.3942 16.9895 23.5512 15.6884 23.5512ZM24.328 23.5512C23.0464 23.5512 21.9912 22.3931 21.9912 20.9729C21.9912 19.5516 23.0258 18.3946 24.328 18.3946C25.6388 18.3946 26.6853 19.5613 26.6647 20.9729C26.6647 22.3942 25.6399 23.5512 24.328 23.5512Z", fill: fill })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_8685_37440" },
                React__default["default"].createElement("rect", { width: "26", height: "26", fill: "white", transform: "translate(7 7)" })))));
};

var Icon$F = function (props) {
    var fill = props.fill;
    return (React__default["default"].createElement(Svg, __assign({ width: "40", height: "40", viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "10" }),
        React__default["default"].createElement("path", { d: "M33 20.2055C33 18.6291 31.7206 17.3496 30.1441 17.3496C29.3673 17.3496 28.6819 17.6466 28.1793 18.1493C26.2373 16.7556 23.5413 15.8417 20.5712 15.7275L21.8735 9.6273L26.1002 10.5183C26.1459 11.5921 27.0369 12.4603 28.1336 12.4603C29.2531 12.4603 30.167 11.5465 30.167 10.4269C30.167 9.30744 29.2531 8.39355 28.1336 8.39355C27.3339 8.39355 26.6485 8.8505 26.3286 9.53591L21.5993 8.53064C21.4622 8.50779 21.3251 8.53064 21.2109 8.59918C21.0967 8.66772 21.0281 8.78196 20.9824 8.91904L19.5431 15.7275C16.5044 15.8189 13.7856 16.7099 11.8207 18.1493C11.3181 17.6695 10.6098 17.3496 9.85589 17.3496C8.27944 17.3496 7 18.6291 7 20.2055C7 21.3707 7.68541 22.3531 8.69069 22.8101C8.64499 23.0842 8.62214 23.3813 8.62214 23.6783C8.62214 28.0649 13.717 31.6062 20.0228 31.6062C26.3286 31.6062 31.4236 28.0649 31.4236 23.6783C31.4236 23.3813 31.4007 23.1071 31.355 22.8329C32.2917 22.376 33 21.3707 33 20.2055ZM13.4657 22.2389C13.4657 21.1194 14.3796 20.2055 15.4991 20.2055C16.6186 20.2055 17.5325 21.1194 17.5325 22.2389C17.5325 23.3584 16.6186 24.2723 15.4991 24.2723C14.3796 24.2723 13.4657 23.3584 13.4657 22.2389ZM24.8207 27.608C23.4271 29.0016 20.7768 29.093 20 29.093C19.2232 29.093 16.5501 28.9788 15.1793 27.608C14.9736 27.4023 14.9736 27.0596 15.1793 26.854C15.3849 26.6484 15.7276 26.6484 15.9332 26.854C16.8014 27.7222 18.6749 28.0421 20.0228 28.0421C21.3708 28.0421 23.2214 27.7222 24.1125 26.854C24.3181 26.6484 24.6608 26.6484 24.8664 26.854C25.0264 27.0825 25.0264 27.4023 24.8207 27.608ZM24.4552 24.2723C23.3357 24.2723 22.4218 23.3584 22.4218 22.2389C22.4218 21.1194 23.3357 20.2055 24.4552 20.2055C25.5747 20.2055 26.4886 21.1194 26.4886 22.2389C26.4886 23.3584 25.5747 24.2723 24.4552 24.2723Z", fill: fill })));
};

var Icon$E = function (props) {
    var fill = props.fill;
    return (React__default["default"].createElement(Svg, __assign({ width: "40", height: "40", viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "10" }),
        React__default["default"].createElement("path", { d: "M21.6656 20.0002C21.6656 24.0852 18.3825 27.3966 14.3329 27.3966C10.2833 27.3966 7 24.0844 7 20.0002C7 15.916 10.283 12.6035 14.3329 12.6035C18.3828 12.6035 21.6656 15.9153 21.6656 20.0002Z", fill: fill }),
        React__default["default"].createElement("path", { d: "M29.7094 20C29.7094 23.8451 28.0679 26.9634 26.0429 26.9634C24.018 26.9634 22.3765 23.8451 22.3765 20C22.3765 16.1549 24.0177 13.0366 26.0427 13.0366C28.0676 13.0366 29.7091 16.1539 29.7091 20", fill: fill }),
        React__default["default"].createElement("path", { d: "M33.0001 20.0003C33.0001 23.4446 32.4229 26.2384 31.7106 26.2384C30.9984 26.2384 30.4214 23.4453 30.4214 20.0003C30.4214 16.5553 30.9986 13.7622 31.7106 13.7622C32.4227 13.7622 33.0001 16.5551 33.0001 20.0003Z", fill: fill })));
};

var Icon$D = function (props) {
    var fill = props.fill;
    return (React__default["default"].createElement(Svg, __assign({ width: "40", height: "40", viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "10" }),
        React__default["default"].createElement("path", { d: "M20.0076 9.3375C23.4831 9.3375 23.8947 9.35275 25.2615 9.41372C26.5318 9.46961 27.2177 9.68302 27.675 9.86086C28.2797 10.0946 28.7166 10.3791 29.1688 10.8313C29.6261 11.2886 29.9056 11.7205 30.1393 12.3252C30.3172 12.7825 30.5306 13.4735 30.5865 14.7387C30.6474 16.1106 30.6627 16.5222 30.6627 19.9926C30.6627 23.4681 30.6474 23.8796 30.5865 25.2464C30.5306 26.5167 30.3172 27.2027 30.1393 27.66C29.9056 28.2646 29.6211 28.7016 29.1688 29.1538C28.7115 29.6111 28.2797 29.8906 27.675 30.1243C27.2177 30.3021 26.5267 30.5155 25.2615 30.5714C23.8896 30.6324 23.478 30.6476 20.0076 30.6476C16.5321 30.6476 16.1206 30.6324 14.7538 30.5714C13.4835 30.5155 12.7975 30.3021 12.3402 30.1243C11.7356 29.8906 11.2986 29.606 10.8464 29.1538C10.3891 28.6965 10.1096 28.2646 9.8759 27.66C9.69807 27.2027 9.48466 26.5116 9.42877 25.2464C9.36779 23.8745 9.35255 23.463 9.35255 19.9926C9.35255 16.5171 9.36779 16.1055 9.42877 14.7387C9.48466 13.4684 9.69807 12.7825 9.8759 12.3252C10.1096 11.7205 10.3942 11.2836 10.8464 10.8313C11.3037 10.374 11.7356 10.0946 12.3402 9.86086C12.7975 9.68302 13.4886 9.46961 14.7538 9.41372C16.1206 9.35275 16.5321 9.3375 20.0076 9.3375ZM20.0076 6.99512C16.4763 6.99512 16.0342 7.01036 14.6471 7.07133C13.265 7.13231 12.3148 7.35588 11.4917 7.67598C10.633 8.01134 9.90639 8.45339 9.18487 9.17999C8.45828 9.90151 8.01622 10.6281 7.68087 11.4817C7.36076 12.31 7.13719 13.255 7.07622 14.6371C7.01524 16.0293 7 16.4714 7 20.0027C7 23.5341 7.01524 23.9762 7.07622 25.3633C7.13719 26.7454 7.36076 27.6955 7.68087 28.5187C8.01622 29.3774 8.45828 30.104 9.18487 30.8255C9.90639 31.547 10.633 31.9941 11.4866 32.3244C12.3148 32.6445 13.2599 32.8681 14.642 32.9291C16.0291 32.99 16.4712 33.0053 20.0025 33.0053C23.5339 33.0053 23.976 32.99 25.3631 32.9291C26.7452 32.8681 27.6953 32.6445 28.5185 32.3244C29.3721 31.9941 30.0987 31.547 30.8202 30.8255C31.5417 30.104 31.9889 29.3774 32.3191 28.5237C32.6392 27.6955 32.8628 26.7504 32.9238 25.3684C32.9848 23.9812 33 23.5392 33 20.0078C33 16.4765 32.9848 16.0344 32.9238 14.6473C32.8628 13.2652 32.6392 12.315 32.3191 11.4919C31.999 10.6281 31.557 9.90151 30.8304 9.17999C30.1089 8.45847 29.3823 8.01134 28.5286 7.68107C27.7004 7.36096 26.7553 7.13739 25.3733 7.07641C23.981 7.01036 23.539 6.99512 20.0076 6.99512Z", fill: fill }),
        React__default["default"].createElement("path", { d: "M20.0078 13.3213C16.3189 13.3213 13.3262 16.3141 13.3262 20.0029C13.3262 23.6918 16.3189 26.6846 20.0078 26.6846C23.6967 26.6846 26.6895 23.6918 26.6895 20.0029C26.6895 16.3141 23.6967 13.3213 20.0078 13.3213ZM20.0078 24.3371C17.6146 24.3371 15.6736 22.3961 15.6736 20.0029C15.6736 17.6097 17.6146 15.6688 20.0078 15.6688C22.401 15.6688 24.342 17.6097 24.342 20.0029C24.342 22.3961 22.401 24.3371 20.0078 24.3371Z", fill: fill }),
        React__default["default"].createElement("path", { d: "M28.5134 13.057C28.5134 13.9208 27.8122 14.6169 26.9535 14.6169C26.0897 14.6169 25.3936 13.9157 25.3936 13.057C25.3936 12.1932 26.0947 11.4971 26.9535 11.4971C27.8122 11.4971 28.5134 12.1983 28.5134 13.057Z", fill: fill })));
};

var Flex = styled__default["default"].div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$N;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$1A;
        case variants$1.WARNING:
            return Icon$1B;
        case variants$1.SUCCESS:
            return Icon$1C;
        case variants$1.INFO:
        default:
            return Icon$1z;
    }
};
var IconLabel = styled__default["default"].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default["default"].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? "".concat(withHandlerSpacing, "px") : "12px");
});
var CloseHandler = styled__default["default"].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default["default"](Flex)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default["default"].createElement(StyledAlert, null,
        React__default["default"].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default["default"].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default["default"].createElement(Details, { hasHandler: !!onClick },
            React__default["default"].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default["default"].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default["default"].createElement(CloseHandler, null,
            React__default["default"].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default["default"].createElement(Icon$15, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$M, templateObject_2$g, templateObject_3$9, templateObject_4$5;

var Separator = styled__default["default"].div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default["default"].ul(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum, true), [item], false);
        }
        return __spreadArray(__spreadArray([], accum, true), [
            React__default["default"].createElement(Separator, { "aria-hidden": true, key: "seperator-".concat(index) }, separator),
            item,
        ], false);
    }, []);
};
var DefaultSeparator = React__default["default"].createElement(Icon$17, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default["default"].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default["default"].createElement("li", { key: "child-".concat(index) }, item)); })));
};
var templateObject_1$L, templateObject_2$f;

var sizes$1 = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: ".concat(theme.colors.backgroundDisabled, ";\n      border-color: ").concat(theme.colors.backgroundDisabled, ";\n      box-shadow: none;\n      color: ").concat(theme.colors.textDisabled, ";\n      cursor: not-allowed;\n    }\n  ");
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) {
    return function (_a) {
        var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
        return theme.button[variant][prop];
    };
};
var StyledButtonSquare = styled__default["default"].button(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  align-items: center;\n  background-color: #ffb300;\n  border-radius: 5px;\n  border: none;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: #ffb300;\n  border-radius: 5px;\n  border: none;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var _b = _a.fontWeight, fontWeight = _b === void 0 ? 600 : _b;
    return fontWeight;
}, function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "36px" : "36px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButtonSquare.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$K;

var ButtonSquare = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, fontFamily = _a.fontFamily, color = _a.color, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled", "fontFamily", "color"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default["default"].createElement(StyledButtonSquare, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled, fontFamily: fontFamily, color: color }),
        React__default["default"].isValidElement(startIcon) &&
            React__default["default"].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default["default"].isValidElement(endIcon) &&
            React__default["default"].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
ButtonSquare.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes$1.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButtonSquare = styled__default["default"](ButtonSquare)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$J;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$2.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default["default"].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$I;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes$2.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$2.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default["default"].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default["default"](Button)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background-color: transparent;\n  color: rgba(122, 122, 122, 1);\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n  font-family: ", ";\n  font-size: ", ";\n"], ["\n  background-color: transparent;\n  color: rgba(122, 122, 122, 1);\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n  font-family: ", ";\n  font-size: ", ";\n"])), function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "16px";
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes$2.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$2.PRIMARY : _d, as = _a.as, fontFamily = _a.fontFamily, fontSize = _a.fontSize, isMobile = _a.isMobile, props = __rest(_a, ["isActive", "size", "variant", "as", "fontFamily", "fontSize", "isMobile"]);
    if (!isActive) {
        return (React__default["default"].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants$2.PRIMARY || variants$2.YELLOW ? "primary" : "textSubtle", fontFamily: fontFamily, fontSize: fontSize, isMobile: isMobile }, props)));
    }
    return (React__default["default"].createElement(Button, __assign({ as: as, size: size, variant: variant, isMobile: isMobile, fontFamily: fontFamily, fontSize: fontSize }, props)));
};
var templateObject_1$H;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow$1 = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard$1 = styled__default["default"].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard$1.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$G;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default["default"].createElement(StyledCard$1, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default["default"].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$F;

var CardHeader = styled__default["default"].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$E;

var CardFooter = styled__default["default"].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$D;

var StyledCardRibbon = styled__default["default"].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n  font-family: ", ";\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n  font-family: ", ";\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "text" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "text" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, fontWeight = _a.fontWeight;
    return (React__default["default"].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default["default"].createElement(Text, { as: "p", fontWeight: fontWeight, color: "white" }, text)));
};
var templateObject_1$C;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default["default"].input.attrs({ type: "checkbox" })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 22%;\n    left: 5%;\n    right: 10%;\n    width: 75%;\n    height: 75%;\n    margin: auto;\n    transform: rotate(-5deg);\n    transition: border-color 0.2s ease-in-out;\n    background-repeat: no-repeat, no-repeat;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-image: url('data:image/svg+xml, <svg viewBox=\"0 0 14 12\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z\" fill=\"white\"/>\n      </svg>');\n\n      background-repeat: no-repeat, no-repeat;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 22%;\n    left: 5%;\n    right: 10%;\n    width: 75%;\n    height: 75%;\n    margin: auto;\n    transform: rotate(-5deg);\n    transition: border-color 0.2s ease-in-out;\n    background-repeat: no-repeat, no-repeat;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-image: url('data:image/svg+xml, <svg viewBox=\"0 0 14 12\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z\" fill=\"white\"/>\n      </svg>');\n\n      background-repeat: no-repeat, no-repeat;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.yellow;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.yellow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.yellow;
});
Checkbox.defaultProps = {
    scale: scales$2.MD,
};
var templateObject_1$B;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default["default"].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default["default"].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default["default"].createElement(Container$4, null,
        target,
        React__default["default"].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$A, templateObject_2$e;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$4;
var style = (_a$4 = {},
    _a$4[sizes.MD] = {
        fontSize: "20px",
    },
    _a$4[sizes.LG] = {
        fontSize: "24px",
    },
    _a$4[sizes.XL] = {
        fontSize: "40px",
    },
    _a$4[sizes.XXL] = {
        fontSize: "64px",
    },
    _a$4);
var Heading = styled__default["default"](Text).attrs({ bold: true })(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  ", "\n  font-weight: ", ";\n  line-height: 1.1;\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  line-height: 1.1;\n  text-align: ", ";\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD];
}, function (_a) {
    var _b = _a.fontWeight, fontWeight = _b === void 0 ? 400 : _b;
    return fontWeight;
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$z;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$2 = styled__default["default"].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$y;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"".concat(src, "\")");
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default["default"].createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default["default"].img(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default["default"].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image$1 = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default["default"].createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default["default"].createElement(StyledImage, { src: src, alt: alt }) : React__default["default"].createElement(Placeholder, null)));
};
var templateObject_1$x, templateObject_2$d;

var FarmApe = function () {
    return (React__namespace.createElement("svg", { width: 122, height: 170, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__namespace.createElement("path", { opacity: 0.2, d: "M55.413 166.617c10.94 0 19.81-2.128 19.81-4.752 0-2.624-8.87-4.751-19.81-4.751s-19.81 2.127-19.81 4.751c0 2.624 8.87 4.752 19.81 4.752z", fill: "#0A080A" }),
        React__namespace.createElement("path", { opacity: 0.2, d: "M55.413 169.675c17.938 0 32.48-3.497 32.48-7.81s-14.542-7.81-32.48-7.81c-17.939 0-32.48 3.497-32.48 7.81s14.541 7.81 32.48 7.81z", fill: "#0A080A" }),
        React__namespace.createElement("path", { d: "M60.588 74.885H49.137v19.777h11.451V74.885z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M74.479 97.603v36.407c0 1.248-.179 2.465-.476 3.623a12.352 12.352 0 01-.833 2.287 14.925 14.925 0 01-1.487 2.494 15.838 15.838 0 01-1.755 1.96c-.119.119-.238.208-.357.327a14.3 14.3 0 01-4.521 2.613 14.271 14.271 0 01-4.67.802H49.315c-2.38 0-4.61-.594-6.573-1.633a14.523 14.523 0 01-2.617-1.782c-.685-.564-1.28-1.218-1.845-1.901-.119-.148-.267-.326-.386-.475a12.393 12.393 0 01-1.487-2.583c-.298-.654-.536-1.366-.744-2.079a14.58 14.58 0 01-.476-3.623V97.603c0-5.85 4.759-10.602 10.619-10.602H63.8c5.919 0 10.678 4.752 10.678 10.602z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M65.08 94.84c-6.514 2.168-13.296 2.228-20.405-.089-2.736-.89-5.562 1.129-5.562 3.98v33.616c0 5.969 4.849 10.779 10.797 10.779h9.875c5.979 0 10.797-4.84 10.797-10.779V98.82c0-2.821-2.766-4.87-5.502-3.98z", fill: "#F5DCB4" }),
        React__namespace.createElement("path", { d: "M73.527 159.251h-.952c.12-.475.297-1.069.535-1.841.893-2.88-.089-6.444-1.19-9.087a28.563 28.563 0 00-1.07-2.286c-.357-.683-.654-1.188-.803-1.485-.03-.059-.09-.119-.12-.208a2.888 2.888 0 00-3.777-.802c-1.249.743-1.725 2.317-1.16 3.623.03.03.03.06.06.119l.09.178c.505.832 1.04 1.93 1.486 3.059.803 1.96 1.368 4.068 1.012 5.197-1.13 3.712-1.904 6.176.178 8.047.476.446 1.398 1.248 5.8 1.158a2.854 2.854 0 002.796-2.91c0-1.544-1.309-2.791-2.885-2.762zM41.612 152.333c-.238-.505-.268-1.188-.179-1.93.179-1.307.744-2.792 1.339-3.92.119-.238.238-.446.357-.624.148-.238.238-.475.327-.742a2.851 2.851 0 00-1.25-3.178c-1.308-.802-3.033-.416-3.866.861-.03.03-.03.06-.06.089-.119.208-.565.921-1.011 1.931-.416.92-.892 2.108-1.19 3.415-.505 2.078-.595 4.454.417 6.563.714 1.514 1.16 2.613 1.398 3.355l-1.071.178a2.852 2.852 0 00-2.469 3.208c.208 1.544 1.666 2.643 3.212 2.435 4.343-.594 5.116-1.515 5.533-2.02 1.19-1.425 1.398-3.623-1.487-9.621z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M.03 40.794S-3.093 28.292 54.788 28.47c57.882.178 56.068 12.324 56.068 12.324s-.685 12.977-72.457 10.513C-.149 50 .03 40.794.03 40.794z", fill: "#FFEDD9" }),
        React__namespace.createElement("path", { d: "M31.142 44.506c-.506 1.9-.803 3.86-.803 5.79v.416c.03 2.376-.268 4.722-.803 7.038-1.101-.386-2.231-1.187-3.302-2.524-2.826-3.563-1.874-9.324 1.606-10.66 1.339-.505 2.44-.416 3.302-.06z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M31.142 44.506c-.506 1.9-.803 3.86-.803 5.79v.416c.03 2.376-.268 4.722-.803 7.038-1.101-.386-2.231-1.187-3.302-2.524-2.826-3.563-1.874-9.324 1.606-10.66 1.339-.505 2.44-.416 3.302-.06z", fill: "#F5DCB4" }),
        React__namespace.createElement("path", { d: "M83.283 55.227c-1.07 1.366-2.201 2.138-3.302 2.524-.535-2.316-.832-4.662-.803-7.038v-.416c0-1.96-.267-3.92-.803-5.82.863-.327 1.963-.446 3.302.06 3.51 1.365 4.432 7.126 1.606 10.69z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M83.283 55.227c-1.07 1.366-2.201 2.138-3.302 2.524-.535-2.316-.832-4.662-.803-7.038v-.416c0-1.96-.267-3.92-.803-5.82.863-.327 1.963-.446 3.302.06 3.51 1.365 4.432 7.126 1.606 10.69z", fill: "#F5DCB4" }),
        React__namespace.createElement("path", { d: "M72.427 57.84a6.209 6.209 0 00-.684 5.404c.475 1.366.892 2.91.892 4.068 0 8.404-7.972 15.235-17.817 15.235-9.845 0-17.816-6.83-17.816-15.235 0-1.158.416-2.702.892-4.068.625-1.811.327-3.801-.684-5.405a9.595 9.595 0 01-.655-1.217 9.77 9.77 0 01-.892-4.039c0-5.583 4.76-10.126 10.648-10.126 1.993 0 3.837.505 5.414 1.395 1.963 1.1 4.313 1.1 6.246 0 1.577-.89 3.45-1.395 5.413-1.395 5.89 0 10.649 4.514 10.649 10.126a9.77 9.77 0 01-.893 4.039c-.267.416-.475.831-.713 1.217z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M72.427 57.84a6.209 6.209 0 00-.684 5.404c.475 1.366.892 2.91.892 4.068 0 8.404-7.972 15.235-17.817 15.235-9.845 0-17.816-6.83-17.816-15.235 0-1.158.416-2.702.892-4.068.625-1.811.327-3.801-.684-5.405a9.595 9.595 0 01-.655-1.217 9.77 9.77 0 01-.892-4.039c0-5.583 4.76-10.126 10.648-10.126 1.993 0 3.837.505 5.414 1.395 1.963 1.1 4.313 1.1 6.246 0 1.577-.89 3.45-1.395 5.413-1.395 5.89 0 10.649 4.514 10.649 10.126a9.77 9.77 0 01-.893 4.039c-.267.416-.475.831-.713 1.217z", fill: "#F5DCB4" }),
        React__namespace.createElement("path", { d: "M45.686 69.183c-.624 0-1.1.535-1.01 1.158.624 4.514 4.907 7.989 10.112 7.989 5.176 0 9.459-3.475 10.113-7.989a1.01 1.01 0 00-1.011-1.158H45.686z", fill: "#4E3F3F" }),
        React__namespace.createElement("path", { d: "M48.899 76.667a11.095 11.095 0 005.86 1.692c2.17 0 4.193-.623 5.859-1.692-.744-2.554-3.094-1.96-5.86-1.96-2.766 0-5.116-.594-5.86 1.96z", fill: "#E6646E" }),
        React__namespace.createElement("path", { d: "M82.897 42.665c-2.112-.832-3.778-.386-4.968.297a43.27 43.27 0 00-.981-2.495 19.43 19.43 0 00-.893-1.752c-3.242-5.91-8.655-10.78-14.901-12.858l-.12-3.356-4.015 2.435c-.148-.03-.327-.03-.476-.06-.297-.029-.595-.059-.892-.059l-.595-2.524-.178-.742c-.209 0-.387 0-.595.03-3.748.296-5.622 3.712-5.92 4.305-6.216 2.08-11.659 6.979-14.871 12.859a19.406 19.406 0 00-.893 1.752 18.117 18.117 0 00-.981 2.494c-.06-.03-.09-.059-.149-.089-1.16-.623-2.796-.98-4.818-.208-4.432 1.723-5.622 8.998-2.053 13.572 1.458 1.84 3.005 2.85 4.492 3.326-.03.089-.03.178-.06.237a17.318 17.318 0 00-.416 3.712c0 8.671 6.424 16.155 15.615 19.451a32.08 32.08 0 006.663 1.574c1.16.148 2.35.208 3.57.237h.267c14.426 0 26.115-9.502 26.115-21.232 0-1.277-.149-2.524-.416-3.712-.03-.09-.03-.178-.06-.238 1.487-.445 3.034-1.455 4.492-3.326 3.658-4.603 2.468-11.908-1.963-13.63zm-51.755 1.84c-.506 1.901-.803 3.861-.803 5.792v.415c.03 2.376-.268 4.722-.803 7.038-1.1-.386-2.231-1.188-3.302-2.524-2.825-3.563-1.874-9.324 1.606-10.66 1.339-.506 2.44-.416 3.302-.06zm41.939 12.117a9.606 9.606 0 01-.654 1.217 6.209 6.209 0 00-.684 5.405c.475 1.366.892 2.91.892 4.069 0 8.403-7.972 15.234-17.817 15.234-9.845 0-17.816-6.83-17.816-15.234 0-1.159.416-2.703.892-4.069.625-1.811.327-3.801-.684-5.405a9.593 9.593 0 01-.655-1.217 9.771 9.771 0 01-.892-4.039c0-5.583 4.76-10.126 10.648-10.126 1.993 0 3.837.505 5.414 1.396 1.963 1.098 4.313 1.098 6.246 0 1.577-.891 3.45-1.396 5.413-1.396 5.89 0 10.649 4.514 10.649 10.126-.06 1.455-.387 2.821-.952 4.039zm10.202-1.396c-1.07 1.366-2.2 2.138-3.302 2.524-.535-2.316-.832-4.662-.802-7.038v-.415c0-1.96-.268-3.92-.804-5.82.863-.327 1.963-.446 3.302.059 3.51 1.366 4.432 7.127 1.606 10.69z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M54.045 62.86l-.327.742c-.09.237-.357.326-.595.207l-2.737-1.247c-.238-.089-.327-.356-.208-.594l.327-.742c.09-.238.357-.327.595-.208l2.737 1.247c.208.09.327.356.208.594zM55.502 62.858l.327.742c.09.238.357.327.595.208l2.737-1.247c.238-.089.327-.356.208-.594l-.327-.742c-.09-.238-.357-.327-.595-.208l-2.737 1.247c-.208.09-.297.357-.208.594zM45.628 56.621c-1.696 0-3.064-1.306-3.064-2.88v-.95c0-1.604 1.368-2.88 3.064-2.88 1.695 0 3.063 1.306 3.063 2.88v.95c-.03 1.603-1.398 2.88-3.063 2.88z", fill: "#4E3F3F" }),
        React__namespace.createElement("path", { d: "M45.627 49.88v3.386c0 .802.685 1.455 1.517 1.455.833 0 1.517-.653 1.517-1.455v-.475c0-1.603-1.368-2.91-3.034-2.91z", fill: "#5D5360" }),
        React__namespace.createElement("path", { d: "M45.627 52.761c.558 0 1.011-.425 1.011-.95 0-.525-.453-.95-1.011-.95-.559 0-1.012.425-1.012.95 0 .525.453.95 1.012.95z", fill: "#fff" }),
        React__namespace.createElement("path", { d: "M63.95 56.622c-1.696 0-3.065-1.306-3.065-2.88v-.95c0-1.604 1.369-2.88 3.064-2.88s3.064 1.306 3.064 2.88v.95c-.03 1.604-1.398 2.88-3.064 2.88z", fill: "#4E3F3F" }),
        React__namespace.createElement("path", { d: "M63.95 49.88v3.386c0 .802.684 1.455 1.516 1.455.833 0 1.517-.653 1.517-1.455v-.475c0-1.603-1.368-2.91-3.034-2.91z", fill: "#5D5360" }),
        React__namespace.createElement("path", { d: "M63.95 52.761c.558 0 1.01-.425 1.01-.95 0-.525-.452-.95-1.01-.95-.56 0-1.012.425-1.012.95 0 .525.453.95 1.011.95z", fill: "#fff" }),
        React__namespace.createElement("path", { d: "M78.048 42.19H30.785V31.767l23.32-13.958 23.943 13.957V42.19z", fill: "#FFEDD9" }),
        React__namespace.createElement("path", { d: "M35.603 10.385l-1.487 18.738 41.314 3.118-7.257-27.944S66.359-1.79 59.458.526c-6.9 2.316-23.855 9.859-23.855 9.859z", fill: "#FFEDD9" }),
        React__namespace.createElement("path", { d: "M74.627 29.093c-5.68-.386-12.254-.593-19.839-.623-8-.03-14.812.208-20.672.594l.536-6.86c7.436 0 14.842-.06 22.278-.267 5.116-.149 10.44-.09 15.705-.416l1.992 7.572z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M48.215 86.376H44.05v14.076h4.165V86.376zM65.704 86.376H61.54v14.076h4.164V86.376zM76.77 128.605c0 .357 0 .683-.03 1.04a43.17 43.17 0 01-1.517 10.334 40.783 40.783 0 01-2.112 5.969l-1.012 2.287-.208.089-5.294 2.227a24.569 24.569 0 00-1.487-3.059l-.09-.178a14.272 14.272 0 01-4.67.802H49.287c-2.38 0-4.61-.594-6.574-1.634-.594 1.129-1.16 2.643-1.338 3.92l-5.413-2.167-1.369-4.633a37.868 37.868 0 01-.892-3.623 42.905 42.905 0 01-.833-8.523v-2.851a43.431 43.431 0 013.718-17.55l4.135-9.325c.327-.772 1.1-1.247 1.933-1.247h24.241c.833 0 1.577.505 1.934 1.247l4.134 9.325a43.861 43.861 0 012.796 8.582c.714 2.94 1.011 5.939 1.011 8.968z", fill: "#473835" }),
        React__namespace.createElement("path", { d: "M63.98 107.491H46.102v13.156h17.876v-13.156zM76.769 128.575H32.956v2.108H76.77v-2.108z", fill: "#271D24" }),
        React__namespace.createElement("path", { d: "M53.36 129.615v10.334c1.845 0 3.361-1.515 3.361-3.356v-6.978h-3.36zM76.77 129.615a43.17 43.17 0 01-1.518 10.334c-5.621 0-10.172-4.544-10.172-10.156v-.178h11.69zM44.645 129.615v.178c0 5.612-4.55 10.156-10.172 10.156h-.684a42.912 42.912 0 01-.833-8.523v-1.811h11.69z", fill: "#271D24" }),
        React__namespace.createElement("path", { d: "M45.627 104.67a1.664 1.664 0 100-3.326 1.664 1.664 0 100 3.326zM63.622 104.67a1.664 1.664 0 100-3.326 1.664 1.664 0 100 3.326z", fill: "#F9AB6D" }),
        React__namespace.createElement("path", { d: "M23.111 128.338h-.178l-2.796-.178c-1.577-.089-2.766-1.455-2.677-3.029.089-1.574 1.457-2.762 3.034-2.673h.119l1.636-13.957a2.77 2.77 0 01.743-1.604l16.092-17.401c1.07-1.159 2.885-1.218 4.045-.149 1.16 1.07 1.22 2.88.149 4.039L27.81 110.105l-1.844 15.709a2.862 2.862 0 01-2.856 2.524zM85.097 111.708a2.935 2.935 0 01-2.111-.92L66.924 93.386c-1.07-1.158-1.011-2.97.149-4.039 1.16-1.069 2.974-1.01 4.045.149l12.284 13.303 3.837-19.183c.208-1.07 1.011-1.9 2.052-2.198l5.116-1.366a2.853 2.853 0 013.51 2.02 2.848 2.848 0 01-2.023 3.504l-3.39.92-4.58 22.926a2.874 2.874 0 01-2.023 2.197 3.66 3.66 0 01-.803.089z", fill: "#A16552" }),
        React__namespace.createElement("path", { d: "M23.469 145.562l.922-1.752 1.933 1.01c.208.119.208.475.03.831l-.238.446c-.178.356-.506.564-.714.445l-1.933-.98z", fill: "#AC752C" }),
        React__namespace.createElement("path", { d: "M23.468 145.562l.446-.861 2.32 1.188-.119.238c-.178.356-.505.564-.714.445l-1.933-1.01z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M22.278 145.622a10.939 10.939 0 01-2.707-1.722c-4.7-4.009-5.235-11.077-1.22-15.769a10.787 10.787 0 012.41-2.108c.06-.03.714-.386 1.368-.446.327-.029.684 0 .952.208.03.03.06.06.09.06.03.029.059.059.059.089.149.237.119.623 0 1.069-.298.95-1.041 2.138-1.309 2.672-.06.119-.149.268-.208.386v.03c-.06.149-.149.297-.208.416-.03.03-.03.089-.06.119-.03.029-.03.089-.06.119-.029.029-.029.089-.059.118-.03.06-.03.089-.06.149-.029.089-.088.208-.118.297-.03.059-.03.119-.06.178-.06.148-.119.327-.148.475-.03.059-.03.089-.03.149 0 .059-.03.089-.03.148-.03.148-.06.297-.119.445v.06a5.45 5.45 0 00-.119.683c-.03.208-.06.416-.06.653v.119c0 .148-.03.297-.03.416v.089c0 .416 0 .831.03 1.217 0 .089 0 .149.03.238 0 .089.03.148.03.237v.03c0 .03 0 .089.03.119.03.119.03.238.06.356 0 .06.03.119.03.178.029.09.029.179.059.297 0 .03.03.06.03.119.03.119.059.267.089.386.148.565.357 1.129.594 1.663v.03c.09.208.179.416.298.594.06.089.09.178.149.267.03.06.089.149.119.208l.03.03c.089.148.178.326.297.475a11.29 11.29 0 002.022 2.286c.09.06.179.149.268.208l.06.06.03.029s0 .03.029.03c0 0 0 .03.03.03.119.178.268.445.238.802 0 .267-.09.534-.328.861-.237.297-.565.416-.921.416-.566.118-1.19-.119-1.577-.268z", fill: "#FFB300" }),
        React__namespace.createElement("path", { d: "M24.777 145.562c-.952-.386-1.815-.921-2.648-1.574-.119-.089-.208-.178-.327-.267-4.7-4.009-5.235-11.077-1.22-15.769.596-.683 1.25-1.307 1.964-1.811.119-.09.208-.149.327-.208.06-.06.149-.089.208-.149.03.03.06.06.09.06.03.029.059.059.059.089.149.237.119.623 0 1.069-.297.95-1.041 2.138-1.309 2.672-.06.119-.148.268-.208.386v.03c-.06.149-.149.297-.208.416 0 0 0 .03-.03.03 0 .029-.03.059-.03.089-.03.029-.03.089-.06.118-.029.03-.029.09-.059.119-.03.06-.03.089-.06.149-.029.089-.088.208-.118.297-.03.059-.03.118-.06.178-.03.089-.059.208-.089.297-.03.059-.03.119-.06.178 0 .059-.029.089-.029.148 0 .06-.03.09-.03.149-.03.148-.06.297-.119.445v.06c0 .029 0 .089-.03.119-.03.178-.059.356-.089.564-.03.178-.06.386-.06.564v1.693c0 .089 0 .178.03.267 0 .089.03.148.03.238 0 .089.03.148.03.237v.03c0 .029 0 .089.03.119.03.118.03.237.06.356 0 .059.029.119.029.178.03.089.03.178.06.297 0 .03.03.059.03.119 0 .03.029.059.029.119.03.089.03.178.06.267.03.089.03.148.059.237l.09.268c0 .029.029.089.029.119 0 .029.03.059.03.118.03.089.06.149.089.238.03.089.06.148.09.237l.088.179c.03.089.09.178.12.267v.03c.03.089.089.178.118.237.03.06.06.119.09.149.03.059.059.148.089.207l.089.179c.03.029.03.059.06.089.03.059.089.148.119.208l.03.029c.029.06.059.119.118.178.03.06.06.09.09.149s.059.089.089.148c.06.06.089.149.148.208.03.03.06.06.09.119l.178.267c.03.06.09.119.12.179.059.089.148.178.207.237.06.06.09.119.149.178.06.089.149.149.208.238l.149.148.268.268.089.089.03.029c.119.119.267.238.386.357.09.059.179.148.268.208l.06.059.03.03s0 .029.029.029c0 0 0 .03.03.03.119.178.267.446.238.802a1.62 1.62 0 01-.357.891z", fill: "#FFD54F" }),
        React__namespace.createElement("path", { d: "M23.26 127.003c-.149-.654-.476-1.159-1.1-1.426.326-.03.683 0 .951.208.03.03.06.059.09.059.029.03.059.06.059.089.178.268.119.654 0 1.07z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M22.933 146.365a10.44 10.44 0 01-3.183-.06c-6.127-.95-10.291-6.682-9.34-12.799a11.47 11.47 0 01.952-3.059c.03-.059.387-.683.952-1.098.268-.208.565-.327.922-.327h.119c.03 0 .06.03.09.03.267.118.445.475.535.891.238.95.238 2.346.267 2.939 0 .149.03.297.03.446v.03c.03.148.03.326.06.475 0 .059 0 .089.03.148 0 .03 0 .089.03.119 0 .03 0 .089.029.119 0 .059.03.119.03.178.03.119.03.208.059.327 0 .059.03.118.03.178.03.178.089.326.119.475 0 .059.03.089.03.148 0 .06.03.09.059.149.06.148.09.297.149.445v.06l.267.623c.09.208.179.386.268.594 0 .03.03.06.03.089l.03.03c.06.119.148.238.208.386 0 0 0 .03.03.03 0 .03.03.03.03.059.207.357.445.683.683 1.01.06.059.09.119.15.178.059.059.088.119.148.178l.03.03.089.089c.089.089.149.178.238.297.03.059.089.089.119.148.06.06.119.149.208.208l.09.089c.088.09.178.179.267.268.416.415.892.772 1.368 1.098 0 0 .03 0 .03.03.178.119.387.238.565.356.09.06.178.119.268.149.06.03.148.089.238.119l.03.029c.148.09.326.179.505.238.922.416 1.904.713 2.915.891.119.03.208.03.327.059 0 0 .03 0 .09.03.03 0 .03 0 .059.03h.06c.178.089.445.237.624.564.119.208.208.505.149.891-.03.356-.268.653-.566.831-.475.386-1.13.505-1.516.565z", fill: "#FFB300" }),
        React__namespace.createElement("path", { d: "M25.044 145.028c-.03 0-.03 0 0 0a11.706 11.706 0 01-3.063.059c-.149-.029-.268-.029-.417-.059-6.127-.95-10.291-6.682-9.34-12.799.15-.891.387-1.752.744-2.583.06-.119.09-.238.15-.357a.483.483 0 01.118-.208h.12c.029 0 .059.03.088.03.268.119.446.475.536.891.238.95.238 2.346.267 2.94 0 .148.03.297.03.445v.03c.03.148.03.327.06.475v.119c0 .03 0 .089.03.119 0 .029 0 .089.03.118 0 .06.029.119.029.179.03.118.03.207.06.326 0 .06.03.119.03.178.029.09.059.208.088.297.03.06.03.119.06.179 0 .059.03.089.03.148s.03.089.06.149c.059.148.088.296.148.445v.059c0 .03.03.089.03.119.059.178.148.356.208.535.089.178.148.326.238.505 0 .029.03.059.03.089 0 .029.03.059.03.089l.029.029c.03.089.09.149.119.238.03.059.06.089.09.148 0 0 0 .03.029.03 0 .03.03.03.03.06.03.059.089.148.119.207.03.06.06.089.089.149 0 .03.03.03.03.059.059.06.089.149.148.208.03.06.09.119.12.178a.93.93 0 01.148.208c.06.06.09.119.149.178.06.06.089.119.148.179l.03.029.09.089c.089.089.148.178.237.297.03.06.09.089.12.149.059.059.118.148.207.208l.09.089.089.089.208.208c.06.059.12.118.179.148.06.06.148.119.208.178.03.03.06.06.119.089.03.03.06.06.09.06.059.059.118.119.207.148.06.06.149.119.209.149.059.029.119.089.178.119.09.059.149.118.238.178 0 0 .03 0 .03.029.089.06.148.09.238.149.06.03.089.059.148.089.06.03.12.089.179.119l.178.089c.03.03.06.03.09.059.059.03.148.089.237.119l.03.03.179.089c.06.03.089.059.148.059.06.03.12.06.15.089.088.03.148.06.237.089.03.03.09.03.119.06.09.03.208.089.297.119.06.029.12.059.209.089.089.029.208.059.297.118.06.03.149.03.208.06.09.03.209.059.328.089.059.03.119.03.208.059l.357.089c.06 0 .089.03.148.03h.06c.178.03.357.06.505.089.12.03.209.03.328.06 0 0 .03 0 .089.029.03 0 .03 0 .06.03h.059c.178.089.446.238.625.564.059.208.148.505.119.891z", fill: "#FFD54F" }),
        React__namespace.createElement("path", { d: "M13.98 130.032c-.476-.505-1.012-.743-1.696-.624.268-.208.565-.327.922-.327h.12c.029 0 .059.03.088.03.268.148.447.475.566.921z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M14.456 127.952l-.357 1.93-2.142-.415c-.208-.03-.357-.386-.268-.802l.09-.505c.089-.386.327-.683.535-.653l2.142.445z", fill: "#AC752C" }),
        React__namespace.createElement("path", { d: "M14.456 127.953l-.178.98-2.558-.475.06-.267c.089-.386.327-.683.535-.654l2.141.416z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M15.588 127.536c1.04.149 2.082.416 3.063.862 5.651 2.494 8.24 9.087 5.74 14.759a10.944 10.944 0 01-1.695 2.702c-.06.059-.565.564-1.19.802-.297.118-.654.178-.981.089-.03 0-.06-.03-.09-.03-.029-.03-.059-.03-.088-.059-.209-.179-.298-.565-.298-1.01 0-.98.387-2.346.476-2.91.03-.149.06-.297.09-.416v-.03c.029-.148.059-.297.059-.475 0-.059 0-.089.03-.148v-.119-.119c0-.059 0-.119.03-.178 0-.119 0-.208.029-.327v-.178-.505-.148-.149c0-.148-.03-.326-.03-.475v-.059c-.03-.238-.06-.446-.09-.683a4.6 4.6 0 00-.118-.624c0-.03 0-.059-.03-.089v-.03c-.03-.148-.06-.267-.089-.415v-.03-.059c-.119-.386-.238-.773-.387-1.159-.03-.059-.06-.148-.089-.207-.03-.06-.06-.149-.09-.208 0 0 0-.03-.029-.03-.03-.03-.03-.089-.06-.119-.059-.119-.118-.237-.148-.326l-.09-.179c-.059-.089-.089-.178-.148-.267-.03-.03-.03-.059-.06-.089a1.22 1.22 0 00-.208-.327 9.73 9.73 0 00-1.04-1.425s0-.03-.03-.03c-.15-.178-.298-.326-.447-.505a.794.794 0 00-.238-.207l-.178-.179-.03-.029c-.149-.119-.268-.238-.416-.357-.774-.623-1.636-1.188-2.618-1.603-.089-.06-.208-.089-.297-.119 0 0-.03-.03-.09-.059l-.03-.03s-.029 0-.029-.03c0 0-.03 0-.03-.03a1.353 1.353 0 01-.476-.712c-.059-.238-.059-.535.06-.921.149-.356.416-.534.773-.653.536-.208 1.19-.178 1.607-.149z", fill: "#FFB300" }),
        React__namespace.createElement("path", { d: "M13.207 128.338c1.011.119 2.022.356 2.974.743.12.059.268.118.387.148 5.651 2.494 8.239 9.087 5.74 14.759a11.3 11.3 0 01-1.368 2.316c-.089.089-.148.208-.238.297-.06.06-.119.119-.148.178-.03 0-.06-.029-.09-.029-.03-.03-.06-.03-.089-.06-.208-.178-.297-.564-.297-1.009 0-.98.386-2.346.476-2.911.03-.148.06-.297.089-.415v-.03c.03-.148.06-.297.06-.475v-.03-.089-.119-.118c0-.06 0-.119.03-.179 0-.118 0-.208.029-.326v-.178-.327-.178-.149-.148c0-.149-.03-.327-.03-.475v-.06-.119c-.03-.178-.03-.386-.06-.564-.03-.178-.059-.356-.089-.564 0-.03 0-.059-.03-.089 0-.03 0-.06-.03-.089v-.03c-.029-.089-.029-.178-.059-.267 0-.06-.03-.119-.03-.149v-.029-.06c-.03-.089-.03-.148-.059-.237-.03-.06-.03-.119-.06-.179 0-.029-.03-.059-.03-.059-.029-.089-.059-.148-.088-.237-.03-.06-.06-.149-.09-.208l-.089-.268c-.03-.059-.06-.148-.089-.207-.03-.06-.06-.149-.09-.208 0 0 0-.03-.029-.03-.03-.03-.03-.089-.06-.119-.059-.119-.118-.237-.148-.326l-.09-.179c-.059-.089-.089-.178-.148-.267-.03-.03-.03-.059-.06-.089s-.03-.059-.06-.089c-.059-.089-.088-.149-.148-.238-.03-.059-.09-.118-.119-.208-.06-.089-.089-.148-.149-.237-.03-.03-.059-.089-.089-.119s-.03-.059-.06-.089c-.059-.059-.088-.148-.148-.208-.06-.059-.09-.148-.149-.208a.635.635 0 00-.119-.148c-.06-.089-.119-.149-.178-.238 0 0 0-.029-.03-.029-.06-.06-.119-.149-.178-.208l-.12-.119c-.059-.06-.088-.119-.148-.149l-.149-.148-.089-.089-.178-.178-.03-.03-.149-.149c-.03-.029-.09-.059-.119-.118l-.119-.119c-.06-.06-.119-.089-.208-.149-.03-.029-.06-.059-.119-.089a1.563 1.563 0 01-.268-.208c-.06-.029-.119-.089-.178-.118l-.268-.179c-.06-.029-.119-.089-.178-.118l-.268-.178-.178-.09c-.12-.059-.209-.118-.328-.178-.03-.029-.089-.029-.119-.059-.03 0-.03-.03-.06-.03-.148-.089-.326-.148-.475-.237-.09-.06-.208-.089-.297-.119 0 0-.03-.03-.09-.06l-.03-.029s-.03 0-.03-.03c0 0-.029 0-.029-.03a1.353 1.353 0 01-.476-.712c-.119-.179-.119-.476.03-.832z", fill: "#FFD54F" }),
        React__namespace.createElement("path", { d: "M20.048 145.651c.327.594.803.98 1.487 1.039-.297.119-.654.178-.981.089-.03 0-.06-.029-.09-.029-.03-.03-.059-.03-.089-.06-.267-.208-.327-.594-.327-1.039z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M14.724 127.002c.951-.416 1.992-.743 3.063-.891 6.128-.861 11.779 3.415 12.641 9.562.15 1.099.15 2.168-.03 3.207-.03.089-.178.772-.594 1.307-.208.267-.446.505-.773.594-.03 0-.06.029-.12.029h-.119c-.297-.029-.565-.326-.773-.712-.505-.832-.892-2.198-1.13-2.732-.06-.149-.09-.268-.149-.416v-.03l-.178-.445c-.03-.03-.03-.089-.06-.119s-.03-.089-.06-.119c-.029-.03-.029-.059-.059-.119-.03-.059-.06-.089-.06-.148-.059-.089-.088-.178-.148-.297-.03-.059-.06-.119-.09-.149-.088-.148-.178-.297-.267-.415-.03-.06-.06-.089-.09-.119-.029-.059-.059-.089-.088-.119-.09-.119-.179-.267-.268-.386 0 0 0-.03-.03-.03l-.03-.029-.446-.535a6.891 6.891 0 00-.446-.475l-.06-.059-.03-.03-.296-.297-.03-.03-.03-.029a11.919 11.919 0 00-.952-.773c-.06-.059-.119-.089-.178-.148-.06-.03-.12-.089-.179-.119 0 0-.03 0-.03-.029-.03-.03-.059-.06-.119-.06-.089-.059-.208-.148-.327-.208a.618.618 0 01-.148-.089c-.09-.059-.179-.089-.238-.148-.03-.03-.06-.03-.09-.06l-.357-.178a11.058 11.058 0 00-1.635-.653h-.03c-.208-.06-.446-.119-.654-.178-.09-.03-.209-.06-.298-.06-.09-.029-.178-.029-.238-.059h-.06l-.535-.089a10.552 10.552 0 00-3.063 0c-.12.029-.209.029-.328.059h-.208a1.49 1.49 0 01-.773-.356 1.475 1.475 0 01-.417-.802c-.059-.356.06-.683.298-.98.357-.535.952-.861 1.309-1.039z", fill: "#FFB300" }),
        React__namespace.createElement("path", { d: "M13.117 128.902a11.148 11.148 0 012.915-.951c.15-.029.268-.059.417-.059 6.127-.832 11.778 3.445 12.64 9.562.12.921.15 1.812.06 2.673 0 .119-.03.267-.06.386 0 .089-.029.148-.029.237-.03 0-.06.03-.119.03h-.119c-.297-.03-.565-.327-.773-.713-.506-.831-.892-2.197-1.13-2.732-.06-.148-.09-.267-.15-.415v-.03l-.178-.446s0-.029-.03-.029c0-.03-.03-.06-.03-.089-.029-.03-.029-.089-.058-.119-.03-.03-.03-.06-.06-.119s-.06-.089-.06-.148c-.059-.09-.089-.179-.148-.297a.647.647 0 00-.09-.149 1.203 1.203 0 01-.148-.267.647.647 0 00-.09-.149.4.4 0 00-.089-.118c-.03-.06-.06-.089-.089-.119-.09-.119-.178-.267-.268-.386 0 0 0-.03-.03-.03l-.03-.03a7.476 7.476 0 01-.088-.089l-.357-.445c-.12-.149-.238-.267-.387-.416l-.06-.059-.059-.06-.03-.029-.178-.179-.12-.118-.029-.03-.03-.03c-.059-.059-.119-.119-.178-.148l-.119-.119-.06-.059a.783.783 0 00-.178-.149c-.06-.059-.119-.089-.178-.148-.06-.06-.15-.119-.209-.179-.06-.059-.119-.089-.178-.148-.06-.03-.119-.089-.178-.119 0 0-.03 0-.03-.029-.03-.03-.06-.06-.12-.06-.088-.059-.207-.148-.326-.208a.618.618 0 01-.15-.089c-.088-.059-.178-.089-.237-.148-.03-.03-.06-.03-.09-.06-.03-.029-.059-.029-.089-.059-.089-.03-.178-.089-.238-.119-.059-.03-.148-.059-.208-.089-.089-.03-.178-.089-.238-.119-.03-.029-.089-.029-.119-.059-.03 0-.06-.03-.089-.03-.09-.03-.149-.059-.238-.089-.09-.03-.149-.059-.238-.089a.427.427 0 00-.208-.059l-.268-.09h-.03l-.267-.089c-.06-.029-.12-.029-.179-.059-.06-.03-.148-.03-.208-.059-.06-.03-.119-.03-.178-.03-.03 0-.09-.03-.12-.03-.088-.029-.178-.029-.237-.059h-.06c-.06 0-.148-.03-.208-.03s-.119-.03-.178-.03c-.06 0-.12-.029-.179-.029-.09 0-.148-.03-.238-.03h-.119c-.119 0-.208-.03-.327-.03h-1.279c-.119 0-.238 0-.357.03h-.209c-.178.03-.356.03-.534.059-.12.03-.209.03-.328.06h-.208a1.484 1.484 0 01-.773-.357c-.298-.237-.476-.504-.536-.89z", fill: "#FFD54F" }),
        React__namespace.createElement("path", { d: "M28.049 140.068c.595.327 1.19.416 1.785.119-.209.267-.447.505-.774.594-.03 0-.06.03-.119.03h-.119c-.267-.09-.535-.357-.773-.743z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M28.703 154.649H14.485c-1.338 0-2.468-.98-2.647-2.286l-2.201-14.908h23.944l-2.201 14.908a2.715 2.715 0 01-2.677 2.286z", fill: "#C8653B" }),
        React__namespace.createElement("path", { d: "M35.455 135.94h-.417c0-7.305-5.948-13.244-13.265-13.244S8.507 128.635 8.507 135.94H8.09c0-7.542 6.128-13.66 13.683-13.66s13.682 6.147 13.682 13.66z", fill: "#C8C8C8" }),
        React__namespace.createElement("path", { d: "M35.306 137.455H8.239a1.053 1.053 0 01-1.041-1.039v-.891c0-.565.476-1.04 1.041-1.04h27.067c.565 0 1.041.475 1.041 1.04v.891c0 .564-.476 1.039-1.041 1.039z", fill: "#9C4F2E" }),
        React__namespace.createElement("path", { d: "M30.428 125.577l-1.487-.208.238-1.663c.03-.178.297-.267.595-.238l.386.06c.298.059.536.208.506.386l-.238 1.663z", fill: "#AC752C" }),
        React__namespace.createElement("path", { d: "M30.428 125.577l-.743-.119.297-1.96.208.03c.298.059.536.208.506.386l-.268 1.663z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M30.757 126.408c-.06.802-.268 1.603-.565 2.376a8.527 8.527 0 01-11.095 4.81 7.828 7.828 0 01-2.111-1.217c-.03-.03-.447-.416-.655-.891-.089-.238-.148-.475-.089-.743 0-.029.03-.059.03-.089 0-.029.03-.059.06-.059.148-.178.416-.238.773-.267.743-.03 1.784.208 2.26.267.12.03.208.03.327.059h.03c.119 0 .238.03.357.03h1.428c.119 0 .238-.03.357-.03h.06c.178-.029.356-.059.505-.089.148-.029.327-.059.476-.118.03 0 .03 0 .06-.03h.029c.119-.03.208-.06.327-.089h.06c.297-.089.594-.208.862-.327l.179-.089c.059-.03.089-.059.148-.059h.03c.03 0 .06-.03.09-.06a.643.643 0 00.237-.148c.03-.03.09-.06.12-.06.059-.029.118-.089.178-.118.03-.03.06-.03.06-.06l.267-.178a9.172 9.172 0 001.04-.832l.03-.029.358-.357c.059-.059.119-.118.148-.178.03-.059.09-.089.12-.148l.029-.03c.09-.119.178-.208.268-.327a7.047 7.047 0 001.13-2.019c.03-.089.06-.148.09-.237 0 0 0-.03.029-.06 0 0 0-.03.03-.03v-.029l.03-.03a1.13 1.13 0 01.535-.386c.178-.059.416-.059.684.03.268.089.446.297.535.564.179.445.179.98.149 1.277z", fill: "#FFB300" }),
        React__namespace.createElement("path", { d: "M30.101 124.627a8.696 8.696 0 01-.476 2.286c-.03.089-.06.208-.119.297-1.725 4.395-6.692 6.563-11.094 4.811a9.663 9.663 0 01-1.815-.98c-.089-.06-.148-.119-.238-.178-.06-.03-.089-.089-.148-.119 0-.03.03-.059.03-.089s.03-.06.059-.06c.149-.178.416-.237.773-.267.744-.03 1.785.208 2.26.267.12.03.209.03.328.06h.03c.119 0 .238.03.357.03H21.446c.119 0 .238-.03.357-.03h.149c.148-.03.297-.06.416-.06.148-.029.267-.059.416-.089.03 0 .03 0 .06-.029.03 0 .03 0 .06-.03h.029c.06-.03.119-.03.208-.059.03 0 .09-.03.119-.03h.06c.059-.03.119-.03.178-.06.03 0 .09-.029.119-.029.03 0 .03 0 .06-.03.059-.03.118-.03.178-.059.06-.03.119-.03.149-.06l.178-.089.178-.089c.06-.03.09-.059.15-.059h.029c.03 0 .06-.03.09-.06a.643.643 0 00.237-.148c.03-.03.09-.06.12-.06.059-.029.118-.089.178-.118.03-.03.06-.03.06-.06.029-.029.059-.029.059-.059.06-.03.119-.089.178-.119.06-.03.09-.059.149-.089.06-.03.119-.089.178-.119.03-.029.06-.029.09-.059l.059-.06c.06-.029.09-.089.149-.118.06-.03.089-.089.148-.119.03-.03.09-.06.12-.089.059-.06.118-.089.178-.149l.03-.029.148-.149.09-.089.119-.119c.03-.029.059-.089.089-.119l.06-.059c.029-.059.088-.089.118-.148l.03-.03c.03-.03.06-.089.09-.119l.088-.089c.03-.03.06-.059.09-.119.03-.059.089-.089.119-.148.03-.03.03-.06.06-.089.059-.06.088-.149.148-.208.03-.06.06-.089.09-.149.029-.059.088-.148.118-.208.03-.059.06-.089.09-.148.029-.059.088-.149.118-.208s.06-.089.06-.148c.03-.089.089-.179.119-.238.03-.03.03-.059.06-.089 0 0 0-.03.029-.03.06-.119.119-.237.149-.356.03-.089.06-.149.089-.238 0 0 0-.029.03-.059 0 0 0-.03.03-.03v-.029l.03-.03a1.13 1.13 0 01.535-.386c.238-.06.446-.06.743.03z", fill: "#FFD54F" }),
        React__namespace.createElement("path", { d: "M17.073 130.358c-.446.267-.714.624-.744 1.158-.089-.238-.148-.475-.089-.742 0-.03.03-.06.03-.089 0-.03.03-.06.06-.06.119-.178.416-.237.743-.267z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M31.144 125.755c.357.713.624 1.485.773 2.317.833 4.632-2.26 9.087-6.9 9.918a8.43 8.43 0 01-2.44.089c-.059 0-.594-.119-1.01-.416-.209-.148-.387-.326-.477-.564 0-.03 0-.059-.03-.089v-.089c.03-.208.239-.416.506-.624.625-.415 1.636-.742 2.053-.95.089-.03.208-.089.297-.119h.03c.119-.059.208-.089.327-.148.03-.03.06-.03.09-.06.029-.029.059-.029.088-.059.03 0 .06-.03.09-.059.03-.03.089-.03.119-.06.06-.029.148-.089.208-.119.03-.029.089-.059.119-.089.119-.059.208-.148.327-.207.03-.03.06-.06.09-.06.029-.03.059-.059.088-.059.09-.06.179-.149.298-.208l.03-.03.03-.03c.148-.118.267-.237.386-.356l.357-.356s.03-.03.03-.06l.03-.029c.089-.089.148-.149.208-.238 0 0 0-.03.03-.03l.03-.029c.207-.238.386-.475.564-.743.03-.059.06-.089.09-.148.03-.06.059-.089.089-.149 0 0 0-.029.03-.029.03-.03.03-.06.059-.089.06-.09.09-.149.149-.238.03-.03.06-.089.06-.119.029-.059.059-.119.088-.208 0-.029.03-.059.03-.089.06-.089.09-.178.12-.267a9.29 9.29 0 00.445-1.277v-.03c.06-.178.09-.326.12-.504.029-.09.029-.149.059-.238 0-.059.03-.119.03-.178v-.03c.03-.148.03-.267.059-.416.06-.772.06-1.544-.09-2.316-.029-.089-.029-.178-.059-.238v-.089-.059c0-.149.06-.386.238-.594.12-.148.327-.267.595-.327a.86.86 0 01.744.208c.416.268.684.713.803.98z", fill: "#FFB300" }),
        React__namespace.createElement("path", { d: "M29.655 124.568c0 .029 0 .029 0 0 .357.683.625 1.425.803 2.197.03.089.03.208.06.297.832 4.633-2.26 9.087-6.9 9.919-.685.118-1.37.148-2.053.118-.09 0-.209 0-.298-.029-.06 0-.119 0-.178-.03 0-.03 0-.059-.03-.089v-.089c.03-.208.238-.416.506-.624.624-.416 1.636-.742 2.052-.95.09-.03.208-.089.297-.119h.03c.12-.059.209-.089.327-.148h.03c.03 0 .03-.03.06-.03.03-.03.06-.03.089-.059.03-.03.06-.03.09-.06.029-.03.088-.03.118-.059.06-.03.149-.089.208-.119.03-.03.09-.059.12-.089.059-.03.148-.089.207-.119.03-.03.09-.059.12-.089s.059-.059.089-.059c.03-.03.06-.06.089-.06.09-.059.178-.148.297-.208l.03-.029.03-.03c.03-.03.06-.03.06-.059.118-.089.207-.179.326-.297.12-.089.209-.208.298-.297l.06-.06s.03-.029.03-.059l.029-.03.149-.148.089-.089s0-.03.03-.03l.03-.03c.03-.059.089-.089.118-.148l.09-.089c0-.03.03-.03.03-.06.03-.059.089-.089.118-.148.03-.06.06-.089.09-.149.03-.059.089-.118.119-.178.03-.059.059-.089.089-.148.03-.06.06-.089.089-.149 0 0 0-.03.03-.03.03-.029.03-.059.06-.089.059-.089.088-.148.148-.237.03-.03.06-.089.06-.119.03-.059.059-.119.089-.208 0-.03.03-.059.03-.089s.03-.059.03-.089c.029-.059.059-.119.088-.208a.422.422 0 00.06-.178l.09-.178c0-.03.029-.06.029-.089 0-.03.03-.06.03-.089.03-.06.03-.119.06-.179.029-.059.029-.118.059-.178.03-.059.03-.089.059-.148.03-.06.03-.149.06-.208v-.03c.03-.059.03-.148.059-.208 0-.029.03-.089.03-.118 0-.06.03-.119.03-.179 0-.059.03-.089.03-.148 0-.03 0-.06.029-.089 0-.06.03-.119.03-.178v-.03c0-.059 0-.119.03-.149v-.118-.119c0-.06 0-.119.03-.178v-.089-.238-.178-.238-.178-.237-.149c0-.089-.03-.178-.03-.267v-.149c-.03-.118-.03-.267-.06-.386-.03-.089-.03-.178-.06-.237v-.089-.06a.96.96 0 01.238-.594 1.74 1.74 0 01.625-.326z", fill: "#FFD54F" }),
        React__namespace.createElement("path", { d: "M21.594 136.298c-.238.445-.268.92-.03 1.366-.208-.149-.386-.327-.475-.565 0-.029 0-.059-.03-.089v-.089c.03-.237.238-.445.535-.623z", fill: "#7D551F" }),
        React__namespace.createElement("path", { d: "M84.949 163.141h-.179a1.291 1.291 0 01-1.1-1.425l12.462-94.167a1.293 1.293 0 011.428-1.098c.684.089 1.19.742 1.1 1.425l-12.462 94.166c-.06.624-.595 1.099-1.25 1.099z", fill: "#1C171A" }),
        React__namespace.createElement("path", { d: "M111.302 68.53H83.521c-.416 0-.773-.178-1.011-.505a1.28 1.28 0 01-.209-1.129l9.043-30.052c.208-.683.922-1.07 1.576-.861.684.208 1.07.92.863 1.574l-8.537 28.419h25.104l8.775-29.162c.208-.683.922-1.069 1.576-.861.684.208 1.071.92.863 1.574l-9.043 30.052c-.148.594-.654.95-1.219.95z", fill: "#1C171A" }),
        React__namespace.createElement("path", { d: "M97.411 68.53c-.119 0-.238-.03-.357-.059-.684-.208-1.07-.92-.862-1.574l9.042-30.052c.208-.683.922-1.07 1.576-.861.685.207 1.071.92.863 1.573L98.631 67.61c-.149.564-.654.92-1.22.92z", fill: "#1C171A" })));
};

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default["default"].input(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$w;

var GridLayout$1 = styled__default["default"].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$v;

var GridLayout = styled__default["default"](GridLayout$1)(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$u;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "12px";
        case scales.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default["default"].input.attrs({ type: "radio" })(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales.MD,
    m: 0,
};
var templateObject_1$t;

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor(variant, theme) : "#ffffff";
};
var StyledTag = styled__default["default"].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 300;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 300;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$s;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default["default"].createElement(StyledTag, __assign({}, props),
        React__default["default"].isValidElement(startIcon) &&
            React__default["default"].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default["default"].isValidElement(endIcon) &&
            React__default["default"].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink$2 = styled__default["default"](Text)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  font-weight: ", ";\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  font-weight: ", ";\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (_a) {
    var bold = _a.bold, fontWeight = _a.fontWeight;
    return (bold ? 600 : fontWeight);
});
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default["default"].createElement(StyledLink$2, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$r;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(Link, __assign({ external: true }, props),
        children,
        React__default["default"].createElement(Icon$X, { color: "primary", ml: "4px" })));
};

var Bar = styled__default["default"].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) {
    return props.primary ? "linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%)" : "".concat(props.theme.colors.text, "80");
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default["default"].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: relative;\n  background-color: #7a7a7a;\n  border-radius: 32px;\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: #7a7a7a;\n  border-radius: 32px;\n  height: 16px;\n  overflow: hidden;\n"])));
var templateObject_1$q, templateObject_2$c;

var ProgressBunnyWrapper = styled__default["default"].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$p;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default["default"].createElement(StyledProgress, null,
        showProgressBunny && (React__default["default"].createElement(ProgressBunnyWrapper, { style: { left: "".concat(stepGuard(primaryStep), "%") } },
            React__default["default"].createElement(Icon$R, null))),
        React__default["default"].createElement(Bar, { primary: true, style: { width: "".concat(stepGuard(primaryStep), "%") } }),
        secondaryStep ? React__default["default"].createElement(Bar, { style: { width: "".concat(stepGuard(secondaryStep), "%") } }) : null));
};

var v = "5.8.1";
var fr = 29.9700012207031;
var ip = 0;
var op = 46.0000018736184;
var w = 600;
var h = 600;
var nm = "600x600_Spinner";
var ddd = 0;
var assets = [
	{
		id: "comp_0",
		nm: "Monkey_V1",
		fr: 29.9700012207031,
		layers: [
			{
				ddd: 0,
				ind: 2,
				ty: 4,
				nm: "Shadow 2",
				parent: 27,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 35,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							-197.634,
							-1.916,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												0,
												0
											],
											[
												22.08,
												-23.03
											],
											[
												5.89,
												-6.89
											],
											[
												17.22,
												-82.32
											],
											[
												-51,
												-88.91
											],
											[
												0,
												0
											],
											[
												26.665,
												9.529
											],
											[
												0,
												107.46
											],
											[
												-3.318,
												15.132
											],
											[
												-5.038,
												33.742
											],
											[
												-3.173,
												30.759
											],
											[
												-0.201,
												-0.122
											],
											[
												-4.606,
												10.037
											],
											[
												-3.907,
												7.153
											],
											[
												-76.94,
												25.6
											],
											[
												-46.32,
												3.76
											],
											[
												-2.48,
												-0.02
											]
										],
										o: [
											[
												-8.43,
												-0.84
											],
											[
												-5.52,
												5.74
											],
											[
												-43.39,
												50.86
											],
											[
												-28.87,
												138.17
											],
											[
												43.21,
												75.36
											],
											[
												-28.12,
												-3.323
											],
											[
												-113.55,
												-40.67
											],
											[
												0.005,
												-15.492
											],
											[
												0.081,
												-0.354
											],
											[
												4.511,
												-30.21
											],
											[
												3.296,
												-31.958
											],
											[
												3.555,
												-10.456
											],
											[
												3.373,
												-7.333
											],
											[
												39.88,
												-72.93
											],
											[
												3.61,
												-7.22
											],
											[
												2.36,
												-0.19
											],
											[
												0,
												0
											]
										],
										v: [
											[
												200.999,
												-380.459
											],
											[
												151.999,
												-344.989
											],
											[
												134.839,
												-325.989
											],
											[
												23.959,
												-112.629
											],
											[
												34.319,
												274.761
											],
											[
												150.179,
												389.601
											],
											[
												67.739,
												370.261
											],
											[
												-125.061,
												129.721
											],
											[
												-120.061,
												83.651
											],
											[
												-106.038,
												30.316
											],
											[
												-101.637,
												-68.56
											],
											[
												-88.471,
												-124.639
											],
											[
												-76.221,
												-155.399
											],
											[
												-65.301,
												-177.129
											],
											[
												118.549,
												-336.229
											],
											[
												191.549,
												-389.329
											],
											[
												198.829,
												-389.599
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.305882364511,
										0.247058823705,
										0.247058823705,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 5,
				ty: 3,
				nm: "Null Eyes",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 0,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 0,
								s: [
									-0.005,
									-115.18,
									0
								],
								to: [
									3.912,
									-1.423,
									0
								],
								ti: [
									-3.324,
									-2.18,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 11,
								s: [
									12.423,
									-112.639,
									0
								],
								to: [
									5.196,
									3.117,
									0
								],
								ti: [
									6.11,
									-4.388,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 20,
								s: [
									10.409,
									-81.669,
									0
								],
								to: [
									-4.678,
									3.36,
									0
								],
								ti: [
									3.755,
									11.073,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 29,
								s: [
									-13.777,
									-86.07,
									0
								],
								to: [
									-4.83,
									-14.244,
									0
								],
								ti: [
									-7.858,
									3.767,
									0
								]
							},
							{
								t: 41.0000016699642,
								s: [
									-0.005,
									-115.18,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							50,
							50,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							360,
							360,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 6,
				ty: 4,
				nm: "right-eye-brown copy 2",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							113.165,
							-114.425,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.75
											],
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.75
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.74
											],
											[
												0,
												0
											],
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.74
											]
										],
										v: [
											[
												0.005,
												41.71
											],
											[
												0.005,
												41.71
											],
											[
												-37.725,
												5.96
											],
											[
												-37.725,
												-5.96
											],
											[
												0.005,
												-41.71
											],
											[
												0.005,
												-41.71
											],
											[
												37.725,
												-5.96
											],
											[
												37.725,
												5.96
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										162.6,
										155.6
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.960784375668,
								0.862745165825,
								0.705882370472,
								1
							],
							ix: 3
						},
						o: {
							a: 0,
							k: 100,
							ix: 4
						},
						w: {
							a: 0,
							k: 47.7,
							ix: 5
						},
						lc: 1,
						lj: 1,
						ml: 4,
						bm: 0,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 7,
				ty: 4,
				nm: "Right-eye-shine 3",
				parent: 5,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							81.435,
							45.246,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							27.778,
							27.778,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												-6.942,
												0
											],
											[
												0,
												-6.583
											],
											[
												6.942,
												0
											],
											[
												0,
												6.583
											]
										],
										o: [
											[
												6.942,
												0
											],
											[
												0,
												6.583
											],
											[
												-6.942,
												0
											],
											[
												0,
												-6.583
											]
										],
										v: [
											[
												0,
												-11.92
											],
											[
												12.57,
												0
											],
											[
												0,
												11.92
											],
											[
												-12.57,
												0
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										1,
										1,
										1,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 8,
				ty: 4,
				nm: "Right-eye-light brown",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							132.03,
							-126.345,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												-10.42,
												0
											],
											[
												0,
												9.87
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												0,
												9.87
											],
											[
												10.42,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.71
											]
										],
										v: [
											[
												-18.86,
												-29.79
											],
											[
												-18.86,
												11.92
											],
											[
												0,
												29.79
											],
											[
												18.86,
												11.92
											],
											[
												18.86,
												5.92
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.364705890417,
										0.32549020648,
										0.376470595598,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 9,
				ty: 4,
				nm: "right-eye-brown copy",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							113.165,
							-114.425,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.75
											],
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.75
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.74
											],
											[
												0,
												0
											],
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.74
											]
										],
										v: [
											[
												0.005,
												41.71
											],
											[
												0.005,
												41.71
											],
											[
												-37.725,
												5.96
											],
											[
												-37.725,
												-5.96
											],
											[
												0.005,
												-41.71
											],
											[
												0.005,
												-41.71
											],
											[
												37.725,
												-5.96
											],
											[
												37.725,
												5.96
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.305882364511,
										0.247058823705,
										0.247058823705,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 12,
				ty: 4,
				nm: "Leftt-eye-brown copy 3",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							-113.175,
							-114.425,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.75
											],
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.75
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.74
											],
											[
												0,
												0
											],
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.74
											]
										],
										v: [
											[
												0.005,
												41.71
											],
											[
												0.005,
												41.71
											],
											[
												-37.725,
												5.96
											],
											[
												-37.725,
												-5.96
											],
											[
												0.005,
												-41.71
											],
											[
												0.005,
												-41.71
											],
											[
												37.725,
												-5.96
											],
											[
												37.725,
												5.96
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										162.6,
										155.6
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.960784375668,
								0.862745165825,
								0.705882370472,
								1
							],
							ix: 3
						},
						o: {
							a: 0,
							k: 100,
							ix: 4
						},
						w: {
							a: 0,
							k: 47.7,
							ix: 5
						},
						lc: 1,
						lj: 1,
						ml: 4,
						bm: 0,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 13,
				ty: 4,
				nm: "Left-eye-shine",
				parent: 5,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							18.565,
							45.246,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							27.778,
							27.778,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												-6.942,
												0
											],
											[
												0,
												-6.583
											],
											[
												6.942,
												0
											],
											[
												0,
												6.583
											]
										],
										o: [
											[
												6.942,
												0
											],
											[
												0,
												6.583
											],
											[
												-6.942,
												0
											],
											[
												0,
												-6.583
											]
										],
										v: [
											[
												0,
												-11.92
											],
											[
												12.57,
												0
											],
											[
												0,
												11.92
											],
											[
												-12.57,
												0
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										1,
										1,
										1,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 14,
				ty: 4,
				nm: "Left-eye-light brown",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							-94.31,
							-126.345,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												-10.42,
												0
											],
											[
												0,
												9.87
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												0,
												9.87
											],
											[
												10.42,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.71
											]
										],
										v: [
											[
												-18.86,
												-29.79
											],
											[
												-18.86,
												11.92
											],
											[
												0,
												29.79
											],
											[
												18.86,
												11.92
											],
											[
												18.86,
												5.92
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.364705890417,
										0.32549020648,
										0.376470595598,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 15,
				ty: 4,
				nm: "Leftt-eye-brown copy 2",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							-113.175,
							-114.425,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.75
											],
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.75
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.74
											],
											[
												0,
												0
											],
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.74
											]
										],
										v: [
											[
												0.005,
												41.71
											],
											[
												0.005,
												41.71
											],
											[
												-37.725,
												5.96
											],
											[
												-37.725,
												-5.96
											],
											[
												0.005,
												-41.71
											],
											[
												0.005,
												-41.71
											],
											[
												37.725,
												-5.96
											],
											[
												37.725,
												5.96
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.305882364511,
										0.247058823705,
										0.247058823705,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 16,
				ty: 4,
				nm: "Leftt-eye-white",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							-113.175,
							-114.425,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.75
											],
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.75
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												-20.84,
												0
											],
											[
												0,
												0
											],
											[
												0,
												-19.74
											],
											[
												0,
												0
											],
											[
												20.83,
												0
											],
											[
												0,
												0
											],
											[
												0,
												19.74
											]
										],
										v: [
											[
												0.005,
												41.71
											],
											[
												0.005,
												41.71
											],
											[
												-37.725,
												5.96
											],
											[
												-37.725,
												-5.96
											],
											[
												0.005,
												-41.71
											],
											[
												0.005,
												-41.71
											],
											[
												37.725,
												-5.96
											],
											[
												37.725,
												5.96
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										1,
										1,
										1,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 17,
				ty: 4,
				nm: "Right-nostril",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.667
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.333
									],
									y: [
										0
									]
								},
								t: 0,
								s: [
									0
								]
							},
							{
								i: {
									x: [
										0.667
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.333
									],
									y: [
										0
									]
								},
								t: 22,
								s: [
									-2
								]
							},
							{
								t: 41.0000016699642,
								s: [
									0
								]
							}
						],
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.766,
									y: 0
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 0,
								s: [
									54.049,
									-10.567,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0.303
								},
								t: 11,
								s: [
									54.049,
									-8.437,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.728,
									y: 0
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 22,
								s: [
									54.049,
									1.579,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0.301
								},
								t: 32,
								s: [
									54.049,
									-1.024,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								t: 41.0000016699642,
								s: [
									54.049,
									-10.567,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							21.056,
							-9.475,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												2.428,
												5.315
											],
											[
												0,
												0
											],
											[
												-5.315,
												2.428
											],
											[
												0,
												0
											],
											[
												-2.428,
												-5.315
											],
											[
												0,
												0
											],
											[
												5.315,
												-2.428
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												-2.428,
												-5.315
											],
											[
												0,
												0
											],
											[
												5.315,
												-2.428
											],
											[
												0,
												0
											],
											[
												2.428,
												5.315
											],
											[
												0,
												0
											],
											[
												-5.315,
												2.428
											]
										],
										v: [
											[
												-21.858,
												9.984
											],
											[
												-21.858,
												9.984
											],
											[
												-16.63,
												-4.035
											],
											[
												7.838,
												-15.212
											],
											[
												21.858,
												-9.984
											],
											[
												21.858,
												-9.984
											],
											[
												16.63,
												4.035
											],
											[
												-7.838,
												15.212
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.305882364511,
										0.247058823705,
										0.247058823705,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 18,
				ty: 4,
				nm: "Left-nostril",
				parent: 25,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.667
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.333
									],
									y: [
										0
									]
								},
								t: 0,
								s: [
									0
								]
							},
							{
								i: {
									x: [
										0.667
									],
									y: [
										1
									]
								},
								o: {
									x: [
										0.333
									],
									y: [
										0
									]
								},
								t: 22,
								s: [
									2
								]
							},
							{
								t: 41.0000016699642,
								s: [
									0
								]
							}
						],
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.766,
									y: 0
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 0,
								s: [
									-53.631,
									-8.921,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0.303
								},
								t: 11,
								s: [
									-53.631,
									-6.791,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.727,
									y: 0
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 22,
								s: [
									-53.631,
									3.224,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0.301
								},
								t: 32,
								s: [
									-53.631,
									0.611,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								t: 41.0000016699642,
								s: [
									-53.631,
									-8.921,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							-22.56,
							-9.974,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												-2.454,
												5.317
											],
											[
												0,
												0
											],
											[
												-5.317,
												-2.454
											],
											[
												0,
												0
											],
											[
												2.454,
												-5.317
											],
											[
												0,
												0
											],
											[
												5.317,
												2.454
											],
											[
												0,
												0
											]
										],
										o: [
											[
												0,
												0
											],
											[
												2.454,
												-5.317
											],
											[
												0,
												0
											],
											[
												5.317,
												2.454
											],
											[
												0,
												0
											],
											[
												-2.454,
												5.317
											],
											[
												0,
												0
											],
											[
												-5.317,
												-2.454
											]
										],
										v: [
											[
												-21.867,
												-10.093
											],
											[
												-21.867,
												-10.093
											],
											[
												-7.796,
												-15.277
											],
											[
												16.683,
												-3.979
											],
											[
												21.867,
												10.093
											],
											[
												21.867,
												10.093
											],
											[
												7.796,
												15.277
											],
											[
												-16.683,
												3.979
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.305882364511,
										0.247058823705,
										0.247058823705,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 24,
				ty: 0,
				nm: "Monkey-Mouth",
				parent: 25,
				refId: "comp_1",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							-0.005,
							196.82,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							300,
							456,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.667,
										0.667,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.167,
										0.167,
										0.167
									],
									y: [
										0.167,
										0.167,
										0
									]
								},
								t: 10,
								s: [
									200,
									200,
									100
								]
							},
							{
								i: {
									x: [
										0.833,
										0.833,
										0.833
									],
									y: [
										0.833,
										0.833,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 22,
								s: [
									195,
									188,
									100
								]
							},
							{
								t: 34.0000013848484,
								s: [
									200,
									200,
									100
								]
							}
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				w: 600,
				h: 600,
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 25,
				ty: 4,
				nm: "Face",
				parent: 27,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 0,
								s: [
									0.005,
									115.18,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									-14.995,
									-9.82,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 10.45,
								s: [
									41.505,
									102.68,
									0
								],
								to: [
									14.995,
									9.82,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 19.95,
								s: [
									36.505,
									126.68,
									0
								],
								to: [
									-30.255,
									14.57,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.422,
									y: 1
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 29,
								s: [
									0.505,
									131.68,
									0
								],
								to: [
									-10.505,
									-3.43,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								t: 41.0000016699642,
								s: [
									0.005,
									115.18,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												3.052,
												-4.807
											],
											[
												-7.61,
												-22.46
											],
											[
												0,
												-14.25
											],
											[
												121.63,
												0
											],
											[
												0,
												104.06
											],
											[
												-5.74,
												16.92
											],
											[
												12.7,
												19.92
											],
											[
												2.354,
												5.185
											],
											[
												-0.024,
												17.261
											],
											[
												-72.58,
												0
											],
											[
												-20.435,
												-11.491
											],
											[
												-23.963,
												13.62
											],
											[
												-23.436,
												-0.066
											],
											[
												0,
												-69.12
											],
											[
												7.21,
												-15.682
											]
										],
										o: [
											[
												-12.7,
												19.9
											],
											[
												5.74,
												16.9
											],
											[
												0,
												104.06
											],
											[
												-121.63,
												0
											],
											[
												0,
												-14.22
											],
											[
												7.61,
												-22.43
											],
											[
												-3.059,
												-4.803
											],
											[
												-7.218,
												-15.679
											],
											[
												0,
												-69.1
											],
											[
												23.444,
												-0.059
											],
											[
												23.963,
												13.62
											],
											[
												20.43,
												-11.484
											],
											[
												72.59,
												0
											],
											[
												0.015,
												17.26
											],
											[
												-2.362,
												5.181
											]
										],
										v: [
											[
												217.94,
												-57.765
											],
											[
												209.35,
												9.235
											],
											[
												220.22,
												59.485
											],
											[
												0,
												247.905
											],
											[
												-220.24,
												59.465
											],
											[
												-209.37,
												9.215
											],
											[
												-217.94,
												-57.785
											],
											[
												-226.07,
												-72.785
											],
											[
												-236.99,
												-122.785
											],
											[
												-105.59,
												-247.905
											],
											[
												-38.65,
												-230.465
											],
											[
												38.64,
												-230.465
											],
											[
												105.56,
												-247.885
											],
											[
												236.99,
												-122.765
											],
											[
												226.07,
												-72.765
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.960784316063,
										0.86274510622,
										0.705882370472,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 26,
				ty: 3,
				nm: "Null-Squash-Stretch",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 0,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							300,
							300,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.833,
										0.833,
										0.833
									],
									y: [
										0.833,
										0.833,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 0,
								s: [
									100,
									100,
									100
								]
							},
							{
								i: {
									x: [
										0.833,
										0.833,
										0.833
									],
									y: [
										0.833,
										0.833,
										0.833
									]
								},
								o: {
									x: [
										0.167,
										0.167,
										0.167
									],
									y: [
										0.167,
										0.167,
										0.167
									]
								},
								t: 10,
								s: [
									98,
									102,
									100
								]
							},
							{
								i: {
									x: [
										0.833,
										0.833,
										0.833
									],
									y: [
										0.833,
										0.833,
										0.833
									]
								},
								o: {
									x: [
										0.167,
										0.167,
										0.167
									],
									y: [
										0.167,
										0.167,
										0.167
									]
								},
								t: 20,
								s: [
									102,
									98,
									100
								]
							},
							{
								i: {
									x: [
										0.667,
										0.667,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.167,
										0.167,
										0.167
									],
									y: [
										0.167,
										0.167,
										0
									]
								},
								t: 30,
								s: [
									98,
									102,
									100
								]
							},
							{
								t: 41.0000016699642,
								s: [
									100,
									100,
									100
								]
							}
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 27,
				ty: 4,
				nm: "Head",
				parent: 26,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 0,
								s: [
									0,
									0,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 9,
								s: [
									0.75,
									-6,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 20,
								s: [
									0,
									6,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 29,
								s: [
									-4,
									6,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								t: 41.0000016699642,
								s: [
									0,
									0,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							50,
							50,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												0,
												0
											],
											[
												0.031,
												-0.075
											],
											[
												0.1,
												-24.271
											],
											[
												0,
												-1.64
											],
											[
												6.55,
												-28.58
											],
											[
												0,
												0
											],
											[
												0.23,
												-1.04
											],
											[
												0.005,
												-15.492
											],
											[
												-113.55,
												-40.67
											],
											[
												-28.12,
												-3.323
											],
											[
												-14.707,
												-0.121
											],
											[
												-1.15,
												0
											],
											[
												0,
												145.08
											],
											[
												3.323,
												15.131
											],
											[
												0.25,
												1.02
											],
											[
												0,
												0
											],
											[
												-0.192,
												29.321
											],
											[
												0,
												1.67
											],
											[
												6.479,
												23.482
											],
											[
												0,
												0
											],
											[
												4.609,
												10.03
											],
											[
												3.913,
												7.153
											],
											[
												76.91,
												25.59
											],
											[
												0,
												0
											],
											[
												0,
												0
											],
											[
												2,
												0.19
											],
											[
												3.72,
												0.15
											],
											[
												0,
												0
											],
											[
												0,
												0
											],
											[
												2.36,
												-0.19
											],
											[
												3.57,
												-7.22
											],
											[
												39.85,
												-72.93
											],
											[
												3.367,
												-7.36
											],
											[
												3.555,
												-10.456
											],
											[
												0,
												0
											]
										],
										o: [
											[
												-0.023,
												0.078
											],
											[
												-6.418,
												23.407
											],
											[
												0,
												1.69
											],
											[
												0.37,
												29.36
											],
											[
												0,
												0
											],
											[
												-0.24,
												1
											],
											[
												-3.318,
												15.132
											],
											[
												0,
												107.46
											],
											[
												26.665,
												9.529
											],
											[
												14.603,
												1.751
											],
											[
												1.15,
												0
											],
											[
												178.22,
												0
											],
											[
												0,
												-15.492
											],
											[
												-0.23,
												-1
											],
											[
												0,
												0
											],
											[
												-6.728,
												-28.539
											],
											[
												0,
												-1.66
											],
											[
												-0.091,
												-24.359
											],
											[
												0,
												0
											],
											[
												-3.559,
												-10.449
											],
											[
												-3.367,
												-7.333
											],
											[
												-39.88,
												-73
											],
											[
												0,
												0
											],
											[
												0,
												0
											],
											[
												-2,
												-0.23
											],
											[
												-3.69,
												-0.33
											],
											[
												0,
												0
											],
											[
												0,
												0
											],
											[
												-2.48,
												0
											],
											[
												-46.36,
												3.76
											],
											[
												-76.94,
												25.6
											],
											[
												-3.913,
												7.127
											],
											[
												-4.606,
												10.037
											],
											[
												0,
												0
											],
											[
												0,
												0
											]
										],
										v: [
											[
												-291.865,
												-107.695
											],
											[
												-291.945,
												-107.465
											],
											[
												-301.765,
												-35.635
											],
											[
												-301.765,
												-30.635
											],
											[
												-311.585,
												56.485
											],
											[
												-317.025,
												78.605
											],
											[
												-317.725,
												81.715
											],
											[
												-322.725,
												127.785
											],
											[
												-129.925,
												368.325
											],
											[
												-47.485,
												387.665
											],
											[
												-3.485,
												390.475
											],
											[
												-0.005,
												390.475
											],
											[
												322.685,
												127.765
											],
											[
												317.685,
												81.695
											],
											[
												316.985,
												78.605
											],
											[
												311.575,
												56.455
											],
											[
												301.735,
												-30.645
											],
											[
												301.735,
												-35.645
											],
											[
												291.835,
												-107.725
											],
											[
												286.115,
												-126.575
											],
											[
												273.855,
												-157.315
											],
											[
												262.935,
												-179.045
											],
											[
												79.025,
												-338.175
											],
											[
												77.505,
												-379.595
											],
											[
												27.695,
												-349.685
											],
											[
												21.695,
												-350.315
											],
											[
												10.635,
												-351.055
											],
											[
												3.355,
												-382.375
											],
											[
												1.225,
												-391.515
											],
											[
												-6.055,
												-391.245
											],
											[
												-79.055,
												-338.145
											],
											[
												-262.905,
												-179.045
											],
											[
												-273.825,
												-157.315
											],
											[
												-286.075,
												-126.555
											],
											[
												-291.945,
												-107.465
											]
										],
										c: false
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.631372570992,
										0.396078437567,
										0.321568638086,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 28,
				ty: 4,
				nm: "Left-Inner-Ear",
				parent: 30,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							-298.886,
							-26.078,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												-43.14,
												16.73
											],
											[
												-10.66,
												-4.15
											],
											[
												-18.245,
												-39.964
											],
											[
												0,
												-1.66
											],
											[
												45.015,
												7.795
											],
											[
												13.26,
												16.79
											]
										],
										o: [
											[
												16.3,
												-6.32
											],
											[
												12.263,
												8.036
											],
											[
												6.949,
												27.535
											],
											[
												0.192,
												29.321
											],
											[
												-13.52,
												-4.8
											],
											[
												-34.95,
												-44.23
											]
										],
										v: [
											[
												-33.569,
												-80.817
											],
											[
												7.041,
												-81.647
											],
											[
												71.32,
												-1.313
											],
											[
												69.239,
												51.667
											],
											[
												-12.699,
												82.533
											],
											[
												-53.409,
												51.213
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.960784316063,
										0.86274510622,
										0.705882370472,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 29,
				ty: 4,
				nm: "Left-Ear-SHadow",
				parent: 30,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 35,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												-48.869,
												15.312
											],
											[
												13.654,
												28.066
											],
											[
												0,
												0
											],
											[
												26,
												-10.11
											],
											[
												-44.46,
												-56.19
											],
											[
												-18.35,
												-5.59
											]
										],
										o: [
											[
												40.724,
												-10.751
											],
											[
												-23.457,
												-48.217
											],
											[
												-14.52,
												-8.35
											],
											[
												-54.76,
												21.22
											],
											[
												18.08,
												22.92
											],
											[
												0,
												0
											]
										],
										v: [
											[
												-235.077,
												69.245
											],
											[
												-218.787,
												-48.691
											],
											[
												-286.125,
												-126.575
											],
											[
												-347.395,
												-130.145
											],
											[
												-372.495,
												37.545
											],
											[
												-316.995,
												78.605
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.305882352941,
										0.247058823529,
										0.247058823529,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 30,
				ty: 4,
				nm: "Left-Ear",
				parent: 27,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 0,
								s: [
									-272.973,
									-10.811,
									0
								],
								to: [
									-5.527,
									9.561,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 5.7,
								s: [
									-281.688,
									-2.811,
									0
								],
								to: [
									-6.312,
									-0.689,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 10.45,
								s: [
									-288.973,
									-10.811,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									-4.973,
									4.939,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 19.95,
								s: [
									-284.973,
									-20.811,
									0
								],
								to: [
									4.973,
									-4.939,
									0
								],
								ti: [
									-2.723,
									-2.061,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 28.45,
								s: [
									-272.973,
									-23.811,
									0
								],
								to: [
									2.723,
									2.061,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								t: 41.0000016699642,
								s: [
									-272.973,
									-10.811,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							-272.973,
							-10.811,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												-48.869,
												15.312
											],
											[
												13.654,
												28.066
											],
											[
												0,
												0
											],
											[
												26,
												-10.11
											],
											[
												-44.46,
												-56.19
											],
											[
												-18.35,
												-5.59
											]
										],
										o: [
											[
												40.724,
												-10.751
											],
											[
												-23.457,
												-48.217
											],
											[
												-14.52,
												-8.35
											],
											[
												-54.76,
												21.22
											],
											[
												18.08,
												22.92
											],
											[
												0,
												0
											]
										],
										v: [
											[
												-235.077,
												69.245
											],
											[
												-218.787,
												-48.691
											],
											[
												-286.125,
												-126.575
											],
											[
												-347.395,
												-130.145
											],
											[
												-372.495,
												37.545
											],
											[
												-316.995,
												78.605
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.631372570992,
										0.396078437567,
										0.321568638086,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 31,
				ty: 4,
				nm: "Right-Inner-Ear",
				parent: 32,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							298.876,
							-26.078,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												34.95,
												-44.23
											],
											[
												13.52,
												-4.8
											],
											[
												-0.192,
												29.321
											],
											[
												-6.949,
												27.535
											],
											[
												-12.263,
												8.036
											],
											[
												-16.3,
												-6.32
											]
										],
										o: [
											[
												-13.26,
												16.79
											],
											[
												-45.015,
												7.795
											],
											[
												0,
												-1.66
											],
											[
												18.245,
												-39.964
											],
											[
												10.66,
												-4.15
											],
											[
												43.14,
												16.73
											]
										],
										v: [
											[
												53.409,
												51.213
											],
											[
												12.699,
												82.533
											],
											[
												-69.239,
												51.667
											],
											[
												-71.32,
												-1.313
											],
											[
												-7.041,
												-81.647
											],
											[
												33.569,
												-80.817
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.960784316063,
										0.86274510622,
										0.705882370472,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 32,
				ty: 4,
				nm: "Right-Ear",
				parent: 27,
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 0,
								s: [
									283.784,
									-5.405,
									0
								],
								to: [
									-2.284,
									3.405,
									0
								],
								ti: [
									4.194,
									1.345,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 5.7,
								s: [
									275.069,
									2.595,
									0
								],
								to: [
									-4.194,
									-1.345,
									0
								],
								ti: [
									0.659,
									4.22,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 10.45,
								s: [
									267.784,
									-5.405,
									0
								],
								to: [
									-0.659,
									-4.22,
									0
								],
								ti: [
									-2.966,
									3.345,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 19.95,
								s: [
									271.784,
									-15.405,
									0
								],
								to: [
									2.966,
									-3.345,
									0
								],
								ti: [
									-3.36,
									-1.468,
									0
								]
							},
							{
								i: {
									x: 0.833,
									y: 0.833
								},
								o: {
									x: 0.167,
									y: 0.167
								},
								t: 28.45,
								s: [
									283.784,
									-18.405,
									0
								],
								to: [
									3.216,
									1.405,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								t: 41.0000016699642,
								s: [
									283.784,
									-5.405,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							283.784,
							-5.405,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												0,
												0
											],
											[
												-18.08,
												22.92
											],
											[
												54.76,
												21.22
											],
											[
												14.52,
												-8.35
											],
											[
												23.457,
												-48.217
											],
											[
												-40.724,
												-10.751
											]
										],
										o: [
											[
												18.35,
												-5.59
											],
											[
												44.46,
												-56.19
											],
											[
												-26,
												-10.11
											],
											[
												0,
												0
											],
											[
												-13.654,
												28.066
											],
											[
												48.869,
												15.312
											]
										],
										v: [
											[
												316.985,
												78.605
											],
											[
												372.485,
												37.545
											],
											[
												347.385,
												-130.145
											],
											[
												286.115,
												-126.575
											],
											[
												218.777,
												-48.691
											],
											[
												235.067,
												69.245
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.631372570992,
										0.396078437567,
										0.321568638086,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			}
		]
	},
	{
		id: "comp_1",
		nm: "Monkey-Mouth",
		fr: 29.9700012207031,
		layers: [
			{
				ddd: 0,
				ind: 1,
				ty: 4,
				nm: "Mouth 8",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							300.003,
							427.265,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.667,
										0.667,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 2,
								s: [
									50,
									50,
									100
								]
							},
							{
								i: {
									x: [
										0.512,
										0.512,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 22,
								s: [
									45,
									50,
									100
								]
							},
							{
								t: 43.0000017514259,
								s: [
									50,
									50,
									100
								]
							}
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 1,
									k: [
										{
											i: {
												x: 0.667,
												y: 1
											},
											o: {
												x: 0.333,
												y: 0
											},
											t: 2,
											s: [
												{
													i: [
														[
															0,
															0
														],
														[
															-0.072,
															-0.549
														],
														[
															-64.07,
															0
														],
														[
															23.245,
															-38.255
														],
														[
															0.554,
															-0.001
														]
													],
													o: [
														[
															-6.986,
															-0.009
														],
														[
															-16.255,
															-47.215
														],
														[
															64.07,
															0
														],
														[
															0.906,
															-6.927
														],
														[
															0,
															0
														]
													],
													v: [
														[
															-112.191,
															-56.605
														],
														[
															-124.751,
															-42.315
														],
														[
															9.999,
															-104.395
														],
														[
															124.749,
															-42.275
														],
														[
															112.189,
															-56.565
														]
													],
													c: true
												}
											]
										},
										{
											i: {
												x: 0.512,
												y: 1
											},
											o: {
												x: 0.333,
												y: 0
											},
											t: 22,
											s: [
												{
													i: [
														[
															55.502,
															5.604
														],
														[
															-0.072,
															-0.483
														],
														[
															-64.07,
															0
														],
														[
															20.29,
															-37.658
														],
														[
															8.747,
															2.594
														]
													],
													o: [
														[
															-7.679,
															2.543
														],
														[
															-18.967,
															-43.696
														],
														[
															64.07,
															0
														],
														[
															0.906,
															-6.089
														],
														[
															-46.329,
															7.61
														]
													],
													v: [
														[
															-112.191,
															-42.91
														],
														[
															-124.751,
															-30.349
														],
														[
															2.195,
															-75.986
														],
														[
															124.749,
															-30.313
														],
														[
															112.189,
															-42.875
														]
													],
													c: true
												}
											]
										},
										{
											t: 43.0000017514259,
											s: [
												{
													i: [
														[
															0,
															0
														],
														[
															-0.072,
															-0.549
														],
														[
															-64.07,
															0
														],
														[
															23.245,
															-38.255
														],
														[
															0.554,
															-0.001
														]
													],
													o: [
														[
															-6.986,
															-0.009
														],
														[
															-16.255,
															-47.215
														],
														[
															64.07,
															0
														],
														[
															0.906,
															-6.927
														],
														[
															0,
															0
														]
													],
													v: [
														[
															-112.191,
															-56.605
														],
														[
															-124.751,
															-42.315
														],
														[
															9.999,
															-104.395
														],
														[
															124.749,
															-42.275
														],
														[
															112.189,
															-56.565
														]
													],
													c: true
												}
											]
										}
									],
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.960784373564,
										0.866666726505,
										0.705882352941,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 2,
				ty: 4,
				nm: "Mouth 3",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							300.003,
							427.265,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.667,
										0.667,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 2,
								s: [
									50,
									50,
									100
								]
							},
							{
								i: {
									x: [
										0.512,
										0.512,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 22,
								s: [
									45,
									50,
									100
								]
							},
							{
								t: 43.0000017514259,
								s: [
									50,
									50,
									100
								]
							}
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 1,
									k: [
										{
											i: {
												x: 0.667,
												y: 1
											},
											o: {
												x: 0.167,
												y: 0
											},
											t: 2,
											s: [
												{
													i: [
														[
															71.185,
															51.075
														],
														[
															-0.072,
															-0.549
														],
														[
															-64.07,
															0
														],
														[
															-7.75,
															55.76
														],
														[
															25.195,
															-22.035
														]
													],
													o: [
														[
															-33.815,
															-45.925
														],
														[
															7.8,
															55.76
														],
														[
															64.07,
															0
														],
														[
															0.906,
															-6.927
														],
														[
															-35.195,
															43.035
														]
													],
													v: [
														[
															-99.191,
															59.395
														],
														[
															-124.751,
															-42.315
														],
														[
															-0.001,
															56.605
														],
														[
															124.749,
															-42.275
														],
														[
															101.189,
															45.435
														]
													],
													c: true
												}
											]
										},
										{
											i: {
												x: 0.833,
												y: 1
											},
											o: {
												x: 0.333,
												y: 0
											},
											t: 22,
											s: [
												{
													i: [
														[
															66.189,
															82.226
														],
														[
															-0.072,
															-0.483
														],
														[
															-64.07,
															0
														],
														[
															-7.75,
															49.015
														],
														[
															22.047,
															-28.547
														]
													],
													o: [
														[
															-19.45,
															-38.219
														],
														[
															7.8,
															49.015
														],
														[
															64.07,
															0
														],
														[
															0.906,
															-6.089
														],
														[
															-20.949,
															52.839
														]
													],
													v: [
														[
															-119.876,
															41.098
														],
														[
															-124.751,
															-30.349
														],
														[
															-0.001,
															56.605
														],
														[
															124.749,
															-30.313
														],
														[
															118.777,
															36.073
														]
													],
													c: true
												}
											]
										},
										{
											t: 43.0000017514259,
											s: [
												{
													i: [
														[
															71.185,
															51.075
														],
														[
															-0.072,
															-0.549
														],
														[
															-64.07,
															0
														],
														[
															-7.75,
															55.76
														],
														[
															25.195,
															-22.035
														]
													],
													o: [
														[
															-33.815,
															-45.925
														],
														[
															7.8,
															55.76
														],
														[
															64.07,
															0
														],
														[
															0.906,
															-6.927
														],
														[
															-35.195,
															43.035
														]
													],
													v: [
														[
															-99.191,
															59.395
														],
														[
															-124.751,
															-42.315
														],
														[
															-0.001,
															56.605
														],
														[
															124.749,
															-42.275
														],
														[
															101.189,
															45.435
														]
													],
													c: true
												}
											]
										}
									],
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.960784373564,
										0.862745157878,
										0.705882352941,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 4,
				ty: 4,
				nm: "Tongue 2",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 1,
						k: [
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 2,
								s: [
									300.003,
									444.126,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								i: {
									x: 0.667,
									y: 1
								},
								o: {
									x: 0.333,
									y: 0
								},
								t: 22,
								s: [
									300.003,
									448.376,
									0
								],
								to: [
									0,
									0,
									0
								],
								ti: [
									0,
									0,
									0
								]
							},
							{
								t: 43.0000017514259,
								s: [
									300.003,
									444.126,
									0
								]
							}
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 0,
						k: [
							50,
							50,
							100
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 0,
									k: {
										i: [
											[
												9.08,
												-31.46
											],
											[
												-44.331,
												27.692
											],
											[
												34.29,
												0
											]
										],
										o: [
											[
												44.331,
												27.692
											],
											[
												-9.08,
												-31.46
											],
											[
												-34.29,
												0
											]
										],
										v: [
											[
												-72.45,
												2.074
											],
											[
												72.45,
												2.074
											],
											[
												0,
												-22.116
											]
										],
										c: true
									},
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.901960790157,
										0.392156869173,
										0.43137255311,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			},
			{
				ddd: 0,
				ind: 7,
				ty: 4,
				nm: "Mouth 6",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							300.003,
							427.265,
							0
						],
						ix: 2,
						l: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1,
						l: 2
					},
					s: {
						a: 1,
						k: [
							{
								i: {
									x: [
										0.667,
										0.667,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 2,
								s: [
									50,
									50,
									100
								]
							},
							{
								i: {
									x: [
										0.512,
										0.512,
										0.667
									],
									y: [
										1,
										1,
										1
									]
								},
								o: {
									x: [
										0.333,
										0.333,
										0.333
									],
									y: [
										0,
										0,
										0
									]
								},
								t: 22,
								s: [
									45,
									50,
									100
								]
							},
							{
								t: 43.0000017514259,
								s: [
									50,
									50,
									100
								]
							}
						],
						ix: 6,
						l: 2
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								ind: 0,
								ty: "sh",
								ix: 1,
								ks: {
									a: 1,
									k: [
										{
											i: {
												x: 0.667,
												y: 1
											},
											o: {
												x: 0.333,
												y: 0
											},
											t: 2,
											s: [
												{
													i: [
														[
															0,
															0
														],
														[
															-0.072,
															-0.549
														],
														[
															-20.032,
															-17.462
														],
														[
															-33.986,
															0
														],
														[
															-22.419,
															18.627
														],
														[
															-3.769,
															27.115
														],
														[
															0.554,
															-0.001
														]
													],
													o: [
														[
															-6.986,
															-0.009
														],
														[
															3.662,
															26.182
														],
														[
															22.63,
															19.728
														],
														[
															32.914,
															0
														],
														[
															21.222,
															-17.632
														],
														[
															0.906,
															-6.927
														],
														[
															0,
															0
														]
													],
													v: [
														[
															-112.191,
															-56.605
														],
														[
															-124.751,
															-42.315
														],
														[
															-87.455,
															24.733
														],
														[
															-0.001,
															56.605
														],
														[
															85.307,
															26.598
														],
														[
															124.749,
															-42.275
														],
														[
															112.189,
															-56.565
														]
													],
													c: true
												}
											]
										},
										{
											i: {
												x: 0.512,
												y: 1
											},
											o: {
												x: 0.333,
												y: 0
											},
											t: 22,
											s: [
												{
													i: [
														[
															55.502,
															5.604
														],
														[
															-0.072,
															-0.483
														],
														[
															-18.806,
															-15.146
														],
														[
															-35.12,
															0
														],
														[
															-22.652,
															17.412
														],
														[
															-3.628,
															22.947
														],
														[
															8.747,
															2.594
														]
													],
													o: [
														[
															-7.679,
															2.543
														],
														[
															3.524,
															22.147
														],
														[
															22.814,
															18.374
														],
														[
															34.075,
															0
														],
														[
															19.94,
															-15.327
														],
														[
															0.906,
															-6.089
														],
														[
															-46.329,
															7.61
														]
													],
													v: [
														[
															-112.191,
															-42.91
														],
														[
															-124.751,
															-30.349
														],
														[
															-89.143,
															28.603
														],
														[
															-0.001,
															56.605
														],
														[
															88.199,
															29.99
														],
														[
															124.749,
															-30.313
														],
														[
															112.189,
															-42.875
														]
													],
													c: true
												}
											]
										},
										{
											t: 43.0000017514259,
											s: [
												{
													i: [
														[
															0,
															0
														],
														[
															-0.072,
															-0.549
														],
														[
															-18.806,
															-17.231
														],
														[
															-35.12,
															0
														],
														[
															-22.652,
															19.808
														],
														[
															-3.628,
															26.105
														],
														[
															0.554,
															-0.001
														]
													],
													o: [
														[
															-6.986,
															-0.009
														],
														[
															3.524,
															25.195
														],
														[
															22.814,
															20.903
														],
														[
															34.075,
															0
														],
														[
															19.94,
															-17.436
														],
														[
															0.906,
															-6.927
														],
														[
															0,
															0
														]
													],
													v: [
														[
															-112.191,
															-56.605
														],
														[
															-124.751,
															-42.315
														],
														[
															-89.692,
															22.734
														],
														[
															-0.001,
															56.605
														],
														[
															87.65,
															24.601
														],
														[
															124.749,
															-42.275
														],
														[
															112.189,
															-56.565
														]
													],
													c: true
												}
											]
										}
									],
									ix: 2
								},
								nm: "Path 1",
								mn: "ADBE Vector Shape - Group",
								hd: false
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: [
										0.305882364511,
										0.247058823705,
										0.247058823705,
										1
									],
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Group 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 300.00001221925,
				st: 0,
				bm: 0
			}
		]
	}
];
var layers = [
	{
		ddd: 0,
		ind: 1,
		ty: 4,
		nm: "Capa 1/Banana Outlines",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.517
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.449
							],
							y: [
								0
							]
						},
						t: 0,
						s: [
							31.4
						]
					},
					{
						t: 42.0000017106951,
						s: [
							391.4
						]
					}
				],
				ix: 10
			},
			p: {
				a: 0,
				k: [
					300,
					299.969,
					0
				],
				ix: 2,
				l: 2
			},
			a: {
				a: 0,
				k: [
					-3.179,
					549.791,
					0
				],
				ix: 1,
				l: 2
			},
			s: {
				a: 0,
				k: [
					-45.6,
					45.6,
					100
				],
				ix: 6,
				l: 2
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										5.19,
										8.86
									],
									[
										-14.13,
										6.58
									],
									[
										7.47,
										-1.95
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0.848,
										-0.068
									],
									[
										0.824,
										0.158
									]
								],
								o: [
									[
										13.21,
										7.94
									],
									[
										-4.65,
										6
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-0.829,
										0.192
									],
									[
										-0.838,
										0.025
									],
									[
										-6.58,
										-1.13
									]
								],
								v: [
									[
										-20.46,
										-8.333
									],
									[
										20.46,
										-5.083
									],
									[
										2.38,
										7.917
									],
									[
										2.25,
										7.917
									],
									[
										2.2,
										7.917
									],
									[
										-0.32,
										8.307
									],
									[
										-2.82,
										8.107
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								0.490196108351,
								0.333333333333,
								0.121568634931,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								395,
								342.023
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 1",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			},
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										1.48,
										8.69
									],
									[
										0,
										0
									],
									[
										-22.981,
										3.603
									],
									[
										-3.14,
										0.38
									],
									[
										-16.7,
										-140.06
									],
									[
										2.446,
										-20.287
									],
									[
										0.46,
										-2.88
									],
									[
										0.33,
										-1.81
									],
									[
										0.848,
										-0.068
									],
									[
										0.824,
										0.158
									],
									[
										5.19,
										8.86
									],
									[
										4.89,
										12.65
									],
									[
										0,
										0
									],
									[
										1.17,
										3.06
									],
									[
										0.052,
										0.177
									],
									[
										1.45,
										3.33
									],
									[
										0.14,
										0.29
									],
									[
										0.3,
										0.64
									],
									[
										0,
										0
									],
									[
										0.41,
										0.86
									],
									[
										0.56,
										1.13
									],
									[
										1.13,
										2.18
									],
									[
										0.67,
										1.22
									],
									[
										1.24,
										2.06
									],
									[
										0.75,
										1.22
									],
									[
										0,
										0
									],
									[
										0.69,
										1
									],
									[
										2.06,
										2.89
									],
									[
										0.152,
										0.196
									],
									[
										0,
										0
									],
									[
										0.56,
										0.76
									],
									[
										2.72,
										3.3
									],
									[
										2.87,
										3.17
									],
									[
										0,
										0
									],
									[
										0.42,
										0.46
									],
									[
										0,
										0
									],
									[
										1.43,
										1.42
									],
									[
										0.89,
										0.89
									],
									[
										0.23,
										0.22
									],
									[
										0.28,
										0.28
									],
									[
										1.31,
										1.21
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										1.42,
										1.2
									],
									[
										1.34,
										1.09
									],
									[
										1.63,
										1.28
									],
									[
										1.46,
										1.09
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0.81,
										0.52
									],
									[
										2.41,
										1.54
									],
									[
										0,
										0
									],
									[
										1.92,
										1.1
									],
									[
										0.74,
										0.42
									],
									[
										0,
										0
									],
									[
										1.91,
										0.99
									],
									[
										1.61,
										0.78
									],
									[
										1.91,
										0.88
									],
									[
										0.96,
										0.44
									],
									[
										0.77,
										0.31
									],
									[
										1.77,
										0.72
									],
									[
										1.83,
										0.7
									],
									[
										1.47,
										0.53
									],
									[
										2.12,
										0.71
									],
									[
										0,
										0
									],
									[
										2,
										0.61
									],
									[
										1.29,
										0.36
									],
									[
										1.66,
										0.38
									],
									[
										1.45,
										0.36
									],
									[
										0.88,
										0.2
									],
									[
										1.9,
										0.38
									],
									[
										0,
										0
									],
									[
										1.56,
										0.29
									],
									[
										1.28,
										0.22
									],
									[
										0,
										0
									],
									[
										1.86,
										0.25
									],
									[
										1,
										0.11
									],
									[
										2.43,
										0.22
									],
									[
										1.63,
										0.12
									],
									[
										2.4,
										0.12
									],
									[
										0,
										0
									],
									[
										2.51,
										-0.07
									],
									[
										0,
										0
									],
									[
										2.73,
										-0.16
									],
									[
										1.05,
										-0.07
									],
									[
										0,
										0
									],
									[
										3.947,
										-0.46
									],
									[
										2.51,
										-0.33
									],
									[
										1.24,
										0.06
									],
									[
										0.44,
										0.02
									],
									[
										0,
										0
									],
									[
										0.26,
										0.04
									],
									[
										4.783,
										4.504
									]
								],
								o: [
									[
										0,
										0
									],
									[
										21.158,
										-9.668
									],
									[
										3.1,
										-0.5
									],
									[
										140.05,
										-16.68
									],
									[
										2.446,
										20.287
									],
									[
										-0.36,
										2.92
									],
									[
										-0.26,
										1.85
									],
									[
										-0.829,
										0.192
									],
									[
										-0.838,
										0.025
									],
									[
										-6.54,
										-1.14
									],
									[
										-11.39,
										-19.36
									],
									[
										0,
										0
									],
									[
										-1.06,
										-3.11
									],
									[
										-0.074,
										-0.169
									],
									[
										-1.3,
										-3.35
									],
									[
										-0.11,
										-0.3
									],
									[
										-0.29,
										-0.67
									],
									[
										0,
										0
									],
									[
										-0.4,
										-0.86
									],
									[
										-0.53,
										-1.15
									],
									[
										-1.13,
										-2.21
									],
									[
										-0.65,
										-1.25
									],
									[
										-1.16,
										-2.11
									],
									[
										-0.72,
										-1.24
									],
									[
										0,
										0
									],
									[
										-0.64,
										-1
									],
									[
										-2,
										-3
									],
									[
										-0.121,
										-0.216
									],
									[
										0,
										0
									],
									[
										-0.55,
										-0.76
									],
									[
										-2.57,
										-3.44
									],
									[
										-2.72,
										-3.3
									],
									[
										0,
										0
									],
									[
										-0.42,
										-0.46
									],
									[
										0,
										0
									],
									[
										-1.39,
										-1.48
									],
									[
										-0.88,
										-0.89
									],
									[
										-0.23,
										-0.22
									],
									[
										-0.23,
										-0.22
									],
									[
										-1.29,
										-1.24
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-1.4,
										-1.23
									],
									[
										-1.42,
										-1.2
									],
									[
										-1.6,
										-1.29
									],
									[
										-1.41,
										-1.08
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-0.78,
										-0.54
									],
									[
										-2.32,
										-1.65
									],
									[
										0,
										0
									],
									[
										-1.89,
										-1.15
									],
									[
										-0.73,
										-0.42
									],
									[
										0,
										0
									],
									[
										-1.88,
										-1
									],
									[
										-1.56,
										-0.81
									],
									[
										-1.85,
										-1
									],
									[
										-1,
										-0.45
									],
									[
										-0.76,
										-0.34
									],
									[
										-1.74,
										-0.77
									],
									[
										-1.77,
										-0.72
									],
									[
										-1.46,
										-0.56
									],
									[
										-2.09,
										-0.76
									],
									[
										0,
										0
									],
									[
										-2,
										-0.66
									],
									[
										-1.29,
										-0.39
									],
									[
										-1.64,
										-0.47
									],
									[
										-1.47,
										-0.38
									],
									[
										-0.86,
										-0.22
									],
									[
										-1.86,
										-0.45
									],
									[
										0,
										0
									],
									[
										-1.57,
										-0.31
									],
									[
										-1.27,
										-0.26
									],
									[
										0,
										0
									],
									[
										-1.85,
										-0.29
									],
									[
										-1,
										-0.12
									],
									[
										-2.42,
										-0.31
									],
									[
										-1.64,
										-0.14
									],
									[
										-2.42,
										-0.15
									],
									[
										0,
										0
									],
									[
										-2.46,
										0
									],
									[
										0,
										0
									],
									[
										-2.73,
										0
									],
									[
										-1.07,
										0.06
									],
									[
										0,
										0
									],
									[
										-4,
										0.28
									],
									[
										-2.51,
										0.3
									],
									[
										0,
										0
									],
									[
										-0.37,
										0
									],
									[
										0,
										0
									],
									[
										-0.24,
										0
									],
									[
										-6.506,
										-0.915
									],
									[
										-4.16,
										-4.04
									]
								],
								v: [
									[
										-181.293,
										-119.723
									],
									[
										-180.893,
										-119.902
									],
									[
										-114.373,
										-139.902
									],
									[
										-104.983,
										-141.212
									],
									[
										178.847,
										82.117
									],
									[
										178.847,
										143.198
									],
									[
										177.607,
										151.957
									],
									[
										176.687,
										157.478
									],
									[
										174.167,
										157.867
									],
									[
										171.667,
										157.668
									],
									[
										154.067,
										141.237
									],
									[
										129.607,
										78.237
									],
									[
										129.537,
										78.138
									],
									[
										126.187,
										68.857
									],
									[
										125.997,
										68.337
									],
									[
										121.887,
										58.337
									],
									[
										121.517,
										57.417
									],
									[
										120.607,
										55.417
									],
									[
										119.407,
										52.837
									],
									[
										118.197,
										50.298
									],
									[
										116.577,
										46.867
									],
									[
										113.187,
										40.307
									],
									[
										111.187,
										36.597
									],
									[
										107.597,
										30.337
									],
									[
										105.407,
										26.677
									],
									[
										103.527,
										23.677
									],
									[
										101.527,
										20.677
									],
									[
										95.467,
										11.848
									],
									[
										95.057,
										11.227
									],
									[
										94.487,
										10.447
									],
									[
										92.797,
										8.197
									],
									[
										84.887,
										-1.913
									],
									[
										76.467,
										-11.592
									],
									[
										75.187,
										-13.042
									],
									[
										73.887,
										-14.432
									],
									[
										73.367,
										-14.982
									],
									[
										69.127,
										-19.303
									],
									[
										66.517,
										-21.962
									],
									[
										65.827,
										-22.652
									],
									[
										64.937,
										-23.492
									],
									[
										61.027,
										-27.163
									],
									[
										58.137,
										-29.792
									],
									[
										56.807,
										-30.973
									],
									[
										52.587,
										-34.613
									],
									[
										48.587,
										-37.913
									],
									[
										43.737,
										-41.792
									],
									[
										39.437,
										-45.023
									],
									[
										35.287,
										-48.023
									],
									[
										34.567,
										-48.533
									],
									[
										32.177,
										-50.163
									],
									[
										25.087,
										-54.893
									],
									[
										21.447,
										-57.193
									],
									[
										15.767,
										-60.572
									],
									[
										13.537,
										-61.822
									],
									[
										11.287,
										-63.062
									],
									[
										5.637,
										-66.152
									],
									[
										0.847,
										-68.533
									],
									[
										-4.773,
										-71.263
									],
									[
										-7.663,
										-72.572
									],
									[
										-9.953,
										-73.572
									],
									[
										-15.203,
										-75.812
									],
									[
										-20.653,
										-77.992
									],
									[
										-25.043,
										-79.613
									],
									[
										-31.343,
										-81.852
									],
									[
										-32.013,
										-82.092
									],
									[
										-38.013,
										-83.962
									],
									[
										-41.863,
										-85.113
									],
									[
										-46.793,
										-86.492
									],
									[
										-51.173,
										-87.592
									],
									[
										-53.783,
										-88.253
									],
									[
										-59.453,
										-89.522
									],
									[
										-60.503,
										-89.753
									],
									[
										-65.163,
										-90.652
									],
									[
										-68.993,
										-91.302
									],
									[
										-72.913,
										-91.973
									],
									[
										-78.483,
										-92.753
									],
									[
										-81.483,
										-93.112
									],
									[
										-88.773,
										-93.922
									],
									[
										-93.643,
										-94.322
									],
									[
										-100.883,
										-94.742
									],
									[
										-105.813,
										-94.902
									],
									[
										-113.263,
										-94.902
									],
									[
										-117.983,
										-94.902
									],
									[
										-126.203,
										-94.572
									],
									[
										-129.363,
										-94.392
									],
									[
										-130.703,
										-94.462
									],
									[
										-142.623,
										-93.352
									],
									[
										-150.133,
										-92.352
									],
									[
										-152.133,
										-92.412
									],
									[
										-153.363,
										-92.512
									],
									[
										-154.063,
										-92.622
									],
									[
										-154.793,
										-92.732
									],
									[
										-172.143,
										-101.062
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								1,
								0.835294177485,
								0.309803921569,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								220.553,
								192.463
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 2",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 2,
				mn: "ADBE Vector Group",
				hd: false
			},
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										-8.35,
										3.78
									],
									[
										-24.229,
										2.871
									],
									[
										-16.67,
										-140.07
									],
									[
										4.085,
										-24.096
									],
									[
										9.38,
										-12.08
									],
									[
										7.47,
										-1.95
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0.848,
										-0.068
									],
									[
										0.824,
										0.158
									],
									[
										5.19,
										8.86
									],
									[
										4.89,
										12.65
									],
									[
										0,
										0
									],
									[
										1.17,
										3.06
									],
									[
										0.052,
										0.177
									],
									[
										1.45,
										3.33
									],
									[
										0.45,
										0.95
									],
									[
										0,
										0
									],
									[
										0.43,
										0.84
									],
									[
										0.56,
										1.13
									],
									[
										1.17,
										2.18
									],
									[
										0.67,
										1.22
									],
									[
										2.04,
										3.24
									],
									[
										0.64,
										0.94
									],
									[
										0.69,
										1
									],
									[
										2.06,
										2.89
									],
									[
										0.152,
										0.196
									],
									[
										0,
										0
									],
									[
										3.32,
										3.993
									],
									[
										3.35,
										3.63
									],
									[
										0.42,
										0.46
									],
									[
										0,
										0
									],
									[
										2.333,
										2.307
									],
									[
										0.23,
										0.22
									],
									[
										0.28,
										0.28
									],
									[
										7.404,
										5.698
									],
									[
										1.46,
										1.04
									],
									[
										1.43,
										1
									],
									[
										0,
										0
									],
									[
										0.81,
										0.52
									],
									[
										2.41,
										1.54
									],
									[
										0,
										0
									],
									[
										1.92,
										1.1
									],
									[
										0.74,
										0.42
									],
									[
										2.67,
										1.39
									],
									[
										12.736,
										4.236
									],
									[
										0,
										0
									],
									[
										4.993,
										1.307
									],
									[
										2.37,
										0.54
									],
									[
										1.9,
										0.38
									],
									[
										0,
										0
									],
									[
										4.2,
										0.62
									],
									[
										23.16,
										-2.792
									],
									[
										2.51,
										-0.33
									],
									[
										1.24,
										0.06
									],
									[
										0.44,
										0.02
									],
									[
										0,
										0
									],
									[
										0.26,
										0.04
									],
									[
										4.783,
										4.504
									],
									[
										1.48,
										8.68
									],
									[
										0,
										0
									],
									[
										-5.31,
										6.29
									]
								],
								o: [
									[
										22.429,
										-9.604
									],
									[
										140.05,
										-16.72
									],
									[
										2.925,
										24.264
									],
									[
										-0.43,
										1.73
									],
									[
										-4.65,
										6
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-0.829,
										0.192
									],
									[
										-0.838,
										0.025
									],
									[
										-6.54,
										-1.14
									],
									[
										-11.39,
										-19.36
									],
									[
										0,
										0
									],
									[
										-1.06,
										-3.11
									],
									[
										-0.074,
										-0.169
									],
									[
										-1.3,
										-3.35
									],
									[
										-0.4,
										-1
									],
									[
										0,
										0
									],
									[
										-0.35,
										-0.86
									],
									[
										-0.53,
										-1.15
									],
									[
										-1.08,
										-2.21
									],
									[
										-0.65,
										-1.25
									],
									[
										-1.83,
										-3.39
									],
									[
										-0.61,
										-1
									],
									[
										-0.64,
										-0.94
									],
									[
										-2,
										-3
									],
									[
										-0.121,
										-0.216
									],
									[
										0,
										0
									],
									[
										-3.08,
										-4.247
									],
									[
										-3.1,
										-3.8
									],
									[
										-0.42,
										-0.46
									],
									[
										0,
										0
									],
									[
										-2.233,
										-2.36
									],
									[
										-0.23,
										-0.22
									],
									[
										-0.23,
										-0.22
									],
									[
										-6.718,
										-6.493
									],
									[
										-1.4,
										-1.12
									],
									[
										-1.46,
										-1.04
									],
									[
										0,
										0
									],
									[
										-0.78,
										-0.54
									],
									[
										-2.32,
										-1.65
									],
									[
										0,
										0
									],
									[
										-1.89,
										-1.15
									],
									[
										-0.73,
										-0.42
									],
									[
										-2.56,
										-1.51
									],
									[
										-11.89,
										-6.227
									],
									[
										0,
										0
									],
									[
										-4.86,
										-1.627
									],
									[
										-2.28,
										-0.64
									],
									[
										-1.86,
										-0.45
									],
									[
										0,
										0
									],
									[
										-4.09,
										-0.85
									],
									[
										-23.046,
										-3.609
									],
									[
										-2.51,
										0.3
									],
									[
										0,
										0
									],
									[
										-0.37,
										0
									],
									[
										0,
										0
									],
									[
										-0.24,
										0
									],
									[
										-6.506,
										-0.915
									],
									[
										-4.13,
										-4.06
									],
									[
										0,
										0
									],
									[
										-1.37,
										-8.31
									],
									[
										8.43,
										-9.93
									]
								],
								v: [
									[
										-159.038,
										-145.307
									],
									[
										-88.688,
										-164.117
									],
									[
										195.092,
										59.193
									],
									[
										193.342,
										132.113
									],
									[
										179.522,
										161.763
									],
									[
										161.443,
										174.763
									],
									[
										161.313,
										174.763
									],
									[
										161.262,
										174.763
									],
									[
										158.743,
										175.152
									],
									[
										156.243,
										174.953
									],
									[
										138.642,
										158.522
									],
									[
										114.183,
										95.523
									],
									[
										114.113,
										95.422
									],
									[
										110.762,
										86.143
									],
									[
										110.572,
										85.622
									],
									[
										106.462,
										75.622
									],
									[
										105.183,
										72.673
									],
									[
										103.982,
										70.092
									],
									[
										102.772,
										67.553
									],
									[
										101.152,
										64.122
									],
									[
										97.762,
										57.562
									],
									[
										95.762,
										53.853
									],
									[
										89.982,
										43.933
									],
									[
										88.102,
										40.933
									],
									[
										86.102,
										37.933
									],
									[
										80.042,
										29.102
									],
									[
										79.632,
										28.482
									],
									[
										79.063,
										27.702
									],
									[
										69.462,
										15.343
									],
									[
										59.762,
										4.213
									],
									[
										58.462,
										2.823
									],
									[
										57.942,
										2.273
									],
									[
										51.092,
										-4.727
									],
									[
										50.402,
										-5.417
									],
									[
										49.512,
										-6.257
									],
									[
										28.312,
										-24.557
									],
									[
										24.012,
										-27.787
									],
									[
										19.863,
										-30.787
									],
									[
										19.142,
										-31.297
									],
									[
										16.752,
										-32.927
									],
									[
										9.662,
										-37.657
									],
									[
										6.022,
										-39.957
									],
									[
										0.342,
										-43.337
									],
									[
										-1.888,
										-44.587
									],
									[
										-9.788,
										-48.917
									],
									[
										-46.788,
										-64.637
									],
									[
										-47.458,
										-64.877
									],
									[
										-62.238,
										-69.277
									],
									[
										-69.238,
										-71.038
									],
									[
										-74.908,
										-72.308
									],
									[
										-75.958,
										-72.537
									],
									[
										-88.368,
										-74.757
									],
									[
										-158.008,
										-75.987
									],
									[
										-165.518,
										-74.987
									],
									[
										-167.518,
										-75.047
									],
									[
										-168.747,
										-75.147
									],
									[
										-169.448,
										-75.257
									],
									[
										-170.178,
										-75.368
									],
									[
										-187.527,
										-83.697
									],
									[
										-196.647,
										-102.377
									],
									[
										-196.647,
										-102.447
									],
									[
										-189.337,
										-124.447
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								1,
								0.701960784314,
								0,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								235.908,
								175.177
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 3",
				np: 4,
				cix: 2,
				bm: 0,
				ix: 3,
				mn: "ADBE Vector Group",
				hd: false
			},
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-4.859,
										1.765
									],
									[
										-0.006,
										0.002
									]
								],
								o: [
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-1.765,
										-4.859
									],
									[
										0.006,
										-0.003
									],
									[
										0,
										0
									]
								],
								v: [
									[
										25.018,
										-16.055
									],
									[
										29.327,
										-4.155
									],
									[
										-26.473,
										16.055
									],
									[
										-27.562,
										12.945
									],
									[
										-21.96,
										0.952
									],
									[
										-21.943,
										0.945
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								0.490196108351,
								0.333333333333,
								0.121568634931,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								39.562,
								74.055
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 4",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 4,
				mn: "ADBE Vector Group",
				hd: false
			},
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										1.765,
										4.859
									],
									[
										0.002,
										0.006
									],
									[
										0,
										0
									],
									[
										-4.862,
										1.766
									]
								],
								o: [
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-4.859,
										1.765
									],
									[
										-0.003,
										-0.006
									],
									[
										0,
										0
									],
									[
										-1.756,
										-4.865
									],
									[
										0,
										0
									]
								],
								v: [
									[
										22.858,
										-21.288
									],
									[
										31.478,
										2.523
									],
									[
										-15.522,
										19.523
									],
									[
										-27.515,
										13.921
									],
									[
										-27.522,
										13.902
									],
									[
										-29.722,
										7.712
									],
									[
										-24.102,
										-4.288
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								0.674509803922,
								0.458823559331,
								0.172549019608,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								41.722,
								79.288
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 5",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 5,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 0,
		op: 300.00001221925,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 2,
		ty: 3,
		nm: "Null 2",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 0,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					295,
					298,
					0
				],
				ix: 2,
				l: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1,
				l: 2
			},
			s: {
				a: 0,
				k: [
					38.6,
					38.6,
					100
				],
				ix: 6,
				l: 2
			}
		},
		ao: 0,
		ip: 0,
		op: 300.00001221925,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 3,
		ty: 0,
		nm: "Monkey_V1",
		parent: 2,
		refId: "comp_0",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 2,
				l: 2
			},
			a: {
				a: 0,
				k: [
					300,
					300,
					0
				],
				ix: 1,
				l: 2
			},
			s: {
				a: 0,
				k: [
					200,
					200,
					100
				],
				ix: 6,
				l: 2
			}
		},
		ao: 0,
		w: 600,
		h: 600,
		ip: 0,
		op: 300.00001221925,
		st: 0,
		bm: 0
	}
];
var markers = [
];
var apeSpinner = {
	v: v,
	fr: fr,
	ip: ip,
	op: op,
	w: w,
	h: h,
	nm: nm,
	ddd: ddd,
	assets: assets,
	layers: layers,
	markers: markers
};

var ApeSpinner = function () {
    return React__default["default"].createElement(Lottie__default["default"], { animationData: apeSpinner, loop: true });
};

var Container$3 = styled__default["default"].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  position: relative;\n  width: ", "px;\n"], ["\n  position: relative;\n  width: ", "px;\n"])), function (props) { return props.size; });
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 300 : _b;
    return (React__default["default"].createElement(Container$3, { size: size },
        React__default["default"].createElement(ApeSpinner, null)));
};
var templateObject_1$o;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default["default"].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default["default"](Root)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default["default"](Root)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default["default"].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default["default"].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$n, templateObject_2$b, templateObject_3$8, templateObject_4$4, templateObject_5$3;

var Handle = styled__default["default"].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input = styled__default["default"].input(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default["default"].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$m, templateObject_2$a, templateObject_3$7;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default["default"].createElement(StyledToggle, { checked: isChecked },
        React__default["default"].createElement(Input, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default["default"].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA < upperB) {
            return -1;
        }
        if (upperA > upperB) {
            return 1;
        }
        return 0;
    };
};
var byTextDescending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA > upperB) {
            return -1;
        }
        if (upperA < upperB) {
            return 1;
        }
        return 0;
    };
};

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data, true);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data, true);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, ".concat(action.columnName, " not found"));
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, ".concat(column.name, " not found"));
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default["default"],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default["default"],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }), true);
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Icon$C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default["default"].createElement("path", { d: "M28.94,84.09V96H12.43a2.31,2.31,0,0,1-1.95-3.52,17.62,17.62,0,0,1,15-8.39Z" }),
        React__default["default"].createElement("path", { d: "M87.84,96H71.32V84.09h3.49a17.61,17.61,0,0,1,15,8.39A2.31,2.31,0,0,1,87.84,96Z" }),
        React__default["default"].createElement("path", { d: "M43,41.79a2.94,2.94,0,0,1,.9,2.1v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3A3.2,3.2,0,0,1,43,41.79Z" }),
        React__default["default"].createElement("path", { d: "M49.22,55a.88.88,0,0,1-1.16.43l-2-.93a.88.88,0,0,1-.43-1.17.87.87,0,0,1,.8-.51.74.74,0,0,1,.35.08l2,.93A.89.89,0,0,1,49.22,55Z" }),
        React__default["default"].createElement("path", { d: "M54.64,53.28a.89.89,0,0,1-.43,1.17l-2,.93a.88.88,0,1,1-.71-1.6l2-.93a.74.74,0,0,1,.35-.08A.89.89,0,0,1,54.64,53.28Z" }),
        React__default["default"].createElement("path", { d: "M61.63,41.79a2.94,2.94,0,0,1,.9,2.1v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3A3.2,3.2,0,0,1,61.63,41.79Z" }),
        React__default["default"].createElement("path", { d: "M40.83,47.85a3,3,0,0,1-3.09-3v-1a3,3,0,0,1,3.09-3,3.2,3.2,0,0,1,2.2.87,2.94,2.94,0,0,1,.9,2.1v1A3,3,0,0,1,40.83,47.85Z" }),
        React__default["default"].createElement("path", { d: "M48.79,53.78A.89.89,0,0,1,49.22,55a.88.88,0,0,1-1.16.43l-2-.93a.88.88,0,0,1-.43-1.17.87.87,0,0,1,.8-.51.74.74,0,0,1,.35.08Z" }),
        React__default["default"].createElement("path", { d: "M54.64,53.28a.89.89,0,0,1-.43,1.17l-2,.93a.88.88,0,1,1-.71-1.6l2-.93a.74.74,0,0,1,.35-.08A.89.89,0,0,1,54.64,53.28Z" }),
        React__default["default"].createElement("path", { d: "M59.43,40.92a3.2,3.2,0,0,1,2.2.87,2.94,2.94,0,0,1,.9,2.1v1a3.1,3.1,0,0,1-6.19,0v-1A3,3,0,0,1,59.43,40.92Z" }),
        React__default["default"].createElement("path", { d: "M49.22,55a.88.88,0,0,1-1.16.43l-2-.93a.88.88,0,0,1-.43-1.17.87.87,0,0,1,.8-.51.74.74,0,0,1,.35.08l2,.93A.89.89,0,0,1,49.22,55Z" }),
        React__default["default"].createElement("path", { d: "M54.21,54.45l-2,.93a.88.88,0,1,1-.71-1.6l2-.93a.74.74,0,0,1,.35-.08.88.88,0,0,1,.37,1.68Z" }),
        React__default["default"].createElement("path", { d: "M43.93,43.89v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3,3.2,3.2,0,0,1,2.2.87A2.94,2.94,0,0,1,43.93,43.89Z" }),
        React__default["default"].createElement("path", { d: "M62.53,43.89v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3,3.2,3.2,0,0,1,2.2.87A2.94,2.94,0,0,1,62.53,43.89Z" }),
        React__default["default"].createElement("path", { d: "M95.82,69.89a1,1,0,0,0-1.29-.7c-1.3.41-2.56.76-3.78,1.07l1.07-5a1,1,0,1,0-2-.44l-1.28,6c-8.51,1.9-14.77,1.55-19.29.33A19.92,19.92,0,0,0,76.64,56a18.81,18.81,0,0,0-.4-3.84,2.33,2.33,0,0,1-.07-.25,2.66,2.66,0,0,0-.08-.33,9.74,9.74,0,0,0,3.73-3.08,10.41,10.41,0,0,0,.62-11.75h2.25a7.38,7.38,0,0,0,5.25-2.2,7.56,7.56,0,0,0,2.18-5.31,2.5,2.5,0,0,0-2.48-2.51h-14V15.9c0-.38,0-.74,0-1.1A11.93,11.93,0,0,0,59.45,4.21,48.61,48.61,0,0,1,41,4.33C34.06,3,27.12,7.71,26.61,14.88c0,.33,0,.67,0,1V26.73H12.62a2.4,2.4,0,0,0-1.74.74,2.44,2.44,0,0,0-.73,1.77,7.46,7.46,0,0,0,7.42,7.51h2.12a10.41,10.41,0,0,0,.62,11.75,9.73,9.73,0,0,0,3.84,3.13c0,.09,0,.17-.06.27l-.06.26A18.14,18.14,0,0,0,23.62,56c0,8.93,6.51,16.61,15.84,20,.19.08.38.14.57.2v7.9H36.41V96H63.85V84.09H60.06V76.24a27.75,27.75,0,0,0,7.07-3.49A31.47,31.47,0,0,0,77.2,74.26c1.3,0,2.66-.07,4.12-.2a1.26,1.26,0,0,0,.3.18l10.86,4a1.07,1.07,0,0,0,.35.06,1,1,0,0,0,1-.68,1.06,1.06,0,0,0-.61-1.34l-7.6-2.8a74.36,74.36,0,0,0,9.55-2.31A1.05,1.05,0,0,0,95.82,69.89ZM67.33,53.62a14.89,14.89,0,0,1,.89,4.18,14.56,14.56,0,0,1-4.91,10.74,14.33,14.33,0,0,1-4.47-4.29,9.86,9.86,0,0,0,1-1.36,1.06,1.06,0,0,0-.3-1.44,1,1,0,0,0-1.42.31,9.84,9.84,0,0,1-16.08,0,1,1,0,0,0-1.42-.31,1,1,0,0,0-.29,1.44A11.6,11.6,0,0,0,50.13,68a12,12,0,0,0,7.14-2.34A16.16,16.16,0,0,0,61.54,70a19.77,19.77,0,0,1-11.41,3.52c-10,0-18.1-7-18.1-15.68a14.93,14.93,0,0,1,.9-4.18,6.57,6.57,0,0,0-.7-5.56,7.87,7.87,0,0,1-.67-1.25,10.08,10.08,0,0,1,1-10.06h35.1a10.08,10.08,0,0,1,1,10.07A10.46,10.46,0,0,1,68,48.06,6.5,6.5,0,0,0,67.33,53.62Z" })));
};

var Icon$B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M1.38889 22H23.6111C24.375 22 25 21.175 25 20.1667C25 19.1583 24.375 18.3333 23.6111 18.3333H1.38889C0.625 18.3333 0 19.1583 0 20.1667C0 21.175 0.625 22 1.38889 22ZM1.38889 12.8333H23.6111C24.375 12.8333 25 12.0083 25 11C25 9.99167 24.375 9.16667 23.6111 9.16667H1.38889C0.625 9.16667 0 9.99167 0 11C0 12.0083 0.625 12.8333 1.38889 12.8333ZM0 1.83333C0 2.84167 0.625 3.66667 1.38889 3.66667H23.6111C24.375 3.66667 25 2.84167 25 1.83333C25 0.825 24.375 0 23.6111 0H1.38889C0.625 0 0 0.825 0 1.83333Z" })));
};

var Icon$z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ width: "20", height: "20", viewBox: "0 0 15 15" }, props),
        React__default["default"].createElement("path", { d: "M14.5809 14.5809C15.1396 14.0222 15.1396 13.1164 14.5809 12.5578L9.52316 7.49997L14.5809 2.44225C15.1396 1.88357 15.1396 0.977791 14.5809 0.41912C14.0222 -0.13955 13.1164 -0.139549 12.5578 0.419122L7.50003 5.47684L2.44219 0.419003C1.88352 -0.139668 0.977738 -0.139668 0.419067 0.419003C-0.139603 0.977673 -0.139602 1.88346 0.419069 2.44213L5.47691 7.49997L0.419003 12.5579C-0.139668 13.1165 -0.139668 14.0223 0.419003 14.581C0.977673 15.1397 1.88346 15.1397 2.44213 14.581L7.50003 9.52309L12.5578 14.5809C13.1165 15.1396 14.0223 15.1396 14.5809 14.5809Z" })));
};

var Icon$y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default["default"].createElement("path", { d: "M88.16,34.57,70,20.5,52.92,7.26a4.77,4.77,0,0,0-5.84,0L30,20.5,11.84,34.57A4.76,4.76,0,0,0,10,38.33V88.24A4.76,4.76,0,0,0,14.76,93H34.28A2.72,2.72,0,0,0,37,90.28V57.72A2.72,2.72,0,0,1,39.72,55H60.28A2.72,2.72,0,0,1,63,57.72V90.28A2.72,2.72,0,0,0,65.72,93H85.24A4.76,4.76,0,0,0,90,88.24V38.33A4.76,4.76,0,0,0,88.16,34.57Z" })));
};

var Icon$x = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M23.8686 0.409125C23.8583 0.340356 23.8261 0.276705 23.7769 0.227536C23.7277 0.178367 23.6641 0.146274 23.5952 0.135978C21.4678 -0.23314 18.9748 0.135978 16.393 1.24333L16.3339 1.26917C13.5715 2.47848 11.0646 4.20216 8.94705 6.34822C8.5777 6.71734 8.23791 7.08646 7.9055 7.45557C5.82798 7.59989 3.87588 8.50186 2.42008 9.9901C0.96428 11.4784 0.106217 13.4492 0.00891349 15.5282C0.00711998 15.5367 0.00711998 15.5455 0.00891349 15.554V15.5762C0.0129339 15.6144 0.0229039 15.6517 0.0384617 15.6869C0.0587422 15.7165 0.0822821 15.7437 0.108638 15.7681H0.130798H0.152958H0.182506H0.200974H0.356098H0.404115H0.422577L0.444743 15.7423C0.452963 15.7339 0.459259 15.7238 0.463206 15.7127C0.678653 15.3523 0.936573 15.0189 1.23144 14.7198C1.98501 13.9736 2.95883 13.4896 4.00891 13.3393C3.67675 14.0759 3.39539 14.8344 3.16681 15.6094V15.6463V15.7423C3.16681 15.7423 3.16681 15.7423 3.16681 15.7607C3.16681 15.7755 3.16681 15.7755 3.16681 15.7902C3.16681 15.7902 3.16681 15.7902 3.16681 15.7902V15.8087V15.8308C3.16681 15.8308 3.18527 15.8308 3.19266 15.8567L3.80577 16.4694C2.92553 16.9447 2.1905 17.6493 1.67872 18.5085C1.16694 19.3676 0.897507 20.3493 0.899035 21.3491V22.726C0.899035 22.8141 0.934053 22.8986 0.996392 22.9609C1.05873 23.0232 1.14328 23.0582 1.23144 23.0582H2.54631C3.54131 23.0599 4.51843 22.7938 5.37501 22.2879C6.23159 21.7819 6.936 21.0547 7.41427 20.1827L7.97568 20.7475L7.99783 20.7696H8.01999H8.03846H8.20467H8.23052C8.97363 20.5505 9.70157 20.2829 10.4097 19.9686C10.2194 20.9189 9.75307 21.7919 9.06893 22.4786C8.97659 22.5672 8.89165 22.6595 8.81039 22.7444C8.62141 22.97 8.40129 23.1676 8.15665 23.3313H8.13449C8.10937 23.3545 8.08705 23.3805 8.06801 23.4088V23.431C8.05282 23.465 8.04285 23.501 8.03846 23.538V23.5638C8.03655 23.5724 8.03655 23.5812 8.03846 23.5897V23.6192V23.6451C8.04796 23.6675 8.06037 23.6886 8.07539 23.7078V23.7336L8.10494 23.7595H8.1271L8.19728 23.789H8.22683H8.28961C10.3768 23.7484 12.3755 22.9395 13.9029 21.5173C15.4302 20.0951 16.3787 18.1597 16.5666 16.0818C16.936 15.7459 17.3053 15.4064 17.6747 15.0483C19.8258 12.9344 21.5522 10.4286 22.7605 7.66597C22.7676 7.64564 22.7762 7.62589 22.7864 7.60691C23.8538 5.00833 24.2305 2.53524 23.8686 0.409125ZM19.2407 8.45588C18.8752 8.82202 18.4093 9.07158 17.9019 9.17295C17.3944 9.27432 16.8683 9.22295 16.3901 9.02535C15.9119 8.82774 15.5031 8.49278 15.2155 8.06288C14.9279 7.63297 14.7743 7.12745 14.7743 6.61029C14.7743 6.09314 14.9279 5.58762 15.2155 5.15771C15.5031 4.7278 15.9119 4.39285 16.3901 4.19524C16.8683 3.99764 17.3944 3.94627 17.9019 4.04764C18.4093 4.14901 18.8752 4.39857 19.2407 4.76471C19.7297 5.25462 20.0043 5.91833 20.0043 6.61029C20.0043 7.30226 19.7297 7.96597 19.2407 8.45588Z" })));
};

var Icon$w = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$v = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$3 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#000000";
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 160 26" }, props),
        React__default["default"].createElement("path", { d: "M30.8524 19.7569C30.4803 19.7569 30.2173 19.6799 30.0633 19.5259C29.9221 19.372 29.8516 19.1282 29.8516 18.7946V7.65066C29.8516 7.31705 29.9285 7.07326 30.0825 6.91928C30.2365 6.75248 30.4931 6.66907 30.8524 6.66907H35.5679C37.3642 6.66907 38.6858 7.04759 39.5327 7.80463C40.3796 8.56167 40.803 9.69082 40.803 11.1921C40.803 12.6805 40.3796 13.8032 39.5327 14.5603C38.6987 15.3045 37.3771 15.6766 35.5679 15.6766H33.7394V18.7946C33.7394 19.1282 33.6624 19.372 33.5085 19.5259C33.3545 19.6799 33.0914 19.7569 32.7193 19.7569H30.8524ZM35.2599 12.8858C35.786 12.8858 36.1902 12.7446 36.4725 12.4624C36.7676 12.1801 36.9151 11.7566 36.9151 11.1921C36.9151 10.6147 36.7676 10.1848 36.4725 9.90253C36.1902 9.62025 35.786 9.47911 35.2599 9.47911H33.7394V12.8858H35.2599Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M45.3484 20.0456C44.1423 20.0456 43.1735 19.6607 42.4421 18.8908C41.7236 18.1081 41.3643 17.011 41.3643 15.5996C41.3643 14.5218 41.6081 13.5787 42.0957 12.7703C42.5961 11.9619 43.2954 11.3396 44.1936 10.9034C45.1046 10.4543 46.1503 10.2297 47.3308 10.2297C48.306 10.2297 49.1657 10.3388 49.9099 10.5569C50.6669 10.7622 51.3598 11.0638 51.9885 11.4615V19.1602C51.9885 19.404 51.9436 19.5644 51.8538 19.6414C51.764 19.7184 51.5844 19.7569 51.3149 19.7569H49.3517C49.2106 19.7569 49.1015 19.7376 49.0245 19.6992C48.9475 19.6478 48.8834 19.5708 48.8321 19.4682L48.5819 18.8908C48.2097 19.2886 47.7607 19.5773 47.2346 19.7569C46.7213 19.9494 46.0926 20.0456 45.3484 20.0456ZM46.7919 17.428C47.2923 17.428 47.6837 17.3061 47.966 17.0623C48.2482 16.8186 48.3894 16.4721 48.3894 16.023V13.0205C48.1456 12.905 47.8376 12.8473 47.4655 12.8473C46.7855 12.8473 46.2402 13.0847 45.8296 13.5594C45.4318 14.0342 45.2329 14.7014 45.2329 15.5611C45.2329 16.8057 45.7526 17.428 46.7919 17.428Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M54.667 19.7569C54.2949 19.7569 54.0319 19.6799 53.8779 19.5259C53.7239 19.372 53.6469 19.1282 53.6469 18.7946V11.1151C53.6469 10.8841 53.6854 10.7301 53.7624 10.6532C53.8522 10.5633 54.0318 10.5184 54.3013 10.5184H56.2837C56.4377 10.5184 56.5532 10.5441 56.6302 10.5954C56.72 10.6339 56.7713 10.7109 56.7841 10.8264L56.8804 11.4038C57.2397 11.0445 57.708 10.7622 58.2854 10.5569C58.8756 10.3388 59.53 10.2297 60.2486 10.2297C61.2879 10.2297 62.1283 10.5248 62.7699 11.1151C63.4115 11.6925 63.7322 12.5522 63.7322 13.6942V18.7946C63.7322 19.1282 63.6552 19.372 63.5013 19.5259C63.3601 19.6799 63.1035 19.7569 62.7314 19.7569H60.8645C60.4924 19.7569 60.2229 19.6799 60.0561 19.5259C59.9021 19.372 59.8251 19.1282 59.8251 18.7946V13.9444C59.8251 13.5594 59.7417 13.2836 59.5749 13.1167C59.4081 12.9499 59.1451 12.8665 58.7858 12.8665C58.4009 12.8665 58.0929 12.9692 57.862 13.1745C57.6438 13.3798 57.5348 13.6621 57.5348 14.0213V18.7946C57.5348 19.1282 57.4578 19.372 57.3038 19.5259C57.1627 19.6799 56.906 19.7569 56.5339 19.7569H54.667Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M70.5354 20.0456C68.739 20.0456 67.3532 19.6286 66.3781 18.7946C65.4029 17.9605 64.9153 16.748 64.9153 15.1569C64.9153 14.1817 65.1399 13.322 65.5889 12.5778C66.038 11.8336 66.686 11.2562 67.5329 10.8456C68.3926 10.435 69.4062 10.2297 70.5739 10.2297C71.4592 10.2297 72.2034 10.3131 72.8065 10.4799C73.4224 10.6467 73.9677 10.9034 74.4425 11.2498C74.5836 11.3396 74.6542 11.4551 74.6542 11.5963C74.6542 11.6989 74.6029 11.8336 74.5002 12.0004L73.7111 13.367C73.6213 13.5466 73.5122 13.6364 73.3839 13.6364C73.3069 13.6364 73.185 13.5851 73.0182 13.4824C72.6718 13.2643 72.3446 13.1039 72.0366 13.0013C71.7415 12.8986 71.3694 12.8473 70.9203 12.8473C70.2787 12.8473 69.7591 13.0526 69.3613 13.4632C68.9764 13.8738 68.7839 14.4384 68.7839 15.1569C68.7839 15.8883 68.9828 16.4529 69.3806 16.8506C69.7783 17.2356 70.3237 17.428 71.0165 17.428C71.4271 17.428 71.7992 17.3703 72.1329 17.2548C72.4665 17.1393 72.8065 16.9789 73.1529 16.7736C73.3326 16.671 73.4609 16.6197 73.5379 16.6197C73.6534 16.6197 73.756 16.7095 73.8458 16.8891L74.7119 18.3711C74.7761 18.4994 74.8082 18.6021 74.8082 18.6791C74.8082 18.7946 74.7312 18.9036 74.5772 19.0063C74.0383 19.3527 73.4481 19.6093 72.8065 19.7761C72.1778 19.9558 71.4207 20.0456 70.5354 20.0456Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M79.6881 20.0456C78.482 20.0456 77.5132 19.6607 76.7819 18.8908C76.0633 18.1081 75.704 17.011 75.704 15.5996C75.704 14.5218 75.9478 13.5787 76.4354 12.7703C76.9358 11.9619 77.6351 11.3396 78.5333 10.9034C79.4443 10.4543 80.4901 10.2297 81.6705 10.2297C82.6457 10.2297 83.5054 10.3388 84.2496 10.5569C85.0067 10.7622 85.6995 11.0638 86.3283 11.4615V19.1602C86.3283 19.404 86.2834 19.5644 86.1935 19.6414C86.1037 19.7184 85.9241 19.7569 85.6546 19.7569H83.6915C83.5503 19.7569 83.4412 19.7376 83.3643 19.6992C83.2873 19.6478 83.2231 19.5708 83.1718 19.4682L82.9216 18.8908C82.5495 19.2886 82.1004 19.5773 81.5743 19.7569C81.0611 19.9494 80.4323 20.0456 79.6881 20.0456ZM81.1316 17.428C81.632 17.428 82.0234 17.3061 82.3057 17.0623C82.588 16.8186 82.7291 16.4721 82.7291 16.023V13.0205C82.4853 12.905 82.1774 12.8473 81.8053 12.8473C81.1252 12.8473 80.5799 13.0847 80.1693 13.5594C79.7715 14.0342 79.5726 14.7014 79.5726 15.5611C79.5726 16.8057 80.0923 17.428 81.1316 17.428Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M98.4184 19.0255C98.5082 19.1282 98.5531 19.2436 98.5531 19.372C98.5531 19.4874 98.5146 19.5837 98.4377 19.6607C98.3607 19.7248 98.258 19.7569 98.1297 19.7569H95.1465C94.9668 19.7569 94.8321 19.7441 94.7423 19.7184C94.6653 19.6799 94.5819 19.6093 94.4921 19.5067L91.8745 15.946V18.7946C91.8745 19.1282 91.7975 19.372 91.6435 19.5259C91.4896 19.6799 91.2265 19.7569 90.8544 19.7569H88.9875C88.6154 19.7569 88.3523 19.6799 88.1984 19.5259C88.0572 19.372 87.9866 19.1282 87.9866 18.7946V7.65066C87.9866 7.31705 88.0636 7.07326 88.2176 6.91928C88.3716 6.75248 88.6282 6.66907 88.9875 6.66907H90.8544C91.2265 6.66907 91.4896 6.75248 91.6435 6.91928C91.7975 7.07326 91.8745 7.31705 91.8745 7.65066V14.0983L94.4151 10.7879C94.4921 10.6852 94.5755 10.6147 94.6653 10.5762C94.7551 10.5377 94.8898 10.5184 95.0695 10.5184H98.0527C98.181 10.5184 98.2773 10.5569 98.3414 10.6339C98.4184 10.6981 98.4569 10.7879 98.4569 10.9034C98.4569 11.0317 98.412 11.1472 98.3222 11.2498L95.031 15.0222L98.4184 19.0255Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M104.668 20.0456C103.59 20.0456 102.628 19.866 101.781 19.5067C100.947 19.1474 100.286 18.6085 99.7985 17.89C99.3109 17.1714 99.0671 16.2925 99.0671 15.2531C99.0671 13.6236 99.529 12.379 100.453 11.5193C101.377 10.6596 102.705 10.2297 104.437 10.2297C106.131 10.2297 107.414 10.6532 108.286 11.5C109.172 12.334 109.614 13.4953 109.614 14.9837C109.614 15.6252 109.332 15.946 108.767 15.946H102.724C102.724 16.4978 102.929 16.9212 103.34 17.2163C103.763 17.5114 104.398 17.659 105.245 17.659C105.771 17.659 106.208 17.6141 106.554 17.5243C106.913 17.4216 107.273 17.2741 107.632 17.0816C107.786 17.0174 107.889 16.9854 107.94 16.9854C108.055 16.9854 108.152 17.0623 108.229 17.2163L108.883 18.4481C108.947 18.5764 108.979 18.6727 108.979 18.7368C108.979 18.8523 108.902 18.9614 108.748 19.064C108.222 19.4105 107.626 19.6607 106.958 19.8146C106.291 19.9686 105.528 20.0456 104.668 20.0456ZM106.15 14.0406C106.15 13.553 106.009 13.1745 105.726 12.905C105.444 12.6356 105.021 12.5009 104.456 12.5009C103.892 12.5009 103.462 12.642 103.167 12.9243C102.872 13.1937 102.724 13.5658 102.724 14.0406H106.15Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M116.211 20.0456C115.133 20.0456 114.113 19.9365 113.151 19.7184C112.189 19.4874 111.412 19.1667 110.822 18.7561C110.604 18.6149 110.495 18.4674 110.495 18.3134C110.495 18.2107 110.533 18.1017 110.61 17.9862L111.553 16.4849C111.656 16.331 111.759 16.254 111.861 16.254C111.926 16.254 112.035 16.2989 112.189 16.3887C112.663 16.6582 113.202 16.8763 113.805 17.0431C114.408 17.2099 115.005 17.2933 115.595 17.2933C116.198 17.2933 116.641 17.2035 116.923 17.0238C117.218 16.8442 117.366 16.5555 117.366 16.1577C117.366 15.7728 117.206 15.4713 116.885 15.2531C116.577 15.035 115.993 14.7591 115.133 14.4255C113.837 13.9379 112.824 13.3926 112.092 12.7896C111.374 12.1737 111.015 11.3396 111.015 10.2875C111.015 9.01718 111.47 8.04843 112.381 7.38121C113.292 6.71398 114.505 6.38037 116.019 6.38037C117.071 6.38037 117.969 6.47661 118.713 6.66907C119.47 6.84871 120.112 7.131 120.638 7.51593C120.856 7.68274 120.965 7.83671 120.965 7.97786C120.965 8.06767 120.927 8.17032 120.85 8.2858L119.907 9.78705C119.791 9.94103 119.688 10.018 119.599 10.018C119.534 10.018 119.425 9.97311 119.271 9.88329C118.527 9.3957 117.642 9.15191 116.615 9.15191C116.064 9.15191 115.64 9.24173 115.345 9.42137C115.05 9.601 114.902 9.89612 114.902 10.3067C114.902 10.589 114.979 10.82 115.133 10.9996C115.287 11.1792 115.493 11.3396 115.749 11.4808C116.019 11.6091 116.429 11.7759 116.981 11.9812L117.347 12.1159C118.296 12.488 119.04 12.8473 119.579 13.1937C120.131 13.5273 120.548 13.9444 120.83 14.4448C121.113 14.9324 121.254 15.5483 121.254 16.2925C121.254 17.4344 120.824 18.3455 119.964 19.0255C119.117 19.7056 117.866 20.0456 116.211 20.0456Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M125.343 19.7569C125.151 19.7569 125.003 19.7248 124.9 19.6607C124.798 19.5965 124.721 19.4682 124.67 19.2757L122.187 10.9611C122.161 10.8841 122.148 10.8264 122.148 10.7879C122.148 10.6083 122.277 10.5184 122.533 10.5184H125.074C125.241 10.5184 125.362 10.5505 125.439 10.6147C125.516 10.666 125.568 10.7558 125.593 10.8841L126.633 15.2531L127.941 11.731C128.006 11.577 128.07 11.4744 128.134 11.423C128.211 11.3589 128.339 11.3268 128.519 11.3268H129.731C129.911 11.3268 130.033 11.3589 130.097 11.423C130.174 11.4744 130.245 11.577 130.309 11.731L131.598 15.2531L132.657 10.8841C132.695 10.7558 132.747 10.666 132.811 10.6147C132.875 10.5505 132.991 10.5184 133.157 10.5184H135.717C135.974 10.5184 136.102 10.6083 136.102 10.7879C136.102 10.8264 136.089 10.8841 136.064 10.9611L133.562 19.2757C133.51 19.4682 133.433 19.5965 133.331 19.6607C133.241 19.7248 133.1 19.7569 132.907 19.7569H131.021C130.841 19.7569 130.707 19.7248 130.617 19.6607C130.527 19.5837 130.45 19.4554 130.386 19.2757L129.116 15.7921L127.845 19.2757C127.794 19.4554 127.717 19.5837 127.614 19.6607C127.524 19.7248 127.39 19.7569 127.21 19.7569H125.343Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M140.981 20.0456C139.775 20.0456 138.806 19.6607 138.075 18.8908C137.356 18.1081 136.997 17.011 136.997 15.5996C136.997 14.5218 137.241 13.5787 137.728 12.7703C138.229 11.9619 138.928 11.3396 139.826 10.9034C140.737 10.4543 141.783 10.2297 142.963 10.2297C143.938 10.2297 144.798 10.3388 145.542 10.5569C146.299 10.7622 146.992 11.0638 147.621 11.4615V19.1602C147.621 19.404 147.576 19.5644 147.486 19.6414C147.396 19.7184 147.217 19.7569 146.947 19.7569H144.984C144.843 19.7569 144.734 19.7376 144.657 19.6992C144.58 19.6478 144.516 19.5708 144.465 19.4682L144.214 18.8908C143.842 19.2886 143.393 19.5773 142.867 19.7569C142.354 19.9494 141.725 20.0456 140.981 20.0456ZM142.424 17.428C142.925 17.428 143.316 17.3061 143.598 17.0623C143.881 16.8186 144.022 16.4721 144.022 16.023V13.0205C143.778 12.905 143.47 12.8473 143.098 12.8473C142.418 12.8473 141.873 13.0847 141.462 13.5594C141.064 14.0342 140.865 14.7014 140.865 15.5611C140.865 16.8057 141.385 17.428 142.424 17.428Z", fill: textColor }),
        React__default["default"].createElement("path", { d: "M150.28 23.6447C149.908 23.6447 149.645 23.5678 149.491 23.4138C149.35 23.2598 149.279 23.016 149.279 22.6824V11.654C149.857 11.2434 150.582 10.9034 151.454 10.6339C152.327 10.3645 153.238 10.2297 154.187 10.2297C158.062 10.2297 160 11.8721 160 15.1569C160 16.6453 159.589 17.8322 158.768 18.7176C157.947 19.6029 156.786 20.0456 155.284 20.0456C154.861 20.0456 154.45 19.9943 154.053 19.8916C153.668 19.789 153.347 19.6478 153.09 19.4682V22.6824C153.09 23.016 153.013 23.2598 152.859 23.4138C152.705 23.5678 152.442 23.6447 152.07 23.6447H150.28ZM154.457 17.4473C155.009 17.4473 155.419 17.242 155.689 16.8314C155.971 16.408 156.112 15.8434 156.112 15.1377C156.112 14.3036 155.945 13.7198 155.612 13.3862C155.291 13.0398 154.79 12.8665 154.11 12.8665C153.674 12.8665 153.328 12.9243 153.071 13.0398V16.1C153.071 16.5363 153.193 16.8699 153.437 17.1008C153.681 17.3318 154.021 17.4473 154.457 17.4473Z", fill: textColor }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.38998 4.50033C4.01476 2.49106 5.55649 0.634766 7.60049 0.634766C9.40427 0.634766 10.8665 2.09701 10.8665 3.90078V7.92728C11.3177 7.89544 11.7761 7.87911 12.2404 7.87911C12.6865 7.87911 13.1272 7.89418 13.5612 7.9236V3.90078C13.5612 2.09701 15.0234 0.634766 16.8272 0.634766C18.8712 0.634766 20.4129 2.49106 20.0377 4.50033L19.1539 9.23326C22.1872 10.5576 24.4809 12.8577 24.4809 15.748V17.4966C24.4809 19.8734 22.9085 21.8634 20.7102 23.2068C18.4948 24.5606 15.4978 25.3654 12.2404 25.3654C8.98304 25.3654 5.98604 24.5606 3.77065 23.2068C1.57242 21.8634 0 19.8734 0 17.4966V15.748C0 12.873 2.2701 10.5817 5.27785 9.25477L4.38998 4.50033ZM18.0212 9.85508L19.0555 4.3169C19.3159 2.92236 18.2459 1.63399 16.8272 1.63399C15.5753 1.63399 14.5604 2.64886 14.5604 3.90078V9.02479C14.2324 8.98273 13.8991 8.9494 13.5612 8.92524C13.128 8.89426 12.6873 8.87833 12.2404 8.87833C11.7753 8.87833 11.3168 8.89559 10.8665 8.92912C10.5286 8.95429 10.1953 8.98862 9.86729 9.03169V3.90078C9.86729 2.64886 8.85241 1.63399 7.60049 1.63399C6.18184 1.63399 5.11179 2.92235 5.37222 4.3169L6.40988 9.87345C3.16599 11.0784 0.999219 13.2586 0.999219 15.748V17.4966C0.999219 21.2906 6.03208 24.3662 12.2404 24.3662C18.4488 24.3662 23.4817 21.2906 23.4817 17.4966V15.748C23.4817 13.2458 21.2927 11.0562 18.0212 9.85508Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M23.4815 17.4967C23.4815 21.2907 18.4486 24.3663 12.2402 24.3663C6.03189 24.3663 0.999023 21.2907 0.999023 17.4967V15.748H23.4815V17.4967Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.37202 4.31671C5.1116 2.92216 6.18164 1.63379 7.6003 1.63379C8.85222 1.63379 9.8671 2.64867 9.8671 3.90059V9.0315C10.6321 8.93102 11.4261 8.87813 12.2402 8.87813C13.0356 8.87813 13.8116 8.9286 14.5602 9.02459V3.90059C14.5602 2.64867 15.5751 1.63379 16.827 1.63379C18.2457 1.63379 19.3157 2.92216 19.0553 4.31671L18.021 9.85488C21.2925 11.056 23.4815 13.2457 23.4815 15.7478C23.4815 19.5418 18.4486 22.6174 12.2402 22.6174C6.03189 22.6174 0.999023 19.5418 0.999023 15.7478C0.999023 13.2584 3.16579 11.0782 6.40968 9.87326L5.37202 4.31671Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { d: "M9.11817 15.2485C9.11817 16.2833 8.55896 17.1221 7.86914 17.1221C7.17932 17.1221 6.62012 16.2833 6.62012 15.2485C6.62012 14.2138 7.17932 13.375 7.86914 13.375C8.55896 13.375 9.11817 14.2138 9.11817 15.2485Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M17.7363 15.2485C17.7363 16.2833 17.1771 17.1221 16.4873 17.1221C15.7975 17.1221 15.2383 16.2833 15.2383 15.2485C15.2383 14.2138 15.7975 13.375 16.4873 13.375C17.1771 13.375 17.7363 14.2138 17.7363 15.2485Z", fill: "#633001" })));
};

var StyledLogo = styled__default["default"].h1(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  font-family: \"Titan One\", cursive;\n  color: #af6e5a;\n  font-weight: 400;\n  font-size: 20px;\n  margin-left: 8px;\n"], ["\n  font-family: \"Titan One\", cursive;\n  color: #af6e5a;\n  font-weight: 400;\n  font-size: 20px;\n  margin-left: 8px;\n"])));
var Logo$2 = function () {
    return React__default["default"].createElement(StyledLogo, null, "ApeSwap");
};
var templateObject_1$l;

var Icon$u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "-2.5 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M2.28594 0H16.7177C16.9438 0.0678094 17.1777 0.120017 17.3949 0.207029C18.4065 0.627087 19.0015 1.56982 19.0015 2.74838C19.0015 8.58 19.0015 14.4118 19.0015 20.2438C19.0015 20.311 19.0015 20.3782 19.0015 20.446C18.9581 21.8526 17.8257 22.9928 16.4315 22.9952C11.8147 23.0024 7.1973 23 2.5793 22.988C2.22356 22.9835 1.87277 22.9034 1.54986 22.7528C0.517449 22.2661 0.00748672 21.4194 0.00748672 20.266V5.39835C0.00748672 4.47002 -0.000844 3.54169 0.00748672 2.61336C0.0158174 1.68503 0.420454 0.93313 1.20295 0.435061C1.52606 0.229832 1.92415 0.14162 2.28594 0ZM9.52594 2.875C7.87129 2.875 6.21685 2.875 4.56261 2.875C3.57542 2.875 2.8679 3.5855 2.85541 4.58344C2.84946 5.0395 2.84946 5.49577 2.85541 5.95223C2.86671 6.93937 3.55757 7.66187 4.53643 7.66487C7.84571 7.67487 11.1546 7.67487 14.4631 7.66487C15.4437 7.66187 16.1346 6.94477 16.1483 5.95523C16.1542 5.52137 16.1483 5.08751 16.1483 4.65365C16.1435 3.5735 15.4509 2.8744 14.3768 2.8738L9.52594 2.875ZM5.70689 18.2431C5.94491 18.4904 6.15259 18.7124 6.36145 18.9314C6.43347 19.0129 6.52358 19.076 6.62441 19.1157C6.72524 19.1553 6.83394 19.1703 6.94163 19.1595C7.23201 19.1301 7.44504 18.9794 7.5462 18.701C7.59902 18.5717 7.61183 18.4293 7.58294 18.2926C7.55406 18.1558 7.48483 18.0311 7.38434 17.9347C7.16239 17.7073 6.9327 17.4882 6.6917 17.2518C6.9452 17.001 7.17429 16.7879 7.38732 16.5593C7.73245 16.1885 7.63367 15.619 7.19571 15.4053C7.06158 15.3379 6.90948 15.3158 6.76192 15.3422C6.61435 15.3687 6.47915 15.4424 6.37633 15.5524C6.1508 15.775 5.93658 16.0102 5.70451 16.2533C5.45816 15.9994 5.24692 15.7792 5.03329 15.5608C4.95989 15.4805 4.869 15.4186 4.7678 15.3799C4.66659 15.3411 4.55785 15.3266 4.45014 15.3375C4.31589 15.3451 4.18691 15.3928 4.07973 15.4747C3.97255 15.5566 3.89206 15.6689 3.84855 15.7972C3.79574 15.9227 3.78203 16.0614 3.80924 16.195C3.83645 16.3285 3.90329 16.4506 4.00088 16.5449C4.22641 16.7795 4.46621 16.9992 4.71851 17.244C4.47097 17.484 4.25378 17.6905 4.0461 17.9041C3.73489 18.2227 3.72002 18.6542 4.00266 18.9464C4.28531 19.2387 4.7316 19.2387 5.05293 18.92C5.26418 18.7088 5.46768 18.491 5.70689 18.2431ZM4.99283 12.2171C4.99283 12.3791 4.99283 12.5123 4.99283 12.645C4.99938 13.0896 5.28679 13.4077 5.68904 13.4173C6.0913 13.4269 6.4031 13.0968 6.41679 12.648C6.42036 12.5093 6.41679 12.3701 6.41679 12.2171C6.59531 12.2171 6.74407 12.2213 6.89283 12.2171C7.07092 12.2023 7.23703 12.1207 7.35836 11.9883C7.47968 11.856 7.54741 11.6827 7.54815 11.5025C7.5489 11.3222 7.48262 11.1483 7.36239 11.015C7.24217 10.8816 7.07674 10.7986 6.89878 10.7823C6.74526 10.7769 6.59174 10.7823 6.41322 10.7823C6.41322 10.5867 6.4275 10.4145 6.41322 10.2458C6.39904 10.06 6.31399 9.887 6.17595 9.76312C6.03791 9.63924 5.85762 9.57415 5.67298 9.58153C5.28976 9.60194 5.00711 9.89898 4.99402 10.3016C4.98926 10.4559 4.99402 10.6101 4.99402 10.7817C4.80896 10.7817 4.65425 10.7769 4.50013 10.7817C4.32265 10.7971 4.15729 10.8788 4.03649 11.0108C3.91569 11.1428 3.84818 11.3156 3.84721 11.4952C3.84624 11.6749 3.91188 11.8484 4.03125 11.9817C4.15062 12.115 4.31509 12.1986 4.49239 12.2159C4.64651 12.2225 4.80182 12.2171 4.99224 12.2171H4.99283ZM13.3093 12.4535C13.6871 12.4535 14.065 12.4565 14.4399 12.4535C14.8808 12.4487 15.1944 12.1535 15.2003 11.7496C15.2063 11.3458 14.8885 11.0229 14.4387 11.0193C13.6758 11.0133 12.913 11.0133 12.1501 11.0193C11.7074 11.0235 11.4057 11.3248 11.4051 11.7394C11.4045 12.1541 11.7086 12.4481 12.1513 12.4535C12.5387 12.4571 12.9237 12.4535 13.3087 12.4535H13.3093ZM13.295 16.7657C13.68 16.7657 14.0656 16.7693 14.4506 16.7657C14.8885 16.7603 15.2015 16.4609 15.2033 16.054C15.2051 15.6472 14.8933 15.3339 14.4559 15.3339C13.6859 15.3267 12.9157 15.3267 12.1454 15.3339C11.7044 15.3387 11.4051 15.646 11.4081 16.0612C11.4111 16.4765 11.7163 16.7573 12.159 16.7645C12.5393 16.7687 12.9165 16.7657 13.2944 16.7657H13.295ZM13.3075 19.1661C13.7002 19.1661 14.093 19.1763 14.4851 19.1661C14.907 19.1523 15.2081 18.8366 15.2033 18.4376C15.1986 18.0385 14.8885 17.7373 14.4655 17.7343C13.6875 17.7291 12.91 17.7291 12.1329 17.7343C12.0077 17.7364 11.8846 17.7663 11.7723 17.8219C11.6332 17.8958 11.5231 18.0151 11.4599 18.1603C11.3967 18.3054 11.3841 18.4679 11.4242 18.6212C11.4973 18.9302 11.7812 19.1559 12.1299 19.1643C12.5214 19.1757 12.9142 19.1685 13.3069 19.1679L13.3075 19.1661Z" })));
};

var FullLogo = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 1802 398" }, props),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("style", null, ".cls-1{fill:#a16552;}.cls-2{fill:#f5dcb4;}.cls-3,.cls-7{fill:#4e3f3f;}.cls-4{fill:#e6646e;}.cls-5{fill:#5d5360;}.cls-6{fill:#fff;}.cls-7{opacity:0.35;}")),
        React__default["default"].createElement("path", { className: "cls-1", d: "M54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94Z" }),
        React__default["default"].createElement("path", { className: "cls-2", d: "M54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M383.4,212.61c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React__default["default"].createElement("path", { className: "cls-2", d: "M383.4,212.61c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M314.85,229.06a39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45,61.61,61.61,0,0,1,314.85,229.06Z" }),
        React__default["default"].createElement("path", { className: "cls-2", d: "M314.85,229.06a39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45,61.61,61.61,0,0,1,314.85,229.06Z" }),
        React__default["default"].createElement("path", { className: "cls-3", d: "M146.41,300.76a6.45,6.45,0,0,0-6.41,7.29c4,28.45,31,50.45,63.65,50.45s59.67-22,63.65-50.45a6.45,6.45,0,0,0-6.4-7.29Z" }),
        React__default["default"].createElement("path", { className: "cls-4", d: "M166.68,347.91a69.83,69.83,0,0,0,73.94,0c-4.64-16.06-19.47-12.36-37-12.36S171.32,331.85,166.68,347.91Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M380.9,133.36c-13.3-5.16-23.85-2.44-31.27,1.83a163.15,163.15,0,0,0-6.25-15.69q-2.58-5.62-5.57-11.09C317.46,71.18,283.24,40.28,244,27.22L243.2,6.08,217.78,21.34,214.72,21c-1.88-.17-3.74-.3-5.64-.38l-3.71-16L204.28,0c-1.27,0-2.51,0-3.72.14-23.65,1.92-35.42,23.41-37.26,27.09C124,40.29,89.84,71.2,69.49,108.41q-3,5.46-5.57,11.09a167,167,0,0,0-6.26,15.69l-.95-.53c-7.36-3.95-17.58-6.23-30.31-1.3C-1.55,144.2-9.09,190.26,13.56,219c9.24,11.68,19,18.08,28.32,20.93-.12.52-.24,1.05-.35,1.58A109.88,109.88,0,0,0,39,265c0,54.83,40.44,102,98.38,122.73a191.69,191.69,0,0,0,42.06,9.87A201.87,201.87,0,0,0,201.88,399h1.78c90.93,0,164.64-60,164.64-134a109.88,109.88,0,0,0-2.53-23.51c-.12-.53-.23-1.06-.36-1.58,9.37-2.85,19.09-9.25,28.32-20.94C416.39,190.26,408.84,144.19,380.9,133.36ZM54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94ZM319,221.45a61.61,61.61,0,0,1-4.15,7.61,39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45Zm64.4-8.84c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React__default["default"].createElement("rect", { className: "cls-3", x: 181.43, y: 245.71, width: 10.8, height: 24.52, rx: 5.24, transform: "translate(-125.45 320.72) rotate(-65.45)" }),
        React__default["default"].createElement("rect", { className: "cls-3", x: 215.08, y: 245.71, width: 10.8, height: 24.52, rx: 5.24, transform: "translate(77.43 565.71) rotate(-114.55)" }),
        React__default["default"].createElement("path", { className: "cls-3", d: "M145.91,221.43h0c-10.63,0-19.25-8.16-19.25-18.24v-6.08c0-10.07,8.62-18.24,19.25-18.24h0c10.63,0,19.24,8.17,19.24,18.24v6.08C165.15,213.27,156.54,221.43,145.91,221.43Z" }),
        React__default["default"].createElement("path", { className: "cls-5", d: "M145.91,178.87v21.28a9.63,9.63,0,0,0,19.24,0v-3C165.15,187,156.54,178.87,145.91,178.87Z" }),
        React__default["default"].createElement("ellipse", { className: "cls-6", cx: 145.91, cy: 191.03, rx: 6.42, ry: 6.08 }),
        React__default["default"].createElement("path", { className: "cls-3", d: "M261.39,221.43h0c-10.63,0-19.24-8.16-19.24-18.24v-6.08c0-10.07,8.61-18.24,19.24-18.24h0c10.63,0,19.25,8.17,19.25,18.24v6.08C280.64,213.27,272,221.43,261.39,221.43Z" }),
        React__default["default"].createElement("path", { className: "cls-5", d: "M261.39,178.87v21.28a9.64,9.64,0,0,0,19.25,0v-3C280.64,187,272,178.87,261.39,178.87Z" }),
        React__default["default"].createElement("ellipse", { className: "cls-6", cx: 261.39, cy: 191.03, rx: 6.42, ry: 6.08 }),
        React__default["default"].createElement("path", { className: "cls-7", d: "M205.37,4.66c-4.31-.42-13.74,6.35-25,18.1-2.81,2.93-5.75,6.18-8.75,9.7C149.47,58.41,123.82,99.33,115,141.32c-14.74,70.5-20.73,152.3,5.29,197.67,22.05,38.44,59.11,58.59,59.11,58.59a191.69,191.69,0,0,1-42.06-9.87C79.43,367,39,319.81,39,265a109.88,109.88,0,0,1,2.54-23.51c.11-.53.23-1.06.35-1.58C32.52,237,22.8,230.64,13.56,219c-22.65-28.7-15.11-74.76,12.84-85.6,12.73-4.93,23-2.65,30.31,1.3l.95.53a167,167,0,0,1,6.26-15.69q2.58-5.62,5.57-11.09C89.84,71.2,124,40.29,163.3,27.23c1.84-3.68,13.61-25.17,37.26-27.09C201.77,0,203,0,204.28,0Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M555,302.24q-7.46,2.88-26.78,2.87T496,301.58q-12.93-3.52-12.93-9,0-6.27,23.25-80.07t26.65-85q1.31-3.39,21-5.62a379.26,379.26,0,0,1,42.32-2.22q22.61,0,25,7.84,49.38,164.07,49.38,166.68t-3.13,5.22q-7.32,5.76-29,5.75-46.25,0-47.29-11l-1.83-17H564.3L563,291.79Q562.46,299.36,555,302.24Zm28.86-74.72-3.91-47h-5.75l-4.44,47Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M687.61,336.72V170.56q0-5.48,14.63-11.23a85.7,85.7,0,0,1,31.61-5.75c5.23,0,9.32.62,12.28,1.83s4.79,2.44,5.49,3.66,2,6.44,3.92,15.67h2.09q.51-2.34,4.7-7.31a48.63,48.63,0,0,1,8.49-8.1q4.3-3.14,12.41-5.62a65,65,0,0,1,18.94-2.48,40.51,40.51,0,0,1,19.72,4.84q8.88,4.83,13.2,11.23a51.82,51.82,0,0,1,6.79,16.2,92.82,92.82,0,0,1,2.87,15.67q.4,5.88.4,17t-.79,21.95a199.41,199.41,0,0,1-2.87,22.08,77,77,0,0,1-6,19.33,59.94,59.94,0,0,1-9.93,14.63q-12,13.07-35.27,13.06a40.77,40.77,0,0,1-14.76-2.48q-6.4-2.48-9.53-5.88-6.54-7.05-7.58-12.54l-.26-2.61h-2.09l3.66,23.51v29.52q0,2.88-15,4.57a272.35,272.35,0,0,1-30.82,1.7q-15.81,0-21-1.43C689.35,340.6,687.61,339,687.61,336.72ZM772,197.47q-2.36-8.88-7.06-8.88t-6.79,5.23v68.44q0,6.81,7.05,6.8,9.15,0,9.15-40.5Q774.35,206.36,772,197.47Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M934.75,246.07q0,17,16.2,17,9.4,0,24.56-6.4t15.94-6.4q4.95,0,13.06,14.89t8.1,21.94q0,10.2-20.9,15.42a168.41,168.41,0,0,1-40.89,5.22q-20,0-33.44-3.13t-21.94-8A63.5,63.5,0,0,1,871,271.28,67,67,0,0,1,866,257a107,107,0,0,1-2.61-23.77q0-47.55,24.82-65.58a75,75,0,0,1,27.43-12.8q15.15-3.66,35.8-3.66,66.09,0,66.09,46,0,48.85-74.19,48.86Zm-.52-38.15v17.25a15.21,15.21,0,0,0,12.41-6,22.62,22.62,0,0,0,4.84-14.63q0-15.67-8.1-15.68Q934.23,188.85,934.23,207.92Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M1172.76,294.14q-7.85,5.75-21.82,9.53t-36,3.79A231,231,0,0,1,1073,303.8q-19.86-3.65-28.48-8.09t-8.62-8.63a118.79,118.79,0,0,1,4.18-30.43q4.17-15.81,9.93-15.81,1,0,21.68,7.06t31.09,7q10.46,0,13.59-2.22a7.35,7.35,0,0,0,3.13-6.4q0-4.19-5.75-7.45a66.61,66.61,0,0,0-14.37-5.74,128.6,128.6,0,0,1-18.67-7.19A141,141,0,0,1,1062,215.5a44.72,44.72,0,0,1-14.37-16.33,49.7,49.7,0,0,1-5.75-24.16q0-58,69.23-58,25.86,0,44.68,3.26t26.51,7.32q7.71,4,7.71,8,0,13.58-6.4,29.26t-12.41,15.67q-1.05,0-6.79-2.35-17.25-7.57-28.61-7.58t-15.41,2.09a6.79,6.79,0,0,0-4.05,6.41q0,4.31,5.74,7.05a80.13,80.13,0,0,0,14.24,5,116.75,116.75,0,0,1,18.55,6.8,112.66,112.66,0,0,1,18.68,10.71q8.63,6.13,14.37,17.37t5.75,26.13a52.13,52.13,0,0,1-8.1,28.47A49.87,49.87,0,0,1,1172.76,294.14Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M1412.85,298.84q-3.4,6.27-35.4,6.27t-33.31-6.27l-8.88-47.55h-3.66l-8.36,47.55q-.79,6.27-45.72,6.27-12.54,0-16.59-1.44a9.19,9.19,0,0,1-5.62-4.83q-48.58-119.38-48.59-125.66t18.94-12.93a109.46,109.46,0,0,1,36.44-6.67q22.47,0,23.26,12l8.88,71.58h3.13l3.14-57.73q.26-6.52,13.32-11.5a74,74,0,0,1,26.39-5q13.32,0,20,3.26t6.92,8l2.87,63h2.88L1381.5,170q.78-6.27,17.63-11.36t29.65-5.1q12.81,0,20.12,3.66,12,5.74,12,13.59,0,.78-23.64,63.74T1412.85,298.84Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M1515.78,307.46q-23.77,0-37.36-11.23-5.49-4.71-9.54-13.85T1464.83,261a38.7,38.7,0,0,1,5.88-21.42A43.08,43.08,0,0,1,1485,225.43a80.67,80.67,0,0,1,19.59-8.1,147.56,147.56,0,0,1,37.36-4.44h8.63q0-10.71-7.32-15.15-3.14-1.83-9.54-1.83t-15.41,3.39a98.26,98.26,0,0,0-15,6.93q-6,3.53-8.1,3.52-4.71,0-12.8-12.41t-8.1-22.6q0-3.39,9.67-8.88t27.3-10.06a136.9,136.9,0,0,1,34.35-4.57,133.15,133.15,0,0,1,28.87,2.74,86.1,86.1,0,0,1,19.86,6.67,40.4,40.4,0,0,1,13.06,10.45,71.92,71.92,0,0,1,8.1,11.75,44.47,44.47,0,0,1,4,13.59,131.35,131.35,0,0,1,1.83,23.77v78.64q0,2.88-14,4.57a227.87,227.87,0,0,1-27.69,1.7q-13.73,0-17.77-.78c-2.7-.53-4.31-1.13-4.83-1.83a9.49,9.49,0,0,1-1.31-3.66L1553.66,284h-2.09Q1545,307.46,1515.78,307.46Zm35-43.37V233.53a13,13,0,0,0-11,5.74,21.73,21.73,0,0,0-4.18,13.07q0,17.23,7.84,17.24a7.89,7.89,0,0,0,5.36-1.7A5,5,0,0,0,1550.79,264.09Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M1644.83,336.72V170.56q0-5.48,14.63-11.23a85.76,85.76,0,0,1,31.62-5.75c5.22,0,9.31.62,12.28,1.83s4.78,2.44,5.48,3.66,2,6.44,3.92,15.67h2.09q.53-2.34,4.7-7.31a49,49,0,0,1,8.49-8.1q4.32-3.14,12.41-5.62a65.06,65.06,0,0,1,18.94-2.48,40.52,40.52,0,0,1,19.73,4.84q8.88,4.83,13.19,11.23a51.36,51.36,0,0,1,6.79,16.2,92,92,0,0,1,2.88,15.67q.39,5.88.39,17t-.78,21.95a199.47,199.47,0,0,1-2.88,22.08,76.15,76.15,0,0,1-6,19.33,60.19,60.19,0,0,1-9.92,14.63q-12,13.07-35.27,13.06a40.69,40.69,0,0,1-14.76-2.48q-6.4-2.48-9.54-5.88-6.53-7.05-7.58-12.54l-.26-2.61h-2.09l3.66,23.51v29.52q0,2.88-15,4.57a272.52,272.52,0,0,1-30.83,1.7q-15.81,0-21-1.43C1646.57,340.6,1644.83,339,1644.83,336.72Zm84.39-139.25q-2.35-8.88-7-8.88t-6.8,5.23v68.44q0,6.81,7.06,6.8,9.13,0,9.14-40.5Q1731.57,206.36,1729.22,197.47Z" })));
};

var Logo$1 = function () {
    return (React__default["default"].createElement("svg", { height: "30px", viewBox: "0 0 512 512", id: "Capa_1", overflow: "hidden" },
        React__default["default"].createElement("circle", { cx: "66.06", cy: "222.97", r: "66.06", fill: "#965A50" }),
        React__default["default"].createElement("circle", { cx: "66.06", cy: "222.97", r: "41.29", fill: "#EBC9A0" }),
        React__default["default"].createElement("circle", { cx: "445.94", cy: "222.97", r: "66.06", fill: "#965A50" }),
        React__default["default"].createElement("circle", { cx: "445.94", cy: "222.97", r: "41.29", fill: "#EBC9A0" }),
        React__default["default"].createElement("path", { d: "M442.589 262.049C434.223 247.613 429.42 231.394 429.42 214.709L429.42 214.708C429.42 142.335 385.056 80.378 322.065 54.39L322.065 24.774 280.775 41.29 272.517 8.258C250.736 15.519 232.156 30.756 218.161 45.556 140.604 62.839 82.581 131.946 82.581 214.71 82.581 231.395 77.778 247.614 69.412 262.05 56.692 283.998 49.549 308.532 49.549 334.452 49.549 427.948 141.98 503.742 256.001 503.742 370.022 503.742 462.453 427.948 462.453 334.452 462.452 308.532 455.308 283.997 442.589 262.049Z", fill: "#AF6E5A" }),
        React__default["default"].createElement("path", { d: "M140.387 364.043C140.387 333.803 147.53 305.179 160.25 279.574 168.617 262.733 173.419 243.81 173.419 224.344 173.419 140.309 217.388 68.388 279.912 37.842L272.516 8.258C250.735 15.519 232.155 30.756 218.159 45.556 140.604 62.839 82.581 131.946 82.581 214.71 82.581 231.395 77.779 247.614 69.412 262.05 56.692 283.998 49.549 308.532 49.549 334.452 49.549 409.917 109.781 473.822 192.964 495.675 160.282 460.734 140.387 414.619 140.387 364.043Z", fill: "#965A50" }),
        React__default["default"].createElement("path", { d: "M256 470.71C324.412 470.71 379.871 426.343 379.871 371.613 379.871 360.259 377.457 349.368 373.036 339.227 366.626 324.52 368.808 307.64 379.106 295.338 392.24 279.647 399.014 258.461 395.439 235.703 390.529 204.444 365.257 179.217 333.991 174.35 310.099 170.631 287.954 178.318 272.088 192.789 267.578 196.902 261.788 198.959 256.001 198.959 250.211 198.959 244.42 196.903 239.91 192.789 224.044 178.318 201.899 170.631 178.007 174.35 146.741 179.216 121.47 204.444 116.559 235.703 112.984 258.46 119.758 279.646 132.892 295.338 143.19 307.641 145.372 324.52 138.962 339.227 134.542 349.369 132.127 360.26 132.127 371.613 132.129 426.342 187.588 470.71 256 470.71Z", fill: "#FAEBC8" }),
        React__default["default"].createElement("path", { d: "M132.129 371.612C132.129 390.134 138.597 407.407 149.653 422.237 143.715 403.826 140.387 384.321 140.387 364.042 140.387 333.802 147.53 305.178 160.25 279.573 168.617 262.732 173.419 243.809 173.419 224.343 173.419 207.036 175.379 190.287 178.887 174.263 178.592 174.305 178.304 174.303 178.008 174.349 146.742 179.215 121.472 204.443 116.56 235.701 112.985 258.459 119.76 279.645 132.893 295.336 143.191 307.638 145.374 324.517 138.964 339.225 134.543 349.368 132.129 360.259 132.129 371.612Z", fill: "#F5DCB4" }),
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: "M239.476 330.323C238.234 330.323 236.976 330.045 235.791 329.452L219.275 321.194C215.194 319.154 213.541 314.194 215.581 310.113 217.629 306.032 222.581 304.379 226.662 306.419L243.178 314.677C247.259 316.717 248.912 321.677 246.872 325.758 245.419 328.653 242.508 330.323 239.476 330.323Z", fill: "#5D5360" }),
            React__default["default"].createElement("path", { d: "M272.524 330.323C269.492 330.323 266.58 328.654 265.129 325.758 263.089 321.677 264.742 316.718 268.823 314.677L285.339 306.419C289.412 304.379 294.371 306.032 296.42 310.113 298.46 314.194 296.807 319.153 292.726 321.194L276.21 329.452C275.024 330.044 273.766 330.323 272.524 330.323Z", fill: "#5D5360" })),
        React__default["default"].createElement("path", { d: "M182.319 363.355C177.318 363.355 173.378 367.786 174.071 372.739 179.197 409.356 213.924 437.677 256 437.677 298.077 437.677 332.803 409.356 337.929 372.739 338.622 367.786 334.682 363.355 329.681 363.355L182.319 363.355Z", fill: "#4B3F4E" }),
        React__default["default"].createElement("path", { d: "M208.417 424.038C221.874 432.601 238.266 437.677 256 437.677 273.734 437.677 290.126 432.601 303.583 424.038 297.617 403.372 278.52 388.129 256 388.129 233.48 388.129 214.383 403.371 208.417 424.038Z", fill: "#E6646E" }),
        React__default["default"].createElement("path", { d: "M181.677 272.516 181.677 272.516C167.995 272.516 156.903 261.424 156.903 247.742L156.903 239.484C156.903 225.802 167.995 214.71 181.677 214.71L181.677 214.71C195.359 214.71 206.451 225.802 206.451 239.484L206.451 247.742C206.452 261.424 195.36 272.516 181.677 272.516Z", fill: "#4B3F4E" }),
        React__default["default"].createElement("path", { d: "M181.677 214.71 181.677 243.613C181.677 250.454 187.223 256 194.064 256 200.905 256 206.451 250.454 206.451 243.613L206.451 239.484C206.452 225.801 195.36 214.71 181.677 214.71Z", fill: "#5D5360" }),
        React__default["default"].createElement("circle", { cx: "181.68", cy: "231.23", r: "8.258", fill: "#FFFFFF" }),
        React__default["default"].createElement("path", { d: "M330.323 272.516 330.323 272.516C316.641 272.516 305.549 261.424 305.549 247.742L305.549 239.484C305.549 225.802 316.641 214.71 330.323 214.71L330.323 214.71C344.005 214.71 355.097 225.802 355.097 239.484L355.097 247.742C355.097 261.424 344.005 272.516 330.323 272.516Z", fill: "#4B3F4E" }),
        React__default["default"].createElement("path", { d: "M330.323 214.71 330.323 243.613C330.323 250.454 335.869 256 342.71 256 349.551 256 355.097 250.454 355.097 243.613L355.097 239.484C355.097 225.801 344.005 214.71 330.323 214.71Z", fill: "#5D5360" }),
        React__default["default"].createElement("circle", { cx: "330.32", cy: "231.23", r: "8.258", fill: "#FFFFFF" }),
        React__default["default"].createElement("path", { d: "M256 437.677C258.792 437.677 261.538 437.508 264.258 437.262L264.258 421.161C264.258 416.601 260.564 412.903 256 412.903 251.436 412.903 247.742 416.601 247.742 421.161L247.742 437.262C250.462 437.508 253.208 437.677 256 437.677Z", fill: "#FF8087" }),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null),
        React__default["default"].createElement("g", null)));
};

var Icon$t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default["default"].createElement("path", { d: "M53.92 72.29h.1zm31.59-45.16L56.45 14.87a2.75 2.75 0 00-2.07 0 2.64 2.64 0 00-1.46 1.47l-2.49 5.86a6.07 6.07 0 01.57 1.19l2.34 7.55h11.27a5.45 5.45 0 015.45 5.44v34.3l16.88-40a2.69 2.69 0 00-1.43-3.55zM53.92 72.29h.1zM51.82 73h-.15.18zm2.1-.66h.1zM50.39 30.94H33.08a5.44 5.44 0 00-5.43 5.44v43.27A2.64 2.64 0 0126.27 78L13 35.18a2.75 2.75 0 011.81-3.42l30.11-9.34a2.87 2.87 0 01.81-.14 2.59 2.59 0 011.44.43 2.71 2.71 0 011 1.19 1.15 1.15 0 01.11.31l.57 1.79zM53.92 72.29h.1zm-2.1.66h-.15.18zM53.92 72.29h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18zm0 0h-.15.18zm2.1-.66h.1zm0 0h.1zm-2.1.66h-.15.18zm0 0h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm0 0h.1zm-2.1.66h-.15.18zm0 0h-.15.18zm2.1-.66h.1zm0 0h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18z" }),
        React__default["default"].createElement("path", { d: "M64.61 33.57H33.08a2.81 2.81 0 00-2.79 2.81v46.16a2.8 2.8 0 002.79 2.8h31.53a2.81 2.81 0 002.81-2.8V36.38a2.82 2.82 0 00-2.81-2.81zm-2.22 26.66a4.28 4.28 0 01-.37.57 4.84 4.84 0 01-.68.73 3.94 3.94 0 01-1.23.72v.11c.78 3.75-1.18 7.14-4.46 9.1a10.28 10.28 0 01-1.48.75h-.2a11.84 11.84 0 01-2.09.66h-.18a13.78 13.78 0 01-2.9.28c-4.3.09-8.93-2.4-10.62-6.13a6.67 6.67 0 01-.55-1.76 6.46 6.46 0 01-.12-1.4v-.2a7.09 7.09 0 01.22-1.6v.06a4.09 4.09 0 01-2-1.46 4.58 4.58 0 01-.8-1.7c-.41-1.75.24-3.67 1.69-4.23h.1a4 4 0 012.07.14 12.49 12.49 0 012.6-4.33 11.47 11.47 0 014.72-3.14 3.41 3.41 0 012.84-1.89c0 .22.29 1.19.34 1.43h.59l1.77-1.06v1.46a11.38 11.38 0 014.94 3.4A12.4 12.4 0 0159 55l.31-.15a2.34 2.34 0 011.42-.11c.14 0 .29.08.45.13 1.72.69 2.31 3.39 1.21 5.36zM51.85 73h-.18.15zM54 72.26h-.1z" }),
        React__default["default"].createElement("path", { d: "M52.57 53.41a4.66 4.66 0 00-2.35.62 2.84 2.84 0 01-2.74 0 4.7 4.7 0 00-2.37-.62 4.54 4.54 0 00-4.64 4.43 4.15 4.15 0 00.38 1.76 3.81 3.81 0 00.29.53 2.76 2.76 0 01.3 2.37 6.06 6.06 0 00-.38 1.78 5.08 5.08 0 00.12 1.1 5.62 5.62 0 00.67 1.82A7.32 7.32 0 0045 70.06l.86.36a9 9 0 003 .51 9.85 9.85 0 001.56-.13 9 9 0 002.1-.64 6.65 6.65 0 004.12-5.89 6.41 6.41 0 00-.38-1.78 2.83 2.83 0 01.3-2.37 3.39 3.39 0 00.29-.53 4.93 4.93 0 00.24-.64 4.42 4.42 0 00.15-1.1 4.55 4.55 0 00-4.67-4.44zM49.8 62l.89-.4a.72.72 0 01.19 0 .42.42 0 01.4.27.45.45 0 01-.22.59l-.88.41a.65.65 0 01-.19 0 .49.49 0 01-.42-.27.46.46 0 01.23-.6zm-3.39-.15a.46.46 0 01.41-.26.39.39 0 01.18 0l.9.41a.45.45 0 01.22.59.46.46 0 01-.6.22l-.89-.39a.46.46 0 01-.22-.62zm-1.57-1.86a1.3 1.3 0 01-1.33-1.26v-.42a1.34 1.34 0 012.68 0v.42a1.31 1.31 0 01-1.35 1.21zm7.76 6.31a4.59 4.59 0 01-7.51 0 .5.5 0 01.15-.68.49.49 0 01.68.14 3.59 3.59 0 005.85 0 .51.51 0 01.69-.14.5.5 0 01.14.63zm1.58-7.57a1.33 1.33 0 01-2.66 0v-.42a1.33 1.33 0 012.66 0z" })));
};

var Icon$p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 86.47 88.17" }, props),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("style", null, ".prefix__cls-1{fill:#333834}")),
        React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M49.49 11.41a7.65 7.65 0 00-2.78-.11 7 7 0 00-2.12.88 2.91 2.91 0 00.7-.79.07.07 0 00-.07-.09 8.77 8.77 0 00-3.35 1.62 7.72 7.72 0 00-2 2.12 7.17 7.17 0 00.24-.91.11.11 0 000-.1l-.16.15a6.55 6.55 0 00-.81 1.09c-.33.47-.64.95-1 1.44A12.64 12.64 0 0037 19.5a3.67 3.67 0 00-.18-1.1l-.33.64a11.28 11.28 0 00-.49 2.08v-.21a5.12 5.12 0 00-.45-2.15s0 .21.07.31 0 .18 0 .27a6.64 6.64 0 00-.64-1.88 7.35 7.35 0 00-2.26-2.8 3.65 3.65 0 00-.49-.66c-.08-.09-.17 0-.14.09a1.7 1.7 0 01.14.51A5.88 5.88 0 0030 13.06a7 7 0 00-2.77-.92c-.1 0-.05.13 0 .16l.34.19a3.77 3.77 0 00-.81-.31A8 8 0 0025.5 12a5.72 5.72 0 00-2.35.38 1.67 1.67 0 00-.53.08 4.28 4.28 0 00-1.89 1.14 5 5 0 00-1.25 2.63.25.25 0 000 .08c0 .16-.05.33-.07.49v.06a.45.45 0 010 .11c.17-.23.35-.49.55-.71a2.65 2.65 0 01.29-.29 1.39 1.39 0 01.41-.23 5.62 5.62 0 012.68 0 1.53 1.53 0 00-1.08.7s0 .11.05.1a7.4 7.4 0 012.39-.2 13.68 13.68 0 011.41.32 1.82 1.82 0 00-1.06.31v.12c.58.12 1.17.22 1.74.37a7.91 7.91 0 00-2.83.74 6.42 6.42 0 00-3.32 3.29 4.49 4.49 0 00-.46.83 7.36 7.36 0 00-.43 1.38 3.26 3.26 0 00.15 1.39 10.3 10.3 0 01.52-1.47 5 5 0 01.47-.76 2.19 2.19 0 00-.12.33c-.09.26-.31.68-.21.95a.07.07 0 00.12 0 4.56 4.56 0 01.81-1 6.2 6.2 0 01.81-.52c-.22.26-.5.62-.47.83.14 0 .29-.08.4-.14.32-.19.69-.29 1-.48a8.18 8.18 0 00.76-.48h.18a8.88 8.88 0 00-3 2.49A7.34 7.34 0 0019.58 30a5.82 5.82 0 000 1.1.09.09 0 000 .05 7.66 7.66 0 00.31 1.64A3.62 3.62 0 0020.6 34a5 5 0 00-.8.79 3.8 3.8 0 00-.63 1v-.15l.09-.17a3 3 0 00-.55 1.2v.15a6.56 6.56 0 000-1.33c0-.14-.07-.28-.1-.42a2 2 0 00-.25.62 7.29 7.29 0 00-.3-1.78c-.11-.33-.23-.65-.36-1a3.79 3.79 0 00-.33-.74l-.07-.11a3.47 3.47 0 000 .56 4.45 4.45 0 00-.9-1.5 5.19 5.19 0 00-1.73-1.39s-.06 0 0 0a1.67 1.67 0 00.29.56 3.89 3.89 0 00-1.11-.8 4.58 4.58 0 00-1.64-.3 4 4 0 00-2.92 1.16 3.29 3.29 0 00.43-.09 4.7 4.7 0 01.75 0 3.29 3.29 0 01.6.15l.11.05a3.2 3.2 0 00-.67.14 1.51 1.51 0 00-.7.36v.05a2.06 2.06 0 011.46.17 3.14 3.14 0 00-.79.09 2.6 2.6 0 00-1.22.73v.05h.08a4.9 4.9 0 01.54 0 4.81 4.81 0 012.33.52 2.44 2.44 0 00-.46.07 2.21 2.21 0 00-1.12.47v.09a3.35 3.35 0 012 .32l-.34.06a1.55 1.55 0 00-.75.3v.06a9.31 9.31 0 01.82.73 4.66 4.66 0 001.17.61h-.13s-.07.07 0 .09a4.2 4.2 0 001.33.87 2.77 2.77 0 00-.7-.07v.07a2.07 2.07 0 00.47.4 3.47 3.47 0 00-.85-.05 5.31 5.31 0 00-3 1.09 5.3 5.3 0 00-1.66 2.71h.06a3.37 3.37 0 01.42-.6c-.1.21-.18.43-.26.64a7.52 7.52 0 00-.34 1.38 2.45 2.45 0 000 1c0 .06.1 0 .11 0s.11-.33.17-.49c0 .11-.07.23-.09.34a5.36 5.36 0 00-.06.68 3.25 3.25 0 00.21 1.23h.08c.06-.23 0-.5.09-.74a5.27 5.27 0 01.25-.86 5.56 5.56 0 011.11-1.73l-.09.36c-.08.35-.11.7-.17 1.05a.58.58 0 00.08.43h.09a6.1 6.1 0 01.59-1.27 3.08 3.08 0 01.92-.84 1.28 1.28 0 00-.09.32s0 .06 0 0a10.08 10.08 0 011.44-1l-.09.24s0 .06.06 0a13.56 13.56 0 011.41-.6A5.52 5.52 0 0016 39.5l-.1.13s0 .09.05.07a6.13 6.13 0 01.66-.25 7 7 0 00-1 .76A1.39 1.39 0 0015 41c.21-.12.36-.27.57-.38-.15.12-.28.27-.42.4a2.2 2.2 0 00-.63 1.14h.05a2.48 2.48 0 01.26-.19 3.25 3.25 0 00-.59.9 3.76 3.76 0 00-.28.88 2.11 2.11 0 00-.07.83h.08a1.74 1.74 0 00.1-.19q.09-.18 0 0c0 .1-.06.19-.08.3a3.29 3.29 0 000 1 4.76 4.76 0 00.58 2h.07a2.75 2.75 0 01.17-1c.09-.29 0 0 0 .13a5.42 5.42 0 000 .57 2.61 2.61 0 00.1.69c0 .21.08.42.13.63a1.87 1.87 0 00.34.79.29.29 0 010-.09c.06-.44.38-.74.56-1.14s.12-.56.21-.82a5.31 5.31 0 010 1.49 3.88 3.88 0 00.42-.39 6.25 6.25 0 00.79-1.36 3.28 3.28 0 00.19-1 5.33 5.33 0 00.07.54 5.78 5.78 0 010 .72l.09-.09a6.26 6.26 0 00.63-1.87V45v-.18a6.57 6.57 0 01.47 1.18h.07c.15-.51.36-1 .46-1.55a4 4 0 000-1.34 5.26 5.26 0 01.17.58 3.31 3.31 0 01.09.62l-.06.22a.3.3 0 000-.1v.1-.15a3.94 3.94 0 00.16-.91v.11c0 .3 0 .61.07.91s0 .31 0 .46v.46c0 .61-.06 1.23 0 1.86v.24c0 .07 0 .15.05.23a2.15 2.15 0 00.14.45 3.42 3.42 0 00.21.43c.07.14.16.27.24.41l.26.38.07.09.15.19.28.36.15.18.17.17.64.67.16.16.15.18.29.35.29.36a1.95 1.95 0 001.23.71 1.82 1.82 0 01.79.41 4.6 4.6 0 01.54.73c.08.13.16.26.23.39a1.58 1.58 0 01.1.43c0 .31.08.62.13.92s.11.61.17.91l.08.46.11.45a6.13 6.13 0 01.6 1.9v.92a5.65 5.65 0 000 .92v.46a3.57 3.57 0 010 .46v.46a.37.37 0 000 .23h.07a.25.25 0 00.15 0 18.9 18.9 0 012-.35 4.78 4.78 0 011 0h1.45a2.12 2.12 0 000-.5c0-.33-.05-.67-.08-1-.07-.67-.14-1.33-.19-2 0-.32-.05-.66-.05-1v-4.96a13.09 13.09 0 01.28-1.95c.12-.65.26-1.3.41-2l.42-1.94c.13-.66.23-1.31.35-2l.34-2c.11-.66.24-1.3.36-2s.24-1.29.41-1.94A11.82 11.82 0 0034.6 41a7.54 7.54 0 00.55.8 8.25 8.25 0 01.52-2.44c.06.46-.06 1 0 1.43a7.29 7.29 0 01.49 2.06V43h.06a3 3 0 00.83-1.17 8.6 8.6 0 00.46-1A5.15 5.15 0 0038 39.8c.08-.3.14-.61.2-.93s.08-.7.12-.19a4.91 4.91 0 01-.1 1.71c0 .06.06.13.11.08A8.21 8.21 0 0040 37.4a5.64 5.64 0 00.43-1.61v-.51.06c0 .21.06.23.1.35s.09.09.13 0a3.58 3.58 0 00.19-1.39 5.63 5.63 0 00-.13-1.53 3 3 0 00-.09-.41v-.1a14.07 14.07 0 01.76 2.24h.09a2.63 2.63 0 00.17-.42c.06.2.12.39.17.59a3 3 0 01.18 1.12 7.92 7.92 0 01-.42 1.87c0 .05 0 .13.08.11a.78.78 0 00.44-.4c.23-.44.49-.84.7-1.29.07-.15.14-.31.2-.47a7.54 7.54 0 01-.24 2.8 6.69 6.69 0 01-.45 1.15c-.15.3-.4.58-.52.88v.12l.05-.05a4.53 4.53 0 001.25-1.18 5.07 5.07 0 00.51-.79 3.43 3.43 0 00.19-.44c-.07.22-.15.45-.23.67 0 0 0 .17.09.12a2.81 2.81 0 00.89-1.07 8.86 8.86 0 00.87-1.82 5.73 5.73 0 00.27-.92 4.17 4.17 0 010 1c0 .06.06.1.09 0a7.19 7.19 0 00.57-3.43v-.39-.3c0-.1 0 0 0 0a9.85 9.85 0 01.48 2.28c0 .06.08.13.15.08a.93.93 0 00.28-.67c0-.6.13-1.18.13-1.78v-.61a8.65 8.65 0 011.1 4.74c0 .41-.16.84-.14 1.24 0 0 .07.13.12.1v-.08a5.43 5.43 0 00.79-1.93 8.56 8.56 0 00.17-1.13 5.63 5.63 0 000-.58c0 .28.07.57.1.86 0 0 .1.17.16.09a3.58 3.58 0 00.49-1.57 11 11 0 000-2.37 9.6 9.6 0 00-.17-1.21 5.76 5.76 0 01.45 1.14.06.06 0 00.11 0 8.85 8.85 0 00-1.69-5 8.71 8.71 0 00-4.47-2.88 6.2 6.2 0 00-1.4-.27 3.78 3.78 0 00.92-.47.09.09 0 000-.15 5.42 5.42 0 00-1.16-.13 7.27 7.27 0 002.5-.91.11.11 0 000-.17l-.32-.07A7.49 7.49 0 0047 20c.55-.25 1-.7 1.6-.89a.07.07 0 000-.1 2.66 2.66 0 00-1.1-.76L47 18a5.59 5.59 0 013.36.21c.08 0 .1-.08.08-.13-.26-.54-1.15-.93-1.65-1.19a4.16 4.16 0 00-.79-.29 8.08 8.08 0 014 0l.87.26h.09s.05 0 0-.07a4.36 4.36 0 00-1.65-1.33 5.74 5.74 0 00-1.23-.45 3.37 3.37 0 012.42.27s.07 0 .06-.07a2.4 2.4 0 00-1-.85 6.86 6.86 0 00-1-.48h.2a4.43 4.43 0 011 0 6.27 6.27 0 011.22.24c.23.08.44.24.67.31v-.07a6.58 6.58 0 00-4.16-2.95zM20.23 40v.07zm2.4 4.13a6.51 6.51 0 01-.07-1.82v-.64a8.53 8.53 0 011 .8c.05.09.1.22.19.27a2.17 2.17 0 00.13-.5A.66.66 0 0024 42a4 4 0 00.23.34 3.37 3.37 0 00.66.7 4.06 4.06 0 00.19.59c.09.24.24.46.32.7s.06.21.15.25.12-.42.13-.65a4.71 4.71 0 01.19.64 3 3 0 010 .89h.07c.18-.09.25-.42.32-.59a1 1 0 00.08-.23 3.1 3.1 0 01-.09.61 6.78 6.78 0 01-.38 1 2.31 2.31 0 00.71-.68 5.7 5.7 0 00.4-.91 3.55 3.55 0 00.12-.65 4.37 4.37 0 00-.28-3.21 5.31 5.31 0 00-1.44-1.8h.1a4.68 4.68 0 00.38.39c.17.15.36.26.53.41s.12.14.21.14a1 1 0 00-.16-.55 3.87 3.87 0 01.4.41 3.16 3.16 0 01.34.69h.07c.07 0 0-.42 0-.59v-.2a3 3 0 01.17.5 7.37 7.37 0 01.11.93 1.86 1.86 0 00.27-.79 4 4 0 00-.06-.85 3.5 3.5 0 00-.17-.55 3.83 3.83 0 00-1.49-2.35 4.7 4.7 0 00-1.59-.81h1.11v-.06a1 1 0 00-.57-.32 6.17 6.17 0 01.86 0 1.76 1.76 0 01.41.07.19.19 0 010 .07 3.46 3.46 0 00.72 1.35c.06.05.13-.07.12-.12L27.1 36a4.35 4.35 0 00.1.52 7 7 0 00.37 1A5 5 0 0028.65 39v.06s.09-.06.09-.11c-.07-.35-.27-.71-.37-1.06a6.62 6.62 0 01-.22-1.32 4.79 4.79 0 010-1.07l.12.09a.79.79 0 01.22.18 2.39 2.39 0 01.13.21 5.4 5.4 0 01.23.49v-.42a3.06 3.06 0 00-.38-1.7 1.43 1.43 0 00-.14-.2l.15-.61c0 .18.07.36.11.54.12.53.31 1 .46 1.53a.83.83 0 00.38.53c.07 0 .12 0 .11-.1a9.13 9.13 0 010-2.09 4.45 4.45 0 01.69-1.72 2.18 2.18 0 00.08.49.06.06 0 00.1 0l.52-1 .27-.46.11-.18a5.9 5.9 0 01.42-.6 1.36 1.36 0 000 .2c0 .06 0 .12-.05.18a8 8 0 00-.23 2.34 2.21 2.21 0 00-.05.25v-.16.18c0 .06 0 0 0 0v-.38a5.22 5.22 0 01.37-1c.14-.26.3-.6.49-.89a6.37 6.37 0 00-.26 2.27 26 26 0 00.17 2.64c0 .19 0 .39-.08.58-.1.61-.25 1.2-.4 1.8l-.46 1.79a33.94 33.94 0 00-.78 3.63 18.54 18.54 0 01-.68 3.61 6.78 6.78 0 01-.35.84 2.59 2.59 0 01-.5.75 1.91 1.91 0 01-.75.49.94.94 0 01-.44 0 1.85 1.85 0 01-.42-.17c-.26-.15-.51-.33-.79-.48l-.82-.43a9 9 0 01-1.48-1.12l-.34-.31-.15-.17-.12-.19a8.09 8.09 0 01-.34-.86 13.73 13.73 0 01-.64-1.72zm10.12-8.69h-.24c.14-.39.3-.77.47-1.16.09-.22-.07.32-.06.3 0 .27-.1.54-.14.81zm2.63-10.92h-.09a1.27 1.27 0 00.12-.23 2 2 0 01-.03.25zm-9.53 8.22h-.09c0-.1 0-.21.07-.32 0 .12.01.23.02.34zm-7.23 6.06h-.06a1 1 0 010-.17.93.93 0 00.06.19zm1.23 1.31h-.16c-.05-.12-.1-.25-.16-.37a2 2 0 01.32.39zm.64-7.88a5.17 5.17 0 01.08-1v.41c.06.31.05.86.31 1.08a.07.07 0 00.12 0 5.29 5.29 0 01.31-1.46 6.1 6.1 0 01.55-1 2 2 0 000 1.1c.17 0 .25-.23.34-.36.22-.36.55-.66.79-1a8.08 8.08 0 00.52-.9 5 5 0 001.33-.89 4.69 4.69 0 00.52-.47 1.18 1.18 0 00-.08.39 3.62 3.62 0 000 .87.07.07 0 00.08.05c.16 0 .29-.24.41-.38l.41-.22c-.06.12-.12.23-.17.35a8.19 8.19 0 00-.62 3.94h-.18a2.09 2.09 0 00-.51.08l.22-.07s.07-.08 0-.09a4 4 0 00-1.75.17 3.82 3.82 0 00-1.45.62 1.28 1.28 0 01.16-.27c0-.06 0-.11-.07-.07a2.58 2.58 0 00-.38.32 3.32 3.32 0 00-.79.46 8.87 8.87 0 01-.15-1.64z" }),
        React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M29.82 61.86a41 41 0 017.33-.71c7.43 0 14.58 3 22 3.45a22 22 0 005.37-.24C66.3 64 68 63.4 69.77 63c1.36-.32 2.75-.5 4.14-.69a3.18 3.18 0 012 .15 3.13 3.13 0 011.24 2.12c.4 1.53.76 3.06 1.07 4.61a4.91 4.91 0 010 2.74 4.12 4.12 0 01-2 2 18.11 18.11 0 01-6.42 1.64c-8.66.93-17.41-.17-26.1.36-7.38.45-14.75 2.07-22.11 1.36A12 12 0 0116.75 76 5.21 5.21 0 0114 72.09a3.64 3.64 0 011.59-3.3c.38-.25.83-.39 1.2-.67s.9-1 1.37-1.4a18.1 18.1 0 017.14-3.81 37.32 37.32 0 014.52-1.05z" }),
        React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M49.62 63.27a1 1 0 01.21-.46c.63-.78 1.25-1.56 1.84-2.36A23.71 23.71 0 0054 55.29s2.48-1.74 2.14-1.56a2.2 2.2 0 01.61-.17 1 1 0 001-1.22l-.18-.72a1 1 0 01.71-1.22l2.85-.73a1 1 0 00.85-.8c.26-.83 2.44-.51 3.7-.35a4.68 4.68 0 01.84.07.94.94 0 01.35.2c.44.4 1.65.07 2.23 0 1-.2 1.92 1.31 1.92 1.31a7 7 0 001.47 3.6 8.55 8.55 0 011 1.59 8.67 8.67 0 01.39 3.22 15.4 15.4 0 00.75 4.36c.06.18 0 .5-.19.39a24.13 24.13 0 01-15.9 6A44 44 0 0150.18 68a1.65 1.65 0 01-.71-.29 1.59 1.59 0 01-.33-1.39c.08-1.03.32-2.06.48-3.05z" }),
        React__default["default"].createElement("path", { d: "M37.15 28.23c1 5 15.58 21.41 26.47 21.4", fill: "none", stroke: "#333834", strokeMiterlimit: 10 }),
        React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M50.77 45.27l-.13.13v.06l.26.6a.48.48 0 00.2 0 .73.73 0 00.09-.09c.07-.15-.42-.7-.42-.7z" }),
        React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M51.1 46l-.46.44c-.7.66-1.84 1.72-2 1.93a4.69 4.69 0 01-1.33.32l-2.09.17a3.09 3.09 0 00-.41.13 7.33 7.33 0 00-1.06 1 2.66 2.66 0 00-.34.66 10.82 10.82 0 00-.36 1.2 2.3 2.3 0 00.28-.06l.29-.11c.94-.4 1.81-1.28 3.17-1.58.76-.18 1.76.18 1.68.38s-1.19-.21-1.88-.11c-.85.11-2.26 1.23-2.87 1.46l-.25.1L43 52c-.12.43-.43 1.54-.57 2.16 0 .17-.08.31-.1.4s0 .09-.08.17v.12c-.27.54-.64 1.4-.85 1.77.13.22.39.7.62 1.14.25.48.44.9.36.9s-.21-.17-.26-.27c.06.16.18.49.11.49a.74.74 0 01-.19-.22.38.38 0 010 .17c0 .07 0 .1-.08.09-.25 0-.74-1.35-.85-1.28s.24.93 0 .81-.18-.82-.17-1.34a1.83 1.83 0 01.07-.47v-.11l.42-2.13a6.41 6.41 0 000-1.06c0-.31-.54-.91-.84-.59-.1.11-.57.67-1.08 1.23a16.31 16.31 0 01-1.22 1.3c-.18.41-1.52 1.07-1.52.82s.72-.17.66-.27-1.42.3-1.41.19a.11.11 0 01.1-.1C36 56 36 56 36 55.89s.06-.09.17-.13c-.07 0-.12 0-.12-.08s1.49-.38 1.58-.41a3.24 3.24 0 00.37-.19 23.87 23.87 0 001.56-2.87c.1-.3.76-1.84.76-1.84a11 11 0 01.32-1.53 10 10 0 01.38-1 1.38 1.38 0 01.21-.54s.4-1.54.49-2a1.57 1.57 0 000-.38c0-.28-.07-1.8-.07-2.46a.71.71 0 01.19-.53c.39-.45 1.31-1.53 1.9-2.38.14-.19.26-.39.35-.54.83-1.5.56-.06.56-.06l-.09.62s-.13.18-.35.45v.06a28.61 28.61 0 00-1.73 2.38 11.06 11.06 0 00.23 2 2.24 2.24 0 00.06.48.24.24 0 010 .09c0 .12.06.26.1.39a1.45 1.45 0 01.39-.79l.08-.06a.61.61 0 01.14-.1.67.67 0 010-.41c0-.42.5-.73.81-.58a.35.35 0 01.24.26l.17-.08h.14a2.06 2.06 0 011.45.13.56.56 0 01.53.09l-.11.15.33.1-.17.17a2.07 2.07 0 01.13 1.52v.13l-.08.18a.41.41 0 01.27.25c.13.32-.19.76-.61.8a.76.76 0 01-.42-.06 1.63 1.63 0 01-.17.22l-.27.2a1.28 1.28 0 01-.22.09v.06l.08.09c.26.25.89.17 1.62.11a1.79 1.79 0 001.11-.36 12.77 12.77 0 001.61-1.43l.21-.22c.19-.2.36-.39.46-.51v-.05.06l.26.6a.48.48 0 00.25.02z" }),
        React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M51.65 45.29l.54-.08a.35.35 0 01-.16.33 2 2 0 01-.93.48.48.48 0 01-.2 0l-.26-.6v-.06a5.11 5.11 0 01.23-.76c.08-.18.19-.39.39-.42a3.82 3.82 0 01-.14.75 3.3 3.3 0 01.34-.71c.1-.16.22-.34.41-.36a1.88 1.88 0 01-.29.94c.33-.19.41-.63.7-.47-.03.53-.15.83-.63.96z" })));
};

var Icon$o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default["default"].createElement("path", { d: "M31.37,85.36a8.66,8.66,0,0,1,.72-1.1h0a9.56,9.56,0,0,1,3.42-2.66,12,12,0,0,1-.17-2V73.83a21.21,21.21,0,0,1-3.78-5.07,20.51,20.51,0,0,1-1.85-4.94l-1.55-1.09a7.08,7.08,0,0,1-2.67-7.81,5.5,5.5,0,0,1,.25-.63,4.71,4.71,0,0,1,.21-.52l.29-.58h0L27.8,50a18.23,18.23,0,0,1-2.45-7.15,16,16,0,0,1-.13-2.08,18,18,0,0,1,.17-2.44,8.7,8.7,0,0,1-.8-.68c-.31-.29-.61-.59-.9-.92-.31.36-.6.71-.88,1.07h0a69.76,69.76,0,0,0-13,2.66,2.63,2.63,0,0,0-1.7,3.21,2.45,2.45,0,0,0,3,1.8,65.18,65.18,0,0,1,8.07-1.91L19,44a33.91,33.91,0,0,0-3.12,10.55h0c-2,.41-4,.92-6.11,1.56a2.63,2.63,0,0,0-1.7,3.22,2.44,2.44,0,0,0,3,1.79c1.55-.47,3-.86,4.51-1.2h0a34.57,34.57,0,0,0,1.73,9.91h0a73,73,0,0,0-7.58,1.86,2.63,2.63,0,0,0-1.7,3.22,2.45,2.45,0,0,0,3,1.8,66.11,66.11,0,0,1,8.31-2h0a34.38,34.38,0,0,0,7.2,9.48h0A66.58,66.58,0,0,0,9.79,87.15a2.63,2.63,0,0,0-1.7,3.22,2.45,2.45,0,0,0,3,1.8,61.55,61.55,0,0,1,15.29-2.69,4.41,4.41,0,0,1,1.15-2.76,4.28,4.28,0,0,1,1-.82,4.33,4.33,0,0,1,2.17-.58A4,4,0,0,1,31.37,85.36Z" }),
        React__default["default"].createElement("path", { d: "M71.18,90.43a1.78,1.78,0,0,0-.31-2,1.77,1.77,0,0,0-1.31-.57,1.72,1.72,0,0,0-1.2.47c-.14.13-.3.27-.45.39l-.16-.32-.35-.76c-1.06-2.28-4.11-3.73-5.8-4.38a8.78,8.78,0,0,0,.81-3.7V66.53l3.77-2.72h0l4.46-3.19.15-.12a4.35,4.35,0,0,0,1.38-1.81h0a4.49,4.49,0,0,0-.13-3.77L70.7,52.17c-.21.28-.44.55-.68.82a20.76,20.76,0,0,1-1.92,1.95l.79,1.58a1,1,0,0,1-.29,1.19l-1.29.92h0l-4.89,3.51V58.72A28,28,0,0,1,50.93,61.5h0c-.31,0-.61,0-.92,0h-.27a29.82,29.82,0,0,1-3.3-.21,28.15,28.15,0,0,1-6.23-1.47c-.65-.24-1.28-.49-1.88-.77h0l-.36-.16h0V59h0v3.13l-5.1-3.66-1.08-.77a.94.94,0,0,1-.3-1.19l.68-1.35h0a20.38,20.38,0,0,1-2-2L30,53c-.17-.19-.33-.38-.49-.58l-.34.68-.9,1.8a4,4,0,0,0-.32.85A4.39,4.39,0,0,0,28,58.36h0a4.39,4.39,0,0,0,1.17,1.84,4.11,4.11,0,0,0,.5.42l8.25,5.91v2.81h0V74.6h0v5a9,9,0,0,0,.74,3.57,10.25,10.25,0,0,0-3.08,1.36,5.61,5.61,0,0,0-2,2.27c-.39.84-.71,1.43-.95,1.85a1.4,1.4,0,0,0-.1.16c-.17-.14-.35-.29-.51-.44a1.79,1.79,0,0,0-2.52.1,1.76,1.76,0,0,0-.45.93h0A1.75,1.75,0,0,0,29.56,91c2,1.87,2.77,1.87,3.18,1.87.91,0,1.81-.49,3-2.57a5,5,0,0,0,.26-.46h0c.25-.45.5-1,.77-1.53.45-1,2.49-1.69,3.73-1.87A1.43,1.43,0,0,0,41,86.3a8.73,8.73,0,0,0,5.74,2.14h6.9a8.24,8.24,0,0,0,1.94-.22h0a8.66,8.66,0,0,0,3.78-1.92l.2.08c1.56.49,4.11,1.73,4.61,2.8l.14.3h0c.1.23.21.45.31.66.81,1.67,1.51,2.73,3,2.73.41,0,1.16,0,3.18-1.87A1.66,1.66,0,0,0,71.18,90.43ZM52.91,85.28H47.42a5.83,5.83,0,0,1-6-5.61V66.82a2.33,2.33,0,0,1,3.09-2.08,20.15,20.15,0,0,0,4.66.86,18.76,18.76,0,0,0,6.71-.81,2.31,2.31,0,0,1,3.06,2.08v6.45h0v5.27h0v1.08A5.82,5.82,0,0,1,52.91,85.28Z" }),
        React__default["default"].createElement("path", { d: "M88.91,87.14a70.12,70.12,0,0,1-15,2.54v.19a4.3,4.3,0,0,1-1.4,3A11.84,11.84,0,0,1,69.66,95a72.68,72.68,0,0,0,20.5-2.81A2.63,2.63,0,0,0,91.92,89,2.45,2.45,0,0,0,88.91,87.14Z" }),
        React__default["default"].createElement("path", { d: "M91.92,42.35a2.46,2.46,0,0,0-3-1.85,76.16,76.16,0,0,1-8.75,1.89h0a34.1,34.1,0,0,0-3.84-5.63,12.9,12.9,0,0,1-1.72,1.61,18.08,18.08,0,0,1,.17,2.44A17.48,17.48,0,0,1,74.63,43h0A16.66,16.66,0,0,1,74,46a18.3,18.3,0,0,1-.89,2.33,13.61,13.61,0,0,1-.73,1.42l2,4a7.13,7.13,0,0,1-2.23,9l-1.7,1.21h-.18c0,.05,0,.11,0,.16A20.85,20.85,0,0,1,65,73.49v.57h0v5.25h0v.3a11.55,11.55,0,0,1-.22,2.29A12.28,12.28,0,0,1,69,85.35a4.8,4.8,0,0,1,.55,0,4.35,4.35,0,0,1,2,.48,34.32,34.32,0,0,0,6.33-6.69h0A78,78,0,0,0,90.16,76.7a2.63,2.63,0,0,0,1.76-3.18,2.47,2.47,0,0,0-3-1.87,75.39,75.39,0,0,1-7.7,1.72h0c.39-.81.73-1.65,1.05-2.49q.3-.85.57-1.71c.17-.58.34-1.16.48-1.75s.27-1.08.38-1.63a31.21,31.21,0,0,0,.49-3.24c1.91-.38,3.91-.86,6-1.43a2.64,2.64,0,0,0,1.76-3.18,2.46,2.46,0,0,0-3-1.87c-1.57.44-3.11.81-4.59,1.13h0a33.87,33.87,0,0,0-2-9.9c2.47-.43,5.07-1,7.8-1.77A2.63,2.63,0,0,0,91.92,42.35Z" }),
        React__default["default"].createElement("path", { d: "M11.13,30A66.84,66.84,0,0,1,21,27.85a10.34,10.34,0,0,1,.3-1.53,8.84,8.84,0,0,1,2.27-4A68.71,68.71,0,0,0,9.79,25a2.64,2.64,0,0,0-1.7,3.23A2.45,2.45,0,0,0,11.13,30Z" }),
        React__default["default"].createElement("path", { d: "M76.35,27.36A5.79,5.79,0,0,0,73,23a5.17,5.17,0,0,0-1.9-.38,4.32,4.32,0,0,0-1.58.29c-.22-.6-.46-1.2-.71-1.79s-.49-1-.76-1.5a24.9,24.9,0,0,0-5.36-6.71,21.54,21.54,0,0,0-7.29-4.26l-.11-2.86L51.91,7.89l-.42,0-.76,0-.5-2.16L50.08,5h0a3.54,3.54,0,0,0-.46,0A5.78,5.78,0,0,0,46,6.76a7.49,7.49,0,0,0-1.41,1.92,23.36,23.36,0,0,0-12.64,11c-.27.5-.52,1-.76,1.5q-.21.47-.39.93l-.08.21c-.09.21-.17.42-.25.64a4.44,4.44,0,0,0-1.57-.28A5.17,5.17,0,0,0,27,23a5.56,5.56,0,0,0-3.17,3.74c-.07.25-.14.5-.19.76a8.84,8.84,0,0,0,1.63,7.07l.19.23a8.23,8.23,0,0,0,2.84,2.29c0,.1-.05.19-.08.3a.53.53,0,0,1,0,.12.29.29,0,0,1,0,.09,15.26,15.26,0,0,0-.34,3.18,14.38,14.38,0,0,0,.13,2,15.1,15.1,0,0,0,1.3,4.42A13.55,13.55,0,0,0,30,48.61a14,14,0,0,0,.8,1.26l.25.34a19.54,19.54,0,0,0,2.29,2.55c.21.19.43.39.65.57a3.47,3.47,0,0,0,.37.3,18.91,18.91,0,0,0,2.29,1.63c.42.27.85.51,1.3.75a22.94,22.94,0,0,0,3.15,1.39,25.66,25.66,0,0,0,5.67,1.34,27,27,0,0,0,3,.19H50a26.36,26.36,0,0,0,8.25-1.3h0a23.36,23.36,0,0,0,4.14-1.81,13.73,13.73,0,0,0,1.29-.77,17.21,17.21,0,0,0,2.21-1.62c.34-.28.67-.58,1-.89A18.17,18.17,0,0,0,69,50.21c.15-.2.29-.41.43-.62a13.26,13.26,0,0,0,.77-1.23h.06l0-.07a13.81,13.81,0,0,0,.72-1.44A14.22,14.22,0,0,0,71.59,45,13.84,13.84,0,0,0,72,43.11a14.69,14.69,0,0,0-.17-5.48c0-.07,0-.14,0-.21s0-.2-.07-.3a8.32,8.32,0,0,0,2.84-2.29l.18-.23a8.06,8.06,0,0,0,1.13-1.94,9.11,9.11,0,0,0,.43-1.31A8.82,8.82,0,0,0,76.35,27.36Zm-7.41,9A10.42,10.42,0,0,1,66.5,39a9.24,9.24,0,0,1-1.71,1.1A9.42,9.42,0,0,1,65,41.19a6.86,6.86,0,0,1,.1,1.05c0,.12,0,.23,0,.35s0,.21,0,.32a10.87,10.87,0,0,1-.18,1.41,12.11,12.11,0,0,1-.34,1.35A11.8,11.8,0,0,1,64.11,47c-.17.36-.35.71-.55,1s-.28.48-.44.72-.46.65-.71,1A16,16,0,0,1,50,55.23a16.12,16.12,0,0,1-12.07-5.14c-.16-.19-.33-.38-.49-.58L37,48.94c-.19-.26-.36-.53-.52-.8s-.32-.55-.46-.83a11.48,11.48,0,0,1-1-3,10.33,10.33,0,0,1-.17-1.26c0-.16,0-.32,0-.48v-.18a1,1,0,0,1,0-.17A6.85,6.85,0,0,1,35,41c.06-.3.13-.62.22-.94a9.7,9.7,0,0,1-1.84-1.2A10,10,0,0,1,32,37.61a10.29,10.29,0,0,1-2.53-6.35c0-.15,0-.31,0-.46v-1a5.23,5.23,0,0,1,.63-2.49A5.35,5.35,0,0,1,32,25.35a5.11,5.11,0,0,1,2.66-.74h.78a8.4,8.4,0,0,1,2.1-2,9.22,9.22,0,0,1,5.21-1.59,9.38,9.38,0,0,1,4.6,1.2,5.35,5.35,0,0,0,5.31,0,9.36,9.36,0,0,1,4.61-1.2,9.16,9.16,0,0,1,7.31,3.56,8.23,8.23,0,0,1,.66,1,8.08,8.08,0,0,1,.49,1,2.31,2.31,0,0,0-.37,0H54.89A3.17,3.17,0,0,0,52,28.56c0,.07,0,.14-.07.21a2.38,2.38,0,0,0-.11.38,2.73,2.73,0,0,0-.07.64v1a7.56,7.56,0,0,0,0,.83H48.24a7.56,7.56,0,0,0,0-.83v-1a3.18,3.18,0,0,0-3.16-3.18H34.65a2.22,2.22,0,0,0-.37,0,3,3,0,0,0-1.7.76,3.22,3.22,0,0,0-1.09,2.39v1a8.37,8.37,0,0,0,3.84,7.06h0l.42.26a6.84,6.84,0,0,0,.86.42,7.34,7.34,0,0,0,1.3.43,8,8,0,0,0,2,.24,8.24,8.24,0,0,0,2.4-.35h0a8.41,8.41,0,0,0,5.28-4.71h4.83a8.41,8.41,0,0,0,7.71,5.06,8.28,8.28,0,0,0,2.29-.32,7.64,7.64,0,0,0,1.29-.49l.53-.27a7.57,7.57,0,0,0,.76-.49,8.39,8.39,0,0,0,3.28-4.81c.34,0,.68,0,1,0s.68,0,1,0A10.57,10.57,0,0,1,68.94,36.31Z" }),
        React__default["default"].createElement("path", { d: "M90.16,30.05a2.63,2.63,0,0,0,1.76-3.18,2.46,2.46,0,0,0-3-1.86,73.53,73.53,0,0,1-10,2.07,11.53,11.53,0,0,1-.23,5.29A79.48,79.48,0,0,0,90.16,30.05Z" }),
        React__default["default"].createElement("path", { d: "M59.76,89.21A11.34,11.34,0,0,1,53.61,91H46.72a11.35,11.35,0,0,1-6.33-1.93,5.53,5.53,0,0,0-1.39.55l-.27.55c-.18.39-.36.75-.56,1.1a33.42,33.42,0,0,0,4.24,1.26,34.1,34.1,0,0,0,11.52.62h0a33.36,33.36,0,0,0,3.75-.64l1.36-.34.51-.15.13,0,.31-.1.19-.06h0l.52-.17.2-.06L62,91.23l.12,0,.09,0c-.12-.24-.23-.49-.34-.73A9.22,9.22,0,0,0,59.76,89.21Z" }),
        React__default["default"].createElement("path", { d: "M50.91,38a1,1,0,0,0-.13.18,1,1,0,0,0-.06.16s0,0,0,0a.71.71,0,0,0,0,.45.74.74,0,0,0,1,.36l1.43-.66.25-.11.18-.12a.66.66,0,0,0,.17-.23.89.89,0,0,0,.07-.28.7.7,0,0,0-.06-.35.74.74,0,0,0-.66-.42h0a.63.63,0,0,0-.27.06l-.7.31-1,.45A.8.8,0,0,0,50.91,38Z" }),
        React__default["default"].createElement("path", { d: "M44.55,48.16A10.14,10.14,0,0,0,50,49.72a10,10,0,0,0,5.45-1.57.85.85,0,0,0,.38-.53A.86.86,0,0,0,55.7,47a.31.31,0,0,0-.09-.11.81.81,0,0,0-1-.19l-.09,0a8.65,8.65,0,0,1-9,0,.86.86,0,0,0-1.19.26,1,1,0,0,0-.12.32A.87.87,0,0,0,44.55,48.16Z" }),
        React__default["default"].createElement("path", { d: "M46.83,38.54l1.44.66a.74.74,0,0,0,1-.36h0a.73.73,0,0,0-.15-.82.8.8,0,0,0-.21-.15l-1-.45-.71-.31a.66.66,0,0,0-.27-.06h0a.73.73,0,0,0-.65.42h0a.7.7,0,0,0-.06.35.66.66,0,0,0,.25.51.91.91,0,0,0,.16.11Z" }),
        React__default["default"].createElement("path", { d: "M51.87,35.32h0l0,0h0A0,0,0,0,1,51.87,35.32Z" })));
};

var Icon$n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default["default"].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default["default"].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default["default"].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default["default"].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default["default"].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default["default"].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default["default"].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React__default["default"].createElement("path", { d: "M77.46,27.25l-5.68-1.53L66.1,24.2a1.05,1.05,0,0,1-.48-1.76l2.69-2.69a34.51,34.51,0,0,0-41.52,3.73,2,2,0,1,1-2.7-3,38.47,38.47,0,0,1,47.1-3.65l2.75-2.75a1.05,1.05,0,0,1,1.76.48l1.52,5.68L78.75,26A1.05,1.05,0,0,1,77.46,27.25Z" }),
        React__default["default"].createElement("path", { d: "M24,33A17,17,0,1,0,41,50,17,17,0,0,0,24,33ZM34.16,46.57a11.86,11.86,0,0,1-1.48,4.77,12,12,0,0,1-13.29,5.71,12.17,12.17,0,0,1-4.45-2.17A4.32,4.32,0,0,1,14,53.65a1.66,1.66,0,0,1-.13-1h0a.36.36,0,0,1,0-.11l.06-.1a.93.93,0,0,1,.18-.16,1.38,1.38,0,0,1,.39-.14,3.61,3.61,0,0,1,.5-.06h.17a21.74,21.74,0,0,1,3,.4l.46.07h0l.5.05.15,0H21.2c.16,0,.33,0,.49-.06h.21l.59-.1.59-.14.09,0,.08,0h0l.27-.08.17,0,0,0h.05l.24-.08.17-.06h0l.06,0,.24-.09.23-.09.27-.12.22-.1.22-.11h0l.12-.07c.12,0,.23-.12.35-.18l.17-.1.27-.16.1-.06.1-.07.25-.16.21-.14.23-.17.12-.09.09-.07h0l.2-.17.22-.18.16-.14.23-.21,0,0,.21-.21.13-.13.16-.17L29,48.7l.08-.09.18-.2,0,0a2.09,2.09,0,0,0,.14-.17l.12-.14.11-.15.16-.21a.83.83,0,0,1,.08-.12c.06-.09.13-.18.19-.28a1.27,1.27,0,0,0,.13-.19l.18-.29.11-.2.17-.3c0-.07.07-.13.1-.19s.12-.23.17-.35l.06-.13,0-.06.1-.22.12-.29.12-.33,0-.08,0-.05,0,0,0,0a1.48,1.48,0,0,1,.73-.52h0L32.46,43a.45.45,0,0,1,.5-.37l.15,0,.15,0a.45.45,0,0,1,.37.5l-.16,1a1.37,1.37,0,0,1,.52.68A4.35,4.35,0,0,1,34.16,46.57Z" }),
        React__default["default"].createElement("path", { d: "M76,33A17,17,0,1,0,93,50,17,17,0,0,0,76,33Zm1.61,23.33a.49.49,0,0,0-.34.46V58.3a.49.49,0,0,1-.49.49H74.9a.49.49,0,0,1-.49-.49V57A.5.5,0,0,0,74,56.5a12.09,12.09,0,0,1-2.66-1,.49.49,0,0,1-.22-.6l.7-2a.48.48,0,0,1,.67-.28,10.4,10.4,0,0,0,3,1.07c1.06,0,1.77-.53,1.77-1.33,0-.63-.33-1.18-1.92-1.82-2-.77-4-1.89-4-4.37a4,4,0,0,1,2.86-3.9.5.5,0,0,0,.34-.47V40.38a.49.49,0,0,1,.49-.49h1.83a.5.5,0,0,1,.5.49v1.16a.49.49,0,0,0,.41.49,5,5,0,0,1,2.2.85.49.49,0,0,1,.18.58l-.73,1.95a.49.49,0,0,1-.68.26,6.91,6.91,0,0,0-2.58-.8c-1.39,0-1.5.82-1.5,1.07,0,.57.32,1,2.17,1.72s3.75,1.88,3.75,4.57A4.31,4.31,0,0,1,77.59,56.33Z" }),
        React__default["default"].createElement("path", { d: "M75.91,79.48a38.47,38.47,0,0,1-47.1,3.65l-2.75,2.75a1.05,1.05,0,0,1-1.76-.48l-1.52-5.68L21.25,74a1.05,1.05,0,0,1,1.29-1.29l5.68,1.53L33.9,75.8a1.05,1.05,0,0,1,.48,1.76l-2.69,2.69a34.51,34.51,0,0,0,41.52-3.73,2,2,0,0,1,2.7,3Z" })));
};

var Icon$j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 220 240" }, props),
        React__default["default"].createElement("path", { d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" }),
        React__default["default"].createElement("path", { d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" })));
};

var Icon$h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 28 28" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 2.02137C7.38438 2.02137 2.02137 7.38438 2.02137 14C2.02137 20.6156 7.38438 25.9786 14 25.9786C20.6156 25.9786 25.9786 20.6156 25.9786 14C25.9786 7.38438 20.6156 2.02137 14 2.02137ZM0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 2.87699C7.85693 2.87699 2.87699 7.85693 2.87699 14C2.87699 20.1431 7.85693 25.123 14 25.123C20.1431 25.123 25.123 20.1431 25.123 14C25.123 7.85693 20.1431 2.87699 14 2.87699ZM1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14C27 21.1797 21.1797 27 14 27C6.8203 27 1 21.1797 1 14Z" }),
        React__default["default"].createElement("path", { d: "M7.18416 16.3572C7.55491 16.8554 8.03842 17.2585 8.59507 17.5337C10.2707 18.4003 12.1934 18.6643 14.0406 18.2816C15.6332 17.9416 17.0864 17.13 18.2113 15.9525C19.3361 14.775 20.0804 13.2862 20.3473 11.6798C20.4888 10.8308 20.6869 9.48863 19.846 8.91861C19.846 8.91861 19.8986 8.53859 19.943 8.30411C19.9875 8.06963 19.7652 8.06559 19.5388 8.04942C19.3124 8.03325 19.1022 8.04942 19.0779 8.24347C19.0639 8.45481 19.0639 8.66684 19.0779 8.87818C18.6332 9.01563 18.4553 9.5331 18.3017 9.96972C17.9411 10.979 17.3842 11.9069 16.6633 12.7C15.9424 13.493 15.0717 14.1356 14.1013 14.5906C13.1224 15.0455 12.0595 15.292 10.9803 15.3142C10.2728 15.3142 9.56533 15.2414 8.86189 15.197C8.38889 15.1687 7.45502 15.007 7.14777 15.5042C7.07364 15.6356 7.03776 15.7852 7.04419 15.9359C7.05062 16.0867 7.0991 16.2326 7.18416 16.3572Z" }),
        React__default["default"].createElement("path", { d: "M9.49223 8.68774L10.1512 10.4302L11.8977 11.0932L10.1512 11.7562L9.49223 13.4986L8.82923 11.7562L7.08276 11.0932L8.82923 10.4302L9.49223 8.68774Z" }),
        React__default["default"].createElement("path", { d: "M21.3253 14.1858L21.9884 15.9282L23.7308 16.5912L21.9884 17.2542L21.3253 18.9966L20.6623 17.2542L18.9199 16.5912L20.6623 15.9282L21.3253 14.1858Z" }),
        React__default["default"].createElement("path", { d: "M16.1143 7.3418L16.4822 8.3161L17.4565 8.68803L16.4822 9.05996L16.1143 10.0343L15.7424 9.05996L14.7681 8.68803L15.7424 8.3161L16.1143 7.3418Z" }),
        React__default["default"].createElement("path", { d: "M12.2215 20.2017L12.5934 21.176L13.5677 21.5479L12.5934 21.9198L12.2215 22.8941L11.8495 21.9198L10.8752 21.5479L11.8495 21.176L12.2215 20.2017Z" })));
};

var Icon$g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 28.54 33.23" }, props),
        React__default["default"].createElement("path", { d: "M7.33 10.15H4.19A3.52 3.52 0 00.8 12.72c-.44-2 .3-5.65 3-7.31 0 0-.94 3.58-.42 4.48 0 0 3.81-.62 2.5-9.89.02 0 3.84 3.05 1.45 10.15zM10.71 10.15H9.07a4.85 4.85 0 012.1-3.37 7.53 7.53 0 00-.46 3.37zM18.65 4.52l-.88 5.63h-3.14l4.02-5.63zM23.1 10.22a3.11 3.11 0 00-.69-.07h-2.52a13.06 13.06 0 00.69-3.37 14.88 14.88 0 00-.7-5.6c.12.06 3.99 2.17 3.22 9.04zM22.72 12.34a1.55 1.55 0 00-.31 0H4.19a1.35 1.35 0 00-1.36 1.35V16H1.19a1.14 1.14 0 00-.52.12A1.2 1.2 0 000 17.14v3.19a1.2 1.2 0 00.67 1.07 1.27 1.27 0 00.52.11h1.64V24H1.19a1.14 1.14 0 00-.52.12A1.18 1.18 0 000 25.21v3.2a1.17 1.17 0 00.67 1.06 1.14 1.14 0 00.52.12h1.64v2.29a1.35 1.35 0 001.36 1.35h18.22a1.34 1.34 0 001.35-1.35V13.66a1.36 1.36 0 00-1.04-1.32zm-14.3 14.4l-1.11 1.11a.83.83 0 01-1.18 0 .85.85 0 010-1.18l1.11-1.11a.85.85 0 011.18 0 .83.83 0 010 1.18zm0-6.67a.83.83 0 01-1.18 0L6.13 19a.83.83 0 01.59-1.42.82.82 0 01.59.24l1.11 1.11a.83.83 0 010 1.14zM12.34 24a1.66 1.66 0 110-2.34 1.64 1.64 0 01.48 1.17 1.66 1.66 0 01-.48 1.17zm3.86 3.86a.83.83 0 01-.59.25.87.87 0 01-.59-.25l-1.11-1.11a.83.83 0 011.18-1.18l1.11 1.11a.83.83 0 010 1.17zm0-8.89l-1.11 1.11a.83.83 0 01-1.18 0 .85.85 0 010-1.18L15 17.78a.85.85 0 011.18 0 .87.87 0 01.25.59.83.83 0 01-.23.63zm4.56 7.52a.76.76 0 01-.76.75h-.16a.76.76 0 01-.75-.75v-6.9a.76.76 0 01.75-.75H20a.76.76 0 01.76.75zM28 26.83a8.46 8.46 0 01-2 3.05V13.66a3.44 3.44 0 00-.39-1.6 6.23 6.23 0 011.9-1.64 10.67 10.67 0 000 6.74 14.71 14.71 0 01.49 9.67z" })));
};

var Icon$f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 85.46 100.46" }, props),
        React__default["default"].createElement("path", { fill: "#F1EADA", d: "M85.46 42.73A42.73 42.73 0 1142.73 0a42.68 42.68 0 0142.73 42.73z" }),
        React__default["default"].createElement("path", { fill: "#C8BA9C", d: "M65.39 79a42.75 42.75 0 01-45.32 0 42.75 42.75 0 0145.32 0zM49.11 11.68a27.13 27.13 0 0114.71 12.73c.31.57.6 1.14.87 1.73a25.7 25.7 0 011 2.46c.16.48.31.95.44 1.43v.08a21.8 21.8 0 01.79 5.76v.4a29.74 29.74 0 00.78 7c.1.41.2.82.31 1.22 0 .19.09.37.13.55l.06.24a17.38 17.38 0 01.39 3.69c0 11.6-11.55 21-25.8 21h-.27a31.23 31.23 0 01-3.52-.25 30.48 30.48 0 01-6.59-1.55C23.33 64.92 17 57.53 17 48.94a17.38 17.38 0 01.4-3.69l.06-.24c0-.18.08-.36.13-.55.11-.4.21-.81.3-1.22a29.23 29.23 0 00.79-7v-.4a22.05 22.05 0 01.78-5.74c.13-.51.29-1 .46-1.51a25.7 25.7 0 011-2.46c.27-.59.56-1.16.87-1.73a27.14 27.14 0 0114.7-12.73 20.44 20.44 0 0112.62.01z" }),
        React__default["default"].createElement("path", { fill: "#F1EADA", d: "M60.87 40.12a9.61 9.61 0 00.87-4 10.26 10.26 0 00-10.51-10 10.82 10.82 0 00-5.35 1.39 6.25 6.25 0 01-6.18 0 10.76 10.76 0 00-5.35-1.39 10.26 10.26 0 00-10.5 10 9.61 9.61 0 00.87 4 10.53 10.53 0 00.65 1.19 6.26 6.26 0 01.68 5.36 14.3 14.3 0 00-.87 4c0 8.32 7.89 15.07 17.61 15.07S60.4 59 60.4 50.68a14 14 0 00-.87-4 6.23 6.23 0 01.69-5.36 10.53 10.53 0 00.65-1.2z" }),
        React__default["default"].createElement("path", { fill: "#C8BA9C", d: "M18.21 45a9.12 9.12 0 01-4.44-3.28c-3.55-4.5-2.37-11.71 2-13.41a5.45 5.45 0 014.75.2l.15.08M64.78 28.61a5.45 5.45 0 014.9-.29c4.38 1.7 5.56 8.91 2 13.41A9.16 9.16 0 0167.25 45M42.79 60.49a11.34 11.34 0 01-9.49-4.92 1 1 0 111.7-1.09 9.64 9.64 0 0015.65 0 1 1 0 111.67 1.09 11.34 11.34 0 01-9.53 4.92z" }),
        React__default["default"].createElement("rect", { fill: "#C8BA9C", x: 39.05, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-65.45 39.954 46.838)" }),
        React__default["default"].createElement("rect", { fill: "#C8BA9C", x: 44.72, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-114.55 45.635 46.84)" }),
        React__default["default"].createElement("path", { fill: "#C8BA9C", d: "M33.75 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86zM51.84 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86z" })));
};

var MobileIcon = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 425 398" }, props),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("style", null, ".cls-1{fill:#a16552;}.cls-2{fill:#f5dcb4;}.cls-3,.cls-7{fill:#4e3f3f;}.cls-4{fill:#e6646e;}.cls-5{fill:#5d5360;}.cls-6{fill:#fff;}.cls-7{opacity:0.35;}")),
        React__default["default"].createElement("path", { className: "cls-1", d: "M54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94Z" }),
        React__default["default"].createElement("path", { className: "cls-2", d: "M54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M383.4,212.61c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React__default["default"].createElement("path", { className: "cls-2", d: "M383.4,212.61c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M314.85,229.06a39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45,61.61,61.61,0,0,1,314.85,229.06Z" }),
        React__default["default"].createElement("path", { className: "cls-2", d: "M314.85,229.06a39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45,61.61,61.61,0,0,1,314.85,229.06Z" }),
        React__default["default"].createElement("path", { className: "cls-3", d: "M146.41,300.76a6.45,6.45,0,0,0-6.41,7.29c4,28.45,31,50.45,63.65,50.45s59.67-22,63.65-50.45a6.45,6.45,0,0,0-6.4-7.29Z" }),
        React__default["default"].createElement("path", { className: "cls-4", d: "M166.68,347.91a69.83,69.83,0,0,0,73.94,0c-4.64-16.06-19.47-12.36-37-12.36S171.32,331.85,166.68,347.91Z" }),
        React__default["default"].createElement("path", { className: "cls-1", d: "M380.9,133.36c-13.3-5.16-23.85-2.44-31.27,1.83a163.15,163.15,0,0,0-6.25-15.69q-2.58-5.62-5.57-11.09C317.46,71.18,283.24,40.28,244,27.22L243.2,6.08,217.78,21.34,214.72,21c-1.88-.17-3.74-.3-5.64-.38l-3.71-16L204.28,0c-1.27,0-2.51,0-3.72.14-23.65,1.92-35.42,23.41-37.26,27.09C124,40.29,89.84,71.2,69.49,108.41q-3,5.46-5.57,11.09a167,167,0,0,0-6.26,15.69l-.95-.53c-7.36-3.95-17.58-6.23-30.31-1.3C-1.55,144.2-9.09,190.26,13.56,219c9.24,11.68,19,18.08,28.32,20.93-.12.52-.24,1.05-.35,1.58A109.88,109.88,0,0,0,39,265c0,54.83,40.44,102,98.38,122.73a191.69,191.69,0,0,0,42.06,9.87A201.87,201.87,0,0,0,201.88,399h1.78c90.93,0,164.64-60,164.64-134a109.88,109.88,0,0,0-2.53-23.51c-.12-.53-.23-1.06-.36-1.58,9.37-2.85,19.09-9.25,28.32-20.94C416.39,190.26,408.84,144.19,380.9,133.36ZM54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94ZM319,221.45a61.61,61.61,0,0,1-4.15,7.61,39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45Zm64.4-8.84c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React__default["default"].createElement("rect", { className: "cls-3", x: 181.43, y: 245.71, width: 10.8, height: 24.52, rx: 5.24, transform: "translate(-125.45 320.72) rotate(-65.45)" }),
        React__default["default"].createElement("rect", { className: "cls-3", x: 215.08, y: 245.71, width: 10.8, height: 24.52, rx: 5.24, transform: "translate(77.43 565.71) rotate(-114.55)" }),
        React__default["default"].createElement("path", { className: "cls-3", d: "M145.91,221.43h0c-10.63,0-19.25-8.16-19.25-18.24v-6.08c0-10.07,8.62-18.24,19.25-18.24h0c10.63,0,19.24,8.17,19.24,18.24v6.08C165.15,213.27,156.54,221.43,145.91,221.43Z" }),
        React__default["default"].createElement("path", { className: "cls-5", d: "M145.91,178.87v21.28a9.63,9.63,0,0,0,19.24,0v-3C165.15,187,156.54,178.87,145.91,178.87Z" }),
        React__default["default"].createElement("ellipse", { className: "cls-6", cx: 145.91, cy: 191.03, rx: 6.42, ry: 6.08 }),
        React__default["default"].createElement("path", { className: "cls-3", d: "M261.39,221.43h0c-10.63,0-19.24-8.16-19.24-18.24v-6.08c0-10.07,8.61-18.24,19.24-18.24h0c10.63,0,19.25,8.17,19.25,18.24v6.08C280.64,213.27,272,221.43,261.39,221.43Z" }),
        React__default["default"].createElement("path", { className: "cls-5", d: "M261.39,178.87v21.28a9.64,9.64,0,0,0,19.25,0v-3C280.64,187,272,178.87,261.39,178.87Z" }),
        React__default["default"].createElement("ellipse", { className: "cls-6", cx: 261.39, cy: 191.03, rx: 6.42, ry: 6.08 })));
};

var Icon$e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "-5 0 28.54 33.23" }, props),
        React__default["default"].createElement("path", { d: "M12.3386 4.79998C12.2046 5.8588 12.5631 6.85405 13.2201 7.51021C14.0197 7.03831 14.6148 6.16368 14.7488 5.10486C14.8827 4.04604 14.5242 3.05078 13.8672 2.39463C13.0675 2.86646 12.4725 3.74116 12.3386 4.79998Z" }),
        React__default["default"].createElement("path", { d: "M0 19.3103C0 24.1095 4.02946 28 9 28C13.9705 28 18 24.1095 18 19.3103C18 14.4828 15.5 10.6207 17.1774 7.24138C17.1774 7.24138 14.5 7.72416 13 11.5862C13 11.5862 8.00001 6.7586 10.089 0C10.089 0 5.00005 1.93101 5.53224 8.20688C5.98865 13.5885 5.00005 14.4828 5.00005 14.4828C5.00005 10.1379 1.48183 8.20688 1.48183 8.20688C2.5 13.5172 0 14.9655 0 19.3103Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$C,
    GroupsIcon: Icon$B,
    HamburgerIcon: Icon$A,
    HamburgerCloseIcon: Icon$z,
    HomeIcon: Icon$y,
    IfoIcon: Icon$x,
    InfoIcon: Icon$w,
    LanguageIcon: Icon$v,
    LogoIcon: Logo$3,
    ApeLogo: Logo$2,
    StatsIcon: Icon$u,
    FullLogo: FullLogo,
    ApeIcon: Logo$1,
    MoonIcon: Icon$t,
    MoreIcon: Icon$s,
    NftIcon: Icon$r,
    apeNFTIcon: Icon$q,
    GoldenBananaIcon: Icon$p,
    PoolIcon: Icon$o,
    SunIcon: Icon$n,
    TelegramIcon: Icon$m,
    TicketIcon: Icon$l,
    TradeIcon: Icon$k,
    TwitterIcon: Icon$j,
    DiscordIcon: Icon$i,
    ApeZone: Icon$h,
    Vaults: Icon$g,
    MonkeyLight: Icon$f,
    MobileIcon: MobileIcon,
    Binance: Icon$e,
    GameBurnIcon: Icon$d
});

var StyledModal$1 = styled__default["default"].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader$1 = styled__default["default"].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n  font-family: Poppins;\n  font-weight: 700;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n  font-family: Poppins;\n  font-weight: 700;\n"])));
var ModalTitle = styled__default["default"](Flex)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default["default"].createElement(StyledModal$1, null,
        React__default["default"].createElement(ModalHeader$1, null,
            React__default["default"].createElement(ModalTitle, null,
                onBack && (React__default["default"].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default["default"].createElement(Icon$1s, { color: "primary" }))),
                React__default["default"].createElement(Heading, { fontWeight: 800 }, title)),
            !hideCloseButton && (React__default["default"].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default["default"].createElement(Icon$15, { color: "primary" })))),
        React__default["default"].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
Modal.defaultProps = {
    hideCloseButton: false,
    onBack: undefined,
    bodyPadding: "24px",
};
var templateObject_1$k, templateObject_2$9, templateObject_3$6;

var Overlay = styled__default["default"].div.attrs({ role: "presentation" })(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(56, 56, 56, 1);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(56, 56, 56, 1);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$j;

var ModalWrapper = styled__default["default"].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: function () { return null; },
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(""), nodeId = _c[0], setNodeId = _c[1];
    var _d = React.useState(), modalNode = _d[0], setModalNode = _d[1];
    var _e = React.useState(true), closeOnOverlayClick = _e[0], setCloseOnOverlayClick = _e[1];
    var handlePresent = function (node, newNodeId) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default["default"].createElement(Context.Provider, { value: {
            isOpen: isOpen,
            nodeId: nodeId,
            modalNode: modalNode,
            setModalNode: setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default["default"].createElement(ModalWrapper, null,
            React__default["default"].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default["default"].isValidElement(modalNode) &&
                React__default["default"].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$i;

var useModal = function (modal, closeOnOverlayClick, updateOnPropsChange, modalId) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    if (updateOnPropsChange === void 0) { updateOnPropsChange = false; }
    if (modalId === void 0) { modalId = "defaultNodeId"; }
    var _a = React.useContext(Context), isOpen = _a.isOpen, nodeId = _a.nodeId, modalNode = _a.modalNode, setModalNode = _a.setModalNode, onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal, modalId);
    }, [modal, modalId, onPresent]);
    React.useEffect(function () {
        // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            var modalProps = get__default["default"](modal, "props");
            var oldModalProps = get__default["default"](modalNode, "props");
            if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 38.4 33.5" }, props),
        React__default["default"].createElement("path", { d: "M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3\n\t\tc-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7\n\t\tc0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7\n\t\tc0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1\n\t\tL29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7\n\t\tc0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z", fill: "#8247E5" })));
};

var _a$3, _b$1;
var ChainId;
(function (ChainId) {
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
    ChainId[ChainId["MATIC"] = 137] = "MATIC";
    ChainId[ChainId["MATIC_TESTNET"] = 80001] = "MATIC_TESTNET";
})(ChainId || (ChainId = {}));
var NETWORK_ICON$1 = (_a$3 = {},
    _a$3[ChainId.BSC] = Icon$c,
    _a$3[ChainId.MATIC] = Icon$b,
    _a$3[ChainId.BSC_TESTNET] = Icon$c,
    _a$3[ChainId.MATIC_TESTNET] = Icon$b,
    _a$3);
var NETWORK_LABEL = (_b$1 = {},
    _b$1[ChainId.BSC] = "BSC",
    _b$1[ChainId.BSC_TESTNET] = "BSC Testnet",
    _b$1[ChainId.MATIC] = "Polygon",
    _b$1[ChainId.MATIC_TESTNET] = "Matic Testnet",
    _b$1);
var networks = [
    {
        chainId: ChainId.BSC,
        networkName: "Binance Smart Chain",
        symbol: NETWORK_LABEL[ChainId.BSC],
        icon: NETWORK_ICON$1[ChainId.BSC],
    },
    {
        chainId: ChainId.MATIC,
        networkName: "Polygon (Matic)",
        symbol: NETWORK_LABEL[ChainId.MATIC],
        icon: NETWORK_ICON$1[ChainId.MATIC],
    },
];

var NetworkCard = function (_a) {
    var networkConfig = _a.networkConfig, chainId = _a.chainId, onDismiss = _a.onDismiss, switchNetwork = _a.switchNetwork;
    var symbol = networkConfig.symbol, Icon = networkConfig.icon;
    return (React__default["default"].createElement(Button, { fullWidth: true, disabled: networkConfig.chainId === chainId, marginBottom: "10px", variant: "secondary", onClick: function () {
            switchNetwork(networkConfig.chainId);
            onDismiss();
        } },
        React__default["default"].createElement(Icon, { width: "22px", mr: "10px", alignmentBaseline: "baseline" }),
        React__default["default"].createElement(Text, { fontWeight: 600, color: "text", mr: "16px", textAlign: "start" }, symbol)));
};

var SelectNetworkModal = function (_a) {
    var _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, switchNetwork = _a.switchNetwork, chainId = _a.chainId;
    return (React__default["default"].createElement(Modal, { title: "Select a Network", onDismiss: onDismiss }, networks.map(function (network) { return (React__default["default"].createElement(NetworkCard, { networkConfig: network, chainId: chainId, switchNetwork: switchNetwork, onDismiss: onDismiss, key: network.chainId })); })));
};
SelectNetworkModal.defaultProps = {
    onDismiss: function () { return null; },
};

var useNetworkModal = function (switchNetwork, chainId) {
    var onPresentNetworkModal = useModal(React__default["default"].createElement(SelectNetworkModal, { switchNetwork: switchNetwork, chainId: chainId }))[0];
    return { onPresentNetworkModal: onPresentNetworkModal };
};

var _a$2;
var StyledButton$2 = styled__default["default"](Button)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  background-color: ", ";\n  border-radius: 10px;\n  font-size: 14px;\n  line-height: 10px;\n  padding: 0px 15px 0px 10px;\n  :focus {\n    box-shadow: none !important;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  background-color: ", ";\n  border-radius: 10px;\n  font-size: 14px;\n  line-height: 10px;\n  padding: 0px 15px 0px 10px;\n  :focus {\n    box-shadow: none !important;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white3;
});
var NETWORK_ICON = (_a$2 = {},
    _a$2[ChainId.BSC] = React__default["default"].createElement(Icon$c, { width: "23px", mr: "8px" }),
    _a$2[ChainId.BSC_TESTNET] = React__default["default"].createElement(Icon$c, { width: "23px", mr: "8px" }),
    _a$2[ChainId.MATIC] = React__default["default"].createElement(Icon$b, { width: "23px", mr: "8px" }),
    _a$2[ChainId.MATIC_TESTNET] = React__default["default"].createElement(Icon$b, { width: "23px", mr: "8px" }),
    _a$2);
var NetworkButton = function (_a) {
    var chainId = _a.chainId, switchNetwork = _a.switchNetwork;
    var onPresentNetworkModal = useNetworkModal(switchNetwork, chainId).onPresentNetworkModal;
    return (React__default["default"].createElement(StyledButton$2, { size: "sm", variant: "tertiary", color: "text", onClick: function () {
            onPresentNetworkModal();
        } },
        NETWORK_ICON[chainId],
        " ",
        NETWORK_LABEL[chainId],
        " ",
        React__default["default"].createElement(Icon$1q, { width: "10px", ml: "8px" })));
};
var templateObject_1$h;

var supportLinks = [
    {
        label: "FAQ",
        href: "https://apeswap.gitbook.io/apeswap-finance/welcome/support/general-faq",
    },
    {
        label: "Discord",
        href: "https://discord.com/invite/ApeSwap",
    },
    {
        label: "Tokenomics",
        href: "https://apeswap.gitbook.io/apeswap-finance/product-and-features/tokenomics",
    },
    {
        label: "Audits",
        href: "https://apeswap.gitbook.io/apeswap-finance/where-dev/security/audits",
    },
];
var engageLinks = [
    {
        label: "Governance",
        href: "https://apeswap.gitbook.io/apeswap-finance/governance",
    },
    {
        label: "Partner Application",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdiC4jpKQAYD4iALGrm9ErmDIs1xtsOENu9GsvgdczVwe_uOw/viewform",
    },
    {
        label: "Bug Bounty",
        href: "https://apeswap.gitbook.io/apeswap-finance/where-dev/security/bug-bounty-program",
    },
    {
        label: "Developer Grants",
        href: "https://github.com/ApeSwapFinance/apeswap-frontend/issues",
    },
];
var learnLinks = [
    {
        label: "Docs",
        href: "https://apeswap.gitbook.io/apeswap-finance/welcome/master",
    },
    {
        label: "ApeLabs",
        href: "https://www.apelabs.education/",
    },
    {
        label: "ApeTV",
        href: "https://open.spotify.com/show/4nFre3hez2RKPCqkX7CZBa",
    },
    {
        label: "Github",
        href: "https://github.com/ApeSwapFinance/",
    },
];

var FlexContainer = styled__default["default"].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: ", ";\n  flex-wrap: wrap;\n  width: 250px;\n  overflow: hidden;\n  ", " {\n    width: 335px;\n    align-items: center;\n    justify-content: center;\n  }\n  ", " {\n    width: 700px;\n    align-items: center;\n    justify-content: center;\n  }\n  ", " {\n    width: 1200px;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: ", ";\n  flex-wrap: wrap;\n  width: 250px;\n  overflow: hidden;\n  ", " {\n    width: 335px;\n    align-items: center;\n    justify-content: center;\n  }\n  ", " {\n    width: 700px;\n    align-items: center;\n    justify-content: center;\n  }\n  ", " {\n    width: 1200px;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? theme.colors.background : "rgba(77, 64, 64, 1)");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Container$2 = styled__default["default"].div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  background-color: ", ";\n  border-top: 5px solid ", ";\n  padding: 20px 20px 20px 20px;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  ", " {\n    padding: 80px 50px 80px 50px;\n  }\n  ", " {\n    padding: 80px 50px 100px 50px;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  background-color: ", ";\n  border-top: 5px solid ", ";\n  padding: 20px 20px 20px 20px;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  ", " {\n    padding: 80px 50px 80px 50px;\n  }\n  ", " {\n    padding: 80px 50px 100px 50px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? theme.colors.background : "rgba(77, 64, 64, 1)");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var PriceLink = styled__default["default"].a(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var StyledButton$1 = styled__default["default"](Button)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  background-color: ", ";\n  border-radius: 10px;\n  font-size: 14px;\n  line-height: 10px;\n  padding: 0px 15px 0px 10px;\n  :focus {\n    box-shadow: none !important;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  background-color: ", ";\n  border-radius: 10px;\n  font-size: 14px;\n  line-height: 10px;\n  padding: 0px 15px 0px 10px;\n  :focus {\n    box-shadow: none !important;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white3;
});
var PeakingMonkey = styled__default["default"](MobileIcon)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  bottom: -40px;\n  right: 0px;\n  ", " {\n    width: 150px;\n    height: 150px;\n    bottom: -60px;\n    right: 0px;\n  }\n  ", " {\n    width: 200px;\n    height: 200px;\n    bottom: -80px;\n    right: 0px;\n  }\n  ", " {\n    width: 300px;\n    height: 300px;\n    bottom: -120px;\n    right: 50px;\n  }\n"], ["\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  bottom: -40px;\n  right: 0px;\n  ", " {\n    width: 150px;\n    height: 150px;\n    bottom: -60px;\n    right: 0px;\n  }\n  ", " {\n    width: 200px;\n    height: 200px;\n    bottom: -80px;\n    right: 0px;\n  }\n  ", " {\n    width: 300px;\n    height: 300px;\n    bottom: -120px;\n    right: 50px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var IconFlex = styled__default["default"].div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 120px;\n  width: 100%;\n  ", " {\n    justify-content: space-between;\n    height: 80px;\n  }\n  ", " {\n    justify-content: space-between;\n    height: 60px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 120px;\n  width: 100%;\n  ", " {\n    justify-content: space-between;\n    height: 80px;\n  }\n  ", " {\n    justify-content: space-between;\n    height: 60px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var LinkskWrapper = styled__default["default"].div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  ", " {\n    margin-bottom: 100px;\n    margin-top: 50px;\n  }\n  ", " {\n    margin-bottom: 100px;\n    margin-top: 50px;\n  }\n  ", " {\n    margin-bottom: 0px;\n    margin-top: 50px;\n  }\n  ", " {\n    margin-bottom: 0px;\n    margin-top: 0px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  ", " {\n    margin-bottom: 100px;\n    margin-top: 50px;\n  }\n  ", " {\n    margin-bottom: 100px;\n    margin-top: 50px;\n  }\n  ", " {\n    margin-bottom: 0px;\n    margin-top: 50px;\n  }\n  ", " {\n    margin-bottom: 0px;\n    margin-top: 0px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xxl;
});
var LinkColumnFlex = styled__default["default"].div(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n  ", " {\n    align-items: flex-start;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n  ", " {\n    align-items: flex-start;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var LogoFlex = styled__default["default"].div(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 475px;\n  width: 100%;\n  text-align: center;\n  padding: 0px 5px 0px 5px;\n  ", " {\n    height: 325px;\n  }\n  ", " {\n    height: 375px;\n    width: 375px;\n    align-items: center;\n    padding: 0px;\n  }\n  ", " {\n    height: 375px;\n    width: 375px;\n    text-align: left;\n    align-items: flex-start;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 475px;\n  width: 100%;\n  text-align: center;\n  padding: 0px 5px 0px 5px;\n  ", " {\n    height: 325px;\n  }\n  ", " {\n    height: 375px;\n    width: 375px;\n    align-items: center;\n    padding: 0px;\n  }\n  ", " {\n    height: 375px;\n    width: 375px;\n    text-align: left;\n    align-items: flex-start;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var ButtonFlex = styled__default["default"].div(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 120px;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  ", " {\n    width: 100%;\n    justify-content: space-between;\n    height: 60px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 120px;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  ", " {\n    width: 100%;\n    justify-content: space-between;\n    height: 60px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var LinkText = styled__default["default"](Text)(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n  margin-top: 15px;\n  margin-bottom: 5px;\n  color: white;\n  :hover {\n    text-decoration: underline;\n  }\n"], ["\n  margin-top: 15px;\n  margin-bottom: 5px;\n  color: white;\n  :hover {\n    text-decoration: underline;\n  }\n"])));
var StyledLink$1 = styled__default["default"].a(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n  :hover {\n    opacity: 0.8;\n  }\n"], ["\n  :hover {\n    opacity: 0.8;\n  }\n"])));
var templateObject_1$g, templateObject_2$8, templateObject_3$5, templateObject_4$3, templateObject_5$2, templateObject_6$2, templateObject_7$2, templateObject_8$1, templateObject_9$1, templateObject_10$1, templateObject_11$1, templateObject_12$1;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#af6e5aff",
    primaryBright: "#ffd54fff",
    primaryDark: "#0098A1",
    secondary: "#965a50ff",
    success: "#31D0AA",
    warning: "#FFB237",
    green: "#009859ff",
    yellow: "#FFB300",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FDFBF5", backgroundDisabled: "#E9EAEB", contrast: "#965a50ff", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "rgba(77, 64, 64, 1)", textDisabled: "#BDC2C4", textSubtle: "#009859ff", borderColor: "#965a50ff", card: "#F9F4E7", yellow: "#FFB300", white: "#FFFFFF", white3: "rgba(241, 234, 218, 1)", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#009859ff", background: "#100C18", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#FFFFFF", textDisabled: "#666171", textSubtle: "#FFFFFF", borderColor: "#524B63", card: "#27262c", yellow: "#FFB300", white: "#FFFFFF", white3: "rgba(56, 56, 56, 1)", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var _a$1, _b;
var PRIMARY = variants$2.PRIMARY, SECONDARY = variants$2.SECONDARY, TERTIARY = variants$2.TERTIARY, TEXT = variants$2.TEXT, DANGER = variants$2.DANGER, SUBTLE = variants$2.SUBTLE, SUCCESS = variants$2.SUCCESS, YELLOW = variants$2.YELLOW;
var light$5 = (_a$1 = {},
    _a$1[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$1[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid ".concat(lightColors.primary),
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$1[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$1[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$1[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$1[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: "".concat(lightColors.textSubtle, "D9"),
        backgroundHover: "".concat(lightColors.textSubtle, "B3"),
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$1[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: "".concat(lightColors.success, "D9"),
        backgroundHover: "".concat(lightColors.success, "B3"),
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$1[YELLOW] = {
        background: lightColors.yellow,
        backgroundActive: lightColors.yellow,
        backgroundHover: lightColors.yellow,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$1);
var dark$5 = (_b = {},
    _b[PRIMARY] = __assign({}, light$5.primary),
    _b[SECONDARY] = __assign({}, light$5.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$5.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$5.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$5.danger),
    _b[SUBTLE] = __assign({}, light$5.subtle),
    _b[SUCCESS] = __assign({}, light$5.success),
    _b[YELLOW] = __assign({}, light$5.yellow),
    _b);

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return "".concat(breakpoint, "px"); });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: ".concat(breakpointMap.xs, "px)"),
    sm: "@media screen and (min-width: ".concat(breakpointMap.sm, "px)"),
    md: "@media screen and (min-width: ".concat(breakpointMap.md, "px)"),
    lg: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
    xl: "@media screen and (min-width: ".concat(breakpointMap.xl, "px)"),
    xxl: "@media screen and (min-width: ".concat(breakpointMap.xxl, "px)"),
    nav: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    yellow: "0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var fontFamily = {
    poppins: "Poppins",
};
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    fontFamily: fontFamily,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

var light$4 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$4 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    handleBackground: lightColors.card,
};
var dark$2 = {
    handleBackground: darkColors.card,
};

var light$1 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$1 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, button: light$5, colors: lightColors, card: light$4, toggle: light$2, nav: light$1, modal: light, radio: light$3 });

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, button: dark$5, colors: darkColors, card: dark$4, toggle: dark$2, nav: dark$1, modal: dark, radio: dark$3 });

var Footer = function (_a) {
    var chainId = _a.chainId, toggleTheme = _a.toggleTheme, isDark = _a.isDark, bananaPriceUsd = _a.bananaPriceUsd, switchNetwork = _a.switchNetwork;
    var iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
    return (React__default["default"].createElement(Container$2, null,
        React__default["default"].createElement(FlexContainer, null,
            React__default["default"].createElement(LogoFlex, null,
                React__default["default"].createElement(FullLogo, { width: "240px", mb: "20px" }),
                React__default["default"].createElement(Text, { color: "white" }, "ApeSwap is a leading decentralized exchange (DEX) on Binance Smart Chain and Polygon focused on offering a premier trading experience"),
                React__default["default"].createElement(ButtonFlex, null,
                    React__default["default"].createElement(StyledButton$1, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                        React__default["default"].createElement(Flex, { alignItems: "center" },
                            React__default["default"].createElement(Icon$n, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                            React__default["default"].createElement(Text, { color: "textDisabled", mx: "4px", bold: true }, "/"),
                            React__default["default"].createElement(Icon$t, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
                    React__default["default"].createElement(NetworkButton, { chainId: chainId, switchNetwork: switchNetwork }),
                    React__default["default"].createElement("div", null, bananaPriceUsd ? (React__default["default"].createElement(PriceLink, { href: "https://info.apeswap.finance/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95", target: "_blank" },
                        React__default["default"].createElement(Icon$V, { width: "34px", mr: "8px" }),
                        React__default["default"].createElement(Text, { color: "white", fontSize: "18px", fontWeight: 600 }, "$".concat(bananaPriceUsd.toFixed(3))))) : (React__default["default"].createElement(Skeleton, { width: 90, height: 35 })))),
                React__default["default"].createElement(IconFlex, null,
                    React__default["default"].createElement(StyledLink$1, { href: "https://twitter.com/ape_swap", target: "_blank", rel: "noopener noreferrer" },
                        React__default["default"].createElement(Icon$I, { color: "white3", fill: iconFillColor })),
                    React__default["default"].createElement(StyledLink$1, { href: "https://discord.com/invite/ApeSwap", target: "_blank", rel: "noopener noreferrer" },
                        React__default["default"].createElement(Icon$G, { color: "white3", fill: iconFillColor })),
                    React__default["default"].createElement(StyledLink$1, { href: "https://t.me/ape_swap", target: "_blank", rel: "noopener noreferrer" },
                        React__default["default"].createElement(Icon$H, { color: "white3", fill: iconFillColor })),
                    React__default["default"].createElement(StyledLink$1, { href: "https://www.reddit.com/r/Apeswap/", target: "_blank", rel: "noopener noreferrer" },
                        React__default["default"].createElement(Icon$F, { color: "white3", fill: iconFillColor })),
                    React__default["default"].createElement(StyledLink$1, { href: "https://ape-swap.medium.com/", target: "_blank", rel: "noopener noreferrer" },
                        React__default["default"].createElement(Icon$E, { color: "white3", fill: iconFillColor })),
                    React__default["default"].createElement(StyledLink$1, { href: "https://www.instagram.com/apeswap.finance/", target: "_blank", rel: "noopener noreferrer" },
                        React__default["default"].createElement(Icon$D, { color: "white3", fill: iconFillColor })))),
            React__default["default"].createElement(LinkskWrapper, null,
                React__default["default"].createElement(LinkColumnFlex, { style: { width: "200px" } },
                    React__default["default"].createElement(Text, { color: "rgba(255, 179, 0, 1)", fontSize: "22px", bold: true }, "Support"),
                    supportLinks.map(function (link) {
                        return (React__default["default"].createElement("a", { href: link.href, target: "_blank", rel: "noopener noreferrer" },
                            React__default["default"].createElement(LinkText, null, link.label)));
                    })),
                React__default["default"].createElement(LinkColumnFlex, { style: { width: "240px" } },
                    React__default["default"].createElement(Text, { color: "rgba(255, 179, 0, 1)", fontSize: "22px", bold: true }, "Engage"),
                    engageLinks.map(function (link) {
                        return (React__default["default"].createElement("a", { href: link.href, target: "_blank", rel: "noopener noreferrer" },
                            React__default["default"].createElement(LinkText, null, link.label)));
                    })),
                React__default["default"].createElement(LinkColumnFlex, { style: { width: "200px" } },
                    React__default["default"].createElement(Text, { color: "rgba(255, 179, 0, 1)", fontSize: "22px", bold: true }, "Learn"),
                    learnLinks.map(function (link) {
                        return (React__default["default"].createElement("a", { href: link.href, target: "_blank", rel: "noopener noreferrer" },
                            React__default["default"].createElement(LinkText, null, link.label)));
                    })))),
        React__default["default"].createElement(PeakingMonkey, null)));
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: ".concat(prevMinWidth, "px)"), _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(breakpoint, "px)"), _b));
    }, {});
})();
var getKey = function (size) { return "is".concat(size.charAt(0).toUpperCase()).concat(size.slice(1)); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(".concat(imgSrc, ")");
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = "".concat(width, "px");
    particle.style.height = "".concat(height, "px");
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(".concat(x, "px, ").concat(y, "px) rotate(0deg)"),
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(".concat(x + destinationX, "px, ").concat(y + destinationY, "px) rotate(").concat(rotation, "deg)"),
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default["default"](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledLink = styled__default["default"](reactRouterDom.Link)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Logo = function (_a) {
    _a.isPushed; _a.togglePush; _a.isDark; var href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var _b = useMatchBreakpoints(); _b.isSm; _b.isXs;
    var innerLogo = React__default["default"].createElement(MobileIcon, { width: "40px" });
    return (React__default["default"].createElement(Flex, null, isAbsoluteUrl ? (React__default["default"].createElement(StyledLink, { as: "a", href: href, "aria-label": "Apeswap home page" }, innerLogo)) : (React__default["default"].createElement(StyledLink, { to: href, "aria-label": "Apeswap home page" }, innerLogo))));
};
var templateObject_1$f;

var Icon$a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default["default"].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default["default"].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default["default"].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default["default"].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default["default"].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default["default"].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default["default"].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default["default"].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default["default"].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default["default"].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$9 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$8 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default["default"].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default["default"].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$7 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default["default"].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$6 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default["default"].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$5 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default["default"].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default["default"].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$4 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default["default"].createElement("title", null, "\u7F16\u7EC4"),
        React__default["default"].createElement("g", { id: "\\u9875\\u9762-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" },
            React__default["default"].createElement("g", { id: "ONTO-Landing-Page", transform: "translate(-48.000000, -53.000000)", stroke: "#000000", strokeWidth: 3 },
                React__default["default"].createElement("g", { id: "\\u7F16\\u7EC4", transform: "translate(50.000000, 57.000000)" },
                    React__default["default"].createElement("path", { d: "M3.14572653,3.565339 L3.14572653,3.565339 L0,0.420257608 L0,11.1571295 C0,13.9054947 1.04857551,16.6532371 3.14572653,18.7495428 C7.3406516,22.9427771 14.141751,22.9427771 18.336676,18.7495428 L3.14572653,3.565339 Z", id: "Fill-11\\u5907\\u4EFD" }),
                    React__default["default"].createElement("path", { d: "M18.1336247,18.3291295 L18.1336247,18.3291295 L21.2793512,21.4735881 L21.2793512,10.7367162 C21.2793512,7.98897381 20.2307757,5.24123142 18.1336247,3.14492569 C13.9386996,-1.04830856 7.13760023,-1.04830856 2.94267516,3.14492569 L18.1336247,18.3291295 Z", id: "Fill-12\\u5907\\u4EFD" }))))));
};

var Icon$3 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 200.17 228.32" }, props),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("style", null, ".prefix__cls-1{fill:#2ac98b;fill-rule:evenodd}")),
        React__default["default"].createElement("title", null, "Nabox"),
        React__default["default"].createElement("g", { id: "prefix__\\u56FE\\u5C42_2", "data-name": "\\u56FE\\u5C42 2" },
            React__default["default"].createElement("g", { id: "prefix__\\u56FE\\u5C42_1-2", "data-name": "\\u56FE\\u5C42 1" },
                React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M0 64.12v106.34l30.79 17.75v-76.07l30.68 17.72v76.02l30.8 17.75V117.28L0 64.12z" }),
                React__default["default"].createElement("path", { className: "prefix__cls-1", d: "M69.94 54.39l30.85-18.08 38.33 22.43-30.83 18zM100.83 0l-93 54.41 100.29 58.8v115.11l30.42-17.72V94.15l30.74-18V192.5l30.87-18.17V58.11z" })))));
};

var Icon$2 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default["default"].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon$1 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("rect", { width: "24", height: "24", fill: "url(#pattern0)" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React__default["default"].createElement("use", { xlinkHref: "#image0", transform: "scale(0.00416667)" })),
            React__default["default"].createElement("image", { id: "image0", width: "240", height: "240", xlinkHref: "data:image/png;base64,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" }))));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["Walletlink"] = "Walletlink";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$a,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$7,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.WalletConnect,
    },
    {
        title: "TokenPocket",
        icon: Icon$8,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.BSC,
    },
    {
        title: "MathWallet",
        icon: Icon$9,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "ONTO Wallet",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "NABOX Wallet",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Coinbase Wallet",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.Walletlink,
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default["default"].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-".concat(title.toLocaleLowerCase()) },
        React__default["default"].createElement(Text, { fontWeight: 600, color: "text", mr: "16px" }, title),
        React__default["default"].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default["default"](Link)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default["default"].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default["default"].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default["default"].createElement(HelpLink, { href: "https://docs.binance.org/smart-chain/wallet/metamask.html", external: true },
            React__default["default"].createElement(Icon$11, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
ConnectModal.defaultProps = {
    onDismiss: function () { return null; },
};
var templateObject_1$e;

var StyleButton = styled__default["default"](Text).attrs({ role: "button" })(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-weight: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-weight: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var _b = _a.fontWeight, fontWeight = _b === void 0 ? 600 : _b;
    return fontWeight;
});
var Tooltip = styled__default["default"].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  font-family: poppins;\n  font-weight: 700;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  font-family: poppins;\n  font-weight: 700;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default["default"].createElement(StyleButton, __assign({ small: true, onClick: function () {
            navigator.clipboard.writeText(JSON.stringify(toCopy));
            setIsTooltipDisplayed(true);
            setTimeout(function () {
                setIsTooltipDisplayed(false);
            }, 1000);
        } }, props),
        children,
        React__default["default"].createElement(Icon$12, { width: "20px", color: "primary", ml: "4px" }),
        React__default["default"].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
CopyToClipboard.defaultProps = {
    toCopy: "",
};
var templateObject_1$d, templateObject_2$7;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default["default"].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default["default"].createElement(Text, { fontSize: "20px", fontWeight: 600, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default["default"].createElement(Flex, { mb: "32px" },
            React__default["default"].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/".concat(account), mr: "16px", fontFamily: "poppins" }, "View on BscScan"),
            React__default["default"].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default["default"].createElement(Flex, { justifyContent: "center" },
            React__default["default"].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};
AccountModal.defaultProps = {
    account: undefined,
    onDismiss: function () { return null; },
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default["default"].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default["default"].createElement(AccountModal, { account: account, logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var StyledButton = styled__default["default"](Button)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  margin-left: 10px;\n  background-color: ", ";\n  border-radius: 10px;\n  line-height: 10px;\n  padding: 0px 45px 0px 15px;\n  :focus {\n    box-shadow: none !important;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  margin-left: 10px;\n  background-color: ", ";\n  border-radius: 10px;\n  line-height: 10px;\n  padding: 0px 45px 0px 15px;\n  :focus {\n    box-shadow: none !important;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white3;
});
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? "".concat(account.substring(0, 4), "...").concat(account.substring(account.length - 4)) : null;
    var isXs = useMatchBreakpoints().isXs;
    var loadButton = function () {
        if (account) {
            if (isXs) {
                return (React__default["default"].createElement(StyledButton, { size: "sm", fontSize: "14px", color: "text", fontFamily: "poppins", variant: "tertiary", onClick: function () {
                        onPresentAccountModal();
                    } }, accountEllipsis));
            }
            return (React__default["default"].createElement(StyledButton, { size: "sm", variant: "tertiary", fontSize: "14px", color: "text", fontFamily: "poppins", onClick: function () {
                    onPresentAccountModal();
                } }, accountEllipsis));
        }
        return (React__default["default"].createElement(StyledButton, { size: "md", fontFamily: "poppins", variant: "tertiary", color: "text", fontSize: "16px", onClick: function () {
                onPresentConnectModal();
            } }, "Connect"));
    };
    return React__default["default"].createElement("div", null, loadButton());
};
UserBlock.defaultProps = {
    account: "",
};
var templateObject_1$c;

var links = [
    {
        label: "Exchange",
        icon: "TradeIcon",
        href: "/swap",
    },
    {
        label: "Stake",
        icon: "FarmIcon",
        items: [
            {
                label: "Farms",
                href: "/farms",
            },
            {
                label: "Pools",
                href: "/pools",
            },
            {
                label: "Vaults",
                href: "/vaults",
            },
            {
                label: "GNANA",
                href: "/gnana",
            },
            {
                label: "Liquidity Mining",
                href: "/liquidity-mining",
            },
        ],
    },
    {
        label: "Offerings",
        icon: "StatsIcon",
        href: "/stats",
    },
    {
        label: "Lending",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "NFTs",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.apeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/apeswap",
            },
            {
                label: "Docs",
                href: "https://docs.apeswap.finance",
            },
            {
                label: "Blog",
                href: "https://apeswap.medium.com",
            },
            {
                label: "Voting",
                href: "https://voting.apeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/apeswap",
            },
            {
                label: "Docs",
                href: "https://docs.apeswap.finance",
            },
            {
                label: "Blog",
                href: "https://apeswap.medium.com",
            },
            {
                label: "Voting",
                href: "https://voting.apeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/apeswap",
            },
            {
                label: "Docs",
                href: "https://docs.apeswap.finance",
            },
            {
                label: "Blog",
                href: "https://apeswap.medium.com",
            },
        ],
    },
];
var MENU_HEIGHT = 60;
var MENU_ENTRY_HEIGHT = 48;

var Icon = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 85.46 100.46" }, props),
        React__default["default"].createElement("path", { fill: "#333834", d: "M85.46 42.73A42.73 42.73 0 1142.73 0a42.68 42.68 0 0142.73 42.73z" }),
        React__default["default"].createElement("path", { fill: "#707070", d: "M65.39 79a42.75 42.75 0 01-45.32 0 42.75 42.75 0 0145.32 0zM49.11 11.68a27.13 27.13 0 0114.71 12.73c.31.57.6 1.14.87 1.73a25.7 25.7 0 011 2.46c.16.48.31.95.44 1.43v.08a21.8 21.8 0 01.79 5.76v.4a29.74 29.74 0 00.78 7c.1.41.2.82.31 1.22 0 .19.09.37.13.55l.06.24a17.38 17.38 0 01.39 3.69c0 11.6-11.55 21-25.8 21h-.27a31.23 31.23 0 01-3.52-.25 30.48 30.48 0 01-6.59-1.55C23.33 64.92 17 57.53 17 48.94a17.38 17.38 0 01.4-3.69l.06-.24c0-.18.08-.36.13-.55.11-.4.21-.81.3-1.22a29.23 29.23 0 00.79-7v-.4a22.05 22.05 0 01.78-5.74c.13-.51.29-1 .46-1.51a25.7 25.7 0 011-2.46c.27-.59.56-1.16.87-1.73a27.14 27.14 0 0114.7-12.73 20.44 20.44 0 0112.62.01z" }),
        React__default["default"].createElement("path", { fill: "#333834", d: "M60.87 40.12a9.61 9.61 0 00.87-4 10.26 10.26 0 00-10.51-10 10.82 10.82 0 00-5.35 1.39 6.25 6.25 0 01-6.18 0 10.76 10.76 0 00-5.35-1.39 10.26 10.26 0 00-10.5 10 9.61 9.61 0 00.87 4 10.53 10.53 0 00.65 1.19 6.26 6.26 0 01.68 5.36 14.3 14.3 0 00-.87 4c0 8.32 7.89 15.07 17.61 15.07S60.4 59 60.4 50.68a14 14 0 00-.87-4 6.23 6.23 0 01.69-5.36 10.53 10.53 0 00.65-1.2z" }),
        React__default["default"].createElement("path", { fill: "#707070", d: "M18.21 45a9.12 9.12 0 01-4.44-3.28c-3.55-4.5-2.37-11.71 2-13.41a5.45 5.45 0 014.75.2l.15.08M64.78 28.61a5.45 5.45 0 014.9-.29c4.38 1.7 5.56 8.91 2 13.41A9.16 9.16 0 0167.25 45M42.79 60.49a11.34 11.34 0 01-9.49-4.92 1 1 0 111.7-1.09 9.64 9.64 0 0015.65 0 1 1 0 111.67 1.09 11.34 11.34 0 01-9.53 4.92z" }),
        React__default["default"].createElement("rect", { fill: "#707070", x: 39.05, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-65.45 39.954 46.838)" }),
        React__default["default"].createElement("rect", { fill: "#707070", x: 44.72, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-114.55 45.635 46.84)" }),
        React__default["default"].createElement("path", { fill: "#707070", d: "M33.75 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86zM51.84 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86z" })));
};

var StyledAvatar = styled__default["default"].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  margin-left: -30px;\n  height: 25px;\n  img {\n    border-radius: 50px;\n  }\n"], ["\n  margin-left: -30px;\n  height: 25px;\n  img {\n    border-radius: 50px;\n  }\n"])));
var Pip = styled__default["default"].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.name, name = _b === void 0 ? "Ape" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var isDark = styled.useTheme().isDark;
    var link = profile.name ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default["default"].createElement("img", { src: image, alt: "profile avatar", height: "40px", width: "40px" })) : !isDark ? (React__default["default"].createElement(Icon$f, { width: "40px", height: "40px" })) : (React__default["default"].createElement(Icon, { width: "40px", height: "40px" }));
    if (isExternal) {
        return (React__default["default"].createElement(StyledAvatar, { title: name },
            React__default["default"].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default["default"].createElement(Pip, null)));
    }
    return (React__default["default"].createElement(StyledAvatar, { title: name },
        React__default["default"].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default["default"].createElement(Pip, null)));
};
var templateObject_1$b, templateObject_2$6;

var MenuLink$1 = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default["default"].createElement(Tag, __assign({}, props, otherProps));
};

var Image = function (props) {
    return (React__default["default"].createElement(Svg, { width: "188", height: "279", viewBox: "0 0 188 279", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        React__default["default"].createElement("rect", { width: "188", height: "279", fill: "url(#pattern0)" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React__default["default"].createElement("use", { xlinkHref: "#image0_9654_43672", transform: "translate(-1.28191) scale(0.00531915 0.00358423)" })),
            React__default["default"].createElement("image", { id: "image0_9654_43672", width: "429", height: "304", xlinkHref: "data:image/png;base64,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" }))));
};

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default["default"].createElement(Tag, __assign({}, props, otherProps));
};

var StyledCard = styled__default["default"].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  position: absolute;\n  width: 429px;\n  min-height: 316px;\n  background-color: ", ";\n  border-radius: 0px 0px 30px 30px;\n  padding: 15px 0px 20px 0px;\n  margin-left: 22.5px;\n  cursor: default;\n"], ["\n  position: absolute;\n  width: 429px;\n  min-height: 316px;\n  background-color: ", ";\n  border-radius: 0px 0px 30px 30px;\n  padding: 15px 0px 20px 0px;\n  margin-left: 22.5px;\n  cursor: default;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var NavHolder = styled__default["default"].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 200px;\n  margin: 0px 0px 0px 30px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 200px;\n  margin: 0px 0px 0px 30px;\n"])));
var NavImage = styled__default["default"].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  position: absolute;\n  overflow: hidden;\n  display: block;\n  top: 0px;\n  right: 0px;\n  width: 188px;\n  height: 253px;\n  background: rgba(196, 196, 196, 1);\n  border-radius: 0px 0px 0px 30px;\n"], ["\n  position: absolute;\n  overflow: hidden;\n  display: block;\n  top: 0px;\n  right: 0px;\n  width: 188px;\n  height: 253px;\n  background: rgba(196, 196, 196, 1);\n  border-radius: 0px 0px 0px 30px;\n"])));
var StyledText = styled__default["default"](Text)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-weight: 700;\n  :hover {\n    box-shadow: ", ";\n  }\n"], ["\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-weight: 700;\n  :hover {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return "0px 2px 0px ".concat(theme.colors.text);
});
var SubNavbar = function (_a) {
    var items = _a.items;
    return (React__default["default"].createElement(StyledCard, { key: 1 },
        React__default["default"].createElement(NavHolder, null, items.map(function (item) {
            return (React__default["default"].createElement(MenuLink, { href: item.href },
                React__default["default"].createElement(StyledText, null, item.label)));
        })),
        React__default["default"].createElement(NavImage, null,
            React__default["default"].createElement(Image, null))));
};
var templateObject_1$a, templateObject_2$5, templateObject_3$4, templateObject_4$2;

var MenuButton = styled__default["default"](Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n  :focus {\n    box-shadow: none !important;\n  }\n  :hover {\n    background: none !important;\n  }\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n  :focus {\n    box-shadow: none !important;\n  }\n  :hover {\n    background: none !important;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$9;

var rainbowAnimation = styled.keyframes(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default["default"].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  font-weight: 600;\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.text : "transparent");
});
var MenuEntry = styled__default["default"].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  border-bottom: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    font-weight: 600;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  border-bottom: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    font-weight: 600;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.white3 : "transparent");
}, function (_a) {
    var secondary = _a.secondary; _a.theme;
    return (secondary ? "transparent" : "1px solid rgba(133, 133, 133, 0.1)");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px ".concat(theme.colors.primary) : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$8, templateObject_2$4, templateObject_3$3;

var Container$1 = styled__default["default"].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default["default"].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? "".concat(maxHeight, "px") : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default["default"].createElement(Container$1, null,
        React__default["default"].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default["default"].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default["default"].createElement(Icon$1n, null) : React__default["default"].createElement(Icon$1p, null)),
        React__default["default"].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default["default"].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
Accordion.defaultProps = {
    initialOpenState: false,
    className: "",
};
var templateObject_1$7, templateObject_2$3;

var Wrapper$1 = styled__default["default"].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: 80px;\n  top: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 100px;\n  max-height: ", ";\n  background-color: ", ";\n  width: ", ";\n  border-right: ", ";\n  z-index: 11;\n  transition: max-height 0.3s linear;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", " {\n    padding-bottom: 0px;\n  }\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: 80px;\n  top: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 100px;\n  max-height: ", ";\n  background-color: ", ";\n  width: ", ";\n  border-right: ", ";\n  z-index: 11;\n  transition: max-height 0.3s linear;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", " {\n    padding-bottom: 0px;\n  }\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "800px" : "0px");
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return "".concat(isPushed ? "100" : "0", "%");
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return "".concat(isPushed ? "100" : "0", "%");
});
var MobileNavMenu = function (_a) {
    var isPushed = _a.isPushed, showMenu = _a.showMenu, links = _a.links, isMobile = _a.isMobile, pushNav = _a.pushNav, chainId = _a.chainId, switchNetwork = _a.switchNetwork;
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    var Icons = IconModule;
    var location = reactRouterDom.useLocation();
    console.log(location);
    return (React__default["default"].createElement(Wrapper$1, { isPushed: isPushed, showMenu: showMenu },
        links.map(function (entry) {
            Icons[entry.icon];
            var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
            if (entry.items) {
                return (React__default["default"].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                    entry.items.map(function (item) { return (React__default["default"].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                        React__default["default"].createElement(MenuLink, { href: item.href }, item.label))); })));
            }
            return (React__default["default"].createElement(MenuEntry, { key: entry.label, className: calloutClass, isActive: entry.href === location.pathname },
                React__default["default"].createElement(MenuLink, { href: entry === null || entry === void 0 ? void 0 : entry.href },
                    React__default["default"].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
        }),
        React__default["default"].createElement(Flex, { justifyContent: "center", alignItems: "center", style: { width: "100%", height: "100px" } },
            React__default["default"].createElement(NetworkButton, { chainId: chainId, switchNetwork: switchNetwork }))));
};
var templateObject_1$6;

var Wrapper = styled__default["default"].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var NavItem = styled__default["default"].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 2px 7.5px 0px 7.5px;\n  box-shadow: ", ";\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0px 22.5px 0px 22.5px;\n  color: ", ";\n  :hover {\n    box-shadow: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 2px 7.5px 0px 7.5px;\n  box-shadow: ", ";\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0px 22.5px 0px 22.5px;\n  color: ", ";\n  :hover {\n    box-shadow: ", ";\n  }\n"])), function (props) { return props.active && "0px 2px 0px ".concat(props.theme.colors.text); }, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return "0px 2px 0px ".concat(theme.colors.text);
});
var StyledNav = styled__default["default"].nav(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n  cursor: pointer;\n  padding-left: 20px;\n  ", " {\n    padding-left: 25px;\n    padding-right: 16px;\n  }\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n  cursor: pointer;\n  padding-left: 20px;\n  ", " {\n    padding-left: 25px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu, isMobile = _a.isMobile, isPushed = _a.isPushed;
    return (showMenu || (isMobile && isPushed) ? 0 : "-".concat(MENU_HEIGHT, "px"));
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
styled__default["default"].nav(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n"])), MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default["default"].div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default["default"].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  width: 100%;\n  height: 100%;\n  font-weight: 600;\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  width: 100%;\n  height: 100%;\n  font-weight: 600;\n"])), function (_a) {
    var showMenu = _a.showMenu, isMobile = _a.isMobile, isPushed = _a.isPushed;
    return (showMenu || (isMobile && isPushed) ? "".concat(MENU_HEIGHT, "px") : 0);
});
styled__default["default"](Overlay)(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Navbar = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang; _a.currentLang; var bananaPriceUsd = _a.bananaPriceUsd, links = _a.links, profile = _a.profile, children = _a.children, chainId = _a.chainId, switchNetwork = _a.switchNetwork;
    var isXxl = useMatchBreakpoints().isXxl;
    var isMobile = isXxl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    var _e = React.useState(""), hoveredItem = _e[0], setHoveredItem = _e[1];
    var location = reactRouterDom.useLocation();
    var currentPath = location.pathname;
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default["default"](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    var handleClick = isMobile ? function () { return setIsPushed(false); } : undefined;
    var handleHover = function (label) {
        setHoveredItem(label);
    };
    return (React__default["default"].createElement(Wrapper, null,
        React__default["default"].createElement(StyledNav, { showMenu: showMenu, isMobile: isMobile, isPushed: isPushed },
            React__default["default"].createElement(Logo, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            !isMobile && (React__default["default"].createElement(Flex, { ml: "15px", justifyContent: "space-between", style: { height: "100%" } }, links.map(function (link) {
                var _a, _b;
                return (React__default["default"].createElement("div", { style: { position: "relative" }, onMouseOver: function () { return handleHover(link.label); }, onFocus: function () { return handleHover(link.label); }, onMouseLeave: function () { return handleHover(""); } },
                    link.href ? (React__default["default"].createElement(MenuLink$1, { href: link.href },
                        React__default["default"].createElement(NavItem, { key: link.href, active: link.href === currentPath ||
                                ((_a = link.items) === null || _a === void 0 ? void 0 : _a.find(function (item) { return item.href === currentPath; })) !== undefined, onClick: handleClick }, link.label))) : (React__default["default"].createElement(NavItem, { key: link.href, active: link.href === currentPath || ((_b = link.items) === null || _b === void 0 ? void 0 : _b.find(function (item) { return item.href === currentPath; })) !== undefined, onClick: handleClick }, link.label)),
                    link.label === hoveredItem && (link === null || link === void 0 ? void 0 : link.items) && React__default["default"].createElement(SubNavbar, { items: link.items }, "s")));
            }))),
            React__default["default"].createElement(Flex, { style: { position: "absolute", right: "30px" } },
                !isMobile && (React__default["default"].createElement(Flex, { marginRight: "10px" },
                    React__default["default"].createElement(NetworkButton, { chainId: chainId, switchNetwork: switchNetwork }))),
                React__default["default"].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default["default"].createElement(Avatar, { profile: profile }),
                isMobile && (React__default["default"].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: function () { return setIsPushed(!isPushed); }, mt: "5px" }, isPushed ? (React__default["default"].createElement(Icon$z, { width: "24px", color: "text" })) : (React__default["default"].createElement(Icon$A, { width: "24px", color: "text" })))))),
        React__default["default"].createElement(BodyWrapper, null,
            isMobile && (React__default["default"].createElement(MobileNavMenu, { isPushed: isPushed, showMenu: showMenu, links: links, pushNav: setIsPushed, isMobile: isMobile, setLang: setLang, toggleTheme: toggleTheme, langs: langs, chainId: chainId, switchNetwork: switchNetwork, isDark: isDark, currentLang: "en" })),
            React__default["default"].createElement(Inner, { isPushed: isPushed, showMenu: showMenu, isMobile: isMobile }, children)),
        React__default["default"].createElement(Footer, { chainId: chainId, toggleTheme: toggleTheme, bananaPriceUsd: bananaPriceUsd, isDark: isDark, switchNetwork: switchNetwork })));
};
var templateObject_1$5, templateObject_2$2, templateObject_3$2, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default["default"].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default["default"].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$1.INFO,
    _a[types.SUCCESS] = variants$1.SUCCESS,
    _a[types.DANGER] = variants$1.DANGER,
    _a[types.WARNING] = variants$1.WARNING,
    _a);
var StyledToast = styled__default["default"].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default["default"].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default["default"].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default["default"].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default["default"].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$4;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default["default"].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default["default"].createElement(StyledToastContainer, null,
        React__default["default"].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default["default"].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: "".concat(top, "px"), zIndex: zIndex } }));
        }))));
};
var templateObject_1$3;

var StepCon = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 100%;\n  margin-top: 30px;\n  ", " {\n    width: 48%;\n  }\n"], ["\n  width: 100%;\n  margin-top: 30px;\n  ", " {\n    width: 48%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Number = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #ffb300;\n  ", " {\n    font-size: 12px;\n  }\n"], ["\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #ffb300;\n  ", " {\n    font-size: 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var HeadText = styled__default["default"].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  ", " {\n    font-size: 22px;\n    margin-top: 5px;\n  }\n"], ["\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  ", " {\n    font-size: 22px;\n    margin-top: 5px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Step = function (_a) {
    var stepNumber = _a.stepNumber, headerText = _a.headerText, thirdText = _a.thirdText;
    return (React__default["default"].createElement(StepCon, { id: stepNumber.slice(-1) },
        React__default["default"].createElement(Number, null, stepNumber),
        React__default["default"].createElement(HeadText, null, headerText),
        thirdText));
};
var templateObject_1$2, templateObject_2$1, templateObject_3$1;

var Container = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 5;
});
var StyledModal = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  justify-content: space-between;\n  background: ", ";\n  color: ", ";\n  z-index: ", ";\n  ", " {\n    width: 80%;\n    max-width: 900px;\n    height: 500px;\n    max-height: 500px;\n    border-radius: 20px;\n    margin: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  justify-content: space-between;\n  background: ", ";\n  color: ", ";\n  z-index: ", ";\n  ", " {\n    width: 80%;\n    max-width: 900px;\n    height: 500px;\n    max-height: 500px;\n    border-radius: 20px;\n    margin: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#212121" : "#FFF");
}, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#FFFFFF" : theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ModalHeader = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column-reverse;\n  .left-header-con {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n\n    align-self: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column-reverse;\n  .left-header-con {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n\n    align-self: center;\n  }\n"])));
var LeftHeader = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  ", " {\n    margin-top: 1.5em;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  ", " {\n    margin-top: 1.5em;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Title = styled__default["default"].h5(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  text-align: center;\n  line-height: 24px;\n  ", " {\n    font-size: 22px;\n    line-height: 30px;\n  }\n  ", " {\n    font-size: 30px;\n    line-height: 30px;\n  }\n"], ["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  text-align: center;\n  line-height: 24px;\n  ", " {\n    font-size: 22px;\n    line-height: 30px;\n  }\n  ", " {\n    font-size: 30px;\n    line-height: 30px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Description = styled__default["default"].p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 1em;\n  font-weight: 500;\n  text-align: center;\n  font-size: 12px;\n  line-height: 18px;\n  ", " {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"], ["\n  margin-top: 1em;\n  font-weight: 500;\n  text-align: center;\n  font-size: 12px;\n  line-height: 18px;\n  ", " {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var CloseButton = styled__default["default"].button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 70px;\n  height: 70px;\n  align-self: flex-end;\n  border: none;\n  background: transparent;\n  font-weight: bold;\n  &:hover {\n    cursor: pointer;\n  }\n  ", " {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n"], ["\n  width: 70px;\n  height: 70px;\n  align-self: flex-end;\n  border: none;\n  background: transparent;\n  font-weight: bold;\n  &:hover {\n    cursor: pointer;\n  }\n  ", " {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ModalBody = styled__default["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  height: 60%;\n  overflow-y: scroll;\n  padding-bottom: 20px;\n  padding-top: 50px;\n  ", " {\n    height: 100%;\n    overflow-y: unset;\n    margin-top: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-bottom: 10px;\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  height: 60%;\n  overflow-y: scroll;\n  padding-bottom: 20px;\n  padding-top: 50px;\n  ", " {\n    height: 100%;\n    overflow-y: unset;\n    margin-top: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-bottom: 10px;\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Action = styled__default["default"].p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  ", " {\n    font-size: 16px;\n    margin-top: 0.5em;\n  }\n  button {\n    &.action-link {\n      color: #ffb300;\n      text-decoration: underline;\n      font-size: 14px;\n      border: none;\n      background: transparent;\n      padding: 0;\n      font-weight: 500;\n\n      ", " {\n        font-size: 16px;\n      }\n\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"], ["\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  ", " {\n    font-size: 16px;\n    margin-top: 0.5em;\n  }\n  button {\n    &.action-link {\n      color: #ffb300;\n      text-decoration: underline;\n      font-size: 14px;\n      border: none;\n      background: transparent;\n      padding: 0;\n      font-weight: 500;\n\n      ", " {\n        font-size: 16px;\n      }\n\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Upstep = styled__default["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 90%;\n  ", " {\n    flex-direction: row;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 90%;\n  ", " {\n    flex-direction: row;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var FarmApeWrapper = styled__default["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    width: 100px;\n    height: 150px;\n    margin-top: -30px;\n    margin-left: 15px;\n    display: unset;\n  }\n"], ["\n  display: none;\n  ", " {\n    width: 100px;\n    height: 150px;\n    margin-top: -30px;\n    margin-left: 15px;\n    display: unset;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ModalFooter = styled__default["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  a {\n    color: #ffb300;\n    text-decoration: underline;\n    font-size: 14px;\n    border: none;\n    background: transparent;\n    padding: 0;\n    font-weight: 500;\n    text-transform: uppercase;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  button {\n    text-transform: uppercase;\n    margin-top: 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  a {\n    color: #ffb300;\n    text-decoration: underline;\n    font-size: 14px;\n    border: none;\n    background: transparent;\n    padding: 0;\n    font-weight: 500;\n    text-transform: uppercase;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  button {\n    text-transform: uppercase;\n    margin-top: 10px;\n  }\n"])));
var Read = styled__default["default"].a(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: ", ";\n\n  ", " {\n    display: none;\n  }\n"], ["\n  display: ", ";\n\n  ", " {\n    display: none;\n  }\n"])), function (props) { return (props.readMore ? "none" : "unset"); }, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Transparent = styled__default["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\n  width: 100%;\n  height: 30px;\n  display: none;\n  ", " {\n    display: none;\n  }\n"], ["\n  background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\n  width: 100%;\n  height: 30px;\n  display: none;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var MarketingModal = function (_a) {
    var onDismiss = _a.onDismiss, title = _a.title, description = _a.description, goToFarms = _a.goToFarms, connectWallet = _a.connectWallet, goToLiquidity = _a.goToLiquidity, startEarning = _a.startEarning;
    var theme = styled.useTheme();
    var _b = React.useState(false), readMore = _b[0], setReadMore = _b[1];
    var changeReadMore = function () { return setReadMore(!readMore); };
    return (React__default["default"].createElement(Container, null,
        React__default["default"].createElement(StyledModal, null,
            React__default["default"].createElement(ModalHeader, null,
                React__default["default"].createElement("div", { className: "left-header-con" },
                    React__default["default"].createElement(LeftHeader, null,
                        React__default["default"].createElement(Title, null, title),
                        React__default["default"].createElement(Description, null, description)),
                    React__default["default"].createElement(FarmApeWrapper, null,
                        React__default["default"].createElement(FarmApe, null))),
                React__default["default"].createElement(CloseButton, { onClick: onDismiss },
                    React__default["default"].createElement(Icon$15, { color: theme.isDark ? "#FFF" : "primary", width: "30px", fontWeight: "bold" }))),
            React__default["default"].createElement(ModalBody, null,
                React__default["default"].createElement(Upstep, null,
                    React__default["default"].createElement(Step, { stepNumber: "Step 1", headerText: "Connect Your Wallet", thirdText: React__default["default"].createElement(Action, null,
                            React__default["default"].createElement("button", { type: "button", onClick: connectWallet, className: "action-link" }, "Click here"),
                            " ",
                            "to connect your wallet to ApeSwap.") }),
                    React__default["default"].createElement(Step, { stepNumber: "Step 2", headerText: "Add Liquidity", thirdText: React__default["default"].createElement(Action, null,
                            "Go to Trade >",
                            " ",
                            React__default["default"].createElement("button", { type: "button", onClick: goToLiquidity, className: "action-link" }, "Liquidity"),
                            " ",
                            "and obtain the LP(s) you want to Stake.") })),
                React__default["default"].createElement(Upstep, null,
                    React__default["default"].createElement(Step, { stepNumber: "Step 3", headerText: "Stake", thirdText: React__default["default"].createElement(Action, null,
                            "Head over to",
                            " ",
                            React__default["default"].createElement("button", { type: "button", onClick: goToFarms, className: "action-link" }, "Farms"),
                            ", Enable your favorites and start Staking.") }),
                    React__default["default"].createElement(Step, { stepNumber: "Step 4", headerText: "Collect", thirdText: React__default["default"].createElement(Action, null, "Don\u2019t forget to Harvest your earnings periodically. You can reinvest them or cash out at any time!") })),
                React__default["default"].createElement(Transparent, null)),
            React__default["default"].createElement(ModalFooter, null,
                React__default["default"].createElement(Read, { href: "#4", onClick: changeReadMore, readMore: readMore }, "Continue reading"),
                React__default["default"].createElement(Button, { variant: "yellow", onClick: startEarning }, "Start Earning")))));
};
MarketingModal.defaultProps = {
    onDismiss: function () { return null; },
    goToFarms: function () { return null; },
    connectWallet: function () { return null; },
    goToLiquidity: function () { return null; },
    startEarning: function () { return null; },
};
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Poppins', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Poppins', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

exports.AddIcon = Icon$1u;
exports.Alert = Alert;
exports.ApeIcon = Icon$1t;
exports.ApeSwapIcon = Icon$W;
exports.ApeSwapRoundIcon = Icon$V;
exports.ArrowBackIcon = Icon$1s;
exports.ArrowDownIcon = Icon$1r;
exports.ArrowDropDownIcon = Icon$1q;
exports.ArrowDropDownSmallIcon = Icon$1p;
exports.ArrowDropUpIcon = Icon$1o;
exports.ArrowDropUpSmallIcon = Icon$1n;
exports.ArrowForwardIcon = Icon$1m;
exports.AutoRenewIcon = Icon$1l;
exports.BackgroundImage = BackgroundImage;
exports.BananaGoldenIcon = Icon$1j;
exports.BananaGoldenPairIcon = Icon$1g;
exports.BananaIcon = Icon$1k;
exports.BananaPairIcon = Icon$1h;
exports.BaseLayout = GridLayout$1;
exports.BinanceIcon = Icon$1f;
exports.BlockIcon = Icon$1A;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$1e;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.ButtonSquare = ButtonSquare;
exports.CalculateIcon = Icon$1c;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$1d;
exports.CardsLayout = GridLayout;
exports.Checkbox = Checkbox;
exports.Checkmark2Icon = Icon$1a;
exports.CheckmarkCircleIcon = Icon$1C;
exports.CheckmarkIcon = Icon$1b;
exports.ChevronDownIcon = Icon$19;
exports.ChevronLeftIcon = Icon$18;
exports.ChevronRightIcon = Icon$17;
exports.ChevronUpIcon = Icon$16;
exports.CloseIcon = Icon$15;
exports.CogIcon = Icon$14;
exports.CommunityIcon = Icon$13;
exports.CopyIcon = Icon$12;
exports.DiscordIcon = Icon$G;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1B;
exports.FarmApe = FarmApe;
exports.Flex = Flex;
exports.Footer = Footer;
exports.GovernanceIcon = Icon$1x;
exports.Heading = Heading;
exports.HelpIcon = Icon$11;
exports.IaoIcon = Icon$1v;
exports.IconButton = IconButton;
exports.IconButtonSquare = IconButtonSquare;
exports.Image = Image$1;
exports.InfoIcon = Icon$1z;
exports.Input = Input$1;
exports.InstagramIcon = Icon$D;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$10;
exports.LogoIcon = Icon$$;
exports.LogoRoundIcon = Icon$_;
exports.MarketingModal = MarketingModal;
exports.MediumIcon = Icon$E;
exports.MetamaskIcon = Icon$Z;
exports.MinusIcon = Icon$Y;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.MonkeyLight = Icon$1i;
exports.Navbar = Navbar;
exports.OpenNewIcon = Icon$X;
exports.PFarmingIcon = Icon$1y;
exports.PrizeIcon = Icon$U;
exports.Progress = Progress;
exports.ProgressBunny = Icon$R;
exports.Radio = Radio;
exports.RedditIcon = Icon$F;
exports.RemoveIcon = Icon$T;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$N;
exports.SearchIcon2 = Icon$M;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Step = Step;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$L;
exports.SyncAltIcon = Icon$K;
exports.Tag = Tag;
exports.TelegramIcon = Icon$H;
exports.Text = Text;
exports.Ticket = Icon$P;
exports.TicketRound = Icon$O;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TwitterIcon = Icon$I;
exports.VerifiedIcon = Icon$S;
exports.WarningIcon = Icon$J;
exports.Won = Icon$Q;
exports.XPoolsIcon = Icon$1w;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.localStorageKey = localStorageKey;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button_default,
  Heading: () => Heading_default,
  Link: () => Link_default,
  Paragraph: () => Paragraph_default
});
module.exports = __toCommonJS(src_exports);

// src/components/atoms/Button/Button.styled.ts
var import_styled_components = __toESM(require("styled-components"));

// src/theme/colors.ts
var colors = {
  primary: "#007bff",
  secondary: "#6c757d"
};

// src/components/atoms/Button/Button.styled.ts
var ButtonBase = import_styled_components.default.button`
  background-color: ${colors.primary};
  border: none;
  border-radius: 4px;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &.button--primary {
    background-color: ${colors.primary};
  }

  &.button--secondary {
    background-color: ${colors.secondary};
  }

  &.button--large {
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
  }

  &.button--small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
`;

// src/components/atoms/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, { children, variant = "primary", size = "medium" } = _b, props = __objRest(_b, ["children", "variant", "size"]);
  const className = `button button--${variant} button--${size}`;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonBase, __spreadProps(__spreadValues({ className }, props), { children }));
};
var Button_default = Button;

// src/components/atoms/Link/Link.tsx
var import_react_router_dom = require("react-router-dom");

// src/components/atoms/Link/Link.styled.ts
var import_styled_components2 = __toESM(require("styled-components"));
var StyledLink = import_styled_components2.default.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// src/components/atoms/Link/Link.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Link = (_a) => {
  var _b = _a, { href, children } = _b, props = __objRest(_b, ["href", "children"]);
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StyledLink, __spreadProps(__spreadValues({ href, target: "_blank", rel: "noopener noreferrer" }, props), { children }));
  }
  const _a2 = props, { to } = _a2, restProps = __objRest(_a2, ["to"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, __spreadProps(__spreadValues({ to: href }, restProps), { children }));
};
var Link_default = Link;

// src/components/atoms/Typography/Heading.styled.ts
var import_styled_components3 = __toESM(require("styled-components"));
var Heading1 = import_styled_components3.default.h1`
  font-size: 2.5rem;
  color: ${colors.primary};
`;
var Heading2 = import_styled_components3.default.h2`
  font-size: 2rem;
  color: ${colors.primary};
`;
var Heading3 = import_styled_components3.default.h3`
  font-size: 1.75rem;
  color: ${colors.primary};
`;
var Heading4 = import_styled_components3.default.h4`
  font-size: 1.5rem;
  color: ${colors.primary};
`;
var Heading5 = import_styled_components3.default.h5`
  font-size: 1.25rem;
  color: ${colors.primary};
`;
var Heading6 = import_styled_components3.default.h6`
  font-size: 1rem;
  color: ${colors.primary};
`;

// src/components/atoms/Typography/Heading.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Heading = (_a) => {
  var _b = _a, { level, children } = _b, props = __objRest(_b, ["level", "children"]);
  switch (level) {
    case 1:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading1, __spreadProps(__spreadValues({}, props), { children }));
    case 2:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading2, __spreadProps(__spreadValues({}, props), { children }));
    case 3:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading3, __spreadProps(__spreadValues({}, props), { children }));
    case 4:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading4, __spreadProps(__spreadValues({}, props), { children }));
    case 5:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading5, __spreadProps(__spreadValues({}, props), { children }));
    case 6:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading6, __spreadProps(__spreadValues({}, props), { children }));
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading1, __spreadProps(__spreadValues({}, props), { children }));
  }
};
var Heading_default = Heading;

// src/components/atoms/Typography/Paragraph.styled.ts
var import_styled_components4 = __toESM(require("styled-components"));
var ParagraphBase = import_styled_components4.default.p`
  font-size: 1rem;
  color: ${colors.secondary};
`;

// src/components/atoms/Typography/Paragraph.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Paragraph = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ParagraphBase, __spreadProps(__spreadValues({}, props), { children }));
};
var Paragraph_default = Paragraph;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Heading,
  Link,
  Paragraph
});

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/components/atoms/Button/Button.styled.ts
import styled from "styled-components";

// src/theme/colors.ts
var colors = {
  primary: "#007bff",
  secondary: "#6c757d"
};

// src/components/atoms/Button/Button.styled.ts
var ButtonBase = styled.button`
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
import { jsx } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, { children, variant = "primary", size = "medium" } = _b, props = __objRest(_b, ["children", "variant", "size"]);
  const className = `button button--${variant} button--${size}`;
  return /* @__PURE__ */ jsx(ButtonBase, __spreadProps(__spreadValues({ className }, props), { children }));
};
var Button_default = Button;

// src/components/atoms/Link/Link.tsx
import { Link as RouterLink } from "react-router-dom";

// src/components/atoms/Link/Link.styled.ts
import styled2 from "styled-components";
var StyledLink = styled2.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// src/components/atoms/Link/Link.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Link = (_a) => {
  var _b = _a, { href, children } = _b, props = __objRest(_b, ["href", "children"]);
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return /* @__PURE__ */ jsx2(StyledLink, __spreadProps(__spreadValues({ href, target: "_blank", rel: "noopener noreferrer" }, props), { children }));
  }
  const _a2 = props, { to } = _a2, restProps = __objRest(_a2, ["to"]);
  return /* @__PURE__ */ jsx2(RouterLink, __spreadProps(__spreadValues({ to: href }, restProps), { children }));
};
var Link_default = Link;

// src/components/atoms/Typography/Heading.styled.ts
import styled3 from "styled-components";
var Heading1 = styled3.h1`
  font-size: 2.5rem;
  color: ${colors.primary};
`;
var Heading2 = styled3.h2`
  font-size: 2rem;
  color: ${colors.primary};
`;
var Heading3 = styled3.h3`
  font-size: 1.75rem;
  color: ${colors.primary};
`;
var Heading4 = styled3.h4`
  font-size: 1.5rem;
  color: ${colors.primary};
`;
var Heading5 = styled3.h5`
  font-size: 1.25rem;
  color: ${colors.primary};
`;
var Heading6 = styled3.h6`
  font-size: 1rem;
  color: ${colors.primary};
`;

// src/components/atoms/Typography/Heading.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Heading = (_a) => {
  var _b = _a, { level, children } = _b, props = __objRest(_b, ["level", "children"]);
  switch (level) {
    case 1:
      return /* @__PURE__ */ jsx3(Heading1, __spreadProps(__spreadValues({}, props), { children }));
    case 2:
      return /* @__PURE__ */ jsx3(Heading2, __spreadProps(__spreadValues({}, props), { children }));
    case 3:
      return /* @__PURE__ */ jsx3(Heading3, __spreadProps(__spreadValues({}, props), { children }));
    case 4:
      return /* @__PURE__ */ jsx3(Heading4, __spreadProps(__spreadValues({}, props), { children }));
    case 5:
      return /* @__PURE__ */ jsx3(Heading5, __spreadProps(__spreadValues({}, props), { children }));
    case 6:
      return /* @__PURE__ */ jsx3(Heading6, __spreadProps(__spreadValues({}, props), { children }));
    default:
      return /* @__PURE__ */ jsx3(Heading1, __spreadProps(__spreadValues({}, props), { children }));
  }
};
var Heading_default = Heading;

// src/components/atoms/Typography/Paragraph.styled.ts
import styled4 from "styled-components";
var ParagraphBase = styled4.p`
  font-size: 1rem;
  color: ${colors.secondary};
`;

// src/components/atoms/Typography/Paragraph.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Paragraph = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx4(ParagraphBase, __spreadProps(__spreadValues({}, props), { children }));
};
var Paragraph_default = Paragraph;
export {
  Button_default as Button,
  Heading_default as Heading,
  Link_default as Link,
  Paragraph_default as Paragraph
};

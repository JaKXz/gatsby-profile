import React from "react";
import { any } from "prop-types";

export default function Anchor({ children, ...props }) {
  return (
    <a rel="noreferrer noopener" target="_blank" {...props}>
      {children}
    </a>
  );
}

Anchor.propTypes = {
  children: any,
};

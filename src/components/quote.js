import React from "react";
import cx from "classnames";

export default function Quote({ className, children, ...props }) {
  return (
    <blockquote
      className={cx(
        "pl-4",
        "font-serif",
        "text-justify",
        "border-l-4",
        "border-gray-900",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

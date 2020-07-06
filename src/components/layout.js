import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default function Layout({ children, className }) {
  return (
    <div
      className={cx(
        "flex",
        "flex-col",
        "min-h-screen",
        "font-sans",
        "text-gray-900",
        className,
      )}
    >
      <main
        className={cx(
          "flex",
          "flex-1",
          "w-full",
          "max-w-3xl",
          "px-4",
          "py-8",
          "mx-auto",
        )}
      >
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

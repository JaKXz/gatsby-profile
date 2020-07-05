import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Anchor from "./anchor";

export default function Layout({ children }) {
  return (
    <div
      className={cx(
        "flex",
        "flex-col",
        "min-h-screen",
        "font-sans",
        "text-gray-900",
      )}
    >
      <main
        className={cx(
          "flex",
          "flex-1",
          "w-full",
          "max-w-4xl",
          "px-4",
          "py-8",
          "mx-auto",
          "md:px-8",
          "md:py-16",
        )}
      >
        {children}
      </main>

      <footer>
        <nav
          className={cx(
            "flex",
            "flex-row-reverse",
            "justify-between",
            "max-w-4xl",
            "p-4",
            "mx-auto",
            "text-sm",
            "md:p-8",
          )}
        >
          <Anchor
            className={cx("font-bold", "no-underline")}
            href="https://github.com/jakxz/jakxz.github.io"
          >
            GitHub
          </Anchor>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

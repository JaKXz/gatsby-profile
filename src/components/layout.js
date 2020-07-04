import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Header from "./header";
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
      <Header />

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

      <footer className={cx("bg-blue-700")}>
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
          <p>
            <Anchor
              className={cx("font-bold", "text-white", "no-underline")}
              href="https://github.com/jakxz/jakxz.github.io"
            >
              GitHub
            </Anchor>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

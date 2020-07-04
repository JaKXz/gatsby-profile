import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import cx from "classnames";

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-teal-700">
      <div
        className={cx(
          "flex",
          "flex-wrap",
          "items-center",
          "justify-between",
          "max-w-4xl",
          "p-4",
          "mx-auto",
          "md:p-8",
        )}
      >
        <Link to="/">
          <h1
            className={cx("flex", "items-center", "text-white", "no-underline")}
          >
            <span className={cx("text-xl", "font-bold", "tracking-tight")}>
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className={cx(
            "flex",
            "items-center",
            "block",
            "px-3",
            "py-2",
            "text-white",
            "border",
            "border-white",
            "rounded",
            "md:hidden",
          )}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={cx(
            { block: isExpanded, hidden: !isExpanded },
            "md:block",
            "md:flex",
            "md:items-center",
            "w-full",
            "md:w-auto",
          )}
        >
          {[
            {
              to: `/about`,
              children: `About`,
            },
            {
              to: `/contact`,
              children: `Contact`,
            },
          ].map((props) => (
            <Link
              className={cx(
                "block",
                "mt-4",
                "text-white",
                "no-underline",
                "md:inline-block",
                "md:mt-0",
                "md:ml-6",
              )}
              // eslint-disable-next-line react/prop-types
              key={props.children}
              {...props}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

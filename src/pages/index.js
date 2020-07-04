import React from "react";
import cx from "classnames";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <section
        className={cx(
          "flex",
          "flex-col",
          "flex-grow",
          "text-center",
          "justify-center",
        )}
      >
        <h1
          className={cx(
            "inline-block",
            "p-3",
            "mb-4",
            "text-3xl",
            "font-bold",
            "bg-yellow-400",
          )}
        >
          Hey there! Thanks for stopping by.
        </h1>

        <p className={cx("leading-loose")}>
          Here&apos;s some stuff you can check out:
        </p>
      </section>
    </Layout>
  );
}

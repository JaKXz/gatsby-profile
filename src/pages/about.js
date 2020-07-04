import React from "react";
import cx from "classnames";
import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section
        className={cx("flex", "flex-col", "items-center", "md:flex-row")}
      >
        <div className={cx("md:w-2/3", "md:mr-8")}>
          <blockquote
            className={cx(
              "pl-4",
              "font-serif",
              "leading-loose",
              "text-justify",
              "border-l-4",
              "border-gray-900",
            )}
          >
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world.
          </blockquote>

          <cite
            className={cx(
              "block",
              "mt-4",
              "text-xs",
              "font-bold",
              "text-right",
              "uppercase",
            )}
          >
            – Thomas Nagel
          </cite>
        </div>

        <figure className={cx("w-2/3", "md:w-1/3")}>
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>
      </section>
    </Layout>
  );
}

import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-background-image";
import cx from "classnames";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage({ data }) {
  return (
    <Layout className={cx("md:bg-dark-to-light-blue")}>
      <SEO title="Home" />

      <section
        className={cx(
          "flex",
          "flex-col",
          "flex-grow",
          "justify-center",
          "font-normal",
          "md:shadow",
          "md:border-solid",
          "md:border-1",
          "md:border-gray-600",
        )}
      >
        <Img
          style={{ minHeight: "35vh" }}
          className={cx("h-full", "before:rounded-t")}
          fluid={data.file.childImageSharp.fluid}
          alt="headshot"
        >
          <div className={cx("h-full", "flex", "flex-col", "pb-2", "md:pb-4")}>
            <div
              className={cx(
                "mt-auto",
                "text-white",
                "font-bold",
                "text-center",
              )}
            >
              <h2 className={cx("text-2xl", "tracking-wider")}>JASON KURIAN</h2>
              <p className={cx("text-xl")}>
                UX & fullstack developer, lifelong student, and musician
              </p>
            </div>
          </div>
        </Img>
        <div
          className={cx(
            "pt-4",
            "sm:p-8",
            "lg:p-12",
            "xl:p-16",
            "bg-white",
            "md:rounded-b",
          )}
        >
          <p>
            I strive to create great software driven by iterative code design,
            centred around wonderful user experiences. This story is an
            effective philosophical metaphor for how I feel about writing code
            and building products.
            <br />
            <br />
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
              &quot;Everyone must leave something behind when he dies,&quot; my
              grandfather said. &quot;A child or a book or a painting or a house
              or a wall built or a pair of shoes made. Or a garden planted.
              Something your hand touched some way so your soul has somewhere to
              go when you die, and when people look at that tree or that flower
              you planted, you’re there. It doesn’t matter what you do, he said,
              so long as you change something from the way it was before you
              touched it into something that’s like you after you take your
              hands away. The difference between the man who just cuts lawns and
              a real gardener is in the touching,&quot; he said.
              <br />
              The lawn-cutter might just as well not have been there at all; the
              gardener will be there a lifetime.
              <br />
              <br />
              <span className={cx("font-semibold")}>
                Being the lawn cutter is easy... no?
              </span>
            </blockquote>
          </p>
          <p className={cx("text-right")}> -- Anonymous</p>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

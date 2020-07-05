import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import cx from "classnames";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />

      <section
        className={cx(
          "flex",
          "flex-col",
          "flex-grow",
          "justify-center",
          "font-normal",
          "md:rounded",
          "md:shadow",
          "md:border-solid",
          "md:border-1",
          "md:border-gray-600",
          "md:px-24",
        )}
      >
        <Img
          className={cx("h-32", "w-32", "rounded-full", "self-center")}
          fluid={data.file.childImageSharp.fluid}
          alt="headshot"
        />
        <p>
          I strive to create great software driven by iterative code design,
          centred around wonderful user experiences. This story is an effective
          philosophical metaphor for how I feel about writing code and building
          products.
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
            "Everyone must leave something behind when he dies," my grandfather
            said. "A child or a book or a painting or a house or a wall built or
            a pair of shoes made. Or a garden planted. Something your hand
            touched some way so your soul has somewhere to go when you die, and
            when people look at that tree or that flower you planted, you’re
            there. It doesn’t matter what you do, he said, so long as you change
            something from the way it was before you touched it into something
            that’s like you after you take your hands away. The difference
            between the man who just cuts lawns and a real gardener is in the
            touching", he said.
            <br />
            The lawn-cutter might just as well not have been there at all; the
            gardener will be there a lifetime.
            <br />
            <br />
            <span className={cx("font-semibold")}>
              Being the lawn cutter is easy... no?
            </span>
          </blockquote>
          <p className={cx("text-right")}> -- Anonymous</p>
        </p>
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

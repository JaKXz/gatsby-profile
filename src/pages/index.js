import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImg from "gatsby-background-image";
import cx from "classnames";
import { isPhone } from "../utils/mobile-detect";
import {
  AngelList,
  GitHub,
  LinkedIn,
  SoundCloud,
  StackExchange,
  StackOverflow,
  Twitter,
} from "../images/logos";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Anchor from "../components/anchor";
import Title from "../components/title";
import SVG from "../components/svg";

export default function IndexPage({ data }) {
  return (
    <Layout className={cx("md:bg-dark-to-light-blue")}>
      <SEO title="Home" />

      <section
        className={cx("flex", "flex-col", "justify-center", "font-normal")}
      >
        <Img
          className={cx(
            { "md:hidden": !isPhone },
            "rounded-full",
            "h-64",
            "w-64",
            "self-center",
          )}
          fluid={data.headshot.childImageSharp.fluid}
          alt="headshot"
        />
        <div
          className={cx(
            { "md:hidden": !isPhone, "md:text-white": isPhone },
            "font-semibold",
            "text-center",
          )}
        >
          <Title />
        </div>
        <div
          className={cx(
            "md:rounded",
            "md:shadow",
            "md:border-solid",
            "md:border-1",
            "md:border-gray-600",
          )}
        >
          <BackgroundImg
            style={{ minHeight: "35vh" }}
            className={cx("before:rounded-t", "rounded-t", "hidden", {
              "md:block": !isPhone,
            })}
            fluid={data.headshot.childImageSharp.fluid}
            alt="headshot"
          >
            <div
              style={{ minHeight: "35vh" }}
              className={cx(
                "h-full",
                "flex",
                "flex-col",
                "pb-2",
                "md:pb-4",
                "rounded-t",
              )}
            >
              <div
                className={cx(
                  "mt-auto",
                  "text-white",
                  "font-bold",
                  "text-center",
                )}
              >
                <Title />
              </div>
            </div>
          </BackgroundImg>
          <div
            className={cx("sm:pb-8", "md:px-32", "bg-white", "md:rounded-b")}
          >
            <div className={cx("text-center", "bg-white", "py-8")}>
              <Link
                to="/resume"
                className={cx(
                  "py-3",
                  "w-full",
                  "rounded",
                  "bg-blue-700",
                  "hover:bg-blue-600",
                  "transition-colors",
                  "ease-in-out",
                  "duration-300",
                  "text-white",
                  "text-lg",
                  "flex",
                  "justify-center",
                  "align-center",
                )}
              >
                <svg
                  className={cx("w-6", "h-6", "mr-2", "fill-current")}
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                View my portfolio
              </Link>
            </div>
            <p>
              I strive to create software backed by solid architecture and
              centred around wonderful user experiences. This story is an
              effective philosophical metaphor for how I feel about writing code
              and building products.
              <br />
              <br />
            </p>
            <blockquote
              className={cx(
                "pl-4",
                "font-serif",
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
              you planted, you’re there.
              <br />
              <br /> It doesn’t matter what you do,&quot; he said, &quot;so long
              as you change something from the way it was before you touched it
              into something that’s like you after you take your hands away. The
              difference between the man who just cuts lawns and a real gardener
              is in the touching,&quot; he said. The lawn-cutter might just as
              well not have been there at all; the gardener will be there a
              lifetime.
              <br />
              <br />
              <span className={cx("font-semibold")}>
                Being the lawn cutter is easy... no?
              </span>
            </blockquote>
            <p className={cx("text-right")}> -- Anonymous</p>
            <div
              className={cx("text-center", "my-4", "leading-loose", "text-sm")}
            >
              <h3 className={cx("tracking-widest", "text-gray-500")}>
                EDUCATION
              </h3>
              <p>
                Knowledge Integration
                <br />
                Collaborative Design Specialization
                <br />
                University of Waterloo
              </p>
            </div>
            <div className={cx("flex", "justify-evenly", "mt-8", "mb-2")}>
              {[
                {
                  title: "Visit me on Twitter",
                  href: "https://twitter.com/JaKXz92",
                  children: (
                    <SVG
                      className={cx(
                        "transition-colors",
                        "ease-in-out",
                        "duration-300",
                      )}
                      viewBox="0 0 1000 1000"
                    >
                      <Twitter />
                    </SVG>
                  ),
                },
                {
                  title: "Visit me on GitHub",
                  href: "https://github.com/JaKXz",
                  children: (
                    <SVG
                      className={cx(
                        "transition-colors",
                        "ease-in-out",
                        "duration-300",
                      )}
                      viewBox="0 0 1000 1000"
                    >
                      <GitHub />
                    </SVG>
                  ),
                },
                {
                  title: "Visit me on LinkedIn",
                  href: "https://linkedin.com/in/jgkurian",
                  children: (
                    <SVG
                      className={cx(
                        "transition-colors",
                        "ease-in-out",
                        "duration-300",
                      )}
                      viewBox="0 0 1000 1000"
                    >
                      <LinkedIn />
                    </SVG>
                  ),
                },
                {
                  title: "Visit me on AngeList",
                  href: "https://angel.co/jason-kurian",
                  children: (
                    <SVG
                      className={cx(
                        "transition-colors",
                        "ease-in-out",
                        "duration-300",
                      )}
                      viewBox="0 0 1000 1000"
                    >
                      <AngelList />
                    </SVG>
                  ),
                },
                {
                  title: "Visit me on StackOverflow",
                  href: "https://stackoverflow.com/users/1444541/jakxz",
                  children: (
                    <SVG
                      className={cx(
                        "transition-colors",
                        "ease-in-out",
                        "duration-300",
                      )}
                      viewBox="0 0 128 128"
                    >
                      <StackOverflow />
                    </SVG>
                  ),
                },
                {
                  title: "Visit me on StackExchange",
                  href: "https://stackexchange.com/users/1552454/jakxz",
                  children: (
                    <SVG
                      className={cx(
                        "transition-colors",
                        "ease-in-out",
                        "duration-300",
                      )}
                      viewBox="436 436 128 128"
                    >
                      <StackExchange />
                    </SVG>
                  ),
                },
                {
                  title: "Visit me on SoundCloud",
                  href: "https://soundcloud.com/jgkurian",
                  children: (
                    <SVG
                      className={cx(
                        "transition-colors",
                        "ease-in-out",
                        "duration-300",
                      )}
                      viewBox="0 0 1000 1000"
                    >
                      <SoundCloud />
                    </SVG>
                  ),
                },
              ].map(({ children, ...props }) => (
                <Anchor
                  className={cx(
                    "w-8",
                    "h-8",
                    "text-gray-500",
                    "hover:text-gray-400",
                  )}
                  key={props.href}
                  {...props}
                >
                  {children}
                </Anchor>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

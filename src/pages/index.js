import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImg from "gatsby-background-image";
import cx from "classnames";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Anchor from "../components/anchor";

export default function IndexPage({ data }) {
  return (
    <Layout className={cx("md:bg-dark-to-light-blue")}>
      <SEO title="Home" />

      <section
        className={cx("flex", "flex-col", "justify-center", "font-normal")}
      >
        <Img
          className={cx(
            "md:hidden",
            "rounded-full",
            "h-64",
            "w-64",
            "self-center",
          )}
          fluid={data.file.childImageSharp.fluid}
          alt="headshot"
        />
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
            className={cx("before:rounded-t", "hidden", "md:block")}
            fluid={data.file.childImageSharp.fluid}
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
                <h2 className={cx("text-2xl", "tracking-wider")}>
                  JASON KURIAN
                </h2>
                <p className={cx("text-xl")}>
                  UX & fullstack developer, lifelong student, and musician
                </p>
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
                  "py-4",
                  "w-full",
                  "rounded",
                  "bg-blue-700",
                  "inline-block",
                  "text-white",
                  "text-lg",
                )}
              >
                View my portfolio
              </Link>
            </div>
            <p className={cx("text-justify")}>
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
                    <svg
                      className={cx("fill-current")}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 1000"
                    >
                      <path d="M1000 500c0 277-223 500-500 500S0 777 0 500 223 0 500 0s500 223 500 500zM875 317c-25 11-53 18-82 22 30-17 51-45 61-79-28 17-57 28-89 35-25-28-62-45-103-45-78 0-141 63-141 142 0 10 1 22 3 32-118-5-223-62-294-149-11 22-18 46-18 72 0 50 24 93 62 118-23 0-45-7-64-18v2c0 69 49 126 114 140-12 3-24 4-37 4-9 0-19-1-27-2 18 57 71 95 132 96-48 38-108 65-176 65-11 0-23-1-33-2 62 40 138 62 217 62 262 0 404-216 404-404v-18c28-19 51-45 71-73z" />
                    </svg>
                  ),
                },
                {
                  title: "Visit me on GitHub",
                  href: "https://github.com/JaKXz",
                  children: (
                    <svg
                      className={cx("fill-current")}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 1000"
                    >
                      <path d="M1000 508c0 232-160 429-375 485V862c0-41-10-98-52-131 134-20 239-99 239-223 0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73 6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20 15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201 172v100C160 937 0 740 0 508 0 233 223 8 500 8c275 0 500 225 500 500z" />
                    </svg>
                  ),
                },
                {
                  title: "Visit me on LinkedIn",
                  href: "https://linkedin.com/in/jgkurian",
                  children: (
                    <span className="SVGInline">
                      <svg
                        className={cx("fill-current")}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 1000"
                      >
                        <path d="M1000 500c0 277-223 500-500 500S0 777 0 500 223 0 500 0s500 223 500 500zM375 260c-1-41-32-73-83-73-50 0-83 32-83 73s32 73 82 73h1c51 0 83-32 83-73zm-21 136H229v354h125V396zm458 166c0-114-56-187-146-187-50 0-87 30-104 75l-4-54H434c1 13 3 83 3 83v271h125V562c0-50 23-83 62-83 38 0 63 20 63 83v188h125V562z" />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: "Visit me on AngeList",
                  href: "https://angel.co/jason-kurian",
                  children: (
                    <svg
                      className={cx("fill-current")}
                      viewBox="0 0 1000 1000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill-rule="evenodd">
                        <path d="M500 1000c276.142 0 500-223.858 500-500S776.142 0 500 0 0 223.858 0 500s223.858 500 500 500zm-2.434-774.685C476.786 173.908 453.3 110.07 414.08 80.112c-6.816-5.21-12.12-10.63-18.365-11.683-20.69-3.49-46.287 7.748-55.1 15.02-42.658 35.2-16.755 120.237-3.34 165.23 13.315 44.65 25.774 85.596 40.073 126.845 7.7 22.213 14.52 43.446 21.706 61.753-22.4-13.707-57.39-15.278-76.805-3.338-21.59 13.277-45.714 44.835-48.422 60.085-4.9 27.595 6.07 46.94 13.358 70.098-56.02 11.113-83.4 44.308-88.494 103.478-.564 6.562-.726 20.384 0 28.374 4.013 44.183 19.2 76.442 38.403 105.147 41.44 61.944 111.715 112.568 193.683 125.176 53.432 8.218 122.4-1.524 160.29-13.352 109.424-34.158 189.05-139.24 205.37-257.026 5.868-42.338 6.463-87.493 0-128.513-8.566-54.39-39.75-81.358-90.162-95.134 12.12-33.222 26.58-74.663 40.072-118.498 12.85-41.746 29.584-85.5 35.064-125.175 5.52-39.962-.126-72.44-21.706-90.126-13.134-10.764-45.51-18.01-65.118-10.013-19.068 7.776-36.005 35.824-48.42 56.746-41.162 69.362-67.053 148.65-95.173 225.315-17.55-45.75-33.862-96.795-53.43-145.203z" />
                        <path d="M509.182 404.007c-22.027-1.092-54.356-8.873-70.117 3.34-30.45-84.188-64.608-164.663-81.803-262.105 4.237-17.654 12.63-35.606 35.06-30.05 34.04 35.447 48.1 88.177 65.107 138.564 16.92 50.137 36.128 101.256 51.752 150.25zm80.134 8.347c12.986-40.01 30.502-89.825 50.083-143.573 8.755-24.032 15.2-49.13 25.04-71.785 8.306-19.12 21.446-49.758 36.73-60.1 16.498-11.165 35.732 3.334 38.396 20.033 1.75 10.972-3.608 24.384-6.678 36.728-1.507 6.064-6.836 23.136-7.457 25.37-7.054 25.383-14.14 50.188-22.592 74.797-15.756 45.87-31.957 84.745-45.075 128.548-24.644-1.51-43.987-8.322-68.447-10.016zM278.798 674.457c-8.264 2.905-6.434 14.436-6.678 20.034-.315 7.26-.112 15.946 1.67 23.373 7.06 29.427 48.753 71.94 81.803 83.473 30.95 10.8 59.52 4.035 76.794-13.356 11.54-11.618 18.974-28.466 13.356-55.092 11.492-.192 24.27.895 33.39-1.67.316 54.775 8.738 101.446 58.43 106.845 6.858-13.617 2.29-24.076-1.67-38.397-3.865-13.978-15.27-35.74-13.355-60.1 3.123-39.72 32.348-82.863 60.1-106.845 12.168-10.516 31.405-22.768 51.753-31.718 16.204-7.13 50.042-15.85 53.423-28.38 3.626-13.442-5.866-21.176-11.686-28.382-74.402.308-178.748 1.468-210.35-41.736-6.313-8.63-12.632-25.567-10.017-38.397 4.085-20.045 31.187-23.456 60.1-21.703 54.115 3.28 110.616 12.275 156.928 26.71 26.427 8.24 51.76 18.714 61.77 30.05 12.888 14.597 15.697 37.128 18.364 60.1 2.94 25.354.627 61.69-3.34 86.813-10.51 66.574-41.702 119.94-80.133 160.267-41.802 43.86-108.57 85.865-203.674 78.464-50.47-3.93-95.32-25.237-128.547-50.083-23.636-17.672-43.278-40.543-60.1-66.778-15.502-24.172-33.968-52.677-33.39-91.82.155-10.543 2.67-19.756 5.008-26.71 3.863-11.485 24.935-43.798 45.075-43.407 11.6.225 27.017 16.57 35.058 25.042 19.82 20.88 36.132 39.197 53.424 66.778 5.577 8.896 20.01 29.726 18.364 40.066-1.264 7.947-14.576 17.79-25.042 18.364-15.59.855-33.8-12.707-43.406-21.702-9.966-9.336-17.377-21.566-25.04-31.72-8.275-10.96-15.31-25.09-28.382-28.38z" />
                        <path d="M479.132 669.45c-4.818 8.537-12.17 14.54-21.703 18.363-44.57-18.6-68.06-51.992-96.83-93.49-6.807-9.82-15.845-22.745-23.37-36.727-7.72-14.337-17.472-31.087-16.696-43.406.938-14.87 18.648-31.49 33.39-38.397 6.148-2.88 14.428-2.222 23.37 3.34 32.694 20.32 54.696 65.044 73.457 103.505 14.07 28.836 28.84 59.227 28.382 86.81zm18.364-95.16c22.98 5.4 44.49 12.27 73.456 11.687-19.25 13.582-34.35 31.315-51.753 46.744-5.83-20.88-13.748-39.675-21.704-58.43z" />
                      </g>
                    </svg>
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
    file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

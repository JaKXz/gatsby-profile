import React from "react";
import cx from "classnames";

export default function Title() {
  return (
    <>
      <h2 className={cx("text-2xl", "tracking-wider")}>JASON KURIAN</h2>
      <p className={cx("text-xl")}>
        UX-focused fullstack developer, front-end architect, & design
        systems&nbsp;engineer
      </p>
    </>
  );
}

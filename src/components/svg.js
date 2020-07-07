import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

export default function SVG({ className, children, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cx("fill-current", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

SVG.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

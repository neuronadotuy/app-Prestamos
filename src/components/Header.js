/** @format */

import React, { Fragment } from "react";

const Header = ({ title, desc }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <h4>{desc}</h4>
    </Fragment>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import classes from "./SignMenu.module.scss";

const SignMenu = () => (
  <div className={classes.header__signInOut}>
    <button type="button">
      <Link to="/sign-in">Sign In</Link>
    </button>
    <button type="button">
      <Link to="/sign-up">Sign Up</Link>
    </button>
  </div>
);

export default SignMenu;

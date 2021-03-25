import React from "react";
import { Link } from "react-router-dom";

import classes from "./InputMenu.module.scss";

const InputMenu = () => (
  <div className={classes.header__signInOut}>
    <button type="button">
      <Link to="/sign-in">Sign In</Link>
    </button>
    <button type="button">
      <Link to="/sign-up">Sign Up</Link>
    </button>
  </div>
);

export default InputMenu;

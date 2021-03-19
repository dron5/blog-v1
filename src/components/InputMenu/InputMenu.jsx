import React from "react";

import classes from "./InputMenu.module.scss";

const InputMenu = () => (
  <div className={classes.header__signInOut}>
    <button type="button">Sign In</button>
    <button type="button">Sign Up</button>
  </div>
);

export default InputMenu;

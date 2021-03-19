import React from "react";

import InputMenu from "../InputMenu/InputMenu";
import classes from "./Header.module.scss";

const Header = () =>(
  <div className={classes.header}>
    <div className={classes["header-container"]}>
      <div className={classes["header-root"]}>Realworld Blog</div>
      <InputMenu />
    </div>
  </div>
);

export default Header;
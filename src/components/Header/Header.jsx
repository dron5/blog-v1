import React from "react";
import { Link } from "react-router-dom";

import SignMenu from "../SignMenu/SignMenu";
import UserMenu from "../UserMenu/UserMenu";
import classes from "./Header.module.scss";

const Header = () => (
  <div className={classes.header}>
    <div className={classes["header-container"]}>
      <div className={classes["header-root"]}>
        <Link to="/articles">Realworld Blog</Link>
      </div>
      <UserMenu />
      <SignMenu />
    </div>
  </div>
);

export default Header;

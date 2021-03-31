import React from "react";
import { Link } from "react-router-dom";

import noavatar from "../../img/avatar.png";
import classes from "./UserMenu.module.scss";

const SignMenu = () => {
  const userName = "dron";
  const avatar = null;
  return (
    <div className={classes["header__user-menu"]}>
      <button type="button" className={classes["btn-create"]}>
        <Link to="/create-article">Create article</Link>
      </button>
      <span className={classes["header__user-name"]}>{userName}</span>
      <div className={classes.header__avatar}>
        <Link to="/profile">
          <img src={avatar || noavatar} alt="avatar" />
        </Link>
      </div>
      <button type="button" className={classes["btn-out"]}>
        <Link to="/log-out">Log Out</Link>
      </button>
    </div>
  );
};

export default SignMenu;

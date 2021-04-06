/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import noavatar from "../../img/avatar.png";
import { getUserSelector } from "../../store/selectors";
import classes from "./UserMenu.module.scss";

const SignMenu = ({ user }) => (
  <>
    {user && (
      <div className={classes["header__user-menu"]}>
        <button type="button" className={classes["btn-create"]}>
          <Link to="/create-article">Create article</Link>
        </button>
        <span className={classes["header__user-name"]}>{user.username}</span>
        <div className={classes.header__avatar}>
          <Link to="/profile">
            <img src={user.image || noavatar} alt="avatar" />
          </Link>
        </div>
        <button type="button" className={classes["btn-out"]}>
          <Link to="/log-out">Log Out</Link>
        </button>
      </div>
    )}
  </>
);
const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps)(SignMenu);

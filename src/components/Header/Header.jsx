/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as fetch from "../../store/actions";
import { getIsLoggedInSelector } from "../../store/selectors";

import SignMenu from "../SignMenu/SignMenu";
import UserMenu from "../UserMenu/UserMenu";
import classes from "./Header.module.scss";

const Header = ({ authorized }) => (
  <div className={classes.header}>
    <div className={classes["header-container"]}>
      <div className={classes["header-root"]}>
        <Link to="/articles">Realworld Blog</Link>
      </div>
      {authorized ? <UserMenu /> : <SignMenu />}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  authorized: getIsLoggedInSelector(state),
});

export default connect(mapStateToProps, fetch)(Header);

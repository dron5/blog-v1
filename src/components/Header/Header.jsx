/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getAuthorizedFlagSelector } from "../../store/selectors";

import SignMenu from "../SignMenu/SignMenu";
import UserMenu from "../UserMenu/UserMenu";
import classes from "./Header.module.scss";

const Header = ({ authorized }) => {
  console.log('In Header authorized:', authorized);
  return (
    <div className={classes.header}>
      <div className={classes["header-container"]}>
        <div className={classes["header-root"]}>
          <Link to="/articles">Realworld Blog</Link>
        </div>
        {authorized && <UserMenu />}
        {!authorized && <SignMenu />}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  authorized: getAuthorizedFlagSelector(state),
});

export default connect(mapStateToProps, null)(Header);

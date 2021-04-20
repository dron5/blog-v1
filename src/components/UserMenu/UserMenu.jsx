/* eslint-disable react/prop-types */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import noavatar from "../../img/avatar.png";
import { getUserSelector } from "../../store/selectors";
import * as fetch from "../../store/actions/usersActions";
import classes from "./UserMenu.module.scss";

const UserMenu = ({ user, setAuthorizedFlagAction, setUserAction }) => {
  const history = useHistory();
  const onClick = () => {
    setAuthorizedFlagAction(false);
    setUserAction(null);
    history.push("/");
  };
  return (
    <>
      {user && ( // it needs prevent to render user===null
        <div className={classes["header__user-menu"]}>
          <button type="button" className={classes["btn-create"]}>
            <Link to="/new-article">Create article</Link>
          </button>
          <span className={classes["header__user-name"]}>{user.username}</span>
          <div className={classes.header__avatar}>
            <Link to="/profile">
              <img src={user.image || noavatar} alt="avatar" />
            </Link>
          </div>
          <button
            type="button"
            className={classes["btn-out"]}
            onClick={onClick}
          >
            Log Out
          </button>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps, fetch)(UserMenu);

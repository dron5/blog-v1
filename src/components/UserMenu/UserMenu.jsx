/* eslint-disable react/prop-types */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import noavatar from "../../img/avatar.png";
import { getUserSelector, getSearchWordSelector } from "../../store/selectors";
import * as fetchUA from "../../store/actions/usersActions.ts";
import * as fetchAA from "../../store/actions/articlesActions.ts";
import classes from "./UserMenu.module.scss";

const UserMenu = ({
  user,
  setAuthorizedFlagAction,
  addSearchWordAction,
  setUserAction,
  searchWord,
}) => {
  const history = useHistory();
  const onClick = () => {
    setAuthorizedFlagAction(false);
    setUserAction(null);
    history.push("/");
  };
  const onClickToName = () => {
    if (!searchWord) addSearchWordAction(user.username);
    if (searchWord) addSearchWordAction("");
  };
  return (
    <>
      {user && ( // it needs prevent to render user===null
        <div className={classes["header__user-menu"]}>
          <button type="button" className={classes["btn-create"]}>
            <Link to="/new-article">Create article</Link>
          </button>
          <button
            type="button"
            className={classes["header__user-name"]}
            onClick={onClickToName}
          >
            {user.username}
          </button>
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
  searchWord: getSearchWordSelector(state),
});

export default connect(mapStateToProps, { ...fetchUA, ...fetchAA })(UserMenu);

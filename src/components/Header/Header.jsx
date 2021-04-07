/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getUserRequest} from "../../asyncActions/asyncStuff";

import * as fetch from "../../store/actions";
import { getAuthorizedFlagSelector } from "../../store/selectors";

import SignMenu from "../SignMenu/SignMenu";
import UserMenu from "../UserMenu/UserMenu";
import classes from "./Header.module.scss";

const Header = ({ authorized, setUserAction, setAuthorizedFlagAction }) => {
  const [cookies, setCookie] = useCookies(["token"]);
  if(!authorized)setCookie("token", '', { maxAge: -1 });
  console.log('Cookies in Header -- :',cookies.token);
  useEffect(() => {
    if(cookies.token){
      getUserRequest(cookies.token)
        .then((answer) => {
          setAuthorizedFlagAction(true);
          setUserAction(answer.user);
          setCookie("token", answer.token);
          console.log('In Header --- :', answer.user);
        });
    }
  }, [cookies.token, setUserAction, setAuthorizedFlagAction, setCookie]);
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

export default connect(mapStateToProps, fetch)(Header);

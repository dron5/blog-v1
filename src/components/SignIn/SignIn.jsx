/* eslint-disable react/prop-types */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import * as fetch from "../../store/actions/usersActions";

import { authenticationRequest } from "../../services/asyncActions/asyncApi";
import classes from "./SignIn.module.scss";

const SignIn = ({ setAuthorizedFlagAction, setUserAction }) => {
  const { register, handleSubmit, errors, setError } = useForm();
  const history = useHistory();

  const showErrors = () => {
    setError("password", {
      type: "manual",
      message: "email or password is invalid",
    });
  };

  const createUser = (user) => {
    setAuthorizedFlagAction(true);
    setUserAction(user);
    history.push("/");
  };

  const toSignIn = async (data) => {
    const response = await authenticationRequest(data);
    switch (Object.keys(response)[0]) {
      case "errors":
        showErrors();
        break;
      case "user":
        createUser(response.user);
        break;
      default:
        break;
    }
  };
  const onSubmit = (data) => {
    toSignIn(data);
  };
  return (
    <div className={classes.container}>
      <span className={classes.menu__title}>Sign In</span>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["form-group"]}>
          <input
            ref={register({ required: "email", maxLength: 20 })}
            type="email"
            name="email"
            className={classes["form-control"]}
            placeholder=" "
            id="email"
          />
          <label htmlFor="email" className={classes["form-label"]}>
            <span>Email address</span>
          </label>
        </div>
        <div className={classes["form-group"]}>
          <input
            ref={register({ required: "password" })}
            type="password"
            name="password"
            className={classes["form-control"]}
            placeholder=" "
            id="password"
          />
          <label htmlFor="password" className={classes["form-label"]}>
            <span>Password</span>
          </label>
          {errors.password && (
            <p className={classes["alert-message"]}>
              {errors.password.message}
            </p>
          )}
        </div>
        <button type="submit" className={classes.input__btn}>
          Login
        </button>
      </form>
      <span className={classes.menu__footer}>
        Already have an account? <Link to="/sign-up">Sign up</Link>
      </span>
    </div>
  );
};

export default connect(null, fetch)(SignIn);

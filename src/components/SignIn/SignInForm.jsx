/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import classes from "./SignIn.module.scss";

const SignInForm = ({ register, errors, handleSubmit, }) => (
  <div className={classes.container}>
      <span className={classes.menu__title}>Sign In</span>
      <form className={classes.form} onSubmit={handleSubmit}>
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

export default SignInForm;
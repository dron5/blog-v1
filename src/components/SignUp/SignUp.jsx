/* eslint-disable no-useless-escape */
import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import classes from "./SignUp.module.scss";

const SignUp = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log("data", data);
  console.log("errors", errors);
  return (
    <div className={classes.container}>
      <span className={classes.menu__title}>Create New Account</span>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["form-group"]}>
          <input
            ref={register({ required: true, 
              minLength: {value: 3, message:"Needs to be at least 3 characters"},
              maxLength: {value: 20, message:"Needs to be not more than 20 characters"} })}
            type="text"
            name="username"
            className={
              !errors.username
                ? `${classes["form-control"]}` 
                : `${classes["form-control"]} ${classes["alert-border"]}`
                // : [classes["form-control"],classes["alert-border"]].join(' ')
              }
            placeholder="your username"
            id="username"
          />
          <label htmlFor="username" className={classes["form-label"]}>
            <span>Username</span>
          </label>
          {errors.username && <p className={classes["alert-message"]}>{errors.username.message}</p>}
        </div>
        <div className={classes["form-group"]}>
          <input
            ref={register({ required: true, pattern:{value: /^.+@.+\..+$/,
            message:"Enter valid email, please"}
              })}
            type="email"
            name="email"
            className={
              !errors.email
              ? `${classes["form-control"]}` 
              : `${classes["form-control"]} ${classes["alert-border"]}`
            }
            placeholder=" "
            id="email"
          />
          <label htmlFor="email" className={classes["form-label"]}>
            <span>Email address</span>
          </label>
        </div>
        <div className={classes["form-group"]}>
          <input
            ref={register({ required: true,
              minLength: {value: 8, message: "Your password needs to be at list 8 char"},
              maxLength: {value: 20}, message: "Your password needs to be not more 40 char" })}
            type="password"
            name="password"
            className={
              !errors.password
                ? `${classes["form-control"]}` 
                : `${classes["form-control"]} ${classes["alert-border"]}`
            }
            placeholder=" "
            id="password"
          />
          <label htmlFor="password" className={classes["form-label"]}>
            <span>Password</span>
          </label>
          {errors.password && <p className={classes["alert-message"]}>{errors.password.message}</p>}
        </div>
        <div className={classes["form-group"]}>
          <input
            ref={register({ 
              validate: value => 
                value === password.current || "The passwords do not match"
             })}
            type="password"
            name="repeatPassword"
            className={
              !errors.repeatPassword
                ? `${classes["form-control"]}` 
                : `${classes["form-control"]} ${classes["alert-border"]}`
            }
            placeholder=" "
            id="repeatPassword"
          />
          <label htmlFor="repeatPassword" className={classes["form-label"]}>
            <span>Repeat Password</span>
          </label>
          {errors.repeatPassword && <p className={classes["alert-message"]}>{errors.repeatPassword.message}</p>}
        </div>
        <div className={classes["form__label-checkbox"]}>
          <input
            ref={register({ required: true })}
            type="checkbox"
            name="agriment"
            id="agriment"
            className={classes.checkbox}
          />
          <label htmlFor="agriment" className={
            !errors.agriment
              ? `${classes.input__checkbox}`
              : `${classes.input__checkbox} ${classes["alert-checkbox"]}`}
            >
            I agree to the processing of my personal information
          </label>
        </div>
        <button type="submit" className={classes.input__btn}>
          Create account
        </button>
      </form>
      <span className={classes.menu__footer}>
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </span>
    </div>
  );
};

export default SignUp;

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { authenticationRequest } from "../../asyncActions/asyncStuff";
import classes from "./SignIn.module.scss";

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();
  console.log("errors", errors);
  // const onSubmit = (data) => console.log("data", data);

  const toSignIn = async (data) => {
    const response = await authenticationRequest(data);
    console.log(response);
  };
  const onSubmit = (data) => toSignIn(data);

  return (
    <div className={classes.container}>
      <span className={classes.menu__title}>Sign In</span>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["form-group"]}>
          <input
            ref={register}
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
            ref={register({ required: true, minLength: 8, maxLength: 20 })}
            type="password"
            name="password"
            className={classes["form-control"]}
            placeholder=" "
            id="password"
          />
          <label htmlFor="password" className={classes["form-label"]}>
            <span>Password</span>
          </label>
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
export default SignIn;

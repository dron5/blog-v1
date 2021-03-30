import React from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";

import classes from "./SignUp.module.scss";

const SignUp = () => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log('data', data);
  console.log('errors', errors);
  return (
    <div className={classes.container}>
      <span className={classes.menu__title}>Create new account</span>
      <form action="" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input ref={register({required: true, minLength: 3, maxLength: 20})}
           type="text" name="username" className={classes["form-control"]} />
          <label htmlFor="username" className={classes["form-label"]}>Username</label>
        </div>
        <div className="form-group">
          <input ref={register} type="email" name="email" className={classes["form-control"]} />
          <label htmlFor="email" className={classes["form-label"]}>Email address</label>
        </div>
        <div className="form-group">
          <input ref={register({required: true, minLength: 8, maxLength: 20})}
           type="password" name="password" className={classes["form-control"]} />
          <label htmlFor="password" className={classes["form-label"]}>Password</label>
        </div>
        <div className="form-group">
          <input
            ref={register({required: true, minLength: 8, maxLength: 20})}
            type="password"
            name="repeatPassword"
            className={classes["form-control"]}
          />
          <label htmlFor="repeatPassword" className={classes["form-label"]}>Repeat Password</label>
        </div>
        <div className={classes["form__label-checkbox"]}>
          <input ref={register({required: true})}
           type="checkbox" name="agriment" className={classes.checkbox} />
          <span className={classes.input__checkbox}>I agree to the processing of my personal information</span>
        </div>
        <button type="submit" className={classes.input__btn}>
          Create
        </button>
      </form>
      <span className={classes.menu__footer}>
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </span>
    </div>
  );
};

export default SignUp;

import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";
import classes from "./SignUp.module.scss";

const SignUp = () => (
  <div className={classes.menu__signup}>
    <span className={classes.menu__title}>Create new account</span>
    <form action="" className={classes.menu__form}>
      <label>
        <div>Username</div>
        <input type="text" name="username" className={classes.input} />
      </label>
      <label>
        <div>Email address</div>
        <input type="email" name="email" className={classes.input} />
      </label>
      <label>
        <div>Password</div>
        <input type="password" name="password" className={classes.input} />
      </label>
      <label>
        <div>Repeate Password</div>
        <input
          type="password"
          name="repeatPassword"
          className={classes.input}
        />
      </label>
      <label>
        <input type="checkbox" name="agriment" className={classes.checkbox} />I
        agree to the processing of my personal information
      </label>
      <Button type="primary" className={classes["ant-btn"]}>
        Create
      </Button>
    </form>
    <span className={classes.menu__footer}>
      Already have an account? <Link to="/sign-in">Sign in</Link>
    </span>
  </div>
);

export default SignUp;

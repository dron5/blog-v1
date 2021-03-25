import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";
import classes from "./SignUp.module.scss";

const SignUp = () => (
  <div className={classes.menu__signup}>
    <span className={classes.menu__title}>Create new account</span>
    <form action="">
      <Button type="primary" className={classes.menu__button}>
        Create
      </Button>
    </form>
    <span className={classes.menu__footer}>
      Already have an account? <Link to="/sign-in">Sign in</Link>
    </span>
  </div>
);

export default SignUp;

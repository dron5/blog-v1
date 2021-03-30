import React from "react";

import { Button } from "antd";

import classes from "./SignIn.module.scss";

const SignIn = () => (
  <div className={classes.menu__signin}>
    <span className={classes.menu__title}>Sign In account</span>
    <Button type="submit" className={classes["ant-btn"]}>
      Create
    </Button>
  </div>
);

export default SignIn;

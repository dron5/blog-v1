/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Button } from "antd";

import classes from "./Tags.module.scss";

const Tags = () => {
  const onSubmit = () => {};
  return(
    <div className={classes.container}>
      <form className={classes.form} onSubmit={onSubmit} >
        <div className={classes["form-group"]}>
          <input 
            type="text"
            name="tag"
            className={classes["form-control"]}
            placeholder=" "
            id="tag"
          />
          <label htmlFor="tag" className={classes["form-label"]}>
            <span>New tag</span>
          </label>
        </div>
        <Button type="primary" className={classes["ant-btn-primary"]}>
          Add tag
        </Button>
      </form>
    </div>
    
  );
};

export default Tags;

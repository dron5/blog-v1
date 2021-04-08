/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
// import { Button } from "antd";
import { useForm } from "react-hook-form";

import classes from "./Tags.module.scss";

const Tags = () => {
  const { handleSubmit, register, errors} = useForm();
  // const { register, handleSubmit, errors, setError } = useForm();
  // console.log('errors', errors);
  
  const onSubmit = (data) => console.log(data);
  return(
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["form-group"]}>
          <input
            ref={register({
              required: true,
              minLength: {
                value: 1,
                message: "It can not be empty",
              },
            })}
            type="text"
            name="tag"
            className={
              !errors.tag
                ? `${classes["form-control"]}`
                : [classes["form-control"], classes["alert-border"]].join(" ")
            }
            placeholder=" "
            id="tag"
          />
          <label htmlFor="tag" className={classes["form-label"]}>
            <span>New tag</span>
          </label>
          {errors.tag && (
            <p className={classes["alert-message"]}>
              {errors.tag.message}
            </p>
          )}
        </div>
        <button type="submit"
         className={classes["btn-input"]}>
          Add tag
        </button>
      </form>
    </div>
    
  );
};

export default Tags;

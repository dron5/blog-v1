import React from "react";
// import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";

import classes from "./Profile.module.scss";

const EditProfile = () => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log('data', data);
  console.log('errors', errors);
  return (
    <div className={classes.container}>
      <span className={classes.menu__title}>Edit Profile</span>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["form-group"]}>
          <input ref={register({required: true, minLength: 3, maxLength: 20})}
           type="text" name="username" className={classes["form-control"]}
           placeholder="your username" id="username" />
          <label htmlFor="username" className={classes["form-label"]}>
            <span>Username</span>
            </label>
        </div>
        <div className={classes["form-group"]}>
          <input 
            ref={register} type="email" name="email" 
            className={classes["form-control"]}
            placeholder=" " id="email" />
          <label
            htmlFor="email"
            className={classes["form-label"]}>
            <span>Email address</span>
            </label>
        </div>
        <div className={classes["form-group"]}>
          <input ref={register({required: true, minLength: 8, maxLength: 20})}
           type="password" name="password" className={classes["form-control"]}
           placeholder=" " id="password" />
          <label htmlFor="password" className={classes["form-label"]}>
            <span>Password</span>
            </label>
        </div>
        <div className={classes["form-group"]}>
          <input
            // ref={register({required: true, minLength: 8, maxLength: 20})}
            type="password"
            name="avatar"
            className={classes["form-control"]}
            placeholder=" "
            id="avatar"
          />
          <label htmlFor="avatar" className={classes["form-label"]}>
            <span>Avatar mage (url)</span>
            </label>
        </div>
        <button type="submit" className={classes.input__btn}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
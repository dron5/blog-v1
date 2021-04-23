/* eslint-disable react/prop-types */
import React from "react";

import classes from "./Profile.module.scss";

const ProfileForm = ({ register, errors, handleSubmit }) => (
  <div className={classes.container}>
    <span className={classes.menu__title}>Edit Profile</span>
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes["form-group"]}>
        <input
          ref={register({
            required: true,
            minLength: {
              value: 3,
              message: "Username needs to be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username needs to be not more than 20 characters",
            },
          })}
          type="text"
          name="username"
          className={
            !errors.username
              ? `${classes["form-control"]}`
              : [classes["form-control"], classes["alert-border"]].join(" ")
          }
          placeholder="your username"
          id="username"
        />
        <label htmlFor="username" className={classes["form-label"]}>
          <span>Username</span>
        </label>
        {errors.username && (
          <p className={classes["alert-message"]}>{errors.username.message}</p>
        )}
      </div>
      <div className={classes["form-group"]}>
        <input
          ref={register({
            required: true,
            pattern: {
              value: /^.+@.+\..+$/,
              message: "Enter valid email, please",
            },
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
        {errors.email && (
          <p className={classes["alert-message"]}>{errors.email.message}</p>
        )}
      </div>
      <div className={classes["form-group"]}>
        <input
          ref={register({
            required: true,
            minLength: {
              value: 8,
              message: "Your password needs to be at list 8 char",
            },
            maxLength: {
              value: 20,
              message: "Your password needs to be not more 40 char",
            },
          })}
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
          <span>New password</span>
        </label>
        {errors.password && (
          <p className={classes["alert-message"]}>{errors.password.message}</p>
        )}
      </div>
      <div className={classes["form-group"]}>
        <input
          ref={register({ required: false })}
          type="url"
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

export default ProfileForm;

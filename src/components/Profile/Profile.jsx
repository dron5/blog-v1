/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { updateUserRequest } from "../../services/asyncActions/asyncApi";
import { getUserSelector } from "../../store/selectors";
import * as fetch from "../../store/actions";
import classes from "./Profile.module.scss";

const EditProfile = ({ user, setUserAction }) => {
  const history = useHistory();
  if (!user) history.push("/");
  const { register, handleSubmit, setError, errors } = useForm();

  const createUser = (data) => {
    setUserAction(data);
    history.push("/");
  };

  const showErrors = (response) => {
    Object.keys(response.errors).map((key) =>
      setError(key, { type: "manual", message: response.errors[key][0] })
    );
  };

  const toUdateUser = async (data) => {
    const response = await updateUserRequest(data, user.token);
    switch (Object.keys(response)[0]) {
      case "errors":
        showErrors(response);
        break;
      case "user":
        createUser(response.user);
        break;
      default:
        break;
    }
  };

  const onSubmit = (data) => toUdateUser(data);

  return (
    <div className={classes.container}>
      <span className={classes.menu__title}>Edit Profile</span>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
            <p className={classes["alert-message"]}>
              {errors.username.message}
            </p>
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
            <p className={classes["alert-message"]}>
              {errors.password.message}
            </p>
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
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps, fetch)(EditProfile);

/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import * as fetch from "../../store/actions/usersActions.ts";

import { authenticationRequest } from "../../services/asyncActions/asyncApi.ts";
import SignInForm from "./SignInForm";

const SignIn = ({ setAuthorizedFlagAction, setUserAction }) => {
  const { register, handleSubmit, errors, setError } = useForm();
  const history = useHistory();

  const showErrors = () => {
    setError("password", {
      type: "manual",
      message: "email or password is invalid",
    });
  };

  const createUser = (user) => {
    setAuthorizedFlagAction(true);
    setUserAction(user);
    history.push("/");
  };

  const toSignIn = async (data) => {
    const response = await authenticationRequest(data);
    switch (Object.keys(response)[0]) {
      case "errors":
        showErrors();
        break;
      case "user":
        createUser(response.user);
        break;
      default:
        break;
    }
  };
  const onSubmit = (data) => {
    toSignIn(data);
  };
  return (
    <SignInForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default connect(null, fetch)(SignIn);

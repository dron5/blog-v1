/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import * as fetch from "../../store/actions/usersActions.ts";
import { registrationRequest } from "../../services/asyncActions/asyncApi.ts";
import SignUpForm from "./SignUpForm";

const SignUp = ({ setAuthorizedFlagAction, setUserAction }) => {
  const { register, handleSubmit, setError, errors, watch } = useForm();
  const history = useHistory();
  const password = useRef({});
  password.current = watch("password", "");

  const createUser = (user) => {
    setAuthorizedFlagAction(true);
    setUserAction(user);
    history.push("/");
  };

  const showErrors = (response) => {
    Object.keys(response.errors).map((key) =>
      setError(key, { type: "manual", message: response.errors[key][0] })
    );
  };

  const toRegUser = async (data) => {
    const response = await registrationRequest(data);
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
  const onSubmit = (data) => toRegUser(data);
  return (
    <SignUpForm
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      passToValid={password.current}
    />
  );
};

export default connect(null, fetch)(SignUp);

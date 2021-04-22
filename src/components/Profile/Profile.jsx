/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { updateUserRequest } from "../../services/asyncActions/asyncApi";
import { getUserSelector } from "../../store/selectors";
import * as fetch from "../../store/actions/usersActions";
import ProfileForm from "./ProfileForm";

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
    <ProfileForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps, fetch)(EditProfile);

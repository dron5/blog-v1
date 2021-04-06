/* eslint-disable react/prop-types */
import React from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import * as fetch from "../../store/actions";

const LogOut = ({ setAuthorizedFlagAction }) => {
  setAuthorizedFlagAction(false);
  return <Redirect to="/" />;
};

export default connect(null, fetch)(LogOut);

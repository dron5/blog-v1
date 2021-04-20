export const setAuthorizedFlagAction = (status) => (dispatch) => {
  dispatch({ type: "AUTHORIZED", payload: status });
};

export const setUserAction = (user) => ({ type: "SETUSER", payload: user });

import { User } from "../../constants";

export const setAuthorizedFlagAction = (status) => (dispatch) => {
  dispatch({ type: User.setAuthorized, payload: status });
};

export const setUserAction = (user) => ({ type: User.setUser, payload: user });

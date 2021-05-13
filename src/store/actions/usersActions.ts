/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Dispatch } from "redux";
import {  SET_AUTHORIZED, 
          SET_USER,
          UserType,
          SetAuthorizedFlagActionType,
          SetUserActionType
} from "../../types/userTypes";

export const setAuthorizedFlagAction = (status: boolean) => (dispatch: Dispatch<SetAuthorizedFlagActionType>) => {
  dispatch({ type: SET_AUTHORIZED, payload: status });
};

export const setUserAction = (user: UserType): SetUserActionType => 
  ({ type: SET_USER, payload: user });

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {  SET_AUTHORIZED,
          SET_USER,
          UserActionsType,
          InitialUserStateType
} from "../../types/userTypes";


const initialUserState: InitialUserStateType = {
  authorized: false,
  user: null,
};

const userReducer = (state = initialUserState, action: UserActionsType):InitialUserStateType => {
  switch (action.type) {
    case SET_AUTHORIZED:
      return {
        ...state,
        authorized: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

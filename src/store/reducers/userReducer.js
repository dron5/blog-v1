import { User } from "../../constants";

const initialState = {
  authorized: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case User.setAuthorized:
      return {
        ...state,
        authorized: action.payload,
      };
    case User.setUser:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

const initialState = {
  authorized: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHORIZED":
      return {
        ...state,
        authorized: action.payload,
      };
    case "SETUSER":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;

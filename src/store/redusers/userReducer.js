const initialState = {
  authorized: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHORIZED":
      return {
        ...state,
        authorized: action.payload.authoreized,
      };
    default:
      return state;
  }
};

export default userReducer;

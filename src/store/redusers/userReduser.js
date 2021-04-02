const initialState = {
  authoreized: false,
};

const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHORIZED":
      return {
        ...state,
        authoreized: action.payload.authoreized,
      };
    default:
      return state;
  }
};

export default userReduser;

const initialState = {
  articles: [],
  loading: false,
};

const articlesReduser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return {
        ...state,
        articles: [...state.articles, ...action.payload],
        loading: action.payload.loading,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default articlesReduser;

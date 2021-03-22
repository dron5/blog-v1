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
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReduser;

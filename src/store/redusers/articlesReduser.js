const initialState = {
  articles: [],
  loading: false,
  articlesCount: 0,
  currentPage: 1,
};

const articlesReduser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return {
        ...state,
        articles: [...action.payload.articles],
        articlesCount: action.payload.articlesCount,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "CHANGEPAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReduser;

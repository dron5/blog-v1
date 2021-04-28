import { Article } from "../../constants";

const initialState = {
  articles: [],
  loading: false,
  articlesCount: 0,
  currentPage: 1,
  searchWord: "",
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Article.setArticles:
      return {
        ...state,
        articles: [...action.payload.articles],
        articlesCount: action.payload.articlesCount,
      };
    case Article.setLoading:
      return {
        ...state,
        loading: action.payload,
      };
    case Article.setCurrentPage:
      return {
        ...state,
        currentPage: action.payload,
      };
    case Article.setWord:
      return {
        ...state,
        searchWord: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;

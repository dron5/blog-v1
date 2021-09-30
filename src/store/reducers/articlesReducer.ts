/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  SET_CURRENT_PAGE,
  SET_ARTICLES,
  SET_LOADING,
  SET_WORD,
  SET_ERROR,
  ArticleActionsType,
  InitialArticlesStateType,
} from "../../types/articleTypes";

const initialState: InitialArticlesStateType = {
  articles: [],
  loading: false,
  articlesCount: 0,
  currentPage: 1,
  searchWord: "",
  is_error: false,
};

// const initialState = {
//     articles: [],
//     loading: false as boolean | false,
//     articlesCount: 0,
//     currentPage: 1,
//     searchWord: "" as string | "",
//   };

// export type InitialStateType = typeof initialState

const articlesReducer = (
  state = initialState,
  action: ArticleActionsType
): InitialArticlesStateType => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: [...action.payload.articles],
        articlesCount: action.payload.articlesCount,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        is_error: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;

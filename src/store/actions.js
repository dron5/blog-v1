import { fetchArticles } from "../asyncActions/asyncStuff";

export const addArticlesAction = (offset = 0) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  const response = await fetchArticles(offset);
  const { articles, articlesCount } = response;
  dispatch({ type: "ADD_ARTICLES", payload: { articles, articlesCount } });
  dispatch({ type: "LOADING", payload: false });
};

export const addCurrentPageAction = (currentPage) => (dispatch) => {
  dispatch({ type: "CHANGEPAGE", payload: currentPage });
};

export const setAuthorizedFlagAction = (status) => (dispatch) => {
  dispatch({ type: "AUTHORIZED", payload: status });
};

export const setUserAction = (user) => ({ type: "SETUSER", payload: user });

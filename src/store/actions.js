import { fetchArticles } from "../asyncActions/asyncStuff";

export const addArticles = (offset) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  const response = await fetchArticles(offset);
  const { articles, articlesCount } = response;
  dispatch({ type: "ADD_ARTICLES", payload: { articles, articlesCount } });
  dispatch({ type: "LOADING", payload: false });
};

export const addCurrentPage = (currentPage) => (dispatch) => {
  dispatch({ type: "CHANGEPAGE", payload: currentPage });
};

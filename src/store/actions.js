/* eslint-disable import/prefer-default-export */
import { fetchArticles } from "../asyncActions/asyncStuff";

export const addArticles = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  const response = await fetchArticles();
  const { articles, articlesCount } = response;
  dispatch({ type: "ADD_ARTICLES", payload: { articles, articlesCount } });
  dispatch({ type: "LOADING", payload: false });
};

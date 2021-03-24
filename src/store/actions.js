/* eslint-disable import/prefer-default-export */
import { fetchArticles } from "../asyncActions/asyncStuff";

export const addArticles = (offset) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  const response = await fetchArticles(offset);
  const { articles, articlesCount } = response;
  // console.log('articles :', articles);
  dispatch({ type: "ADD_ARTICLES", payload: { articles, articlesCount } });
  dispatch({ type: "LOADING", payload: false });
};

import { fetchArticles } from "../../services/asyncActions/asyncApi";
import { Article } from "../../constants";

export const addArticlesAction = (args, token) => async (dispatch) => {
  dispatch({ type: Article.setLoading, payload: true });
  const response = await fetchArticles(args, token);
  const { articles, articlesCount } = response;
  dispatch({ type: Article.setArticles, payload: { articles, articlesCount } });
  dispatch({ type: Article.setLoading, payload: false });
};

export const addCurrentPageAction = (currentPage) => (dispatch) => {
  dispatch({ type: Article.setCurrentPage, payload: currentPage });
};

export const addSearchWordAction = (word) => (dispatch) => {
  dispatch({ type: Article.setWord, payload: word });
};

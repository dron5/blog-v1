/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { Dispatch } from "redux";
import { fetchArticles } from "../../services/asyncActions/asyncApi";
import {
  SET_CURRENT_PAGE,
  SET_ARTICLES,
  SET_LOADING,
  SET_WORD,
  SET_ERROR,
  SetLoadingActionType,
  SetErrorActionType,
  AddArticlesActionType,
  AddCurrentPageActionType,
  AddSearchWordActionType,
} from "../../types/articleTypes";

const setLoadingAction = (loading: boolean): SetLoadingActionType => ({
  type: SET_LOADING,
  payload: loading,
});

const errorAction = (error: boolean): SetErrorActionType => ({
  type: SET_ERROR,
  payload: error,
});

export const setErrorAction = (error: boolean): any => (dispatch: any) => {
  dispatch(errorAction(error));
  // console.log('error in action', error);
};

export const addArticlesAction = (args: any, token: string) => async (
  dispatch: Dispatch<
    SetLoadingActionType | AddArticlesActionType | SetErrorActionType
  >
) => {
  try {
    dispatch(setLoadingAction(true));
    dispatch(errorAction(false));
    const response = await fetchArticles(args, token);
    const { articles, articlesCount } = response;
    dispatch({ type: SET_ARTICLES, payload: { articles, articlesCount } });
    dispatch(setLoadingAction(false));
  } catch (er) {
    console.log(er.message);
    dispatch(errorAction(true));
  }
};

export const addCurrentPageAction = (currentPage: number) => (
  dispatch: Dispatch<AddCurrentPageActionType>
) => {
  dispatch({ type: SET_CURRENT_PAGE, payload: currentPage });
};

export const addSearchWordAction = (word: string) => (
  dispatch: Dispatch<AddSearchWordActionType>
) => {
  dispatch({ type: SET_WORD, payload: word });
};

export const SET_CURRENT_PAGE = "CHANGEPAGE";
export const SET_ARTICLES = "ADD_ARTICLES";
export const SET_LOADING = "LOADING";
export const SET_WORD = "SET_SEARCH_WORD";
export const SET_ERROR = "SET_ERROR"; 

export type AuthorType = {
  username: string;
  bio: string | null;
  image: string | null;
  following: boolean;
};

export type ArticleType = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: Array<string>;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: 0;
    author: AuthorType;
  };
};

export type InitialArticlesStateType = {
  articles: Array<ArticleType> | [];
  loading: boolean;
  articlesCount: number;
  currentPage: number;
  searchWord: string;
  is_error: boolean;
};
export type AddSearchWordActionType = {
  type: typeof SET_WORD;
  payload: string;
};
export type AddCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};
export type AddArticlesActionType = {
  type: typeof SET_ARTICLES;
  payload: {
    articles: Array<ArticleType>;
    articlesCount: number;
  };
};
export type SetLoadingActionType = {
  type: typeof SET_LOADING;
  payload: boolean;
};
export type SetErrorActionType = {
  type: typeof SET_ERROR;
  payload: boolean;
};

export type ArticleActionsType =
  | AddSearchWordActionType
  | AddCurrentPageActionType
  | AddArticlesActionType
  | SetLoadingActionType
  | SetErrorActionType;

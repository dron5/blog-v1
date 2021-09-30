/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable */
import axios from "axios";
import { UserType } from "../../types/userTypes";
import {
  ArticleType,
  InitialArticlesStateType,
} from "../../types/articleTypes";

export const registrationRequest = async (args: any): Promise<UserType> => {
  const { username, email, password } = args;
  const data = {
    user: {
      username,
      email,
      password,
    },
  };
  try {
    const response = await axios({
      url: "https://conduit.productionready.io/api/users",
      method: "POST",
      data,
    });
    return response.data;
  } catch (er) {
    return er.response.data;
  }
};

export const authenticationRequest = async (args: any): Promise<UserType> => {
  const { email, password } = args;
  const data = {
    user: {
      email,
      password,
    },
  };
  try {
    const response = await axios({
      url: "https://conduit.productionready.io/api/users/login",
      method: "POST",
      data,
    });
    return response.data;
  } catch (er) {
    return er.response.data;
  }
};

export const updateUserRequest = async (
  args: any,
  token: string
): Promise<UserType> => {
  const { username, email, password, avatar } = args;
  const headers = {
    Authorization: `Token ${token}`,
  };
  const data = {
    user: {
      email,
      password,
      username,
      image: avatar || null,
    },
  };
  try {
    const response = await axios({
      url: "https://conduit.productionready.io/api/user",
      method: "PUT",
      headers,
      data,
    });
    return response.data;
  } catch (er) {
    return er.response.data;
  }
};

export const createArticleRequest = async (
  args: any,
  token: string
): Promise<ArticleType> => {
  const { title, description, text, tagList } = args;
  const headers = {
    Authorization: `Token ${token}`,
  };
  const data = {
    article: {
      title,
      description,
      body: text,
      tagList,
    },
  };
  try {
    const response = await axios({
      url: "https://conduit.productionready.io/api/articles",
      method: "POST",
      headers,
      data,
    });
    return response.data;
  } catch (er) {
    return er.response;
  }
};

export const editArticleRequest = async (
  args: any,
  token: string
): Promise<ArticleType> => {
  const { title, slug, description, text, tagList } = args;
  const headers = {
    Authorization: `Token ${token}`,
  };
  const data = {
    article: {
      title,
      description,
      body: text,
      tagList,
    },
  };
  try {
    const response = await axios({
      url: `https://conduit.productionready.io/api/articles/${slug}`,
      method: "PUT",
      headers,
      data,
    });
    return response.data;
  } catch (er) {
    return er.response.data;
  }
};

export const deleteArticleRequest = async (
  slug: string,
  token: string
): Promise<ArticleType> => {
  const response = await axios({
    url: `https://conduit.productionready.io/api/articles/${slug}`,
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};

export const favoriteArticleRequest = async (
  slug: string,
  token: string
): Promise<ArticleType> => {
  const response = await axios({
    url: `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};

export const unFavoriteArticleRequest = async (
  slug: string,
  token: string
): Promise<ArticleType> => {
  const response = await axios({
    url: `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};

export const fetchArticles = async (
  args: any,
  token: string
): Promise<InitialArticlesStateType> => {
  try {
    const { offset, author } = args;
    let headers = null;
    if (token) {
      headers = {
        Authorization: `Token ${token}`,
      };
    }
    const response = await axios({
      method: "get",
      url: `https://conduit.productionready.io/api/articles?limit=10&offset=${offset}&author=${author}`,
      headers,
    });
    return response.data;
  } catch (er) {
    throw new Error(`Похоже, сервер ${er.response.status}`);
  }
};

export const fetchArticle = async (
  args: any,
  token: string = ""
): Promise<ArticleType> => {
  const { slug } = args;
  let headers = null;
  if (token) {
    headers = {
      Authorization: `Token ${token}`,
    };
  }
  const response = await axios({
    url: `https://conduit.productionready.io/api/articles/${slug}`,
    headers,
  });
  if (response.statusText !== "OK") {
    throw new Error(
      `Could not fetch this url... , received ${response.status}`
    );
  }
  return response.data;
};

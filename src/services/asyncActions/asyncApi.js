/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import axios from "axios";

export const baseRequest = async (url, method, data, token) => {
  let headers = null;
  if (token) {
    headers = {
      Authorization: `Token ${token}`,
    };
  }
  const answer = await axios({
    url,
    method,
    headers,
    data,
  });
  if (!answer.statusText === "OK") {
    throw new Error(`Could not fetch... ${url}, received ${answer.statusText}`);
  }
  return answer.data;
};

export const registrationRequest = async (args) => {
  const { username, email, password } = args;
  const data = {
    user: {
      username,
      email,
      password,
    },
  };
  const response = await baseRequest(
    `https://conduit.productionready.io/api/users`,
    "POST",
    data
  );
  return response;
};

export const authenticationRequest = async (args) => {
  const { email, password } = args;
  const data = {
    user: {
      email,
      password,
    },
  };
  const response = await baseRequest(
    `https://conduit.productionready.io/api/users/login`,
    "POST",
    data
  );
  return response;
};

export const updateUserRequest = async (args, token) => {
  const { username, email, password, image } = args;
  const data = {
    user: {
      email,
      password,
      username,
      image: image || null,
    },
  };
  const response = await baseRequest(
    `https://conduit.productionready.io/api/user`,
    "PUT",
    data,
    token
  );
  return response;
};

export const createArticleRequest = async (args, token) => {
  const { title, description, text, tagList } = args;
  const data = {
    article: {
      title,
      description,
      body: text,
      tagList,
    },
  };
  const response = await baseRequest(
    `https://conduit.productionready.io/api/articles`,
    "POST",
    data,
    token
  );
  return response;
};

export const editArticleRequest = async (args, token) => {
  const { title, slug, description, text, tagList } = args;
  const data = {
    article: {
      title,
      description,
      body: text,
      tagList,
    },
  };
  const response = await baseRequest(
    `https://conduit.productionready.io/api/articles/${slug}`,
    "PUT",
    data,
    token
  );
  return response;
};

export const deleteArticleRequest = async (slug, token) => {
  const response = await axios({
    url: `https://conduit.productionready.io/api/articles/${slug}`,
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response;
};

export const favoriteArticleRequest = async (slug, token) => {
  const response = await axios({
    url: `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response;
};

export const unFavoriteArticleRequest = async (slug, token) => {
  const response = await axios({
    url: `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response;
};

export const fetchArticles = async (args, token) => {
  const { offset } = args;
  let headers = null;
  if (token) {
    headers = {
      Authorization: `Token ${token}`,
    };
  }
  const response = await axios({
    method: "get",
    url: `https://conduit.productionready.io/api/articles?limit=10&offset=${offset}`,
    headers,
  });
  return response.data;
};

export const fetchArticle = async (args, token = "") => {
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
  if (!response.statusText === "OK") {
    throw new Error(
      `Could not fetch this url... , received ${response.status}`
    );
  }
  return response.data;
};

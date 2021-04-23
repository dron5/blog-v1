/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

export const baseRequest = async (
  url,
  method = "GET",
  body = undefined,
  token
) => {
  let headers = {
    "Content-Type": "application/json;charset=utf-8",
  };
  if (token) {
    headers = {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Token ${token}`,
    };
  }
  const answer = await fetch(url, {
    method,
    headers,
    body,
  });
  if (!(answer.ok || answer.status === 422)) {
    throw new Error(`Could not fetch... ${url}, received ${answer.status}`);
  }
  return answer.json();
};

// export const fetchArticles = async (args) => {
//   let offset = "";
//   if (args) {
//     offset = args.offset;
//   }
//   const response = await baseRequest(
//     `https://conduit.productionready.io/api/articles?limit=10&offset=${offset}`
//   );
//   return response;
// };

// export const fetchArticle = async (args) => {
//   const { slug } = args;
//   const response = baseRequest(
//     `https://conduit.productionready.io/api/articles/${slug}`
//   );
//   return response;
// };

export const registrationRequest = async (args) => {
  const { username, email, password } = args;
  let body = {
    user: {
      username,
      email,
      password,
    },
  };
  body = JSON.stringify(body);
  const response = await baseRequest(
    `https://conduit.productionready.io/api/users`,
    "POST",
    body
  );
  return response;
};

export const authenticationRequest = async (args) => {
  const { email, password } = args;
  let body = {
    user: {
      email,
      password,
    },
  };
  const response = await baseRequest(
    `https://conduit.productionready.io/api/users/login`,
    "POST",
    (body = JSON.stringify(body))
  );
  return response;
};

export const updateUserRequest = async (args, token) => {
  const { username, email, password, image } = args;
  let body = {
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
    (body = JSON.stringify(body)),
    token
  );
  return response;
};

export const createArticleRequest = async (args, token) => {
  const { title, description, text, tagList } = args;
  let body = {
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
    (body = JSON.stringify(body)),
    token
  );
  return response;
};

export const editArticleRequest = async (args, token) => {
  const { title, slug, description, text, tagList } = args;
  // const { slug } = args;
  let body = {
    article: {
      title,
      description,
      body: text,
      tagList,
    },
  };
  // let body = {
  //   article: {...args,},
  // };
  const response = await baseRequest(
    `https://conduit.productionready.io/api/articles/${slug}`,
    "PUT",
    (body = JSON.stringify(body)),
    token
  );
  return response;
};

export const deleteArticleRequest = async (slug, token) => {
  const response = await fetch(
    `https://conduit.productionready.io/api/articles/${slug}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Token ${token}`,
      },
    }
  );
  return response.json();
};

export const favoriteArticleRequest = async (slug, token) => {
  const response = await fetch(
    `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Token ${token}`,
      },
    }
  );
  return response.json();
};

export const unFavoriteArticleRequest = async (slug, token) => {
  const response = await fetch(
    `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Token ${token}`,
      },
    }
  );
  return response.json();
};

export const fetchArticles = async (args, token) => {
  const { offset } = args;
  let headers = {
    "Content-Type": "application/json;charset=utf-8",
  };
  if (token) {
    headers = {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Token ${token}`,
    };
  }
  const options = {
    method: "GET",
    headers,
  };
  const response = await fetch(
    `https://conduit.productionready.io/api/articles?limit=10&offset=${offset}`,
    options
  );
  const data = await response.json();
  return data;
};

export const fetchArticle = async (args, token = "") => {
  const { slug } = args;
  let headers = {
    "Content-Type": "application/json;charset=utf-8",
  };
  if (token) {
    headers = {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Token ${token}`,
    };
  }
  const options = {
    method: "GET",
    headers,
  };
  const response = await fetch(
    `https://conduit.productionready.io/api/articles/${slug}`,
    options
  );
  if (!(response.ok || response.status === 422)) {
    throw new Error(
      `Could not fetch this url... , received ${response.status}`
    );
  }
  const data = await response.json();
  return data;
};

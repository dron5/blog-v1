// https://conduit.productionready.io/api     +
// GET /api/articles          List Articles   +
// GET /api/articles/:slug    Get Article     +
// GET /api/tags              Get Tags        +
// POST /api/users            Registration    +
// POST /api/users/login      Authentication  +
// POST /api/articles         Create Article  +
// PUT /api/articles/:slug    Update Article
// DELETE /api/articles/:slug  Delete Article

export const baseRequest = async (url, method = "GET", body, token) => {
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

export const fetchArticles = async (args) => {
  let offset = "";
  if (args) {
    offset = args.offset;
  }
  const response = await baseRequest(
    `https://conduit.productionready.io/api/articles?${offset}&limit=10`
  );
  return response;
};

export const fetchArticle = async (args) => {
  const { slug } = args;
  const response = baseRequest(
    `https://conduit.productionready.io/api/articles/${slug}`
  );
  return response;
};

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
  let body = {
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
    (body = JSON.stringify(body)),
    token
  );
  return response;
};

// {
//   "article": {
//     "title": "Did you train your dragon?"
//   }
// }

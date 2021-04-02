// https://conduit.productionready.io/api     +
// GET /api/articles          List Articles   +
// GET /api/articles/:slug    Get Article     +
// GET /api/tags              Get Tags        +
// POST /api/users            Registration    +
// POST /api/users/login      Authentication  +

export const baseRequest = async (url, method = "GET", body) => {
  const answer = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      // 'Authorization': `Token ${token}`
    },
    body,
  });
  //  if (!answer.ok) {
  //    throw new Error(
  //      `Could not fetch... ${url}, received ${answer.status}`
  //    );
  //  }
  // console.log(answer);
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
  body = JSON.stringify(body);
  const response = await baseRequest(
    `https://conduit.productionready.io/api/users/login`,
    "POST",
    body
  );
  return response;
};

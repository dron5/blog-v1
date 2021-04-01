// https://conduit.productionready.io/api     +
// GET /api/articles          List Articles   +
// GET /api/articles/:slug    Get Article     +
// GET /api/tags              Get Tags        +

export const baseRequest = async (url, method = "GET", body) => {
  const answer = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body,
  });
  //  if (!answer.ok) {
  //    throw new Error(
  //      `Could not fetch... ${url}, received ${answer.status}`
  //    );
  //  }
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

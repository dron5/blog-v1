// https://conduit.productionready.io/api     +
// GET /api/articles          List Articles   +
// GET /api/articles/:slug    Get Article     +
// GET /api/tags              Get Tags        +

const baseRequest = async (args) => {
  const response = await fetch(`https://conduit.productionready.io/${args}`);
  if (response.status === 500) return baseRequest(args);
  return response.json();
};

// export const fetchArticles = async () => {
//   const response = baseRequest(`api/articles?limit=10&offset=10`);
//   return response;
// };

export const fetchArticles = async () => {
  const response = baseRequest(`api/articles?offset=20&limit=10`);
  return response;
};

export const fetchArticle = (slug) => {
  const response = baseRequest(`api/articles/${slug}`);
  return response;
};

export const fetchTags = () => {
  const response = baseRequest(`api/tags`);
  return response;
};

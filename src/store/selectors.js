export const getTotalCount = (state) => state.articlesReducer.articlesCount;
export const getLoading = (state) => state.articlesReducer.loading;
export const getCurrentPage = (state) => state.articlesReducer.currentPage;
export const getArticles = (state) => state.articlesReducer.articles;
export const getArticle = (slug) => (state) => {
  const answer = getArticles(state);
  const art = answer.filter((elem) => elem.slug === slug);
  return art[0];
};
export const getAuthorizedFlagSelector = (state) =>
  state.userReducer.authorized;

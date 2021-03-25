export const getTotalCount = (state) => state.articlesReduser.articlesCount;
export const getLoading = (state) => state.articlesReduser.loading;
export const getCurrentPage = (state) => state.articlesReduser.currentPage;
export const getArticles = (state) => state.articlesReduser.articles;
export const getArticle = (slug) => (state) => {
  const answer = getArticles(state);
  const art = answer.filter((elem) => elem.slug === slug);
  return art[0];
};

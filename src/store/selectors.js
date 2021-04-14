export const getTotalCount = (state) => state.articlesReducer.articlesCount;
export const getLoading = (state) => state.articlesReducer.loading;
export const getCurrentPage = (state) => state.articlesReducer.currentPage;
export const getArticles = (state) => state.articlesReducer.articles;
export const getArticle = (slugName) => (state) => {
  const { slug } = slugName;
  // const articles = () => state.articlesReducer.articles;
  // const article = articles();
  // const art = article.filter((elem) => elem.slug === slug);
  const art = state.articlesReducer.articles.filter(
    (elem) => elem.slug === slug
  );
  return art[0];
};
export const getAuthorizedFlagSelector = (state) =>
  state.userReducer.authorized;
export const getUserSelector = (state) => state.userReducer.user;

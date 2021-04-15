export const getTotalCount = (state) => state.articlesReducer.articlesCount;
export const getLoading = (state) => state.articlesReducer.loading;
export const getCurrentPage = (state) => state.articlesReducer.currentPage;
export const getArticles = (state) => state.articlesReducer.articles;
export const getArticle = (slugName) => (state) => {
  const { slug } = slugName;
  const art = state.articlesReducer.articles.filter(
    (elem) => elem.slug === slug
  );
  return art[0];
};
export const getIsLoggedInSelector = (state) => state.userReducer.authorized;
export const getUserSelector = (state) => state.userReducer.user;

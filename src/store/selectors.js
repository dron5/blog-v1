export const getTotalCountSelector = (state) =>
  state.articlesReducer.articlesCount;
export const getLoadingSelector = (state) => state.articlesReducer.loading;
export const getSearchWordSelector = (state) =>
  state.articlesReducer.searchWord;
export const getCurrentPageSelector = (state) =>
  state.articlesReducer.currentPage;
export const getArticlesSelector = (state) => state.articlesReducer.articles;
export const getArticleSelector = (slugName) => (state) => {
  const { slug } = slugName;
  const art = state.articlesReducer.articles.filter(
    (elem) => elem.slug === slug
  );
  return art[0];
};
export const getIsLoggedInSelector = (state) => state.userReducer.authorized;
export const getUserSelector = (state) => state.userReducer.user;

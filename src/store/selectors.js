export const getTotalCount = (state) => state.articlesReduser.articlesCount;
export const getLoading = (state) => state.articlesReduser.loading;
export const getArticles = (state) => state.articlesReduser.articles;
export const getArticle = (id) => (state) => getArticles(state)[id];

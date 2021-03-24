export const getArticles = (state) => state.articlesReduser.articles;
export const getLoading = (state) => state.articlesReduser.loading;
export const getArticle = (id) => (state) => getArticles(state)[id];

/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ArticleForm from "../shared-components/ArticleForm/ArticleForm";
import { createArticleRequest } from "../../services/asyncActions/asyncApi";
import * as fetch from "../../store/actions/articlesActions";
import { getUserSelector } from "../../store/selectors";

const NewArticle = ({ addArticlesAction, user }) => {
  const history = useHistory();
  if (!user) history.push(`/sign-in`);
  const toCreateArticle = async (data, tags) => {
    const args = { ...data, tagList: tags };
    const { token } = user;
    const answer = await createArticleRequest(args, token);
    const { article } = answer;
    await addArticlesAction({ offset: 0 }, token);
    history.push(`/articles/${article.slug}`);
  };

  return (
    <ArticleForm
      sendArticle={toCreateArticle}
      user={user}
      article={null}
      pageTitle="Create new article"
    />
  );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps, fetch)(NewArticle);

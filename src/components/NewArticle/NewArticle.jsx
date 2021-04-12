/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ArticleForm from "../ArticleForm/ArticleForm";
import { createArticleRequest } from "../../asyncActions/asyncStuff";

import { getUserSelector } from "../../store/selectors";

const NewArticle = ({ user }) => {
  const history = useHistory();

  const toCreateArticle = async (data, tags) => {
    const args = { ...data, tagList: tags };
    const { token } = user;
    const answer = await createArticleRequest(args, token);
    const {article} = answer;
    history.push(`/articles/${article.slug}`);
  };

  return (
      <ArticleForm 
        sendArticle={toCreateArticle} 
        user={user}
        article={null}
        />
    );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps)(NewArticle);

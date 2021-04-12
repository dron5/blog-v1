/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from 'react-router-dom';

import ArticleForm from "../ArticleForm/ArticleForm";
import { editArticleRequest, fetchArticle } from "../../asyncActions/asyncStuff";

import { getUserSelector } from "../../store/selectors";

const EditArticle = ({ user, match }) => {
  const [oneArticle, setOneArticle] = useState(null);
  const history = useHistory();
  const { slug } = match.params;
  
  useEffect(() => {
    const request = async () => {
      const { article } = await fetchArticle({ slug });
      setOneArticle(article);
    };
    request();
  }, [slug]);
  
  const toEditArticle = async (data, tags) => {
    const args = { ...data, tagList: tags };
    const { token } = user;
    const answer = await editArticleRequest(args, token, slug);
    const {article} = answer;
    history.push(`/articles/${article.slug}`);
  };
  return (
    <ArticleForm 
      sendArticle={toEditArticle} 
      user={user}
      article={oneArticle}
      />
  );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default withRouter(connect(mapStateToProps)(EditArticle));

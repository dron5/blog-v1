/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchArticle } from "../../asyncActions/asyncStuff";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

import { getUserSelector } from "../../store/selectors";

const Article = ({ slug, user }) => {
  const [oneArticle, setOneArticle] = useState(null);
  const {username} = user;
  useEffect(() => {
    const request = async () => {
      const { article } = await fetchArticle({ slug });
      setOneArticle(article);
    };
    request();
  }, [slug]);
  return (
    <div className={classes.article}>
      {oneArticle && 
        <ArticlePreview {...oneArticle} username={username} theOne />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps)(Article);

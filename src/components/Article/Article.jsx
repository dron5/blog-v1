/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchArticle } from "../../asyncActions/asyncStuff";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

import { getUserSelector } from "../../store/selectors";

const Article = ({ slug, user }) => {
  const [oneArticle, setOneArticle] = useState(null);
  const { username, token } = user;
  const history = useHistory();
  useEffect(() => {
    const request = async () => {
      const { article } = await fetchArticle({ slug });
      setOneArticle(article);
    };
    request();
  }, [slug]);
  const toEdit = () => {
    history.push(`/articles/${slug}/edit`);
  };
  return (
    <div className={classes.article}>
      {oneArticle && (
        <ArticlePreview
          {...oneArticle}
          username={username}
          token={token}
          toEdit={oneArticle ? toEdit : null}
          theOne
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps)(Article);

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchArticle } from "../../asyncActions/asyncStuff";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

import { getUserSelector } from "../../store/selectors";

const Article = ({ slug, user }) => {
  const token = user ? user.token : "";
  const [oneArticle, setOneArticle] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const request = async () => {
      const { article } = await fetchArticle({ slug }, token);
      setOneArticle(article);
    };
    request();
  }, [slug, token]);
  const toEdit = () => {
    history.push(`/articles/${slug}/edit`);
  };
  return (
    <div className={classes.article}>
      {oneArticle && (
        <ArticlePreview
          {...oneArticle}
          user={user}
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

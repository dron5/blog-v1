/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert } from "antd";

import { fetchArticle } from "../../services/asyncActions/asyncApi";
import ArticlePreview from "../../pages/ArticlePreview/ArticlePreview";
import Spinner from "../../components/Spinner/Spinner";
import classes from "./Article.module.scss";

import { getUserSelector } from "../../store/selectors";

const Article = ({ slug, user }) => {
  const token = user ? user.token : "";
  const [oneArticle, setOneArticle] = useState(null);
  const [error, setError] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const request = async () => {
      try {
        const { article } = await fetchArticle({ slug }, token);
        setOneArticle(article);
      } catch (err) {
        setError(true);
      }
    };
    request();
  }, [slug, token]);
  const toEdit = () => {
    history.push(`/articles/${slug}/edit`);
  };
  return (
    <div className={classes.article}>
      {(!error && !oneArticle) && <Spinner />}
      {oneArticle && !error && (
        <ArticlePreview
          {...oneArticle}
          user={user}
          toEdit={oneArticle ? toEdit : null}
          theOne
        />
      )}
      {error && (
        <Alert
          type="error"
          message="Sorry, but article not found"
          className={classes["ant-alert"]}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps)(Article);

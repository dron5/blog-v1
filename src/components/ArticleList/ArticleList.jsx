/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "antd";

import Spinner from "../Spinner";
import * as fetch from "../../store/actions/articlesActions";
import classes from "./ArticleList.module.scss";
import ArticlePreview from "../shared-components/ArticlePreview/ArticlePreview";
import Footer from "../Footer/Footer";

import {
  getLoadingSelector,
  getArticlesSelector,
  getUserSelector,
  getSearchWordSelector,
  getIsErrorSelector,
} from "../../store/selectors";

const ArticleList = ({
  addArticlesAction,
  searchWord,
  loading,
  articles,
  user,
  error,
}) => {
  useEffect(() => {
    if (user) {
      const { token } = user;
      addArticlesAction({ offset: 0, author: searchWord }, token);
    } else {
      addArticlesAction({ offset: 0, author: "" });
    }
  }, [addArticlesAction, user, searchWord]);
  const articleList = articles.map((article, id) => (
    <ArticlePreview
      key={id}
      id={id}
      {...article}
      username={user ? user.username : null}
      token={user ? user.token : ""}
    />
  ));

  return (
    <div className={classes.articleList}>
      {error && (
        <Alert
          type="error"
          message="Sorry, no answer from server"
          className={classes["ant-alert"]}
        />
      )}
      {!error && loading && <Spinner />}
      {!loading && !error && articleList}
      {!loading && <Footer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: getLoadingSelector(state),
  articles: getArticlesSelector(state),
  user: getUserSelector(state),
  searchWord: getSearchWordSelector(state),
  error: getIsErrorSelector(state),
});

export default connect(mapStateToProps, fetch)(ArticleList);

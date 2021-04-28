/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../../components/Spinner";
import * as fetch from "../../store/actions/articlesActions";
import classes from "./ArticleList.module.scss";
import ArticlePreview from "../../pages/ArticlePreview/ArticlePreview";
import Footer from "../../components/Footer/Footer";

import {
  getLoadingSelector,
  getArticlesSelector,
  getUserSelector,
  getSearchWordSelector,
} from "../../store/selectors";

const ArticleList = ({
  addArticlesAction,
  searchWord,
  loading,
  articles,
  user,
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
      {loading && <Spinner />}
      {!loading && articleList}
      {!loading && <Footer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: getLoadingSelector(state),
  articles: getArticlesSelector(state),
  user: getUserSelector(state),
  searchWord: getSearchWordSelector(state),
});

export default connect(mapStateToProps, fetch)(ArticleList);

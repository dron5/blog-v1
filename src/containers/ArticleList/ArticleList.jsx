/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../../components/Spinner";
import * as fetch from "../../store/actions/articlesActions";
import classes from "./ArticleList.module.scss";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import Footer from "../../components/Footer/Footer";

import {
  getLoadingSelector,
  getArticlesSelector,
  getUserSelector,
} from "../../store/selectors";

const ArticleList = ({ addArticlesAction, loading, articles, user }) => {
  useEffect(() => {
    if (user) {
      const { token } = user;
      addArticlesAction({ offset: 0 }, token);
    } else {
      addArticlesAction({ offset: 0 });
    }
  }, [addArticlesAction, user]);
  const articleList = articles.map((article, id) => (
    <ArticlePreview key={id} id={id} {...article} user={user} />
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
});

export default connect(mapStateToProps, fetch)(ArticleList);

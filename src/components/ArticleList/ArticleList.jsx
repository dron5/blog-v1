/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../Spinner";
import * as fetch from "../../store/actions";
import classes from "./ArticleList.module.scss";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import Footer from "../Footer/Footer";

import { getLoading, getArticles } from "../../store/selectors";

const ArticleList = ({ addArticles, loading, articles }) => {
  useEffect(() => {
    addArticles();
  }, [addArticles]);
  const articleList = articles.map((article, id) => (
    <ArticlePreview key={id} id={id} {...article} />
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
  loading: getLoading(state),
  articles: getArticles(state),
});

export default connect(mapStateToProps, fetch)(ArticleList);

/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as fetch from "../../store/actions";
import classes from "./ArticleList.module.scss";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import {getLoading, getArticles} from "../../store/selectors";

const ArticleList = ({addArticles, loading, articles}) => {
  useEffect(() => {
    addArticles();
  }, [addArticles]);
  console.log("loading :", loading);
  console.log("articles :", articles);
  return (
    <div className={classes.articleList}>
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  articles: getArticles(state),
});

export default connect(mapStateToProps, fetch)(ArticleList);

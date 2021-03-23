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

  const articleList = articles.map((article, id) => {
    const { title, body, favoritesCount, createdAt, author, tagList, slug } = article;
    return (
      <ArticlePreview
        key={id}
        title={title}
        body={body}
        favoritesCount={favoritesCount}
        createdAt={createdAt}
        userName={author.username}
        image={author.image}
        tagList={tagList}
        slug={slug}
      />
    );
  });

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

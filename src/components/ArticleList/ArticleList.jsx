import React, {useEffect} from "react";

import {fetchArticles} from "../../asyncActions/asyncStuff";

import classes from "./ArticleList.module.scss";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

const ArticleList = () => {
  useEffect(() => {
    fetchArticles();
  }, []);
return (
  <div className={classes.articleList}>
    <ArticlePreview />
    <ArticlePreview />
    <ArticlePreview />
    <ArticlePreview />
  </div>
);
};
export default ArticleList;

// https://conduit.productionready.io/api/
import React from "react";

import classes from "./ArticleList.module.scss";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

const ArticleList = () => (
  <div className={classes.articleList}>
    <ArticlePreview />
    <ArticlePreview />
    <ArticlePreview />
  </div>
);
export default ArticleList;

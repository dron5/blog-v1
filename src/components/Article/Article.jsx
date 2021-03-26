/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { fetchArticle } from "../../asyncActions/asyncStuff";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

const Article = ({ slug }) => {
  const [oneArticle, setOneArticle] = useState(null);
  useEffect(() => {
    const request = async () => {
      const { article } = await fetchArticle(slug);
      setOneArticle(article);
    };
    request();
  }, [slug]);
  return (
    <div className={classes.article}>
      {oneArticle && <ArticlePreview {...oneArticle} theOne />}
    </div>
  );
};

export default Article;

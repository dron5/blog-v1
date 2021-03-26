/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import {fetchArticle} from "../../asyncActions/asyncStuff";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

const Article = ({slug }) => {
  const [one, setOne] = useState(null);
  useEffect(() => {
    const request = async () => {
      const {article} = await (fetchArticle(slug));
      setOne(article);
    };
    request();

  }, [slug]);
  return (
    <div className={classes.article}>
      {one && <ArticlePreview {...one} theOne />}
    </div>
  );
};

export default Article;
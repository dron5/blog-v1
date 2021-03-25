/* eslint-disable react/prop-types */
/* eslint-disable */
import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Likes from "../Likes/Likes";
import Tags from "../Tags/Tags";
import classes from "./ArticlePreview.module.scss";
import noavatar from "../../img/avatar.png";

const ArticlePreview = ({
  title,
  body,
  description,
  favoritesCount,
  createdAt,
  tagList,
  author,
  slug,
  theOne,
}) => {
  // console.log(title);
return (
  <div className={classes.preview}>
    <div className={classes.preview__header}>
      <div className={classes["preview__short-desc"]}>
        <div className={classes.preview__title}>
          {theOne ? title : <Link to={`/articles/${slug}`}>{title}</Link>}
          <Likes likes={favoritesCount} />
        </div>
        <Tags tags={tagList} />
      </div>
      <div className={classes["preview__user-info"]}>
        <div className={classes.preview__name}>
          <span>{author.username}</span>
          <span>{format(new Date(createdAt), "PP")} </span>
        </div>
        <img src={author.image || noavatar} alt="avatar" />
      </div>
    </div>
    <div className={classes.preview__description}>{description}</div>
    {theOne && (
      <div className={classes.preview__body}>
        <ReactMarkdown source={body} />
      </div>
    )}
  </div>
);
};
export default ArticlePreview;

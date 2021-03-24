/* eslint-disable react/prop-types */
import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import Likes from "../Likes/Likes";
import Tags from "../Tags/Tags";
import classes from "./ArticlePreview.module.scss";
import noavatar from "../../img/avatar.png";

const ArticlePreview = ({
  title,
  // body,
  description,
  favoritesCount,
  createdAt,
  tagList,
  author,
  id,
  theOne,
}) => (
  <div className={classes.preview}>
    <div className={classes["preview__short-desc"]}>
      <div className={classes.preview__title}>
        {theOne ? title : <Link to={`/articles/${id}`}>{title}</Link>}
        <Likes likes={favoritesCount} />
      </div>
      <Tags tags={tagList} />
      <div className={classes.preview__description}>{description}</div>
    </div>
    <div className={classes["preview__user-info"]}>
      <div className={classes.preview__name}>
        <span>{author.username}</span>
        <span>{format(new Date(createdAt), "PP")} </span>
      </div>
      <img src={author.image || noavatar} alt="avatar" />
    </div>
  </div>
);
export default ArticlePreview;

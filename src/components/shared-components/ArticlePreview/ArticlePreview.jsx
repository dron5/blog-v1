/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { memo } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Likes from "../../Likes/Likes";
import Delete from "./Delete";
import ShowTags from "../../ShowTags/ShowTags";
import Avatar from "../../Avatar/Avatar";
import classes from "./ArticlePreview.module.scss";

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
  favorited,
  toEdit,
  token,
  username,
}) => (
  <div className={classes.preview}>
    <div className={classes.preview__header}>
      <div className={classes["preview__short-desc"]}>
        <div className={classes.preview__title}>
          <Link to={`/articles/${slug}`}>{title}</Link>
          <Likes
            favoritesCount={favoritesCount}
            favorited={favorited}
            slug={slug}
            token={token}
          />
        </div>
        <ShowTags tags={tagList} />
      </div>
      <div className={classes["preview__user-info"]}>
        <div className={classes.preview__name}>
          <span>{author.username}</span>
          <span>{format(new Date(createdAt), "PP")} </span>
        </div>
        <Avatar avatar={author.image} />
      </div>
    </div>
    <div className={classes["preview__description-wrapper"]}>
      <div className={classes.preview__description}>{description}</div>
      {theOne && author.username === username && (
        <div className={classes["button-wrapper"]}>
          <Delete slug={slug} token={token} />
          <button
            type="button"
            onClick={toEdit}
            className={[classes.btn, classes["btn-edit"]].join(" ")}
          >
            Edit
          </button>
        </div>
      )}
    </div>
    {theOne && (
      <div className={classes.preview__body}>
        <ReactMarkdown source={body} />
      </div>
    )}
  </div>
);

export default memo(ArticlePreview);

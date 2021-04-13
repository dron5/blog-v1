/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Likes from "../Likes/Likes";
import Delete from "./Delete";
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
  username,
  toEdit,
}) => (
  <div className={classes.preview}>
    <div className={classes.preview__header}>
      <div className={classes["preview__short-desc"]}>
        <div className={classes.preview__title}>
          <Link to={`/articles/${slug}`}>{title}</Link>
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
    <div className={classes["preview__description-wrapper"]}>
      <div className={classes.preview__description}>{description}</div>
      {theOne && author.username === username && (
        <div className={classes["button-wrapper"]}>
          <Delete />
          {/* <button
            type="button"
            className={[classes.btn, classes["btn-del"]].join(" ")}
          >
            Delete
          </button> */}
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

const Tags = ({ tags }) => {
  const tagList = tags.map((el, i) => (
    <button key={i} type="button" className={classes.preview__tags}>
      {el}
    </button>
  ));
  return <div>{tagList}</div>;
};

export default ArticlePreview;

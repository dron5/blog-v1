/* eslint-disable react/prop-types */
/* eslint-disable no-multi-str */

import React from "react";
import { format } from "date-fns";

import Likes from "../Likes/Likes";
import Tags from "../Tags/Tags";
import classes from "./ArticlePreview.module.scss";
import noavatar from "../../img/avatar.png";

const ArticlePreview = ({
  title, body, userName, image,
  favoritesCount, createdAt}) => (
    <div className={classes.preview}>
      <div className={classes["preview__short-desc"]}>
        <div className={classes.preview__title}>
          <span>{title}</span>
          <Likes likes={favoritesCount}/>
        </div>
        <Tags />
        <div className={classes.preview__description}>{body}</div>
      </div>
      <div className={classes["preview__user-info"]}>
        <div className={classes.preview__name}>
          <span>{userName}</span>
          <span>{format(new Date(createdAt), "PP")} </span>
        </div>
        <img 
          src={image || noavatar} 
          alt="avatar" />
      </div>
    </div>
  );
export default ArticlePreview;

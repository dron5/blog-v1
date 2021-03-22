/* eslint-disable no-multi-str */

import React from "react";
import { format } from "date-fns";

import Tags from "../Tags/Tags";
import classes from "./ArticlePreview.module.scss";

import avatar from "../../img/avatar.png";

const ArticlePreview = () => {
  const date = new Date();
  const text =
    "Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor \
    incididunt ut labore et dolore magna aliqua. \
    Ut enim ad minim veniam, quis nostrud exercitation \
    ullamco laboris  nisi ut aliquip ex ea commodo consequat. \
    Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor \
    incididunt ut labore et dolore magna aliqua. ";
  return (
    <div className={classes.preview}>
      <div className={classes["preview__short-desc"]}>
        <div className={classes.preview__title}> Article preview title</div>
        <Tags />
        <div className={classes.preview__description}>{text}</div>
      </div>
      <div className={classes["preview__user-info"]}>
        <div className={classes.preview__name}>
          <span>Jone Doe</span>
          <span>{format(new Date(date), 'PP')} </span>
        </div>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
export default ArticlePreview;
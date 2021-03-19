/* eslint-disable no-multi-str */

import React from "react";
import classes from "./ArticlePreview.module.scss";

import avatar from "../../img/avatar.png";

const ArticlePreview = () =>{
  const text = "Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor \
    incididunt ut labore et dolore magna aliqua. \
     Ut enim ad minim veniam, quis nostrud exercitation \
     ullamco laboris  nisi ut aliquip ex ea commodo consequat."; 
return (
  <div className={classes.preview}>
    <div className={classes["preview__short-desc"]}>
      <div className={classes.preview__title}>title</div>
      <div className={classes.preview__tags}>tags</div>
      <div className={classes.preview__description}>{text}</div>
    </div>
    <div className={classes["preview__user-info"]}>
      <div className={classes.preview__name}>
        <span>name</span>
        <span>data</span>
      </div>
      <img src={avatar} alt="avatar" />
    </div>
  </div>
);
};
export default ArticlePreview;

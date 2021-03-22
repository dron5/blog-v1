/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

import like from "../../img/like.png";
import classes from "./Likes.module.scss";

const Likes = () => {
  const counter = 0;
return (
  <div className={classes.article__likes} >
    <button type="button" className={classes.article__like}>
      <img src={like} alt=""/>
    </button>
    <div className={classes["article__like-counter"]}>{counter}</div>
  </div>
);
};

export default Likes;
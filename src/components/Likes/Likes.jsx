/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

import like from "../../img/like.png";
import classes from "./Likes.module.scss";

const Likes = ({likes}) => (
    <div className={classes.article__likes}>
      <button type="button" className={classes["article__like-button"]}>
        <img src={like} alt="" />
      </button>
      <div className={classes["article__like-counter"]}>{likes}</div>
    </div>
  );

export default Likes;

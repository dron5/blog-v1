/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

import {
  favoriteArticleRequest,
} from "../../asyncActions/asyncStuff";
import like from "../../img/like.png";
import favLike from "../../img/favLike.png";
import classes from "./Likes.module.scss";

const Likes = ({ likes, favorited, slug, token }) => {
  const onDislike = () => console.log("in Dislike");
  const onLike = async () => {
    await favoriteArticleRequest(slug, token);
  };
  return (
    <div className={classes.article__likes}>
      <button
        type="button"
        className={classes["article__like-button"]}
        onClick={!favorited ? onLike : onDislike}
      >
        <img src={!favorited ? like : favLike} alt="like" />
      </button>
      <div className={classes["article__like-counter"]}>{likes}</div>
    </div>
  );
};

export default Likes;

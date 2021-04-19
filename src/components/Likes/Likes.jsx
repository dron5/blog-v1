/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";

import { favoriteArticleRequest } from "../../asyncActions/asyncStuff";
import like from "../../img/like.png";
import favLike from "../../img/favLike.png";
import classes from "./Likes.module.scss";

const Likes = ({ favoritesCount, favorited, slug, token }) => {
  const [ likes /* setLikes */] = useState(favoritesCount);
  console.log('favoritesCount', favoritesCount);
  console.log('likes', likes);
  const [ liked /* setLiked */] = useState(favorited);
  const onDislike = () => console.log("in Dislike");
  const onLike = async () => {
    await favoriteArticleRequest(slug, token);
  };
  return (
    <div className={classes.article__likes}>
      <button
        type="button"
        className={classes["article__like-button"]}
        onClick={!liked ? onLike : onDislike}
      >
        <img src={!liked ? like : favLike} alt="like" />
      </button>
      <div className={classes["article__like-counter"]}>{likes}</div>
    </div>
  );
};

export default Likes;

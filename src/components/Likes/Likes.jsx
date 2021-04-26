/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  favoriteArticleRequest,
  unFavoriteArticleRequest,
} from "../../services/asyncActions/asyncApi";
import like from "../../img/like.png";
import favLike from "../../img/favLike.png";
import classes from "./Likes.module.scss";

const Likes = ({ favoritesCount, favorited, slug, token }) => {
  const history = useHistory();
  const [likes, setLikes] = useState(favoritesCount);
  const [liked, setLiked] = useState(favorited);
  const onDislike = async () => {
    if (!token) {
      history.push("/sign-in");
      return;};
    await unFavoriteArticleRequest(slug, token);
    setLikes(() => likes - 1);
    setLiked(false);
  };
  const onLike = async () => {
    if (!token) { 
      history.push("/sign-in");
      return;};
    await favoriteArticleRequest(slug, token);
    setLikes(() => likes + 1);
    setLiked(true);
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

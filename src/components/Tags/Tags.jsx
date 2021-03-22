/* eslint-disable react/no-array-index-key */
import React from "react";
import classes from "./Tags.module.scss";

const Tags = () => {
  const tagList = ["gulag", "hype", "GM"];
  const part = tagList.map((el, i) => (
    <button key={i} type="button" className={classes.preview__tags}>
      {el}
    </button>
  ));
  return <div>{part}</div>;
};

export default Tags;

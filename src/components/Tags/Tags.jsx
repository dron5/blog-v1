/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import classes from "./Tags.module.scss";

const Tags = ({ tags }) => {
  const tagList = tags.map((el, i) => (
    <button key={i} type="button" className={classes.preview__tags}>
      {el}
    </button>
  ));
  return <div>{tagList}</div>;
};

export default Tags;

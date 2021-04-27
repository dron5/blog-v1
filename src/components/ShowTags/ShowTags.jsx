/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";

import classes from "./ShowTags.module.scss";

const ShowTags = ({ tags, cb, edit }) => {
  const btnClass = edit ? classes.form__tags : classes.preview__tags;
  const tagList = tags.map((el, i) => (
    <button
      key={i}
      type="button"
      className={btnClass}
      onClick={cb}
      name={el}
    >
      {el}
    </button>
  ));
  return <div>{tagList}</div>;
};

export default ShowTags;

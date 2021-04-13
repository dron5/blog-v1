/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";

import classes from "./ArticlePreview.module.scss";

const Delete = () => {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(()=>!show);
  return (
    <div className={classes["modal-wrapper"]}>
      <button 
        type="button"
        onClick={onClick}
        className={[classes.btn, classes["btn-del"]].join(" ")}
        >
        Delete
      </button>
      <div className={
        show 
          ? `${classes.modal}`
          : `${classes.modal} ${classes.hidden}`
      }>
        <span>A you sure?</span>
        <div>
          <button type="button">Yes</button>
          <button type="button">No</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
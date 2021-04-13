/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";

import classes from "./ArticlePreview.module.scss";

const Delete = () => {
  const [show, setShow] = useState(false);
  console.log('inDelete :', show);
  const onClick = () => setShow(()=>!show);
  return (
    <div className={classes.modalWrapper}>
      <button 
        type="button"
        onClick={onClick}
        className={[classes.btn, classes["btn-del"]].join(" ")}
        >
        Delete
      </button>
      <div className={
        classes.modal
      }>
        <button type="button">Ok</button>
      </div>
    </div>
  );
};

export default Delete;
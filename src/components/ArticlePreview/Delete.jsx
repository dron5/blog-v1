/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";

import classes from "./ArticlePreview.module.scss";

const Delete = () => {
  const [show, setShow] = useState(false);
  const onDelet = () => setShow(()=>true);
  const onConfirmYes = () => setShow(false);
  const onConfirmNo = () => setShow(false);
  console.log('show', show);
  return (
    <div className={classes["modal-wrapper"]}>
      <button 
        type="button"
        onClick={onDelet}
        className={[classes.btn, classes["btn-del"]].join(" ")}
        >
        Delete
      </button>
      <div className={
        show 
          ? `${classes.modal}`
          : `${classes.modal} ${classes.hidden}`
      }>
        <div className={classes.delete__arrow} />
        <span className={classes.delete__title}>A you sure to delete?</span>
        <div className={classes["btn-box"]}>
          <button 
            type="button" 
            onClick={onConfirmYes}
            className={[classes.btn, classes["btn-confirm"]].join(' ')}>
            Yes</button>
          <button 
            type="button"
            onClick={onConfirmNo}
            className={[classes.btn, classes["btn-confirm"]].join(' ')}>
            No</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
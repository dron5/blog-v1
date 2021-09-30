/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { deleteArticleRequest } from "../../../services/asyncActions/asyncApi.ts";
import classes from "./ArticlePreview.module.scss";

const Delete = ({ slug, token }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const onDelet = () => setShow(() => true);
  const onConfirmNo = () => setShow(false);
  const onConfirmYes = async () => {
    // const answer = await deleteArticleRequest(slug, token);
    await deleteArticleRequest(slug, token);
    setShow(false);
    history.push(`/articles`);
  };

  return (
    <div className={classes["modal-wrapper"]}>
      <button
        type="button"
        onClick={onDelet}
        className={[classes.btn, classes["btn-del"]].join(" ")}
      >
        Delete
      </button>
      <div
        className={
          show ? `${classes.modal}` : `${classes.modal} ${classes.hidden}`
        }
      >
        <div className={classes.delete__arrow} />
        <span className={classes.delete__title}>A you sure to delete?</span>
        <div className={classes["btn-box"]}>
          <button
            type="button"
            onClick={onConfirmYes}
            className={[classes.btn, classes["btn-confirm"]].join(" ")}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={onConfirmNo}
            className={[classes.btn, classes["btn-confirm"]].join(" ")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;

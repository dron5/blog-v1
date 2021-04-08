/* eslint-disable react/prop-types */
import React from "react";

import classes from "./NewArticle.module.scss";

const NewArticle = () => {
  const onSubmit = () => console.log('New article was created');
return (
  <div className={classes.container}>
    <span className={classes.article__title}>Create new article</span>
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes["form-group"]}>
        <input
          type="text"
          name="title"
          className={classes["form-control"]}
          placeholder=" "
          id="title"
        />
        <label htmlFor="title" className={classes["form-label"]}>
          <span>Title</span>
        </label>
      </div>
      <div className={classes["form-group"]}>
        <input
          type="text"
          name="shortdesc"
          className={classes["form-control"]}
          placeholder=" "
          id="shortdesc"
        />
        <label htmlFor="shortdesc" className={classes["form-label"]}>
          <span>Short description</span>
        </label>
      <div className={classes["form-group"]}>
        <textarea
          name="textarea"
          className={classes["form-control"]}
          placeholder=" "
          id="textarea"
        />
        <label 
          htmlFor="textarea"
          className={[classes["form-label"], classes.textarea].join(" ")}>
          <span>Article text</span>
        </label>
      </div>
      </div>    
    </form>
  </div>
);
};
export default NewArticle;

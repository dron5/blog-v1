/* eslint-disable react/prop-types */
import React from "react";

import classes from "./NewArticle.module.scss";

const NewArticle = () => {
  const onSubmit = () => console.log('New article was created');
return (
  <div className={classes.container}>
    <span className={classes.article__title}>Create new article</span>
    {/* <form className={classes.form} onSubmit={handleSubmit(onSubmit)}> */}
    <form className={classes.form} onSubmit={onSubmit}>
    <div className={classes["form-group"]}>
          <input
            // ref={register({ required: "email", maxLength: 20 })}
            type="text"
            name="title"
            className={classes["form-control"]}
            placeholder=" "
            id="title"
          />
          <label htmlFor="email" className={classes["form-label"]}>
            <span>Title</span>
          </label>
        </div>
    </form>
  </div>
);
};
export default NewArticle;

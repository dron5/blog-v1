/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";
import classes from "./NewArticle.module.scss";
import Tags from "../Tags";

const NewArticle = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log('errors', errors);
  // if(errors.title.message) console.log('errors.title.message', errors.title.message);
return (
  <div className={classes.container}>
    <span className={classes.article__title}>Create new article</span>
    <form id="article" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes["form-group"]}>
        <input
          ref={register({
            required: true,
            minLength: {
              value: 1,
              message: "It can not be empty",
            },
          })}
          type="text"
          name="title"
          className={
            !errors.title
                ? `${classes["form-control"]}`
                : [classes["form-control"], classes["alert-border"]].join(" ")
          }
          placeholder=" "
          id="title"
        />
        <label htmlFor="title" className={classes["form-label"]}>
          <span>Title</span>
        </label>
        {/* {errors.title && "Your input is required"} */}
        {errors.title && (
            <p className={classes["alert-message"]}>
              {errors.title.message}
            </p>
          )}
      </div>
      <div className={classes["form-group"]}>
        <input
          ref={register({
            required: true,
            minLength: {
              value: 1,
              message: "It can not be empty",
            },
          })}
          type="text"
          name="shortdesc"
          className={
            !errors.shortdesc
                ? `${classes["form-control"]}`
                : [classes["form-control"], classes["alert-border"]].join(" ")
          }
          placeholder=" "
          id="shortdesc"
        />
        <label htmlFor="shortdesc" className={classes["form-label"]}>
          <span>Short description</span>
        </label>
        {errors.shortdesc && (
            <p className={classes["alert-message"]}>
              {errors.shortdesc.message}
            </p>
          )}
      </div>
      <div className={classes["form-group"]}>
        <textarea
          ref={register({
            required: true,
            minLength: {
              value: 1,
              message: "It can not be empty",
            },
          })}
          name="textarea"
          className={
            !errors.tag
                ? `${classes["form-control"]}`
                : [classes["form-control"], classes["alert-border"]].join(" ")
          }
          placeholder=" "
          id="textarea"
        />
        <label 
          htmlFor="textarea"
          className={[classes["form-label"], classes.textarea].join(" ")}>
          <span>Article text</span>
        </label>
        {errors.textarea && (
            <p className={classes["alert-message"]}>
              {errors.textarea.message}
            </p>
          )}
      </div>
      </form>
      <Tags />
      <div className={classes.btn}>
        <button type="submit" form="article" className={classes["ant-btn-primary"]}>
          Send
        </button>
      </div>  
  </div>
);
};
export default NewArticle;

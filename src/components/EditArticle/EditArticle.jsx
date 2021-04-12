/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

// import { createArticleRequest } from "../../asyncActions/asyncStuff";
import classes from "./EditArticle.module.scss";
import Tags from "../Tags";

import { getUserSelector } from "../../store/selectors";

const NewArticle = ({ user }) => {
  const initState = [];
  const [tags, setTags] = useState(initState);
  const { register, handleSubmit, errors} = useForm();

  const toSetTag = (data) => {
    setTags([...tags, data]);
  };

  const toRemoveTag = (event) => {
    event.preventDefault();
    setTags(tags.filter((el)=> el !== event.target.name));
  };

  const onSubmit = (data) => {
    console.log(user.token, {...data, tagList:tags});
    // const args = {...data, tagList:tags};
    // const {token} = user.token;
    // createArticleRequest(args, token);
  };

  return (
    <div className={classes.container}>
      <span className={classes.article__title}>Create new article</span>
      <form
        id="article"
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes["form-group"]}>
          <input
            ref={register({
              required: true,
              message: "fuck",
            })}
            type="text"
            name="title"
            className={`${classes["form-control"]}`}
            placeholder=" "
            id="title"
          />
          <label htmlFor="title" className={classes["form-label"]}>
            <span>Title</span>
          </label>
          {errors.title && (
            <p className={classes["alert-message"]}>It can`t be empty</p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <input
            ref={register({
              required: true,
            })}
            type="text"
            name="description"
            className={`${classes["form-control"]}`}
            placeholder=" "
            id="description"
          />
          <label htmlFor="description" className={classes["form-label"]}>
            <span>Short description</span>
          </label>
          {errors.description && (
            <p className={classes["alert-message"]}>It can`t be empty</p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <textarea
            ref={register({
              required: true,
            })}
            name="text"
            className={`${classes["form-control"]}`}
            placeholder=" "
            id="text"
          />
          <label
            htmlFor="text"
            className={[classes["form-label"], classes.textarea].join(" ")}
          >
            <span>Article text</span>
          </label>
          {errors.text && (
            <p className={classes["alert-message"]}>It can`t be empty</p>
          )}
        </div>
      </form>
      <Tags toSetTag={toSetTag} toRemoveTag={toRemoveTag} tags={tags}/>
      <div className={classes.btn}>
        <button
          type="submit"
          form="article"
          className={classes["ant-btn-primary"]}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps)(NewArticle);

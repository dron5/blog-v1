/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import classes from "./ArticleForm.module.scss";
import Tags from "../../components/Tags";

const ArticleForm = ({ sendArticle, dataForEdit, pageTitle }) => {
  const initState = [];
  const [tags, setTags] = useState(
    dataForEdit ? [...dataForEdit.tagList] : initState
  );
  const { register, handleSubmit, errors } = useForm();

  const toSetTag = (data) => {
    const tag = data.trim();
    if(!tag || tags.includes(tag)) return;
    setTags([...tags, tag]);
  };

  const toRemoveTag = (event) => {
    event.preventDefault();
    setTags(tags.filter((el) => el !== event.target.name));
  };

  const onSubmit = (data) => sendArticle(data, tags);

  return (
    <div className={classes.container}>
      <span className={classes.article__title}>{pageTitle}</span>
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
            defaultValue={dataForEdit ? dataForEdit.title : null}
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
            defaultValue={dataForEdit ? dataForEdit.description : null}
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
            defaultValue={dataForEdit ? dataForEdit.body : null}
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
      <Tags toSetTag={toSetTag} toRemoveTag={toRemoveTag} tags={tags} />
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

export default ArticleForm;

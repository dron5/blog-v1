/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useForm } from "react-hook-form";

import classes from "./Tags.module.scss";

const Tags = ({ toSetTag, toRemoveTag, tags }) => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    toSetTag(data.tag);
    reset();
  };
  return (
    <div className={classes.container}>
      <MyTags tags={tags} toRemoveTag={toRemoveTag} />
      <form
        id="setTag"
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes["form-group"]}>
          <input
            ref={register({
              required: true,
            })}
            type="text"
            name="tag"
            className={`${classes["form-control"]}`}
            placeholder=" "
            id="tag"
          />
          <label htmlFor="tag" className={classes["form-label"]}>
            <span>New tag</span>
          </label>
        </div>
        <button type="submit" className={classes["btn-input"]}>
          Add tag
        </button>
      </form>
    </div>
  );
};

const MyTags = ({ tags, toRemoveTag }) => {
  const taglist = tags.map((name, i) => (
    <form key={i} className={[classes.form, classes.tag].join(" ")}>
      <div className={classes["form-group"]}>
        <input
          className={`${classes["form-control"]}`}
          type="text"
          value={name}
          onChange={() => {}}
        />
      </div>
      <button
        type="submit"
        onClick={toRemoveTag}
        className={[classes["btn-input"], classes["btn-del"]].join(" ")}
        name={name}
      >
        Delete
      </button>
    </form>
  ));
  return <>{taglist}</>;
};
export default Tags;

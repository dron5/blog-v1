/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useForm } from "react-hook-form";

import ShowTags from "../ShowTags/ShowTags";

import classes from "./Tags.module.scss";

const Tags = ({ toSetTag, toRemoveTag, tags }) => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    toSetTag(data.tag);
    reset();
  };
  return (
    <div className={classes.container}>
      <ShowTags tags={tags} cb={toRemoveTag} edit />
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

export default Tags;

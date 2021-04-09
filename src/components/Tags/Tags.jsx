/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useForm } from "react-hook-form";

import classes from "./Tags.module.scss";

const Tags = ({tags}) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={classes.container}>
      <MyTags tags={tags}/>
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

const MyTags = ({tags}) => {
  const taglist = tags.map((name, i) =>
      <form className={classes.form} key={i}>
      <div className={classes["form-group"]}>
        <input 
          className={`${classes["form-control"]}`}
          type="text"
          defaultValue={name}
          onChange={()=>{}}
        />
        <button
          type="submit"
          onClick={(ev)=>{ev.preventDefault();}}
          className={classes["btn-input"]}
         >
          Delete
        </button>
        </div>
      </form>
    );
  return (
    <>
      {taglist}
    </>
  );
};
export default Tags;

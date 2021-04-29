/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import noavatar from "../../img/avatar.png";

const Avatar = ({ avatar }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!avatar) {
      setImage(noavatar);
    } else {
      const request = async () => {
        const answer = await fetch({ avatar });
        if (answer.status === 200) {
          setImage(avatar);
          console.log("answer status :", answer.status);
        } else {
          setImage(noavatar);
          console.log("noavatar, answer status", answer.status);
        }
      };
      request();
    }
  }, [avatar]);
  return (
    // <img src={avatar || noavatar} alt="avatar" />
    <img src={image} alt="avatar" />
  );
};

export default Avatar;

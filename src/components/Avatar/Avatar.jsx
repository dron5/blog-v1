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
        const response = await fetch({ avatar });
        if (response.ok) {
          setImage(avatar);
          console.log("response status :", response.status);
        } else {
          setImage(noavatar);
          console.log("noavatar, response status", response.status);
        }
      };
      request();
    }
  }, [avatar]);
  return (
    <img src={image} alt="avatar" />
  );
};

export default Avatar;

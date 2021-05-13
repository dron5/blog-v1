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
        // setImage(avatar);
        console.log("url :", avatar);
        const body = await response.blob();
        console.log("response", body);
        if (response.status === 200) {
          setImage(avatar);
          console.log("response status :", response.status);
        } else {
          console.log("noavatar, response status", response.status);
          setImage(noavatar);
        }
      };
      request();
    }
  }, [avatar]);
  return <img src={image} alt="avatar" />;
};

export default Avatar;

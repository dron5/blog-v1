import React from "react";

import { Pagination } from "antd";
import classes from "./Footer.module.scss";

const Footer = () => (
  <div className={classes.footer}>
    <Pagination
      className={classes.pagination}
      total={100}
      onChange={() => {}}
      showSizeChanger={false}
      defaultCurrent={1}
    />
  </div>
);

export default Footer;

/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { Pagination } from "antd";
import classes from "./Footer.module.scss";
import { getLoading } from "../../store/selectors";

const Footer = ({loading}) => (
  <div className={classes.footer}>
    {!loading &&
    <Pagination
      className={classes.pagination}
      total={100}
      onChange={() => {}}
      showSizeChanger={false}
      defaultCurrent={1}
    />
    }
  </div>
);


const mapStateToProps = (state) => ({
  loading: getLoading(state),
});


export default connect(mapStateToProps, null)(Footer);

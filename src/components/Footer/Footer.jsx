/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { Pagination } from "antd";
import * as fetch from "../../store/actions";
import classes from "./Footer.module.scss";
import { getLoading } from "../../store/selectors";

const Footer = ({ loading, addArticles }) => {

  const setPage = (page=1) =>{
    console.log('page :', page);
    addArticles(page*10-10);
  };


  return (
  <div className={classes.footer}>
    {!loading && (
      <Pagination
        className={classes.pagination}
        total={100}
        onChange={setPage}
        showSizeChanger={false}
        defaultCurrent={1}
      />
    )}
  </div>
);
};
const mapStateToProps = (state) => ({
  loading: getLoading(state),
});

export default connect(mapStateToProps, fetch)(Footer);

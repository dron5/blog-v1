/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { Pagination } from "antd";
import * as fetch from "../../store/actions";
import classes from "./Footer.module.scss";
import {
  getLoading,
  getCurrentPage,
  getUserSelector,
} from "../../store/selectors";

const Footer = ({
  loading,
  addArticlesAction,
  addCurrentPageAction,
  currentPage,
  user,
}) => {
  const token = user ? user.token : "";
  const setPage = (page = 1) => {
    addArticlesAction({ offset: page * 10 - 10 }, token);
    addCurrentPageAction(page);
  };

  return (
    <div className={classes.footer}>
      {!loading && (
        <Pagination
          className={classes.pagination}
          total={100}
          onChange={setPage}
          showSizeChanger={false}
          defaultCurrent={currentPage}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  currentPage: getCurrentPage(state),
  user: getUserSelector(state),
});

export default connect(mapStateToProps, fetch)(Footer);

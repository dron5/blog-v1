/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { Pagination } from "antd";
import * as fetch from "../../store/actions/articlesActions";
import classes from "./Footer.module.scss";
import {
  getLoadingSelector,
  getCurrentPageSelector,
  getUserSelector,
  getSearchWordSelector,
  getTotalCountSelector,
} from "../../store/selectors";

const Footer = ({
  loading,
  addArticlesAction,
  addCurrentPageAction,
  currentPage,
  user,
  searchWord,
  total
}) => {
  const token = user ? user.token : "";
  const setPage = (page = 1) => {
    addArticlesAction({ offset: page * 10 - 10, author: searchWord }, token);
    addCurrentPageAction(page);
  };

  return (
    <div className={classes.footer}>
      {!loading && (
        <Pagination
          className={classes.pagination}
          total={total}
          onChange={setPage}
          showSizeChanger={false}
          defaultCurrent={currentPage}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: getLoadingSelector(state),
  currentPage: getCurrentPageSelector(state),
  user: getUserSelector(state),
  searchWord: getSearchWordSelector(state),
  total: getTotalCountSelector(state),
});

export default connect(mapStateToProps, fetch)(Footer);

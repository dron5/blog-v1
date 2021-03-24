/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import * as fetch from "../../store/actions";
import { getArticle } from "../../store/selectors";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

const Article = ({ article }) => (
  <div className={classes.article}>
    <ArticlePreview {...article} theOne />
  </div>
);

const mapStateToProps = (state, props) => ({
  article: getArticle(props.id)(state),
});

export default connect(mapStateToProps, fetch)(Article);

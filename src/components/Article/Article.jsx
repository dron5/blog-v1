/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import ArticlePreview from "../ArticlePreview/ArticlePreview";
import * as fetch from "../../store/actions";
import { getArticle } from "../../store/selectors";
import classes from "./Article.module.scss";

const Article = ({article}) => (
  <div className={classes.article}>
    <ArticlePreview {...article} />
  </div>
  );
  
const mapStateToProps = (state, props) => ({
  article: getArticle(props.id)(state),
});

export default connect(mapStateToProps, fetch)(Article);

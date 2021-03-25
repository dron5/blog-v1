// /* eslint-disable react/prop-types */
/* eslint-disable */
import React from "react";
import { connect } from "react-redux";

import * as fetch from "../../store/actions";
import { getArticle, getArticles} from "../../store/selectors";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

// const Article = ({  article }) => (
//     <div className={classes.article}>
//       <ArticlePreview {...article} theOne />
//     </div>
//   );

const Article = ({ article, articles }) => {
  console.log('article :', article);
  // console.log('slug :', slug);
  console.log('Articles :', articles);
  return (
    <div className={classes.article}>
      <ArticlePreview {...article} theOne />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  article: getArticle(props.slug)(state),
  articles: getArticles(state),
});

export default connect(mapStateToProps, fetch)(Article);

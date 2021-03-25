// /* eslint-disable react/prop-types */
/* eslint-disable */
import React from "react";
import { connect } from "react-redux";

import * as fetch from "../../store/actions";
import { getArticle } from "../../store/selectors";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import classes from "./Article.module.scss";

const Article = ({  article }) => (
    <div className={classes.article}>
      <ArticlePreview {...article} theOne />
    </div>
  );

const mapStateToProps = (state, props) => ({
  article: getArticle(props.slug)(state),
});


// const Article = ({  article }) => {
//   console.log('article :', article);
//   // console.log('slug :', slug);
//   return (
//     <div className={classes.article}>
//       <ArticlePreview {...article} theOne />
//     </div>
//   );
// };
// const mapStateToProps = (state, props) => ({
//   article: getArticle(props.slug)(state),
// });

export default connect(mapStateToProps, fetch)(Article);

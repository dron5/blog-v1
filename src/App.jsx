import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ArticleList from "./components/ArticleList/ArticleList";
import Article from "./components/Article/Article";
import NewArticle from "./components/NewArticle/NewArticle";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";

import "./App.css";

const App = () => (
  <>
    <Router>
      <Header />
      <Route path="/articles" exact component={ArticleList} />
      <Route path="/" exact component={ArticleList} />
      <Route
        path="/articles/:slug"
        render={({ match }) => {
          const { slug } = match.params;
          return <Article slug={slug} />;
        }}
      />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/profile" component={Profile} />
      <Route path="/new-article" component={NewArticle} />
    </Router>
  </>
);

export default App;

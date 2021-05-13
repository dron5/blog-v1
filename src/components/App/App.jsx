import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ArticleList from "../ArticleList/ArticleList";
import Article from "../Article/Article";
import NewArticle from "../NewArticle/NewArticle";
import EditArticle from "../EditArticle/EditArticle";
import Header from "../Header/Header";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Profile from "../Profile/Profile";

import "./App.css";

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/articles" />
        <Route path="/articles" exact component={ArticleList} />
        <Route
          path="/articles/:slug"
          exact
          render={({ match }) => {
            const { slug } = match.params;
            return <Article slug={slug} />;
          }}
        />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/new-article" component={NewArticle} />
        <Route path="/articles/:slug/edit" exact component={EditArticle} />
        <Redirect to="/articles" />
      </Switch>
    </Router>
  </>
);

export default App;

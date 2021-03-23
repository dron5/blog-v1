import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ArticleList from "./components/ArticleList/ArticleList";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

import "./App.css";

const App = () => (
  <>
    <Router>
      <Header />
      <Route path="/articles" exact component={ArticleList} />
      {/* <Route path="/articles/:id" component={Article} /> */}
      <Route path="/articles/:id" 
      render={() => <Article />} />

      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Router>
  </>
);

export default App;

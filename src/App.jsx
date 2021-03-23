import React from "react";
import  {BrowserRouter as Router, Route} from 'react-router-dom';

import ArticleList from "./components/ArticleList/ArticleList";
import ArticlePreview from "./components/ArticlePreview/ArticlePreview";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";

import "./App.css";

const App = () => (
  <>
    <Router>
      <Header />
      <Route path="/articles" exact component={ArticleList} />
      <Route path="/articles/:id" component={ArticlePreview} />
      <Route path="/signup" component={SignUp} />
      <Footer />
    </Router>
  </>
);

export default App;

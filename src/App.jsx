import React from "react";

import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => (
  <>
    <Header />
    <ArticleList />
    <Footer />
  </>
);

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {CookiesProvider} from "react-cookie";

import store from "./store/store";
import App from "./App";
import "antd/dist/antd.css";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);

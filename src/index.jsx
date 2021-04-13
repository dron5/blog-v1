import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { CookiesProvider } from "react-cookie";

import { store, persistor } from "./store/store";
import App from "./App";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // <CookiesProvider>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </CookiesProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Alert } from "antd";

import { store, persistor } from "./store/store";
import App from "./components/App/App";
import "antd/dist/antd.css";

const { ErrorBoundary } = Alert;

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

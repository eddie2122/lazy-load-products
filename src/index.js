import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";

const Loading = () => {
  return;
};

ReactDOM.render(
  <React.Suspense fallback={<h2>Loading...</h2>}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById("root")
);

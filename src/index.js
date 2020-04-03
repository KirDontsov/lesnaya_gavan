import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { init } from "@rematch/core";

import shutter from "./models/shutter";
import callBack from "./models/callBack";
import form from "./models/form";
import scroll from "./models/scroll";

import App from "./App";

const store = init({
  models: {
    shutter,
    callBack,
    form,
    scroll
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import { BrowserRouter } from "react-router-dom";

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

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

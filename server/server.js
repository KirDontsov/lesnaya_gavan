import fs from "fs";
import path from "path";
import React from "react";
import ReactDomServer from "react-dom/server";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import { StaticRouter } from "react-router-dom";

import shutter from "../src/models/shutter";
import callBack from "../src/models/callBack";
import form from "../src/models/form";
import scroll from "../src/models/scroll";

import App from "../src/App";

const store = init({
	models: {
		shutter,
		callBack,
		form,
		scroll
	}
});
const express = require("express");

const app = express();
const PORT = 3000;
const context = {};

app.use("^/$", (req, res, next) => {
	fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
		if (err) {
			console.error(err);
			return res.status(500).send("Ошибка");
		}
		return res.send(
			data.replace(
				'<div id="root"></div>',
				`<div id="root">${ReactDomServer.renderToString(
					<Provider store={store}>
						<StaticRouter location={req.url} context={context}>
							<App />
						</StaticRouter>
					</Provider>
				)}</div>`
			)
		);
	});
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});

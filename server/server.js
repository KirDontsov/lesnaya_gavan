import fs from "fs";
import path from "path";
import React from "react";
import ReactDomServer from "react-dom/server";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";

import shutter from "../src/models/shutter";
import callBack from "../src/models/callBack";
import form from "../src/models/form";
import scroll from "../src/models/scroll";
import { routes } from "../src/routes";

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

const router = express.Router();

const serverRenderer = (req, res, next) => {
	const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

	const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

	promise.then(data => {
		const context = { data };

		const markUp = ReactDomServer.renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					<App />
				</StaticRouter>
			</Provider>
		);

		fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
			if (err) {
				console.error(err);
				return res.status(500).send("Ошибка");
			}
			return res
				.send(
					data.replace('<div id="root"></div>', `<div id="root">${markUp}</div>`)`<script>window.__INITIAL_DATA__ = ${serialize(
						data
					)}</script>`
				)
				.catch(next);
		});
	});
};

router.use("^/$", serverRenderer);

router.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(router);

app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});

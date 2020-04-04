import fs from "fs";
import path from "path";
import React from "react";
import ReactDomServer from "react-dom/server";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import { StaticRouter } from "react-router-dom";
import Helmet from "react-helmet";

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

const router = express.Router();
const helmet = Helmet.renderStatic();

const serverRenderer = (req, res, next) => {
	let context = {};

	const markUp = ReactDomServer.renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		</Provider>
	);

	fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, indexData) => {
		if (err) {
			console.error(err);
			return res.status(500).send("Ошибка");
		}
		if (context.status === 404) {
			res.status(404);
		}
		if (context.url) {
			return res.redirect(301, context.url);
		}
		return res.send(
			indexData
				.replace("<title></title>", helmet.title.toString())
				.replace('<meta name="description" content=""/>', helmet.meta.toString())
				.replace('<div id="root"></div>', `<div id="root">${markUp}</div>`)
		);
	});
};

router.use("^/$", serverRenderer);

router.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(router);

app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});

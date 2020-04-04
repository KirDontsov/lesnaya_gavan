require("ignore-styles");
require("webpack");
require("@babel/register")({
	ignore: [/(node_modules)/],
	presets: ["@babel/preset-env", "@babel/preset-react"],
	plugins: ["@babel/plugin-proposal-class-properties"]
});
require("./server");

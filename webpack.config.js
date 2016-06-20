var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
				}
			}
		]
	},
	output: {
		path: __dirname + '/app/',
		filename: "index_bundle.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
}
const path = require('path');
const webpack = require('webpack');

const DEBUG = process.env.NODE_ENV !== 'production';

// >> Target Structure <<
// > Root App
const APP_FOLDER = path.resolve(__dirname, './app');
// > Dist
const DIST_FOLDER = path.resolve(APP_FOLDER, './dist');

const DIST_FILE_JS_BUNDLE = 'js/bundle.js';

// > Src
const SRC_FOLDER = path.resolve(APP_FOLDER, './src');
const SRC_FILE_JS_APP = path.resolve(SRC_FOLDER, './index.jsx');

module.exports = {
	// > JS Input / Output
	entry: ['babel-polyfill', SRC_FILE_JS_APP],
	output: {
		path: DIST_FOLDER,
		publicPath: '/dist/',
		filename: DIST_FILE_JS_BUNDLE,
		sourceMapFilename: 'sourcemaps/[file].map',
	},
	// > Module Folders (packages and extensions)
	resolve: {
		modules: ['node_modules', APP_FOLDER],
		extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
		descriptionFiles: ['package.json'],
	},
	// > Module Handles
	module: {
		rules: [
			// > JS / JSX
			{
				test: /\.(js|jsx)?$/,
				loader: 'babel-loader',
				include: [APP_FOLDER],
				exclude: /(node_modules)/,
				query: {
					presets: ['es2015', 'react', 'stage-2'],
				},
			},
			// > CSS / SCSS
			
		], // rules
	}, // module
	devtool: DEBUG ? 'source-map' : '',
	context: __dirname,
	target: 'web',
	plugins:
		DEBUG ?
			[
				new webpack.DefinePlugin({
					'process.env': {
						NODE_ENV: JSON.stringify('development'),
					},
				}),
			] :
			[
				new webpack.DefinePlugin({
					'process.env': {
						NODE_ENV: JSON.stringify('production'),
					},
				}),
				new webpack.optimize.OccurrenceOrderPlugin(),
				// > Minimize JS
				new webpack.optimize.UglifyJsPlugin({
					sourceMap: false,
					mangle: false,
				}),
			], // plugins
	cache: false,
	watchOptions: {
		aggregateTimeout: 1000,
		poll: true,
	},
	devServer: {
		contentBase: APP_FOLDER,
		compress: true,
		inline: true,
		port: 4000,
	},
};

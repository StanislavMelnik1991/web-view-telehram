/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	devServer: {
		open: true,
		host: 'localhost',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: false,
			inject: 'body',
			favicon: './src/assets/logo.svg'
		}),
		new EslintPlugin({ extensions: 'ts' }),
		
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, {
					loader: 'css-loader',
					options: {
						modules: {
							namedExport: true,
							exportLocalsConvention: function (name) {
								return name.replace(/-/g, '_');
							},
						},
					}
				}
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
			/* {
		test: /\.(svg)$/i,
		type: "asset/source",
	  }, */

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
		alias: {
			'@': path.join(__dirname, './src'),
			'@hooks': path.join(__dirname, './src/hooks/redux.ts'),
			'@reducers': path.join(__dirname, './src/store/reducers/')
		}
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';

		config.plugins.push(new MiniCssExtractPlugin());


		config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

	} else {
		config.mode = 'development';
	}
	return config;
};
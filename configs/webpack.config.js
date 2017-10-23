const path = require('path')

module.exports = {
  entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, '../www/js'),
		filename: '[name].js'
	},
	node: {
    __dirname: false
  },
	devtool: "source-map",
	module: {
		rules: [{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.tsx?$/,
				loader: ["babel-loader", "awesome-typescript-loader"]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'standard-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
	},
	externals: {

	}
}

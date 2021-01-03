const path = require("path");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  mode: "development",
  context: path.join(__dirname, "client"),
  entry: ["./index.js"],
  output: {
    path: path.join(__dirname, "./server/public/dist"),
    filename: "bundle.js"
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    disableHostCheck: true,
    contentBase: './client/dist',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
          plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
        }
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'client/components/'),
      constants: path.resolve(__dirname, 'client/constants/'),
    }
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new AssetsPlugin({ filename: 'assets.json' })
  ]
};
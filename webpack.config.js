const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
        patterns: [
          { from: "static", to: "img" },
          { from: "static/fonts", to: "fonts" },
          { from: "templates", to: "template" },
          { from: "data", to: "data" },

        ]
      }),
],

  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader,
             "css-loader",
             "less-loader"
            ],
      },
    ],
  },
};
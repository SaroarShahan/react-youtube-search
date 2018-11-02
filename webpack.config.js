const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "YouTube Search",
      template: "./public/index.html",
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
};

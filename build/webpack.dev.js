const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  mode: "development",
  target: "web",
  devServer: {
    host: "127.0.0.1",
    historyApiFallback: true,
    server: "http",
    static: {
      publicPath: "/",
    },
    client: {
      overlay: false,
    },
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["tsx", "ts"],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

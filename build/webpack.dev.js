const webpack = require("webpack")
const ESLintPlugin = require("eslint-webpack-plugin")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")

module.exports = merge(baseConfig, {
  entry: {
    index: {
      import: "./src/index.tsx",
      dependOn: ["vendor"],
    },
    vendor: {
      import: ["react", "react-dom"],
      runtime: "runtime",
    },
  },
  devtool: "eval",
  mode: "development",
  target: "web",
  devServer: {
    hot: true,
    host: "127.0.0.1",
    port: 8000,
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
  ],
})

const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "script/[contenthash].bundle.js",
    chunkFilename: "script/[contenthash].js",
  },
})

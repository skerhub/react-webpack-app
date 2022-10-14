const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "script/[contenthash].bundle.js",
    chunkFilename: "script/[contenthash].js",
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
})

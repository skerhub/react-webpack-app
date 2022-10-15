const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")

module.exports = merge(baseConfig, {
  entry:"./src/index.tsx",
  mode: "production",
  output: {
    filename: "script/[contenthash].bundle.js",
    chunkFilename: "script/[contenthash].js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
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
  externals:{
    React:"react",
    ReactDOM:"react-dom"
  },
  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: "react",
          entry: "https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js",
          global: "React",
        },
        {
          module: 'react-dom',
          entry: 'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ],
})

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { REACT_ENV } = process.env
const domanConfig = require("./domain.config")
function commit() {
  const child_process = require("child_process")
  const spawn = child_process.spawnSync("git", ["show", "-s", "--format=%h"])
  if (spawn.error) {
    return "当前构建环境不支持"
  } else {
    return spawn.stdout.toString().trim()
  }
}

module.exports = {
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
  output: {
    path: path.join(__dirname, "..", "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", "...", ".tsx", ".js"],
    alias: {
      "@": path.join(__dirname, "../src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { useBuiltIns: "usage", corejs: "3.8" }],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          REACT_ENV == "dev"
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: "__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true },
          },
          {
            loader: "less-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      title: "webpack+pnpm+react",
      template: path.resolve(__dirname, "../index.html"),
      favicon: path.resolve(__dirname, "../static/favicon.ico"),
    }),
    new MiniCssExtractPlugin({
      filename: "style/[contenthash].css",
      chunkFilename: "style/[contenthash].css",
    }),
    new webpack.DefinePlugin({
      DOMAIN_PREFIX: JSON.stringify(domanConfig[REACT_ENV]),
      REACT_ENV: JSON.stringify(REACT_ENV),
      BUILD_INFO: JSON.stringify(`COMMIT_ID: ${commit()}`),
    }),
    new CopyWebpackPlugin({
      patterns: ["static"],
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
}

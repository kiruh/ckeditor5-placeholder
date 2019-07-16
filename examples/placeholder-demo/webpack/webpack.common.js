const Path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, "../src/scripts/index.js"),
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, "../public"), to: "public" },
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/index.html"),
    }),
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["raw-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true,
            },
          },
          {
            loader: "postcss-loader",
            options: styles.getPostCssConfig({
              themeImporter: {
                themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
              },
              minify: true,
            }),
          },
        ],
      },
    ],
  },
};

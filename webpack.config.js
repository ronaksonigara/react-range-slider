const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/",
    filename: "index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build",
    open: true,
    port: 3000,
    stats: "errors-warnings",
  },
  module: {
    rules: [
      {
        // match js or jsx file
        test: /\.(js|jsx)$/,
        // ignore node modules
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.less$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles less to CSS
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

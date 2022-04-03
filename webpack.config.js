// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: {
    index: path.join(__dirname, "src", "index.ts"),
  },
  mode: "production",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /.ts$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                sync: true,
                syntax: "typescript",
              },
            },
          },
        },
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    // To omit the extension for import
    extensions: [".ts", ".js"],
  },
  target: "node",
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
module.exports = config

module.exports = {
  mode: "development",
  entry: {
    "main-with-chunks": "./src/main-with-chunks.js",
    "main-with-externals": "./src/main-with-externals.jsx",
  },
  externals: {
    react: "REACT_GLOBAL",
    "react-dom/client": "REACT_DOM_GLOBAL",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        jqueryVendor: {
          test: /node_modules\/jquery/,
          name: "jquery-from-split-chunks",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};

const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  externals: {
      "ramda": "R"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  'mode': 'development',
  devtool: 'inline-source-map'
};

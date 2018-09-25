const nodeExternals = require('webpack-node-externals')
const path = require('path')

const client = {
  entry: './src/client.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
    }]
  },
}

const server = {
  entry: './src/server.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
    }]
  },

  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
}

module.exports = [client, server]
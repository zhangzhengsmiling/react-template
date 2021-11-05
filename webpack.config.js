const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: 8000,
    client: {
      logging: 'none',
    }
  },
  entry: {
    app: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'this is title...',
      template: path.resolve(__dirname, './public/index.html'),
      publicPath: '/',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      require('./loaders/js-loader'),
      require('./loaders/ts-loader'),
      require('./loaders/less-loader').lessModuleLoader,
      require('./loaders/less-loader').lessLoader,
      require('./loaders/sass-loader').sassModuleLoader,
      require('./loaders/sass-loader').sassLoader,
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  stats: 'minimal',
}

module.exports = config;

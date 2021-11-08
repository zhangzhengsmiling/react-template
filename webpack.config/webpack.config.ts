import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import LOADER_JS from './loaders/js-loader';
import LOADER_TS from './loaders/ts-loader';
import { lessModuleLoader, lessLoader } from './loaders/less-loader';
import { sassLoader, sassModuleLoader } from './loaders/sass-loader';
import LOADER_IMG from './loaders/img-loader';
import LOADER_FONT from './loaders/font-loader';
import { MiniCssExtractPlugin } from './plugins/plugin-mini-css-extract';

const cwd = process.cwd();

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
    app: path.resolve(cwd, './src/index.tsx'),
  },
  output: {
    path: path.resolve(cwd, './build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'this is title...',
      template: path.resolve(cwd, './public/index.html'),
      publicPath: '/',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  resolve: {
    // ！important 动态配置，不必要的后缀配置不要加，出现频率高的后缀往前提
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.html', '.json', '.scss', '.sass', '.less'],
    alias: {
      "@": path.resolve(cwd, './src')
    }
  },
  module: {
    rules: [
      LOADER_JS,
      LOADER_TS,
      lessModuleLoader,
      lessLoader,
      sassLoader,
      sassModuleLoader,
      LOADER_IMG,
      LOADER_FONT,
      // {
      //   test: /(?<!\.module)\.less/,
      //   include: path.resolve(cwd, 'src'),
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     {
      //       loader: 'css-loader'
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: [
      //             require('autoprefixer')
      //           ],
      //         },
      //       },
      //     },
      //     { loader: 'less-loader' },
      //   ]
      // },

    ]
  },
  stats: 'minimal',
}

module.exports = config;

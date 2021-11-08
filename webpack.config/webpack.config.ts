import path from 'path';
// import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { ESBuildPlugin } from 'esbuild-loader';
import LOADER_JS from './loaders/js-loader';
import LOADER_TS from './loaders/ts-loader';
import { lessModuleLoader, lessLoader } from './loaders/less-loader';
import { sassLoader, sassModuleLoader } from './loaders/sass-loader';
import LOADER_IMG from './loaders/img-loader';
import LOADER_FONT from './loaders/font-loader';
import { MiniCssExtractPlugin } from './plugins/plugin-mini-css-extract';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const cwd = process.cwd();

// import SpeedMesuarePlugin from 'speed-measure-webpack-plugin';
// const smp = new SpeedMesuarePlugin();
//
interface INodeEnv {
  NODE_ENV: string;
}

enum EnumEnvironment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

const getENV = (environment: INodeEnv): EnumEnvironment => {
  const DEFAULT_ENV = EnumEnvironment.PRODUCTION;
  if (environment.NODE_ENV === undefined) return DEFAULT_ENV;
  return environment.NODE_ENV as EnumEnvironment;
}

const wrapperDevServer = (devServerConfig: any) => {
  return (webpackConfig: any) => {
    return {
      devServer: devServerConfig,
      ...webpackConfig,
    }
  }
}

const ENV = getENV(process.env as any)

const devServerConfig = {
  host: '127.0.0.1',
  port: 8000,
  // host: 'dev.yourdomain.com',
  // allowedHosts: ['dev.yourdomain.com'],
  // port: 443,
  // client: {
  //   logging: 'none',
  // },
  // https: {
  //   key: fs.readFileSync(path.join(__dirname, './local-ssl/ext.yourdomain.com.key')),
  //   cert: fs.readFileSync(path.join(__dirname, './local-ssl/ext.yourdomain.com.crt'))
  // }
}

const DOC_TITLE = 'title';
const COPY_CONFIG = [
  { from: path.resolve(cwd, 'public/imgs'), to: path.resolve(cwd, 'build/imgs') },
  { from: path.resolve(cwd, 'public/config'), to: path.resolve(cwd, 'build/config') },
]
const CONFIG_PATH = ENV === EnumEnvironment.DEVELOPMENT ? '/config/config.dev.js' : '/config/config.prod.js';

const config = {
  entry: {
    app: path.resolve(cwd, './src/index.tsx'),
  },
  output: {
    path: path.resolve(cwd, './build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: COPY_CONFIG
    }),
    new HtmlWebpackPlugin({
      title: ENV === EnumEnvironment.DEVELOPMENT ? `${DOC_TITLE}-${ENV}` : DOC_TITLE,
      configPath: CONFIG_PATH,
      template: path.resolve(cwd, './public/index.html'),
      publicPath: '/',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: ENV === EnumEnvironment.PRODUCTION ? '[name].[chunkhash:8].css' : '[name].css'
    }),
    new ESBuildPlugin(),
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
    ]
  },
  stats: 'minimal',
}

if (ENV === EnumEnvironment.DEVELOPMENT) {
  (config as any).devServer = devServerConfig;
}

if (ENV === EnumEnvironment.PRODUCTION) {
  config.output.filename = '[name].bundle.[chunkhash:8].js';
}

module.exports = config;

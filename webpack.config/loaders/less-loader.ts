import path from 'path';
import { loader } from '../plugins/plugin-mini-css-extract';
const cwd = process.cwd();

export const lessLoader = {
  test: /(?<!\.module)\.less/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader },
    {
      loader: 'css-loader'
    },
    { loader: 'less-loader' },
  ]
}

export const lessModuleLoader = {
  test: /\.module\.less$/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
    { loader: 'less-loader' },
  ]
}

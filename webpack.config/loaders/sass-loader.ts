import path from 'path';
const cwd = process.cwd();

export const sassLoader = {
  test: /(?<!\.module)\.(scss|sass)/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader'
    },
    { loader: 'sass-loader' },
  ]
}

export const sassModuleLoader = {
  test: /\.module\.(sass|scss)$/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
    { loader: 'sass-loader' },
  ]
}

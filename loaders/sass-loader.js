const path = require('path');
const cwd = process.cwd();

const loader = {
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

const sassModuleLoader = {
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

module.exports = {
  sassLoader: loader,
  sassModuleLoader,
};

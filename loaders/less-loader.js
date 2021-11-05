const path = require('path');
const cwd = process.cwd();

const loader = {
  test: /(?<!\.module)\.less/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader'
    },
    { loader: 'less-loader' },
  ]
}

const lessModuleLoader = {
  test: /\.module\.less$/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
    { loader: 'less-loader' },
  ]
}

module.exports = {
  lessLoader: loader,
  lessModuleLoader,
};
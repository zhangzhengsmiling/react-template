const path = require('path');
const cwd = process.cwd();

const loader = {
  test: /\.less$/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
    { loader: 'postcss-loader'},
    { loader: 'less-loader' },
  ]
}

module.exports = loader;

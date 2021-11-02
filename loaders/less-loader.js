const path = require('path');
const cwd = process.cwd();

const loader = {
  test: /\.less$/,
  include: path.resolve(cwd, 'src'),
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'less-loader' },
  ]
}

module.exports = loader;

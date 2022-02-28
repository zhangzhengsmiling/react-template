// ice.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
/*eslint-env node*/
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = (config) => {
  // console.log(config)
  const _config = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[chunkhash:8].js',
    },
  };

  return merge(config, _config);
};

// ice.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
/*eslint-env node*/
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = (config) => {
  const loaderCss = config.module.rules[8];
  const loaderCssModule = config.module.rules[9];
  loaderCssModule.include = [loaderCssModule.include, path.resolve(__dirname, 'node_modules')];
  loaderCss.include = [loaderCss.include, path.resolve(__dirname, 'node_modules')];
  const _config = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[chunkhash:8].js',
    },
  };

  return merge(config, _config);
};

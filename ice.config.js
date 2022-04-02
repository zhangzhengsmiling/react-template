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
  console.log(config.module.rules[1].use[1]);
  const _config = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[chunkhash:8].js',
    },
    module: {
      rules: [
        {
          test: /.tsx$|.ts$/,
          include: /src/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                plugins: [
                  [
                    '@babel/plugin-proposal-pipeline-operator',
                    { topicToken: '^^', proposal: 'fsharp' },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
  };
  return merge(config, _config);
};

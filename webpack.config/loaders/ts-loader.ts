import path from 'path';
const cwd = process.cwd();

const loader = {
  test: /\.(ts|tsx)$/,
  include: path.resolve(cwd, 'src'),
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      }
    }
  ]
}

export default loader;

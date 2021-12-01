# React Template

### ***简介***

- git地址：https://github.com/zhangzhengsmiling/react-template
- 集成功能：
  - 支持语法js,jsx,ts,tsx,less,scss
  - 基础的font和图片，可以通过import的方式转成url
  - 支持css模块化，后缀为.module.less或者.module.scss的样式文件支持模块化引入，避免污染全局
  - 支持注入config.js可以作为全局变量注入，dev编译时，注入config.dev.js;prod编译时，注入config.prod.js
  - Eslint/lint-staged husky commitlint

### ***webpack模块***

#### Loaders

- js loader

  - babel-loader:使用babel编译js代码，使用babel插件
  - @babel/preset-env
  - @babel/preset-react，编译react的jsx
  - js资源的编译也可以使用esbuild-loader

- ts loaders
  关于ts的编译，本人尝试了几种编译方式

    1. esbuilder-loader

       - 基于GO语言写的，整体编译速度上，单独使用esbuilder会更快。具体可以看下Vite的打包速度，之前团队使用Vite做dev编译，可以达到500ms左右的速度
       - cache-loader对于esbulder-loader的优化不是很明显

    2. babel-loader + tsc类型校验

       Babel-loader不需要读取解析tsconfig文件，因此在编译速度上会比ts-loader快，但相较于ts-loader会缺少必要的类型校验，所以可以在启动脚本中加上tsc --watch去做类型上的校验

    3. ts-loader

  **针对ts编译时间做了个简单的记录**

  | loaders                               | time1   | time2  | time3  | time4  |
  | ------------------------------------- | ------- | ------ | ------ | ------ |
  | Cache-loader&ts-loader                | 13990ms | 6674ms | 6924ms | 6685ms |
  | Babel-loader_@babel/preset-typescript | 8424ms  | 8507ms | 8193ms |        |
  | Babel-loader&cache-loader             | 9211ms  | 6212ms | 6085ms | 5883ms |
  | Esbuilder-loader                      | 6255ms  | 6156ms | 6244ms |        |
  | Esbuilder-loader&cache-loader         | 6359ms  | 5982ms | 6104ms |        |

- Less-loader/Sass-loader

  1. 支持less和sass编译，对于less，sass先经过less-loader/sass-loader，然后过css-loader，然后有mini-css-extract-plugin/loader抽离成单独的css文件
  2. css-loader支持两种模式：一种是全局css模式，文件名以.sass/.scss/.less作为后缀；另一种是支持模块化css，文件名以.module.scss/.module.sass/.module.less作为后缀

- font-loader/img-loader

  1. 使得图片文件可以通过import的方式生成资源路径

     ```js
     // ./img.png

     // ./*.js
     import IMG_URL frmo './img.png';

     ...

     ```

#### Plugins


### ***CI工具集成***

#### husky

#### eslint

#### lint-staged

#### commitlint

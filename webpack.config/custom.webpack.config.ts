export default (webpackConfig: any, external: any) => {
  console.log(webpackConfig.module.rules, external);
}

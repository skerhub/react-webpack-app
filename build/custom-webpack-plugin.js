class PrintWebpackPlugin {

  constructor(config) {
  }

  apply(compiler) {
   compiler.hooks.environment.tap('myplugin',params => {
        console.log('自定义plugin')
        console.log('参数',params)
        console.log('compiler',compiler)
   })
  }
}
module.exports = PrintWebpackPlugin
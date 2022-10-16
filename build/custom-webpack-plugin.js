class PrintWebpackPlugin {

  constructor(config) {
  }

  apply(compiler) {
   compiler.hooks.environment.tap('myplugin',params => {
       
   })
  }
}
module.exports = PrintWebpackPlugin
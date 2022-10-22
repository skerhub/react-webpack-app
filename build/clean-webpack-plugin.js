const fs = require("fs")
const path = require("path")
function deleteFile(delPath, direct) {
  delPath = direct ? delPath : path.join(__dirname, delPath)
  try {
    if (fs.existsSync(delPath)) {
      fs.unlinkSync(delPath)
    } else {
      console.log("inexistence path：", delPath)
    }
  } catch (error) {
    console.log("del error", error)
  }
}
function deleteFolder(delPath) {
  // delPath = path.join(__dirname, delPath)

  try {
    if (fs.existsSync(delPath)) {
      const delFn = function (address) {
        const files = fs.readdirSync(address)
        for (let i = 0; i < files.length; i++) {
          const dirPath = path.join(address, files[i])
          if (fs.statSync(dirPath).isDirectory()) {
            delFn(dirPath)
          } else {
            deleteFile(dirPath, true)
          }
        }
        fs.rmdirSync(address)
      }
      delFn(delPath)
    } else {
      console.log("do not exist: ", delPath)
    }
  } catch (error) {
    console.log("del folder error", error)
  }
}
class PrintWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("myplugin", (com, cb) => {
      deleteFolder(compiler.outputPath)
    })
  }
}
module.exports = PrintWebpackPlugin

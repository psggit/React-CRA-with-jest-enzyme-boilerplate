const path = require('path')

module.exports = (config) => {
  config.resolve = {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Container: path.resolve(__dirname, "./src/container"),
      Sass: path.resolve(__dirname, "./src/sass"),
      Utils: path.resolve(__dirname, "./src/utils")
    }
  };
  return config
}
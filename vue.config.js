const { defineConfig } = require('@vue/cli-service')
// const resolve = dir => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:(config)=>{
    config.resolve.alias
        // .set('@',resolve('./src'))
        // .set('components',resolve('./src/components'))
        // .set('views',resolve('./src/views'))
        // .set('assets',resolve('./src/assets'))
      //set第一个参数：设置的别名，第二个参数：设置的路径
  }
})

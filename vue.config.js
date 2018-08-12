module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.js'
      }
    },
    devServer: {
      proxy: {
        '/v1': {
          target: 'http://shop.f83a.cn/v1',
          changeOrigin: true,
          pathRewrite: {
            '^/v1': '/v1'
          }
        }
      }
    }
  }
}

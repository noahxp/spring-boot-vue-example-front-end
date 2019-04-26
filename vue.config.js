// vue config ,  configuration reference : https://cli.vuejs.org/config/#vue-config-js

module.exports = {
  filenameHashing: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
  devServer: {
    port: 8888,
    proxy: 'http://localhost:8080'
  }
}

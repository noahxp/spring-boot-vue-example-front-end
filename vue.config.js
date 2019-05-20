// vue config ,  configuration reference : https://cli.vuejs.org/config/#vue-config-js  , https://github.com/vuejs/vue-cli/issues/1967

const staticFileVersion = new Date().getTime();

module.exports = {
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
  devServer: {
    port: 8888,
    proxy: 'http://localhost:8080'
  },

  /*
   * add timestamp to url, avoid cache
   */
  chainWebpack: (config) => {
    config.module
    .rule('images')
    .use('url-loader')
    .tap(options => Object.assign({}, options, { name: '[name].[ext]?ver=' + staticFileVersion }));
  },
  css: {
    extract: {
      filename: '[name].css?ver=' + staticFileVersion,
      chunkFilename: '[name].css?ver=' + staticFileVersion,
    },
  },
  configureWebpack: {
    output: {
      filename: '[name].js?ver=' + staticFileVersion,
      chunkFilename: '[name].js?ver=' + staticFileVersion,
    }
  }

}



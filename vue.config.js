const webpack = require('webpack');

module.exports = {
  productionSourceMap: false,

  chainWebpack: config => {

    /* Export package.json content to be available in the app */
    config.plugin('define')
      .tap(args => {
        args[0]['process.env']['VERSION'] = JSON.stringify(require('./package.json').version);
        return args;
      });
  },

  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ],
  },
  pwa: {
    name: 'covid-me-rerporto.mx',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};

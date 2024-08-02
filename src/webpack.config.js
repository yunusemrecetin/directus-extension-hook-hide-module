const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // diğer ayarlar...
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

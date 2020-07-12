const { environment } = require('@rails/webpacker')
var webpack = require("webpack");
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});

module.exports = environment

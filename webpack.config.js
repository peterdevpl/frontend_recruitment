var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    // path: 'dist'
    filename: './dist/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'fronted_recruitment',
      template: 'my-index.html', //load
    })
  ]
};

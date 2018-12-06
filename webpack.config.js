const path = require('path');

module.exports = {
  entry: {
    index:'./src/pages/login/index.js',
    validation: './src/pages/login/validation.js',
    firebase: './src/pages/login/firebase-config.js',
    home: './src/pages/home/home.js', 
    forum: './src/pages/forum/forum.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
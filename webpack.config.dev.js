import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // TODO: commented out properties relating to changes in the Webpack API 1.x => ^2.x
  // debug: true,
  devtool: 'inline-source-map', // check other settings. Quality vs speed
  // noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create index.html that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      // TODO: Webpack API requires 'loader' suffix in ^2.x
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
    ]
  }
}

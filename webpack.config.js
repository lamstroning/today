const path = require('path')

module.exports = {
  entry: './src/root/index.tsx',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используем babel-loader для tsx и ts
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@shared': path.join(__dirname, 'src/shared'),
      '@components': path.join(__dirname, 'src/components'),
      '@home': path.resolve(__dirname, 'src/pages/Home'),
    },
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
}

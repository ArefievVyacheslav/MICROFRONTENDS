const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Расширения файлов изображений, которые вы хотите обрабатывать
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Имя файла после сборки
              outputPath: 'images/', // Путь, куда будут сохранены изображения
            },
          },
        ],
      }
    ],
  },
  resolve: {
    alias: {
      process: "process/browser"
    }
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      title: 'Micro Frontends',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
}

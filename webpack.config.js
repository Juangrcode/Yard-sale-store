const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Component } = require('react');
const { dirname } = require('path');
//de html

module.exports = {
  entry: './src/index.js', // punto de entrada
  output: {
    // lugar al que saldrán todos los archivos
    path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
    filename: 'bundle.js', // nombre del archivo js resultante
    publicPath: './',
  },
  mode: 'development',
  resolve: {
    // extensión de archivos a tomar en cuenta
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
  },
  module: {
    // loaders para cada tipo de archivo
    rules: [
      // reglas para usar
      {
        test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
        exclude: /node_modules/, // siempre excluir node modules
        use: {
          // indicamos el loader
          loader: 'babel-loader', // babel
        },
      },
      {
        test: /\.html$/, // extensiones html
        use: [
          {
            loader: 'html-loader', // loader para usar
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // plugins
    new HtmlWebpackPlugin({
      // instanciamos el plugin para html
      template: './public/index.html', // archivo raíz a transformar
      filename: './index.html', // el archivo resultante
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    allowedHosts: path.join(__dirname, 'dist'), // contentBase corresponde a webpack 4, ahora en Webpack 5 se usa allowedHosts
    port: 3006,
    compress: true,
    historyApiFallback: true,
  },
};
// webpack.config.js

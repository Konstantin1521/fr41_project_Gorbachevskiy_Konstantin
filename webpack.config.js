const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { options } = require('yargs')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
          { test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        // {
        //     test: /\.pug$/,
        //   loader: 'pug-loader',
        //   options: {
        //   pretty: true
        //   }
        // }
        ]
      },
      optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          `...`,
          new CssMinimizerPlugin(),
        ],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        // new HtmlWebpackPlugin(
        //     {
        //         template: "./src/index.pug",
        //         filename: 'index.html',
        // }
        // )
    ]
}
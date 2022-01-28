const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        clean: true,
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    sources: false,
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtract.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                        sourceMap: true,
                        sassOptions: {
                            outputStyle: "compressed",
                        },
                        },
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: "./src/index.html"
        }),
        new MiniCssExtract({
            filename: "[name].[fullhash].css",
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets/" },
            ],
        }),
    ],
};

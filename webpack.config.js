const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//动态引用webpack打包产生的文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//在每次构建前清理/dist文件A级

module.exports = {
    context: path.join(__dirname),
    entry: {
        app: "./src/js/index.js",
        // print: './src/js/print.js'
    },//多个入口地址
    devtool: 'inline-source-map',//将编译后的代码映射回原始源代码，用于问题定位
    devServer: {
        contentBase: './dist',
        // hot: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,//正则，解析所有的js文件
                exclude: /(node_modules)/,//跳过的文件
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//构建前清理dist文件夹
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
};

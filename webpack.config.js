const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: "./src/js/index.js",//入口地址
    devtool: 'inline-source-map',//将编译后的代码映射回原始源代码，用于问题定位
    devServer: {
        contentBase: './dist',
        hot: true
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
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].bundle.js"
    },
};

const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports={
    entry:'./src/index.tsx',
    output:{
        filename:'bundle.js',
        path:__dirname +'/public'
    },
    devServer: {
        contentBase:  path.join(__dirname, "public"),
        hot: true, //热更新
        port:8888, //端口
        open: true, //是否自动打开浏览器
        inline:true //内联模式
        
    },
    devtool:'source-map',
    resolve:{
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()  //让 webpack 启动全局 HMR
    ]
   
}
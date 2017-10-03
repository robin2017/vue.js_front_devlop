/**
 * Created by robin on 2017/10/1.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 页面入口文件配置
    entry: {
        index: './src/app.js'
    },
    // 入口文件输出配置
    output: {
        path: './dist', // 输出目录
        filename: '[name].[hash].js' // 设置输出文件名字，此例中为入口文件名字加上 hash 值。使用 hash 值的原因是生成新文件后避免缓存导致用户没有更新到新的 js 文件
    },
    module: {
        // 加载器配置
        // 加载器会把test所匹配的文件加入loader进行处理
        // 例如下面的babel，起到的作用就是将匹配到的js文件中下一代的JavaScript(即使用ES2015 、es6等特性的JavaScript)编译成能在当前浏览器环境下运行的js代码
        loaders: [
            {
                test: /\.js$/, // test 即为匹配规则，此处即为将所有后缀为 .js 的文件加载进来
                loader: 'babel',  // loader 即为处理器，所有符合规则的文件会交由 loader进行处理
                exclude: /node_modules/ //
            },
// vue-loader是对于.vue文件专门的处理器，能将.vue文件中的模板、样式、js代码解析并编译成可执行的代码
            {
                test: /\.vue$/,
                loader: 'vue'
            },
        ]
    },
// plugins 为 webpack 的插件功能，可利用一些第三方插件完成一些额外的操作
// 例如HtmlWebpackPlugin，这个插件可以帮助生成 HTML 文件，在 body 元素中使用script 来引用output中最后输出的js文件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })]
};
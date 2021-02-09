const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['./client/index.tsx', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false&reload=true'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Mern',
            template: path.resolve(__dirname, 'client', 'index.html'),
            filename: 'index.html',
        }),
    ],
}

const path = require('path');

const libraryName = 'node-fred';

const config = {
    entry: path.join(__dirname, 'src', 'index.js'),
    devtool: 'source-map',
    target: 'node',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'eslint-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./src'), 'node_modules'],
        extensions: ['.json', '.js']
    },
    plugins: [],
    externals: {
        axios: 'axios'
    }
};

module.exports = config;

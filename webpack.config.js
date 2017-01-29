var nodeExternals = require('webpack-node-externals');

module.exports = [
    {   
        name: 'Server-side application',
        entry: './server/app.js',
        output: {
            path: './bin',
            filename: 'app.bundle.js'
        },
        target: 'node',
        externals: [nodeExternals()],
        module: {
            loaders: [
                { test: /\.json$/, loader: 'json-loader' },
                { test: /\.js$/, loader: 'babel-loader' },
            ]
        },
        node: {
            console: true,
            fs: false,
            net: true,
            tls: false,
        },
    },
    {   
        name: 'Client-side application',
        entry: './client/main.js',
        output: {
            path: './static/js',
            filename: 'bundle.js'
        },
        target: 'web',
        module: {
            loaders: [
                { test: /\.json$/, loader: 'json-loader' },
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            ]
        },
    },
];

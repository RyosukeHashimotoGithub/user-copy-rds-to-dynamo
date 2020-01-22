const path = require('path');

module.exports = {
    mode: 'development', // "production" | "development" | "none"
    entry: './src/handlers/index.ts',
    target: 'node',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
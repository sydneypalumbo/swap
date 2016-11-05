module.exports = {
    entry: "./src/client.js",
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};
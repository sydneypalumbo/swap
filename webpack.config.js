module.exports = {
    entry: {
        "shop": './src/shop.js',
        "post": './src/post.js',
        "home": './src/home.js'
    },
    output: {
        path: './swap+sell',
        filename: '[name].bundle.js'
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
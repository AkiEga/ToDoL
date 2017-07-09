module.exports = {
    target: "electron",
    node: { __dirname: false, __filename: false },
    resolve: { extensions: [".js", ".jsx", ".css"] },
    module: { 
        rules: [ 
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }, 
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
            } 
        ] 
    }, 
    entry: { 
        "main/index": "./src/main/index.js", 
        "render/App": "./src/render/App.jsx"
    }, 
    output: { 
        filename: ".tmp/[name].js"
    },
    devtool: "source-map"
}
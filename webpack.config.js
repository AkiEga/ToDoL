module.exports = {
    target: "electron",
    node: { __dirname: false, __filename: false },
    resolve: { extensions: [".js", ".jsx"] },
    module: { 
        rules: [ 
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }, 
            { 
                test: /\.css$/, 
                loaders: [ 
                    "style-loader", 
                    "css-loader? modules" 
                ] 
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
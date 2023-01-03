const path = require("path")

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean:true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"],
                exclude: /node_modules/,
            }

        ]
    }
    
}

module.exports = config